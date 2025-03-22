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
  },
  
  trendData: {
    ttd: generateTrendData(3.5, 24, 0.15),
    dca: generateTrendData(5.5, 24, 0.12),
    tr: generateTrendData(0.88, 24, 0.05),
    heatLoad: generateTrendData(49.0, 24, 0.07),
    flow: generateTrendData(622, 24, 0.03),
    heaterLevel: generateTrendData(65, 24, 0.1)
  },
  
  // New performance indicators data
  performanceIndicators: {
    efficiency: [
      { date: '2023-09-01', value: 92.4 },
      { date: '2023-09-02', value: 92.1 },
      { date: '2023-09-03', value: 92.8 },
      { date: '2023-09-04', value: 93.2 },
      { date: '2023-09-05', value: 93.0 },
      { date: '2023-09-06', value: 92.7 },
      { date: '2023-09-07', value: 92.9 }
    ],
    maintenance: [
      { date: '2023-09-01', scheduled: 4, unscheduled: 2 },
      { date: '2023-09-02', scheduled: 3, unscheduled: 1 },
      { date: '2023-09-03', scheduled: 5, unscheduled: 2 },
      { date: '2023-09-04', scheduled: 2, unscheduled: 0 },
      { date: '2023-09-05', scheduled: 4, unscheduled: 1 },
      { date: '2023-09-06', scheduled: 3, unscheduled: 3 },
      { date: '2023-09-07', scheduled: 2, unscheduled: 1 }
    ],
    operatingCosts: [
      { month: 'Jan', maintenance: 45, energy: 62, other: 21 },
      { month: 'Feb', maintenance: 42, energy: 58, other: 24 },
      { month: 'Mar', maintenance: 48, energy: 61, other: 19 },
      { month: 'Apr', maintenance: 52, energy: 64, other: 22 },
      { month: 'May', maintenance: 47, energy: 60, other: 20 },
      { month: 'Jun', maintenance: 59, energy: 66, other: 25 }
    ]
  }
};

// Generate trend data for heater parameters
function generateTrendData(baseValue, count, volatility = 0.1) {
  const data = [];
  let currentValue = baseValue;
  
  for (let i = 0; i < count; i++) {
    // Random walk with slight trend
    const change = (Math.random() - 0.5) * volatility * baseValue;
    currentValue += change;
    
    // Determine status based on deviation from baseline
    let status = 'healthy';
    const deviation = Math.abs((currentValue - baseValue) / baseValue);
    
    if (deviation > 0.08) {
      status = 'critical';
    } else if (deviation > 0.04) {
      status = 'warning';
    }
    
    const timePoint = new Date();
    timePoint.setHours(timePoint.getHours() - (count - i));
    
    data.push({
      time: timePoint.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      value: +currentValue.toFixed(2),
      status
    });
  }
  
  return data;
}

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
  
  // Initialize heater trends with improved visuals
  initHeaterTrendsAdvanced();
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

