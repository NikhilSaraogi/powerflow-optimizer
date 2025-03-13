
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import HeaterCard from '../components/HeaterCard';
import NotificationPanel from '../components/NotificationPanel';
import HeaterChart from '../components/HeaterChart';
import { topBarData, heaterData, notificationData, heaterTimeSeriesData, temperatureTimeSeriesData } from '../utils/dummyData';

// This would be your API data fetching function
const fetchDashboardData = async () => {
  // In a real implementation, this would call your API endpoints
  // For now, we'll just return the dummy data with a delay to simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        topBarData,
        heaterData,
        notificationData,
        heaterTimeSeriesData,
        temperatureTimeSeriesData
      });
    }, 800);
  });
};

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    topBarData,
    heaterData,
    notificationData,
    heaterTimeSeriesData,
    temperatureTimeSeriesData
  });
  
  useEffect(() => {
    // Simulate data loading from API
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchDashboardData();
        setDashboardData(data as any);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Set up a refresh interval (every 60 seconds in this example)
    const refreshInterval = setInterval(loadData, 60000);
    
    return () => clearInterval(refreshInterval);
  }, []);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-adani-blue border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-adani-navy">Loading dashboard data...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex">
        <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
        
        <main 
          className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}
        >
          <TopBar 
            ecoInletTemp={dashboardData.topBarData.ecoInletTemp}
            load={dashboardData.topBarData.load}
            hdrPressure={dashboardData.topBarData.hdrPressure}
            feedWaterFlow={dashboardData.topBarData.feedWaterFlow}
          />
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            {dashboardData.heaterData.map((heater) => (
              <HeaterCard key={heater.id} data={heater} />
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <HeaterChart 
              data={dashboardData.heaterTimeSeriesData} 
              dataKeys={[
                { key: 'heater1', name: 'HP Heater 1', color: '#0046AD' },
                { key: 'heater2', name: 'HP Heater 2', color: '#00A650' },
                { key: 'heater3', name: 'HP Heater 3', color: '#FF3A3A' },
              ]}
              title="Heat Load Trend (MW)"
            />
            <HeaterChart 
              data={dashboardData.temperatureTimeSeriesData} 
              dataKeys={[
                { key: 'fwInlet', name: 'FW Inlet Temp', color: '#0046AD' },
                { key: 'fwOutlet', name: 'FW Outlet Temp', color: '#00A650' },
                { key: 'extraction', name: 'Extraction Temp', color: '#FFC107' },
              ]}
              title="Temperature Trend (°C)"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              {/* This is where we'd add additional content later if needed */}
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 animate-fade-in">
                <h3 className="text-lg font-semibold text-adani-navy mb-4">Data Integration Guide</h3>
                <p className="text-gray-600 mb-3">
                  This dashboard is designed to be populated with real-time data from your SQL API. To connect your backend:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-3">
                  <li>Modify the <code>fetchDashboardData</code> function to call your API endpoints</li>
                  <li>Ensure your API returns data in the expected format for each component</li>
                  <li>Adjust the refresh interval as needed for your application</li>
                </ul>
                <p className="text-gray-600">
                  The dashboard will automatically refresh with the latest data from your API based on the configured interval.
                </p>
              </div>
            </div>
            
            <div className="col-span-1">
              <NotificationPanel notifications={dashboardData.notificationData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
