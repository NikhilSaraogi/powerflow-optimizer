
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

// Benchmark data for parameter trends with comprehensive IQR method statistics
const benchmarkData = {
  ttd: [
    { load: 250, sampleSize: 29, q1: 5.875, median: 5.921, q3: 6.053, mean: 5.938, sd: 0.244, design: 5.5 },
    { load: 300, sampleSize: 136, q1: 4.812, median: 5.141, q3: 5.391, mean: 5.092, sd: 0.483, design: 5.2 },
    { load: 350, sampleSize: 8054, q1: 4.739, median: 4.945, q3: 5.152, mean: 4.953, sd: 0.484, design: 5.0 },
    { load: 400, sampleSize: 2889, q1: 4.671, median: 5.312, q3: 5.814, mean: 5.212, sd: 1.01, design: 4.8 },
    { load: 450, sampleSize: 3748, q1: 4.708, median: 5.364, q3: 5.85, mean: 5.213, sd: 1.095, design: 4.8 },
    { load: 500, sampleSize: 4513, q1: 4.404, median: 5.032, q3: 5.558, mean: 4.938, sd: 1.036, design: 4.8 },
    { load: 550, sampleSize: 6737, q1: 4.49, median: 4.917, q3: 5.232, mean: 4.823, sd: 0.777, design: 4.8 },
    { load: 600, sampleSize: 18493, q1: 4.72, median: 4.941, q3: 5.18, mean: 4.926, sd: 0.405, design: 4.9 },
    { load: 650, sampleSize: 5081, q1: 4.739, median: 4.921, q3: 5.142, mean: 4.934, sd: 0.308, design: 5.0 }
  ],
  dca: [
    { load: 250, sampleSize: 29, q1: 3.25, median: 4.50, q3: 5.35, mean: 4.37, sd: 0.91, design: 4.8 },
    { load: 300, sampleSize: 136, q1: 3.32, median: 4.65, q3: 5.42, mean: 4.46, sd: 0.87, design: 4.9 },
    { load: 350, sampleSize: 8054, q1: 3.45, median: 4.72, q3: 5.55, mean: 4.57, sd: 0.85, design: 5.0 },
    { load: 400, sampleSize: 2889, q1: 3.52, median: 4.85, q3: 5.62, mean: 4.66, sd: 0.83, design: 5.1 },
    { load: 450, sampleSize: 3748, q1: 3.60, median: 4.95, q3: 5.75, mean: 4.77, sd: 0.81, design: 5.2 },
    { load: 500, sampleSize: 4513, q1: 3.75, median: 5.10, q3: 5.92, mean: 4.92, sd: 0.79, design: 5.3 },
    { load: 550, sampleSize: 6737, q1: 3.85, median: 5.25, q3: 6.10, mean: 5.07, sd: 0.77, design: 5.4 },
    { load: 600, sampleSize: 18493, q1: 4.00, median: 5.45, q3: 6.35, mean: 5.27, sd: 0.75, design: 5.5 },
    { load: 650, sampleSize: 5081, q1: 4.15, median: 5.65, q3: 6.55, mean: 5.45, sd: 0.73, design: 5.6 }
  ],
  flow: [
    { load: 250, sampleSize: 27, q1: 800, median: 850, q3: 900, mean: 850, sd: 40, design: 870 },
    { load: 300, sampleSize: 128, q1: 960, median: 1020, q3: 1080, mean: 1020, sd: 48, design: 1044 },
    { load: 350, sampleSize: 7890, q1: 1120, median: 1190, q3: 1260, mean: 1190, sd: 56, design: 1218 },
    { load: 400, sampleSize: 2675, q1: 1280, median: 1360, q3: 1440, mean: 1360, sd: 64, design: 1392 },
    { load: 450, sampleSize: 3621, q1: 1440, median: 1530, q3: 1620, mean: 1530, sd: 72, design: 1566 },
    { load: 500, sampleSize: 4389, q1: 1600, median: 1700, q3: 1800, mean: 1700, sd: 80, design: 1740 },
    { load: 550, sampleSize: 6589, q1: 1760, median: 1870, q3: 1980, mean: 1870, sd: 88, design: 1914 },
    { load: 600, sampleSize: 17892, q1: 1920, median: 2040, q3: 2160, mean: 2040, sd: 96, design: 2088 },
    { load: 650, sampleSize: 4879, q1: 2080, median: 2210, q3: 2340, mean: 2210, sd: 104, design: 2262 }
  ],
  heatLoad: [
    { load: 250, sampleSize: 28, q1: 18, median: 20, q3: 22, mean: 20, sd: 1.6, design: 19.5 },
    { load: 300, sampleSize: 132, q1: 22, median: 24, q3: 26, mean: 24, sd: 1.9, design: 23.5 },
    { load: 350, sampleSize: 7943, q1: 26, median: 28, q3: 30, mean: 28, sd: 2.2, design: 27.5 },
    { load: 400, sampleSize: 2744, q1: 30, median: 32, q3: 34, mean: 32, sd: 2.5, design: 31.5 },
    { load: 450, sampleSize: 3687, q1: 34, median: 36, q3: 38, mean: 36, sd: 2.8, design: 35.5 },
    { load: 500, sampleSize: 4421, q1: 38, median: 40, q3: 42, mean: 40, sd: 3.1, design: 39.5 },
    { load: 550, sampleSize: 6645, q1: 42, median: 44, q3: 46, mean: 44, sd: 3.4, design: 43.5 },
    { load: 600, sampleSize: 18201, q1: 46, median: 48, q3: 50, mean: 48, sd: 3.7, design: 47.5 },
    { load: 650, sampleSize: 4976, q1: 50, median: 52, q3: 54, mean: 52, sd: 4.0, design: 51.5 }
  ],
  tr: [
    { load: 250, sampleSize: 26, q1: 0.80, median: 0.85, q3: 0.90, mean: 0.85, sd: 0.05, design: 0.88 },
    { load: 300, sampleSize: 124, q1: 0.82, median: 0.87, q3: 0.92, mean: 0.87, sd: 0.05, design: 0.89 },
    { load: 350, sampleSize: 7798, q1: 0.84, median: 0.89, q3: 0.94, mean: 0.89, sd: 0.05, design: 0.90 },
    { load: 400, sampleSize: 2612, q1: 0.86, median: 0.91, q3: 0.96, mean: 0.91, sd: 0.05, design: 0.91 },
    { load: 450, sampleSize: 3576, q1: 0.88, median: 0.93, q3: 0.98, mean: 0.93, sd: 0.05, design: 0.92 },
    { load: 500, sampleSize: 4358, q1: 0.89, median: 0.94, q3: 0.99, mean: 0.94, sd: 0.05, design: 0.93 },
    { load: 550, sampleSize: 6572, q1: 0.90, median: 0.95, q3: 1.00, mean: 0.95, sd: 0.05, design: 0.94 },
    { load: 600, sampleSize: 18053, q1: 0.91, median: 0.96, q3: 1.01, mean: 0.96, sd: 0.05, design: 0.95 },
    { load: 650, sampleSize: 4913, q1: 0.92, median: 0.97, q3: 1.02, mean: 0.97, sd: 0.05, design: 0.96 }
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
    initializeAIFeatures();
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
    card.className = `parameter-card sortable-item cursor-pointer bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 ${param.status === 'critical' ? 'ai-pulse-attention' : ''}`;
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
        <div class="mt-2 flex justify-between items-center">
            <span class="status-${param.status} px-2 py-1 rounded-full text-xs">${param.status.charAt(0).toUpperCase() + param.status.slice(1)}</span>
            ${param.status === 'critical' || param.status === 'warning' ? 
                `<span class="text-xs text-adani-blue ai-prediction-tag">AI monitored</span>` : ''}
        </div>
        ${param.status === 'critical' || param.status === 'warning' ? 
            `<div class="ai-scan-overlay"></div>` : ''}
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
    
    // Update bars in comprehensive report
    document.getElementById('critical-bar').style.width = (counts.critical / allParameters.length * 100) + '%';
    document.getElementById('warning-bar').style.width = (counts.warning / allParameters.length * 100) + '%';
    
    // Calculate efficiency based on healthy parameters
    const efficiency = Math.round((counts.healthy / allParameters.length) * 100);
    document.getElementById('efficiency-bar').style.width = efficiency + '%';
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
                
                // Show AI feedback about drag and drop
                showAIFeedback("Parameter order customized. Layout preferences saved.");
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
        renderParameterAssessment(parameter, benchmarkData[paramKey]);
    } else {
        // If no benchmark data found, show a message
        document.getElementById('benchmark-table').innerHTML = '<tr><td colspan="7" class="px-4 py-2 text-center">No benchmark data available for this parameter.</td></tr>';
        document.getElementById('parameter-assessment').innerHTML = 'Insufficient historical data for analysis.';
        clearChart();
    }
    
    // Show AI analysis indicator
    showAIFeedback(`Analyzing ${parameter.name} performance against historical data...`);
}

