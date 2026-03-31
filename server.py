#!/usr/bin/env python3
"""TagClaw Agent Visualization Dashboard Server — port 7890"""

from __future__ import annotations

import glob
import json
import os
import re
import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

# ── Paths ──────────────────────────────────────────────────────────────────
WORKSPACE = Path(__file__).parent.parent.parent  # ~/.openclaw/workspace
RUNTIME   = WORKSPACE / "runtime"
STATIC    = Path(__file__).parent / "static"

app = FastAPI(title="TagClaw Viz", version="1.0.0")
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request as StarletteRequest

class NoCacheMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: StarletteRequest, call_next):
        response = await call_next(request)
        if request.url.path.startswith("/static/"):
            response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
            response.headers["Pragma"] = "no-cache"
            response.headers["Expires"] = "0"
        return response

app.add_middleware(NoCacheMiddleware)
app.mount("/static", StaticFiles(directory=str(STATIC)), name="static")


# ── Helpers ────────────────────────────────────────────────────────────────

def _load(path: Path) -> dict | list | None:
    """Load a JSON file; return None if missing or invalid."""
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def _safe(path: str) -> dict | list | None:
    return _load(RUNTIME / path)


def _classify_social_actor(ev: dict[str, Any]) -> str:
    """Infer which agent authored a social action history item.

    Uses explicit actor field first (v2 schema), then falls back to draft_ref
    and source/agent heuristics for legacy records.
    """
    # v2: explicit actor field
    actor = str(ev.get("actor") or "").lower()
    if actor in ("main", "bookmarker"):
        return actor

    # Legacy fallback: draft_ref
    draft_ref = str(ev.get("draft_ref") or "").lower()
    if "bookmarker" in draft_ref:
        return "bookmarker"
    if "main" in draft_ref:
        return "main"

    for key in ("source_agent", "source", "agent"):
        val = str(ev.get(key) or "").lower()
        if "bookmarker" in val:
            return "bookmarker"
        if "main" in val:
            return "main"

    return "main"


def _split_social_actions(items: list[dict[str, Any]] | None) -> dict[str, list[dict[str, Any]]]:
    grouped = {"main": [], "bookmarker": []}
    for ev in (items or []):
        grouped[_classify_social_actor(ev)].append(ev)
    return grouped


def _to_float(v: Any) -> float | None:
    try:
        if v is None or v == "" or str(v).lower() == "partial":
            return None
        return float(v)
    except Exception:
        return None


def _load_tas_history(limit: int = 20) -> list[dict[str, Any]]:
    path = WORKSPACE / "memory" / "results.tsv"
    if not path.exists():
        return []

    points: list[dict[str, Any]] = []
    try:
        for raw in path.read_text(encoding="utf-8").splitlines():
            if not raw.strip():
                continue
            parts = raw.split("\t")

            # Legacy schema: cycle_id, ts, tas_total, tas_social, tas_economic, tas_trade, ...
            if len(parts) >= 6 and parts[1].startswith("20"):
                points.append({
                    "ts": parts[1],
                    "tas_total": _to_float(parts[2]),
                    "tas_social": _to_float(parts[3]),
                    "tas_trade": _to_float(parts[5]),
                })
                continue

            # Newer lightweight schema: ts, main, heartbeat, TAS=1.292, OP=..., VP=...
            if len(parts) >= 4 and parts[0].startswith("20") and parts[3].startswith("TAS="):
                points.append({
                    "ts": parts[0],
                    "tas_total": _to_float(parts[3].split("=", 1)[1]),
                    "tas_social": None,
                    "tas_trade": None,
                })
    except Exception:
        return []

    return points[-limit:]


