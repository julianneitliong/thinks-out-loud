/* julianne | thinks out loud — small interactive bits:
   dark mode, folder tabs, and the Time Well Spent chart. */
(function () {
  'use strict';

  /* ---------- dark mode ---------- */
  var root = document.documentElement;
  function syncToggle() {
    var dark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      var label = btn.querySelector('[data-theme-label]');
      if (label) label.textContent = dark ? 'light mode' : 'dark mode';
    });
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncToggle();
    });
  });
  syncToggle();

  /* ---------- folder tabs ---------- */
  document.querySelectorAll('[data-tabs]').forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('is-on', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
      if (tab.id === 'tab-time') drawCharts();
      try { history.replaceState(null, '', '#' + tab.id.replace('tab-', '')); } catch (e) {}
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var j = null;
        if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') j = 0;
        if (e.key === 'End') j = tabs.length - 1;
        if (j !== null) { e.preventDefault(); select(tabs[j], true); }
      });
    });
    /* open a tab from the address, e.g. .../#confidence */
    var fromHash = location.hash && document.getElementById('tab-' + location.hash.slice(1));
    if (fromHash && tabs.indexOf(fromHash) > -1) select(fromHash, false);
  });

  /* ---------- Time Well Spent: habit tracker ---------- */
  var DONE = ['1', 'x', 'yes', 'y', 'true', 'done', '\u2713', '\u2714'];
  var DOT_COLORS = ['#A3B899', '#7FB2D9', '#E8A6B0', '#D9B95B', '#B9A2D3', '#E39C7A', '#8FB8A8', '#C9727F'];

  function parseCSV(text) {
    var rows = [], row = [], cell = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
        else if (c === '"') q = false;
        else cell += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(cell); cell = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(cell); rows.push(row); row = []; cell = '';
      } else cell += c;
    }
    if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
    var head = (rows.shift() || []).map(function (h) { return h.trim(); });
    return rows.filter(function (r) { return r.join('').trim() !== ''; }).map(function (r) {
      var o = {}; head.forEach(function (h, k) { o[h] = (r[k] || '').trim(); }); return o;
    });
  }

  function toISO(v) {
    v = String(v || '').trim();
    if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(v)) {
      var p = v.split('-'); return p[0] + '-' + ('0' + p[1]).slice(-2) + '-' + ('0' + p[2]).slice(-2);
    }
    var m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);   /* 11/20/2026 (Google Sheets style) */
    if (m) { var y = m[3].length === 2 ? '20' + m[3] : m[3]; return y + '-' + ('0' + m[1]).slice(-2) + '-' + ('0' + m[2]).slice(-2); }
    return '';
  }
  function addDays(iso, n) {
    var d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function fmt(iso, opts) { return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', opts).toLowerCase(); }
  function esc(t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }

  function shape(rows) {
    if (!rows.length) return null;
    var keys = Object.keys(rows[0]);
    var dateKey = keys.filter(function (k) { return k.toLowerCase() === 'date'; })[0] || keys[0];
    var habits = keys.filter(function (k) { return k !== dateKey && k !== ''; });
    var byDate = {};
    rows.forEach(function (r) {
      var d = toISO(r[dateKey]); if (!d) return;
      byDate[d] = byDate[d] || {};
      habits.forEach(function (h) { if (DONE.indexOf(String(r[h] || '').trim().toLowerCase()) > -1) byDate[d][h] = true; });
    });
    var dates = Object.keys(byDate).sort();
    if (!dates.length) return null;
    /* end on today, not on future dates already typed into the sheet */
    var now = new Date();
    var today = now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2);
    var last = dates[dates.length - 1];
    if (last > today) last = today;
    return { habits: habits, byDate: byDate, last: last };
  }

  function renderHabits(box, data, view) {
    var out = box.querySelector('[data-habit-view]');
    if (!data) { out.innerHTML = '<p class="muted">No habits logged yet.</p>'; return; }
    var days = view === 'month' ? 28 : 7;
    var span = []; for (var i = days - 1; i >= 0; i--) span.push(addDays(data.last, -i));
    var done = function (d, h) { return !!(data.byDate[d] && data.byDate[d][h]); };
    var total = 0, html = '';

    if (view === 'week') {
      html += '<div class="habit-grid" style="--days:7"><span></span>';
      span.forEach(function (d) { html += '<span class="hg-day pixel muted">' + fmt(d, { weekday: 'short' }).slice(0, 2) + '<b>' + fmt(d, { day: 'numeric' }) + '</b></span>'; });
      html += '<span></span>';
      data.habits.forEach(function (h, k) {
        var n = 0, color = DOT_COLORS[k % DOT_COLORS.length];
        html += '<span class="hg-name">' + esc(h) + '</span>';
        span.forEach(function (d) {
          var on = done(d, h); if (on) n++;
          html += '<span class="hg-cell' + (on ? ' is-done' : '') + '" style="--dot:' + color + '" title="' + esc(h) + ', ' + fmt(d, { month: 'short', day: 'numeric' }) + (on ? ': done' : ': not yet') + '">' + (on ? '\u2713' : '') + '</span>';
        });
        total += n;
        html += '<span class="hg-count pixel">' + n + '/7</span>';
      });
      html += '</div>';
    } else {
      html += '<div class="habit-bars">';
      data.habits.forEach(function (h, k) {
        var n = span.filter(function (d) { return done(d, h); }).length; total += n;
        html += '<div class="bar-row"><span class="bar-label">' + esc(h) + '</span><div class="bar-track"><div class="bar-fill" data-w="' + Math.round(n / days * 100) + '" style="background:' + DOT_COLORS[k % DOT_COLORS.length] + '"></div></div><span class="bar-hrs">' + n + '/' + days + '</span></div>';
      });
      html += '</div>';
    }
    out.innerHTML = html;
    out.querySelectorAll('.bar-fill').forEach(function (f) {
      requestAnimationFrame(function () { requestAnimationFrame(function () { f.style.width = f.getAttribute('data-w') + '%'; }); });
    });

    /* streaks: consecutive days ending on the latest day (or the day before) */
    var best = { h: '', n: 0 };
    data.habits.forEach(function (h) {
      var d = data.last, n = 0;
      if (!done(d, h)) d = addDays(d, -1);
      while (done(d, h)) { n++; d = addDays(d, -1); }
      if (n > best.n) best = { h: h, n: n };
    });
    box.querySelector('[data-habit-total]').textContent = total + ' / ' + (data.habits.length * days);
    box.querySelector('[data-stat-label]').textContent = view === 'month' ? 'checked off in 4 weeks' : 'checked off this week';
    box.querySelector('[data-habit-streak]').textContent = best.n ? best.h + ' \u00b7 ' + best.n + (best.n === 1 ? ' day' : ' days') : '\u2013';
    box.querySelector('[data-habit-range]').textContent = fmt(span[0], { month: 'short', day: 'numeric' }) + ' \u2013 ' + fmt(span[span.length - 1], { month: 'short', day: 'numeric' });
  }

  function drawCharts() { /* kept for the tab code: redraw any visible tracker */
    document.querySelectorAll('[data-habits]').forEach(function (box) {
      if (box._data !== undefined && box.offsetParent !== null) renderHabits(box, box._data, box._view || 'week');
    });
  }

  document.querySelectorAll('[data-habits]').forEach(function (box) {
    box._view = 'week';
    var embedded = [];
    try { embedded = JSON.parse(box.querySelector('[data-habit-data]').textContent) || []; } catch (e) {}
    function start(rows) { box._data = shape(rows); renderHabits(box, box._data, box._view); }
    var sheet = box.getAttribute('data-sheet');
    if (sheet) {
      fetch(sheet, { cache: 'no-store' }).then(function (r) { if (!r.ok) throw 0; return r.text(); })
        .then(function (t) { start(parseCSV(t)); })
        .catch(function () { start(embedded); });
    } else start(embedded);
    box.querySelectorAll('[data-view]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        box._view = btn.getAttribute('data-view');
        box.querySelectorAll('[data-view]').forEach(function (b) {
          var on = b === btn; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        renderHabits(box, box._data, box._view);
      });
    });
  });
})();
