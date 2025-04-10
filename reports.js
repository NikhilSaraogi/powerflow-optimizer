
// Sample data - Replace with your API calls
const adoptionData = [
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
    comment: "scheduled for next shift",
    message: "Adjust HP Heater 1 level to 55%. This will improve heat transfer and increase eco inlet temperature by approximately 1.2°C.",
    priority: "medium",
    status: "accepted",
    timestamp: "Wed, 26 Feb 2025 14:15:00 GMT",
    title: "Adjust HP Heater 1 Level",
    type: "recommendation"
  },
  {
    comment: "not feasible during current load conditions",
    message: "Decrease HP Heater 3 level from 78% to 60% to recover performance and achieve predicted eco inlet of 215.3°C.",
    priority: "high",
    status: "rejected",
    timestamp: "Tue, 25 Feb 2025 09:45:00 GMT",
    title: "HP Heater 3 Level Correction",
    type: "recommendation"
  },
  {
    comment: "investigating",
    message: "HP Heater 3 performance degradation detected. Root cause analysis indicates possible tube fouling.",
    priority: "medium",
    status: "pending",
    timestamp: "Tue, 25 Feb 2025 10:05:00 GMT",
    title: "HP Heater 3 Performance Degradation",
    type: "rca"
  },
  {
    comment: "",
    message: "HP Heater 3 level exceeding optimal range. Check drain valve operation and control system.",
    priority: "high",
    status: "pending",
    timestamp: "Tue, 25 Feb 2025 10:22:00 GMT",
    title: "HP Heater 3 High Level",
    type: "alert"
  },
  {
    comment: "maintenance scheduled",
    message: "HP Heater 2 drain valve sticking. Recommend checking valve operation during next outage.",
    priority: "low",
    status: "accepted",
    timestamp: "Mon, 24 Feb 2025 16:40:00 GMT",
    title: "HP Heater 2 Drain Valve Issue",
    type: "rca"
  },
  {
    comment: "implemented as recommended",
    message: "Maintain heater level at 52% to achieve eco inlet temperature of 223.1°C for optimal performance.",
    priority: "medium",
    status: "accepted",
    timestamp: "Mon, 24 Feb 2025 10:32:00 GMT",
    title: "Optimize HP Heater 1 Level",
    type: "recommendation"
  },
  {
    comment: "",
    message: "HP Heater 1 outlet temperature dropped 2.3°C below expected value. Check extraction line for issues.",
    priority: "medium",
    status: "pending",
    timestamp: "Sun, 23 Feb 2025 20:15:00 GMT",
    title: "HP Heater 1 Temperature Drop",
    type: "alert"
  },
  {
    comment: "will implement during next shift change",
    message: "Reduce heater level to 55% to improve heat transfer efficiency and increase eco inlet temperature to 219.8°C.",
    priority: "high",
    status: "accepted",
    timestamp: "Sun, 23 Feb 2025 13:20:00 GMT",
    title: "Adjust HP Heater 2 Level",
    type: "recommendation"
  },
  {
    comment: "recalibration completed",
    message: "HP Heater 2 level sensor showing inconsistent readings. Recommend recalibration.",
    priority: "low",
    status: "accepted", 
    timestamp: "Sat, 22 Feb 2025 08:45:00 GMT",
    title: "HP Heater 2 Level Sensor Issue",
    type: "rca"
  }
];

// Helper functions and variables
let charts = {};
const colors = {
  recommendation: '#0046AD',  // adani-blue
  rca: '#00296B',            // adani-navy
  alert: '#FF3A3A',          // adani-red
  accepted: '#00A650',       // adani-green
  pending: '#FFC107',        // yellow
  rejected: '#FF3A3A',       // adani-red
  low: '#AAAAAA',            // gray
  medium: '#FFC107',         // yellow
  high: '#FF3A3A'            // adani-red
};

// Charts global configuration
Chart.defaults.font.family = "'Arial', 'Helvetica', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.elements.bar.borderWidth = 0;
Chart.defaults.elements.bar.borderRadius = 4;
Chart.defaults.scale.grid.display = false;

