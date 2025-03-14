
// Sample data - Replace with your API calls
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
      heaterLevel: { value: 52, unit: "%", status: "healthy" },
      predictedEcoInlet: { value: 223.1, unit: "°C", status: "healthy" },
      enthalpy: { value: 3260, unit: "kJ/kg", status: "healthy" }
    },
    {
      id: 2,
      name: "HP Heater 2",
      heatLoad: { value: 48.7, unit: "MW", status: "warning", change: -2.3 },
      flow: { value: 625, unit: "t/h", status: "healthy", change: 0.2 },
      ttd: { value: 3.6, unit: "°C", status: "warning", change: 1.3 },
      dca: { value: 5.2, unit: "°C", status: "warning", change: 0.8 },
      tr: { value: 0.89, unit: "", status: "warning", change: -0.02 },
      heaterLevel: { value: 65, unit: "%", status: "warning" },
      predictedEcoInlet: { value: 219.8, unit: "°C", status: "warning" },
      enthalpy: { value: 3180, unit: "kJ/kg", status: "warning" }
    },
    {
      id: 3,
      name: "HP Heater 3",
      heatLoad: { value: 45.1, unit: "MW", status: "critical", change: -4.8 },
      flow: { value: 612, unit: "t/h", status: "warning", change: -1.5 },
      ttd: { value: 4.2, unit: "°C", status: "critical", change: 2.1 },
      dca: { value: 6.8, unit: "°C", status: "critical", change: 2.2 },
      tr: { value: 0.83, unit: "", status: "critical", change: -0.05 },
      heaterLevel: { value: 78, unit: "%", status: "critical" },
      predictedEcoInlet: { value: 215.3, unit: "°C", status: "critical" },
      enthalpy: { value: 3020, unit: "kJ/kg", status: "critical" }
    }
  ],
  notificationData: [
    {
      id: "n1",
      type: "recommendation",
      title: "Optimize HP Heater 1 Level",
      message: "Maintain heater level at 52% to achieve eco inlet temperature of 223.1°C for optimal performance.",
      timestamp: "10:32 AM",
      priority: "medium"
    },
    {
      id: "n2",
      type: "recommendation",
      title: "Adjust HP Heater 2 Level",
      message: "Reduce heater level to 55% to improve heat transfer efficiency and increase eco inlet temperature to 219.8°C.",
      timestamp: "10:15 AM",
      priority: "high"
    },
    {
      id: "n3",
      type: "recommendation",
      title: "HP Heater 3 Level Correction",
      message: "Urgent: Decrease heater level from 78% to 60% to recover performance and achieve predicted eco inlet of 215.3°C.",
      timestamp: "09:45 AM",
      priority: "high"
    },
    {
      id: "n4",
      type: "rca",
      title: "HP Heater 3 Performance Degradation",
      message: "Root cause analysis indicates possible tube fouling. Schedule inspection during next outage.",
      timestamp: "10:05 AM",
      priority: "medium"
    },
    {
      id: "n5",
      type: "alert",
      title: "HP Heater 3 High Level",
      message: "Heater level exceeding optimal range. Check drain valve operation and control system.",
      timestamp: "10:22 AM",
      priority: "high"
    },
    {
      id: "n6",
      type: "recommendation",
      title: "Optimize Extraction Flow",
      message: "Adjust extraction flow to HP Heater 1 to 630 t/h for optimal heat transfer ratio.",
      timestamp: "11:05 AM",
      priority: "medium"
    },
    {
      id: "n7",
      type: "rca",
      title: "HP Heater 2 TTD Increase",
      message: "Increasing TTD indicates potential scaling on tube surfaces. Monitor closely and schedule chemical cleaning.",
      timestamp: "10:45 AM",
      priority: "medium"
    },
    {
      id: "n8",
      type: "alert",
      title: "HP Heater 2 Drain Control",
      message: "Drain control valve showing fluctuation. Check actuator response and calibrate if necessary.",
      timestamp: "09:30 AM",
      priority: "medium"
    }
  ],
  heaterTimeSeriesData: [
    { name: "06:00", heater1: 51.8, heater2: 49.2, heater3: 46.5 },
    { name: "07:00", heater1: 52.0, heater2: 49.5, heater3: 47.2 },
    { name: "08:00", heater1: 52.2, heater2: 49.0, heater3: 46.8 },
    { name: "09:00", heater1: 52.3, heater2: 48.8, heater3: 45.8 },
    { name: "10:00", heater1: 52.4, heater2: 48.7, heater3: 45.1 },
    { name: "11:00", heater1: 52.5, heater2: 48.5, heater3: 44.5 }
  ],
  temperatureTimeSeriesData: [
    { name: "06:00", fwInlet: 190.5, fwOutlet: 212.8, extraction: 340.2 },
    { name: "07:00", fwInlet: 191.2, fwOutlet: 213.5, extraction: 341.5 },
    { name: "08:00", fwInlet: 192.0, fwOutlet: 214.2, extraction: 342.0 },
    { name: "09:00", fwInlet: 192.2, fwOutlet: 214.6, extraction: 342.5 },
    { name: "10:00", fwInlet: 192.5, fwOutlet: 215.2, extraction: 342.8 },
    { name: "11:00", fwInlet: 192.8, fwOutlet: 215.5, extraction: 343.0 }
  ],
  enthalpyTimeSeriesData: [
    { name: "06:00", heater1: 3255, heater2: 3175, heater3: 3018 },
    { name: "07:00", heater1: 3257, heater2: 3177, heater3: 3019 },
    { name: "08:00", heater1: 3258, heater2: 3178, heater3: 3020 },
    { name: "09:00", heater1: 3259, heater2: 3179, heater3: 3020 },
    { name: "10:00", heater1: 3260, heater2: 3180, heater3: 3020 },
    { name: "11:00", heater1: 3262, heater2: 3181, heater3: 3021 }
  ]
};

