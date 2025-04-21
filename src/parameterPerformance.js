
// Parameter data
const heaterParameters = [
    { 
        name: "Heater 1 TTD", 
        tag: "Tiroda_HP_TTD1",
        value: 4.8, 
        unit: "°C", 
        status: "healthy",
        benchmarkData: [
            { load: 250, sampleSize: 29, q1: 5.875, median: 5.921, q3: 6.053, mean: 5.938, sd: 0.244 },
            { load: 300, sampleSize: 136, q1: 4.812, median: 5.141, q3: 5.391, mean: 5.092, sd: 0.483 },
            { load: 350, sampleSize: 8054, q1: 4.739, median: 4.945, q3: 5.152, mean: 4.953, sd: 0.484 },
            { load: 400, sampleSize: 2889, q1: 4.671, median: 5.312, q3: 5.814, mean: 5.212, sd: 1.01 },
            { load: 450, sampleSize: 3748, q1: 4.708, median: 5.364, q3: 5.85, mean: 5.213, sd: 1.095 },
            { load: 500, sampleSize: 4513, q1: 4.404, median: 5.032, q3: 5.558, mean: 4.938, sd: 1.036 },
            { load: 550, sampleSize: 6737, q1: 4.49, median: 4.917, q3: 5.232, mean: 4.823, sd: 0.777 },
            { load: 600, sampleSize: 18493, q1: 4.72, median: 4.941, q3: 5.18, mean: 4.926, sd: 0.405 },
            { load: 650, sampleSize: 5081, q1: 4.739, median: 4.921, q3: 5.142, mean: 4.934, sd: 0.308 }
        ],
        designData: [
            { load: 250, value: 5.2 },
            { load: 300, value: 5.2 },
            { load: 350, value: 5.2 },
            { load: 400, value: 5.2 },
            { load: 450, value: 5.2 },
            { load: 500, value: 5.2 },
            { load: 550, value: 5.2 },
            { load: 600, value: 5.2 },
            { load: 650, value: 5.2 }
        ]
    },
    { 
        name: "Heater 2 TTD", 
        tag: "Tiroda_HP_TTD2",
        value: 5.2, 
        unit: "°C", 
        status: "warning",
        benchmarkData: [
            { load: 250, sampleSize: 29, q1: 5.775, median: 5.821, q3: 5.953, mean: 5.838, sd: 0.244 },
            { load: 300, sampleSize: 136, q1: 4.712, median: 5.041, q3: 5.291, mean: 4.992, sd: 0.483 },
            { load: 350, sampleSize: 8054, q1: 4.639, median: 4.845, q3: 5.052, mean: 4.853, sd: 0.484 },
            { load: 400, sampleSize: 2889, q1: 4.571, median: 5.212, q3: 5.714, mean: 5.112, sd: 1.01 },
            { load: 450, sampleSize: 3748, q1: 4.608, median: 5.264, q3: 5.75, mean: 5.113, sd: 1.095 },
            { load: 500, sampleSize: 4513, q1: 4.304, median: 4.932, q3: 5.458, mean: 4.838, sd: 1.036 },
            { load: 550, sampleSize: 6737, q1: 4.39, median: 4.817, q3: 5.132, mean: 4.723, sd: 0.777 },
            { load: 600, sampleSize: 18493, q1: 4.62, median: 4.841, q3: 5.08, mean: 4.826, sd: 0.405 },
            { load: 650, sampleSize: 5081, q1: 4.639, median: 4.821, q3: 5.042, mean: 4.834, sd: 0.308 }
        ],
        designData: [
            { load: 250, value: 5.0 },
            { load: 300, value: 5.0 },
            { load: 350, value: 5.0 },
            { load: 400, value: 5.0 },
            { load: 450, value: 5.0 },
            { load: 500, value: 5.0 },
            { load: 550, value: 5.0 },
            { load: 600, value: 5.0 },
            { load: 650, value: 5.0 }
        ]
    },
    { 
        name: "Heater 1 DCA", 
        tag: "Tiroda_HP_DCA1",
        value: 7.3, 
        unit: "°C", 
        status: "critical",
        benchmarkData: [
            { load: 250, sampleSize: 33, q1: 4.975, median: 5.321, q3: 5.653, mean: 5.438, sd: 0.344 },
            { load: 300, sampleSize: 150, q1: 4.612, median: 5.041, q3: 5.291, mean: 4.892, sd: 0.583 },
            { load: 350, sampleSize: 8254, q1: 4.539, median: 4.745, q3: 5.052, mean: 4.753, sd: 0.584 },
            { load: 400, sampleSize: 2689, q1: 4.471, median: 5.112, q3: 5.514, mean: 5.012, sd: 0.91 },
            { load: 450, sampleSize: 3548, q1: 4.508, median: 5.164, q3: 5.65, mean: 5.013, sd: 0.995 },
            { load: 500, sampleSize: 4313, q1: 4.204, median: 4.832, q3: 5.358, mean: 4.738, sd: 0.936 },
            { load: 550, sampleSize: 6537, q1: 4.29, median: 4.717, q3: 5.032, mean: 4.623, sd: 0.677 },
            { load: 600, sampleSize: 18293, q1: 4.52, median: 4.741, q3: 4.98, mean: 4.726, sd: 0.405 },
            { load: 650, sampleSize: 4881, q1: 4.539, median: 4.721, q3: 4.942, mean: 4.734, sd: 0.308 }
        ],
        designData: [
            { load: 250, value: 4.8 },
            { load: 300, value: 4.8 },
            { load: 350, value: 4.8 },
            { load: 400, value: 4.8 },
            { load: 450, value: 4.8 },
            { load: 500, value: 4.8 },
            { load: 550, value: 4.8 },
            { load: 600, value: 4.8 },
            { load: 650, value: 4.8 }
        ]
    },
    { 
        name: "Heater 2 DCA", 
        tag: "Tiroda_HP_DCA2",
        value: 4.9, 
        unit: "°C", 
        status: "healthy",
        benchmarkData: [
            { load: 250, sampleSize: 35, q1: 5.075, median: 5.421, q3: 5.753, mean: 5.538, sd: 0.344 },
            { load: 300, sampleSize: 156, q1: 4.712, median: 5.141, q3: 5.391, mean: 4.992, sd: 0.583 },
            { load: 350, sampleSize: 8354, q1: 4.639, median: 4.845, q3: 5.152, mean: 4.853, sd: 0.584 },
            { load: 400, sampleSize: 2789, q1: 4.571, median: 5.212, q3: 5.614, mean: 5.112, sd: 0.91 },
            { load: 450, sampleSize: 3648, q1: 4.608, median: 5.264, q3: 5.75, mean: 5.113, sd: 0.995 },
            { load: 500, sampleSize: 4413, q1: 4.304, median: 4.932, q3: 5.458, mean: 4.838, sd: 0.936 },
            { load: 550, sampleSize: 6637, q1: 4.39, median: 4.817, q3: 5.132, mean: 4.723, sd: 0.677 },
            { load: 600, sampleSize: 18393, q1: 4.62, median: 4.841, q3: 5.08, mean: 4.826, sd: 0.405 },
            { load: 650, sampleSize: 4981, q1: 4.639, median: 4.821, q3: 5.042, mean: 4.834, sd: 0.308 }
        ],
        designData: [
            { load: 250, value: 4.7 },
            { load: 300, value: 4.7 },
            { load: 350, value: 4.7 },
            { load: 400, value: 4.7 },
            { load: 450, value: 4.7 },
            { load: 500, value: 4.7 },
            { load: 550, value: 4.7 },
            { load: 600, value: 4.7 },
            { load: 650, value: 4.7 }
        ]
    },
    { 
        name: "Heater 3 TTD", 
        tag: "Tiroda_HP_TTD3",
        value: 5.0, 
        unit: "°C", 
        status: "healthy",
        benchmarkData: [
            { load: 250, sampleSize: 31, q1: 5.675, median: 5.821, q3: 5.953, mean: 5.838, sd: 0.244 },
            { load: 300, sampleSize: 146, q1: 4.612, median: 5.041, q3: 5.291, mean: 4.992, sd: 0.483 },
            { load: 350, sampleSize: 8154, q1: 4.539, median: 4.845, q3: 5.052, mean: 4.853, sd: 0.484 },
            { load: 400, sampleSize: 2789, q1: 4.471, median: 5.212, q3: 5.614, mean: 5.112, sd: 1.01 },
            { load: 450, sampleSize: 3648, q1: 4.508, median: 5.164, q3: 5.65, mean: 5.013, sd: 1.095 },
            { load: 500, sampleSize: 4413, q1: 4.204, median: 4.832, q3: 5.358, mean: 4.738, sd: 1.036 },
            { load: 550, sampleSize: 6637, q1: 4.29, median: 4.717, q3: 5.032, mean: 4.623, sd: 0.777 },
            { load: 600, sampleSize: 18293, q1: 4.52, median: 4.741, q3: 4.98, mean: 4.726, sd: 0.405 },
            { load: 650, sampleSize: 4981, q1: 4.539, median: 4.721, q3: 4.942, mean: 4.734, sd: 0.308 }
        ],
        designData: [
            { load: 250, value: 5.1 },
            { load: 300, value: 5.1 },
            { load: 350, value: 5.1 },
            { load: 400, value: 5.1 },
            { load: 450, value: 5.1 },
            { load: 500, value: 5.1 },
            { load: 550, value: 5.1 },
            { load: 600, value: 5.1 },
            { load: 650, value: 5.1 }
        ]
    },
    { 
        name: "Heater 3 DCA", 
        tag: "Tiroda_HP_DCA3",
        value: 5.3, 
        unit: "°C", 
        status: "warning",
        benchmarkData: [
            { load: 250, sampleSize: 33, q1: 5.075, median: 5.221, q3: 5.553, mean: 5.438, sd: 0.244 },
            { load: 300, sampleSize: 148, q1: 4.512, median: 4.941, q3: 5.191, mean: 4.892, sd: 0.483 },
            { load: 350, sampleSize: 8054, q1: 4.439, median: 4.745, q3: 4.952, mean: 4.753, sd: 0.484 },
            { load: 400, sampleSize: 2689, q1: 4.371, median: 5.112, q3: 5.514, mean: 5.012, sd: 1.01 },
            { load: 450, sampleSize: 3548, q1: 4.408, median: 5.064, q3: 5.55, mean: 4.913, sd: 1.095 },
            { load: 500, sampleSize: 4313, q1: 4.104, median: 4.732, q3: 5.258, mean: 4.638, sd: 1.036 },
            { load: 550, sampleSize: 6537, q1: 4.19, median: 4.617, q3: 4.932, mean: 4.523, sd: 0.777 },
            { load: 600, sampleSize: 18193, q1: 4.42, median: 4.641, q3: 4.88, mean: 4.626, sd: 0.405 },
            { load: 650, sampleSize: 4881, q1: 4.439, median: 4.621, q3: 4.842, mean: 4.634, sd: 0.308 }
        ],
        designData: [
            { load: 250, value: 4.9 },
            { load: 300, value: 4.9 },
            { load: 350, value: 4.9 },
            { load: 400, value: 4.9 },
            { load: 450, value: 4.9 },
            { load: 500, value: 4.9 },
            { load: 550, value: 4.9 },
            { load: 600, value: 4.9 },
            { load: 650, value: 4.9 }
        ]
    }
];

