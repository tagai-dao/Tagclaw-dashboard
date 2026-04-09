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
    'panel-tas': 'TAS 指标',
    'section-tas-values': '当前数值',
    'section-tas-calc': '计算逻辑',
    'label-tas-total': 'TAS 总分',
    'tas-formula-align-src': '0xNought 互动',
    'tas-formula-community-src': '社区互动',
    'tas-window-label': '(24h 滚动窗口)',
    'section-tas': 'TAS 组件',
    'recent-cycles': '最近周期',
    'section-last-decision': '最新决策',
    'section-social-intent': '社交意图',
    'section-social-pipeline': '社交执行链路',
    'panel-bookmarker': '文曲星智能体',
    'label-x-sync': 'X 同步',
    'label-last-sync': '上次同步',
    'section-topic-brief': '话题摘要',
    'section-content-candidates': '内容候选 (by main)',
    'panel-trader': '财神智能体',
    'label-risk': '风险',
    'section-wallet': '钱包余额',
    'section-rewards': '可领奖励',
    'section-risk-flags': '风险标志',
    'section-timeline': '时间轴',
    'section-wiki': 'self-IP LLM Wiki',
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
    'tas-accumulating': '数据积累中',
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
    'shared-executor': '共享执行器 — Main 也通过此路径发布',
    'section-dev': '🔨 鲁班 · 开发调度',
    'label-dev-status': '状态',
    'label-dev-task': '任务',
    'label-dev-completed': '完成时间',
    'section-dev-summary': '任务摘要',
    'section-dev-files': '变更文件',
    'section-social-drafts': '社交草稿',
    'section-social-actions': '策展动作历史',
    'no-social-actions': '暂无动作记录',
    'timeline-filter-note': '仅显示已完成动作',
    'section-x-sync': 'X 数据同步',
    'section-x-posts': 'X 帖子',
    'section-x-bookmarks': 'X 收藏',
    'no-x-data': '暂无数据',
    'section-trade-actions': '交易动作',
    'no-trade-actions': '暂无交易记录',
    'panel-wiki': 'Wiki 系统',
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
    'panel-tas': 'TAS Components',
    'section-tas-values': 'Current Values',
    'section-tas-calc': 'Calculation Logic',
    'label-tas-total': 'TAS Total',
    'tas-formula-align-src': '0xNought Interactions',
    'tas-formula-community-src': 'Community Engagement',
    'tas-window-label': '(24h rolling window)',
    'section-tas': 'TAS Components',
    'recent-cycles': 'Recent cycles',
    'section-last-decision': 'Last Decision',
    'section-social-intent': 'Social Intent',
    'section-social-pipeline': 'Social Execution Pipeline',
    'panel-bookmarker': 'Bookmarker Agent',
    'label-x-sync': 'X Sync',
    'label-last-sync': 'Last Sync',
    'section-topic-brief': 'Topic Brief',
    'section-content-candidates': 'Content Candidates (by main)',
    'panel-trader': 'Trader Agent',
    'label-risk': 'Risk',
    'section-wallet': 'Wallet Balances',
    'section-rewards': 'Claimable Rewards',
    'section-risk-flags': 'Risk Flags',
    'section-timeline': 'Timeline',
    'section-wiki': 'self-IP LLM Wiki',
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
    'tas-accumulating': 'Accumulating data',
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
    'shared-executor': 'Shared executor — Main also publishes via this path',
    'section-dev': '🔨 鲁班 · Dev Dispatch',
    'label-dev-status': 'Status',
    'label-dev-task': 'Task',
    'label-dev-completed': 'Completed',
    'section-dev-summary': 'Task Summary',
    'section-dev-files': 'Files Changed',
    'section-social-drafts': 'Social Drafts',
    'section-social-actions': 'Social Actions',
    'no-social-actions': 'No actions yet',
    'timeline-filter-note': 'Completed actions only',
    'section-x-sync': 'X Sync',
    'section-x-posts': 'X Posts',
    'section-x-bookmarks': 'X Bookmarks',
    'no-x-data': 'No data',
    'section-trade-actions': 'Trade Actions',
    'no-trade-actions': 'No trade actions',
    'panel-wiki': 'Wiki System',
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

  renderTas(data);
  renderMain(data.main || {});
  renderBookmarker(data.bookmarker || {});
  renderTrader(data.trader || {});
  renderDev(data.dev_dispatch || {});
  renderWikiModule(data.wiki_system || {});
}

function numericOrNull(v) {
  if (v === null || v === undefined || v === '' || v === 'partial') return null;
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : null;
}

function sparklineSvg(values, color) {
  const width  = 230;
  const height = 75;
  const padX   = 8;
  const padY   = 8;
  const botPad = 16;  // extra bottom for axis label

  const chartH = height - padY - botPad;

  const valid = values.map((v, i) => ({ v: numericOrNull(v), i })).filter(p => p.v !== null);
  if (!valid.length) {
    return `<svg viewBox="0 0 ${width} ${height}" class="tas-sparkline"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.28)" font-size="9">${t('no-tas-history')}</text></svg>`;
  }

  const rawMin = Math.min(...valid.map(p => p.v));
  const rawMax = Math.max(...valid.map(p => p.v));
  // Pad Y range by 15% so line doesn't hug edges
  const span   = Math.max(rawMax - rawMin, 0.01);
  const yMin   = Math.max(0, rawMin - span * 0.15);
  const yMax   = rawMax + span * 0.15;
  const ySpan  = Math.max(yMax - yMin, 0.001);

  const count  = Math.max(values.length - 1, 1);
  const toX    = i => padX + (i / count) * (width - padX * 2);
  const toY    = v => padY + chartH - ((v - yMin) / ySpan) * chartH;
  const baseY  = padY + chartH;

  // Area fill polygon: line points + baseline corners
  const linePts  = valid.map(p => `${toX(p.i).toFixed(1)},${toY(p.v).toFixed(1)}`);
  const areaPath = `${linePts.join(' ')} ${toX(valid[valid.length - 1].i).toFixed(1)},${baseY.toFixed(1)} ${toX(valid[0].i).toFixed(1)},${baseY.toFixed(1)}`;

  // Extract RGB from hex color for rgba fill
  const hexToRgb = h => { const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h); return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '255,255,255'; };
  const rgb = hexToRgb(color);

  const dots = valid.map(p =>
    `<circle cx="${toX(p.i).toFixed(1)}" cy="${toY(p.v).toFixed(1)}" r="2.5" fill="${color}" opacity="0.9"/>`
  ).join('');

  // Y-axis value labels: min and max
  const yMinLbl = rawMin % 1 === 0 ? rawMin.toFixed(0) : rawMin.toFixed(2);
  const yMaxLbl = rawMax % 1 === 0 ? rawMax.toFixed(0) : rawMax.toFixed(2);

  return `<svg viewBox="0 0 ${width} ${height}" class="tas-sparkline">
    <defs>
      <linearGradient id="grad-${rgb.replace(/,/g,'-')}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0.03"/>
      </linearGradient>
    </defs>
    <line x1="${padX}" y1="${baseY.toFixed(1)}" x2="${(width-padX).toFixed(1)}" y2="${baseY.toFixed(1)}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <polygon points="${areaPath}" fill="url(#grad-${rgb.replace(/,/g,'-')})" />
    <polyline fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" points="${linePts.join(' ')}"/>
    ${dots}
    <text x="${padX}" y="${(baseY + 11).toFixed(1)}" font-size="7.5" fill="rgba(255,255,255,0.3)">${yMinLbl}</text>
    <text x="${(width - padX).toFixed(1)}" y="${(baseY + 11).toFixed(1)}" text-anchor="end" font-size="7.5" fill="rgba(255,255,255,0.3)">${yMaxLbl}</text>
  </svg>`;
}