// NEW IMPROVED IMPLEMENTATION: Initialize Advanced Heater Trends
function initHeaterTrendsAdvanced() {
  const heaterTab = document.getElementById('tab-heaters');
  if (!heaterTab) return;
  
  // Add a section for performance overview first
  let performanceOverview = document.getElementById('performance-overview');
  if (!performanceOverview) {
    performanceOverview = document.createElement('div');
    performanceOverview.id = 'performance-overview';
    performanceOverview.className = 'bg-white rounded-lg shadow-md p-6 mb-6';
    performanceOverview.innerHTML = `
      <h3 class="text-xl font-bold text-adani-navy mb-3">Performance Overview</h3>
      <p class="text-gray-600 mb-4">Real-time performance metrics for the HP Heater system over the last 24 hours.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-500">Overall Efficiency</span>
            <span class="text-lg font-bold text-adani-blue">92.8%</span>
          </div>
          <div class="mt-2 h-2 bg-gray-200 rounded-full">
            <div class="h-2 bg-adani-blue rounded-full" style="width: 92.8%"></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">Target: 95%</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-500">Heat Transfer Rate</span>
            <span class="text-lg font-bold text-green-600">146.2 MW</span>
          </div>
          <div class="flex items-center text-sm mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span class="text-green-600">+1.8% from yesterday</span>
          </div>
        </div>
        <div class="bg-purple-50 p-4 rounded-lg">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-500">Avg TTD/DCA Ratio</span>
            <span class="text-lg font-bold text-purple-600">0.62</span>
          </div>
          <div class="flex items-center text-sm mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span class="text-red-600">-0.05 from optimal</span>
          </div>
        </div>
      </div>
    `;
    
    const heaterCardsContainer = document.getElementById('heater-cards-container');
    if (heaterCardsContainer) {
      heaterTab.insertBefore(performanceOverview, heaterCardsContainer);
    }
  }
  
  // Create container for trends if it doesn't exist
  let trendsContainer = document.getElementById('heater-trends-container');
  if (!trendsContainer) {
    // Add trends section header
    const header = document.createElement('div');
    header.className = 'w-full mt-8 mb-4';
    header.innerHTML = `
      <h3 class="text-xl font-bold text-adani-navy">HP Heater Performance Trends</h3>
      <p class="text-gray-600 text-sm mb-4">
        These 24-hour trend charts monitor key performance parameters to identify operational issues and predict maintenance needs.
      </p>
    `;
    heaterTab.appendChild(header);
    
    // Create trends container with improved layout
    trendsContainer = document.createElement('div');
    trendsContainer.id = 'heater-trends-container';
    trendsContainer.className = 'grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6';
    heaterTab.appendChild(trendsContainer);
    
    // Add trend charts with improved styling
    renderAdvancedTrendCharts(trendsContainer);
    
    // Add maintenance prediction section
    const maintenanceSection = document.createElement('div');
    maintenanceSection.className = 'bg-white rounded-lg shadow-md p-6 mt-6';
    maintenanceSection.innerHTML = `
      <h3 class="text-xl font-bold text-adani-navy mb-3">Maintenance Prediction</h3>
      <p class="text-gray-600 mb-4">AI-based prediction of maintenance requirements based on current trends.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="border rounded-lg p-4">
          <h4 class="font-medium text-gray-700 mb-2">HP Heater 1</h4>
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <p class="text-sm">Normal operation - No maintenance required</p>
          </div>
          <p class="text-xs text-gray-500 mt-2">Next scheduled: 45 days</p>
        </div>
        
        <div class="border rounded-lg p-4">
          <h4 class="font-medium text-gray-700 mb-2">HP Heater 2</h4>
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <p class="text-sm">Monitor TTD - Early warning</p>
          </div>
          <p class="text-xs text-gray-500 mt-2">Inspection recommended: 15 days</p>
        </div>
        
        <div class="border rounded-lg p-4">
          <h4 class="font-medium text-gray-700 mb-2">HP Heater 3</h4>
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <p class="text-sm">Maintenance required - DCA critical</p>
          </div>
          <p class="text-xs text-gray-500 mt-2">Schedule service: 5 days</p>
        </div>
      </div>
      
      <canvas id="maintenance-prediction-chart" height="250"></canvas>
    `;
    heaterTab.appendChild(maintenanceSection);
    
    // Initialize maintenance prediction chart
    const maintenanceCtx = document.getElementById('maintenance-prediction-chart')?.getContext('2d');
    if (maintenanceCtx) {
      new Chart(maintenanceCtx, {
        type: 'bar',
        data: {
          labels: analyticsData.performanceIndicators.maintenance.map(item => item.date),
          datasets: [
            {
              label: 'Scheduled Maintenance',
              data: analyticsData.performanceIndicators.maintenance.map(item => item.scheduled),
              backgroundColor: '#93c5fd',
              borderColor: '#3b82f6',
              borderWidth: 1
            },
            {
              label: 'Unscheduled Maintenance',
              data: analyticsData.performanceIndicators.maintenance.map(item => item.unscheduled),
              backgroundColor: '#fca5a5',
              borderColor: '#ef4444',
              borderWidth: 1
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
              display: true,
              text: 'Maintenance Events (Last 7 Days)'
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
                text: 'Number of Events'
              }
            }
          }
        }
      });
    }
  }
}

