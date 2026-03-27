/* TagClawX Dashboard — app.js */
'use strict';

// ── i18n ───────────────────────────────────────────────────────────────────
const I18N = {
  zh: {
    subtitle: '智能体看板',
    refresh: '↻ 刷新',
    'tas-social-label': '社交',
    'tas-trade-label': '交易',
    'panel-main': '主智能体',
    'label-op': 'OP',
    'label-vp': 'VP',
    'label-mode': '模式',
    'section-tas': 'TAS 组件',
    'recent-cycles': '最近周期',
    'section-last-decision': '最新决策',
    'section-social-intent': '社交意图',
    'panel-bookmarker': '文曲星智能体',
    'label-x-sync': 'X 同步',
    'label-last-sync': '上次同步',
    'section-topic-brief': '话题摘要',
    'section-content-candidates': '内容候选',
    'panel-trader': '财神智能体',
    'label-risk': '风险',
    'section-wallet': '钱包余额',
    'section-rewards': '可领奖励',
    'section-risk-flags': '风险标志',
    'section-timeline': '时间轴',
    'section-graph': '智能体协作图',
    'section-feedback': '智能体反馈循环',
    'panel-dev': '鲁班 / Claude 调度',
    'label-status': '状态',
    'label-completed-at': '完成时间',
    'section-built-tools': '已开发的软件 / 工具',
    'section-result-summary': '结果摘要',
    'section-files-changed': '改动文件',
    'section-result-links': '结果链接',
    'built-dashboard': 'TagClaw 仪表板',
    'built-website': 'TagClaw 网站',
    'built-follow': '关注系统',
    'latest-deliverable': '最新交付物',
    'live-dashboard': '在线仪表板',
    'github-repo': 'GitHub 仓库',
    'no-links': '暂无链接',
    'no-dev-result': '暂无鲁班交付结果',
    'no-data': '无数据',
    'no-tas-history': '暂无 TAS 历史',
    'no-actions': '无动作',
    'candidates-unit': '个候选',
    'no-candidates': '无候选',
    'total-value': '总价值',
    'portfolio-share': '组合占比',
    'no-balance': '无余额数据',
    'no-rewards': '无可领奖励',
    'no-risk-flags': '无风险标记',
    'no-timeline': '无时间轴数据',
    'fetch-error': '获取错误：',
    'legend-data': '数据 / 运行输出',
    'legend-command': '指令 / 任务派发',
    'legend-pulse': '最近活跃节点',
    'tooltip-status': '状态',
    'tooltip-last-update': '上次更新',
    'tooltip-flows': '流向',
    'node-bm-role': '内容同步',
    'node-bm-d1': '同步 X bookmarks / tweets',
    'node-bm-d2': '输出 topic-brief / content-candidates',
    'node-bm-d3': '提供 TAS_social',
    'node-trader-role': '资金管理',
    'node-trader-d1': '监控 wallet / rewards',
    'node-trader-d2': '评估 TAS_trade',
    'node-trader-d3': '输出 risk status',
    'node-main-role': '总调度',
    'node-main-d1': '汇总 3 条链路',
    'node-main-d2': '计算 TAS',
    'node-main-d3': '做发帖 / 策展 / 保守决策',
    'node-dev-role': 'Claude 调度',
    'node-dev-d1': '读取 dev task.json',
    'node-dev-d2': '执行实现任务',
    'node-dev-d3': '写回 result.json',
    'fl-main-role': '心跳主脑',
    'fl-main-subtitle': 'Orchestrator',
    'fl-bm-role': '文曲星',
    'fl-bm-subtitle': 'Content Curator',
    'fl-trader-role': '财神',
    'fl-trader-subtitle': 'Treasury',
    'fl-legend': '彩色小点 = 智能体间实时数据流',
    'decision-social': '社交',
    'decision-treasury': '金库',
    'fl-edge-tas-social': 'TAS_社交',
    'fl-edge-topic-brief': '话题摘要',
    'fl-edge-treasury-policy': '金库策略',
    'fl-edge-reward-status': '奖励状态',
    'edge-topic-brief': '话题摘要',
    'edge-content-candidates': '内容候选',
    'edge-tas-social': 'TAS_社交',
    'edge-wallet-snapshot': '钱包快照',
    'edge-reward-status': '奖励状态',
    'edge-tas-trade': 'TAS_交易',
    'edge-guidance': '引导',
    'edge-topic-priority': '话题优先级',
    'edge-treasury-policy': '金库策略',
    'edge-risk-mode': '风险模式',
    'edge-task-json': 'task.json',
    'edge-impl-request': '实现请求',
    'edge-result-json': 'result.json',
    'edge-completion-feedback': '完成反馈',
    'section-dev': '🔨 鲁班 · 开发调度',
    'label-dev-status': '状态',
    'label-dev-task': '任务',
    'label-dev-completed': '完成时间',
    'section-dev-summary': '任务摘要',
    'section-dev-files': '变更文件',
  },
  en: {
    subtitle: 'Agent Dashboard',
    refresh: '↻ Refresh',
    'tas-social-label': 'social',
    'tas-trade-label': 'trade',
    'panel-main': 'Main Agent',
    'label-op': 'OP',
    'label-vp': 'VP',
    'label-mode': 'Mode',
    'section-tas': 'TAS Components',
    'recent-cycles': 'Recent cycles',
    'section-last-decision': 'Last Decision',
    'section-social-intent': 'Social Intent',
    'panel-bookmarker': 'Bookmarker Agent',
    'label-x-sync': 'X Sync',
    'label-last-sync': 'Last Sync',
    'section-topic-brief': 'Topic Brief',
    'section-content-candidates': 'Content Candidates',
    'panel-trader': 'Trader Agent',
    'label-risk': 'Risk',
    'section-wallet': 'Wallet Balances',
    'section-rewards': 'Claimable Rewards',
    'section-risk-flags': 'Risk Flags',
    'section-timeline': 'Timeline',
    'section-graph': 'Agent Collaboration Graph',
    'section-feedback': 'Agent Feedback Loop',
    'panel-dev': 'Luban / Claude Dispatch',
    'label-status': 'Status',
    'label-completed-at': 'Completed',
    'section-built-tools': 'Built Software / Tools',
    'section-result-summary': 'Result Summary',
    'section-files-changed': 'Files Changed',
    'section-result-links': 'Result Links',
    'built-dashboard': 'TagClaw Dashboard',
    'built-website': 'TagClaw Website',
    'built-follow': 'Follow System',
    'latest-deliverable': 'Latest Deliverable',
    'live-dashboard': 'Live Dashboard',
    'github-repo': 'GitHub Repository',
    'no-links': 'No links available',
    'no-dev-result': 'No Luban deliverable yet',
    'no-data': 'No data',
    'no-tas-history': 'No TAS history available',
    'no-actions': 'No actions',
    'candidates-unit': 'candidate(s)',
    'no-candidates': 'No candidates',
    'total-value': 'Total Value',
    'portfolio-share': 'Portfolio share',
    'no-balance': 'No balance data',
    'no-rewards': 'No claimable rewards',
    'no-risk-flags': 'No risk flags',
    'no-timeline': 'No timeline data',
    'fetch-error': 'Fetch error: ',
    'legend-data': 'data / runtime output',
    'legend-command': 'command / task dispatch',
    'legend-pulse': 'recent active node',
    'tooltip-status': 'Status',
    'tooltip-last-update': 'Last update',
    'tooltip-flows': 'Flows',
    'node-bm-role': 'Content Sync',
    'node-bm-d1': 'Sync X bookmarks / tweets',
    'node-bm-d2': 'Output topic-brief / content-candidates',
    'node-bm-d3': 'Provide TAS_social',
    'node-trader-role': 'Treasury',
    'node-trader-d1': 'Monitor wallet / rewards',
    'node-trader-d2': 'Evaluate TAS_trade',
    'node-trader-d3': 'Output risk status',
    'node-main-role': 'Orchestrator',
    'node-main-d1': 'Aggregate 3 pipelines',
    'node-main-d2': 'Compute TAS',
    'node-main-d3': 'Make post / curate / conservative decisions',
    'node-dev-role': 'Claude Dispatch',
    'node-dev-d1': 'Read dev task.json',
    'node-dev-d2': 'Execute implementation tasks',
    'node-dev-d3': 'Write back result.json',
    'fl-main-role': 'Orchestrator',
    'fl-main-subtitle': '心跳主脑',
    'fl-bm-role': 'Content Curator',
    'fl-bm-subtitle': '文曲星',
    'fl-trader-role': 'Treasury',
    'fl-trader-subtitle': '财神',
    'fl-legend': 'Animated dots = live data flow between agents',
    'decision-social': 'Social',
    'decision-treasury': 'Treasury',
    'fl-edge-tas-social': 'TAS_social',
    'fl-edge-topic-brief': 'topic-brief',
    'fl-edge-treasury-policy': 'treasury-policy',
    'fl-edge-reward-status': 'reward-status',
    'edge-topic-brief': 'topic-brief',
    'edge-content-candidates': 'content-candidates',
    'edge-tas-social': 'TAS_social',
    'edge-wallet-snapshot': 'wallet-snapshot',
    'edge-reward-status': 'reward-status',
    'edge-tas-trade': 'TAS_trade',
    'edge-guidance': 'guidance',
    'edge-topic-priority': 'topic priority',
    'edge-treasury-policy': 'treasury policy',
    'edge-risk-mode': 'risk mode',
    'edge-task-json': 'task.json',
    'edge-impl-request': 'implementation request',
    'edge-result-json': 'result.json',
    'edge-completion-feedback': 'completion feedback',
    'section-dev': '🔨 鲁班 · Dev Dispatch',
    'label-dev-status': 'Status',
    'label-dev-task': 'Task',
    'label-dev-completed': 'Completed',
    'section-dev-summary': 'Task Summary',
    'section-dev-files': 'Files Changed',
  },
};