function _renderTasMiniCard(elId, label, color, values, latest, firstTs, lastTs) {
  const el = $(elId);
  if (!el) return;
  if (!values.length) {
    el.innerHTML = `<div class="muted small">${t('no-tas-history')}</div>`;
    return;
  }
  el.innerHTML = `
    <div class="tas-mini-card">
      <div class="tas-mini-head">
        <span class="tas-mini-label">${escHtml(label)}</span>
        <span class="tas-mini-value" style="color:${color}">${latest !== null && latest !== undefined ? escHtml(fmt(latest)) : '—'}</span>
      </div>
      ${sparklineSvg(values, color)}
      <div class="tas-mini-axis"><span>${escHtml(firstTs)}</span><span>${escHtml(lastTs)}</span></div>
    </div>`;
}

function renderTasHistory(history, tas) {
  const allPoints = Array.isArray(history) ? history : [];

  // Filter to last 3 days (72h) for better readability of recent trends
  const cutoffMs = Date.now() - 72 * 60 * 60 * 1000;
  let points = allPoints.filter(p => {
    if (!p.ts) return false;
    try { return new Date(p.ts).getTime() >= cutoffMs; } catch { return false; }
  });
  // Fallback: if < 5 points in 72h, show last 10 points from full history
  if (points.length < 5) points = allPoints.slice(-10);

  const metrics = [
    { key: 'tas_social', elId: 'tas-history-social', label: 'TAS_social', color: '#58a6ff' },
    { key: 'tas_trade',  elId: 'tas-history-trade',  label: 'TAS_trade',  color: '#f0a500' },
    { key: 'tas_total',  elId: 'tas-history-total',  label: 'TAS_total',  color: '#00d26a' },
  ];

  if (!points.length) {
    metrics.forEach(m => {
      const el = $(m.elId);
      if (el) el.innerHTML = `<div class="muted small">${t('no-tas-history')}</div>`;
    });
    return;
  }

  // Show "accumulating" prompt when not enough data points to draw a meaningful chart
  if (points.length < 5) {
    metrics.forEach(m => {
      const el = $(m.elId);
      if (el) el.innerHTML = `<div class="muted small">${t('tas-accumulating')} (${points.length} 个点)</div>`;
    });
    return;
  }

  const firstTs = points[0]?.ts ? shortTs(points[0].ts) : '—';
  const lastTs  = points[points.length - 1]?.ts ? shortTs(points[points.length - 1].ts) : '—';

  metrics.forEach(m => {
    const values = points.map(p => p[m.key]);
    const latest = numericOrNull(tas[m.key]) ?? [...values].reverse().map(numericOrNull).find(v => v !== null);
    _renderTasMiniCard(m.elId, m.label, m.color, values, latest, firstTs, lastTs);
  });
}

function renderSocialActionsList(elId, actions) {
  const actionsEl = $(elId);
  if (!actionsEl) return;
  if (!actions || !actions.length) {
    actionsEl.innerHTML = `<div class="muted small">${t('no-social-actions')}</div>`;
    return;
  }
  actionsEl.innerHTML = actions.map(a => {
    const typeBadgeCls = statusClass(a.result_status || '');
    const target = String(a.target_key || a.tweet_id || a.url || '').slice(0, 40);
    return `
    <div class="list-item">
      <div class="item-left">
        <span class="badge sm${typeBadgeCls ? ' ' + typeBadgeCls : ''}">${escHtml(a.type || '?')}</span>
        ${target ? `<span class="item-sub mono">${escHtml(target)}</span>` : ''}
      </div>
      <div class="item-right">
        ${a.result_status ? `<span class="badge sm ${statusClass(a.result_status)}">${escHtml(a.result_status)}</span>` : ''}
        <span class="muted small">${shortTs(a.executed_at || a.ts || '')}</span>
      </div>
    </div>`;
  }).join('');
}

