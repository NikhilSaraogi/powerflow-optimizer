
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
  } else {
    sidebar.classList.remove('w-16');
    sidebar.classList.add('w-64');
    mainContent.classList.remove('ml-16');
    mainContent.classList.add('ml-64');
  }
}

sidebarToggle.addEventListener('click', toggleSidebar);

// Set default sidebar state
sidebar.classList.add('w-64');
mainContent.classList.add('ml-64');

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

// Load top bar data
function loadTopBarData() {
  // In a real-world scenario, this data would come from an API
  const topBarData = {
    ecoInletTemp: {
      current: 295.7,
      previous: 293.5,
      unit: '°C',
      change: 'up',
      label: 'Eco Inlet Temp'
    },
    load: {
      current: 660,
      previous: 660,
      unit: 'MW',
      change: 'neutral',
      label: 'Unit Load'
    },
    hdrPressure: {
      current: 168.5,
      previous: 167.9,
      unit: 'kg/cm²',
      change: 'up',
      label: 'HDR Pressure'
    },
    feedWaterFlow: {
      current: 1842.3,
      previous: 1840.1,
      unit: 't/h',
      change: 'up',
      label: 'Feed Water Flow'
    }
  };
  
  const topBarContainer = document.getElementById('top-bar-container');
  topBarContainer.innerHTML = '';
  
  for (const [key, data] of Object.entries(topBarData)) {
    const changeClass = data.change === 'up' 
      ? 'text-adani-green' 
      : data.change === 'down' 
        ? 'text-adani-red' 
        : 'text-gray-500';
    
    const changeIcon = data.change === 'up'
      ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>'
      : data.change === 'down'
        ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" /></svg>';
    
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md p-4 border border-gray-100';
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-sm text-gray-500 font-medium">${data.label}</h3>
          <p class="text-2xl font-bold text-adani-navy">${data.current} <span class="text-sm">${data.unit}</span></p>
        </div>
        <div class="flex items-center ${changeClass}">
          ${changeIcon}
          <span class="ml-1 text-sm">${Math.abs(data.current - data.previous).toFixed(1)}</span>
        </div>
      </div>
      <div class="text-xs text-gray-500 mt-2">vs. previous: ${data.previous} ${data.unit}</div>
    `;
    
    topBarContainer.appendChild(card);
  }
}

// Tab switching functionality
const benefitsTab = document.getElementById('benefits-tab');
const rcaTab = document.getElementById('rca-tab');
const tabButtons = document.querySelectorAll('.flex.border-b button');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Reset all tabs and buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('border-adani-blue', 'text-adani-blue');
      btn.classList.add('border-transparent');
    });
    
    // Set active button
    button.classList.add('border-adani-blue', 'text-adani-blue');
    button.classList.remove('border-transparent');
    
    // Show the correct tab
    if (index === 0) {
      benefitsTab.classList.remove('hidden');
      benefitsTab.classList.add('block');
      rcaTab.classList.add('hidden');
      rcaTab.classList.remove('block');
    } else {
      benefitsTab.classList.add('hidden');
      benefitsTab.classList.remove('block');
      rcaTab.classList.remove('hidden');
      rcaTab.classList.add('block');
    }
  });
});

// Generate daily eco inlet temperature gains data
function generateDailyGains() {
  const days = 7;
  const dailyGains = [];
  
  for(let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    dailyGains.push({
      date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      gain: (Math.random() * 3 + 1).toFixed(2),
      heater1Level: (Math.random() * 10 + 45).toFixed(1),
      heater2Level: (Math.random() * 10 + 50).toFixed(1),
      heater3Level: (Math.random() * 10 + 55).toFixed(1),
    });
  }
  
  return dailyGains.reverse();
}

// Populate daily gains table
function populateDailyGainsTable() {
  const dailyGains = generateDailyGains();
  const tableBody = document.getElementById('daily-gains-table');
  
  tableBody.innerHTML = '';
  
  dailyGains.forEach(day => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">${day.date}</td>
      <td class="px-3 py-2 whitespace-nowrap text-sm font-medium text-adani-green">+${day.gain}°C</td>
      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">${day.heater1Level}%</td>
      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">${day.heater2Level}%</td>
      <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">${day.heater3Level}%</td>
    `;
    tableBody.appendChild(row);
  });
  
  return dailyGains;
}

