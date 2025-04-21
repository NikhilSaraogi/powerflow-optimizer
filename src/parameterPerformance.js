
document.addEventListener('DOMContentLoaded', function() {
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

    const topBarData = {
        ecoInletTemp: { value: 220.5, unit: "°C", status: "healthy" },
        load: { value: 660, unit: "MW", status: "healthy" },
        feedWaterFlow: { value: 1890, unit: "t/h", status: "healthy" }
    };

    // Update header information
    document.getElementById('header-load').textContent = `Current Load: ${topBarData.load.value} ${topBarData.load.unit}`;
    document.getElementById('header-eco-temp').textContent = `Inlet Temperature: ${topBarData.ecoInletTemp.value} ${topBarData.ecoInletTemp.unit}`;

    // Set up status summary counters
    const statusCounts = {
        healthy: 0,
        warning: 0,
        critical: 0
    };

    // Count parameters by status
    heaterParameters.forEach(param => {
        statusCounts[param.status]++;
    });

    // Update status summary cards
    document.getElementById('critical-summary').textContent = statusCounts.critical;
    document.getElementById('warning-summary').textContent = statusCounts.warning;
    document.getElementById('healthy-summary').textContent = statusCounts.healthy;

    // Populate top metrics
    const topMetricsContainer = document.getElementById('top-metrics');
    
    // Create top metric cards
    const createTopMetricCard = (title, value, unit, status) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-4 border-l-4 ai-enhanced-card';
        card.classList.add(`border-${status === 'healthy' ? 'adani-green' : status === 'warning' ? 'adani-yellow' : 'adani-red'}`);
        
        card.innerHTML = `
            <h3 class="text-sm font-medium text-gray-500">${title}</h3>
            <div class="mt-2 flex justify-between items-baseline">
                <p class="text-2xl font-semibold text-adani-navy">${value}${unit}</p>
                <span class="status-indicator ${status} px-2 py-1 rounded-full text-xs">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
            </div>
            <div class="ai-scan-overlay scanning"></div>
        `;
        
        return card;
    };
    
    // Add top metrics
    topMetricsContainer.appendChild(createTopMetricCard('Eco Inlet Temperature', topBarData.ecoInletTemp.value, topBarData.ecoInletTemp.unit, topBarData.ecoInletTemp.status));
    topMetricsContainer.appendChild(createTopMetricCard('Current Load', topBarData.load.value, topBarData.load.unit, topBarData.load.status));
    topMetricsContainer.appendChild(createTopMetricCard('Feed Water Flow', topBarData.feedWaterFlow.value, topBarData.feedWaterFlow.unit, topBarData.feedWaterFlow.status));

    // Create parameter cards
    const parameterCardsContainer = document.getElementById('parameter-cards');
    
    // Function to get appropriate icon based on parameter name
    const getParameterIcon = (name) => {
        if (name.includes('TTD')) {
            return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>`;
        } else if (name.includes('DCA')) {
            return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>`;
        } else {
            return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>`;
        }
    };

    // Create and populate parameter cards
    heaterParameters.forEach(param => {
        const card = document.createElement('div');
        card.className = `parameter-card status-${param.status}`;
        card.dataset.parameterName = param.name;
        card.dataset.parameterTag = param.tag;

        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-2">
                    <div class="p-1.5 rounded-full bg-gray-100 group-hover:bg-adani-gray transition-colors status-${param.status}">
                        ${getParameterIcon(param.name)}
                    </div>
                    <h3 class="text-sm font-medium text-gray-500">${param.name}</h3>
                </div>
                <div class="status-indicator ${param.status} px-2 py-1 text-xs">
                    ${param.status.charAt(0).toUpperCase() + param.status.slice(1)}
                </div>
            </div>
            <div class="flex items-baseline gap-1">
                <span class="parameter-value">${param.value}</span>
                <span class="text-xs text-gray-500">${param.unit}</span>
            </div>
            <div class="ai-scan-line"></div>
            <div class="ai-scan-overlay scanning"></div>
        `;
        
        // Add click event to show parameter details
        card.addEventListener('click', () => showParameterDetails(param));
        
        parameterCardsContainer.appendChild(card);
    });

    // Populate parameter summary table
    const parameterSummaryTable = document.getElementById('parameter-summary-table');
    
    // Get current load
    const currentLoad = topBarData.load.value;
    
    // Find closest design value for each parameter based on current load
    heaterParameters.forEach(param => {
        // Find closest load value
        const closestBenchmark = param.benchmarkData.reduce((prev, curr) => {
            return (Math.abs(curr.load - currentLoad) < Math.abs(prev.load - currentLoad) ? curr : prev);
        });
        
        // Find closest design value
        const closestDesign = param.designData.reduce((prev, curr) => {
            return (Math.abs(curr.load - currentLoad) < Math.abs(prev.load - currentLoad) ? curr : prev);
        });

        // Create table row
        const row = document.createElement('tr');
        row.className = `status-${param.status}`;
        row.innerHTML = `
            <td>${param.name}</td>
            <td>${param.tag}</td>
            <td>
                <span class="status-indicator ${param.status} px-2 py-1 text-xs">
                    ${param.status.charAt(0).toUpperCase() + param.status.slice(1)}
                </span>
            </td>
            <td>${currentLoad} MW</td>
            <td>${param.value} ${param.unit}</td>
            <td>${closestDesign.value} ${param.unit}</td>
            <td>${param.unit}</td>
        `;
        
        parameterSummaryTable.appendChild(row);
    });

    // Parameter details sidebar functionality
    const sidebar = document.getElementById('parameter-sidebar');
    const mainContent = document.getElementById('main-content');
    let currentChart = null;

    function showParameterDetails(parameter) {
        // Set up parameter details
        document.getElementById('parameter-detail-name').textContent = parameter.name;
        document.getElementById('parameter-detail-tag').textContent = parameter.tag;
        document.getElementById('detail-current-value').textContent = `${parameter.value} ${parameter.unit}`;
        
        // Find current load
        const currentLoad = topBarData.load.value;
        
        // Get design value for current load
        const closestDesign = parameter.designData.reduce((prev, curr) => {
            return (Math.abs(curr.load - currentLoad) < Math.abs(prev.load - currentLoad) ? curr : prev);
        });
        
        document.getElementById('detail-design-value').textContent = `${closestDesign.value} ${parameter.unit}`;
        
        // Set status with appropriate styling
        const statusElement = document.getElementById('detail-status');
        statusElement.innerHTML = `
            <span class="status-indicator ${parameter.status} px-2 py-1 text-xs">
                ${parameter.status.charAt(0).toUpperCase() + parameter.status.slice(1)}
            </span>
        `;
        
        // Populate benchmark table
        const benchmarkTable = document.getElementById('benchmark-table');
        benchmarkTable.innerHTML = ''; // Clear existing content
        
        parameter.benchmarkData.forEach(benchmark => {
            const row = document.createElement('tr');
            row.className = benchmark.load === currentLoad ? 'current-load' : '';
            
            row.innerHTML = `
                <td>${benchmark.load}</td>
                <td>${benchmark.sampleSize}</td>
                <td>${benchmark.q1}</td>
                <td>${benchmark.median}</td>
                <td>${benchmark.q3}</td>
                <td>${benchmark.mean}</td>
                <td>${benchmark.sd.toFixed(3)}</td>
            `;
            
            benchmarkTable.appendChild(row);
        });
        
        // Generate parameter assessment
        const parameterAssessment = document.getElementById('parameter-assessment');
        
        // Find benchmark data for current load
        const closestBenchmark = parameter.benchmarkData.reduce((prev, curr) => {
            return (Math.abs(curr.load - currentLoad) < Math.abs(prev.load - currentLoad) ? curr : prev);
        });
        
        let assessmentText = '';
        
        const isWithinIQR = parameter.value >= closestBenchmark.q1 && parameter.value <= closestBenchmark.q3;
        const isWithinOneSD = Math.abs(parameter.value - closestBenchmark.mean) <= closestBenchmark.sd;
        const deviationFromDesign = ((parameter.value - closestDesign.value) / closestDesign.value * 100).toFixed(1);
        
        if (parameter.status === 'healthy') {
            assessmentText = `
                <p class="mb-2"><strong>Status: Healthy</strong></p>
                <p>Current value of ${parameter.value} ${parameter.unit} is within acceptable range for the current load of ${currentLoad} MW.</p>
                <p class="mt-2">The parameter is ${isWithinIQR ? 'within' : 'outside'} the IQR (${closestBenchmark.q1} - ${closestBenchmark.q3} ${parameter.unit}) and ${isWithinOneSD ? 'within' : 'outside'} one standard deviation of the mean.</p>
                <p class="mt-2">Deviation from design value: ${deviationFromDesign}%</p>
            `;
        } else if (parameter.status === 'warning') {
            assessmentText = `
                <p class="mb-2"><strong>Status: Warning</strong></p>
                <p>Current value of ${parameter.value} ${parameter.unit} is slightly outside the optimal range for the current load of ${currentLoad} MW.</p>
                <p class="mt-2">The parameter is ${isWithinIQR ? 'within' : 'outside'} the IQR (${closestBenchmark.q1} - ${closestBenchmark.q3} ${parameter.unit}) but deviates from expected performance.</p>
                <p class="mt-2">Recommended action: Monitor this parameter closely for further degradation.</p>
                <p class="mt-2">Deviation from design value: ${deviationFromDesign}%</p>
            `;
        } else if (parameter.status === 'critical') {
            assessmentText = `
                <p class="mb-2"><strong>Status: Critical</strong></p>
                <p>Current value of ${parameter.value} ${parameter.unit} is significantly outside the acceptable range for the current load of ${currentLoad} MW.</p>
                <p class="mt-2">The parameter is outside the IQR (${closestBenchmark.q1} - ${closestBenchmark.q3} ${parameter.unit}) and deviates from expected performance.</p>
                <p class="mt-2">Recommended action: Immediate attention required. Check for potential issues with heater performance, tube fouling, or control system problems.</p>
                <p class="mt-2">Deviation from design value: ${deviationFromDesign}%</p>
            `;
        }
        
        parameterAssessment.innerHTML = assessmentText;
        
        // Create chart with benchmark and design data
        createParameterChart(parameter);
        
        // Show sidebar
        sidebar.classList.add('active');
        mainContent.classList.add('sidebar-open');
    }

    // Close sidebar
    document.getElementById('close-sidebar').addEventListener('click', () => {
        sidebar.classList.remove('active');
        mainContent.classList.remove('sidebar-open');
        
        // Destroy chart to prevent memory leaks
        if (currentChart) {
            currentChart.destroy();
            currentChart = null;
        }
    });

    // Create parameter trend chart
    function createParameterChart(parameter) {
        const ctx = document.getElementById('parameter-chart').getContext('2d');
        
        // Clean up existing chart
        if (currentChart) {
            currentChart.destroy();
        }
        
        // Prepare data
        const benchmarkData = parameter.benchmarkData;
        const designData = parameter.designData;
        
        // Get current value
        const currentLoad = topBarData.load.value;
        const currentValue = parameter.value;
        
        // Prepare labels (load values)
        const labels = benchmarkData.map(item => item.load);
        
        // Prepare dataset for Q1, median, Q3
        const q1Data = benchmarkData.map(item => item.q1);
        const medianData = benchmarkData.map(item => item.median);
        const q3Data = benchmarkData.map(item => item.q3);
        
        // Prepare design data
        const designValues = designData.map(item => item.value);
        
        // Find closest load for marker
        const closestLoadIndex = labels.reduce((prev, curr, index) => {
            return Math.abs(curr - currentLoad) < Math.abs(labels[prev] - currentLoad) ? index : prev;
        }, 0);
        
        // Create chart
        currentChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Q1 (25%)',
                        data: q1Data,
                        borderColor: 'rgba(180, 180, 180, 0.8)',
                        backgroundColor: 'rgba(180, 180, 180, 0.1)',
                        borderWidth: 1,
                        pointRadius: 2,
                        pointHoverRadius: 4,
                        fill: false
                    },
                    {
                        label: 'Median',
                        data: medianData,
                        borderColor: 'rgba(64, 224, 208, 0.8)',
                        backgroundColor: 'rgba(64, 224, 208, 0.1)',
                        borderWidth: 2,
                        pointRadius: 3,
                        pointHoverRadius: 5
                    },
                    {
                        label: 'Q3 (75%)',
                        data: q3Data,
                        borderColor: 'rgba(180, 180, 180, 0.8)',
                        backgroundColor: 'rgba(180, 180, 180, 0.1)',
                        borderWidth: 1,
                        pointRadius: 2,
                        pointHoverRadius: 4,
                        fill: false
                    },
                    {
                        label: 'Design',
                        data: designValues,
                        borderColor: 'rgba(0, 70, 173, 0.8)',
                        backgroundColor: 'rgba(0, 70, 173, 0.1)',
                        borderWidth: 2,
                        pointRadius: 3,
                        pointHoverRadius: 5,
                        borderDash: [5, 5]
                    },
                    {
                        label: 'Current',
                        data: Array(labels.length).fill(null),
                        borderColor: parameter.status === 'healthy' ? '#00A650' : 
                                     parameter.status === 'warning' ? '#FFC107' : '#FF3A3A',
                        pointBackgroundColor: parameter.status === 'healthy' ? '#00A650' : 
                                             parameter.status === 'warning' ? '#FFC107' : '#FF3A3A',
                        pointBorderColor: '#fff',
                        pointRadius: 0,
                        pointHoverRadius: 0
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
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        position: 'top'
                    },
                    annotation: {
                        annotations: {
                            currentLoad: {
                                type: 'line',
                                xMin: currentLoad,
                                xMax: currentLoad,
                                borderColor: 'rgba(139, 92, 246, 0.7)',
                                borderWidth: 2,
                                label: {
                                    display: true,
                                    content: `Current: ${currentLoad} MW`,
                                    position: 'start',
                                    backgroundColor: 'rgba(139, 92, 246, 0.7)'
                                }
                            },
                            currentValue: {
                                type: 'point',
                                xValue: currentLoad,
                                yValue: currentValue,
                                backgroundColor: parameter.status === 'healthy' ? '#00A650' : 
                                                parameter.status === 'warning' ? '#FFC107' : '#FF3A3A',
                                borderColor: 'white',
                                borderWidth: 2,
                                radius: 6
                            }
                        }
                    }
                }
            }
        });
    }

    // Export data functionality
    document.getElementById('export-data').addEventListener('click', exportParameterData);

    function exportParameterData() {
        // Prepare CSV content
        let csvContent = "Description,Tag,Status,Load,Current Value,Design Value,Unit\n";
        
        // Get current load
        const currentLoad = topBarData.load.value;
        
        heaterParameters.forEach(param => {
            // Find closest design value
            const closestDesign = param.designData.reduce((prev, curr) => {
                return (Math.abs(curr.load - currentLoad) < Math.abs(prev.load - currentLoad) ? curr : prev);
            });
            
            csvContent += `${param.name},${param.tag},${param.status},${currentLoad},${param.value},${closestDesign.value},${param.unit}\n`;
        });
        
        // Create download link
        const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `parameter_report_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        
        // Download the file
        link.click();
        
        // Clean up
        document.body.removeChild(link);
        
        // Show notification
        showNotification("Report exported successfully!", "success");
    }

    // Notification function
    function showNotification(message, type = "info") {
        // Create notification element
        const notification = document.createElement("div");
        notification.className = "notification";
        notification.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="${type === 'success' ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' : 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}" />
            </svg>
            <span>${message}</span>
        `;
        
        // Add to document
        document.body.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Initialize AI scanning animation for all elements
    const scanningElements = document.querySelectorAll('.ai-scan-overlay');
    scanningElements.forEach(element => {
        element.classList.add('scanning');
    });

    // Toggle sidebar functionality
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarElement = document.getElementById('sidebar');
    
    sidebarToggle.addEventListener('click', () => {
        if (sidebarElement.classList.contains('w-64')) {
            sidebarElement.classList.remove('w-64');
            sidebarElement.classList.add('w-0');
            mainContent.classList.remove('ml-64');
            mainContent.classList.add('ml-0');
        } else {
            sidebarElement.classList.remove('w-0');
            sidebarElement.classList.add('w-64');
            mainContent.classList.remove('ml-0');
            mainContent.classList.add('ml-64');
        }
    });
});