// ── TAS Panel ──
function renderTas(data) {
  const tas     = (data.main   || {}).tas_latest  || {};
  const history = (data.main   || {}).tas_history || [];
  const tradeD  = (data.trader || {}).tas_trade   || {};

  const social = numericOrNull(tas.tas_social);
  const trade  = numericOrNull(tas.tas_trade);
  const total  = numericOrNull(tas.tas_total);

  // Part 1 — current values
  setText('tas-panel-social', fmt(social));
  setText('tas-panel-trade',  fmt(trade));
  setText('tas-panel-total',  fmt(total));

  const updEl = $('tas-updated-at');
  if (updEl) updEl.textContent = tas.updated_at ? shortTs(tas.updated_at) : '';

  const bigEl = $('tas-total-big');
  if (bigEl) {
    bigEl.textContent = total !== null ? fmt(total) : '—';
    bigEl.className = 'tas-total-big ' + (total === null ? 'clr-error' : total >= 1.5 ? 'clr-ok' : total >= 0.8 ? 'clr-warn' : 'clr-error');
  }

  // Part 2 — history chart
  renderTasHistory(history, tas);

  // Part 3 — calculation logic
  // TAS_SOCIAL
  const calcSocialEl = $('tas-calc-social');
  if (calcSocialEl) {
    calcSocialEl.textContent = social !== null ? fmt(social) : '—';
    calcSocialEl.className = 'mono small ' + (social === null ? 'muted' : social >= 1.5 ? 'clr-ok' : social >= 0.8 ? 'clr-warn' : 'clr-error');
  }
  const alignScore     = numericOrNull(tas.align_score);
  const communityScore = numericOrNull(tas.community_score);
  const alignEl = $('tas-align-score');
  if (alignEl) {
    alignEl.textContent = alignScore !== null ? fmt(alignScore) : '—';
    alignEl.className = alignScore !== null ? 'mono clr-ok' : 'mono muted';
  }
  const commEl = $('tas-community-score');
  if (commEl) {
    commEl.textContent = communityScore !== null ? fmt(communityScore) : '—';
    commEl.className = communityScore !== null ? 'mono clr-ok' : 'mono muted';
  }

  // TAS_TRADE
  const calcTradeEl = $('tas-calc-trade');
  if (calcTradeEl) {
    calcTradeEl.textContent = trade !== null ? fmt(trade) : '—';
    calcTradeEl.className = 'mono small ' + (trade === null ? 'muted' : trade >= 1.5 ? 'clr-ok' : trade >= 0.8 ? 'clr-warn' : 'clr-error');
  }
  const baseVal      = numericOrNull(tradeD.base_value);
  const claimHist    = numericOrNull(tradeD.claim_history_score);
  const holdingScore = numericOrNull(tradeD.holding_trend_score) ?? numericOrNull(tradeD.holding_trend);
  setText('tas-base-value',    baseVal   !== null ? fmt(baseVal)   : '—');
  setText('tas-claim-history', claimHist !== null ? fmt(claimHist) : '—');
  setText('tas-holding-trend', holdingScore !== null ? fmt(holdingScore) : '—');

  // TAS_TOTAL formula
  const calcTotalEl = $('tas-calc-total');
  if (calcTotalEl) {
    calcTotalEl.textContent = total !== null ? fmt(total) : '—';
    calcTotalEl.className = 'mono small ' + (total === null ? 'muted' : total >= 1.5 ? 'clr-ok' : total >= 0.8 ? 'clr-warn' : 'clr-error');
  }
  setText('tas-formula-social', social !== null ? fmt(social) : '—');
  setText('tas-formula-trade',  trade  !== null ? fmt(trade)  : '—');
  const formulaTotalEl = $('tas-formula-total');
  if (formulaTotalEl) {
    formulaTotalEl.textContent = total !== null ? fmt(total) : '—';
    formulaTotalEl.className = 'mono bold ' + (total === null ? 'muted' : total >= 1.5 ? 'clr-ok' : total >= 0.8 ? 'clr-warn' : 'clr-error');
  }
}

// ── Main Panel ──
function renderMain(main) {
  const ip  = main.input_packet   || {};
  const tas = main.tas_latest     || {};
  const dec = main.last_decision  || {};
  const sp  = main.strategy_plan  || {};
  const ba  = main.budget_allocation || {};
  const att = main.latest_attribution || {};
  const si  = main.social_intent  || {};
  const sa  = main.social_actions || [];
  const sum = ip.summary || {};

  const op = sum.op ?? null;
  const vp = sum.vp ?? null;
  setText('main-op', op !== null ? fmtNum(op) : '—');
  setText('main-vp', vp !== null ? fmtNum(vp) : '—');
  setBar('bar-op', op !== null ? (op / 2000) * 100 : 0, op > 1500 ? 'ok' : op > 800 ? 'warn' : 'error');
  setBar('bar-vp', vp !== null ? (vp / 200)  * 100 : 0, 'ok');

  const mode = sum.mode || dec.mode || '—';
  setBadge('main-mode-badge', mode, mode.toLowerCase().replace(/[^a-z-]/g, ''));

  const decText = [
    dec.social_decision ? `${t('decision-social')}: ${dec.social_decision}` : null,
    dec.treasury_decision ? `${t('decision-treasury')}: ${dec.treasury_decision}` : null,
    dec.reason || null,
  ].filter(Boolean).join('\n') || '—';
  setText('main-decision', decText);

  const strategyEl = $('main-strategy-plan');
  if (strategyEl) {
    const metrics = (sp.target_metrics || []).join(', ');
    const expected = sp.expected_uplift || {};
    strategyEl.innerHTML = `
      <div><strong>${escHtml(sp.strategy_action || dec.strategy_action || '—')}</strong></div>
      <div class="muted small">${escHtml(sp.hypothesis || dec.planning_focus || '—')}</div>
      <div class="muted small">targets: ${escHtml(metrics || '—')} · confidence: ${sp.confidence != null ? fmt(sp.confidence) : '—'}</div>
      <div class="muted small">uplift → TAS ${expected.tas != null ? fmt(expected.tas) : '—'} · social ${expected.tas_social != null ? fmt(expected.tas_social) : '—'} · trade ${expected.tas_trade != null ? fmt(expected.tas_trade) : '—'}</div>`;
  }

  const budgetEl = $('main-budget-allocation');
  if (budgetEl) {
    const alloc = ba.allocations || {};
    budgetEl.innerHTML = listHtml([
      { title: 'Bookmarker / social', sub: `OP ${fmtNum(alloc.bookmarker?.op_budget)} · VP ${fmtNum(alloc.bookmarker?.vp_budget)}`, right: alloc.bookmarker?.authorized ? 'active' : 'hold' },
      { title: 'Trader / treasury', sub: `$${fmt(alloc.trader?.usd_budget)} · risk ${alloc.trader?.risk_budget || ba.risk_budget || '—'}`, right: alloc.trader?.authorized ? 'active' : 'hold' },
      { title: 'Claude Dispatch / dev', sub: `slots ${alloc.claude_dispatch?.slots ?? ba.dev_budget ?? 0}`, right: ba.dev_budget ? 'on' : 'off' },
      { title: 'Main reserve', sub: `OP ${fmtNum(alloc.main?.reserve_op)} · VP ${fmtNum(alloc.main?.reserve_vp)}`, right: ba.attention_budget || '—' },
    ]);
  }

  const attEl = $('main-attribution');
  if (attEl) {
    const contrib = att.agent_contributions || {};
    attEl.innerHTML = listHtml([
      { title: 'TAS delta', sub: `before ${att.tas_before != null ? fmt(att.tas_before, 3) : '—'} → after ${att.tas_after != null ? fmt(att.tas_after, 3) : '—'}`, right: att.tas_delta != null ? fmt(att.tas_delta, 3) : '—' },
      { title: 'Attribution confidence', sub: `recommendation: ${att.scale_recommendation || '—'}`, right: att.attribution_confidence != null ? fmt(att.attribution_confidence) : '—' },
      { title: 'Bookmarker / Trader / Dispatch', sub: `B=${contrib.bookmarker != null ? fmt(contrib.bookmarker) : '—'} · T=${contrib.trader != null ? fmt(contrib.trader) : '—'} · D=${contrib.claude_dispatch != null ? fmt(contrib.claude_dispatch) : '—'}`, right: att.strategy_id || '—' },
    ]);
  }

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

  renderSocialActionsList('main-actions-list', sa);

  // Pipeline
  renderPipeline('main-social-pipeline', main.social_pipeline, 'main');
}

