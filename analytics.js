
// Sample data for analytics charts
const analyticsData = {
  heaterLoadData: [
    { date: "2023-09-01", heater1: 51.8, heater2: 49.2, heater3: 46.5 },
    { date: "2023-09-02", heater1: 52.0, heater2: 49.5, heater3: 47.2 },
    { date: "2023-09-03", heater1: 52.2, heater2: 49.0, heater3: 46.8 },
    { date: "2023-09-04", heater1: 52.3, heater2: 48.8, heater3: 45.8 },
    { date: "2023-09-05", heater1: 52.4, heater2: 48.7, heater3: 45.1 },
    { date: "2023-09-06", heater1: 52.5, heater2: 48.5, heater3: 44.5 },
    { date: "2023-09-07", heater1: 52.6, heater2: 48.3, heater3: 44.2 }
  ],
  heaterLevelData: [
    { date: "2023-09-01", heater1: 51.0, heater2: 63.5, heater3: 76.8 },
    { date: "2023-09-02", heater1: 51.2, heater2: 64.0, heater3: 77.0 },
    { date: "2023-09-03", heater1: 51.5, heater2: 64.3, heater3: 77.2 },
    { date: "2023-09-04", heater1: 51.8, heater2: 64.5, heater3: 77.5 },
    { date: "2023-09-05", heater1: 52.0, heater2: 65.0, heater3: 78.0 },
    { date: "2023-09-06", heater1: 52.2, heater2: 64.8, heater3: 77.8 },
    { date: "2023-09-07", heater1: 52.0, heater2: 64.5, heater3: 77.5 }
  ],
  temperatureData: [
    { date: "2023-09-01", fwInlet: 190.5, fwOutlet: 212.8, extraction: 340.2 },
    { date: "2023-09-02", fwInlet: 191.2, fwOutlet: 213.5, extraction: 341.5 },
    { date: "2023-09-03", fwInlet: 192.0, fwOutlet: 214.2, extraction: 342.0 },
    { date: "2023-09-04", fwInlet: 192.2, fwOutlet: 214.6, extraction: 342.5 },
    { date: "2023-09-05", fwInlet: 192.5, fwOutlet: 215.2, extraction: 342.8 },
    { date: "2023-09-06", fwInlet: 192.8, fwOutlet: 215.5, extraction: 343.0 },
    { date: "2023-09-07", fwInlet: 193.0, fwOutlet: 215.8, extraction: 343.2 }
  ],
  enthalpyData: [
    { date: "2023-09-01", heater1: 3255, heater2: 3175, heater3: 3018 },
    { date: "2023-09-02", heater1: 3257, heater2: 3177, heater3: 3019 },
    { date: "2023-09-03", heater1: 3258, heater2: 3178, heater3: 3020 },
    { date: "2023-09-04", heater1: 3259, heater2: 3179, heater3: 3020 },
    { date: "2023-09-05", heater1: 3260, heater2: 3180, heater3: 3020 },
    { date: "2023-09-06", heater1: 3262, heater2: 3181, heater3: 3021 },
    { date: "2023-09-07", heater1: 3263, heater2: 3182, heater3: 3022 }
  ],
  parameterData: {
    heatLoad: [
      { date: "2023-09-01", heater1: 51.8, heater2: 49.2, heater3: 46.5 },
      { date: "2023-09-02", heater1: 52.0, heater2: 49.5, heater3: 47.2 },
      { date: "2023-09-03", heater1: 52.2, heater2: 49.0, heater3: 46.8 },
      { date: "2023-09-04", heater1: 52.3, heater2: 48.8, heater3: 45.8 },
      { date: "2023-09-05", heater1: 52.4, heater2: 48.7, heater3: 45.1 },
      { date: "2023-09-06", heater1: 52.5, heater2: 48.5, heater3: 44.5 },
      { date: "2023-09-07", heater1: 52.6, heater2: 48.3, heater3: 44.2 }
    ],
    ttd: [
      { date: "2023-09-01", heater1: 2.7, heater2: 3.4, heater3: 4.0 },
      { date: "2023-09-02", heater1: 2.7, heater2: 3.5, heater3: 4.1 },
      { date: "2023-09-03", heater1: 2.8, heater2: 3.5, heater3: 4.1 },
      { date: "2023-09-04", heater1: 2.8, heater2: 3.6, heater3: 4.2 },
      { date: "2023-09-05", heater1: 2.8, heater2: 3.6, heater3: 4.2 },
      { date: "2023-09-06", heater1: 2.9, heater2: 3.7, heater3: 4.3 },
      { date: "2023-09-07", heater1: 2.9, heater2: 3.7, heater3: 4.3 }
    ],
    dca: [
      { date: "2023-09-01", heater1: 4.3, heater2: 5.0, heater3: 6.6 },
      { date: "2023-09-02", heater1: 4.4, heater2: 5.0, heater3: 6.7 },
      { date: "2023-09-03", heater1: 4.4, heater2: 5.1, heater3: 6.7 },
      { date: "2023-09-04", heater1: 4.5, heater2: 5.1, heater3: 6.8 },
      { date: "2023-09-05", heater1: 4.5, heater2: 5.2, heater3: 6.8 },
      { date: "2023-09-06", heater1: 4.6, heater2: 5.2, heater3: 6.9 },
      { date: "2023-09-07", heater1: 4.6, heater2: 5.3, heater3: 6.9 }
    ],
    tr: [
      { date: "2023-09-01", heater1: 0.91, heater2: 0.88, heater3: 0.82 },
      { date: "2023-09-02", heater1: 0.91, heater2: 0.88, heater3: 0.82 },
      { date: "2023-09-03", heater1: 0.92, heater2: 0.89, heater3: 0.83 },
      { date: "2023-09-04", heater1: 0.92, heater2: 0.89, heater3: 0.83 },
      { date: "2023-09-05", heater1: 0.92, heater2: 0.89, heater3: 0.83 },
      { date: "2023-09-06", heater1: 0.92, heater2: 0.89, heater3: 0.83 },
      { date: "2023-09-07", heater1: 0.92, heater2: 0.89, heater3: 0.83 }
    ],
    enthalpy: [
      { date: "2023-09-01", heater1: 3255, heater2: 3175, heater3: 3018 },
      { date: "2023-09-02", heater1: 3257, heater2: 3177, heater3: 3019 },
      { date: "2023-09-03", heater1: 3258, heater2: 3178, heater3: 3020 },
      { date: "2023-09-04", heater1: 3259, heater2: 3179, heater3: 3020 },
      { date: "2023-09-05", heater1: 3260, heater2: 3180, heater3: 3020 },
      { date: "2023-09-06", heater1: 3262, heater2: 3181, heater3: 3021 },
      { date: "2023-09-07", heater1: 3263, heater2: 3182, heater3: 3022 }
    ]
  }
};

