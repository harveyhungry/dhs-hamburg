/* ═══════════════════════════════════════════
   DHS Hamburg — VSHH e.V. · Khoá 14
   Main JavaScript
   ═══════════════════════════════════════════ */

// Tab switching
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(function (c) {
    c.classList.remove('active');
  });
  document.querySelectorAll('.nav-item').forEach(function (n) {
    n.classList.remove('active');
  });

  var el = document.getElementById('tab-' + tabId);
  if (el) el.classList.add('active');

  var btn = document.querySelector('.nav-item[data-tab="' + tabId + '"]');
  if (btn) btn.classList.add('active');
}

// Nav buttons
document.querySelectorAll('.nav-item[data-tab]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    switchTab(btn.dataset.tab);
  });
});

// Role accordion
function toggleRole(hdr) {
  hdr.parentElement.classList.toggle('open');
}