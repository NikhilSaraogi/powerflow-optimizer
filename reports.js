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
const benefitsTabBtn = document.getElementById('benefits-tab-btn');
const rcaTabBtn = document.getElementById('rca-tab-btn');
const adoptionTabBtn = document.getElementById('adoption-tab-btn');
const benefitsTab = document.getElementById('benefits-tab');
const rcaTab = document.getElementById('rca-tab');
const adoptionTab = document.getElementById('adoption-tab');

benefitsTabBtn.addEventListener('click', () => {
  benefitsTabBtn.classList.add('border-adani-blue', 'text-adani-blue');
  rcaTabBtn.classList.remove('border-adani-blue', 'text-adani-blue');
  adoptionTabBtn.classList.remove('border-adani-blue', 'text-adani-blue');
  rcaTabBtn.classList.add('border-transparent');
  adoptionTabBtn.classList.add('border-transparent');
  
  benefitsTab.classList.remove('hidden');
  benefitsTab.classList.add('block');
  rcaTab.classList.add('hidden');
  rcaTab.classList.remove('block');
  adoptionTab.classList.add('hidden');
  adoptionTab.classList.remove('block');
});

rcaTabBtn.addEventListener('click', () => {
  rcaTabBtn.classList.add('border-adani-blue', 'text-adani-blue');
  benefitsTabBtn.classList.remove('border-adani-blue', 'text-adani-blue');
  adoptionTabBtn.classList.remove('border-adani-blue', 'text-adani-blue');
  benefitsTabBtn.classList.add('border-transparent');
  adoptionTabBtn.classList.add('border-transparent');
  
  rcaTab.classList.remove('hidden');
  rcaTab.classList.add('block');
  benefitsTab.classList.add('hidden');
  benefitsTab.classList.remove('block');
  adoptionTab.classList.add('hidden');
  adoptionTab.classList.remove('block');
});