// ── Social Pipeline Renderer ──
function renderPipeline(elId, pipeline, agent) {
  const el = $(elId);
  if (!el || !pipeline || !pipeline.steps) { if (el) el.innerHTML = '<div class="muted small">—</div>'; return; }
  const steps = pipeline.steps;
  const mi = (agent === 'bookmarker' && pipeline.main_influence) ? pipeline.main_influence : null;

  let html = '';

  // Main influence context banner for bookmarker pipeline
  if (mi) {
    const decCls = mi.social_decision === 'authorize' ? 'clr-ok' : 'clr-warn';
    const authIcon = mi.authorized ? '✓' : '✗';
    const authCls = mi.authorized ? 'clr-ok' : 'clr-warn';
    html += `<div class="pipeline-main-influence">
      <div class="mi-header">
        <span class="mi-label">Main Agent</span>
        <span class="mi-badge ${decCls}">${escHtml(mi.social_decision)}</span>
        <span class="mi-badge ${authCls}">intent ${authIcon}</span>
      </div>
    </div>`;
  }

  html += '<div class="pipeline-steps-row">';
  html += steps.map((step, i) => {
    const arrow = i < steps.length - 1 ? '<div class="pipeline-arrow">→</div>' : '';
    const stCls = 'st-' + (step.status || '').toLowerCase().replace(/[^a-z-]/g, '');
    let detail = '';
    let miAnnotation = '';

    if (agent === 'main' && step.id === 'gate_checks') {
      const checks = step.data || {};
      detail = Object.entries(checks)
        .filter(([k]) => !k.startsWith('_'))
        .map(([k, v]) =>
          `<div class="gate-item"><span class="${v ? 'gate-pass' : 'gate-fail'}">${v ? '✓' : '✗'}</span> ${escHtml(k)}</div>`
        ).join('');
      const passCount = checks._pass_count ?? Object.values(checks).filter(Boolean).length;
      const total = checks._total ?? Object.keys(checks).filter(k => !k.startsWith('_')).length;
      if (total) detail = `<div class="gate-summary">${passCount}/${total} pass</div>` + detail;
    } else if (agent === 'main' && step.id === 'social_intent') {
      const d = step.data || {};
      detail = `authorized: ${d.authorized ? '✓' : '✗'}`;
      if (d.action_count) detail += ` · ${d.action_count} actions`;
      if (d.reason) detail += `<br>${escHtml(d.reason.slice(0, 80))}`;
    } else if (agent === 'main' && step.id === 'cli_wrapper') {
      const d = step.data || {};
      detail = `<span class="mono-sm">${escHtml(d.script || 'main_social_action.py')}</span>`;
      detail += `<br>actor: ${escHtml(d.actor || 'main')} → ${escHtml(d.records_to || 'social-history.json')}`;
    } else if (agent === 'main' && step.id === 'decision_history') {
      const d = step.data || {};
      detail = escHtml(d.social_decision || '—');
      if (d.main_action_count) detail += ` · ${d.main_action_count} actions`;
      if (d.reason) detail += `<br><span class="muted">${escHtml(d.reason.slice(0, 80))}</span>`;
    } else if (agent === 'bookmarker' && step.id === 'x_sync') {
      const d = step.data || {};
      detail = `source: ${escHtml(d.source || d.source_class || '—')}`;
      if (d.updated_at) detail += `<br>${shortTs(d.updated_at)}`;
    } else if (agent === 'bookmarker' && step.id === 'topic_brief') {
      const d = step.data || {};
      const kws = (d.keywords || []).slice(0, 4);
      detail = kws.length ? kws.map(k => `<span class="tag-xs">${escHtml(k)}</span>`).join(' ') : '—';
      if (d.urgency) detail += `<br>urgency: ${escHtml(d.urgency)}`;
    } else if (agent === 'bookmarker' && step.id === 'content_candidates') {
      const d = step.data || {};
      detail = `${d.count || 0} candidates`;
      const types = d.types || {};
      if (Object.keys(types).length) detail += '<br>' + Object.entries(types).map(([k,v]) => `${escHtml(String(k))}×${v}`).join(' ');
    } else if (agent === 'bookmarker' && step.id === 'social_drafts') {
      const d = step.data || {};
      detail = `${d.count || 0} drafts`;
      const types = d.types || {};
      if (Object.keys(types).length) detail += ': ' + Object.entries(types).map(([k,v]) => `${escHtml(String(k))}×${v}`).join(' ');
      if (d.x_items_seen) detail += `<br>seen: ${d.x_items_seen}`;
    } else if (agent === 'bookmarker' && step.id === 'autonomy_intent') {
      const d = step.data || {};
      detail = `mode: ${escHtml(d.mode || '—')}`;
      if (d.recommended_actions?.length) detail += `<br>→ ${escHtml(d.recommended_actions.join(', '))}`;
      // Show TAS/OP context
      if (d.tas_social != null || d.op != null) {
        const thr = d.thresholds || {};
        const tasVal = (typeof d.tas_social === 'number') ? d.tas_social.toFixed(2) : '—';
        const opVal = (typeof d.op === 'number') ? Math.round(d.op) : '—';
        detail += `<br><span class="threshold-row">TAS=${tasVal} OP=${opVal}</span>`;
      }
      // Main guidance annotation
      if (mi) {
        const g = mi.guidance || {};
        const parts = [g.action_emphasis, g.signal_priority, g.experiment_mode].filter(Boolean);
        if (parts.length) {
          miAnnotation = `<div class="mi-annotation"><span class="mi-arrow-in">⤹</span> main_guidance: ${escHtml(parts.join(', '))}</div>`;
        } else {
          miAnnotation = `<div class="mi-annotation"><span class="mi-arrow-in">⤹</span> main_guidance</div>`;
        }
      }
    } else if (agent === 'bookmarker' && step.id === 'execution') {
      const d = step.data || {};
      const parts = [];
      if (d.attempted) parts.push(`${d.succeeded}/${d.attempted} ok`);
      if (d.failed) parts.push(`${d.failed} fail`);
      if (d.noop != null) parts.push(`${d.noop} noop`);
      detail = parts.join(' · ') || '—';
      // Breaker status inline
      const brkState = d.breaker_state || '—';
      const brkCls = brkState === 'open' ? 'clr-error' : 'clr-ok';
      detail += `<br>breaker: <span class="${brkCls}">${escHtml(brkState)}</span>`;
      if (d.breaker_consecutive) detail += ` (${d.breaker_consecutive}×)`;
      if (d.filtered_types?.length) detail += `<br>filtered: ${escHtml(d.filtered_types.join(', '))}`;
      if (d.executed_at) detail += `<br>${shortTs(d.executed_at)}`;
      // Shared executor annotation
      if (mi) {
        miAnnotation = `<div class="mi-annotation"><span class="mi-arrow-in">⤹</span> ${t('shared-executor')}</div>`;
      }
    } else if (step.id === 'breaker') {
      // Legacy fallback for old schema
      const d = step.data || {};
      detail = d.state || '—';
      if (d.consecutive_failures) detail += ` · ${d.consecutive_failures} consecutive`;
      if (d.until) detail += `<br>until ${shortTs(d.until)}`;
    } else if (step.id === 'decision') {
      // Legacy fallback for old schema
      detail = step.data?.social_decision || '—';
    }
    const mainGateBadge = (agent === 'bookmarker' && step.id === 'content_candidates')
      ? ` <span class="step-origin-badge step-origin-main" title="main agent gate: has_candidates check">main gate</span>`
      : '';
    return `<div class="pipeline-step">
      <div class="pipeline-step-card${miAnnotation ? ' has-mi' : ''}">
        <div class="step-label">${escHtml(step.label)}${mainGateBadge}</div>
        <div class="step-badge ${stCls}">${escHtml(step.status || '—')}</div>
        <div class="step-detail">${detail}</div>
        ${miAnnotation}
      </div>
      ${arrow}
    </div>`;
  }).join('');
  html += '</div>';

  el.innerHTML = html;
}

