
// Heater parameters data structure with all the required parameters
const heaterParameters = {
  heater1: [
    { name: "TTD", value: 4.8, unit: "°C", status: "healthy", change: -0.3, id: "ttd_1" },
    { name: "DCA", value: 5.2, unit: "°C", status: "warning", change: 1.5, id: "dca_1" },
    { name: "Flow", value: 1680, unit: "t/h", status: "healthy", change: 0.5, id: "flow_1" },
    { name: "Heat Load", value: 42.6, unit: "Gcal/hr", status: "healthy", change: 1.2, id: "heatLoad_1" },
    { name: "Level", value: 450, unit: "mm", status: "healthy", change: 0, id: "heaterLevel_1" },
    { name: "TR", value: 0.92, unit: "", status: "healthy", change: 0.2, id: "tr_1" },
    { name: "Predicted Eco Inlet", value: 98.5, unit: "%", status: "healthy", change: 0, id: "predictedEcoInlet_1" },
    { name: "FW Temp Inlet", value: 228, unit: "°C", status: "healthy", change: 0, id: "fwTempInlet_1" },
    { name: "FW Temp Outlet", value: 242, unit: "°C", status: "healthy", change: 0, id: "fwTempOutlet_1" }
  ],
  heater2: [
    { name: "TTD", value: 3.9, unit: "°C", status: "healthy", change: -0.2, id: "ttd_2" },
    { name: "DCA", value: 7.3, unit: "°C", status: "critical", change: 2.1, id: "dca_2" },
    { name: "Flow", value: 1680, unit: "t/h", status: "healthy", change: 0, id: "flow_2" },
    { name: "Heat Load", value: 38.2, unit: "Gcal/hr", status: "warning", change: -1.5, id: "heatLoad_2" },
    { name: "Level", value: 425, unit: "mm", status: "warning", change: 0, id: "heaterLevel_2" },
    { name: "TR", value: 0.89, unit: "", status: "warning", change: -0.3, id: "tr_2" },
    { name: "Predicted Eco Inlet", value: 97.2, unit: "%", status: "warning", change: 0, id: "predictedEcoInlet_2" },
    { name: "FW Temp Inlet", value: 210, unit: "°C", status: "healthy", change: 0, id: "fwTempInlet_2" },
    { name: "FW Temp Outlet", value: 225, unit: "°C", status: "warning", change: 0, id: "fwTempOutlet_2" }
  ],
  heater3: [
    { name: "TTD", value: 4.3, unit: "°C", status: "healthy", change: 0.1, id: "ttd_3" },
    { name: "DCA", value: 4.8, unit: "°C", status: "healthy", change: 0.5, id: "dca_3" },
    { name: "Flow", value: 1680, unit: "t/h", status: "healthy", change: 0, id: "flow_3" },
    { name: "Heat Load", value: 35.4, unit: "Gcal/hr", status: "healthy", change: 0.8, id: "heatLoad_3" },
    { name: "Level", value: 460, unit: "mm", status: "healthy", change: 0, id: "heaterLevel_3" },
    { name: "TR", value: 0.94, unit: "", status: "healthy", change: 0.1, id: "tr_3" },
    { name: "Predicted Eco Inlet", value: 99.1, unit: "%", status: "healthy", change: 0, id: "predictedEcoInlet_3" },
    { name: "FW Temp Inlet", value: 192, unit: "°C", status: "healthy", change: 0, id: "fwTempInlet_3" },
    { name: "FW Temp Outlet", value: 210, unit: "°C", status: "healthy", change: 0, id: "fwTempOutlet_3" }
  ]
};

