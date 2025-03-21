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
  
  enthalpyData: {
    extractionSteam: [
      { date: "2023-09-01", heater1: 3255, heater2: 3175, heater3: 3018 },
      { date: "2023-09-02", heater1: 3257, heater2: 3177, heater3: 3019 },
      { date: "2023-09-03", heater1: 3258, heater2: 3178, heater3: 3020 },
      { date: "2023-09-04", heater1: 3259, heater2: 3179, heater3: 3020 },
      { date: "2023-09-05", heater1: 3260, heater2: 3180, heater3: 3020 },
      { date: "2023-09-06", heater1: 3262, heater2: 3181, heater3: 3021 },
      { date: "2023-09-07", heater1: 3263, heater2: 3182, heater3: 3022 }
    ],
    drip: [
      { date: "2023-09-01", heater1: 875, heater2: 958, heater3: 1028 },
      { date: "2023-09-02", heater1: 878, heater2: 960, heater3: 1030 },
      { date: "2023-09-03", heater1: 880, heater2: 962, heater3: 1032 },
      { date: "2023-09-04", heater1: 881, heater2: 964, heater3: 1034 },
      { date: "2023-09-05", heater1: 883, heater2: 966, heater3: 1036 },
      { date: "2023-09-06", heater1: 885, heater2: 968, heater3: 1038 },
      { date: "2023-09-07", heater1: 887, heater2: 970, heater3: 1040 }
    ],
    fwInlet: [
      { date: "2023-09-01", heater1: 823, heater2: 922, heater3: 1002 },
      { date: "2023-09-02", heater1: 824, heater2: 923, heater3: 1003 },
      { date: "2023-09-03", heater1: 825, heater2: 924, heater3: 1004 },
      { date: "2023-09-04", heater1: 826, heater2: 925, heater3: 1005 },
      { date: "2023-09-05", heater1: 827, heater2: 926, heater3: 1006 },
      { date: "2023-09-06", heater1: 828, heater2: 927, heater3: 1007 },
      { date: "2023-09-07", heater1: 829, heater2: 928, heater3: 1008 }
    ],
    fwOutlet: [
      { date: "2023-09-01", heater1: 922, heater2: 1002, heater3: 1072 },
      { date: "2023-09-02", heater1: 923, heater2: 1003, heater3: 1073 },
      { date: "2023-09-03", heater1: 924, heater2: 1004, heater3: 1074 },
      { date: "2023-09-04", heater1: 925, heater2: 1005, heater3: 1075 },
      { date: "2023-09-05", heater1: 926, heater2: 1006, heater3: 1076 },
      { date: "2023-09-06", heater1: 927, heater2: 1007, heater3: 1077 },
      { date: "2023-09-07", heater1: 928, heater2: 1008, heater3: 1078 }
    ]
  },
  steamFlow: [
    { date: "2023-09-01", heater1: 42.5, heater2: 38.7, heater3: 35.2 },
    { date: "2023-09-02", heater1: 42.8, heater2: 39.0, heater3: 35.5 },
    { date: "2023-09-03", heater1: 43.0, heater2: 39.2, heater3: 35.8 },
    { date: "2023-09-04", heater1: 43.2, heater2: 39.4, heater3: 36.0 },
    { date: "2023-09-05", heater1: 43.5, heater2: 39.6, heater3: 36.2 },
    { date: "2023-09-06", heater1: 43.8, heater2: 39.8, heater3: 36.5 },
    { date: "2023-09-07", heater1: 44.0, heater2: 40.0, heater3: 36.8 }
  ],
  heatLoad: [
    { date: "2023-09-01", heater1: 51.8, heater2: 49.2, heater3: 46.5 },
    { date: "2023-09-02", heater1: 52.0, heater2: 49.5, heater3: 47.2 },
    { date: "2023-09-03", heater1: 52.2, heater2: 49.0, heater3: 46.8 },
    { date: "2023-09-04", heater1: 52.3, heater2: 48.8, heater3: 45.8 },
    { date: "2023-09-05", heater1: 52.4, heater2: 48.7, heater3: 45.1 },
    { date: "2023-09-06", heater1: 52.5, heater2: 48.5, heater3: 44.5 },
    { date: "2023-09-07", heater1: 52.6, heater2: 48.3, heater3: 44.2 }
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
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and show content
      this.classList.add('active');
      document.getElementById(`tab-${target}`).classList.add('active');
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
  initTemperatureChart();
  initTTDDCAChart();
  initTRChart();
  initHeaterLevelChart();
  initSteamFlowChart();
  initEnthalpyCharts();
  initParameterComparisonChart();
  
  // Set up date inputs for parameter comparison
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);
  
  document.getElementById('compare-start-date').valueAsDate = lastWeek;
  document.getElementById('compare-end-date').valueAsDate = today;
  
  // Set up event listeners
  document.getElementById('parameter-select').addEventListener('change', updateParameterComparisonChart);
  document.getElementById('compare-start-date').addEventListener('change', updateParameterComparisonChart);
  document.getElementById('compare-end-date').addEventListener('change', updateParameterComparisonChart);
  document.getElementById('date-range').addEventListener('change', handleDateRangeChange);
  document.getElementById('refresh-data').addEventListener('click', fetchAndRefreshData);
}