// Current plant data
const currentPlantData = {
    load: 560,
    inletTemperature: 328.5,
    headerPressure: 16.8
};

// Helper variables for statistics
let currentChart = null;
let criticalCount = 0;
let warningCount = 0;
let healthyCount = 0;

// Initialize UI when document is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize status counts
    updateStatusCounts();
    
    // Render parameter cards
    renderParameterCards();
    
    // Initialize sidebar functionality
    initializeSidebar();
    
    // Initialize heater selector dropdown
    document.getElementById('heater-selector').addEventListener('change', function() {
        // You would normally fetch new data here based on heater selection
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = `Loading data for HP Heater ${this.value}...`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 2000);
        
        // Update AI confidence animation
        document.querySelector('.ai-confidence-fill').style.width = '0%';
        setTimeout(() => {
            document.querySelector('.ai-confidence-fill').style.width = '92%';
        }, 300);
        
        // Update AI analysis text with typewriter effect
        const analysisText = document.querySelector('.ai-typewriter');
        analysisText.textContent = '';
        
        const text = "AI is analyzing heater " + this.value + " parameters. 15 parameters evaluated for optimal performance.";
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                analysisText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }
        
        typeWriter();
    });
    
    // Initialize drag-and-drop functionality for parameter cards
    initializeDragAndDrop();
    
    // Generate comprehensive report
    generateReport();
    
    // Add AI scanning effects
    initializeAIScanEffects();
});