let _lang = localStorage.getItem('tcx_lang') || 'zh';
let _lastStatus = null;
let _lastTimeline = null;

function t(key) {
  return (I18N[_lang] || I18N.zh)[key] ?? (I18N.zh)[key] ?? key;
}

function applyLang() {
  document.documentElement.lang = _lang === 'zh' ? 'zh' : 'en';
  document.title = _lang === 'zh' ? 'TagClawX · 智能体看板' : 'TagClawX · Agent Dashboard';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('.lang-seg').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === _lang);
  });
  if (_lastStatus) renderStatus(_lastStatus);
  if (_lastTimeline) renderTimeline(_lastTimeline);
}

function setLang(l) {
  _lang = l;
  localStorage.setItem('tcx_lang', l);
  applyLang();
}

// ── Clock ──────────────────────────────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (el) el.textContent = new Date().toLocaleString(_lang === 'zh' ? 'zh-CN' : 'en-US', { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();

// ── Helpers ────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function setText(id, val, fallback = '—') {
  const el = $(id);
  if (el) el.textContent = (val !== null && val !== undefined && val !== '') ? String(val) : fallback;
}

function fmt(n, dec = 2) {
  if (n === null || n === undefined || n === '') return '—';
  return parseFloat(n).toFixed(dec);
}