// Utility functions
function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById('current-time').textContent = dateTimeString;
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

// Tab functionality
function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and content
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      
      // Add active class to clicked tab and show content
      this.classList.add('active');
      document.getElementById(`tab-${target}`).classList.remove('hidden');
    });
  });
}

// Initialize charts
function initAnalytics() {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // Set up sidebar
  document.getElementById('sidebar').classList.add('w-64');
  document.getElementById('main-content').classList.add('ml-64');
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  
  // Setup tabs
  setupTabs();
  
  // Initialize the charts
  initHeatLoadChart();
  initHeaterLevelChart();
  initTemperatureChart();
  initEnthalpyChart();
  initParameterComparisonChart();
  
  // Set up date inputs for parameter comparison
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);
  
  document.getElementById('start-date').valueAsDate = lastWeek;
  document.getElementById('end-date').valueAsDate = today;
  
  // Set up event listeners
  document.getElementById('parameter-select').addEventListener('change', updateParameterComparisonChart);
  document.getElementById('start-date').addEventListener('change', updateParameterComparisonChart);
  document.getElementById('end-date').addEventListener('change', updateParameterComparisonChart);
  document.getElementById('date-range').addEventListener('change', updateAllCharts);
  document.getElementById('refresh-data').addEventListener('click', fetchAndRefreshData);
}