// Update status counts
function updateStatusCounts() {
    criticalCount = heaterParameters.filter(param => param.status === 'critical').length;
    warningCount = heaterParameters.filter(param => param.status === 'warning').length;
    healthyCount = heaterParameters.filter(param => param.status === 'healthy').length;
    
    // Update count elements
    document.getElementById('critical-count').textContent = criticalCount;
    document.getElementById('warning-count').textContent = warningCount;
    document.getElementById('healthy-count').textContent = healthyCount;
    
    // Update progress bars
    document.getElementById('critical-bar').style.width = (criticalCount / heaterParameters.length * 100) + '%';
    document.getElementById('warning-bar').style.width = (warningCount / heaterParameters.length * 100) + '%';
    const efficiencyValue = 100 - ((criticalCount * 15 + warningCount * 5) / heaterParameters.length);
    document.getElementById('efficiency-bar').style.width = efficiencyValue + '%';
}

// Initialize drag and drop functionality
function initializeDragAndDrop() {
    const container = document.getElementById('parameter-cards');
    
    new Sortable(container, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        onEnd: function() {
            // Show AI reanalyzing effect
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `<div class="ai-scan-icon"></div> AI reanalyzing parameter relationships...`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('fade-out');
                setTimeout(() => notification.remove(), 500);
            }, 2000);
        }
    });
}

