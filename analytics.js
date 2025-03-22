// Analytics data
let analyticsData = {
  heaterData: [
    {
      id: 1,
      name: "HP Heater 1",
      heatLoad: { value: 52.4, unit: "MW", status: "healthy", change: 1.2 },
      flow: { value: 630, unit: "t/h", status: "healthy", change: 0.5 },
      ttd: { value: 2.8, unit: "°C", status: "healthy", change: -0.2 },
      dca: { value: 4.5, unit: "°C", status: "healthy", change: 0.1 },
      tr: { value: 0.92, unit: "", status: "healthy", change: 0.0 },
      heaterLevel: { value: 52, unit: "%", status: "healthy" }
    },
    {
      id: 2,
      name: "HP Heater 2",
      heatLoad: { value: 48.7, unit: "MW", status: "warning", change: -2.3 },
      flow: { value: 625, unit: "t/h", status: "healthy", change: 0.2 },
      ttd: { value: 3.6, unit: "°C", status: "warning", change: 1.3 },
      dca: { value: 5.2, unit: "°C", status: "warning", change: 0.8 },
      tr: { value: 0.89, unit: "", status: "warning", change: -0.02 },
      heaterLevel: { value: 65, unit: "%", status: "warning" }
    },
    {
      id: 3,
      name: "HP Heater 3",
      heatLoad: { value: 45.1, unit: "MW", status: "critical", change: -4.8 },
      flow: { value: 612, unit: "t/h", status: "warning", change: -1.5 },
      ttd: { value: 4.2, unit: "°C", status: "critical", change: 2.1 },
      dca: { value: 6.8, unit: "°C", status: "critical", change: 2.2 },
      tr: { value: 0.83, unit: "", status: "critical", change: -0.05 },
      heaterLevel: { value: 78, unit: "%", status: "critical" }
    }
  ],
  
  modelData: {
    lowLoad: [
      { date: "2023-09-01", prediction: 192.5, actual: 190.8 },
      { date: "2023-09-02", prediction: 193.1, actual: 191.5 },
      { date: "2023-09-03", prediction: 193.4, actual: 192.2 },
      { date: "2023-09-04", prediction: 193.8, actual: 192.5 },
      { date: "2023-09-05", prediction: 194.0, actual: 193.1 },
      { date: "2023-09-06", prediction: 194.2, actual: 193.5 },
      { date: "2023-09-07", prediction: 194.5, actual: 193.8 }
    ],
    highLoad: [
      { date: "2023-09-01", prediction: 201.5, actual: 203.2 },
      { date: "2023-09-02", prediction: 202.3, actual: 204.1 },
      { date: "2023-09-03", prediction: 202.8, actual: 204.5 },
      { date: "2023-09-04", prediction: 203.2, actual: 205.0 },
      { date: "2023-09-05", prediction: 203.5, actual: 205.2 },
      { date: "2023-09-06", prediction: 203.8, actual: 205.6 },
      { date: "2023-09-07", prediction: 204.2, actual: 206.0 }
    ]
  }
};

// Tab navigation
document.addEventListener('DOMContentLoaded', function() {
  // Set up tab switching
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Hide all tab contents
      tabContents.forEach(content => {
        content.classList.add('hidden');
      });
      
      // Show selected tab content
      const tabId = this.getAttribute('data-tab');
      const selectedTab = document.getElementById('tab-' + tabId);
      if (selectedTab) {
        selectedTab.classList.remove('hidden');
      }
      
      // Initialize charts if needed
      if (tabId === 'trend') {
        initTrendCharts();
      } else if (tabId === 'enthalpy') {
        initEnthalpyCharts();
      } else if (tabId === 'comparison') {
        initComparisonCharts();
      } else if (tabId === 'modeling') {
        initModelingCharts();
      } else if (tabId === 'modelling') {
        initModellingCharts();
      }
    });
  });
  
  // Initialize heater cards
  initializeHeaterCards();
  
  // Set up sidebar toggle
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }
  
  // Update time
  updateTime();
  setInterval(updateTime, 1000);
});

// Initialize Heater Cards
function initializeHeaterCards() {
  const heaterCardsContainer = document.getElementById('heater-cards-container');
  const heaterLoading = document.getElementById('heater-loading');
  
  if (!heaterCardsContainer) return;
  
  // Hide loading indicator
  if (heaterLoading) {
    heaterLoading.style.display = 'none';
  }
  
  // Render heater cards
  renderHeaterCards();
}