adoptionTabBtn.addEventListener('click', () => {
  adoptionTabBtn.classList.add('border-adani-blue', 'text-adani-blue');
  benefitsTabBtn.classList.remove('border-adani-blue', 'text-adani-blue');
  rcaTabBtn.classList.remove('border-adani-blue', 'text-adani-blue');
  benefitsTabBtn.classList.add('border-transparent');
  rcaTabBtn.classList.add('border-transparent');
  
  adoptionTab.classList.remove('hidden');
  adoptionTab.classList.add('block');
  benefitsTab.classList.add('hidden');
  benefitsTab.classList.remove('block');
  rcaTab.classList.add('hidden');
  rcaTab.classList.remove('block');
  
  loadAdoptionData();
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

// New function to load and process adoption data
function loadAdoptionData() {
  // Sample data structure based on the format provided by the user
  const adoptionData = {
    data: [
      {
        comment: "action taken",
        message: "Change HP Heater 1 from -21.38mm to -32.97mm, HP Heater 2 from -22.78mm to -13.47mm, and HP Heater 3 from -25.88mm to -37.77mm. The current eco inlet temperature is 277.6°C, and this adjustment will help achieve the predicted eco inlet temperature of 278.0°C.",
        priority: "medium",
        status: "accepted",
        timestamp: "Thu, 27 Feb 2025 23:30:00 GMT",
        title: "Optimize HP Heater Levels",
        type: "recommendation"
      },
      {
        comment: "noticed",
        message: "The sensor with ID TIRODA_U2_HPH_1_DCA has detected an issue. The observed value is 8.0 °C, which is outside the expected range of 4.03 - 5.87 °C. The current load is 622.36 MW. Please take appropriate action.",
        priority: "high",
        status: "accepted",
        timestamp: "Thu, 27 Feb 2025 20:15:00 GMT",
        title: "High Hph-1 Drain Cooler Approach",
        type: "alert"
      },
      {
        comment: "pending review",
        message: "HP Heater 2 is showing signs of suboptimal performance. Historical analysis suggests the drain valve may require servicing. Consider scheduling maintenance during the next planned outage.",
        priority: "medium",
        status: "pending",
        timestamp: "Thu, 27 Feb 2025 16:45:00 GMT",
        title: "HP Heater 2 Maintenance",
        type: "rca"
      },
      {
        comment: "implemented",
        message: "Change HP Heater 1 level setpoint from 45% to 52% to optimize heat transfer. This change is expected to improve eco inlet temperature by approximately 1.2°C.",
        priority: "medium",
        status: "accepted",
        timestamp: "Wed, 26 Feb 2025 14:20:00 GMT",
        title: "HP Heater 1 Level Optimization",
        type: "recommendation"
      },
      {
        comment: "reviewing",
        message: "HP Heater 3 is showing decreasing TTD (Terminal Temperature Difference) values, which could indicate tube fouling. Analysis of the past 30 days showed a gradual decline in efficiency.",
        priority: "low",
        status: "pending",
        timestamp: "Wed, 26 Feb 2025 09:10:00 GMT",
        title: "HP Heater 3 Efficiency Analysis",
        type: "rca"
      },
      {
        comment: "addressed",
        message: "Feedwater flow imbalance detected in HP Heater system. Current deviation is 2.8% which exceeds the 2% threshold. Please inspect control valve operation.",
        priority: "high",
        status: "accepted",
        timestamp: "Tue, 25 Feb 2025 22:05:00 GMT",
        title: "Feedwater Flow Imbalance",
        type: "alert"
      },
      {
        comment: "rejected - not applicable",
        message: "Adjust extraction pressure setpoint from 24.5 bar to 25.2 bar to improve heater performance based on current unit load.",
        priority: "low",
        status: "rejected",
        timestamp: "Tue, 25 Feb 2025 13:40:00 GMT",
        title: "Extraction Pressure Adjustment",
        type: "recommendation"
      },
      {
        comment: "acknowledged",
        message: "HP Heater 1 level is trending high at 64%, approaching the high-level alarm setpoint of 68%. Consider adjusting the drain valve position.",
        priority: "medium",
        status: "accepted",
        timestamp: "Mon, 24 Feb 2025 18:30:00 GMT",
        title: "HP Heater 1 High Level Warning",
        type: "alert"
      },
      {
        comment: "will implement during next shift",
        message: "Current feed water distribution to HP heaters is suboptimal. Adjust HP Heater 1 flow by +2%, HP Heater 2 by -1.5%, and HP Heater 3 remains unchanged to balance heat transfer.",
        priority: "medium",
        status: "pending",
        timestamp: "Mon, 24 Feb 2025 10:15:00 GMT",
        title: "Feed Water Distribution Optimization",
        type: "recommendation"
      },
      {
        comment: "maintenance scheduled",
        message: "Analysis indicates potential wear in HP Heater 2 drain valve. Historical data shows increasing oscillation in level control over the past 45 days.",
        priority: "medium",
        status: "accepted",
        timestamp: "Sun, 23 Feb 2025 14:50:00 GMT",
        title: "HP Heater 2 Drain Valve Analysis",
        type: "rca"
      }
    ]
  };

  renderAdoptionDashboard(adoptionData);
}

// Render adoption dashboard
function renderAdoptionDashboard(data) {
  // Process data for metrics and charts
  const adoptionItems = data.data;
  
  // Count by type
  const typeCounts = {
    recommendation: 0,
    alert: 0,
    rca: 0
  };
  
  // Count by priority
  const priorityCounts = {
    high: { recommendation: 0, alert: 0, rca: 0 },
    medium: { recommendation: 0, alert: 0, rca: 0 },
    low: { recommendation: 0, alert: 0, rca: 0 }
  };
  
  // Count by status
  const statusCounts = {
    accepted: 0,
    pending: 0,
    rejected: 0
  };
  
  // Process items
  adoptionItems.forEach(item => {
    // Count by type
    if (typeCounts.hasOwnProperty(item.type)) {
      typeCounts[item.type]++;
    }
    
    // Count by priority and type
    if (priorityCounts.hasOwnProperty(item.priority) && typeCounts.hasOwnProperty(item.type)) {
      priorityCounts[item.priority][item.type]++;
    }
    
    // Count by status
    if (statusCounts.hasOwnProperty(item.status)) {
      statusCounts[item.status]++;
    }
  });
  
  // Calculate totals
  const totalItems = adoptionItems.length;
  const acceptanceRate = totalItems > 0 ? Math.round((statusCounts.accepted / totalItems) * 100) : 0;
  
  // Update summary metrics
  document.getElementById('recommendation-count').textContent = typeCounts.recommendation;
  document.getElementById('alert-count').textContent = typeCounts.alert;
  document.getElementById('rca-count').textContent = typeCounts.rca;
  document.getElementById('adoption-rate').textContent = `${acceptanceRate}%`;
  
  // Update adoption summary metrics
  document.getElementById('acceptance-rate').textContent = `${acceptanceRate}%`;
  document.getElementById('acceptance-progress').style.width = `${acceptanceRate}%`;
  document.getElementById('avg-response-time').textContent = '4.2 hrs'; // Sample value, would calculate from actual data
  
  document.getElementById('high-priority-count').textContent = 
    priorityCounts.high.recommendation + priorityCounts.high.alert + priorityCounts.high.rca;
  document.getElementById('medium-priority-count').textContent = 
    priorityCounts.medium.recommendation + priorityCounts.medium.alert + priorityCounts.medium.rca;
  document.getElementById('low-priority-count').textContent = 
    priorityCounts.low.recommendation + priorityCounts.low.alert + priorityCounts.low.rca;
  
  document.getElementById('rec-type-count').textContent = typeCounts.recommendation;
  document.getElementById('alert-type-count').textContent = typeCounts.alert;
  document.getElementById('rca-type-count').textContent = typeCounts.rca;
  
  // Set trends (for demo)
  const recommendationTrend = document.getElementById('recommendation-trend');
  recommendationTrend.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
    <span class="text-green-600">24% from last period</span>
  `;
  
  const alertTrend = document.getElementById('alert-trend');
  alertTrend.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
    <span class="text-red-600">8% from last period</span>
  `;
  
  const rcaTrend = document.getElementById('rca-trend');
  rcaTrend.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
    <span class="text-green-600">15% from last period</span>
  `;
  
  const adoptionRateTrend = document.getElementById('adoption-rate-trend');
  adoptionRateTrend.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
    <span class="text-green-600">5% from last period</span>
  `;
  
  // Create priority chart
  createPriorityChart(priorityCounts);
  
  // Create status chart
  createStatusChart(statusCounts);
  
  // Create timeline chart
  createTimelineChart(adoptionItems);
  
  // Populate adoption table
  populateAdoptionTable(adoptionItems);
  
  // Set up filters
  setupAdoptionFilters(adoptionItems);
}

// Create priority chart for adoption data
function createPriorityChart(priorityCounts) {
  const ctx = document.getElementById('priority-chart').getContext('2d');
  
  if (window.priorityChart) {
    window.priorityChart.destroy();
  }
  
  window.priorityChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['High', 'Medium', 'Low'],
      datasets: [
        {
          label: 'Recommendations',
          data: [
            priorityCounts.high.recommendation,
            priorityCounts.medium.recommendation,
            priorityCounts.low.recommendation
          ],
          backgroundColor: '#0046AD',
        },
        {
          label: 'Alerts',
          data: [
            priorityCounts.high.alert,
            priorityCounts.medium.alert,
            priorityCounts.low.alert
          ],
          backgroundColor: '#FF3A3A',
        },
        {
          label: 'RCA',
          data: [
            priorityCounts.high.rca,
            priorityCounts.medium.rca,
            priorityCounts.low.rca
          ],
          backgroundColor: '#00A650',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Count'
          }
        }
      }
    }
  });
}