// Render advanced trend charts with better visual design
function renderAdvancedTrendCharts(container) {
  // Define parameters to display with improved descriptions and styling
  const parameters = [
    { 
      id: 'ttd', 
      name: 'TTD Trend', 
      description: 'Terminal Temperature Difference indicates heat transfer efficiency across the tubes',
      unit: '°C',
      color: '#1EAEDB',
      target: 3.0,
      warning: 3.5
    },
    { 
      id: 'dca', 
      name: 'DCA Trend', 
      description: 'Drain Cooler Approach shows subcooling effectiveness of condensate',
      unit: '°C',
      color: '#F97316',
      target: 5.0,
      warning: 6.0
    },
    { 
      id: 'tr', 
      name: 'Temperature Ratio', 
      description: 'Measure of heat exchanger effectiveness (optimal value: 0.9-0.95)',
      unit: '',
      color: '#8B5CF6',
      target: 0.92,
      warning: 0.88
    },
    { 
      id: 'heatLoad', 
      name: 'Heat Load', 
      description: 'Total heat energy transferred from extraction steam to feedwater',
      unit: 'MW',
      color: '#D946EF',
      target: 50.0,
      warning: 47.0
    }
  ];
  
  // Create chart for each parameter with improved styling
  parameters.forEach(param => {
    const chartCard = document.createElement('div');
    chartCard.className = 'bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300';
    
    chartCard.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <div>
          <h4 class="font-medium text-adani-navy">${param.name}</h4>
          <p class="text-xs text-gray-500">${param.description}</p>
        </div>
        <div class="bg-blue-50 px-2 py-1 rounded text-xs font-medium">
          Target: ${param.target}${param.unit}
        </div>
      </div>
      <div class="h-[250px]">
        <canvas id="trend-chart-${param.id}"></canvas>
      </div>
      <div class="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <div class="bg-green-50 p-2 rounded">
          <span class="block text-gray-500">Current</span>
          <span class="font-medium">${analyticsData.trendData[param.id][analyticsData.trendData[param.id].length-1].value}${param.unit}</span>
        </div>
        <div class="bg-blue-50 p-2 rounded">
          <span class="block text-gray-500">Average</span>
          <span class="font-medium">${(analyticsData.trendData[param.id].reduce((sum, point) => sum + point.value, 0) / analyticsData.trendData[param.id].length).toFixed(2)}${param.unit}</span>
        </div>
        <div class="bg-purple-50 p-2 rounded">
          <span class="block text-gray-500">Trend</span>
          <span class="font-medium flex items-center justify-center">
            ${getTrendIndicator(analyticsData.trendData[param.id])}
          </span>
        </div>
      </div>
    `;
    
    container.appendChild(chartCard);
    
    // Initialize chart with improved styling
    const ctx = document.getElementById(`trend-chart-${param.id}`).getContext('2d');
    createAdvancedTrendChart(ctx, analyticsData.trendData[param.id], param);
  });
}

// Helper function to get trend indicator
function getTrendIndicator(data) {
  // Calculate trend direction based on recent data points
  const recentValues = data.slice(-5);
  let increasing = 0;
  let decreasing = 0;
  
  for (let i = 1; i < recentValues.length; i++) {
    if (recentValues[i].value > recentValues[i-1].value) {
      increasing++;
    } else if (recentValues[i].value < recentValues[i-1].value) {
      decreasing++;
    }
  }
  
  // Determine overall trend
  if (increasing > decreasing) {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg> Increasing`;
  } else if (decreasing > increasing) {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg> Decreasing`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
            </svg> Stable`;
  }
}

// Create advanced trend chart with target lines and better styling
function createAdvancedTrendChart(ctx, data, parameter) {
  // Format data for Chart.js
  const labels = data.map(point => point.time);
  const values = data.map(point => point.value);
  
  // Create gradient for area below the line
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, `${parameter.color}40`);  // 25% opacity
  gradient.addColorStop(1, `${parameter.color}00`);  // 0% opacity
  
  // Create chart with improved styling and annotations
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: parameter.unit ? `${parameter.name} (${parameter.unit})` : parameter.name,
          data: values,
          backgroundColor: gradient,
          borderColor: parameter.color,
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 5,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context) {
              const value = context.raw;
              return parameter.unit ? `${value} ${parameter.unit}` : value;
            }
          },
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#334155',
          bodyColor: '#334155',
          borderColor: '#e2e8f0',
          borderWidth: 1,
          cornerRadius: 6,
          padding: 10,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        },
        annotation: {
          annotations: {
            targetLine: {
              type: 'line',
              yMin: parameter.target,
              yMax: parameter.target,
              borderColor: '#0ea5e9',
              borderWidth: 1,
              borderDash: [5, 5],
              label: {
                content: `Target: ${parameter.target}${parameter.unit}`,
                enabled: true,
                position: 'end'
              }
            },
            warningLine: {
              type: 'line',
              yMin: parameter.warning,
              yMax: parameter.warning,
              borderColor: '#f59e0b',
              borderWidth: 1,
              borderDash: [5, 5],
              label: {
                content: `Warning: ${parameter.warning}${parameter.unit}`,
                enabled: true,
                position: 'end'
              }
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 10
            }
          }
        },
        y: {
          beginAtZero: false,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            callback: function(value) {
              return parameter.unit ? `${value} ${parameter.unit}` : value;
            },
            color: '#64748b',
            font: {
              size: 10
            }
          }
        }
      }
    }
  });
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
window.initHeaterTrendsAdvanced = initHeaterTrendsAdvanced;