// Render Heater Cards
function renderHeaterCards() {
  const container = document.getElementById('heater-cards-container');
  if (!container) return;
  
  // Clear container (but keep static cards if no data)
  if (analyticsData.heaterData && analyticsData.heaterData.length > 0) {
    container.innerHTML = '';
    
    analyticsData.heaterData.forEach(heater => {
      const statusClass = heater.heatLoad.status === 'critical' ? 'text-adani-red' : 
                          heater.heatLoad.status === 'warning' ? 'text-adani-yellow' : 
                          'text-adani-blue';
      
      const card = document.createElement('div');
      card.className = 'bg-white rounded-lg shadow-md p-4 border border-gray-100';
      
      card.innerHTML = `
        <h3 class="text-lg font-medium text-adani-navy border-b pb-2 mb-3">${heater.name}</h3>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <span class="text-sm text-gray-500">Heat Load:</span>
            <p class="font-medium ${statusClass}">${heater.heatLoad.value} ${heater.heatLoad.unit}</p>
          </div>
          <div>
            <span class="text-sm text-gray-500">Heater Level:</span>
            <p class="font-medium ${statusClass}">${heater.heaterLevel.value}${heater.heaterLevel.unit}</p>
          </div>
          <div>
            <span class="text-sm text-gray-500">TTD:</span>
            <p class="font-medium ${statusClass}">${heater.ttd.value} ${heater.ttd.unit}</p>
          </div>
          <div>
            <span class="text-sm text-gray-500">DCA:</span>
            <p class="font-medium ${statusClass}">${heater.dca.value} ${heater.dca.unit}</p>
          </div>
          <div>
            <span class="text-sm text-gray-500">TR:</span>
            <p class="font-medium ${statusClass}">${heater.tr.value}</p>
          </div>
          <div>
            <span class="text-sm text-gray-500">Flow:</span>
            <p class="font-medium ${statusClass}">${heater.flow.value} ${heater.flow.unit}</p>
          </div>
        </div>
      `;
      
      container.appendChild(card);
    });
  }
}

// Update time display
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit'
  });
  const dateString = now.toLocaleDateString('en-US', { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  
  const currentTimeElement = document.getElementById('current-time');
  if (currentTimeElement) {
    currentTimeElement.innerText = `${dateString} ${timeString}`;
  }
}

// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  
  if (!sidebar || !mainContent) return;
  
  // Check current state
  const isCollapsed = sidebar.classList.contains('w-16');
  
  if (isCollapsed) {
    // Expand
    sidebar.classList.remove('w-16');
    sidebar.classList.add('w-64');
    sidebar.classList.remove('sidebar-collapsed');
    sidebar.classList.add('sidebar-expanded');
    mainContent.classList.remove('ml-16');
    mainContent.classList.add('ml-64');
  } else {
    // Collapse
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-16');
    sidebar.classList.remove('sidebar-expanded');
    sidebar.classList.add('sidebar-collapsed');
    mainContent.classList.remove('ml-64');
    mainContent.classList.add('ml-16');
  }
}

// Initialize Modelling Charts
function initModellingCharts() {
  // Check if charts already initialized
  if (window.lowLoadModelChart || window.highLoadModelChart) return;
  
  // Low Load Model
  const lowLoadCtx = document.getElementById('low-load-model-chart')?.getContext('2d');
  
  if (lowLoadCtx) {
    window.lowLoadModelChart = new Chart(lowLoadCtx, {
      type: 'line',
      data: {
        labels: analyticsData.modelData.lowLoad.map(item => item.date),
        datasets: [
          {
            label: 'Eco Inlet Prediction (Load < 600)',
            data: analyticsData.modelData.lowLoad.map(item => item.prediction),
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: 'Actual Raw Value',
            data: analyticsData.modelData.lowLoad.map(item => item.actual),
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22, 163, 74, 0.1)',
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 15,
              padding: 15
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: '°C'
            },
            beginAtZero: false,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          }
        }
      }
    });
  }
  
  // High Load Model
  const highLoadCtx = document.getElementById('high-load-model-chart')?.getContext('2d');
  
  if (highLoadCtx) {
    window.highLoadModelChart = new Chart(highLoadCtx, {
      type: 'line',
      data: {
        labels: analyticsData.modelData.highLoad.map(item => item.date),
        datasets: [
          {
            label: 'Eco Inlet Prediction (Load > 650)',
            data: analyticsData.modelData.highLoad.map(item => item.prediction),
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: 'Actual Raw Value',
            data: analyticsData.modelData.highLoad.map(item => item.actual),
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22, 163, 74, 0.1)',
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 15,
              padding: 15
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: '°C'
            },
            beginAtZero: false,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          }
        }
      }
    });
  }
}

// Initialize other charts (placeholder functions)
function initTrendCharts() {
  console.log("Trend charts initialized");
  // Implementation for trend charts...
}

function initEnthalpyCharts() {
  console.log("Enthalpy charts initialized");
  // Implementation for enthalpy charts...
}

function initComparisonCharts() {
  console.log("Comparison charts initialized");
  // Implementation for comparison charts...
}

function initModelingCharts() {
  console.log("Modeling charts initialized");
  // Implementation for modeling charts...
}

// Expose functions to global scope
window.initModellingCharts = initModellingCharts;
window.renderHeaterCards = renderHeaterCards;
window.toggleSidebar = toggleSidebar;
