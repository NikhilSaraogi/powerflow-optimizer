
// API Base URL - Replace with your actual backend API endpoint
const API_BASE_URL = 'https://your-backend-api.com/api';

// Dashboard data structure to store all loaded data
let dashboardData = {
  topBarData: null,
  heaterData: null,
  notificationData: null,
  timeSeriesData: null
};

// DOM Elements
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');
const topBarContainer = document.getElementById('top-bar-container');
const heaterCardsContainer = document.getElementById('heater-cards-container');
const recommendationsContainer = document.getElementById('recommendations-container');
const alertsContainer = document.getElementById('alerts-container');
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const recommendationsTimeElement = document.getElementById('recommendations-time');
const alertsTimeElement = document.getElementById('alerts-time');
const toastContainer = document.getElementById('toast-container');

// ==========================================
// Initialization and Event Listeners
// ==========================================

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
  initializeDashboard();
  
  // Set up sidebar toggle
  sidebarToggle.addEventListener('click', toggleSidebar);
  
  // Set up clock update
  updateClock();
  setInterval(updateClock, 1000);
  
  // Set up data refresh interval
  setInterval(refreshDashboardData, 60000); // Refresh every minute
});

// ==========================================
// Core Dashboard Functions
// ==========================================

// Initialize the dashboard
function initializeDashboard() {
  showLoadingIndicator();
  
  // Fetch all dashboard data
  fetchDashboardData()
    .then(() => {
      // Render all dashboard components
      renderDashboard();
      hideLoadingIndicator();
    })
    .catch(error => {
      console.error('Error initializing dashboard:', error);
      showToast('Error', 'Failed to load dashboard data. Please try again later.', 'error');
      hideLoadingIndicator();
    });
}

// Refresh dashboard data
function refreshDashboardData() {
  fetchDashboardData()
    .then(() => {
      renderDashboard();
    })
    .catch(error => {
      console.error('Error refreshing dashboard data:', error);
      showToast('Error', 'Failed to refresh dashboard data.', 'error');
    });
}

// Render all dashboard components
function renderDashboard() {
  if (!dashboardData.topBarData || !dashboardData.heaterData || !dashboardData.notificationData) {
    console.error('Dashboard data not loaded properly.');
    return;
  }
  
  renderTopBar();
  renderHeaterCards();
  renderNotifications();
}

// Toggle sidebar expanded/collapsed state
function toggleSidebar() {
  const isCollapsed = sidebar.classList.contains('collapsed');
  
  if (isCollapsed) {
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('ml-16');
    mainContent.classList.add('ml-64');
  } else {
    sidebar.classList.add('collapsed');
    mainContent.classList.remove('ml-64');
    mainContent.classList.add('ml-16');
  }
}

// ==========================================
// Data Fetching Functions
// ==========================================