// API Endpoints Configuration
const apiConfig = {
  baseUrl: "https://api.adani-power.com/v1", // Replace with your actual API base URL
  endpoints: {
    heaterData: "/heaters/data",
    topBarData: "/dashboard/topbar",
    notifications: "/notifications/latest",
    timeSeriesData: "/timeseries/heaters"
  },
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_TOKEN" // Replace with actual token or authentication method
  }
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

function updateDateTime() {
  const now = new Date();
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  };
  
  const dateTimeString = now.toLocaleString();
  const dateString = now.toLocaleDateString(undefined, dateOptions);
  const timeString = now.toLocaleTimeString(undefined, timeOptions);
  
  document.getElementById('current-time').textContent = dateTimeString;
  
  if (document.getElementById('recommendations-time')) {
    document.getElementById('recommendations-time').textContent = timeString;
  }
  
  if (document.getElementById('alerts-time')) {
    document.getElementById('alerts-time').textContent = timeString;
  }
}

// Highlight predicted values in message
function highlightMessage(message) {
  // Look for patterns like "eco inlet temperature of 223.1°C" or "heater level at 52%"
  const levelPattern = /(\d+\.?\d*)%/g;
  const tempPattern = /(\d+\.?\d*)°C/g;
  
  return message
    .replace(levelPattern, '<span class="font-semibold text-adani-blue">$&</span>')
    .replace(tempPattern, '<span class="font-semibold text-adani-green">$&</span>');
}

// Initialize UI
function initDashboard() {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  renderTopBar();
  renderHeaterCards();
  renderNotifications();
  
  // Set up sidebar toggle
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  
  // Initialize with sidebar expanded
  document.getElementById('sidebar').classList.add('w-64');
  document.getElementById('main-content').classList.add('ml-64');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  
  if (sidebar.classList.contains('w-64')) {
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-16');
    sidebar.classList.add('sidebar-collapsed');
    mainContent.classList.remove('ml-64');
    mainContent.classList.add('ml-16');
  } else {
    sidebar.classList.remove('w-16');
    sidebar.classList.remove('sidebar-collapsed');
    sidebar.classList.add('w-64');
    mainContent.classList.remove('ml-16');
    mainContent.classList.add('ml-64');
  }
}

// Render Top Bar
function renderTopBar() {
  const container = document.getElementById('top-bar-container');
  const { ecoInletTemp, load, hdrPressure, feedWaterFlow } = dashboardData.topBarData;
  
  container.innerHTML = `
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">Eco Inlet Temperature</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(ecoInletTemp.status)}">${ecoInletTemp.value} ${ecoInletTemp.unit}</p>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">Load</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(load.status)}">${load.value} ${load.unit}</p>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">HDR Pressure</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(hdrPressure.status)}">${hdrPressure.value} ${hdrPressure.unit}</p>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center animate-fade-in">
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-sm font-medium text-gray-500">Feed Water Flow</h3>
        <p class="text-xl font-semibold ${getStatusColorClass(feedWaterFlow.status)}">${feedWaterFlow.value} ${feedWaterFlow.unit}</p>
      </div>
    </div>
  `;
}