function fmtNum(n) {
  if (n === null || n === undefined) return '—';
  const v = parseFloat(n);
  if (v >= 1e6) return (v / 1e6).toFixed(2) + 'M';
  if (v >= 1e3) return (v / 1e3).toFixed(1) + 'K';
  return v.toFixed(2);
}

function shortTs(ts) {
  if (!ts) return '—';
  try {
    const d = new Date(ts);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mi = String(d.getMinutes()).padStart(2, '0');
    return `${mm}-${dd} ${hh}:${mi}`;
  } catch { return ts.slice(0, 16); }
}

function statusClass(s) {
  if (!s) return '';
  const sl = String(s).toLowerCase();
  if (['ok', 'approve', 'active', 'healthy'].some(k => sl.includes(k))) return 'ok';
  if (['warn', 'partial', 'hold'].some(k => sl.includes(k))) return 'warn';
  if (['error', 'fail', 'reject'].some(k => sl.includes(k))) return 'error';
  return '';
}

function setBadge(id, text, extra) {
  const el = $(id);
  if (!el) return;
  el.textContent = text || '—';
  el.className = 'badge' + (extra ? ' ' + extra : '');
  const sc = statusClass(text);
  if (sc) el.classList.add(sc);
}

function setBar(id, pct, cls) {
  const el = $(id);
  if (!el) return;
  el.style.width = Math.min(100, Math.max(0, pct)) + '%';
  el.className = 'progress-fill ' + (cls || 'ok');
}

function setPill(id, status) {
  const el = $(id);
  if (!el) return;
  el.className = 'pill ' + statusClass(status);
}

function listHtml(items) {
  if (!items || !items.length) return `<div class="muted small">${t('no-data')}</div>`;
  return items.map(it => `
    <div class="list-item">
      <div class="item-left">
        <div class="item-title">${escHtml(it.title || it.text || '')}</div>
        ${it.sub ? `<div class="item-sub">${escHtml(it.sub)}</div>` : ''}
      </div>
      ${it.right ? `<div class="item-right">${escHtml(it.right)}</div>` : ''}
    </div>`).join('');
}