// Main function to fetch all dashboard data
async function fetchDashboardData() {
  try {
    // Fetch all data in parallel for better performance
    const [topBarData, heaterData, notificationData, timeSeriesData] = await Promise.all([
      fetchTopBarData(),
      fetchHeaterData(),
      fetchNotificationData(),
      fetchTimeSeriesData()
    ]);
    
    // Update the dashboard data object
    dashboardData = {
      topBarData,
      heaterData,
      notificationData,
      timeSeriesData
    };
    
    return dashboardData;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
}

// Fetch top bar data from API
async function fetchTopBarData() {
  try {
    // Uncomment the following lines to fetch from real API
    // const response = await fetch(`${API_BASE_URL}/topbar-data`);
    // const data = await response.json();
    // return data;
    
    // For now, return dummy data with a delay to simulate API call
    return await getDummyTopBarData();
  } catch (error) {
    console.error('Error fetching top bar data:', error);
    throw error;
  }
}

// Fetch heater data from API
async function fetchHeaterData() {
  try {
    // Uncomment the following lines to fetch from real API
    // const response = await fetch(`${API_BASE_URL}/heater-data`);
    // const data = await response.json();
    // return data;
    
    // For now, return dummy data with a delay to simulate API call
    return await getDummyHeaterData();
  } catch (error) {
    console.error('Error fetching heater data:', error);
    throw error;
  }
}

// Fetch notification data from API
async function fetchNotificationData() {
  try {
    // Uncomment the following lines to fetch from real API
    // const response = await fetch(`${API_BASE_URL}/notification-data`);
    // const data = await response.json();
    // return data;
    
    // For now, return dummy data with a delay to simulate API call
    return await getDummyNotificationData();
  } catch (error) {
    console.error('Error fetching notification data:', error);
    throw error;
  }
}

// Fetch time series data from API
async function fetchTimeSeriesData() {
  try {
    // Uncomment the following lines to fetch from real API
    // const response = await fetch(`${API_BASE_URL}/time-series-data`);
    // const data = await response.json();
    // return data;
    
    // For now, return dummy data with a delay to simulate API call
    return await getDummyTimeSeriesData();
  } catch (error) {
    console.error('Error fetching time series data:', error);
    throw error;
  }
}

// ==========================================
// Rendering Functions
// ==========================================

// Render top bar with current parameters
function renderTopBar() {
  const { ecoInletTemp, load, hdrPressure, feedWaterFlow } = dashboardData.topBarData;
  
  topBarContainer.innerHTML = `
    <div class="parameter-card group animate-fade-in">
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-full bg-gray-100 group-hover:bg-adani-gray transition-colors">
            <svg class="h-5 w-5 ${getStatusColorClass(ecoInletTemp.status)}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 class="text-sm font-medium text-gray-500">Eco Inlet Temperature</h3>
        </div>
      </div>
      
      <div class="flex items-baseline gap-1">
        <span class="parameter-value ${getStatusColorClass(ecoInletTemp.status)}">${ecoInletTemp.value}</span>
        <span class="text-xs text-gray-500">${ecoInletTemp.unit}</span>
      </div>
    </div>
    
    <div class="parameter-card group animate-fade-in">
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-full bg-gray-100 group-hover:bg-adani-gray transition-colors">
            <svg class="h-5 w-5 ${getStatusColorClass(load.status)}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-sm font-medium text-gray-500">Load</h3>
        </div>
      </div>
      
      <div class="flex items-baseline gap-1">
        <span class="parameter-value ${getStatusColorClass(load.status)}">${load.value}</span>
        <span class="text-xs text-gray-500">${load.unit}</span>
      </div>
    </div>
    
    <div class="parameter-card group animate-fade-in">
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-full bg-gray-100 group-hover:bg-adani-gray transition-colors">
            <svg class="h-5 w-5 ${getStatusColorClass(hdrPressure.status)}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-sm font-medium text-gray-500">HDR Pressure</h3>
        </div>
      </div>
      
      <div class="flex items-baseline gap-1">
        <span class="parameter-value ${getStatusColorClass(hdrPressure.status)}">${hdrPressure.value}</span>
        <span class="text-xs text-gray-500">${hdrPressure.unit}</span>
      </div>
    </div>
    
    <div class="parameter-card group animate-fade-in">
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-full bg-gray-100 group-hover:bg-adani-gray transition-colors">
            <svg class="h-5 w-5 ${getStatusColorClass(feedWaterFlow.status)}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 class="text-sm font-medium text-gray-500">Feed Water Flow</h3>
        </div>
      </div>
      
      <div class="flex items-baseline gap-1">
        <span class="parameter-value ${getStatusColorClass(feedWaterFlow.status)}">${feedWaterFlow.value}</span>
        <span class="text-xs text-gray-500">${feedWaterFlow.unit}</span>
      </div>
    </div>
  `;
}

// Render heater cards with all parameter information
function renderHeaterCards() {
  heaterCardsContainer.innerHTML = '';
  
  dashboardData.heaterData.forEach(heater => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in h-full';
    
    const headerStatusClass = heater.heatLoad.status === 'critical' ? 'text-adani-red' : 
                            heater.heatLoad.status === 'warning' ? 'text-adani-yellow' : 
                            'text-adani-green';
    
    card.innerHTML = `
      <div class="mb-4 flex justify-between items-center">
        <h2 class="text-lg font-semibold text-adani-navy">${heater.name}</h2>
        <div class="px-2 py-1 rounded-full text-xs font-medium 
          ${heater.heaterLevel.status === 'healthy' ? 'bg-green-100 text-green-800' : 
            heater.heaterLevel.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}">
          Level: ${heater.heaterLevel.value}${heater.heaterLevel.unit}
        </div>
      </div>
      
      <div class="grid grid-cols-3 gap-4 mb-4">
        ${renderParameterCard('Heat Load', heater.heatLoad)}
        ${renderParameterCard('Flow', heater.flow)}
        ${renderParameterCard('TTD', heater.ttd)}
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-4">
        ${renderParameterCard('DCA', heater.dca)}
        ${renderParameterCard('TR', heater.tr)}
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-50 p-3 rounded-md">
          <h3 class="text-sm font-medium text-gray-600 mb-2 border-b pb-1">Enthalpy Values</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex justify-between">
              <span class="text-gray-600">Trip:</span>
              <span class="font-medium ${getStatusColorClass(heater.enthalpyTrip.status)}">
                ${heater.enthalpyTrip.value} ${heater.enthalpyTrip.unit}
              </span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">FW Inlet:</span>
              <span class="font-medium ${getStatusColorClass(heater.enthalpyFwInlet.status)}">
                ${heater.enthalpyFwInlet.value} ${heater.enthalpyFwInlet.unit}
              </span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">FW Outlet:</span>
              <span class="font-medium ${getStatusColorClass(heater.enthalpyFwOutlet.status)}">
                ${heater.enthalpyFwOutlet.value} ${heater.enthalpyFwOutlet.unit}
              </span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">Extraction:</span>
              <span class="font-medium ${getStatusColorClass(heater.enthalpyExtraction.status)}">
                ${heater.enthalpyExtraction.value} ${heater.enthalpyExtraction.unit}
              </span>
            </li>
          </ul>
        </div>
        
        <div class="bg-gray-50 p-3 rounded-md">
          <h3 class="text-sm font-medium text-gray-600 mb-2 border-b pb-1">Temperature & Pressure</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex justify-between">
              <span class="text-gray-600">FW Inlet:</span>
              <span class="font-medium ${getStatusColorClass(heater.fwTempInlet.status)}">
                ${heater.fwTempInlet.value} ${heater.fwTempInlet.unit}
              </span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">FW Outlet:</span>
              <span class="font-medium ${getStatusColorClass(heater.fwTempOutlet.status)}">
                ${heater.fwTempOutlet.value} ${heater.fwTempOutlet.unit}
              </span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">Ext Temp:</span>
              <span class="font-medium ${getStatusColorClass(heater.extractionTemp.status)}">
                ${heater.extractionTemp.value} ${heater.extractionTemp.unit}
              </span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">Ext Press:</span>
              <span class="font-medium ${getStatusColorClass(heater.extractionPressure.status)}">
                ${heater.extractionPressure.value} ${heater.extractionPressure.unit}
              </span>
            </li>
          </ul>
        </div>
      </div>
    `;
    
    heaterCardsContainer.appendChild(card);
  });
}

