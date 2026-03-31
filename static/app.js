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
    'section-data-collection': '数据采集',
    'dc-x-sync': 'X 同步',
    'dc-alignment': '0xNought 数据对齐',
    'dc-community': '社区参与数据',
    'dc-monitor': '监控每日社区概览',
    'dc-trending': '热门资讯',
    'dc-last-sync': '上次同步',
    'dc-source': '来源',
    'dc-tweets': '推文数',
    'dc-bookmarks': '收藏数',
    'dc-tas-social': 'TAS_social',
    'dc-align-score': '对齐分',
    'dc-community-score': '社区分',
    'dc-window': '窗口',
    'dc-community-score-val': '社区分',
    'dc-scanned-at': '扫描时间',
    'dc-posts-scanned': '已扫描帖子',
    'dc-source-label': '来源',
    'dc-monitor-community': '社区',
    'dc-monitor-latest-post': '最新帖子',
    'dc-monitor-age': '时效',
    'dc-monitor-stale': '是否过期',
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
    'section-data-collection': 'Data Collection',
    'dc-x-sync': 'X Sync',
    'dc-alignment': 'Data Alignment by 0xNought',
    'dc-community': 'Community Engagement Data',
    'dc-monitor': 'Monitor Daily Community Overviews',
    'dc-trending': 'Trending News',
    'dc-last-sync': 'Last Sync',
    'dc-source': 'Source',
    'dc-tweets': 'Tweets',
    'dc-bookmarks': 'Bookmarks',
    'dc-tas-social': 'TAS_social',
    'dc-align-score': 'Align Score',
    'dc-community-score': 'Community Score',
    'dc-window': 'Window',
    'dc-community-score-val': 'Community Score',
    'dc-scanned-at': 'Scanned At',
    'dc-posts-scanned': 'Posts Scanned',
    'dc-source-label': 'Source',
    'dc-monitor-community': 'Community',
    'dc-monitor-latest-post': 'Latest Post',
    'dc-monitor-age': 'Age',
    'dc-monitor-stale': 'Stale',
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
  renderDataCollection(data).catch(e => console.warn('renderDataCollection error:', e));
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

// ── Main Panel ──
function renderMain(main) {
  const ip  = main.input_packet   || {};
  const tas = main.tas_latest     || {};
  const dec = main.last_decision  || {};
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
      candidateList.slice(0, 3).map(c => ({
        title: c.title || c.headline || c.url || JSON.stringify(c).slice(0, 80),
        sub:   c.type || c.source || '',
        right: c.score != null ? fmt(c.score) : '',
      }))
    );
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

// ── Data Alignment by 0xNought ────────────────────────────────────────────

function renderDataAlignment(data) {
  const rec = (data.bookmarker?.twin_recognition?.alignment) || {};
  const level = rec.level ?? '—';
  const score = rec.total_score ?? '—';
  const interactions = rec.interactions_count ?? '—';
  const lastAt = rec.last_interaction_at ? shortTs(rec.last_interaction_at) : '—';

  setText('dc-alignment-level', level);
  setText('dc-alignment-score', score);
  setText('dc-alignment-interactions', interactions);
  setText('dc-alignment-last', lastAt);

  const pill = $('dc-alignment-status');
  if (pill) {
    pill.textContent = level !== '—' ? `Level ${level}` : '—';
    pill.className = 'dc-status-pill ' + (level === 3 ? 'ok' : level === 2 ? 'stale' : '');
  }
}

// ── Data Collection Module ────────────────────────────────────────────────

function dcPill(id, status) {
  const el = $(id);
  if (!el) return;
  el.textContent = status || '—';
  el.className = 'dc-status-pill';
  const s = String(status || '').toLowerCase();
  if (s === 'ok' || s === 'healthy') el.classList.add('ok');
  else if (s === 'stale') el.classList.add('stale');
  else if (s === 'alert' || s === 'error' || s === 'fail') el.classList.add('alert');
}

async function renderDataCollection(data) {
  const bm = data.bookmarker || {};
  const tb = bm.topic_brief || {};

  // ── Card 1: X Sync ──
  const xSyncStatus = bm.x_sync_status || bm.source_health?.status || '—';
  dcPill('dc-x-sync-status', xSyncStatus);
  setText('dc-x-sync-at', bm.x_sync_at || bm.source_health?.updated_at ? shortTs(bm.x_sync_at || bm.source_health?.updated_at) : '—');
  const sh = bm.source_health || {};
  const okSource = ['bird', 'browser_relay', 'xurl'].find(k => sh[k] === 'ok') || '—';
  setText('dc-x-sync-source', okSource);
  const totalItems = (Array.isArray(bm.x_posts) ? bm.x_posts.length : 0)
                   + (Array.isArray(bm.x_bookmarks) ? bm.x_bookmarks.length : 0);
  setText('dc-x-sync-bookmarks', totalItems > 0 ? totalItems : '—');

  // ── Card 2: Data Alignment by 0xNought ──
  renderDataAlignment(data);

  // ── Card 3: Community Engagement ──
  try {
    const cs = await fetchJSON('/api/runtime/bookmarker/community-scan.json');
    dcPill('dc-community-status', cs.status || 'ok');
    setText('dc-community-score',   fmt(cs.community_score));
    setText('dc-community-scanned', cs.scanned_at ? shortTs(cs.scanned_at) : '—');
    setText('dc-community-posts',   cs.posts_scanned ?? cs.post_count ?? cs.feed_size ?? '—');
    setText('dc-community-source',  cs.source || cs.community || 'TagClaw Feed');
  } catch (_) {
    dcPill('dc-community-status', '—');
  }

  // ── Card 4: Monitor Daily Community Overviews ──
  try {
    const mon = await fetchJSON('/api/monitor/steemit');
    const stale = mon.stale === true || mon.stale === 'true';
    dcPill('dc-monitor-status', stale ? 'alert' : 'ok');
    const title = mon.latest_post_title || mon.title || '—';
    setText('dc-monitor-latest-post', title.length > 40 ? title.slice(0, 40) + '…' : title);
    setText('dc-monitor-age',   mon.latest_post_age_hours != null ? mon.latest_post_age_hours + 'h' : '—');
    setText('dc-monitor-stale', stale ? 'yes' : 'no');
  } catch (_) {
    dcPill('dc-monitor-status', '—');
  }

  // ── Card 5: Trending News ──
  const trendEl = $('dc-trending-list');
  if (trendEl) {
    const keywords = tb.keywords || [];
    let ticks = [];
    try {
      const trend = await fetchJSON('/api/runtime/bookmarker/x-trend-latest.json');
      ticks = trend.ticks || trend.keywords || trend.trending || [];
    } catch (_) {}
    const all = [...new Set([...keywords, ...ticks])].slice(0, 20);
    if (all.length) {
      dcPill('dc-trending-status', 'ok');
      trendEl.innerHTML = all.map(k => `<span class="dc-tag">#${escHtml(String(k))}</span>`).join('');
    } else {
      dcPill('dc-trending-status', '—');
      trendEl.innerHTML = '<span class="muted small">—</span>';
    }
  }
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
