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
  
  initAdoptionCharts();
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

// Generate adoption report data
function generateAdoptionData() {
  return {
    comments: [
      {
        id: 1,
        date: "2023-08-10",
        component: "HP Heater 1",
        user: "Operator A",
        comment: "Implemented the recommended level adjustment to 52%, saw immediate improvement in efficiency.",
        status: "Completed"
      },
      {
        id: 2,
        date: "2023-08-09",
        component: "HP Heater 2",
        user: "Engineer B",
        comment: "Investigated the drainage issue, found valve partially blocked. Scheduled maintenance.",
        status: "In Progress"
      },
      {
        id: 3,
        date: "2023-08-08",
        component: "HP Heater 3",
        user: "Manager C",
        comment: "TTD values are consistently above normal range. Need detailed investigation.",
        status: "Review"
      },
      {
        id: 4,
        date: "2023-08-07",
        component: "HP Heater 1",
        user: "Technician D",
        comment: "Performed calibration on level sensors as recommended.",
        status: "Completed"
      },
      {
        id: 5,
        date: "2023-08-06",
        component: "Feed System",
        user: "Engineer E",
        comment: "Flow rate adjustments made to improve heater performance.",
        status: "Monitoring"
      },
      {
        id: 6,
        date: "2023-08-05",
        component: "HP Heater 2",
        user: "Operator F",
        comment: "Observed fluctuations in extraction pressure, logged for monitoring.",
        status: "Open"
      },
      {
        id: 7,
        date: "2023-08-04",
        component: "HP Heater 3",
        user: "Manager G",
        comment: "Drain valve operation reviewed, no issues found.",
        status: "Completed"
      }
    ],
    priorityData: {
      high: { alerts: 10, rca: 7 },
      medium: { alerts: 8, rca: 6 },
      low: { alerts: 6, rca: 3 }
    },
    activityTrend: [
      { week: 'Week 1', alerts: 4, rca: 3, comments: 5 },
      { week: 'Week 2', alerts: 6, rca: 4, comments: 8 },
      { week: 'Week 3', alerts: 5, rca: 3, comments: 10 },
      { week: 'Week 4', alerts: 9, rca: 6, comments: 14 }
    ],
    componentIssues: {
      'HP Heater 1': 8,
      'HP Heater 2': 12,
      'HP Heater 3': 15,
      'Feed System': 6,
      'Extraction System': 4,
      'Drain System': 9,
      'Control System': 7
    }
  };
}

// Initialize the adoption charts
function initAdoptionCharts() {
  const adoptionData = generateAdoptionData();
  
  populateCommentsTable(adoptionData.comments);
  
  createPriorityChart(adoptionData.priorityData);
  
  createActivityTrendChart(adoptionData.activityTrend);
  
  createComponentIssuesChart(adoptionData.componentIssues);
  
  document.getElementById('download-adoption-report').addEventListener('click', () => {
    downloadAdoptionReport(adoptionData);
  });
  
  document.getElementById('comment-filter').addEventListener('change', () => {
    filterComments(adoptionData.comments);
  });
  
  document.getElementById('sort-comments').addEventListener('change', () => {
    filterComments(adoptionData.comments);
  });
}

// Populate comments table with data
function populateCommentsTable(comments) {
  const tableBody = document.getElementById('comments-table');
  tableBody.innerHTML = '';
  
  comments.forEach(comment => {
    const statusClass = 
      comment.status === 'Completed' ? 'bg-green-100 text-green-800' : 
      comment.status === 'In Progress' || comment.status === 'Monitoring' ? 'bg-blue-100 text-blue-800' : 
      comment.status === 'Review' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${comment.date}</td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${comment.component}</td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-700">${comment.user}</td>
      <td class="px-4 py-2 text-sm text-gray-700 max-w-md">${comment.comment}</td>
      <td class="px-4 py-2 whitespace-nowrap text-sm">
        <span class="px-2 py-1 rounded-full text-xs font-medium ${statusClass}">
          ${comment.status}
        </span>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Filter comments based on selected filters
function filterComments(allComments) {
  const componentFilter = document.getElementById('comment-filter').value;
  const sortOrder = document.getElementById('sort-comments').value;
  
  let filteredComments = allComments;
  if (componentFilter !== 'all') {
    const componentMap = {
      'heater1': 'HP Heater 1',
      'heater2': 'HP Heater 2',
      'heater3': 'HP Heater 3'
    };
    filteredComments = allComments.filter(comment => comment.component === componentMap[componentFilter]);
  }
  
  filteredComments.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });
  
  populateCommentsTable(filteredComments);
}

// Create priority chart
function createPriorityChart(priorityData) {
  const ctx = document.getElementById('priority-chart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['High', 'Medium', 'Low'],
      datasets: [
        {
          label: 'Alerts',
          data: [priorityData.high.alerts, priorityData.medium.alerts, priorityData.low.alerts],
          backgroundColor: '#FF3A3A',
        },
        {
          label: 'RCA',
          data: [priorityData.high.rca, priorityData.medium.rca, priorityData.low.rca],
          backgroundColor: '#0046AD',
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

// Create activity trend chart
function createActivityTrendChart(activityData) {
  const ctx = document.getElementById('activity-trend-chart').getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: activityData.map(item => item.week),
      datasets: [
        {
          label: 'Alerts',
          data: activityData.map(item => item.alerts),
          borderColor: '#FF3A3A',
          backgroundColor: 'rgba(255, 58, 58, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        },
        {
          label: 'RCA',
          data: activityData.map(item => item.rca),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        },
        {
          label: 'Comments',
          data: activityData.map(item => item.comments),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false
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

// Create component issues chart
function createComponentIssuesChart(componentData) {
  const ctx = document.getElementById('component-issue-chart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(componentData),
      datasets: [{
        label: 'Number of Issues',
        data: Object.values(componentData),
        backgroundColor: [
          'rgba(0, 70, 173, 0.7)',
          'rgba(0, 166, 80, 0.7)',
          'rgba(255, 58, 58, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(0, 41, 107, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
          'rgb(0, 70, 173)',
          'rgb(0, 166, 80)',
          'rgb(255, 58, 58)',
          'rgb(255, 193, 7)',
          'rgb(0, 41, 107)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Issues'
          }
        }
      }
    }
  });
}

// Generate and download the full adoption report
function downloadAdoptionReport(adoptionData) {
  alert('Adoption report download started. This would generate a PDF or Excel file in a real application.');
  
  console.log('Adoption data for report:', adoptionData);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadTopBarData();
  initializeDateInputs();
  const dailyGains = populateDailyGainsTable();
  loadNotificationsData();
  initializeChart();
});