// Render individual parameter card
function renderParameterCard(title, parameter) {
  const iconMap = {
    'Heat Load': '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>',
    'Flow': '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>',
    'TTD': '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
    'DCA': '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
    'TR': '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>'
  };
  
  const icon = iconMap[title] || '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
  
  return `
    <div class="parameter-card group">
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-full bg-gray-100 group-hover:bg-adani-gray transition-colors">
            ${icon}
          </div>
          <h3 class="text-sm font-medium text-gray-500">${title}</h3>
        </div>
        ${parameter.change !== undefined ? `
          <div class="flex items-center text-xs ${parameter.change >= 0 ? 'text-adani-green' : 'text-adani-red'}">
            ${parameter.change >= 0 ? 
              '<svg class="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>' : 
              '<svg class="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>'
            }
            ${Math.abs(parameter.change).toFixed(1)}%
          </div>
        ` : ''}
      </div>
      
      <div class="flex items-baseline gap-1">
        <span class="parameter-value ${getStatusColorClass(parameter.status)}">${parameter.value}</span>
        <span class="text-xs text-gray-500">${parameter.unit}</span>
      </div>
    </div>
  `;
}

// Render notifications (recommendations and alerts)
function renderNotifications() {
  const recommendations = dashboardData.notificationData.filter(n => n.type === 'recommendation');
  const alerts = dashboardData.notificationData.filter(n => n.type === 'rca' || n.type === 'alert');
  
  // Render recommendations
  recommendationsContainer.innerHTML = '';
  if (recommendations.length > 0) {
    const recommendationsList = document.createElement('ul');
    recommendationsList.className = 'space-y-4 p-4';
    
    recommendations.forEach(notification => {
      const li = document.createElement('li');
      li.className = 'flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0';
      
      li.innerHTML = `
        <svg class="h-5 w-5 text-adani-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div class="flex-1">
          <div class="flex justify-between items-start mb-1">
            <h4 class="font-medium text-adani-navy">${notification.title}</h4>
            <span class="text-xs text-gray-500">${notification.timestamp}</span>
          </div>
          <p class="text-sm text-gray-600">${highlightMessage(notification.message)}</p>
        </div>
      `;
      
      recommendationsList.appendChild(li);
    });
    
    recommendationsContainer.appendChild(recommendationsList);
  } else {
    recommendationsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">No recommendations at this time</p>';
  }
  
  // Render alerts
  alertsContainer.innerHTML = '';
  if (alerts.length > 0) {
    const alertsList = document.createElement('ul');
    alertsList.className = 'space-y-4 p-4';
    
    alerts.forEach(notification => {
      const li = document.createElement('li');
      li.className = 'flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0';
      
      let iconHTML = '';
      if (notification.type === 'rca') {
        iconHTML = `
          <svg class="h-5 w-5 text-adani-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        `;
      } else {
        const alertColor = notification.priority === 'high' ? 'text-adani-red' : 
                          notification.priority === 'medium' ? 'text-adani-yellow' : 'text-adani-blue';
        iconHTML = `
          <svg class="h-5 w-5 ${alertColor}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        `;
      }
      
      li.innerHTML = `
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
      `;
      
      alertsList.appendChild(li);
    });
    
    alertsContainer.appendChild(alertsList);
  } else {
    alertsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">No alerts at this time</p>';
  }
  
  // Update the timestamp for the notification panels
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  recommendationsTimeElement.textContent = dateTimeString;
  alertsTimeElement.textContent = dateTimeString;
}