// Create status chart for adoption data
function createStatusChart(statusCounts) {
  const ctx = document.getElementById('status-chart').getContext('2d');
  
  if (window.statusChart) {
    window.statusChart.destroy();
  }
  
  window.statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Accepted', 'Pending', 'Rejected'],
      datasets: [{
        data: [statusCounts.accepted, statusCounts.pending, statusCounts.rejected],
        backgroundColor: ['#00A650', '#FFC107', '#FF3A3A'],
        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        }
      },
      cutout: '60%'
    }
  });
}

// Create timeline chart
function createTimelineChart(items) {
  // Sort items by timestamp
  const sortedItems = [...items].sort((a, b) => {
    return new Date(a.timestamp) - new Date(b.timestamp);
  });
  
  // Group by date
  const dateGroups = {};
  const typeColors = {
    'recommendation': '#0046AD',
    'alert': '#FF3A3A',
    'rca': '#00A650'
  };
  
  sortedItems.forEach(item => {
    const date = new Date(item.timestamp).toLocaleDateString();
    if (!dateGroups[date]) {
      dateGroups[date] = {
        recommendation: 0,
        alert: 0,
        rca: 0
      };
    }
    if (dateGroups[date].hasOwnProperty(item.type)) {
      dateGroups[date][item.type]++;
    }
  });
  
  // Prepare chart data
  const dates = Object.keys(dateGroups);
  const recommendationData = dates.map(date => dateGroups[date].recommendation);
  const alertData = dates.map(date => dateGroups[date].alert);
  const rcaData = dates.map(date => dateGroups[date].rca);
  
  const ctx = document.getElementById('timeline-chart').getContext('2d');
  
  if (window.timelineChart) {
    window.timelineChart.destroy();
  }
  
  window.timelineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Recommendations',
          data: recommendationData,
          backgroundColor: '#0046AD',
          borderWidth: 0,
          borderRadius: 4
        },
        {
          label: 'Alerts',
          data: alertData,
          backgroundColor: '#FF3A3A',
          borderWidth: 0,
          borderRadius: 4
        },
        {
          label: 'RCA',
          data: rcaData,
          backgroundColor: '#00A650',
          borderWidth: 0,
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true,
          title: {
            display: true,
            text: 'Count'
          }
        }
      }
    }
  });
}

// Populate adoption table
function populateAdoptionTable(items) {
  const tableBody = document.getElementById('adoption-table');
  tableBody.innerHTML = '';
  
  // Sort items by timestamp (newest first)
  const sortedItems = [...items].sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  
  sortedItems.forEach(item => {
    const row = document.createElement('tr');
    
    // Format timestamp
    const timestamp = new Date(item.timestamp).toLocaleString();
    
    // Create type badge
    const typeClass = 
      item.type === 'recommendation' ? 'bg-blue-100 text-blue-800' : 
      item.type === 'alert' ? 'bg-red-100 text-red-800' : 
      'bg-green-100 text-green-800';
    
    const typeLabel = 
      item.type === 'recommendation' ? 'Recommendation' : 
      item.type === 'alert' ? 'Alert' : 
      'RCA';
    
    // Create priority badge
    const priorityClass = 
      item.priority === 'high' ? 'bg-red-100 text-red-800' : 
      item.priority ===
