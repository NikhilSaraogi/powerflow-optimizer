
// Sample data - Replace with your API calls
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
      comment: "",
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
function processAdoptionData(adoption) {
  const data = adoption.data || adoption;
  
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
  
  // Count by type and priority combination
  const typeByPriorityCount = {
    recommendation: { low: 0, medium: 0, high: 0 },
    alert: { low: 0, medium: 0, high: 0 },
    rca: { low: 0, medium: 0, high: 0 }
  };
  
  // Response times (for recommendations and alerts)
  const responseTimes = [];
  let lastAlertTime = null;
  let lastResponseTime = null;
  
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
    
    // Count by type and priority combination
    if (typeByPriorityCount[item.type] && typeByPriorityCount[item.type][item.priority]) {
      typeByPriorityCount[item.type][item.priority]++;
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
  
  // Generate daily activity data
  const dailyActivity = generateDailyActivityData(data);
  
  // Calculate average message length
  const avgWordsPerMessage = calculateAverageMessageLength(data);

  // Calculate response efficiency metrics
  const alertResponseRate = calculateAlertResponseRate(data);
  
  // Calculate impact metrics
  const impactMetrics = calculateImpactMetrics(data);

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
    dailyActivity,
    avgWordsPerMessage,
    typeByPriorityCount,
    alertResponseRate,
    impactMetrics
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

function calculateAlertResponseRate(data) {
  // Find alerts and count how many have comments/responses
  const alerts = data.filter(item => item.type === 'alert');
  const respondedAlerts = alerts.filter(item => item.comment && item.comment.trim() !== "");
  
  return {
    total: alerts.length,
    responded: respondedAlerts.length,
    rate: alerts.length > 0 ? Math.round((respondedAlerts.length / alerts.length) * 100) : 0
  };
}

function calculateImpactMetrics(data) {
  // Extract temperature improvement mentions from recommendations
  let tempImprovements = [];
  
  data.forEach(item => {
    if (item.type === 'recommendation' && item.status === 'accepted') {
      // Look for temperature improvement mentions in the message
      const tempMatch = item.message.match(/improve.*temperature by approximately ([0-9.]+)°C/i);
      if (tempMatch && tempMatch[1]) {
        tempImprovements.push(parseFloat(tempMatch[1]));
      }
    }
  });
  
  const avgTempImprovement = tempImprovements.length > 0 
    ? tempImprovements.reduce((sum, val) => sum + val, 0) / tempImprovements.length
    : 0;
  
  return {
    avgTempImprovement: avgTempImprovement.toFixed(1),
    recommendationsImplemented: data.filter(item => 
      item.type === 'recommendation' && item.status === 'accepted').length
  };
}

function generateDailyActivityData(data) {
  // Group items by day and by type
  const dailyMap = {};
  
  data.forEach(item => {
    const date = new Date(item.timestamp);
    const dateKey = date.toISOString().split('T')[0];
    
    if (!dailyMap[dateKey]) {
      dailyMap[dateKey] = {
        date: dateKey,
        displayDate: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        recommendation: 0,
        alert: 0,
        rca: 0,
        total: 0
      };
    }
    
    dailyMap[dateKey][item.type]++;
    dailyMap[dateKey].total++;
  });
  
  // Convert to array and sort by date
  return Object.values(dailyMap).sort((a, b) => new Date(a.date) - new Date(b.date));
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
    dailyActivity,
    avgWordsPerMessage,
    typeByPriorityCount,
    alertResponseRate,
    impactMetrics
  } = processedData;

  // Update KPI metrics
  document.getElementById('recommendation-count').textContent = typeCount.recommendation;
  document.getElementById('alert-count').textContent = typeCount.alert;
  document.getElementById('rca-count').textContent = typeCount.rca;
  document.getElementById('adoption-rate').textContent = acceptanceRate + '%';
  
  // Comment statistics
  document.getElementById('commented-count').textContent = withComments;
  document.getElementById('uncommented-count').textContent = withoutComments;
  document.getElementById('comment-rate').textContent = commentRate + '%';
  document.getElementById('comment-progress').style.width = commentRate + '%';
  
  // Acceptance statistics
  document.getElementById('acceptance-rate').textContent = acceptanceRate + '%';
  document.getElementById('acceptance-progress').style.width = acceptanceRate + '%';
  
  // Alert response rate
  document.getElementById('alert-response-rate').textContent = alertResponseRate.rate + '%';
  document.getElementById('alert-response-progress').style.width = alertResponseRate.rate + '%';
  
  // Impact metrics
  document.getElementById('avg-temp-improvement').textContent = impactMetrics.avgTempImprovement + '°C';
  document.getElementById('recommendations-implemented').textContent = impactMetrics.recommendationsImplemented;
  
  // Priority counts
  document.getElementById('high-priority-count').textContent = priorityCount.high;
  document.getElementById('medium-priority-count').textContent = priorityCount.medium;
  document.getElementById('low-priority-count').textContent = priorityCount.low;
  
  // Type counts
  document.getElementById('rec-type-count').textContent = typeCount.recommendation;
  document.getElementById('alert-type-count').textContent = typeCount.alert;
  document.getElementById('rca-type-count').textContent = typeCount.rca;
  
  // Status counts
  document.getElementById('accepted-count').textContent = statusCount.accepted;
  document.getElementById('pending-count').textContent = statusCount.pending;
  document.getElementById('rejected-count').textContent = statusCount.rejected;
  
  // Average words per message
  document.getElementById('words-per-message').textContent = avgWordsPerMessage;
  
  // Set message length indicator (assuming optimal range is 20-40 words)
  const messageEfficiency = avgWordsPerMessage >= 20 && avgWordsPerMessage <= 40 ? 100 : 
                           avgWordsPerMessage < 20 ? (avgWordsPerMessage / 20) * 100 : 
                           (60 - avgWordsPerMessage) / 20 * 100;
  document.getElementById('message-length-indicator').style.width = Math.max(0, Math.min(100, messageEfficiency)) + '%';
  
  // Render charts
  renderDailyActivityChart(dailyActivity);
  renderPriorityChart(priorityCount);
  renderStatusChart(statusCount);
  renderCommentsChart(withComments, withoutComments);
  renderTypeByPriorityChart(typeByPriorityCount);
  renderImpactMetricsChart(impactMetrics);
  
  // Render the data table
  renderAdoptionTable(adoptionData.data);
}

function renderDailyActivityChart(dailyActivity) {
  const canvas = document.getElementById('daily-activity-chart');
  if (!canvas) return;
  
  if (charts.dailyActivityChart) {
    charts.dailyActivityChart.destroy();
  }
  
  const labels = dailyActivity.map(day => day.displayDate);
  
  charts.dailyActivityChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Recommendations',
          data: dailyActivity.map(day => day.recommendation),
          backgroundColor: colors.recommendation,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        },
        {
          label: 'Alerts',
          data: dailyActivity.map(day => day.alert),
          backgroundColor: colors.alert,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        },
        {
          label: 'RCAs',
          data: dailyActivity.map(day => day.rca),
          backgroundColor: colors.rca,
          barPercentage: 0.6,
          categoryPercentage: 0.8
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
          },
          stacked: true
        },
        y: {
          beginAtZero: true,
          stacked: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function renderTypeByPriorityChart(typeByPriorityData) {
  const canvas = document.getElementById('type-by-priority-chart');
  if (!canvas) return;
  
  if (charts.typeByPriorityChart) {
    charts.typeByPriorityChart.destroy();
  }
  
  // Prepare data for the chart
  const labels = ['Recommendations', 'Alerts', 'RCAs'];
  const lowPriorityData = [
    typeByPriorityData.recommendation.low,
    typeByPriorityData.alert.low,
    typeByPriorityData.rca.low
  ];
  
  const mediumPriorityData = [
    typeByPriorityData.recommendation.medium,
    typeByPriorityData.alert.medium,
    typeByPriorityData.rca.medium
  ];
  
  const highPriorityData = [
    typeByPriorityData.recommendation.high,
    typeByPriorityData.alert.high,
    typeByPriorityData.rca.high
  ];
  
  charts.typeByPriorityChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'High Priority',
          data: highPriorityData,
          backgroundColor: colors.high,
          barPercentage: 0.7,
          categoryPercentage: 0.8
        },
        {
          label: 'Medium Priority',
          data: mediumPriorityData,
          backgroundColor: colors.medium,
          barPercentage: 0.7,
          categoryPercentage: 0.8
        },
        {
          label: 'Low Priority',
          data: lowPriorityData,
          backgroundColor: colors.low,
          barPercentage: 0.7,
          categoryPercentage: 0.8
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
          stacked: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function renderImpactMetricsChart(impactMetrics) {
  const canvas = document.getElementById('impact-metrics-chart');
  if (!canvas) return;
  
  if (charts.impactMetricsChart) {
    charts.impactMetricsChart.destroy();
  }
  
  // Create a very simple gauge chart to represent temperature improvement
  charts.impactMetricsChart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Temperature Gain'],
      datasets: [{
        data: [parseFloat(impactMetrics.avgTempImprovement), 3 - parseFloat(impactMetrics.avgTempImprovement)],
        backgroundColor: [
          '#00A650', // adani-green for the value
          '#E5E7EB'  // light gray for the remaining
        ],
        borderWidth: 0,
        circumference: 180,
        rotation: 270
      }]
    },
    options: {
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      }
    }
  });
  
  // Add temperature value in the center
  const ctx = canvas.getContext('2d');
  ctx.font = '16px Arial';
  ctx.fillStyle = '#00A650';
  ctx.textAlign = 'center';
  ctx.fillText(`${impactMetrics.avgTempImprovement}°C`, canvas.width / 2, canvas.height - 30);
  ctx.font = '12px Arial';
  ctx.fillStyle = '#71717A';
  ctx.fillText('Avg Temp Gain', canvas.width / 2, canvas.height - 10);
}

