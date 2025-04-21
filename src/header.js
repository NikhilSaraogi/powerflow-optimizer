
/**
 * Header live date/time for parameterPerformance.html, similar to React code.
 */
function updateHeaderClock() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('header-date').textContent = dateStr;
  document.getElementById('header-time').textContent = timeStr;
}
// Live update every second
updateHeaderClock();
setInterval(updateHeaderClock, 1000);