// Benchmark data for parameter trends with IQR method boundaries
const benchmarkData = {
  ttd: [
    { load: 250, lowerBound: 3.75, median: 5.92, upperBound: 6.85, design: 5.5 },
    { load: 300, lowerBound: 3.82, median: 5.14, upperBound: 5.89, design: 5.2 },
    { load: 350, lowerBound: 3.60, median: 4.95, upperBound: 5.75, design: 5.0 },
    { load: 400, lowerBound: 3.53, median: 5.31, upperBound: 6.50, design: 4.8 },
    { load: 450, lowerBound: 3.56, median: 5.36, upperBound: 6.80, design: 4.8 },
    { load: 500, lowerBound: 3.61, median: 5.42, upperBound: 6.85, design: 4.8 },
    { load: 550, lowerBound: 3.72, median: 5.50, upperBound: 6.92, design: 4.8 },
    { load: 600, lowerBound: 3.85, median: 5.62, upperBound: 7.10, design: 4.9 }
  ],
  dca: [
    { load: 250, lowerBound: 3.25, median: 4.50, upperBound: 5.35, design: 4.8 },
    { load: 300, lowerBound: 3.32, median: 4.65, upperBound: 5.42, design: 4.9 },
    { load: 350, lowerBound: 3.45, median: 4.72, upperBound: 5.55, design: 5.0 },
    { load: 400, lowerBound: 3.52, median: 4.85, upperBound: 5.62, design: 5.1 },
    { load: 450, lowerBound: 3.60, median: 4.95, upperBound: 5.75, design: 5.2 },
    { load: 500, lowerBound: 3.75, median: 5.10, upperBound: 5.92, design: 5.3 },
    { load: 550, lowerBound: 3.85, median: 5.25, upperBound: 6.10, design: 5.4 },
    { load: 600, lowerBound: 4.00, median: 5.45, upperBound: 6.35, design: 5.5 }
  ],
  flow: [
    { load: 250, lowerBound: 800, median: 850, upperBound: 900, design: 870 },
    { load: 300, lowerBound: 960, median: 1020, upperBound: 1080, design: 1044 },
    { load: 350, lowerBound: 1120, median: 1190, upperBound: 1260, design: 1218 },
    { load: 400, lowerBound: 1280, median: 1360, upperBound: 1440, design: 1392 },
    { load: 450, lowerBound: 1440, median: 1530, upperBound: 1620, design: 1566 },
    { load: 500, lowerBound: 1600, median: 1700, upperBound: 1800, design: 1740 },
    { load: 550, lowerBound: 1760, median: 1870, upperBound: 1980, design: 1914 },
    { load: 600, lowerBound: 1920, median: 2040, upperBound: 2160, design: 2088 }
  ],
  heatLoad: [
    { load: 250, lowerBound: 18, median: 20, upperBound: 22, design: 19.5 },
    { load: 300, lowerBound: 22, median: 24, upperBound: 26, design: 23.5 },
    { load: 350, lowerBound: 26, median: 28, upperBound: 30, design: 27.5 },
    { load: 400, lowerBound: 30, median: 32, upperBound: 34, design: 31.5 },
    { load: 450, lowerBound: 34, median: 36, upperBound: 38, design: 35.5 },
    { load: 500, lowerBound: 38, median: 40, upperBound: 42, design: 39.5 },
    { load: 550, lowerBound: 42, median: 44, upperBound: 46, design: 43.5 },
    { load: 600, lowerBound: 46, median: 48, upperBound: 50, design: 47.5 }
  ],
  tr: [
    { load: 250, lowerBound: 0.80, median: 0.85, upperBound: 0.90, design: 0.88 },
    { load: 300, lowerBound: 0.82, median: 0.87, upperBound: 0.92, design: 0.89 },
    { load: 350, lowerBound: 0.84, median: 0.89, upperBound: 0.94, design: 0.90 },
    { load: 400, lowerBound: 0.86, median: 0.91, upperBound: 0.96, design: 0.91 },
    { load: 450, lowerBound: 0.88, median: 0.93, upperBound: 0.98, design: 0.92 },
    { load: 500, lowerBound: 0.89, median: 0.94, upperBound: 0.99, design: 0.93 },
    { load: 550, lowerBound: 0.90, median: 0.95, upperBound: 1.00, design: 0.94 },
    { load: 600, lowerBound: 0.91, median: 0.96, upperBound: 1.01, design: 0.95 }
  ]
};

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    let currentHeaterId = "1"; // Default to heater 1
    renderParameterCards(currentHeaterId);
    updateStatusCounts();
    initializeSidebar();
    initializeHeaterSelector();
    initializeSortable();
});

function renderParameterCards(heaterId) {
    const container = document.getElementById('parameter-cards');
    container.innerHTML = ''; // Clear existing cards
    
    const parameterKey = `heater${heaterId}`;
    const parameters = heaterParameters[parameterKey];
    
    parameters.forEach(param => {
        const card = createParameterCard(param);
        container.appendChild(card);
    });
}

function createParameterCard(param) {
    const card = document.createElement('div');
    card.className = `parameter-card sortable-item cursor-pointer`;
    card.setAttribute('data-id', param.id);
    
    // Create change indicator if available
    let changeIndicator = '';
    if (param.change !== undefined) {
        const changeClass = param.change >= 0 ? 'text-adani-green' : 'text-adani-red';
        const arrowIcon = param.change >= 0 ? 
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>' : 
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>';
        
        changeIndicator = `
            <div class="flex items-center text-xs ${changeClass}">
                ${arrowIcon}
                ${Math.abs(param.change)}%
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-adani-navy">${param.name}</h3>
            ${changeIndicator}
        </div>
        <div class="flex items-end justify-between">
            <p class="text-3xl font-bold ${getStatusColorClass(param.status)}">${param.value}</p>
            <span class="text-sm text-gray-500">${param.unit}</span>
        </div>
    `;
    
    card.addEventListener('click', () => showParameterDetails(param));
    return card;
}

function updateStatusCounts() {
    // Combine all heaters' parameters for counting
    const allParameters = [
        ...heaterParameters.heater1,
        ...heaterParameters.heater2,
        ...heaterParameters.heater3
    ];

    const counts = {
        critical: allParameters.filter(p => p.status === 'critical').length,
        warning: allParameters.filter(p => p.status === 'warning').length,
        healthy: allParameters.filter(p => p.status === 'healthy').length
    };

    document.getElementById('critical-count').textContent = counts.critical;
    document.getElementById('warning-count').textContent = counts.warning;
    document.getElementById('healthy-count').textContent = counts.healthy;
}

function initializeSidebar() {
    const sidebar = document.getElementById('parameter-sidebar');
    const closeBtn = document.getElementById('close-sidebar');

    closeBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
    });
}