function escHtml(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function showError(msg) {
  const bar = $('error-bar');
  if (!bar) return;
  bar.textContent = msg;
  bar.classList.remove('hidden');
  setTimeout(() => bar.classList.add('hidden'), 6000);
}

// ── API ────────────────────────────────────────────────────────────────────
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

// ── Render ─────────────────────────────────────────────────────────────────

function renderStatus(data) {
  const rs = data.runtime_status || {};
  ['main','bookmarker','trader'].forEach(a => {
    const info = rs[a] || {};
    setPill('pill-' + a, info.status || '');
  });

  const tas = (data.main || {}).tas_latest || {};
  const tasTotal  = tas.tas_total  ?? null;
  const tasSocial = tas.tas_social ?? null;
  const tasTrade  = tas.tas_trade  ?? null;
  setText('tas-total',  fmt(tasTotal));
  setText('tas-social', fmt(tasSocial));
  setText('tas-trade',  fmt(tasTrade));
  const totalEl = $('tas-total');
  if (totalEl) {
    totalEl.className = 'value ' + (tasTotal >= 1.5 ? 'clr-ok' : tasTotal >= 0.8 ? 'clr-warn' : 'clr-error');
  }

  renderMain(data.main || {});
  renderBookmarker(data.bookmarker || {});
  renderTrader(data.trader || {});
  renderDev(data.dev_dispatch || {});
  renderAgentGraph(data);
}

function numericOrNull(v) {
  if (v === null || v === undefined || v === '' || v === 'partial') return null;
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : null;
}

function sparklineSvg(values, color) {
  const width = 220;
  const height = 70;
  const padX = 10;
  const padY = 10;
  const valid = values.map((v, i) => ({ v: numericOrNull(v), i })).filter(p => p.v !== null);
  if (!valid.length) {
    return `<svg viewBox="0 0 ${width} ${height}" class="tas-sparkline"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.28)" font-size="10">${t('no-tas-history')}</text></svg>`;
  }
  const min = Math.min(...valid.map(p => p.v));
  const max = Math.max(...valid.map(p => p.v));
  const span = Math.max(max - min, 0.0001);
  const count = Math.max(values.length - 1, 1);
  const toX = i => padX + (i / count) * (width - padX * 2);
  const toY = v => height - padY - ((v - min) / span) * (height - padY * 2);
  const pts = valid.map(p => `${toX(p.i)},${toY(p.v)}`);
  const dots = valid.map(p => `<circle cx="${toX(p.i)}" cy="${toY(p.v)}" r="2.3" fill="${color}" />`).join('');
  return `<svg viewBox="0 0 ${width} ${height}" class="tas-sparkline"><line x1="${padX}" y1="${height-padY}" x2="${width-padX}" y2="${height-padY}" stroke="rgba(255,255,255,0.08)" stroke-width="1" /><polyline fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" points="${pts.join(' ')}" />${dots}</svg>`;
}

function renderTasHistory(history, tas) {
  const el = $('main-tas-history');
  if (!el) return;
  const points = Array.isArray(history) ? history : [];
  if (!points.length) {
    el.innerHTML = `<div class="muted small">${t('no-tas-history')}</div>`;
    return;
  }
  const metrics = [
    { key: 'tas_social', label: 'TAS_social', color: '#58a6ff' },
    { key: 'tas_trade',  label: 'TAS_trade',  color: '#f0a500' },
    { key: 'tas_total',  label: 'TAS_total',  color: '#00d26a' },
  ];
  el.innerHTML = metrics.map(m => {
    const values = points.map(p => p[m.key]);
    const latest = numericOrNull(tas[m.key]) ?? [...values].reverse().map(numericOrNull).find(v => v !== null);
    const firstTs = points[0]?.ts ? shortTs(points[0].ts) : '—';
    const lastTs = points[points.length - 1]?.ts ? shortTs(points[points.length - 1].ts) : '—';
    return `
      <div class="tas-mini-card">
        <div class="tas-mini-head">
          <span class="tas-mini-label">${escHtml(m.label)}</span>
          <span class="tas-mini-value" style="color:${m.color}">${latest !== undefined && latest !== null ? escHtml(fmt(latest)) : '—'}</span>
        </div>
        ${sparklineSvg(values, m.color)}
        <div class="tas-mini-axis"><span>${escHtml(firstTs)}</span><span>${escHtml(lastTs)}</span></div>
      </div>`;
  }).join('');
}

// ── Main Panel ──
function renderMain(main) {
  const ip  = main.input_packet  || {};
  const tas = main.tas_latest    || {};
  const dec = main.last_decision || {};
  const si  = main.social_intent || {};
  const sum = ip.summary || {};

  const op = sum.op ?? null;
  const vp = sum.vp ?? null;
  setText('main-op', op !== null ? fmtNum(op) : '—');
  setText('main-vp', vp !== null ? fmtNum(vp) : '—');
  setBar('bar-op', op !== null ? (op / 2000) * 100 : 0, op > 1500 ? 'ok' : op > 800 ? 'warn' : 'error');
  setBar('bar-vp', vp !== null ? (vp / 200)  * 100 : 0, 'ok');

  const mode = sum.mode || dec.mode || '—';
  setBadge('main-mode-badge', mode, mode.toLowerCase().replace(/[^a-z-]/g, ''));

  setText('main-tas-social', fmt(tas.tas_social));
  setText('main-tas-trade',  fmt(tas.tas_trade));
  setText('main-tas-total',  fmt(tas.tas_total));
  renderTasHistory(main.tas_history || [], tas);

  const decText = [
    dec.social_decision ? `${t('decision-social')}: ${dec.social_decision}` : null,
    dec.treasury_decision ? `${t('decision-treasury')}: ${dec.treasury_decision}` : null,
    dec.reason || null,
  ].filter(Boolean).join('\n') || '—';
  setText('main-decision', decText);

  const actions = si.payload?.actions || [];
  const intentEl = $('main-social-intent');
  if (intentEl) {
    if (!actions.length) {
      intentEl.innerHTML = `<div class="muted small">${escHtml(si.reason || si.status || t('no-actions'))}</div>`;
    } else {
      intentEl.innerHTML = listHtml(actions.map(a => ({
        title: a.type || a.action || JSON.stringify(a),
        sub:   a.target || a.tick || '',
        right: a.amount ? fmtNum(a.amount) : '',
      })));
    }
  }
}

// ── Bookmarker Panel ──
function renderBookmarker(bm) {
  const src   = bm.source_health       || {};
  const brief = bm.topic_brief         || {};
  const cands = bm.content_candidates  || {};
  const auto  = bm.autonomy_intent     || {};

  const xSync = src.x_sync || {};
  setBadge('bm-sync-status', xSync.status || src.status || '—');
  setText('bm-sync-at', shortTs(xSync.fetched_at || src.fetched_at || src.updated_at));

  const autoMode = auto.mode || auto.autonomy_mode || '—';
  setBadge('bm-mode-badge', autoMode, autoMode.toLowerCase().replace(/[^a-z-]/g,''));

  setText('bm-headline', brief.headline || brief.summary || '—');
  const kwEl = $('bm-keywords');
  if (kwEl) {
    const kws = brief.keywords || [];
    kwEl.innerHTML = kws.slice(0, 8).map(k => `<span class="tag">${escHtml(k)}</span>`).join('');
  }

  const candidateList = cands.candidates || brief.candidates || [];
  const count = candidateList.length;
  setText('bm-cands-count', count ? `${count} ${t('candidates-unit')}` : t('no-candidates'));
  const candsEl = $('bm-cands-list');
  if (candsEl) {
    candsEl.innerHTML = listHtml(
      candidateList.slice(0, 3).map(c => ({
        title: c.title || c.headline || c.url || JSON.stringify(c).slice(0, 80),
        sub:   c.type || c.source || '',
        right: c.score != null ? fmt(c.score) : '',
      }))
    );
  }
}

// ── Trader Panel ──
function renderTrader(trader) {
  const wallet  = trader.wallet_snapshot   || {};
  const rewards = trader.reward_status     || {};
  const tasT    = trader.tas_trade         || {};
  const risk    = trader.risk_status       || {};
  const onchain = trader.onchain_positions || {};

  setText('trader-tas', fmt(tasT.score ?? tasT.tas_trade));
  const trMode = tasT.autonomy_mode || '—';
  setBadge('trader-mode-badge', trMode, trMode.toLowerCase().replace(/[^a-z-]/g,''));

  const riskLvl = risk.level || risk.status || (risk.risk_flags?.length ? 'partial' : 'ok') || '—';
  setBadge('trader-risk-badge', riskLvl);

  const balEl = $('trader-balances');
  if (balEl) {
    const totalUsd = onchain.total_portfolio_usd;
    const positions = onchain.positions || [];
    if (positions.length) {
      const total = parseFloat(totalUsd || 0);
      const totalRow = totalUsd != null
        ? `<div class="list-item wallet-total"><div class="item-left"><div class="item-title">${t('total-value')}</div></div><div class="item-right">$${fmt(totalUsd)}</div></div>`
        : '';
      const rows = positions.map(p => {
        const value = parseFloat(p.value_usd || 0);
        const ratio = total > 0 ? (value / total) : 0;
        const level = ratio >= 0.45 ? 'wallet-pos-high' : ratio >= 0.15 ? 'wallet-pos-medium' : 'wallet-pos-low';
        const pct = total > 0 ? `${(ratio * 100).toFixed(1)}%` : '—';
        return `
        <div class="list-item ${level}">
          <div class="item-left">
            <div class="item-title">${escHtml(p.tick || '')}</div>
            <div class="item-sub">${t('portfolio-share')} ${escHtml(pct)}</div>
          </div>
          <div class="item-right">${escHtml(fmtNum(parseFloat(p.balance)))} ($${escHtml(fmt(p.value_usd))})</div>
        </div>`;
      }).join('');
      balEl.innerHTML = totalRow + rows;
    } else {
      const bals = wallet.balances || {};
      const items = Object.entries(bals).map(([tick, amt]) => ({
        title: tick,
        right: fmtNum(parseFloat(amt)),
      }));
      balEl.innerHTML = items.length ? listHtml(items) : `<div class="muted small">${t('no-balance')}</div>`;
    }
  }

  const rewEl = $('trader-rewards');
  if (rewEl) {
    const claimable = rewards.claimable || [];
    if (!claimable.length) {
      rewEl.innerHTML = `<div class="muted small">${t('no-rewards')}</div>`;
    } else {
      rewEl.innerHTML = listHtml(claimable.map(r => ({
        title: r.tick,
        sub:   r.status || r.action || '',
        right: `${fmtNum(r.claimable_amount)} ($${fmt(r.reward_value_usd)})`,
      })));
    }
  }

  const flagEl = $('trader-risk-flags');
  if (flagEl) {
    const flags = risk.risk_flags || risk.reasons || [];
    if (!flags.length) {
      flagEl.innerHTML = `<div class="muted small">${t('no-risk-flags')}</div>`;
    } else {
      flagEl.innerHTML = flags.map(f =>
        `<div class="list-item"><div class="item-title clr-warn">${escHtml(f)}</div></div>`
      ).join('');
    }
  }
}

function inferBuiltTools(result) {
  const files = result.files_changed || [];
  const summary = result.task_summary || '';
  const tools = [];
  const add = (key) => { if (!tools.includes(key)) tools.push(key); };
  if (files.some(f => String(f).includes('tools/viz')) || /dashboard/i.test(summary)) add('built-dashboard');
  if (files.some(f => String(f).includes('TagClaw-Website'))) add('built-website');
  if (/follow/i.test(summary) || files.some(f => String(f).includes('follow'))) add('built-follow');
  if (!tools.length) add('latest-deliverable');
  return tools;
}

function inferResultLinks(result) {
  const files = result.files_changed || [];
  const summary = result.task_summary || '';
  const links = [];
  if (files.some(f => String(f).includes('tools/viz')) || /dashboard/i.test(summary)) {
    links.push({ label: t('live-dashboard'), href: 'https://dashboard.tagclaw.com' });
    links.push({ label: t('github-repo'), href: 'https://github.com/tagai-dao/Tagclaw-dashboard' });
  }
  if (files.some(f => String(f).includes('TagClaw-Website'))) {
    links.push({ label: t('github-repo'), href: 'https://github.com/tagai-dao/TagClaw-Website' });
  }
  return links;
}

function renderDev(dev) {
  const status = dev.status || {};
  const result = dev.result || {};
  setBadge('dev-status-badge', result.status || status.status || '—');
  setText('dev-completed-at', shortTs(result.completed_at || status.updated_at || status.started_at));

  const builtEl = $('dev-built-list');
  if (builtEl) {
    if (!result.status) {
      builtEl.innerHTML = `<div class="muted small">${escHtml(t('no-dev-result'))}</div>`;
    } else {
      const tools = inferBuiltTools(result);
      builtEl.innerHTML = listHtml(tools.map(k => ({ title: t(k), sub: result.task_id || '' })));
    }
  }

  const summaryEl = $('dev-result-summary');
  if (summaryEl) {
    summaryEl.textContent = result.task_summary || t('no-dev-result');
  }

  const filesEl = $('dev-files-changed');
  if (filesEl) {
    const files = result.files_changed || [];
    filesEl.innerHTML = files.length
      ? listHtml(files.slice(0, 6).map(f => ({ title: f })))
      : `<div class="muted small">${escHtml(t('no-data'))}</div>`;
  }

  const linksEl = $('dev-result-links');
  if (linksEl) {
    const links = inferResultLinks(result);
    linksEl.innerHTML = links.length
      ? links.map(l => `<div class="list-item"><div class="item-left"><a class="dev-link" href="${escHtml(l.href)}" target="_blank" rel="noopener noreferrer">${escHtml(l.label)}</a></div></div>`).join('')
      : `<div class="muted small">${escHtml(t('no-links'))}</div>`;
  }
}

function parseTs(ts) {
  if (!ts) return null;
  const d = new Date(ts);
  return Number.isNaN(d.getTime()) ? null : d;
}

function minutesAgo(ts) {
  const d = parseTs(ts);
  if (!d) return null;
  return (Date.now() - d.getTime()) / 60000;
}

function agentState(statusText, updatedAt) {
  const status = String(statusText || '').toLowerCase();
  const mins = minutesAgo(updatedAt);
  if (status.includes('running') || status.includes('active')) return 'active';
  if (mins !== null && mins <= 10) return 'active';
  if (status.includes('done') || status.includes('ok') || status.includes('healthy')) return 'ok';
  if (status.includes('partial') || status.includes('warn')) return 'warn';
  if (status.includes('fail') || status.includes('error') || status.includes('blocked')) return 'error';
  return 'idle';
}

function graphNodeFill(key, state) {
  const palette = { main: '#00d26a', bookmarker: '#58a6ff', trader: '#f0a500', dev: '#a855f7' };
  if (state === 'idle') return 'rgba(139,148,158,0.35)';
  return palette[key] || '#58a6ff';
}

function graphStatusText(state, rawStatus) {
  if (state === 'active') return 'ACTIVE';
  if (state === 'ok') return String(rawStatus || 'OK').toUpperCase();
  if (state === 'warn') return 'PARTIAL';
  if (state === 'error') return 'ERROR';
  return 'IDLE';
}

function graphStatusColor(state) {
  if (state === 'active' || state === 'ok') return '#00d26a';
  if (state === 'warn') return '#f0a500';
  if (state === 'error') return '#ff4d4d';
  return '#8b949e';
}

function renderAgentGraph(data) {
  const svg = $('agent-graph-svg');
  const tooltip = $('agent-graph-tooltip');
  const legend = $('agent-graph-legend');
  if (!svg) return;

  const rs = data.runtime_status || {};
  const devStatus = (data.dev_dispatch || {}).status || {};
  const mainStatus = rs.main || {};
  const bmStatus = rs.bookmarker || {};
  const traderStatus = rs.trader || {};

  const nodes = {
    bookmarker: {
      x: 115, y: 90, r: 40, emoji: '📡', name: '文曲星', role: t('node-bm-role'),
      status: bmStatus.status || (data.bookmarker?.source_health?.status) || '',
      updatedAt: bmStatus.updated_at || data.bookmarker?.source_health?.updated_at || data.bookmarker?.source_health?.fetched_at || '',
      detail: [t('node-bm-d1'), t('node-bm-d2'), t('node-bm-d3')],
    },
    trader: {
      x: 115, y: 270, r: 40, emoji: '💰', name: '财神', role: t('node-trader-role'),
      status: traderStatus.status || (data.trader?.risk_status?.status) || '',
      updatedAt: traderStatus.updated_at || data.trader?.risk_status?.updated_at || '',
      detail: [t('node-trader-d1'), t('node-trader-d2'), t('node-trader-d3')],
    },
    main: {
      x: 290, y: 180, r: 46, emoji: '🐾', name: 'main', role: t('node-main-role'),
      status: mainStatus.status || (data.health?.status) || '',
      updatedAt: mainStatus.updated_at || data.health?.updated_at || data.fetched_at || '',
      detail: [t('node-main-d1'), t('node-main-d2'), t('node-main-d3')],
    },
    dev: {
      x: 465, y: 180, r: 42, emoji: '🔨', name: '鲁班', role: t('node-dev-role'),
      status: devStatus.status || '',
      updatedAt: devStatus.updated_at || devStatus.started_at || '',
      detail: [t('node-dev-d1'), t('node-dev-d2'), t('node-dev-d3')],
    },
  };

  Object.entries(nodes).forEach(([key, node]) => {
    node.key = key;
    node.state = agentState(node.status, node.updatedAt);
    node.fill = graphNodeFill(key, node.state);
  });

  const edges = [
    { from: 'bookmarker', to: 'main', type: 'data', lines: [t('edge-topic-brief'), t('edge-content-candidates'), t('edge-tas-social')] },
    { from: 'trader', to: 'main', type: 'data', lines: [t('edge-wallet-snapshot'), t('edge-reward-status'), t('edge-tas-trade')] },
    { from: 'main', to: 'bookmarker', type: 'command', lines: [t('edge-guidance'), t('edge-topic-priority')] },
    { from: 'main', to: 'trader', type: 'command', lines: [t('edge-treasury-policy'), t('edge-risk-mode')] },
    { from: 'main', to: 'dev', type: 'command', lines: [t('edge-task-json'), t('edge-impl-request')] },
    { from: 'dev', to: 'main', type: 'data', lines: [t('edge-result-json'), t('edge-completion-feedback')] },
  ].map((edge, idx) => ({ ...edge, id: `edge-${idx}` }));

  const ns = 'http://www.w3.org/2000/svg';
  svg.innerHTML = '';

  const defs = document.createElementNS(ns, 'defs');
  defs.innerHTML = `
    <marker id="arrow-data" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L10,5 L0,10 z" fill="#58a6ff"></path>
    </marker>
    <marker id="arrow-command" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L10,5 L0,10 z" fill="#f0a500"></path>
    </marker>`;
  svg.appendChild(defs);

  const edgeGroup = document.createElementNS(ns, 'g');
  const nodeGroup = document.createElementNS(ns, 'g');
  svg.appendChild(edgeGroup);
  svg.appendChild(nodeGroup);

  edges.forEach(edge => {
    const s = nodes[edge.from];
    const tgt = nodes[edge.to];
    const dx = tgt.x - s.x;
    const dir = dx >= 0 ? 1 : -1;
    const startX = s.x + dir * (s.r + 4);
    const endX = tgt.x - dir * (tgt.r + 4);
    const startY = s.y;
    const endY = tgt.y;
    const curve = Math.max(26, Math.abs(dx) * 0.18);
    const ctrl1X = startX + dir * curve;
    const ctrl2X = endX - dir * curve;
    const offsetY = edge.from === 'main' && edge.to === 'dev' ? -24 : edge.from === 'dev' ? 24 : 0;
    const d = `M ${startX} ${startY} C ${ctrl1X} ${startY + offsetY}, ${ctrl2X} ${endY + offsetY}, ${endX} ${endY}`;

    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', d);
    path.setAttribute('class', `graph-edge ${edge.type}`);
    path.setAttribute('marker-end', `url(#arrow-${edge.type})`);
    path.dataset.edgeId = edge.id;
    edgeGroup.appendChild(path);

    const midX = (startX + endX + ctrl1X + ctrl2X) / 4;
    const midY = (startY + endY) / 2 + offsetY + (edge.type === 'command' ? -10 : 10);
    const label = document.createElementNS(ns, 'text');
    label.setAttribute('x', midX);
    label.setAttribute('y', midY);
    label.setAttribute('class', 'graph-edge-label');
    label.dataset.edgeId = edge.id;
    edge.lines.forEach((line, i) => {
      const tspan = document.createElementNS(ns, 'tspan');
      tspan.setAttribute('x', midX);
      if (i === 0) tspan.setAttribute('dy', '0');
      else tspan.setAttribute('dy', '12');
      tspan.textContent = line;
      label.appendChild(tspan);
    });
    edgeGroup.appendChild(label);
  });

  Object.values(nodes).forEach(node => {
    const g = document.createElementNS(ns, 'g');
    g.setAttribute('class', `graph-node ${node.state === 'idle' ? 'dimmed' : ''} ${node.state === 'active' ? 'active' : ''}`.trim());
    g.dataset.node = node.key;

    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', node.x);
    circle.setAttribute('cy', node.y);
    circle.setAttribute('r', node.r);
    circle.setAttribute('fill', node.fill);
    circle.setAttribute('class', node.state === 'active' ? 'pulse' : '');
    g.appendChild(circle);

    const emoji = document.createElementNS(ns, 'text');
    emoji.setAttribute('x', node.x);
    emoji.setAttribute('y', node.y);
    emoji.setAttribute('class', 'graph-node-emoji');
    emoji.textContent = node.emoji;
    g.appendChild(emoji);

    const name = document.createElementNS(ns, 'text');
    name.setAttribute('x', node.x);
    name.setAttribute('y', node.y + node.r + 18);
    name.setAttribute('class', 'graph-node-name');
    name.textContent = node.name;
    g.appendChild(name);

    const role = document.createElementNS(ns, 'text');
    role.setAttribute('x', node.x);
    role.setAttribute('y', node.y + node.r + 33);
    role.setAttribute('class', 'graph-node-role');
    role.textContent = node.role;
    g.appendChild(role);

    const status = document.createElementNS(ns, 'text');
    status.setAttribute('x', node.x);
    status.setAttribute('y', node.y - node.r - 12);
    status.setAttribute('class', 'graph-node-status');
    status.setAttribute('fill', graphStatusColor(node.state));
    status.textContent = graphStatusText(node.state, node.status);
    g.appendChild(status);

    g.addEventListener('mouseenter', ev => showGraphTooltip(ev, node, edges, tooltip));
    g.addEventListener('mousemove', ev => moveGraphTooltip(ev, tooltip));
    g.addEventListener('mouseleave', () => hideGraphTooltip(tooltip));
    g.addEventListener('mouseenter', () => highlightGraph(node.key, edges, true));
    g.addEventListener('mouseleave', () => highlightGraph(node.key, edges, false));

    nodeGroup.appendChild(g);
  });

  if (legend) {
    legend.innerHTML = `
      <span class="graph-legend-item"><span class="graph-legend-line"></span> ${t('legend-data')}</span>
      <span class="graph-legend-item"><span class="graph-legend-line command"></span> ${t('legend-command')}</span>
      <span class="graph-legend-item"><span class="mono">pulse</span> ${t('legend-pulse')}</span>`;
  }
}

function highlightGraph(nodeKey, edges, on) {
  const related = new Set(edges.filter(e => e.from === nodeKey || e.to === nodeKey).map(e => e.id));
  document.querySelectorAll('.graph-node').forEach(el => {
    const active = el.dataset.node === nodeKey;
    el.classList.toggle('hover', on && active);
    el.classList.toggle('dimmed', on && !active);
  });
  document.querySelectorAll('.graph-edge, .graph-edge-label').forEach(el => {
    const belongs = related.has(el.dataset.edgeId);
    el.classList.toggle('dimmed', on && !belongs);
  });
}

function showGraphTooltip(ev, node, edges, tooltip) {
  if (!tooltip) return;
  const related = edges.filter(e => e.from === node.key || e.to === node.key);
  const updated = node.updatedAt ? shortTs(node.updatedAt) : '—';
  tooltip.innerHTML = `
    <div class="title">${escHtml(node.name)} · ${escHtml(node.role)}</div>
    <div>${t('tooltip-status')}: <span class="mono">${escHtml(graphStatusText(node.state, node.status))}</span></div>
    <div>${t('tooltip-last-update')}: <span class="mono">${escHtml(updated)}</span></div>
    <div class="sub">${node.detail.map(escHtml).join(' · ')}</div>
    <div class="sub">${t('tooltip-flows')}: ${related.map(e => escHtml(`${e.from} → ${e.to}`)).join(' / ')}</div>`;
  tooltip.classList.remove('hidden');
  moveGraphTooltip(ev, tooltip);
}

function moveGraphTooltip(ev, tooltip) {
  if (!tooltip) return;
  const parent = tooltip.parentElement;
  if (!parent) return;
  const rect = parent.getBoundingClientRect();
  const left = Math.min(rect.width - 230, Math.max(12, ev.clientX - rect.left + 14));
  const top = Math.min(rect.height - 110, Math.max(12, ev.clientY - rect.top + 14));
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function hideGraphTooltip(tooltip) {
  if (!tooltip) return;
  tooltip.classList.add('hidden');
  document.querySelectorAll('.graph-node').forEach(el => el.classList.remove('hover', 'dimmed'));
  document.querySelectorAll('.graph-edge, .graph-edge-label').forEach(el => el.classList.remove('dimmed'));
}

// ── Timeline ──────────────────────────────────────────────────────────────
function renderTimeline(data) {
  const items = data.items || [];
  const listEl = $('timeline-list');
  const countEl = $('timeline-count');
  if (countEl) countEl.textContent = items.length ? `(${items.length})` : '';
  if (!listEl) return;

  if (!items.length) {
    listEl.innerHTML = `<div class="muted small">${t('no-timeline')}</div>`;
    return;
  }

  listEl.innerHTML = items.map(it => {
    const srcMap = { social: 'src-social', trader: 'src-trader', bookmarker: 'src-bookmarker', main: 'src-main' };
    const srcCls = srcMap[it.source] || 'src-trader';
    const stCls  = statusClass(it.status);
    return `
      <div class="tl-item">
        <span class="tl-ts">${shortTs(it.ts)}</span>
        <span class="tl-src ${srcCls}">${escHtml(it.source)}</span>
        <span class="tl-type ${stCls ? 'clr-' + stCls : ''}">${escHtml(it.type)}</span>
        <span class="tl-note">${escHtml(it.note || '')}</span>
      </div>`;
  }).join('');
}

// ── Main fetch loop ────────────────────────────────────────────────────────
async function fetchAll() {
  try {
    const [status, timeline] = await Promise.all([
      fetchJSON('/api/status'),
      fetchJSON('/api/timeline'),
    ]);
    _lastStatus = status;
    _lastTimeline = timeline;
    renderStatus(status);
    renderTimeline(timeline);
  } catch (e) {
    showError(t('fetch-error') + e.message);
    console.error(e);
  }
}

// Auto-refresh every 30 seconds
fetchAll();
setInterval(fetchAll, 30_000);

// ── Init language ──────────────────────────────────────────────────────────
applyLang();