function handleDateRangeChange() {
  const dateRange = document.getElementById('date-range').value;
  const customDateContainer = document.getElementById('custom-date-container');
  const customDateEndContainer = document.getElementById('custom-date-end-container');
  
  if (dateRange === 'custom') {
    customDateContainer.style.display = 'block';
    customDateEndContainer.style.display = 'block';
  } else {
    customDateContainer.style.display = 'none';
    customDateEndContainer.style.display = 'none';
  }
}

// Initialize Heat Load Chart
function initHeatLoadChart() {
  const ctx = document.getElementById('heat-load-chart').getContext('2d');
  
  const heatLoadChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: analyticsData.heatLoad.map(item => item.date),
      datasets: [
        {
          label: 'HP Heater 1',
          data: analyticsData.heatLoad.map(item => item.heater1),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 2',
          data: analyticsData.heatLoad.map(item => item.heater2),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'HP Heater 3',
          data: analyticsData.heatLoad.map(item => item.heater3),
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

// Initialize Steam Flow Chart
function initSteamFlowChart() {
  const ctx = document.getElementById('ttd-dca-chart').getContext('2d');
  
  const steamFlowChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: analyticsData.steamFlow.map(item => item.date),
      datasets: [
        {
          label: 'HP Heater 1 Steam Flow',
          data: analyticsData.steamFlow.map(item => item.heater1),
          borderColor: '#0046AD',
          backgroundColor: 'rgba(0, 70, 173, 0.1)',
          tension: 0.4,
          yAxisID: 'y',
          fill: true
        },
        {
          label: 'HP Heater 2 Steam Flow',
          data: analyticsData.steamFlow.map(item => item.heater2),
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          tension: 0.4,
          yAxisID: 'y',
          fill: true
        },
        {
          label: 'HP Heater 3 Steam Flow',
          data: analyticsData.steamFlow.map(item => item.heater3),
          borderColor: '#FF3A3A',
          backgroundColor: 'rgba(255, 58, 58, 0.1)',
          tension: 0.4,
          yAxisID: 'y',
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Steam Flow Trend (t/h)',
          font: {
            size: 16
          }
        },
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
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 't/h',
            font: {
              size: 12
            }
          },
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

// Initialize Enthalpy Charts for all enthalpy types
function initEnthalpyCharts() {
  const ctx = document.getElementById('enthalpy-chart').getContext('2d');
  
  // Create dataset for extraction steam enthalpy
  const extractionDatasets = [
    {
      label: 'HP Heater 1 - Extraction',
      data: analyticsData.enthalpyData.extractionSteam.map(item => item.heater1),
      borderColor: '#0046AD',
      backgroundColor: 'rgba(0, 70, 173, 0.1)',
      tension: 0.4,
      borderWidth: 2,
      borderDash: []
    },
    {
      label: 'HP Heater 2 - Extraction',
      data: analyticsData.enthalpyData.extractionSteam.map(item => item.heater2),
      borderColor: '#00A650',
      backgroundColor: 'rgba