function getStatusColorClass(status) {
  return status === 'critical' ? 'status-critical' : 
          status === 'warning' ? 'status-warning' : 
          'status-healthy';
}

function updateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  
  const timeElements = document.querySelectorAll('[id$="-time"]');
  timeElements.forEach(el => el.textContent = dateTimeString);
}

function initTabs() {
  // Tab switching logic
  document.getElementById('benefits-tab-btn').addEventListener('click', () => switchTab('benefits'));
  document.getElementById('rca-tab-btn').addEventListener('click', () => switchTab('rca'));
  document.getElementById('adoption-tab-btn').addEventListener('click', () => switchTab('adoption'));
}

function switchTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('[id$="-tab"]').forEach(tab => tab.classList.add('hidden'));
  
  // Remove active state from all buttons
  document.querySelectorAll('[id$="-tab-btn"]').forEach(btn => {
    btn.classList.remove('border-adani-blue', 'text-adani-blue');
    btn.classList.add('border-transparent');
  });
  
  // Show the selected tab and set active state on the button
  document.getElementById(tabId + '-tab').classList.remove('hidden');
  const activeBtn = document.getElementById(tabId + '-tab-btn');
  activeBtn.classList.remove('border-transparent');
  activeBtn.classList.add('border-adani-blue', 'text-adani-blue');
  
  // If switching to adoption tab, redraw charts to fix rendering issues
  if (tabId === 'adoption' && Object.keys(charts).length > 0) {
    Object.values(charts).forEach(chart => chart.resize());
  }
}

function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  
  // Set initial state
  sidebar.classList.add('w-64');
  sidebar.classList.add('sidebar-expanded');
  mainContent.classList.add('ml-64');
  
  sidebarToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('w-64')) {
      // Collapse sidebar
      sidebar.classList.remove('w-64', 'sidebar-expanded');
      sidebar.classList.add('w-16', 'sidebar-collapsed');
      mainContent.classList.remove('ml-64');
      mainContent.classList.add('ml-16');
    } else {
      // Expand sidebar
      sidebar.classList.remove('w-16', 'sidebar-collapsed');
      sidebar.classList.add('w-64', 'sidebar-expanded');
      mainContent.classList.remove('ml-16');
      mainContent.classList.add('ml-64');
    }
  });
}

// Set today's date as the default for date pickers
function initDatePickers() {
  const today = new Date().toISOString().split('T')[0];
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  
  document.getElementById('end-date').value = today;
  document.getElementById('start-date').value = oneMonthAgo.toISOString().split('T')[0];
}

// Process adoption data
function processAdoptionData(data) {
  // Count by type
  const typeCount = {
    recommendation: 0,
    alert: 0,
    rca: 0
  };
  
  // Count by status
  const statusCount = {
    accepted: 0,
    pending: 0,
    rejected: 0
  };
  
  // Count by priority
  const priorityCount = {
    low: 0,
    medium: 0,
    high: 0
  };
  
  // Count comments
  let withComments = 0;
  let withoutComments = 0;
  
  // Process each item
  data.forEach(item => {
    // Count by type
    if (typeCount.hasOwnProperty(item.type)) {
      typeCount[item.type]++;
    }
    
    // Count by status
    if (statusCount.hasOwnProperty(item.status)) {
      statusCount[item.status]++;
    }
    
    // Count by priority
    if (priorityCount.hasOwnProperty(item.priority)) {
      priorityCount[item.priority]++;
    }
    
    // Count comments
    if (item.comment && item.comment.trim() !== "") {
      withComments++;
    } else {
      withoutComments++;
    }
  });
  
  // Calculate total and percents
  const total = data.length;
  const acceptanceRate = total > 0 ? Math.round((statusCount.accepted / total) * 100) : 0;
  const commentRate = total > 0 ? Math.round((withComments / total) * 100) : 0;
  
  // Extract temperature and level changes from messages for impact analysis
  const tempChanges = [];
  const levelChanges = {
    heater1: [],
    heater2: [],
    heater3: []
  };

  data.forEach(item => {
    // Extract temperature changes
    const tempMatch = item.message.match(/increase eco inlet temperature by approximately (\d+\.\d+)°C/);
    if (tempMatch) {
      tempChanges.push({
        type: item.type,
        change: parseFloat(tempMatch[1])
      });
    }
    
    // Extract heater level changes
    const heater1Match = item.message.match(/HP Heater 1 from -?\d+\.\d+mm to -?\d+\.\d+mm/);
    const heater2Match = item.message.match(/HP Heater 2 from -?\d+\.\d+mm to -?\d+\.\d+mm/);
    const heater3Match = item.message.match(/HP Heater 3 from -?\d+\.\d+mm to -?\d+\.\d+mm/);
    
    if (heater1Match) levelChanges.heater1.push(item.type);
    if (heater2Match) levelChanges.heater2.push(item.type);
    if (heater3Match) levelChanges.heater3.push(item.type);
  });

  // Generate weekly activity data for heatmap
  const weeklyActivity = generateWeeklyActivityData(data);
  
  // Calculate average message length
  const avgWordsPerMessage = calculateAverageMessageLength(data);

  // Return processed data
  return {
    typeCount,
    statusCount,
    priorityCount,
    withComments,
    withoutComments,
    total,
    acceptanceRate,
    commentRate,
    tempChanges,
    levelChanges,
    weeklyActivity,
    avgWordsPerMessage
  };
}