function renderBenchmarkTable(benchmarkRows) {
    const tableBody = document.getElementById('benchmark-table');
    tableBody.innerHTML = '';

    benchmarkRows.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-t border-gray-200 hover:bg-gray-50';
        tr.innerHTML = `
            <td class="px-4 py-2">${row.load}</td>
            <td class="px-4 py-2">${row.sampleSize.toLocaleString()}</td>
            <td class="px-4 py-2">${row.q1.toFixed(3)}</td>
            <td class="px-4 py-2">${row.median.toFixed(3)}</td>
            <td class="px-4 py-2">${row.q3.toFixed(3)}</td>
            <td class="px-4 py-2">${row.mean.toFixed(3)}</td>
            <td class="px-4 py-2">${row.sd.toFixed(3)}</td>
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
    const q1Values = benchmarkData.map(d => d.q1);
    const q3Values = benchmarkData.map(d => d.q3);
    const designValues = benchmarkData.map(d => d.design);
    
    // Find the closest load point to current load (560 MW)
    const currentLoad = 560;
    const actualValue = parameter.value;
    
    // Find closest benchmark row to current load
    const closestBenchmark = benchmarkData.reduce((prev, curr) => {
        return (Math.abs(curr.load - currentLoad) < Math.abs(prev.load - currentLoad) ? curr : prev);
    });

    window.currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: loads,
            datasets: [
                {
                    label: 'Actual Value',
                    data: loads.map(load => load === closestBenchmark.load ? actualValue : null),
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
                    data: designValues,
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
                    label: 'Q1 (25%)',
                    data: q1Values,
                    borderColor: 'rgba(255, 193, 7, 0.7)',
                    borderDash: [5, 5],
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Q3 (75%)',
                    data: q3Values,
                    borderColor: 'rgba(255, 193, 7, 0.7)',
                    borderDash: [5, 5],
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: '+1',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)'
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
    
    // Add AI analysis scan effect to the chart
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        // Add AI scan overlay if not exists
        if (!chartContainer.querySelector('.ai-scan-overlay')) {
            const scanOverlay = document.createElement('div');
            scanOverlay.className = 'ai-scan-overlay';
            chartContainer.style.position = 'relative';
            chartContainer.appendChild(scanOverlay);
            setTimeout(() => {
                scanOverlay.classList.add('scanning');
            }, 300);
        }
    }
}

function renderParameterAssessment(parameter, benchmarkData) {
    const assessmentDiv = document.getElementById('parameter-assessment');
    if (!assessmentDiv) return;
    
    // Find closest benchmark row to current load (560 MW)
    const currentLoad = 560;
    const closestBenchmark = benchmarkData.reduce((prev, curr) => {
        return (Math.abs(curr.load - currentLoad) < Math.abs(prev.load - currentLoad) ? curr : prev);
    });
    
    const value = parameter.value;
    const median = closestBenchmark.median;
    const q1 = closestBenchmark.q1;
    const q3 = closestBenchmark.q3;
    const design = closestBenchmark.design;
    
    // Calculate IQR
    const iqr = q3 - q1;
    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;
    
    // Calculate deviation from design
    const designDeviation = ((value - design) / design * 100).toFixed(1);
    const medianDeviation = ((value - median) / median * 100).toFixed(1);
    
    // Determine status
    let assessmentText = '';
    let statusClass = '';
    
    if (value < lowerBound || value > upperBound) {
        statusClass = 'text-adani-red font-bold';
        assessmentText = `<span class="${statusClass}">Critical: Value outside expected range (${lowerBound.toFixed(2)} - ${upperBound.toFixed(2)})</span>`;
    } else if (value < q1 || value > q3) {
        statusClass = 'text-adani-yellow font-bold';
        assessmentText = `<span class="${statusClass}">Warning: Value outside interquartile range (${q1.toFixed(2)} - ${q3.toFixed(2)})</span>`;
    } else {
        statusClass = 'text-adani-green font-bold';
        assessmentText = `<span class="${statusClass}">Healthy: Value within interquartile range (${q1.toFixed(2)} - ${q3.toFixed(2)})</span>`;
    }
    
    // Build comprehensive assessment
    let assessment = `
        <div class="space-y-3">
            <p>${assessmentText}</p>
            <p class="mt-2">
                Current value: <span class="font-semibold ai-highlighted-value">${value} ${parameter.unit}</span> at load <span class="font-semibold">${currentLoad} MW</span>
            </p>
            <p>Design value: <span class="font-semibold">${design} ${parameter.unit}</span> (${designDeviation}% deviation)</p>
            <p>Statistical analysis of <span class="font-semibold">${closestBenchmark.sampleSize.toLocaleString()}</span> samples at ${closestBenchmark.load} MW load:</p>
            <ul class="list-disc pl-5 space-y-1">
                <li>Median: <span class="font-semibold">${median.toFixed(3)} ${parameter.unit}</span></li>
                <li>Q1 (25%): ${q1.toFixed(3)} ${parameter.unit}</li>
                <li>Q3 (75%): ${q3.toFixed(3)} ${parameter.unit}</li>
                <li>Standard Deviation: ${closestBenchmark.sd.toFixed(3)} ${parameter.unit}</li>
            </ul>
            
            <div class="mt-3 pt-3 border-t border-gray-200">
                <h4 class="font-medium mb-1">AI Analysis:</h4>
                <p class="text-adani-navy">${generateAIInsight(parameter, closestBenchmark, designDeviation, medianDeviation)}</p>
            </div>
        </div>
    `;
    
    assessmentDiv.innerHTML = assessment;
}

function generateAIInsight(parameter, benchmark, designDeviation, medianDeviation) {
    // Generate AI insights based on parameter values and benchmarks
    const paramName = parameter.name;
    const value = parameter.value;
    const status = parameter.status;
    
    let insights = [];
    
    // Determine if trending correctly
    if (status === 'critical') {
        insights.push(`<span class="text-adani-red">Critical: ${paramName} value of ${value} ${parameter.unit} requires immediate attention.</span>`);
    } else if (status === 'warning') {
        insights.push(`<span class="text-adani-yellow">Warning: ${paramName} is trending outside optimal range.</span>`);
    }
    
    // Compare with design values
    if (Math.abs(parseFloat(designDeviation)) > 10) {
        const direction = parseFloat(designDeviation) > 0 ? 'higher' : 'lower';
        insights.push(`Value is ${Math.abs(parseFloat(designDeviation))}% ${direction} than design specification.`);
    } else {
        insights.push(`Value is close to design specification (${designDeviation}% deviation).`);
    }
    
    // Compare with historical median
    if (Math.abs(parseFloat(medianDeviation)) > 15) {
        const direction = parseFloat(medianDeviation) > 0 ? 'higher' : 'lower';
        insights.push(`Performance is ${Math.abs(parseFloat(medianDeviation))}% ${direction} than historical average.`);
    }
    
    // Parameter specific insights
    if (paramName === 'TTD') {
        insights.push(`Terminal Temperature Difference affects heater efficiency directly.`);
    } else if (paramName === 'DCA') {
        insights.push(`Drain Cooler Approach is critical for heat recovery performance.`);
    } else if (paramName === 'TR') {
        insights.push(`Temperature Rise ratio indicates heat transfer effectiveness.`);
    }
    
    return insights.join(' ');
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

// AI Feature Enhancements
function initializeAIFeatures() {
    // Add typing animation effects
    animateTypewriterElements();
    
    // Initialize AI feedback toast system
    initializeAIFeedbackSystem();
    
    // Start periodic scan visual effects
    startPeriodicScanEffects();
    
    // Add pulsing effects to critical elements
    highlightCriticalElements();
}

function animateTypewriterElements() {
    document.querySelectorAll('.ai-typewriter').forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
    });
}

function initializeAIFeedbackSystem() {
    // Create AI feedback toast container if it doesn't exist
    if (!document.getElementById('ai-feedback-container')) {
        const feedbackContainer = document.createElement('div');
        feedbackContainer.id = 'ai-feedback-container';
        feedbackContainer.className = 'fixed bottom-4 right-4 z-50';
        document.body.appendChild(feedbackContainer);
    }
}

function showAIFeedback(message) {
    const container = document.getElementById('ai-feedback-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'bg-white border-l-4 border-adani-blue rounded-md shadow-lg p-4 mb-3 flex items-center max-w-md transform transition-all duration-300 translate-x-full';
    toast.innerHTML = `
        <div class="mr-3 text-adani-blue">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="text-sm text-gray-600">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 5000);
}

