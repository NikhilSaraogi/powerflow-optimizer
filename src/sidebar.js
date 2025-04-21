
/**
 * Sidebar toggle and menu logic for parameterPerformance.html
 * Simulates the React Sidebar/SidebarProvider & Animated collapse w/ vanilla JS.
 */
const sidebar = document.getElementById('custom-sidebar');
const mainContent = document.getElementById('main-content');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarToggle = document.getElementById('sidebar-toggle-btn');

// STATE
let sidebarCollapsed = false;
function setSidebarState(collapsed) {
  sidebarCollapsed = collapsed;
  if (collapsed) {
    sidebar.classList.remove('sidebar-expanded');
    sidebar.classList.add('sidebar-collapsed');
    mainContent.style.marginLeft = '64px';
    document.querySelectorAll('.sidebar-show-label').forEach(e => {
      e.classList.remove('sidebar-show-label');
      e.classList.add('sidebar-hide-label');
    });
    if(sidebarTitle) sidebarTitle.classList.add('sidebar-hide-label');
  } else {
    sidebar.classList.add('sidebar-expanded');
    sidebar.classList.remove('sidebar-collapsed');
    mainContent.style.marginLeft = '256px';
    document.querySelectorAll('.sidebar-hide-label').forEach(e => {
      e.classList.remove('sidebar-hide-label');
      e.classList.add('sidebar-show-label');
    });
    if(sidebarTitle) sidebarTitle.classList.remove('sidebar-hide-label');
  }
}
// Toggle on button
if (sidebarToggle) sidebarToggle.addEventListener('click', () =>
  setSidebarState(!sidebarCollapsed)
);
// Default expanded desktop, auto-collapse on narrow screens
if (window.innerWidth < 960) setSidebarState(true);
// Remember last state? (optional) -- for now, no storage
window.addEventListener('resize', () => {
  if (window.innerWidth < 960 && !sidebarCollapsed) setSidebarState(true);
  if (window.innerWidth >= 960 && sidebarCollapsed) setSidebarState(false);
});
// Highlight active link
const locationPath = window.location.pathname;
const navLinks = [
  { id: "link-dashboard", page: "index.html" },
  { id: "link-analytics", page: "analytics.html" },
  { id: "link-reports", page: "reports.html" },
  { id: "link-feedback", page: "feedback.html" },
  { id: "link-settings", page: "#" }
];
navLinks.forEach(nav => {
  const el = document.getElementById(nav.id);
  if (el && window.location.href.includes(nav.page)) {
    el.classList.add("active");
  }
});