// Load and populate notifications data
function loadNotificationsData() {
  // In a real-world scenario, this data would come from an API
  const notifications = [
    {
      id: 1,
      timestamp: "2023-08-10 15:42:18",
      type: "recommendation",
      priority: "medium",
      title: "HP Heater 2 Level Adjustment",
      message: "Consider increasing HP Heater 2 level to 52% to optimize feedwater temperature."
    },
    {
      id: 2,
      timestamp: "2023-08-10 10:15:33",
      type: "rca",
      priority: "low",
      title: "Eco Inlet Temperature Variation",
      message: "Temperature variations may be caused by inconsistent drain levels in HP Heater 1."
    },
    {
      id: 3,
      timestamp: "2023-08-09 18:22:57",
      type: "alert",
      priority: "high",
      title: "HP Heater 3 Drain Valve",
      message: "HP Heater 3 drain valve position deviation detected. Valve may require maintenance."
    },
    {
      id: 4,
      timestamp: "2023-08-09 12:37:41",
      type: "recommendation",
      priority: "medium",
      title: "Feed Water Flow Optimization",
      message: "Slight adjustment to feed water flow recommended to maintain heater 1 level stability."
    },
    {
      id: 5,
      timestamp: "2023-08-08 09:14:22",
      type: "rca",
      priority: "low",
      title: "Reduced Efficiency Analysis",
      message: "Analysis shows slight reduction in HP Heater 1 efficiency due to potential tube fouling."
    }
  ];
  
  const tableBody = document.getElementById('notifications-table');
  
  tableBody.innerHTML = '';
  
  notifications.forEach(notification => {
    const typeClass = notification.type === 'recommendation' 
      ? 'bg-green-100 text-green-800' 
      : notification.type === 'rca' 
        ? 'bg-blue-100 text-blue-800' 
        : 'bg-red-100 text-red-800';
    
    const priorityClass = notification.priority === 'low' 
      ? 'bg-gray-100 text-gray-800' 
      : notification.priority === 'medium' 
        ? 'bg-yellow-100 text-yellow-800' 
        : 'bg-red-100 text-red-800';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${notification.timestamp}</td>
      <td class="px-4 py-3 whitespace-nowrap">
        <span class="px-2 py-1 rounded-full text-xs font-medium ${typeClass}">
          ${notification.type === 'recommendation' ? 'Recommendation' : 
            notification.type === 'rca' ? 'RCA' : 'Alert'}
        </span>
      </td>
      <td class="px-4 py-3 whitespace-nowrap">
        <span class="px-2 py-1 rounded-full text-xs font-medium ${priorityClass}">
          ${notification.priority}
        </span>
      </td>
      <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">${notification.title}</td>
      <td class="px-4 py-3 text-sm text-gray-500 max-w-md">${notification.message}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Initialize chart
function initializeChart() {
  const dailyGains = generateDailyGains();
  const ctx = document.getElementById('ecoInletChart').getContext('2d');
  
  const labels = dailyGains.map(day => day.date);
  const gains = dailyGains.map(day => parseFloat(day.gain));
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Temperature Gain (°C)',
        data: gains,
        backgroundColor: '#00A650',
        borderColor: '#00A650',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  });
}

// Initialize date inputs
function initializeDateInputs() {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);
  
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  
  startDateInput.value = sevenDaysAgo.toISOString().split('T')[0];
  endDateInput.value = today.toISOString().split('T')[0];
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadTopBarData();
  initializeDateInputs();
  const dailyGains = populateDailyGainsTable();
  loadNotificationsData();
  initializeChart();
});