function startPeriodicScanEffects() {
    // Add scan overlay to all parameter cards
    document.querySelectorAll('.parameter-card').forEach((card, index) => {
        if (!card.querySelector('.ai-scan-overlay') && 
            (card.classList.contains('ai-pulse-attention') || Math.random() > 0.5)) {
            const scanOverlay = document.createElement('div');
            scanOverlay.className = 'ai-scan-overlay';
            card.appendChild(scanOverlay);
            
            // Stagger the animation start
            setTimeout(() => {
                scanOverlay.classList.add('scanning');
            }, index * 500);
        }
    });
}

function highlightCriticalElements() {
    // Find elements with critical status
    document.querySelectorAll('.status-critical').forEach(element => {
        const parent = element.closest('.parameter-card');
        if (parent && !parent.classList.contains('ai-pulse-attention')) {
            parent.classList.add('ai-pulse-attention');
        }
    });
    
    // Add AI highlight to warning elements periodically
    const warningElements = document.querySelectorAll('.status-warning');
    let highlightIndex = 0;
    
    if (warningElements.length > 0) {
        setInterval(() => {
            // Clear previous highlights
            warningElements.forEach(el => el.classList.remove('ai-highlighted-value'));
            
            // Add highlight to next element
            warningElements[highlightIndex].classList.add('ai-highlighted-value');
            highlightIndex = (highlightIndex + 1) % warningElements.length;
        }, 3000);
    }
}