// ── X Section Toggle ──
function toggleXSection(id) {
  const list = $(id + '-list');
  const btn  = $(id + '-toggle');
  if (!list) return;
  const isOpen = list.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}

// ── Generic Section Toggle (collapsible by id pattern) ──
function toggleSection(id) {
  const coll = $(id + '-collapsible');
  const btn  = $(id + '-toggle');
  if (!coll) return;
  const isOpen = coll.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '▲' : '▼';
}

// ── Bookmarker Panel ──
function renderBookmarker(bm) {
  const src   = bm.source_health       || {};
  const brief = bm.topic_brief         || {};
  const cands = bm.content_candidates  || {};
  const tperf = bm.topic_performance   || {};
  const auto  = bm.autonomy_intent     || {};

  const xSync = src.x_sync || {};
  setText('bm-sync-at', shortTs(xSync.fetched_at || src.fetched_at || src.updated_at));

  const autoMode = auto.mode || auto.autonomy_mode || '—';
  setBadge('bm-mode-badge', autoMode, autoMode.toLowerCase().replace(/[^a-z-]/g,''));

  setText('bm-headline', brief.headline || brief.summary || '—');
  const kwEl = $('bm-keywords');
  if (kwEl) {
    const kws = brief.keywords || [];
    kwEl.innerHTML = kws.slice(0, 8).map(k => `<span class="tag">${escHtml(k)}</span>`).join('');
  }

  const rawCandidates = cands.candidates || cands.items || brief.candidates || [];
  // Filter out empty/non-actionable items (e.g. {count:0, publish_ready:false})
  const candidateList = rawCandidates.filter(c => c.publish_ready !== false || c.title || c.headline || c.url);
  const count = candidateList.length;
  setText('bm-cands-count', count ? `${count} ${t('candidates-unit')}` : t('no-candidates'));
  const candsEl = $('bm-cands-list');
  if (candsEl) {
    candsEl.innerHTML = listHtml(
      candidateList.slice(0, 5).map(c => ({
        title: c.title || c.headline || c.summary || c.url || JSON.stringify(c).slice(0, 80),
        sub:   `${c.type || c.source || ''}${c.recommended_action ? ' · ' + c.recommended_action : ''}${c.confidence != null ? ' · conf ' + fmt(c.confidence) : ''}`,
        right: c.expected_tas_social_uplift != null ? fmt(c.expected_tas_social_uplift) : (c.score != null ? fmt(c.score) : ''),
      }))
    );
  }

  const cqEl = $('bm-candidate-quality');
  if (cqEl) {
    const top = candidateList[0] || {};
    const mix = cands.recommended_action_mix || tperf.recommended_action_mix || {};
    const mixText = Object.entries(mix).map(([k,v]) => `${k}×${v}`).join(' · ');
    cqEl.innerHTML = listHtml([
      { title: 'Top candidate', sub: `${top.candidate_id || tperf.top_candidate_id || '—'}${top.theme ? ' · ' + top.theme : ''}`, right: top.expected_tas_social_uplift != null ? fmt(top.expected_tas_social_uplift) : (tperf.top_candidate_uplift != null ? fmt(tperf.top_candidate_uplift) : '—') },
      { title: 'Recommended action mix', sub: mixText || '—', right: `${candidateList.length} ranked` },
      { title: 'Topic performance', sub: (tperf.keywords || []).slice(0, 4).join(', ') || '—', right: tperf.theme || '—' },
    ]);
  }

  // Social Drafts
  const draftsObj = bm.social_drafts || {};
  const drafts = draftsObj.drafts || [];
  const draftsMeta = draftsObj.meta || {};
  setText('bm-drafts-count', drafts.length ? `(${drafts.length})` : '');
  const draftsStatusEl = $('bm-drafts-status');
  if (draftsStatusEl) {
    draftsStatusEl.textContent = draftsObj.status || '—';
    draftsStatusEl.className = 'badge sm ' + statusClass(draftsObj.status || '');
  }
  const draftsEl = $('bm-drafts-list');
  if (draftsEl) {
    if (!drafts.length) {
      draftsEl.innerHTML = '<div class="muted small">No drafts available</div>';
    } else {
      draftsEl.innerHTML = drafts.map(d => {
        const txt = (d.text || '').slice(0, 100) + ((d.text || '').length > 100 ? '…' : '');
        const pickerInfo = draftsMeta.picker_source ? ` · picker: ${draftsMeta.picker_source}` : '';
        return `
        <div class="list-item">
          <div class="item-left">
            <span class="badge sm">${escHtml(d.type || '?')}</span>
            <span class="badge sm muted">${escHtml(d.tick || '')}</span>
            <span class="item-sub">${escHtml(d.theme || '')}</span>
          </div>
          <div class="item-right">
            <span class="muted small">p${d.priority || 0}${pickerInfo}</span>
          </div>
        </div>
        <div class="muted small" style="padding: 2px 8px 6px; font-size: 0.72em; line-height: 1.4;">${escHtml(txt)}</div>`;
      }).join('');
    }
  }

  renderPipeline('bm-social-pipeline', bm.social_pipeline, 'bookmarker');
  renderSocialActionsList('bm-actions-list', bm.social_actions || []);

  // ── X Posts ──
  const xPosts = bm.x_posts || [];
  const xPostsCountEl = $('x-posts-count');
  // Show "N · 过去24h" or "N · 最近"
  if (xPostsCountEl) {
    const isLang = _lang === 'zh';
    const windowLabel = bm.x_posts_window === '24h'
      ? (isLang ? '过去24h' : 'last 24h')
      : (isLang ? '最近记录' : 'recent');
    xPostsCountEl.textContent = xPosts.length ? `${xPosts.length} · ${windowLabel}` : '0';
  }
  const xPostsEl = $('x-posts-list');
  if (xPostsEl) {
    if (!xPosts.length) {
      xPostsEl.innerHTML = `<div class="muted small">${t('no-x-data')}</div>`;
    } else {
      xPostsEl.innerHTML = xPosts.map(p => {
        const topics = (p.topics || []).map(tag =>
          `<span class="x-tag">${escHtml(tag)}</span>`).join('');
        // Format date: try to shorten it
        const dateStr = p.date ? p.date.replace(/ \+0000 /, ' ').replace(/:\d\d /, ' ') : '';
        return `<div class="x-card">
          <div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap">
            <span class="muted small mono">${escHtml(dateStr)}</span>
            ${p.type ? `<span class="badge sm">${escHtml(p.type)}</span>` : ''}
          </div>
          <div style="color:var(--text);margin:.25rem 0">${escHtml(p.content || '')}</div>
          ${topics ? `<div style="display:flex;flex-wrap:wrap;gap:.2rem">${topics}</div>` : ''}
          ${p.interactions ? `<div class="muted small">${escHtml(p.interactions)}</div>` : ''}
        </div>`;
      }).join('');
    }
  }

  // ── X Bookmarks ──
  const xBookmarks = bm.x_bookmarks || [];
  const xBmCountEl = $('x-bookmarks-count');
  if (xBmCountEl) {
    const isLang = _lang === 'zh';
    const bmWindowLabel = bm.x_bookmarks_window === '24h'
      ? (isLang ? '过去24h' : 'last 24h')
      : (isLang ? '最近记录' : 'recent');
    xBmCountEl.textContent = xBookmarks.length ? `${xBookmarks.length} · ${bmWindowLabel}` : '0';
  }
  const xBmEl = $('x-bookmarks-list');
  if (xBmEl) {
    if (!xBookmarks.length) {
      xBmEl.innerHTML = `<div class="muted small">${t('no-x-data')}</div>`;
    } else {
      xBmEl.innerHTML = xBookmarks.map(b => {
        const safeUrl = (b.url || '').startsWith('http') ? b.url : '';
        return `<div class="x-card">
          <div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap">
            ${b.category ? `<span class="badge sm">${escHtml(b.category)}</span>` : ''}
            <span style="color:var(--text);font-weight:600">${escHtml(b.title || '')}</span>
          </div>
          <div class="muted small">${escHtml(b.date || '')}${b.author ? ' · ' + escHtml(b.author) : ''}</div>
          ${b.summary ? `<div style="color:var(--text);margin:.2rem 0">${escHtml(b.summary)}</div>` : ''}
          ${safeUrl ? `<div><a href="${escHtml(safeUrl)}" target="_blank" rel="noopener" class="dev-link">↗ link</a></div>` : ''}
        </div>`;
      }).join('');
    }
  }
}