// Initialize Heat Load Chart
function initHeatLoadChart() {
  const ctx = document.getElementById('heat-load-chart').getContext('2d');
  
  const heatLoadChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: analyticsData.heaterLoadData.map(item => item.date),
      datasets: [
        {
          label: 'HP Heater 1',
          data: analyticsData.heaterLoadData.map(item => item.heater1),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 2',
          data: analyticsData.heaterLoadData.map(item => item.heater2),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 3',
          data: analyticsData.heaterLoadData.map(item => item.heater3),
          borderColor: '#FF3A3A',
          backgroundColor: 'rgba(255, 58, 58, 0.1)',
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
          position: 'top',
          labels: {
            boxWidth: 15,
            padding: 15
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#333',
          bodyColor: '#333',
          borderColor: '#ddd',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'MW',
            font: {
              size: 12
            }
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

// Initialize Heater Level Chart
function initHeaterLevelChart() {
  const ctx = document.getElementById('heater-level-chart').getContext('2d');
  
  const heaterLevelChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: analyticsData.heaterLevelData.map(item => item.date),
      datasets: [
        {
          label: 'HP Heater 1',
          data: analyticsData.heaterLevelData.map(item => item.heater1),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 2',
          data: analyticsData.heaterLevelData.map(item => item.heater2),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 3',
          data: analyticsData.heaterLevelData.map(item => item.heater3),
          borderColor: '#FF3A3A',
          backgroundColor: 'rgba(255, 58, 58, 0.1)',
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
          position: 'top',
          labels: {
            boxWidth: 15,
            padding: 15
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#333',
          bodyColor: '#333',
          borderColor: '#ddd',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: '%',
            font: {
              size: 12
            }
          },
          min: 40,
          max: 85,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      }
    }
  });
}

// Initialize Temperature Chart
function initTemperatureChart() {
  const ctx = document.getElementById('temperature-chart').getContext('2d');
  
  const temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: analyticsData.temperatureData.map(item => item.date),
      datasets: [
        {
          label: 'FW Inlet Temp',
          data: analyticsData.temperatureData.map(item => item.fwInlet),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'FW Outlet Temp',
          data: analyticsData.temperatureData.map(item => item.fwOutlet),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Extraction Temp',
          data: analyticsData.temperatureData.map(item => item.extraction),
          borderColor: '#FFC107',
          backgroundColor: 'rgba(255, 193, 7, 0.1)',
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
          position: 'top',
          labels: {
            boxWidth: 15,
            padding: 15
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#333',
          bodyColor: '#333',
          borderColor: '#ddd',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: '°C',
            font: {
              size: 12
            }
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

// Initialize Enthalpy Chart
function initEnthalpyChart() {
  const ctx = document.getElementById('enthalpy-chart').getContext('2d');
  
  const enthalpyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: analyticsData.enthalpyData.map(item => item.date),
      datasets: [
        {
          label: 'HP Heater 1',
          data: analyticsData.enthalpyData.map(item => item.heater1),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 2',
          data: analyticsData.enthalpyData.map(item => item.heater2),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 3',
          data: analyticsData.enthalpyData.map(item => item.heater3),
          borderColor: '#FF3A3A',
          backgroundColor: 'rgba(255, 58, 58, 0.1)',
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
          position: 'top',
          labels: {
            boxWidth: 15,
            padding: 15
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#333',
          bodyColor: '#333',
          borderColor: '#ddd',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: 'kJ/kg',
            font: {
              size: 12
            }
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

// Initialize Parameter Comparison Chart
function initParameterComparisonChart() {
  const ctx = document.getElementById('parameter-comparison-chart').getContext('2d');
  const parameter = document.getElementById('parameter-select').value;
  const parameterData = analyticsData.parameterData[parameter];
  
  window.parameterChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: parameterData.map(item => item.date),
      datasets: [
        {
          label: 'HP Heater 1',
          data: parameterData.map(item => item.heater1),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          borderWidth: 2,
          tension: 0.4
        },
        {
          label: 'HP Heater 2',
          data: parameterData.map(item => item.heater2),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          borderWidth: 2,
          tension: 0.4
        },
        {
          label: 'HP Heater 3',
          data: parameterData.map(item => item.heater3),
          borderColor: '#FF3A3A',
          backgroundColor: 'rgba(255, 58, 58, 0.1)',
          borderWidth: 2,
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
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#333',
          bodyColor: '#333',
          borderColor: '#ddd',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          title: {
            display: true,
            text: getParameterUnit(parameter),
            font: {
              size: 12
            }
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

// Get appropriate unit for the selected parameter
function getParameterUnit(parameter) {
  switch(parameter) {
    case 'heatLoad':
      return 'MW';
    case 'ttd':
    case 'dca':
      return '°C';
    case 'tr':
      return '';
    case 'enthalpy':
      return 'kJ/kg';
    default:
      return '';
  }
}

// Update the parameter comparison chart when selection changes
function updateParameterComparisonChart() {
  const parameter = document.getElementById('parameter-select').value;
  const parameterData = analyticsData.parameterData[parameter];
  
  // Update chart data
  window.parameterChart.data.datasets[0].data = parameterData.map(item => item.heater1);
  window.parameterChart.data.datasets[1].data = parameterData.map(item => item.heater2);
  window.parameterChart.data.datasets[2].data = parameterData.map(item => item.heater3);
  
  // Update y-axis title
  window.parameterChart.options.scales.y.title.text = getParameterUnit(parameter);
  
  // Update chart
  window.parameterChart.update();
}

// Update all charts based on selected date range
function updateAllCharts() {
  // In a real implementation, this would fetch new data based on the selected range
  // For demo purposes, we're just showing an alert
  alert("Data would be fetched for the selected date range");
}

// Fetch data from API and refresh charts
function fetchAndRefreshData() {
  // Show a loading indicator
  document.getElementById('refresh-data').innerHTML = `
    <svg class="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Refreshing...
  `;
  
  // Simulate API call
  setTimeout(function() {
    // In a real implementation, this would update with actual fetched data
    document.getElementById('refresh-data').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Refresh Data
    `;
    
    // Show a success message
    alert("Data refreshed successfully!");
  }, 1500);
}

// Initialize the analytics when the page loads
document.addEventListener('DOMContentLoaded', function() {
  initAnalytics();
});