def _is_within_hours(date_str: str, hours: int) -> bool:
    """Check if a date string represents a time within the last N hours."""
    cutoff = datetime.now(timezone.utc) - timedelta(hours=hours)
    for fmt in ("%a %b %d %H:%M:%S +0000 %Y", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%d"):
        try:
            dt = datetime.strptime(date_str.strip(), fmt).replace(tzinfo=timezone.utc)
            return dt >= cutoff
        except ValueError:
            continue
    return False


def _parse_x_tweets(hours: int = 24, limit: int = 20) -> list[dict]:
    """Parse memory/x-latest-tweets.md → tweets within last N hours.
    Supports both the new compact format (## id | date) and old detailed format (### id | date).
    Falls back to most recent `limit` if none found in the time window.
    """
    path = WORKSPACE / "memory" / "x-latest-tweets.md"
    if not path.exists():
        return []

    cutoff = datetime.now(timezone.utc) - timedelta(hours=hours)
    tweets: list[dict] = []
    current: dict | None = None

    def _try_parse_date(s: str):
        for fmt in ("%a %b %d %H:%M:%S +0000 %Y", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%d"):
            try:
                return datetime.strptime(s.strip(), fmt).replace(tzinfo=timezone.utc)
            except ValueError:
                continue
        return None

    try:
        lines = path.read_text(encoding="utf-8").splitlines()
        for line in lines:
            # New compact format: ## 1234567890 | Fri Mar 27 08:27:32 +0000 2026
            m = re.match(r'^## (\d{10,}) \| (.+)$', line)
            if m:
                if current:
                    tweets.append(current)
                dt = _try_parse_date(m.group(2))
                current = {
                    "id": m.group(1), "date": m.group(2).strip(),
                    "dt": dt, "type": "推文", "content": "", "topics": [], "interactions": "",
                }
                continue
            # Old detailed format: ### id | date
            m2 = re.match(r'^### (\d{10,}) \| (.+)$', line)
            if m2:
                if current:
                    tweets.append(current)
                dt = _try_parse_date(m2.group(2))
                current = {
                    "id": m2.group(1), "date": m2.group(2).strip(),
                    "dt": dt, "type": "", "content": "", "topics": [], "interactions": "",
                }
                continue
            if current is None:
                continue
            # In compact format, first non-header non-blank line = content
            if current["content"] == "" and line.strip() and not line.startswith('#') and not line.startswith('>') and not line.startswith('*'):
                current["content"] = line.strip()[:150]
                continue
            tm = re.match(r'^\*\*类型\*\*[:：]\s*(.+)$', line)
            if tm:
                current["type"] = tm.group(1).strip(); continue
            cm = re.match(r'^\*\*(?:内容|标题)\*\*[:：]\s*(.+)$', line)
            if cm and not current["content"]:
                current["content"] = cm.group(1).strip()[:150]; continue
            im = re.match(r'^\*\*互动\*\*[:：]\s*(.+)$', line)
            if im:
                current["interactions"] = im.group(1).strip(); continue
            hm = re.match(r'^\*\*话题\*\*[:：]\s*(.+)$', line)
            if hm:
                current["topics"] = [w.lstrip('#') for w in hm.group(1).split() if w.startswith('#')]
    except Exception:
        pass
    if current:
        tweets.append(current)

    # Filter to time window; fallback to most recent if window is empty
    in_window = [t for t in tweets if t.get("dt") and t["dt"] >= cutoff]
    result = in_window if in_window else tweets
    # Strip internal dt field before returning
    for t in result:
        t.pop("dt", None)
    return result[:limit]


def _parse_x_bookmarks(hours: int = 168, limit: int = 20) -> list[dict]:
    """Parse memory/x-bookmarks-categorized.md → bookmarks within last N hours.

    Supports two entry formats written by different sync scripts:
      Format A (legacy): ### YYYY-MM-DD | @author | 得分:N
      Format B (bird-x-sync): ## [YYYY-MM-DD] [Category] Title

    Falls back to most recent `limit` entries if none found in time window.
    """
    path = WORKSPACE / "memory" / "x-bookmarks-categorized.md"
    if not path.exists():
        return []

    cutoff = datetime.now(timezone.utc) - timedelta(hours=hours)
    bookmarks: list[dict] = []
    current_category = ""
    current: dict | None = None

    def _try_parse_date(s: str):
        for fmt in ("%Y-%m-%d", "%Y-%m-%dT%H:%M:%S", "%Y/%m/%d"):
            try:
                return datetime.strptime(s.strip()[:10], fmt).replace(tzinfo=timezone.utc)
            except ValueError:
                continue
        return None

    try:
        for line in path.read_text(encoding="utf-8").splitlines():

            # ── Format A: ### YYYY-MM-DD | @author | 得分:N ──
            entry_a = re.match(r'^### (.+?) \| (.+)$', line)
            if entry_a:
                if current:
                    bookmarks.append(current)
                date_str = entry_a.group(1).strip()
                rest = entry_a.group(2).strip()
                # rest may be "@author | 得分:N" or just a title
                parts = [p.strip() for p in rest.split('|')]
                author = parts[0].lstrip('@') if parts else ""
                dt = _try_parse_date(date_str)
                current = {
                    "date": date_str,
                    "title": rest,
                    "category": current_category,
                    "author": author,
                    "dt": dt,
                    "summary": "", "url": "",
                }
                continue

            # ── Format B: ## [YYYY-MM-DD] [Category] Title ──
            entry_b = re.match(r'^## \[(\d{4}-\d{2}-\d{2})\] \[([^\]]+)\] (.+)$', line)
            if entry_b:
                if current:
                    bookmarks.append(current)
                date_str = entry_b.group(1).strip()
                category = entry_b.group(2).strip()
                title = entry_b.group(3).strip()
                dt = _try_parse_date(date_str)
                current_category = category
                current = {
                    "date": date_str,
                    "title": title,
                    "category": category,
                    "author": "",
                    "dt": dt,
                    "summary": "", "url": "",
                }
                continue

            # ── Generic ## section header (not an entry) ──
            cat_m = re.match(r'^## (.+)$', line)
            if cat_m and not entry_b:
                current_category = cat_m.group(1).strip()
                # Do NOT flush current here — ## lines may appear inside entries
                continue

            if current is None:
                continue

            # Author field
            am = re.match(r'^\*\*作者\*\*[:：]\s*(.+)$', line)
            if am:
                if not current["author"]:
                    current["author"] = am.group(1).strip()
                continue

            # Format B: "Primary tag: X" line → use as category hint
            pt = re.match(r'^Primary tag:\s*(.+)$', line)
            if pt and not current.get("category"):
                current["category"] = pt.group(1).strip()
                continue

            # URL line: → https://...
            um = re.match(r'^→\s*(https?://\S+)', line)
            if um:
                current["url"] = um.group(1).strip()
                # Also extract @username from URL for Format B entries
                if not current["author"]:
                    um2 = re.search(r'x\.com/([^/]+)/', um.group(1))
                    if um2:
                        current["author"] = '@' + um2.group(1)
                continue
            um3 = re.match(r'^\*\*URL\*\*[:：]\s*(https?://\S+)', line)
            if um3:
                current["url"] = um3.group(1).strip(); continue

            # Summary fields
            sm = re.match(r'^\*\*(?:内容|内容摘要)\*\*[:：]\s*(.+)$', line)
            if sm and not current["summary"]:
                current["summary"] = sm.group(1).strip()[:200]; continue

            # For Format B entries: first non-empty, non-keyword line becomes summary
            stripped = line.strip()
            if (stripped
                    and not stripped.startswith('#')
                    and not stripped.startswith('**')
                    and not stripped.startswith('Primary tag:')
                    and not stripped.startswith('Keywords:')
                    and not stripped.startswith('From my X bookmarks:')
                    and not stripped.startswith('My take:')
                    and not stripped.startswith('→')
                    and not stripped.startswith('#bookmark')
                    and not current["summary"]):
                # Use "From my X bookmarks:" content as summary
                pass  # already handled above; keep loop clean

            # Explicit "From my X bookmarks:" prefix → grab as summary
            fmx = re.match(r'^From my X bookmarks:\s*(.+)$', stripped)
            if fmx and not current["summary"]:
                current["summary"] = fmx.group(1).strip()[:200]; continue

    except Exception:
        pass

    if current:
        bookmarks.append(current)

    # Sort by date descending
    bookmarks.sort(key=lambda b: b.get("dt") or datetime.min.replace(tzinfo=timezone.utc), reverse=True)

    # Filter to time window; fallback to most recent if window is empty
    in_window = [b for b in bookmarks if b.get("dt") and b["dt"] >= cutoff]
    result = in_window if in_window else bookmarks
    for b in result:
        b.pop("dt", None)
    return result[:limit]


def _load_twin_recognition() -> dict:
    path = WORKSPACE / 'memory' / 'twin-recognition.json'
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return {}


def _load_x_sync() -> dict:
    """Read x-sync status and timestamp, preferring bookmarker runtime over memory."""
    runtime_path = Path(__file__).parent.parent.parent / 'runtime' / 'bookmarker' / 'latest.json'
    memory_path = WORKSPACE / "memory" / "x-sync-latest.json"

    runtime_at = ''
    runtime_status = 'unknown'
    if runtime_path.exists():
        try:
            r = json.loads(runtime_path.read_text())
            runtime_at = r.get('updated_at') or r.get('generated_at') or ''
            runtime_status = r.get('status') or 'unknown'
        except Exception:
            pass

    memory_at = ''
    memory_status = 'unknown'
    if memory_path.exists():
        try:
            m = json.loads(memory_path.read_text())
            memory_at = m.get('fetched_at') or ''
            memory_status = m.get('status') or 'unknown'
        except Exception:
            pass

    best_at = runtime_at if runtime_at >= memory_at else memory_at
    best_status = runtime_status if runtime_at >= memory_at else memory_status

    return {
        'x_sync_status': best_status,
        'x_sync_at': best_at,
    }


# ── Trader event filter (module-level for reuse) ───────────────────────────

_ONCHAIN_ACTIONS   = {"buy", "sell", "swap", "stake", "unstake", "transfer"}
_CLAIM_FINAL_STATUS = {"settled", "completed", "confirmed", "claimed"}


def _trader_ev_is_real(ev: dict) -> bool:
    """
    Only include trader events that represent a real on-chain / wallet outcome:
    - buy/sell/swap/stake: must have tx_hash
    - claim: must have tx_hash OR final_status in settled/completed/confirmed
      OR status=ok + order_id present
    - Other actions: tx_hash present
    """
    action       = str(ev.get("action") or "").lower()
    status       = str(ev.get("status") or "").lower()
    tx_hash      = (ev.get("tx_hash") or "").strip()
    final_status = str(ev.get("final_status") or "").lower()

    if action in _ONCHAIN_ACTIONS:
        return bool(tx_hash)

    if action == "claim":
        order_id = (ev.get("order_id") or "").strip()
        if not order_id:
            remote_data = (ev.get("remote") or {}).get("response") or {}
            if isinstance(remote_data, dict) and "data" in remote_data:
                remote_data = remote_data["data"]
            order_id = (remote_data.get("orderId") or "").strip()
        return (bool(tx_hash) or
                (status == "ok" and bool(order_id)) or
                (final_status in _CLAIM_FINAL_STATUS))

    return bool(tx_hash)


def _load_trade_actions(limit: int = 20) -> list[dict]:
    """Read last 7 days of execution ledger, filter real events, dedup, return last `limit`."""
    today = datetime.now(timezone.utc).date()
    items: list[dict] = []
    for delta in range(7):
        d = today - timedelta(days=delta)
        path = RUNTIME / "trader" / f"executions-{d}.json"
        rec = _load(path) or {}
        for ev in (rec.get("items") or []):
            if not _trader_ev_is_real(ev):
                continue
            tx_hash = (ev.get("tx_hash") or "")
            items.append({
                "ts":          ev.get("ts") or "",
                "action":      ev.get("action", "?"),
                "tick":        ev.get("tick", ""),
                "amount":      ev.get("amount"),
                "amount_unit": ev.get("amount_unit", ""),
                "usd":         ev.get("usd"),
                "tx_hash":     tx_hash[:16] if tx_hash else "",
                "status":      ev.get("status", ""),
                "_order_id":   (ev.get("order_id") or
                               (((ev.get("remote") or {}).get("response") or {}).get("data") or {}).get("orderId") or ""),
                "_id":         ev.get("id", ""),
            })

    # Sort descending
    items.sort(key=lambda x: x.get("ts", ""), reverse=True)

    # Deduplicate by order_id (claims) or id
    seen: set[str] = set()
    deduped: list[dict] = []
    for it in items:
        uid = it.get("_id") or ""
        if it["action"].lower() == "claim" and it.get("_order_id"):
            uid = f"claim:{it['_order_id']}"
        if not uid:
            uid = f"{it['ts']}:{it['action']}:{it['tick']}"
        if uid not in seen:
            seen.add(uid)
            out = {k: v for k, v in it.items() if not k.startswith("_")}
            deduped.append(out)

    return deduped[:limit]


# ── Social Pipeline Builders ───────────────────────────────────────────────

def _build_bookmarker_social_pipeline(
    auto_intent: dict, drafts: dict, execution: dict, write_state: dict,
) -> dict:
    """Build bookmarker social execution pipeline summary for dashboard."""
    # Step 1: Autonomy Intent
    ai_mode = auto_intent.get("mode", "—")
    ai_reason = auto_intent.get("reason", "")
    ai_recommended = auto_intent.get("recommended_actions") or []

    # Step 2: Social Drafts
    draft_list = drafts.get("drafts") or []
    draft_types: dict[str, int] = {}
    for d in draft_list:
        dt = d.get("type", "unknown")
        draft_types[dt] = draft_types.get(dt, 0) + 1

    # Step 3: Execution
    exec_status = execution.get("status", "—")
    exec_summary = execution.get("summary") or {}
    exec_at = execution.get("generated_at", "")
    exec_mode = execution.get("autonomy_mode", "")

    # Step 4: Breaker
    breaker = write_state.get("breaker") or {}
    breaker_state = breaker.get("state", "—")
    breaker_consecutive = breaker.get("consecutive_1010_failures", 0)
    breaker_until = breaker.get("until")

    return {
        "steps": [
            {
                "id": "autonomy",
                "label": "Autonomy Intent",
                "status": "active" if ai_mode in ("standard", "active") else ("hold" if ai_mode == "conservative" else "unknown"),
                "data": {"mode": ai_mode, "reason": ai_reason[:120], "recommended_actions": ai_recommended},
            },
            {
                "id": "drafts",
                "label": "Social Drafts",
                "status": "ok" if draft_list else "empty",
                "data": {"count": len(draft_list), "types": draft_types},
            },
            {
                "id": "execution",
                "label": "Execution",
                "status": exec_status,
                "data": {
                    "attempted": exec_summary.get("attempted", 0),
                    "succeeded": exec_summary.get("succeeded", 0),
                    "failed": exec_summary.get("failed", 0),
                    "noop": exec_summary.get("noop", 0),
                    "executed_at": exec_at,
                    "autonomy_mode": exec_mode,
                },
            },
            {
                "id": "breaker",
                "label": "Write Breaker",
                "status": "open" if breaker_state == "open" else "closed",
                "data": {
                    "state": breaker_state,
                    "consecutive_failures": breaker_consecutive,
                    "until": breaker_until,
                },
            },
        ],
    }


def _build_main_social_pipeline(social_intent: dict, last_decision: dict) -> dict:
    """Build main agent social execution pipeline summary for dashboard."""
    # Step 1: Gate Checks
    meta = social_intent.get("meta") or {}
    gate_checks = meta.get("gate_checks") or {}
    payload = social_intent.get("payload") or {}
    authorized = payload.get("authorized", False)
    intent_status = social_intent.get("status", "—")
    intent_reason = social_intent.get("reason", "")

    # Step 2: Social Decision
    social_decision = last_decision.get("social_decision", "—")

    # Step 3: Actions authorized
    actions = payload.get("actions") or []
    action_types: dict[str, int] = {}
    for a in actions:
        at = a.get("type", "unknown")
        action_types[at] = action_types.get(at, 0) + 1

    return {
        "steps": [
            {
                "id": "gate_checks",
                "label": "Gate Checks",
                "status": "pass" if all(gate_checks.values()) else ("partial" if any(gate_checks.values()) else "blocked"),
                "data": gate_checks,
            },
            {
                "id": "social_intent",
                "label": "Social Intent",
                "status": intent_status,
                "data": {
                    "authorized": authorized,
                    "reason": intent_reason[:120],
                    "action_count": len(actions),
                    "action_types": action_types,
                },
            },
            {
                "id": "decision",
                "label": "Decision",
                "status": social_decision,
                "data": {"social_decision": social_decision},
            },
        ],
    }


# ── Routes ─────────────────────────────────────────────────────────────────

@app.get("/")
def index():
    resp = FileResponse(str(STATIC / "index.html"))
    resp.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    resp.headers["Pragma"] = "no-cache"
    resp.headers["Expires"] = "0"
    return resp


@app.get("/api/status")
def api_status():
    """Aggregate snapshot of all three agents."""

    # ── Shared / health ──
    runtime_status = _safe("shared/runtime-status.json") or {}
    health         = _safe("main/runtime-health.json")   or {}

    # ── Main ──
    input_pkt    = _safe("main/input-packet.json")   or {}
    tas_latest   = _safe("main/tas-latest.json")     or {}
    last_dec     = _safe("main/last-decision.json")  or {}
    social_int   = _safe("main/social-intent.json")  or {}

    # ── Bookmarker ──
    topic_brief  = _safe("bookmarker/topic-brief.json")         or {}
    src_health   = _safe("bookmarker/source-health.json")       or {}
    bm_cands     = _safe("bookmarker/content-candidates.json")  or {}
    auto_intent  = _safe("bookmarker/autonomy-intent.json")     or {}
    social_hist  = _safe("shared/social-history.json")          or {}
    social_split = _split_social_actions(social_hist.get("items") or [])
    social_drafts = _safe("bookmarker/social-drafts.json")      or {}
    bm_exec      = _safe("bookmarker/social-execution.json")    or {}
    write_state  = _safe("shared/social-write-state.json")      or {}

    # ── Trader ──
    wallet   = _safe("trader/wallet-snapshot.json") or {}
    rewards  = _safe("trader/reward-status.json")   or {}
    tas_trd  = _safe("trader/tas-trade.json")       or {}
    risk     = _safe("trader/risk-status.json")     or {}
    onchain  = _safe("trader/onchain-positions.json") or {}

    # ── Claude Dispatch / Dev ──
    dev_status = _safe("dev/status.json") or {}
    dev_result = _safe("dev/result.json") or {}

    # strip private key fields defensively
    if "private_key" in wallet:
        del wallet["private_key"]

    now_utc = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    tas_history = _load_tas_history(limit=20)
    current_ts = tas_latest.get("updated_at")
    if current_ts:
        current_point = {
            "ts": current_ts,
            "tas_total": _to_float(tas_latest.get("tas_total")),
            "tas_social": _to_float(tas_latest.get("tas_social")),
            "tas_trade": _to_float(tas_latest.get("tas_trade")),
        }
        if not tas_history or tas_history[-1].get("ts") != current_ts:
            tas_history.append(current_point)
        tas_history = tas_history[-20:]

    return JSONResponse({
        "fetched_at": now_utc,
        "runtime_status": runtime_status,
        "health": health,
        "main": {
            "input_packet":   input_pkt,
            "tas_latest":     tas_latest,
            "tas_history":    tas_history,
            "last_decision":  last_dec,
            "social_intent":  social_int,
            "social_actions": list(reversed((social_split.get("main") or [])[-20:])),
            "social_pipeline": _build_main_social_pipeline(social_int, last_dec),
        },
        "bookmarker": {
            "topic_brief":          topic_brief,
            "source_health":        src_health,
            "content_candidates":   bm_cands,
            "autonomy_intent":      auto_intent,
            "social_drafts":        social_drafts,
            "social_actions":       list(reversed((social_split.get("bookmarker") or [])[-20:])),
            "social_pipeline":      _build_bookmarker_social_pipeline(auto_intent, social_drafts, bm_exec, write_state),
            "x_posts":              (_xp := _parse_x_tweets(hours=24, limit=20)),
            "x_posts_window":       "24h" if _xp and _xp[0].get("date") and
                                    _is_within_hours(_xp[0].get("date",""), 24) else "recent",
            "x_bookmarks":          (_xb := _parse_x_bookmarks(hours=24, limit=20)),
            "x_bookmarks_window":   "24h" if _xb and _xb[0].get("date") and
                                    _is_within_hours(_xb[0].get("date",""), 24) else "recent",
            **_load_x_sync(),
            "twin_recognition": _load_twin_recognition(),
        },
        "trader": {
            "wallet_snapshot":   wallet,
            "reward_status":     rewards,
            "tas_trade":         tas_trd,
            "risk_status":       risk,
            "onchain_positions": onchain,
            "trade_actions":     _load_trade_actions(limit=20),
        },
        "dev_dispatch": {
            "status": dev_status,
            "result": dev_result,
        },
    })


@app.get("/api/timeline")
def api_timeline():
    """Merge social history + trader executions (last 3 days), 30 most recent."""

    items: list[dict] = []

    _SOCIAL_OK = {"ok", "success", ""}   # empty result_status = older records pre-dating result tracking
    _SOCIAL_SKIP = {"noop", "failed", "blocked", "pending", "skipped"}

    # Social history — show all executed actions (exclude noop/failed/blocked)
    social = _safe("shared/social-history.json") or {}
    for ev in (social.get("items") or []):
        result_status = str(ev.get("result_status") or "").lower()
        if result_status in _SOCIAL_SKIP:
            continue
        ts = ev.get("executed_at") or ev.get("ts") or ""
        target = ev.get("target_key") or ev.get("note") or ""
        # Build a readable note: type + target tweet id + optional note
        req = ev.get("request") or {}
        vp = req.get("vp")
        note_str = ev.get("note") or ""
        if not note_str and target:
            tid = target.split(":")[-1] if ":" in target else target
            note_str = f"{tid[:12]}"
        if vp and f"VP={vp}" not in note_str:
            note_str = f"VP={vp} {note_str}".strip()
        items.append({
            "ts":      ts,
            "source":  "social",
            "type":    ev.get("type", "?"),
            "status":  ev.get("result_status", "ok"),
            "note":    note_str,
            "detail":  ev,
        })

    # Trader executions — last 7 days' files (extend window to catch older buys/claims)
    today = datetime.now(timezone.utc).date()
    for delta in range(7):
        d = today - timedelta(days=delta)
        path = RUNTIME / "trader" / f"executions-{d}.json"
        rec = _load(path) or {}
        for ev in (rec.get("items") or []):
            if not _trader_ev_is_real(ev):
                continue
            action = ev.get("action", "?")
            tick = ev.get("tick", "")
            amount = ev.get("amount")
            usd = ev.get("usd")
            tx_hash = (ev.get("tx_hash") or "")[:16]
            note_parts = [p for p in [tick, f"${usd:.2f}" if usd else None, f"tx:{tx_hash}" if tx_hash else None] if p]
            ts = ev.get("ts") or ""
            items.append({
                "ts":     ts,
                "source": "trader",
                "type":   action,
                "status": ev.get("status", ""),
                "note":   " ".join(note_parts),
                "detail": ev,
            })

    # Bookmarker exec results — completed only
    bm_exec = _safe("bookmarker/social-execution.json") or {}
    for ev in (bm_exec.get("results") or []):
        result_status = str(ev.get("result_status") or "").lower()
        if result_status in _SOCIAL_SKIP:
            continue
        ts = ev.get("executed_at") or ""
        items.append({
            "ts":     ts,
            "source": "bookmarker",
            "type":   ev.get("type", "?"),
            "status": ev.get("result_status", "ok"),
            "note":   ev.get("note") or ev.get("target_key", ""),
            "detail": ev,
        })
    # Bookmarker exec cycle — only if summary.succeeded > 0
    if bm_exec.get("generated_at"):
        summary = bm_exec.get("summary") or {}
        succeeded = summary.get("succeeded") if isinstance(summary, dict) else None
        try:
            succeeded_count = int(succeeded) if succeeded is not None else 0
        except (TypeError, ValueError):
            succeeded_count = 0
        if succeeded_count > 0:
            items.append({
                "ts":     bm_exec.get("generated_at", ""),
                "source": "bookmarker",
                "type":   "exec_cycle",
                "status": bm_exec.get("status", ""),
                "note":   bm_exec.get("notes") or str(summary),
                "detail": {k: v for k, v in bm_exec.items() if k != "results"},
            })

    # Bookmarker heartbeat
    bm_latest = _safe("bookmarker/latest.json") or {}
    if bm_latest.get("generated_at"):
        items.append({
            "ts":     bm_latest.get("generated_at", ""),
            "source": "bookmarker",
            "type":   "heartbeat",
            "status": bm_latest.get("status", ""),
            "note":   f"high_signal:{bm_latest.get('high_signal_count','')} urgency:{bm_latest.get('content_urgency','')}",
            "detail": bm_latest,
        })

    # Main decision
    main_dec = _safe("main/last-decision.json") or {}
    if main_dec.get("updated_at"):
        social = main_dec.get("social_decision", "")
        treasury = main_dec.get("treasury_decision", "")
        items.append({
            "ts":     main_dec.get("updated_at", ""),
            "source": "main",
            "type":   "decision",
            "status": "",
            "note":   main_dec.get("reason") or f"social:{social} treasury:{treasury}",
            "detail": main_dec,
        })

    # Main heartbeat
    main_latest = _safe("main/latest.json") or {}
    if main_latest.get("generated_at"):
        items.append({
            "ts":     main_latest.get("generated_at", ""),
            "source": "main",
            "type":   "heartbeat",
            "status": main_latest.get("status", ""),
            "note":   main_latest.get("status", ""),
            "detail": main_latest,
        })

    # Sort descending, deduplicate by id; for claims also deduplicate by order_id
    seen: set[str] = set()
    deduped: list[dict] = []
    for it in sorted(items, key=lambda x: x.get("ts", ""), reverse=True):
        uid = it["detail"].get("id") or f"{it['ts']}:{it['source']}:{it['note']}"
        # For claim events, also deduplicate by order_id to avoid double-counting
        ev = it["detail"]
        if ev.get("action") == "claim":
            order_id = ev.get("order_id") or ""
            if not order_id:
                rd = (ev.get("remote") or {}).get("response") or {}
                if isinstance(rd, dict) and "data" in rd:
                    rd = rd["data"]
                order_id = (rd.get("orderId") or "").strip()
            if order_id:
                uid = f"claim:{order_id}"
        if uid not in seen:
            seen.add(uid)
            deduped.append(it)

    return JSONResponse({"items": deduped[:50], "total": len(deduped)})


@app.get("/api/runtime/{agent}/{file}")
def api_runtime_file(agent: str, file: str):
    """Read a single runtime file on demand."""
    # Sanitise path components
    safe_agent = agent.replace("..", "").replace("/", "")
    safe_file  = file.replace("..", "").replace("/", "")
    path = RUNTIME / safe_agent / safe_file
    data = _load(path)
    if data is None:
        raise HTTPException(status_code=404, detail=f"File not found: {path.relative_to(WORKSPACE)}")
    return JSONResponse(data)


@app.get("/api/monitor/steemit")
def api_monitor_steemit():
    """Return latest Steemit community monitor data."""
    path = WORKSPACE / "memory" / "steemit-community-monitor-latest.json"
    if not path.exists():
        return JSONResponse({"ok": False, "error": "not found"}, status_code=404)
    return JSONResponse(json.loads(path.read_text(encoding="utf-8")))


# ── Entry point ────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("VIZ_PORT", 7890))
    print(f"TagClaw Viz  →  http://localhost:{port}", flush=True)
    uvicorn.run("server:app", host="0.0.0.0", port=port, reload=False)