function renderPriorityChart(priorityData) {
  const canvas = document.getElementById('priority-chart');
  if (!canvas) return;
  
  if (charts.priorityChart) {
    charts.priorityChart.destroy();
  }
  
  charts.priorityChart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels: ['High', 'Medium', 'Low'],
      datasets: [
        {
          data: [priorityData.high, priorityData.medium, priorityData.low],
          backgroundColor: [
            colors.high,
            colors.medium,
            colors.low
          ],
          borderWidth: 0
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
  document.getElementById('priority-filter')?.addEventListener('change', filterAdoptionTable);
  
  // Add download handler
  document.getElementById('download-adoption-report')?.addEventListener('click', function() {
    alert('Downloading adoption report...');
  });
});

function filterAdoptionTable() {
  const typeFilter = document.getElementById('type-filter')?.value || 'all';
  const statusFilter = document.getElementById('status-filter')?.value || 'all';
  const priorityFilter = document.getElementById('priority-filter')?.value || 'all';
  
  let filteredData = [...adoptionData.data];
  
  if (typeFilter !== 'all') {
    filteredData = filteredData.filter(item => item.type === typeFilter);
  }
  
  if (statusFilter !== 'all') {
    filteredData = filteredData.filter(item => item.status === statusFilter);
  }
  
  if (priorityFilter !== 'all') {
    filteredData = filteredData.filter(item => item.priority === priorityFilter);
  }
  
  renderAdoptionTable(filteredData);
}
