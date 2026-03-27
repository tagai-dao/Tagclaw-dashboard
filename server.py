#!/usr/bin/env python3
"""TagClaw Agent Visualization Dashboard Server — port 7890"""

from __future__ import annotations

import glob
import json
import os
import sys
from datetime import datetime, timezone
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
            "input_packet":  input_pkt,
            "tas_latest":    tas_latest,
            "tas_history":   tas_history,
            "last_decision": last_dec,
            "social_intent": social_int,
        },
        "bookmarker": {
            "topic_brief":          topic_brief,
            "source_health":        src_health,
            "content_candidates":   bm_cands,
            "autonomy_intent":      auto_intent,
        },
        "trader": {
            "wallet_snapshot":  wallet,
            "reward_status":    rewards,
            "tas_trade":        tas_trd,
            "risk_status":      risk,
            "onchain_positions": onchain,
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

    # Social history
    social = _safe("shared/social-history.json") or {}
    for ev in (social.get("items") or []):
        ts = ev.get("executed_at") or ev.get("ts") or ""
        items.append({
            "ts":      ts,
            "source":  "social",
            "type":    ev.get("type", "?"),
            "status":  ev.get("result_status", ""),
            "note":    ev.get("note") or ev.get("target_key", ""),
            "detail":  ev,
        })

    # Trader executions — last 3 days' files
    today = datetime.now(timezone.utc).date()
    for delta in range(3):
        from datetime import timedelta
        d = today - timedelta(days=delta)
        path = RUNTIME / "trader" / f"executions-{d}.json"
        rec = _load(path) or {}
        for ev in (rec.get("items") or []):
            ts = ev.get("ts") or ""
            items.append({
                "ts":     ts,
                "source": "trader",
                "type":   ev.get("action", "?"),
                "status": ev.get("status", ""),
                "note":   f"{ev.get('tick','')} {ev.get('amount_unit','')} {ev.get('amount','')}",
                "detail": ev,
            })

    # Bookmarker exec results
    bm_exec = _safe("bookmarker/social-execution.json") or {}
    for ev in (bm_exec.get("results") or []):
        ts = ev.get("executed_at") or ""
        items.append({
            "ts":     ts,
            "source": "bookmarker",
            "type":   ev.get("type", "?"),
            "status": ev.get("result_status", ""),
            "note":   ev.get("note") or ev.get("target_key", ""),
            "detail": ev,
        })
    # Bookmarker exec cycle (top-level record)
    if bm_exec.get("generated_at"):
        items.append({
            "ts":     bm_exec.get("generated_at", ""),
            "source": "bookmarker",
            "type":   "exec_cycle",
            "status": bm_exec.get("status", ""),
            "note":   bm_exec.get("notes") or bm_exec.get("summary", ""),
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

    # Sort descending, deduplicate by id where present
    seen: set[str] = set()
    deduped: list[dict] = []
    for it in sorted(items, key=lambda x: x.get("ts", ""), reverse=True):
        uid = it["detail"].get("id") or f"{it['ts']}:{it['source']}:{it['note']}"
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


# ── Entry point ────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("VIZ_PORT", 7890))
    print(f"TagClaw Viz  →  http://localhost:{port}", flush=True)
    uvicorn.run("server:app", host="0.0.0.0", port=port, reload=False)