function initializeHeaterSelector() {
    const selector = document.getElementById('heater-selector');
    selector.addEventListener('change', (event) => {
        currentHeaterId = event.target.value;
        renderParameterCards(currentHeaterId);
        initializeSortable(); // Re-initialize sortable after rendering new cards
    });
}

function initializeSortable() {
    const container = document.querySelector('.sortable-container');
    if (container) {
        // Remove existing Sortable instance if it exists
        const existingInstance = Sortable.get(container);
        if (existingInstance) {
            existingInstance.destroy();
        }
        
        // Initialize new Sortable instance
        new Sortable(container, {
            animation: 150,
            ghostClass: 'bg-adani-gray',
            handle: '.sortable-item',
            onEnd: function(evt) {
                // Optional: Save the new order to localStorage or send to server
                console.log('Parameter card order changed:', evt.oldIndex, evt.newIndex);
            }
        });
    }
}

function showParameterDetails(parameter) {
    const sidebar = document.getElementById('parameter-sidebar');
    const parameterTitle = document.getElementById('parameter-title');
    
    sidebar.style.width = '600px';
    parameterTitle.textContent = `${parameter.name} Analysis`;
    
    const paramKey = parameter.name.toLowerCase().replace(' ', '');
    
    if (benchmarkData[paramKey]) {
        renderBenchmarkTable(benchmarkData[paramKey]);
        renderParameterChart(parameter, benchmarkData[paramKey]);
    } else {
        // If no benchmark data found, show a message
        document.getElementById('benchmark-table').innerHTML = '<tr><td colspan="5" class="px-4 py-2 text-center">No benchmark data available for this parameter.</td></tr>';
        clearChart();
    }
}

function renderBenchmarkTable(benchmarkRows) {
    const tableBody = document.getElementById('benchmark-table');
    tableBody.innerHTML = '';

    benchmarkRows.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-t border-gray-200 hover:bg-gray-50';
        tr.innerHTML = `
            <td class="px-4 py-2">${row.load}</td>
            <td class="px-4 py-2">${row.lowerBound}</td>
            <td class="px-4 py-2">${row.median}</td>
            <td class="px-4 py-2">${row.upperBound}</td>
            <td class="px-4 py-2">${row.design}</td>
        `;
        tableBody.appendChild(tr);
    });
}

function renderParameterChart(parameter, benchmarkData) {
    const ctx = document.getElementById('parameter-chart').getContext('2d');
    
    if (window.currentChart) {
        window.currentChart.destroy();
    }

    const loads = benchmarkData.map(d => d.load);
    const medians = benchmarkData.map(d => d.median);
    const upperBounds = benchmarkData.map(d => d.upperBound);
    const lowerBounds = benchmarkData.map(d => d.lowerBound);
    const designs = benchmarkData.map(d => d.design);
    
    // Find the closest load point to current load (560 MW)
    const currentLoad = 560;
    const actualValue = parameter.value;

    window.currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: loads,
            datasets: [
                {
                    label: 'Actual Value',
                    data: loads.map(load => load === 550 ? actualValue : null), // Only show at 550 MW
                    borderColor: '#FF3A3A',
                    backgroundColor: '#FF3A3A',
                    borderWidth: 0,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointStyle: 'circle',
                    fill: false
                },
                {
                    label: 'Design Value',
                    data: designs,
                    borderColor: '#0046AD',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Median',
                    data: medians,
                    borderColor: '#00A650',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Upper Bound',
                    data: upperBounds,
                    borderColor: 'rgba(255, 193, 7, 0.7)',
                    borderDash: [5, 5],
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Lower Bound',
                    data: lowerBounds,
                    borderColor: 'rgba(255, 193, 7, 0.7)',
                    borderDash: [5, 5],
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Load (MW)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: parameter.unit
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `${parameter.name} vs Load`
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + (parameter.unit ? ` ${parameter.unit}` : '');
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function clearChart() {
    if (window.currentChart) {
        window.currentChart.destroy();
        window.currentChart = null;
    }
}

function getStatusColorClass(status) {
    return status === 'critical' ? 'text-adani-red' : 
           status === 'warning' ? 'text-adani-yellow' : 
           'text-adani-green';
}