function calculateAverageMessageLength(data) {
  if (data.length === 0) return 0;
  
  let totalWords = 0;
  data.forEach(item => {
    const wordCount = item.message.split(' ').length;
    totalWords += wordCount;
  });
  
  return Math.round(totalWords / data.length);
}

function generateWeeklyActivityData(data) {
  // Create an array for 7 days x 12 weeks (84 cells)
  const cells = Array(84).fill(0);
  
  // Group items by day
  data.forEach(item => {
    const date = new Date(item.timestamp);
    const dayOfWeek = date.getDay(); // 0-6 (Sunday-Saturday)
    
    // Calculate weeks ago (0-11)
    const today = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysAgo = Math.floor((today - date) / millisecondsPerDay);
    const weeksAgo = Math.floor(daysAgo / 7);
    
    if (weeksAgo >= 0 && weeksAgo < 12) {
      // Calculate cell index
      const cellIndex = (weeksAgo * 7) + dayOfWeek;
      if (cellIndex < cells.length) {
        cells[cellIndex]++;
      }
    }
  });
  
  return cells;
}

// Get color for heatmap based on value
function getHeatmapColor(value) {
  if (value === 0) return '#ebedf0';
  if (value <= 2) return '#9be9a8';
  if (value <= 4) return '#40c463';
  if (value <= 6) return '#30a14e';
  return '#216e39';
}

// Populate time distribution data
function generateResponseTimeData() {
  return {
    labels: ['< 1 hour', '1-3 hours', '3-6 hours', '6-12 hours', '12-24 hours', '> 24 hours'],
    datasets: [{
      data: [15, 25, 30, 20, 8, 2],
      backgroundColor: [
        'rgba(0, 70, 173, 0.8)', // Blue
        'rgba(0, 70, 173, 0.65)',
        'rgba(0, 70, 173, 0.5)',
        'rgba(255, 193, 7, 0.5)', // Yellow
        'rgba(255, 58, 58, 0.5)', // Red
        'rgba(255, 58, 58, 0.7)'
      ]
    }]
  };
}

// Create the adoption heatmap
function renderAdoptionHeatmap(weeklyActivity) {
  const heatmapContainer = document.getElementById('adoption-heatmap');
  if (!heatmapContainer) return;
  
  heatmapContainer.innerHTML = '';
  
  // Create 7 columns x 12 rows grid
  for (let i = 0; i < 84; i++) {
    const cell = document.createElement('div');
    cell.className = 'heatmap-cell';
    cell.style.backgroundColor = getHeatmapColor(weeklyActivity[i]);
    
    // Add tooltip with value
    cell.title = `${weeklyActivity[i]} actions`;
    
    heatmapContainer.appendChild(cell);
  }
}