// Render parameter cards
function renderParameterCards() {
    const container = document.getElementById('parameter-cards');
    container.innerHTML = '';
    
    heaterParameters.forEach(param => {
        const card = document.createElement('div');
        card.className = `parameter-card bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-all duration-300 ai-enhanced-card border-l-4 ${getStatusBorderClass(param.status)}`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-adani-navy">${param.name}</h3>
                <span class="text-sm text-gray-500">${param.tag}</span>
            </div>
            <div class="relative">
                <div class="flex items-end justify-between">
                    <div>
                        <p class="text-3xl font-bold ${getStatusColorClass(param.status)}">${param.value}</p>
                        <p class="text-xs text-gray-500 mt-1">${param.unit}</p>
                    </div>
                    <span class="status-indicator ${param.status} px-2 py-1 rounded-full text-xs">${capitalizeFirstLetter(param.status)}</span>
                </div>
                <div class="ai-scan-overlay"></div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-100">
                <div class="flex justify-between items-center">
                    <div class="text-xs text-gray-500">
                        <span>Design: ${param.designData[4].value}${param.unit}</span>
                    </div>
                    <div class="text-xs text-gray-500">
                        <span>Range: ${param.benchmarkData[4].q1.toFixed(2)} - ${param.benchmarkData[4].q3.toFixed(2)}${param.unit}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event to show details
        card.addEventListener('click', () => {
            showParameterDetails(param);
        });
        
        container.appendChild(card);
    });
}

// Handle parameter card click to show details
function showParameterDetails(parameter) {
    const sidebar = document.getElementById('parameter-sidebar');
    const parameterTitle = document.getElementById('parameter-title');
    
    sidebar.style.width = '600px';
    parameterTitle.textContent = `${parameter.name} Analysis`;
    
    // Render benchmark table
    renderBenchmarkTable(parameter);
    
    // Render parameter chart
    renderParameterChart(parameter);
    
    // Render parameter analysis
    renderParameterAnalysis(parameter);
    
    // Add AI scanning effect
    document.querySelectorAll('#parameter-sidebar .chart-container').forEach(container => {
        const overlay = document.createElement('div');
        overlay.className = 'ai-scan-overlay scanning';
        container.appendChild(overlay);
        
        setTimeout(() => {
            overlay.classList.remove('scanning');
        }, 4000);
    });
}

