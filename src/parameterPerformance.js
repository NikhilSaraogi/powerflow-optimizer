
// Heater parameters data structure
let heaterParameters = [
    { name: "TTD", value: 4.8, unit: "°C", status: "healthy" },
    { name: "DCA", value: 5.2, unit: "°C", status: "warning" },
    { name: "Flow", value: 630, unit: "t/h", status: "healthy" },
    { name: "Heat Load", value: 52.4, unit: "MW", status: "critical" },
    { name: "Level", value: 65, unit: "%", status: "warning" },
    { name: "TR", value: 0.92, unit: "", status: "healthy" }
];

// Benchmark data for parameter trends
const benchmarkData = {
    data: [
        { load: 250, q1: 5.875, median: 5.921, q3: 6.053 },
        { load: 300, q1: 4.812, median: 5.141, q3: 5.391 },
        { load: 350, q1: 4.739, median: 4.945, q3: 5.152 },
        { load: 400, q1: 4.671, median: 5.312, q3: 5.814 },
        { load: 450, q1: 4.708, median: 5.364, q3: 5.85 }
    ]
};

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderParameterCards();
    updateStatusCounts();
    initializeSidebar();
});

function renderParameterCards() {
    const container = document.getElementById('parameter-cards');
    
    heaterParameters.forEach(param => {
        const card = document.createElement('div');
        card.className = `bg-white rounded-lg shadow-md p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-adani-navy">${param.name}</h3>
                <span class="text-sm text-gray-500">${param.unit}</span>
            </div>
            <div class="flex items-end justify-between">
                <p class="text-3xl font-bold ${getStatusColorClass(param.status)}">${param.value}</p>
            </div>
        `;
        
        card.addEventListener('click', () => showParameterDetails(param));
        container.appendChild(card);
    });
}

function updateStatusCounts() {
    const counts = {
        critical: heaterParameters.filter(p => p.status === 'critical').length,
        warning: heaterParameters.filter(p => p.status === 'warning').length,
        healthy: heaterParameters.filter(p => p.status === 'healthy').length
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

function showParameterDetails(parameter) {
    const sidebar = document.getElementById('parameter-sidebar');
    const parameterTitle = document.getElementById('parameter-title');
    
    sidebar.style.width = '600px';
    parameterTitle.textContent = `${parameter.name} Analysis`;
    
    renderBenchmarkTable();
    renderParameterChart(parameter);
}

function renderBenchmarkTable() {
    const tableBody = document.getElementById('benchmark-table');
    tableBody.innerHTML = '';

    benchmarkData.data.forEach(row => {
        const tr = document.createElement('tr');
        tr.className = 'border-t border-gray-200 hover:bg-gray-50';
        tr.innerHTML = `
            <td class="px-4 py-2">${row.load}</td>
            <td class="px-4 py-2">${row.q1.toFixed(3)}</td>
            <td class="px-4 py-2">${row.median.toFixed(3)}</td>
            <td class="px-4 py-2">${row.q3.toFixed(3)}</td>
        `;
        tableBody.appendChild(tr);
    });
}

function renderParameterChart(parameter) {
    const ctx = document.getElementById('parameter-chart').getContext('2d');
    
    if (window.currentChart) {
        window.currentChart.destroy();
    }

    const loads = benchmarkData.data.map(d => d.load);
    const medians = benchmarkData.data.map(d => d.median);
    const upperBand = benchmarkData.data.map(d => d.q3);
    const lowerBand = benchmarkData.data.map(d => d.q1);

    window.currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: loads,
            datasets: [
                {
                    label: 'Actual Value',
                    data: loads.map(() => parameter.value),
                    borderColor: '#FF3A3A',
                    borderWidth: 2,
                    pointRadius: 4,
                    fill: false
                },
                {
                    label: 'Median',
                    data: medians,
                    borderColor: '#0046AD',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Upper Band (Q3)',
                    data: upperBand,
                    borderColor: 'rgba(0, 70, 173, 0.3)',
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Lower Band (Q1)',
                    data: lowerBand,
                    borderColor: 'rgba(0, 70, 173, 0.3)',
                    borderWidth: 1,
                    fill: '-1'
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
                }
            }
        }
    });
}

function getStatusColorClass(status) {
    return status === 'critical' ? 'text-adani-red' : 
           status === 'warning' ? 'text-adani-yellow' : 
           'text-adani-green';
}