// Render all adoption report charts and stats
function renderAdoptionData(processedData) {
  const {
    typeCount,
    statusCount,
    priorityCount,
    withComments,
    withoutComments,
    total,
    acceptanceRate,
    commentRate,
    weeklyActivity,
    avgWordsPerMessage
  } = processedData;

  // Update KPI metrics
  document.getElementById('recommendation-count').textContent = typeCount.recommendation;
  document.getElementById('alert-count').textContent = typeCount.alert;
  document.getElementById('rca-count').textContent = typeCount.rca;
  document.getElementById('adoption-rate').textContent = acceptanceRate + '%';
  
  // Update adoption trends (hardcoded for demo)
  document.getElementById('recommendation-trend').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />' +
    '</svg><span class="text-green-600">24% from last period</span>';
    
  document.getElementById('alert-trend').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />' +
    '</svg><span class="text-red-600">8% from last period</span>';
    
  document.getElementById('rca-trend').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />' +
    '</svg><span class="text-green-600">15% from last period</span>';
    
  document.getElementById('adoption-rate-trend').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />' +
    '</svg><span class="text-green-600">5% from last period</span>';
  
  // Comment statistics
  document.getElementById('commented-count').textContent = withComments;
  document.getElementById('uncommented-count').textContent = withoutComments;
  document.getElementById('comment-rate').textContent = commentRate + '%';
  document.getElementById('comment-progress').style.width = commentRate + '%';
  
  // Acceptance statistics
  document.getElementById('acceptance-rate').textContent = acceptanceRate + '%';
  document.getElementById('acceptance-progress').style.width = acceptanceRate + '%';
  document.getElementById('avg-response-time').textContent = '4.2 hrs';
  
  // Priority counts
  document.getElementById('high-priority-count').textContent = priorityCount.high;
  document.getElementById('medium-priority-count').textContent = priorityCount.medium;
  document.getElementById('low-priority-count').textContent = priorityCount.low;
  
  // Type counts
  document.getElementById('rec-type-count').textContent = typeCount.recommendation;
  document.getElementById('alert-type-count').textContent = typeCount.alert;
  document.getElementById('rca-type-count').textContent = typeCount.rca;
  
  // Average words per message
  document.getElementById('words-per-message').textContent = avgWordsPerMessage;
  
  // Set message length indicator (assuming optimal range is 20-30 words)
  const messageEfficiency = avgWordsPerMessage >= 20 && avgWordsPerMessage <= 30 ? 100 : 
                           avgWordsPerMessage < 20 ? (avgWordsPerMessage / 20) * 100 : 
                           (40 - avgWordsPerMessage) / 10 * 100;
  document.getElementById('message-length-indicator').style.width = Math.max(0, Math.min(100, messageEfficiency)) + '%';
  
  // Render heatmap
  renderAdoptionHeatmap(weeklyActivity);
  
  // Render charts
  renderPriorityChart(priorityCount);
  renderStatusChart(statusCount);
  renderCommentsChart(withComments, withoutComments);
  renderTimelineChart(adoptionData);
  renderResponseTimeChart();
  renderImpactChart();
  renderLevelChangesChart();
  
  // Render the data table
  renderAdoptionTable(adoptionData);
}

function renderPriorityChart(priorityData) {
  const canvas = document.getElementById('priority-chart');
  if (!canvas) return;
  
  if (charts.priorityChart) {
    charts.priorityChart.destroy();
  }
  
  charts.priorityChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['High', 'Medium', 'Low'],
      datasets: [
        {
          label: 'Recommendations',
          data: [2, 4, 1],
          backgroundColor: colors.recommendation,
          barPercentage: 0.6,
        },
        {
          label: 'Alerts',
          data: [1, 2, 0],
          backgroundColor: colors.alert,
          barPercentage: 0.6,
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 12,
            padding: 15
          }
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
          max: 5,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function renderStatusChart(statusData) {
  const canvas = document.getElementById('status-chart');
  if (!canvas) return;
  
  if (charts.statusChart) {
    charts.statusChart.destroy();
  }
  
  charts.statusChart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Accepted', 'Pending', 'Rejected'],
      datasets: [
        {
          data: [statusData.accepted, statusData.pending, statusData.rejected],
          backgroundColor: [
            colors.accepted,
            colors.pending,
            colors.rejected
          ],
          borderWidth: 0,
          hoverOffset: 4
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            padding: 15
          }
        }
      },
      cutout: '65%'
    }
  });
}