// Render Heater Cards
function renderHeaterCards() {
  const container = document.getElementById('heater-cards-container');
  container.innerHTML = '';
  
  dashboardData.heaterData.forEach(heater => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden animate-fade-in';
    
    const headerClass = heater.heatLoad.status === 'critical' ? 'bg-red-500' : 
                       heater.heatLoad.status === 'warning' ? 'bg-yellow-500' : 
                       'bg-adani-blue';
    
    card.innerHTML = `
      <div class="px-4 py-3 ${headerClass} text-white font-medium">
        ${heater.name}
        <span class="float-right">${heater.predictedEcoInlet.value}${heater.predictedEcoInlet.unit}</span>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 class="text-xs font-medium text-gray-500">Heat Load</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.heatLoad.status)}">
              ${heater.heatLoad.value} ${heater.heatLoad.unit} 
              ${getChangeIcon(heater.heatLoad.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">Flow</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.flow.status)}">
              ${heater.flow.value} ${heater.flow.unit}
              ${getChangeIcon(heater.flow.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">TTD</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.ttd.status)}">
              ${heater.ttd.value} ${heater.ttd.unit}
              ${getChangeIcon(heater.ttd.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">DCA</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.dca.status)}">
              ${heater.dca.value} ${heater.dca.unit}
              ${getChangeIcon(heater.dca.change)}
            </p>
          </div>
        </div>
        
        <div class="grid grid-cols-3 gap-4">
          <div>
            <h4 class="text-xs font-medium text-gray-500">TR</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.tr.status)}">
              ${heater.tr.value} 
              ${getChangeIcon(heater.tr.change)}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">Level</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.heaterLevel.status)}">
              ${heater.heaterLevel.value}${heater.heaterLevel.unit}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-medium text-gray-500">Enthalpy</h4>
            <p class="text-lg font-semibold ${getStatusColorClass(heater.enthalpy.status)}">
              ${heater.enthalpy.value}${heater.enthalpy.unit}
            </p>
          </div>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Render Notifications
function renderNotifications() {
  const recommendationsContainer = document.getElementById('recommendations-container');
  const alertsContainer = document.getElementById('alerts-container');
  
  const recommendations = dashboardData.notificationData.filter(n => n.type === 'recommendation');
  const alerts = dashboardData.notificationData.filter(n => n.type === 'rca' || n.type === 'alert');
  
  // Render recommendations
  if (recommendations.length > 0) {
    let recommendationsHTML = '<ul class="space-y-4 p-4">';
    recommendations.forEach(notification => {
      const iconHTML = notification.type === 'recommendation' 
        ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
        : '';
      
      recommendationsHTML += `
        <li class="flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
          ${iconHTML}
          <div class="flex-1">
            <div class="flex justify-between items-start mb-1">
              <h4 class="font-medium text-adani-navy">${notification.title}</h4>
              <span class="text-xs text-gray-500">${notification.timestamp}</span>
            </div>
            <p class="text-sm text-gray-600">${highlightMessage(notification.message)}</p>
          </div>
        </li>
      `;
    });
    recommendationsHTML += '</ul>';
    recommendationsContainer.innerHTML = recommendationsHTML;
  } else {
    recommendationsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">No recommendations at this time</p>';
  }
  
  // Render alerts
  if (alerts.length > 0) {
    let alertsHTML = '<ul class="space-y-4 p-4">';
    alerts.forEach(notification => {
      let iconHTML = '';
      if (notification.type === 'rca') {
        iconHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
      } else {
        const alertColor = notification.priority === 'high' ? 'text-adani-red' : notification.priority === 'medium' ? 'text-adani-yellow' : 'text-adani-blue';
        iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${alertColor}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
      }
      
      alertsHTML += `
        <li class="flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
          ${iconHTML}
          <div class="flex-1">
            <div class="flex justify-between items-start mb-1">
              <h4 class="font-medium text-adani-navy flex items-center">
                ${notification.title}
                ${notification.priority === 'high' ? '<span class="ml-2 px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs">Critical</span>' : ''}
              </h4>
              <span class="text-xs text-gray-500">${notification.timestamp}</span>
            </div>
            <p class="text-sm text-gray-600">${notification.message}</p>
          </div>
        </li>
      `;
    });
    alertsHTML += '</ul>';
    alertsContainer.innerHTML = alertsHTML;
  } else {
    alertsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">No alerts at this time</p>';
  }
}

// Fetch data from API
async function fetchDataFromAPI() {
  try {
    // In a real implementation, you would fetch data from your API endpoints
    // For example:
    /*
    const topBarResponse = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.topBarData}`, {
      method: 'GET',
      headers: apiConfig.headers
    });
    
    const topBarData = await topBarResponse.json();
    
    const heatersResponse = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.heaterData}`, {
      method: 'GET',
      headers: apiConfig.headers
    });
    
    const heatersData = await heatersResponse.json();
    
    const notificationsResponse = await fetch(`${apiConfig.baseUrl}${apiConfig.endpoints.notifications}`, {
      method: 'GET',
      headers: apiConfig.headers
    });
    
    const notificationsData = await notificationsResponse.json();
    
    // Update the dashboardData object with fetched data
    dashboardData.topBarData = topBarData;
    dashboardData.heaterData = heatersData;
    dashboardData.notificationData = notificationsData;
    */
    
    // For now, we'll use the sample data
    updateDashboard(dashboardData);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    // Show error message to user or retry
  }
}

// Update dashboard with new data
function updateDashboard(data) {
  dashboardData = data;
  renderTopBar();
  renderHeaterCards();
  renderNotifications();
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', function() {
  initDashboard();
  
  // Set up refresh interval - adjust as needed
  setInterval(fetchDataFromAPI, 60000); // Refresh every minute
});