// ==========================================
// Utility Functions
// ==========================================

// Get CSS class based on status
function getStatusColorClass(status) {
  switch(status) {
    case 'healthy': return 'status-healthy';
    case 'warning': return 'status-warning';
    case 'critical': return 'status-critical';
    default: return 'status-healthy';
  }
}

// Highlight values in notification messages
function highlightMessage(message) {
  // Look for patterns like "eco inlet temperature of 223.1°C" or "heater level at 52%"
  const levelPattern = /(\d+\.?\d*)%/g;
  const tempPattern = /(\d+\.?\d*)°C/g;
  
  return message
    .replace(levelPattern, '<span class="font-semibold text-adani-blue">$&</span>')
    .replace(tempPattern, '<span class="font-semibold text-adani-green">$&</span>');
}

// Update the clock in the header
function updateClock() {
  const now = new Date();
  
  // Format date as "day month year"
  currentDateElement.textContent = now.toLocaleDateString('en-US', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  });
  
  // Format time as "HH:MM:SS"
  currentTimeElement.textContent = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
}

// Show a loading indicator
function showLoadingIndicator() {
  // Create loading overlay
  const loadingOverlay = document.createElement('div');
  loadingOverlay.id = 'loading-overlay';
  loadingOverlay.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50';
  loadingOverlay.innerHTML = `
    <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div class="w-16 h-16 border-4 border-adani-blue border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-adani-navy">Loading dashboard data...</p>
    </div>
  `;
  
  document.body.appendChild(loadingOverlay);
}

// Hide the loading indicator
function hideLoadingIndicator() {
  const loadingOverlay = document.getElementById('loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.remove();
  }
}

