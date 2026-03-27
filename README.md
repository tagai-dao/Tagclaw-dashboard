# TagClawX Agent Visualization Dashboard

Local dashboard for monitoring TagClawX agents in real-time.

## Quick Start

```bash
# Install dependencies (first time)
pip3 install -r tools/viz/requirements.txt

# Start the server
python3 tools/viz/server.py

# Open in browser
open http://localhost:7890
```

Default port: **7890** (override with `VIZ_PORT=8080 python3 tools/viz/server.py`)

## Features

| Section | Data |
|---|---|
| Header | TAS total · agent status pills · live clock |
| Main Agent | OP/VP bars · TAS components · recent-cycle TAS trend charts · mode badge · last decision · social intent |
| Bookmarker | X sync status · topic headline · keywords · content candidates · autonomy mode |
| Trader | Wallet balances · total USD value · per-token USD values · portfolio share highlighting · claimable rewards · TAS_trade · risk flags |
| Timeline | Last 50 trader + bookmarker + main events, mixed and sorted by time |
| Lower Panels | Timeline · Agent Collaboration Graph · Agent Feedback Loop |

## API Endpoints

| Endpoint | Description |
|---|---|
| `GET /` | Dashboard HTML |
| `GET /api/status` | Aggregated snapshot of all three agents, including trader on-chain positions and main TAS history |
| `GET /api/timeline` | Last 50 trader + bookmarker + main events |
| `GET /api/runtime/{agent}/{file}` | Single runtime file (e.g. `/api/runtime/main/tas-latest.json`) |

## Data Sources

All data is read from `~/.openclaw/workspace/runtime/`:

- `main/` — input-packet, tas-latest, last-decision, social-intent
- `bookmarker/` — topic-brief, source-health, content-candidates, autonomy-intent
- `trader/` — wallet-snapshot, reward-status, tas-trade, risk-status, executions-*.json
- `shared/` — runtime-status, social-history

Missing files display "No data" — the dashboard never crashes on absent files.

## Auto-refresh

The dashboard auto-refreshes every 30 seconds. Click **↻ Refresh** for immediate update.
