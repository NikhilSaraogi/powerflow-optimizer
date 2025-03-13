
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import HeaterCard from '../components/HeaterCard';
import NotificationPanel from '../components/NotificationPanel';
import HeaterChart from '../components/HeaterChart';
import { topBarData, heaterData, notificationData, heaterTimeSeriesData, temperatureTimeSeriesData } from '../utils/dummyData';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
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
            ecoInletTemp={topBarData.ecoInletTemp}
            load={topBarData.load}
            hdrPressure={topBarData.hdrPressure}
            feedWaterFlow={topBarData.feedWaterFlow}
          />
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            {heaterData.map((heater) => (
              <HeaterCard key={heater.id} data={heater} />
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <HeaterChart 
              data={heaterTimeSeriesData} 
              dataKeys={[
                { key: 'heater1', name: 'HP Heater 1', color: '#0046AD' },
                { key: 'heater2', name: 'HP Heater 2', color: '#00A650' },
                { key: 'heater3', name: 'HP Heater 3', color: '#FF3A3A' },
              ]}
              title="Heat Load Trend (MW)"
            />
            <HeaterChart 
              data={temperatureTimeSeriesData} 
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
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 animate-fade-in">
                <h3 className="text-lg font-semibold text-adani-navy mb-4">HP Heater Performance Summary</h3>
                <p className="text-gray-600 mb-3">
                  The HP heaters are critical components in the feedwater heating system. HP Heater 1 is performing within optimal parameters,
                  while HP Heater 2 and 3 show performance degradation. Main issues detected:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-3">
                  <li>HP Heater 3 shows increased TTD values indicating possible tube fouling or drain control issues</li>
                  <li>HP Heater 2 level is higher than optimal range, reducing heat transfer efficiency</li>
                  <li>Overall feedwater temperature rise is 3.2°C below design value</li>
                </ul>
                <p className="text-gray-600">
                  Follow the recommendations in the notification panel to optimize heater performance and improve cycle efficiency.
                </p>
              </div>
            </div>
            
            <div className="col-span-1">
              <NotificationPanel notifications={notificationData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