// Show a toast notification
function showToast(title, message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  toast.innerHTML = `
    <div class="toast-header">
      <span class="toast-title">${title}</span>
      <span class="toast-close">×</span>
    </div>
    <div class="toast-body">${message}</div>
  `;
  
  // Add to container
  toastContainer.appendChild(toast);
  
  // Add event listener to close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });
  
  // Auto-close after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// ==========================================
// Dummy Data Functions - Replace with real API calls
// ==========================================

// Get dummy top bar data
function getDummyTopBarData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ecoInletTemp: { value: 220.5, unit: "°C", status: "healthy" },
        load: { value: 660, unit: "MW", status: "healthy" },
        hdrPressure: { value: 170.2, unit: "bar", status: "healthy" },
        feedWaterFlow: { value: 1890, unit: "t/h", status: "healthy" }
      });
    }, 300);
  });
}

// Get dummy heater data
function getDummyHeaterData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "HP Heater 1",
          heatLoad: { value: 52.4, unit: "MW", status: "healthy", change: 1.2 },
          flow: { value: 630, unit: "t/h", status: "healthy", change: 0.5 },
          ttd: { value: 2.8, unit: "°C", status: "healthy", change: -0.2 },
          dca: { value: 4.5, unit: "°C", status: "healthy", change: 0.1 },
          tr: { value: 0.92, unit: "", status: "healthy", change: 0.0 },
          enthalpyTrip: { value: 3260, unit: "kJ/kg", status: "healthy" },
          enthalpyFwInlet: { value: 983, unit: "kJ/kg", status: "healthy" },
          enthalpyFwOutlet: { value: 1066, unit: "kJ/kg", status: "healthy" },
          enthalpyExtraction: { value: 3140, unit: "kJ/kg", status: "healthy" },
          fwTempInlet: { value: 192.5, unit: "°C", status: "healthy" },
          fwTempOutlet: { value: 215.2, unit: "°C", status: "healthy" },
          extractionTemp: { value: 342.8, unit: "°C", status: "healthy" },
          extractionPressure: { value: 32.6, unit: "bar", status: "healthy" },
          heaterLevel: { value: 52, unit: "%", status: "healthy" },
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
          enthalpyTrip: { value: 3180, unit: "kJ/kg", status: "warning" },
          enthalpyFwInlet: { value: 932, unit: "kJ/kg", status: "healthy" },
          enthalpyFwOutlet: { value: 1010, unit: "kJ/kg", status: "warning" },
          enthalpyExtraction: { value: 3050, unit: "kJ/kg", status: "warning" },
          fwTempInlet: { value: 178.3, unit: "°C", status: "healthy" },
          fwTempOutlet: { value: 198.6, unit: "°C", status: "warning" },
          extractionTemp: { value: 318.5, unit: "°C", status: "warning" },
          extractionPressure: { value: 25.8, unit: "bar", status: "warning" },
          heaterLevel: { value: 65, unit: "%", status: "warning" },
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
          enthalpyTrip: { value: 3020, unit: "kJ/kg", status: "critical" },
          enthalpyFwInlet: { value: 875, unit: "kJ/kg", status: "warning" },
          enthalpyFwOutlet: { value: 956, unit: "kJ/kg", status: "critical" },
          enthalpyExtraction: { value: 2980, unit: "kJ/kg", status: "critical" },
          fwTempInlet: { value: 162.4, unit: "°C", status: "warning" },
          fwTempOutlet: { value: 185.1, unit: "°C", status: "critical" },
          extractionTemp: { value: 302.6, unit: "°C", status: "critical" },
          extractionPressure: { value: 18.5, unit: "bar", status: "critical" },
          heaterLevel: { value: 78, unit: "%", status: "critical" },
          predictedEcoInlet: { value: 215.3, unit: "°C", status: "critical" }
        }
      ]);
    }, 300);
  });
}

// Get dummy notification data
function getDummyNotificationData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
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
        }
      ]);
    }, 300);
  });
}

// Get dummy time series data
function getDummyTimeSeriesData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
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
        ]
      });
    }, 300);
  });
}
