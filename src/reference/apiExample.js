
/**
 * Example JavaScript code for fetching data from SQL APIs
 * This file demonstrates how you would integrate with backend APIs
 */

// Base API configuration
const API_CONFIG = {
  baseUrl: 'https://your-api-server.com/api',
  headers: {
    'Content-Type': 'application/json',
    // Add any authentication headers needed
    // 'Authorization': 'Bearer YOUR_TOKEN'
  },
  // Default timeout in milliseconds
  timeout: 30000
};

// Fetch wrapper with timeout and error handling
async function fetchWithTimeout(url, options = {}) {
  const { timeout = API_CONFIG.timeout } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...API_CONFIG.headers,
        ...(options.headers || {})
      },
      signal: controller.signal
    });
    
    clearTimeout(id);
    
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    
    if (error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout}ms`);
    }
    
    throw error;
  }
}

// API functions for the HP Heater Dashboard

// Fetch top bar data (eco inlet temp, load, hdr pressure, feed water flow)
async function fetchTopBarData() {
  try {
    return await fetchWithTimeout(`${API_CONFIG.baseUrl}/top-bar-data`);
  } catch (error) {
    console.error('Error fetching top bar data:', error);
    throw error;
  }
}

// Fetch detailed heater data
async function fetchHeaterData() {
  try {
    return await fetchWithTimeout(`${API_CONFIG.baseUrl}/heater-data`);
  } catch (error) {
    console.error('Error fetching heater data:', error);
    throw error;
  }
}

// Fetch notifications (recommendations, RCA, alerts)
async function fetchNotifications() {
  try {
    return await fetchWithTimeout(`${API_CONFIG.baseUrl}/notifications`);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
}

// Fetch time series data for charts
async function fetchTimeSeriesData(startTime, endTime) {
  try {
    const params = new URLSearchParams({
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString()
    });
    
    return await fetchWithTimeout(`${API_CONFIG.baseUrl}/time-series-data?${params}`);
  } catch (error) {
    console.error('Error fetching time series data:', error);
    throw error;
  }
}

// Fetch all dashboard data in a single call
async function fetchAllDashboardData() {
  try {
    return await fetchWithTimeout(`${API_CONFIG.baseUrl}/dashboard-data`);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
}

// Example SQL queries that might be used on the backend

/**
 * SQL Query Examples for Backend Implementation
 * 
 * 1. Top Bar Data:
 * 
 * SELECT 
 *   (SELECT value FROM parameters WHERE name = 'eco_inlet_temp' ORDER BY timestamp DESC LIMIT 1) as eco_inlet_temp,
 *   (SELECT value FROM parameters WHERE name = 'load' ORDER BY timestamp DESC LIMIT 1) as load,
 *   (SELECT value FROM parameters WHERE name = 'hdr_pressure' ORDER BY timestamp DESC LIMIT 1) as hdr_pressure,
 *   (SELECT value FROM parameters WHERE name = 'feed_water_flow' ORDER BY timestamp DESC LIMIT 1) as feed_water_flow
 * 
 * 2. Heater Data:
 * 
 * SELECT 
 *   h.id,
 *   h.name,
 *   h.heat_load,
 *   h.flow,
 *   h.ttd,
 *   h.dca,
 *   h.tr,
 *   h.enthalpy_trip,
 *   h.enthalpy_fw_inlet,
 *   h.enthalpy_fw_outlet,
 *   h.enthalpy_extraction,
 *   h.fw_temp_inlet,
 *   h.fw_temp_outlet,
 *   h.extraction_temp,
 *   h.extraction_pressure,
 *   h.heater_level,
 *   h.predicted_eco_inlet
 * FROM 
 *   heaters h
 * WHERE 
 *   h.timestamp = (SELECT MAX(timestamp) FROM heaters)
 * 
 * 3. Time Series Data:
 * 
 * SELECT 
 *   time_bucket('1 hour', timestamp) as hour,
 *   heater_id,
 *   AVG(heat_load) as heat_load,
 *   AVG(fw_temp_inlet) as fw_temp_inlet,
 *   AVG(fw_temp_outlet) as fw_temp_outlet,
 *   AVG(extraction_temp) as extraction_temp
 * FROM 
 *   heater_history
 * WHERE 
 *   timestamp BETWEEN $1 AND $2
 * GROUP BY 
 *   hour, heater_id
 * ORDER BY 
 *   hour ASC
 * 
 * 4. Notifications:
 * 
 * SELECT 
 *   id, 
 *   type, 
 *   title, 
 *   message, 
 *   timestamp, 
 *   priority
 * FROM 
 *   notifications
 * WHERE 
 *   created_at > NOW() - INTERVAL '24 hours'
 * ORDER BY 
 *   timestamp DESC
 */

// Example usage of the API functions
async function initializeDashboard() {
  try {
    // Show loading state
    setLoading(true);
    
    // Fetch all data at once
    const dashboardData = await fetchAllDashboardData();
    
    // Or fetch individual components
    // const topBarData = await fetchTopBarData();
    // const heaterData = await fetchHeaterData();
    // const notifications = await fetchNotifications();
    
    // Define time range for charts (last 6 hours)
    const endTime = new Date();
    const startTime = new Date(endTime);
    startTime.setHours(startTime.getHours() - 6);
    
    // Fetch time series data
    const timeSeriesData = await fetchTimeSeriesData(startTime, endTime);
    
    // Update UI with fetched data
    updateDashboard({
      ...dashboardData,
      heaterTimeSeriesData: timeSeriesData.heatLoadData,
      temperatureTimeSeriesData: timeSeriesData.temperatureData
    });
  } catch (error) {
    // Handle errors
    console.error('Failed to initialize dashboard:', error);
    showErrorMessage('Failed to load dashboard data. Please try again later.');
  } finally {
    // Hide loading state
    setLoading(false);
  }
}

// Example utility functions
function setLoading(isLoading) {
  // Update loading state in the UI
  const loadingElement = document.getElementById('loading-indicator');
  if (loadingElement) {
    loadingElement.style.display = isLoading ? 'flex' : 'none';
  }
}

function showErrorMessage(message) {
  // Display error message to user
  alert(message);
}

function updateDashboard(data) {
  // Update UI components with new data
  console.log('Updating dashboard with new data:', data);
  
  // This would call the individual render functions for each component
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDashboard);

// Set up periodic refresh
const REFRESH_INTERVAL = 60000; // 1 minute
setInterval(initializeDashboard, REFRESH_INTERVAL);
