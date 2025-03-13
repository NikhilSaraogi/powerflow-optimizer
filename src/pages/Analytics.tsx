
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import HeaterChart from '../components/HeaterChart';
import { fetchAllDashboardData } from '../utils/apiUtils';
import { toast } from '../components/ui/use-toast';

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
        toast({
          title: "Error",
          description: "Failed to load analytics data. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Set up a refresh interval (every 5 minutes for analytics page)
    const refreshInterval = setInterval(loadData, 300000);
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
            <p className="text-adani-navy">Loading analytics data...</p>
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

          <h2 className="text-2xl font-bold text-adani-navy mt-6 mb-4">Heater Parameter Analytics</h2>
          
          {/* Heat Load Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

          {/* TTD, DCA, TR Charts - Created with dummy data but these would be populated from real API */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <HeaterChart 
              data={dashboardData.heaterTimeSeriesData.map(item => ({
                name: item.name,
                heater1: dashboardData.heaterData[0].ttd.value + (Math.random() * 0.5 - 0.25),
                heater2: dashboardData.heaterData[1].ttd.value + (Math.random() * 0.5 - 0.25),
                heater3: dashboardData.heaterData[2].ttd.value + (Math.random() * 0.5 - 0.25),
              }))} 
              dataKeys={[
                { key: 'heater1', name: 'HP Heater 1', color: '#0046AD' },
                { key: 'heater2', name: 'HP Heater 2', color: '#00A650' },
                { key: 'heater3', name: 'HP Heater 3', color: '#FF3A3A' },
              ]}
              title="TTD Trend (°C)"
            />
            <HeaterChart 
              data={dashboardData.heaterTimeSeriesData.map(item => ({
                name: item.name,
                heater1: dashboardData.heaterData[0].dca.value + (Math.random() * 0.5 - 0.25),
                heater2: dashboardData.heaterData[1].dca.value + (Math.random() * 0.5 - 0.25),
                heater3: dashboardData.heaterData[2].dca.value + (Math.random() * 0.5 - 0.25),
              }))} 
              dataKeys={[
                { key: 'heater1', name: 'HP Heater 1', color: '#0046AD' },
                { key: 'heater2', name: 'HP Heater 2', color: '#00A650' },
                { key: 'heater3', name: 'HP Heater 3', color: '#FF3A3A' },
              ]}
              title="DCA Trend (°C)"
            />
            <HeaterChart 
              data={dashboardData.heaterTimeSeriesData.map(item => ({
                name: item.name,
                heater1: dashboardData.heaterData[0].tr.value + (Math.random() * 0.02 - 0.01),
                heater2: dashboardData.heaterData[1].tr.value + (Math.random() * 0.02 - 0.01),
                heater3: dashboardData.heaterData[2].tr.value + (Math.random() * 0.02 - 0.01),
              }))} 
              dataKeys={[
                { key: 'heater1', name: 'HP Heater 1', color: '#0046AD' },
                { key: 'heater2', name: 'HP Heater 2', color: '#00A650' },
                { key: 'heater3', name: 'HP Heater 3', color: '#FF3A3A' },
              ]}
              title="TR Trend"
            />
          </div>

          {/* Flow and Eco Inlet Temp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <HeaterChart 
              data={dashboardData.heaterTimeSeriesData.map(item => ({
                name: item.name,
                heater1: dashboardData.heaterData[0].flow.value + (Math.random() * 10 - 5),
                heater2: dashboardData.heaterData[1].flow.value + (Math.random() * 10 - 5),
                heater3: dashboardData.heaterData[2].flow.value + (Math.random() * 10 - 5),
              }))} 
              dataKeys={[
                { key: 'heater1', name: 'HP Heater 1', color: '#0046AD' },
                { key: 'heater2', name: 'HP Heater 2', color: '#00A650' },
                { key: 'heater3', name: 'HP Heater 3', color: '#FF3A3A' },
              ]}
              title="Flow Trend (t/h)"
            />
            <HeaterChart 
              data={dashboardData.temperatureTimeSeriesData.map((item, index) => ({
                name: item.name,
                predicted: [223.1, 219.8, 215.3][Math.min(index % 3, 2)],
                actual: dashboardData.heaterData[0].predictedEcoInlet.value * (1 + (Math.random() * 0.02 - 0.01)),
              }))} 
              dataKeys={[
                { key: 'predicted', name: 'Predicted Eco Inlet', color: '#0046AD' },
                { key: 'actual', name: 'Actual Eco Inlet', color: '#FF3A3A' },
              ]}
              title="Eco Inlet Temperature (°C)"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