function renderCommentsChart(withComments, withoutComments) {
  const canvas = document.getElementById('comments-chart');
  if (!canvas) return;
  
  if (charts.commentsChart) {
    charts.commentsChart.destroy();
  }
  
  charts.commentsChart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['With Comments', 'Without Comments'],
      datasets: [
        {
          data: [withComments, withoutComments],
          backgroundColor: [
            '#0046AD', // adani-blue
            '#E5E7EB'  // light gray
          ],
          borderWidth: 0,
          hoverOffset: 4
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            padding: 15
          }
        }
      },
      cutout: '65%'
    }
  });
}

function renderTimelineChart(data) {
  const canvas = document.getElementById('timeline-chart');
  if (!canvas) return;
  
  if (charts.timelineChart) {
    charts.timelineChart.destroy();
  }
  
  // Create datasets based on types
  const recommendations = {
    label: 'Recommendations',
    data: [],
    backgroundColor: colors.recommendation,
    borderColor: colors.recommendation,
    borderWidth: 0
  };
  
  const alerts = {
    label: 'Alerts',
    data: [],
    backgroundColor: colors.alert,
    borderColor: colors.alert,
    borderWidth: 0
  };
  
  const rcas = {
    label: 'RCAs',
    data: [],
    backgroundColor: colors.rca,
    borderColor: colors.rca,
    borderWidth: 0
  };
  
  // Sort data by timestamp
  const sortedData = [...data].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  
  // Format dates for display
  const dates = sortedData.map(item => {
    const date = new Date(item.timestamp);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  });
  
  // Fill datasets
  sortedData.forEach((item, index) => {
    if (item.type === 'recommendation') {
      recommendations.data[index] = 1;
      alerts.data[index] = null;
      rcas.data[index] = null;
    } else if (item.type === 'alert') {
      recommendations.data[index] = null;
      alerts.data[index] = 1;
      rcas.data[index] = null;
    } else if (item.type === 'rca') {
      recommendations.data[index] = null;
      alerts.data[index] = null;
      rcas.data[index] = 1;
    }
  });
  
  charts.timelineChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [recommendations, alerts, rcas]
    },
    options: {
      maintainAspectRatio: false,
      indexAxis: 'x',
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 12,
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              const idx = tooltipItems[0].dataIndex;
              return sortedData[idx].title;
            },
            label: function(context) {
              const idx = context.dataIndex;
              return [
                'Type: ' + sortedData[idx].type,
                'Priority: ' + sortedData[idx].priority,
                'Status: ' + sortedData[idx].status
              ];
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 1.5,
          ticks: {
            display: false
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
}

function renderResponseTimeChart() {
  const canvas = document.getElementById('response-time-chart');
  if (!canvas) return;
  
  if (charts.responseTimeChart) {
    charts.responseTimeChart.destroy();
  }
  
  const data = generateResponseTimeData();
  
  charts.responseTimeChart = new Chart(canvas, {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 40,
          title: {
            display: true,
            text: 'Number of Actions'
          }
        }
      }
    }
  });
}

function renderImpactChart() {
  const canvas = document.getElementById('impact-chart');
  if (!canvas) return;
  
  if (charts.impactChart) {
    charts.impactChart.destroy();
  }
  
  charts.impactChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['HP Heater 1', 'HP Heater 2', 'HP Heater 3'],
      datasets: [
        {
          label: 'Before Adjustment',
          data: [220.5, 219.2, 217.8],
          backgroundColor: 'rgba(0, 70, 173, 0.6)',
          barPercentage: 0.7
        },
        {
          label: 'After Adjustment',
          data: [223.1, 221.4, 219.5],
          backgroundColor: 'rgba(0, 166, 80, 0.6)',
          barPercentage: 0.7
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 12,
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.raw + '°C';
            }
          }
        }
      },
      scales: {
        y: {
          min: 215,
          title: {
            display: true,
            text: 'Temperature (°C)'
          }
        }
      }
    }
  });
}