// ── Trader Panel ──
function renderTrader(trader) {
  const wallet  = trader.wallet_snapshot   || {};
  const rewards = trader.reward_status     || {};
  const tasT    = trader.tas_trade         || {};
  const risk    = trader.risk_status       || {};
  const onchain = trader.onchain_positions || {};
  const baseline = trader.portfolio_baseline || {};
  const delta = trader.portfolio_delta || {};
  const mqual = trader.measurement_quality || {};

  setText('trader-tas', fmt(tasT.value ?? tasT.score ?? tasT.tas_trade));
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

  const qualEl = $('trader-measurement-quality');
  if (qualEl) {
    qualEl.innerHTML = listHtml([
      { title: 'Overall quality', sub: `actionability ${mqual.actionability || '—'} · confidence ${mqual.overall_confidence != null ? fmt(mqual.overall_confidence) : '—'}`, right: mqual.overall_status || '—' },
      { title: 'Visibility', sub: `wallet ${mqual.wallet_visibility || '—'} · price ${mqual.price_visibility || '—'} · reward ${mqual.reward_visibility || '—'}`, right: `cost basis ${mqual.cost_basis_quality || '—'}` },
      { title: 'Baseline / delta', sub: `known $${baseline.portfolio_value_usd_known != null ? fmt(baseline.portfolio_value_usd_known) : '—'} · Δ $${delta.portfolio_value_usd_delta != null ? fmt(delta.portfolio_value_usd_delta) : '—'}`, right: delta.status || '—' },
    ]);
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

  const tradeActEl = $('trade-actions-list');
  if (tradeActEl) {
    const actions = trader.trade_actions || [];
    if (!actions.length) {
      tradeActEl.innerHTML = `<div class="muted small">${t('no-trade-actions')}</div>`;
    } else {
      tradeActEl.innerHTML = actions.map(a => {
        const action = (a.action || '?').toLowerCase();
        const badgeCls = action === 'buy' ? 'ok' : action === 'sell' ? 'warn' : '';
        const tick = a.tick || '';
        const amtStr = a.amount != null ? fmtNum(parseFloat(a.amount)) : '';
        const usdStr = a.usd != null ? `$${fmt(a.usd)}` : '';
        const detail = [tick, amtStr, usdStr].filter(Boolean).join(' ');
        const txSnip = a.tx_hash ? a.tx_hash.slice(0, 16) : '';
        return `
        <div class="list-item">
          <div class="item-left">
            <span class="badge sm${badgeCls ? ' ' + badgeCls : ''}">${escHtml(action)}</span>
            <span class="item-sub mono">${escHtml(detail)}</span>
            ${txSnip ? `<span class="item-sub mono muted">tx:${escHtml(txSnip)}</span>` : ''}
          </div>
          <div class="item-right">
            <span class="muted small">${shortTs(a.ts || '')}</span>
          </div>
        </div>`;
      }).join('');
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
  const stage = dev.stage_status || {};
  const backlog = dev.backlog || {};
  const roi = dev.dispatch_roi || {};
  setBadge('dev-status-badge', result.status || status.status || '—');
  setBadge('dev-stage-badge', stage.status || '—');
  setText('dev-completed-at', shortTs(result.completed_at || status.updated_at || status.started_at));

  const roiEl = $('dev-dispatch-roi');
  if (roiEl) {
    roiEl.innerHTML = listHtml([
      { title: 'Target metric', sub: roi.target_metric || '—', right: roi.roi_status || '—' },
      { title: 'Expected TAS impact', sub: `task: ${roi.task_id || '—'}`, right: roi.expected_tas_impact != null ? fmt(roi.expected_tas_impact) : '—' },
    ]);
  }

  const stageEl = $('dev-stage-summary');
  if (stageEl) {
    const gateVerdicts = stage.gate_verdicts || {};
    const gates = ['build', 'review', 'qa', 'release', 'retro'];
    stageEl.innerHTML = listHtml(gates.map(g => ({
      title: g,
      sub: `verdict: ${gateVerdicts[g] || 'pending'}`,
      right: stage.current_stage === g ? '← current' : '',
    })));
  }

  const backlogEl = $('dev-backlog-list');
  if (backlogEl) {
    const items = (backlog.items || []).slice(0, 5);
    if (!items.length) {
      backlogEl.innerHTML = `<div class="muted small">No backlog items</div>`;
    } else {
      backlogEl.innerHTML = listHtml(items.map(it => ({
        title: it.title || it.id || '—',
        sub: `${it.target_metric || '—'} · impact ${it.expected_tas_impact != null ? fmt(it.expected_tas_impact) : '—'} · ${it.status || '—'}`,
        right: it.priority != null ? fmt(it.priority) : '—',
      })));
    }
  }

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

// ── self-IP LLM Wiki Module ──────────────────────────────────────────────

function renderWikiModule(wiki) {
  if (!wiki || !wiki.raw_layer) {
    // Fetch from /api/wiki if not present in status payload
    fetchJSON('/api/wiki').then(w => _renderWikiModuleInner(w)).catch(e => console.warn('wiki fetch error:', e));
    return;
  }
  _renderWikiModuleInner(wiki);
}

function _renderWikiModuleInner(wiki) {
  renderRawLayer(wiki);
  renderWikiLayer(wiki);
  renderExecutionBrief(wiki);
  renderIngestMatrix(wiki);
  renderAgentWikiStatus(wiki);
}

function _ageText(hours) {
  if (hours == null) return '—';
  if (hours < 1) return '<1h ago';
  if (hours < 24) return Math.round(hours) + 'h ago';
  return Math.round(hours / 24) + 'd ago';
}

function renderRawLayer(wiki) {
  const raw = wiki.raw_layer || {};
  const el = $('wiki-raw-list');
  const totalEl = $('wiki-raw-total');
  if (totalEl) totalEl.textContent = (raw.total_files ?? 0).toLocaleString() + ' files';
  if (!el) return;
  const subdirs = raw.subdirs || {};
  const keys = Object.keys(subdirs);
  if (!keys.length) { el.innerHTML = '<span class="muted small">no data</span>'; return; }
  el.innerHTML = keys.map(k => {
    const d = subdirs[k];
    return `<div class="wiki-dir-row">
      <span class="wiki-dir-name" style="opacity:.7">${escHtml(k)}</span>
      <span class="wiki-dir-meta"><span>${d.file_count ?? 0}</span><span class="muted">${_ageText(d.newest_file_age_hours)}</span></span>
    </div>`;
  }).join('');
}

function renderWikiLayer(wiki) {
  const wl = wiki.wiki_layer || {};
  const el = $('wiki-wiki-list');
  const totalEl = $('wiki-wiki-total');
  if (totalEl) totalEl.textContent = (wl.total_files ?? 0).toLocaleString() + ' files';
  if (!el) return;
  const subdirs = wl.subdirs || {};
  const keys = Object.keys(subdirs);
  if (!keys.length) { el.innerHTML = '<span class="muted small">no data</span>'; return; }
  el.innerHTML = keys.map(k => {
    const d = subdirs[k];
    return `<div class="wiki-dir-row">
      <span class="wiki-dir-name">${escHtml(k)}</span>
      <span class="wiki-dir-meta"><span>${d.file_count ?? 0}</span><span class="muted">${_ageText(d.newest_file_age_hours)}</span><span class="wiki-dir-tag">${escHtml(d.role || 'compiled')}</span></span>
    </div>`;
  }).join('');

  // Lint inline
  const lintEl = $('wiki-lint-inline');
  if (lintEl) {
    const lint = wiki.lint || {};
    const brokenCls = (lint.broken_links_count || 0) > 0 ? 'clr-error' : 'clr-ok';
    const staleCls = (lint.stale_count || 0) > 0 ? 'clr-warn' : 'clr-ok';
    const orphanCls = (lint.orphan_count || 0) > 0 ? 'clr-warn' : 'clr-ok';
    lintEl.innerHTML = `Lint: <span class="${brokenCls}">${lint.broken_links_count ?? 0} broken</span> / <span class="${staleCls}">${lint.stale_count ?? 0} stale</span> / <span class="${orphanCls}">${lint.orphan_count ?? 0} orphan</span>`;
  }
}

function renderExecutionBrief(wiki) {
  const eb = wiki.execution_brief || {};
  const el = $('wiki-brief-content');
  if (!el) return;

  const compiledAt = eb.compiled_at ? shortTs(eb.compiled_at) : '—';
  const validUntil = eb.valid_until || '';
  let countdown = '';
  if (validUntil) {
    try {
      const diff = (new Date(validUntil) - Date.now()) / (1000 * 60 * 60 * 24);
      countdown = diff > 0 ? `(${Math.ceil(diff)}d left)` : '(expired)';
    } catch (_) {}
  }

  const cs = eb.credit_strategy || {};
  const tokens = (cs.recommended_tokens || []).join(', ') || '—';

  const themes = eb.top_themes || [];
  const themesHtml = themes.map(th => {
    const pct = Math.min(100, Math.max(0, (th.heat_score ?? 0) * 100));
    return `<div class="wiki-theme-row">
      <span class="small" style="min-width:100px">${escHtml(th.name)}</span>
      <div class="wiki-theme-bar"><div class="wiki-theme-bar-fill" style="width:${pct.toFixed(0)}%"></div></div>
      <span class="mono small muted">${(th.heat_score ?? 0).toFixed(3)}</span>
      <span class="muted small">${escHtml((th.agent_action || '').slice(0, 40))}</span>
    </div>`;
  }).join('');

  el.innerHTML = `
    <div class="wiki-dir-row"><span class="wiki-dir-name">compiled_at</span><span class="mono small">${escHtml(compiledAt)}</span></div>
    <div class="wiki-dir-row"><span class="wiki-dir-name">valid_until</span><span class="mono small">${validUntil ? escHtml(shortTs(validUntil)) : '—'} <span class="muted">${escHtml(countdown)}</span></span></div>
    <div class="wiki-dir-row"><span class="wiki-dir-name">vp_flush</span><span class="mono small">${cs.vp_flush_threshold ?? '—'}</span></div>
    <div class="wiki-dir-row"><span class="wiki-dir-name">daily_vp</span><span class="mono small">${cs.daily_vp_target ?? '—'}</span></div>
    <div class="wiki-dir-row"><span class="wiki-dir-name">tokens</span><span class="mono small">${escHtml(tokens)}</span></div>
    ${themesHtml || '<div class="muted small">no themes</div>'}`;
}

function renderIngestMatrix(wiki) {
  const pipes = wiki.ingest_pipeline || [];
  const tbody = $('wiki-ingest-tbody');
  const summaryEl = $('wiki-ingest-summary');
  if (!tbody) return;

  const okCount = pipes.filter(p => p.status === 'ok').length;
  if (summaryEl) summaryEl.textContent = `${okCount}/${pipes.length} ok`;

  tbody.innerHTML = pipes.map(p => {
    const st = (p.status || 'missing').toLowerCase();
    const badgeCls = st === 'ok' ? 'ok' : st === 'stale' ? 'stale' : 'missing';
    const lastRun = p.last_run ? shortTs(p.last_run) : '—';
    const flow = (p.raw_output && p.raw_output !== '—' ? p.raw_output : '') + (p.wiki_output ? ' &rarr; ' + p.wiki_output : '');
    return `<tr>
      <td class="mono small">${escHtml(p.name)}</td>
      <td class="muted small">${escHtml(p.script)}</td>
      <td class="muted small">${escHtml(p.freq)}</td>
      <td class="muted small" style="font-size:.7em">${flow || '—'}</td>
      <td class="mono small">${escHtml(lastRun)}</td>
      <td><span class="wiki-badge ${badgeCls}">${escHtml(st)}</span></td>
    </tr>`;
  }).join('');
}

function renderAgentWikiStatus(wiki) {
  const agentEl = $('wiki-agent-cards');
  if (!agentEl) return;
  const agents = wiki.agent_wiki_status || {};
  const icons = { main: '&#129504;', bookmarker: '&#128204;', trader: '&#128176;' };
  const agentKeys = { main: ['wiki_brief_available', 'wiki_top_theme', 'wiki_content_direction', 'wiki_trending_ticks', 'wiki_platform_available', 'wiki_platform_snapshot_age_hours', 'wiki_brief_valid_until'],
                      bookmarker: ['wiki_brief_available', 'wiki_top_theme', 'wiki_trending_ticks', 'wiki_platform_available'],
                      trader: ['wiki_platform_available', 'wiki_trending_ticks', 'wiki_credit_vp_threshold', 'wiki_brief_available'] };

  agentEl.innerHTML = ['main', 'bookmarker', 'trader'].map(name => {
    const d = agents[name] || {};
    const keys = agentKeys[name] || Object.keys(d);
    const rows = keys.map(k => {
      let v = d[k];
      if (Array.isArray(v)) {
        v = v.map(t => `<span class="wiki-tick-pill">${escHtml(t)}</span>`).join('');
        return `<div class="kv-row"><span class="k">${escHtml(k.replace('wiki_', ''))}</span><span class="v">${v}</span></div>`;
      }
      const display = v === true ? '<span class="clr-ok">true</span>' : v === false ? '<span class="clr-error">false</span>' : escHtml(String(v ?? '—'));
      return `<div class="kv-row"><span class="k">${escHtml(k.replace('wiki_', ''))}</span><span class="v">${display}</span></div>`;
    }).join('');

    return `<div class="wiki-agent-card">
      <div class="agent-name"><span>${icons[name] || ''}</span> ${escHtml(name)}</div>
      ${rows || '<span class="muted small">no wiki fields</span>'}
    </div>`;
  }).join('');
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
