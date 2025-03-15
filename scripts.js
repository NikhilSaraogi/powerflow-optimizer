
// Initialize sidebar state and handle toggle
let sidebarCollapsed = false;
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');

function toggleSidebar() {
  sidebarCollapsed = !sidebarCollapsed;
  
  if (sidebarCollapsed) {
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-16');
    mainContent.classList.remove('ml-64');
    mainContent.classList.add('ml-16');
    sidebar.classList.remove('sidebar-expanded');
    sidebar.classList.add('sidebar-collapsed');
  } else {
    sidebar.classList.remove('w-16');
    sidebar.classList.add('w-64');
    mainContent.classList.remove('ml-16');
    mainContent.classList.add('ml-64');
    sidebar.classList.add('sidebar-expanded');
    sidebar.classList.remove('sidebar-collapsed');
  }
}

sidebarToggle.addEventListener('click', toggleSidebar);

// Update current time
function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });
  const dateString = now.toLocaleDateString('en-US', { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  
  document.getElementById('current-time').innerText = `${dateString} ${timeString}`;
}

// Update time every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// Sample data for the dashboard
const dashboardData = {
  topBarData: {
    ecoInletTemp: { value: 220.5, unit: "°C", status: "healthy" },
    load: { value: 660, unit: "MW", status: "healthy" },
    hdrPressure: { value: 170.2, unit: "bar", status: "healthy" },
    feedWaterFlow: { value: 1890, unit: "t/h", status: "healthy" }
  },
  heaterData: [
    {
      id: 1,
      name: "HP Heater 1",
      heatLoad: { value: 52.4, unit: "MW", status: "healthy", change: 1.2 },
      flow: { value: 630, unit: "t/h", status: "healthy", change: 0.5 },
      ttd: { value: 2.8, unit: "°C", status: "healthy", change: -0.2 },
      dca: { value: 4.5, unit: "°C", status: "healthy", change: 0.1 },
      tr: { value: 0.92, unit: "", status: "healthy", change: 0.0 },
      level: { value: 52, unit: "%", status: "healthy" },
      predictedEcoInlet: { value: 223.1, unit: "°C", status: "healthy" }
    },
    {
      id: 2,
      name: "HP Heater 2",
      heatLoad: { value: 48.7, unit: "MW", status: "warning", change: -2.3 },
      flow: { value: 625, unit: "t/h", status: "healthy", change: 0.2 },
      ttd: { value: 3.6, unit: "°C", status: "warning", change: 1.3 },
      dca: { value: 5.2, unit: "°C", status: "warning", change: 0.8 },
      tr: { value: 0.89, unit: "", status: "warning", change: -0.02 },
      level: { value: 65, unit: "%", status: "warning" },
      predictedEcoInlet: { value: 219.8, unit: "°C", status: "warning" }
    },
    {
      id: 3,
      name: "HP Heater 3",
      heatLoad: { value: 45.1, unit: "MW", status: "critical", change: -4.8 },
      flow: { value: 612, unit: "t/h", status: "warning", change: -1.5 },
      ttd: { value: 4.2, unit: "°C", status: "critical", change: 2.1 },
      dca: { value: 6.8, unit: "°C", status: "critical", change: 2.2 },
      tr: { value: 0.83, unit: "", status: "critical", change: -0.05 },
      level: { value: 78, unit: "%", status: "critical" },
      predictedEcoInlet: { value: 215.3, unit: "°C", status: "critical" }
    }
  ]
};

// Helper functions
function getStatusColorClass(status) {
  return status === 'critical' ? 'status-critical' : 
         status === 'warning' ? 'status-warning' : 
         'status-healthy';
}

function getChangeIcon(change) {
  if (change > 0) return '<span class="text-adani-green">▲ ' + change.toFixed(1) + '</span>';
  if (change < 0) return '<span class="text-adani-red">▼ ' + Math.abs(change).toFixed(1) + '</span>';
  return '<span class="text-gray-500">◆ ' + change.toFixed(1) + '</span>';
}

// Render top bar with compact layout
function renderTopBar() {
  const container = document.getElementById('top-bar-container');
  if (!container) return;
  
  const { ecoInletTemp, load, hdrPressure, feedWaterFlow } = dashboardData.topBarData;
  const isPlantRunning = load.value > 0;
  
  container.className = 'compact-grid mb-4';
  container.innerHTML = `
    <div class="bg-white rounded-lg shadow-md compact-card border border-gray-100">
      <div class="flex items-center gap-2 mb-1">
        <div class="p-1.5 rounded-full bg-gray-100 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10a7 7 0 0114 0v4a7 7 0 01-14 0v-4z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10a4 4 0 018 0v4a4 4 0 01-8 0v-4z" />
          </svg>
        </div>
        <div class="text-xs font-medium text-gray-600">Eco Inlet Temp</div>
      </div>
      <div class="flex items-baseline">
        <span class="text-lg font-semibold text-blue-700">${ecoInletTemp.value}</span>
        <span class="text-xs text-gray-500 ml-1">${ecoInletTemp.unit}</span>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md compact-card border border-gray-100">
      <div class="flex items-center gap-2 mb-1">
        <div class="p-1.5 rounded-full bg-gray-100 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div class="text-xs font-medium text-gray-600">Load</div>
      </div>
      <div class="flex items-baseline">
        <span class="text-lg font-semibold text-blue-700">${load.value}</span>
        <span class="text-xs text-gray-500 ml-1">${load.unit}</span>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md compact-card border border-gray-100">
      <div class="flex items-center gap-2 mb-1">
        <div class="p-1.5 rounded-full bg-gray-100 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <div class="text-xs font-medium text-gray-600">HDR Pressure</div>
      </div>
      <div class="flex items-baseline">
        <span class="text-lg font-semibold text-blue-700">${hdrPressure.value}</span>
        <span class="text-xs text-gray-500 ml-1">${hdrPressure.unit}</span>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md compact-card border border-gray-100">
      <div class="flex items-center gap-2 mb-1">
        <div class="p-1.5 rounded-full bg-gray-100 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10a7 7 0 0114 0M5 18a7 7 0 0114 0" />
          </svg>
        </div>
        <div class="text-xs font-medium text-gray-600">Feed Water Flow</div>
      </div>
      <div class="flex items-baseline">
        <span class="text-lg font-semibold text-blue-700">${feedWaterFlow.value}</span>
        <span class="text-xs text-gray-500 ml-1">${feedWaterFlow.unit}</span>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md compact-card border ${isPlantRunning ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} flex flex-col items-center justify-center">
      <div class="text-xs font-medium text-gray-600 mb-1">Plant Status</div>
      <div class="flex items-center gap-2">
        ${isPlantRunning ? 
          `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
           </svg>
           <span class="text-green-600 font-semibold">Running</span>` : 
          `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
           </svg>
           <span class="text-red-600 font-semibold">Shutdown</span>`
        }
      </div>
    </div>
  `;
}

// Once DOM is loaded, render the top bar
document.addEventListener('DOMContentLoaded', function() {
  renderTopBar();
});