function renderLevelChangesChart() {
  const canvas = document.getElementById('level-changes-chart');
  if (!canvas) return;
  
  if (charts.levelChangesChart) {
    charts.levelChangesChart.destroy();
  }
  
  charts.levelChangesChart = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['Level Decrease', 'Optimal Level', 'Level Increase', 'Drain Valve', 'Flow Adjustment'],
      datasets: [
        {
          label: 'HP Heater 1',
          data: [2, 4, 1, 0, 2],
          backgroundColor: 'rgba(0, 70, 173, 0.2)',
          borderColor: 'rgba(0, 70, 173, 0.8)',
          pointBackgroundColor: 'rgba(0, 70, 173, 1)',
          borderWidth: 1
        },
        {
          label: 'HP Heater 2',
          data: [1, 3, 2, 1, 1],
          backgroundColor: 'rgba(0, 166, 80, 0.2)',
          borderColor: 'rgba(0, 166, 80, 0.8)',
          pointBackgroundColor: 'rgba(0, 166, 80, 1)',
          borderWidth: 1
        },
        {
          label: 'HP Heater 3',
          data: [3, 2, 0, 2, 1],
          backgroundColor: 'rgba(255, 193, 7, 0.2)',
          borderColor: 'rgba(255, 193, 7, 0.8)',
          pointBackgroundColor: 'rgba(255, 193, 7, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0.2
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 5,
          ticks: {
            display: false
          }
        }
      }
    }
  });
}

function renderAdoptionTable(data) {
  const tableBody = document.getElementById('adoption-table');
  if (!tableBody) return;
  
  // Sort by timestamp, descending
  const sortedData = [...data].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  // Clear existing rows
  tableBody.innerHTML = '';
  
  // Add rows
  sortedData.forEach(item => {
    const row = document.createElement('tr');
    
    // Format date
    const date = new Date(item.timestamp);
    const formattedDate = date.toLocaleString();
    
    // Determine type class
    const typeClass = item.type === 'recommendation' ? 'bg-blue-100 text-blue-800' :
                      item.type === 'rca' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-red-100 text-red-800';
                      
    // Determine priority class
    const priorityClass = item.priority === 'high' ? 'bg-red-100 text-red-800' :
                          item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800';
                          
    // Determine status class
    const statusClass = item.status === 'accepted' ? 'bg-green-100 text-green-800' :
                        item.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800';
    
    row.innerHTML = `
      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${formattedDate}</td>
      <td class="px-4 py-3 whitespace-nowrap">
        <span class="px-2 py-1 rounded-full text-xs font-medium ${typeClass}">
          ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </span>
      </td>
      <td class="px-4 py-3 whitespace-nowrap">
        <span class="px-2 py-1 rounded-full text-xs font-medium ${priorityClass}">
          ${item.priority}
        </span>
      </td>
      <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">${item.title}</td>
      <td class="px-4 py-3 whitespace-nowrap">
        <span class="px-2 py-1 rounded-full text-xs font-medium ${statusClass}">
          ${item.status}
        </span>
      </td>
      <td class="px-4 py-3 text-sm text-gray-500">
        ${item.comment || '-'}
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  updateTime();
  setInterval(updateTime, 1000);
  
  initTabs();
  initSidebar();
  initDatePickers();
  
  // Process and render adoption data
  const processedData = processAdoptionData(adoptionData);
  renderAdoptionData(processedData);
  
  // Add filter handlers
  document.getElementById('type-filter')?.addEventListener('change', filterAdoptionTable);
  document.getElementById('status-filter')?.addEventListener('change', filterAdoptionTable);
  
  // Add download handler
  document.getElementById('download-adoption-report')?.addEventListener('click', function() {
    alert('Downloading adoption report...');
  });
});

function filterAdoptionTable() {
  const typeFilter = document.getElementById('type-filter')?.value || 'all';
  const statusFilter = document.getElementById('status-filter')?.value || 'all';
  
  let filteredData = [...adoptionData];
  
  if (typeFilter !== 'all') {
    filteredData = filteredData.filter(item => item.type === typeFilter);
  }
  
  if (statusFilter !== 'all') {
    filteredData = filteredData.filter(item => item.status === statusFilter);
  }
  
  renderAdoptionTable(filteredData);
}