// Render benchmark table
function renderBenchmarkTable(parameter) {
    const tableBody = document.getElementById('benchmark-table');
    tableBody.innerHTML = '';

    parameter.benchmarkData.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-t border-gray-200 hover:bg-gray-50';
        
        // Highlight current load row
        const isCurrentLoad = (row.load >= currentPlantData.load - 50 && row.load <= currentPlantData.load + 50);
        if (isCurrentLoad) {
            tr.classList.add('bg-blue-50');
        }
        
        tr.innerHTML = `
            <td class="px-4 py-2">${row.load}</td>
            <td class="px-4 py-2">${row.sampleSize}</td>
            <td class="px-4 py-2">${row.q1.toFixed(3)}</td>
            <td class="px-4 py-2">${row.median.toFixed(3)}</td>
            <td class="px-4 py-2">${row.q3.toFixed(3)}</td>
            <td class="px-4 py-2">${row.mean.toFixed(3)}</td>
            <td class="px-4 py-2">${row.sd.toFixed(3)}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Initialize sidebar functionality
function initializeSidebar() {
    const sidebar = document.getElementById('parameter-sidebar');
    const closeBtn = document.getElementById('close-sidebar');

    closeBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
    });
}

// Render parameter chart
function renderParameterChart(parameter) {
    const ctx = document.getElementById('parameter-chart').getContext('2d');
    
    if (currentChart) {
        currentChart.destroy();
    }

    const loads = parameter.benchmarkData.map(d => d.load);
    const medians = parameter.benchmarkData.map(d => d.median);
    const upperBand = parameter.benchmarkData.map(d => d.q3);
    const lowerBand = parameter.benchmarkData.map(d => d.q1);
    const designValues = parameter.designData.map(d => d.value);

    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: loads,
            datasets: [
                {
                    label: 'Design Value',
                    data: designValues,
                    borderColor: '#8B5CF6', // AI processing color (purple)
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Current Value',
                    data: loads.map(() => parameter.value),
                    borderColor: '#FF3A3A', // Red for attention
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#FF3A3A',
                    fill: false
                },
                {
                    label: 'Median',
                    data: medians,
                    borderColor: '#0046AD', // Adani blue
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Upper Band (Q3)',
                    data: upperBand,
                    borderColor: 'rgba(0, 70, 173, 0.3)',
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Lower Band (Q1)',
                    data: lowerBand,
                    borderColor: 'rgba(0, 70, 173, 0.3)',
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: '+1'
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
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x',
                            value: currentPlantData.load,
                            borderColor: 'rgba(139, 92, 246, 0.7)',
                            borderWidth: 2,
                            label: {
                                content: 'Current Load',
                                enabled: true,
                                position: 'top'
                            }
                        }
                    }
                }
            }
        }
    });
    
    // Mark current load on the chart with vertical line
    const chartContainer = document.querySelector('.chart-container');
    const marker = document.createElement('div');
    marker.className = 'current-load-marker';
    marker.style.left = (currentPlantData.load - loads[0]) / (loads[loads.length - 1] - loads[0]) * 100 + '%';
    chartContainer.appendChild(marker);
}

// Render parameter analysis
function renderParameterAnalysis(parameter) {
    const analysisContainer = document.getElementById('parameter-assessment');
    
    // Find benchmark data for current load
    const currentLoadBenchmark = parameter.benchmarkData.find(d => d.load >= currentPlantData.load - 50 && d.load <= currentPlantData.load + 50) 
        || parameter.benchmarkData[4]; // Default to middle point if no match
    
    // Find design value for current load
    const currentLoadDesign = parameter.designData.find(d => d.load >= currentPlantData.load - 50 && d.load <= currentPlantData.load + 50)
        || parameter.designData[4]; // Default to middle point if no match
    
    const lowerBound = currentLoadBenchmark.q1;
    const upperBound = currentLoadBenchmark.q3;
    const median = currentLoadBenchmark.median;
    const design = currentLoadDesign.value;
    
    let analysisHTML = '';
    
    // Analyze the value position relative to IQR
    if (parameter.value < lowerBound) {
        analysisHTML += `<p class="mb-2"><span class="font-semibold">Current value (${parameter.value}${parameter.unit})</span> is <span class="text-adani-red font-semibold">below the lower quartile (${lowerBound.toFixed(2)}${parameter.unit})</span>.</p>`;
    } else if (parameter.value > upperBound) {
        analysisHTML += `<p class="mb-2"><span class="font-semibold">Current value (${parameter.value}${parameter.unit})</span> is <span class="text-adani-yellow font-semibold">above the upper quartile (${upperBound.toFixed(2)}${parameter.unit})</span>.</p>`;
    } else {
        analysisHTML += `<p class="mb-2"><span class="font-semibold">Current value (${parameter.value}${parameter.unit})</span> is <span class="text-adani-green font-semibold">within the normal IQR range</span> (${lowerBound.toFixed(2)} - ${upperBound.toFixed(2)}${parameter.unit}).</p>`;
    }
    
    // Compare to design value
    const designDiff = parameter.value - design;
    if (Math.abs(designDiff) < 0.3) {
        analysisHTML += `<p class="mb-2">Value is closely matching design value of ${design}${parameter.unit} (${designDiff > 0 ? '+' : ''}${designDiff.toFixed(2)}${parameter.unit}).</p>`;
    } else if (designDiff > 0) {
        analysisHTML += `<p class="mb-2">Value is ${designDiff.toFixed(2)}${parameter.unit} higher than the design value of ${design}${parameter.unit}.</p>`;
    } else {
        analysisHTML += `<p class="mb-2">Value is ${Math.abs(designDiff).toFixed(2)}${parameter.unit} lower than the design value of ${design}${parameter.unit}.</p>`;
    }
    
    // Add statistical context
    const stdevs = Math.abs(parameter.value - median) / currentLoadBenchmark.sd;
    if (stdevs > 2) {
        analysisHTML += `<p class="mb-2">Current value is <span class="text-adani-red font-semibold">${stdevs.toFixed(1)} standard deviations</span> from the median, indicating a significant deviation.</p>`;
    } else if (stdevs > 1) {
        analysisHTML += `<p class="mb-2">Current value is <span class="text-adani-yellow font-semibold">${stdevs.toFixed(1)} standard deviations</span> from the median.</p>`;
    } else {
        analysisHTML += `<p class="mb-2">Current value is <span class="text-adani-green font-semibold">within 1 standard deviation</span> of the median.</p>`;
    }
    
    // Add AI recommendation based on status
    analysisHTML += `<div class="mt-4 p-3 ${getAIRecommendationClass(parameter.status)}">
        <h4 class="font-semibold mb-1">AI Recommendation:</h4>
        <p>${getAIRecommendation(parameter)}</p>
    </div>`;
    
    analysisContainer.innerHTML = analysisHTML;
}

// Generate comprehensive report
function generateReport() {
    const reportTable = document.createElement('table');
    reportTable.className = 'min-w-full bg-white border border-gray-200';
    
    // Create table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr class="bg-gray-50">
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tag</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Load</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Current Value</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Design Value</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Benchmark Range</th>
            <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Unit</th>
        </tr>
    `;
    reportTable.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    heaterParameters.forEach(param => {
        // Find benchmark data for current load
        const currentLoadBenchmark = param.benchmarkData.find(d => d.load >= currentPlantData.load - 50 && d.load <= currentPlantData.load + 50) 
            || param.benchmarkData[4]; // Default to middle point if no match
        
        // Find design value for current load
        const currentLoadDesign = param.designData.find(d => d.load >= currentPlantData.load - 50 && d.load <= currentPlantData.load + 50)
            || param.designData[4]; // Default to middle point if no match
        
        const tr = document.createElement('tr');
        tr.className = `border-t border-gray-200 ${param.status === 'critical' ? 'bg-red-50' : param.status === 'warning' ? 'bg-yellow-50' : ''}`;
        
        tr.innerHTML = `
            <td class="px-4 py-2">${param.name}</td>
            <td class="px-4 py-2">${param.tag}</td>
            <td class="px-4 py-2"><span class="status-indicator ${param.status} px-2 py-1 rounded-full text-xs">${capitalizeFirstLetter(param.status)}</span></td>
            <td class="px-4 py-2">${currentPlantData.load} MW</td>
            <td class="px-4 py-2 font-medium ${getStatusTextClass(param.status)}">${param.value} ${param.unit}</td>
            <td class="px-4 py-2">${currentLoadDesign.value} ${param.unit}</td>
            <td class="px-4 py-2">${currentLoadBenchmark.q1.toFixed(2)} - ${currentLoadBenchmark.q3.toFixed(2)} ${param.unit}</td>
            <td class="px-4 py-2">${param.unit}</td>
        `;
        
        tbody.appendChild(tr);
    });
    
    reportTable.appendChild(tbody);
    
    // Add to comprehensive report section
    const container = document.createElement('div');
    container.className = "overflow-x-auto mt-4";
    container.appendChild(reportTable);
    
    // Add export button
    const exportButton = document.createElement('button');
    exportButton.className = "mt-4 bg-adani-blue text-white px-4 py-2 rounded flex items-center";
    exportButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Export Report
    `;
    
    exportButton.addEventListener('click', function() {
        // In a real application, this would generate a CSV, Excel or PDF file
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Exporting parameter report...
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 2000);
    });
    
    // Add to document
    document.querySelector('.mt-8').appendChild(container);
    document.querySelector('.mt-8').appendChild(exportButton);
}

// Initialize AI scan effects
function initializeAIScanEffects() {
    const aiCards = document.querySelectorAll('.ai-enhanced-card');
    
    aiCards.forEach((card, index) => {
        const overlay = card.querySelector('.ai-scan-overlay');
        
        // Stagger the animation start
        setTimeout(() => {
            overlay.classList.add('scanning');
            
            // Remove the scanning class after animation completes
            setTimeout(() => {
                overlay.classList.remove('scanning');
            }, 4000);
        }, index * 200);
    });
    
    // Update status counts at an interval to simulate AI processing
    let statusUpdateInterval = setInterval(() => {
        const randomChange = Math.random() > 0.7;
        if (randomChange) {
            const counts = document.querySelectorAll('#critical-count, #warning-count, #healthy-count');
            counts.forEach(count => {
                count.classList.add('pulse-animation');
                setTimeout(() => count.classList.remove('pulse-animation'), 1000);
            });
        }
    }, 5000);
}

// Helper functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getStatusColorClass(status) {
    return status === 'critical' ? 'text-adani-red' : 
           status === 'warning' ? 'text-adani-yellow' : 
           'text-adani-green';
}

function getStatusTextClass(status) {
    return status === 'critical' ? 'text-red-700' : 
           status === 'warning' ? 'text-yellow-700' : 
           'text-green-700';
}

function getStatusBorderClass(status) {
    return status === 'critical' ? 'border-adani-red' : 
           status === 'warning' ? 'border-adani-yellow' : 
           'border-adani-green';
}

function getAIRecommendationClass(status) {
    return status === 'critical' ? 'bg-red-50 border-l-4 border-adani-red' : 
           status === 'warning' ? 'bg-yellow-50 border-l-4 border-adani-yellow' : 
           'bg-green-50 border-l-4 border-adani-green';
}

function getAIRecommendation(parameter) {
    if (parameter.status === 'critical') {
        return `Immediate attention required. ${parameter.name} is significantly out of range. Consider adjusting heater level control or checking extraction pressure.`;
    } else if (parameter.status === 'warning') {
        return `Monitor ${parameter.name} closely. Current value trending toward limit. Verify control valve operation and extraction steam path.`;
    } else {
        return `${parameter.name} is operating within optimal range. Continue normal monitoring.`;
    }
}
