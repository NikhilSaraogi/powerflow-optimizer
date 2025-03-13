
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import HeaterCard from '../components/HeaterCard';
import NotificationPanel from '../components/NotificationPanel';
import { fetchAllDashboardData } from '../utils/apiUtils';
import { toast } from '../components/ui/use-toast';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);
  
  useEffect(() => {
    // Simulate data loading from API
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
        toast({
          title: "Error",
          description: "Failed to load dashboard data. Please try again later.",
          variant: "destructive",
        });
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
  
  if (isLoading || !dashboardData) {
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <NotificationPanel notifications={dashboardData.notificationData} />
            
            {/* Additional information/instructions panel */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 animate-fade-in h-fit">
              <h3 className="text-lg font-semibold text-adani-navy mb-4">HP Heater Optimization Guide</h3>
              <p className="text-gray-600 mb-3">
                This dashboard provides real-time monitoring of HP Heaters with recommendations and alerts:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-3">
                <li>Monitor key parameters like Heat Load, TTD, DCA, and TR in the heater cards above</li>
                <li>Check recommendations for optimal heater level settings</li>
                <li>Review alerts and root cause analysis for potential issues</li>
                <li>Visit the Analytics page for detailed trend analysis</li>
              </ul>
              <p className="text-gray-600">
                For a detailed view of parameter trends and historical data, please navigate to the Analytics page
                using the sidebar menu.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
