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

  /* ---------- Time Well Spent chart ---------- */
  var COLORS = ['#A3B899', '#4D1821', '#7FB2D9', '#6F8A63', '#D9B95B', '#B07A84', '#C9A9D6', '#E39C7A'];
  var DARK_SWAP = { '#4D1821': '#C9727F' };

  function readRows(chart) {
    var el = chart.querySelector('[data-time-data]');
    if (!el) return [];
    try {
      return JSON.parse(el.textContent).map(function (r) {
        return {
          week: String(r.week || '').trim(),
          activity: String(r.activity || '').trim(),
          hours: parseFloat(r.hours) || 0,
          type: String(r.type || 'life').trim().toLowerCase()
        };
      }).filter(function (r) { return r.week && r.activity; });
    } catch (e) { return []; }
  }

  function fmtWeek(iso) {
    var d = new Date(iso + 'T12:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toLowerCase();
  }

  function render(chart, range) {
    var rows = readRows(chart);
    var bars = chart.querySelector('[data-bars]');
    if (!rows.length) { bars.innerHTML = '<p class="muted">No hours logged yet. Add some to _data/time.csv.</p>'; return; }

    var weeks = rows.map(function (r) { return r.week; })
      .filter(function (w, i, a) { return a.indexOf(w) === i; }).sort();
    var pick = range === 'month' ? weeks.slice(-4) : weeks.slice(-1);

    var order = [], totals = {}, types = {};
    rows.forEach(function (r) {
      if (order.indexOf(r.activity) === -1) order.push(r.activity);
      if (pick.indexOf(r.week) === -1) return;
      totals[r.activity] = (totals[r.activity] || 0) + r.hours;
      types[r.activity] = r.type;
    });
    var acts = order.filter(function (a) { return totals[a] > 0; })
      .sort(function (a, b) { return totals[b] - totals[a]; });
    var max = Math.max.apply(null, acts.map(function (a) { return totals[a]; }).concat([1]));
    var sum = 0, work = 0;
    acts.forEach(function (a) { sum += totals[a]; if (types[a] === 'work') work += totals[a]; });
    var dark = root.getAttribute('data-theme') === 'dark';

    bars.innerHTML = '';
    acts.forEach(function (a) {
      var color = COLORS[order.indexOf(a) % COLORS.length];
      if (dark && DARK_SWAP[color]) color = DARK_SWAP[color];
      var row = document.createElement('div');
      row.className = 'bar-row';
      row.innerHTML = '<span class="bar-label"></span><div class="bar-track"><div class="bar-fill"></div></div><span class="bar-hrs"></span>';
      row.querySelector('.bar-label').textContent = a;
      row.querySelector('.bar-hrs').textContent = (Math.round(totals[a] * 10) / 10) + ' hrs';
      var fill = row.querySelector('.bar-fill');
      fill.style.background = color;
      row.title = a + ': ' + totals[a] + ' hours';
      bars.appendChild(row);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { fill.style.width = Math.round(totals[a] / max * 100) + '%'; });
      });
    });

    var wp = sum ? Math.round(work / sum * 100) : 0;
    chart.querySelector('[data-total]').textContent = (Math.round(sum * 10) / 10) + ' hrs';
    chart.querySelector('[data-split]').textContent = wp + '% / ' + (100 - wp) + '%';
    var note = chart.querySelector('[data-range-note]');
    if (note) {
      note.textContent = range === 'month'
        ? fmtWeek(pick[0]) + ' – ' + fmtWeek(pick[pick.length - 1]) + ' (4 weeks)'
        : 'week of ' + fmtWeek(pick[0]);
    }
  }

  function drawCharts() {
    document.querySelectorAll('[data-time-chart]').forEach(function (chart) {
      if (chart.offsetParent === null) return; /* hidden tab: draw when opened */
      render(chart, chart.getAttribute('data-range') || 'week');
    });
  }

  document.querySelectorAll('[data-time-chart]').forEach(function (chart) {
    chart.querySelectorAll('[data-range]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var range = btn.getAttribute('data-range');
        chart.setAttribute('data-range', range);
        chart.querySelectorAll('[data-range]').forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('is-on', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        render(chart, range);
      });
    });
  });
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', drawCharts);
  });
  drawCharts();
})();
