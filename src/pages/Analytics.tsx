
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import HeaterChart from '../components/HeaterChart';
import { fetchAllDashboardData } from '../utils/apiUtils';
import { toast } from '../components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  
  // Generate level trend data
  const levelTrendData = dashboardData.heaterTimeSeriesData.map((item: any, index: number) => ({
    name: item.name,
    heater1: dashboardData.heaterData[0].heaterLevel.value + (Math.random() * 3 - 1.5),
    heater2: dashboardData.heaterData[1].heaterLevel.value + (Math.random() * 3 - 1.5),
    heater3: dashboardData.heaterData[2].heaterLevel.value + (Math.random() * 3 - 1.5),
  }));

  // Generate enthalpy trend data
  const enthalpyTrendData = dashboardData.heaterTimeSeriesData.map((item: any, index: number) => ({
    name: item.name,
    heater1Trip: dashboardData.heaterData[0].enthalpyTrip.value + (Math.random() * 10 - 5),
    heater1FwInlet: dashboardData.heaterData[0].enthalpyFwInlet.value + (Math.random() * 5 - 2.5),
    heater1FwOutlet: dashboardData.heaterData[0].enthalpyFwOutlet.value + (Math.random() * 7 - 3.5),
    heater1Extraction: dashboardData.heaterData[0].enthalpyExtraction.value + (Math.random() * 15 - 7.5),
  }));
  
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

          <Tabs defaultValue="parameters" className="w-full mt-6">
            <TabsList className="grid grid-cols-3 w-[400px] mb-4">
              <TabsTrigger value="parameters">Parameters</TabsTrigger>
              <TabsTrigger value="levels">Levels</TabsTrigger>
              <TabsTrigger value="enthalpy">Enthalpy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="parameters" className="space-y-6">
              <h2 className="text-2xl font-bold text-adani-navy mb-4">Heater Parameter Trends</h2>
              
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

              {/* TTD, DCA, TR Charts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <HeaterChart 
                  data={dashboardData.heaterTimeSeriesData.map((item: any) => ({
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
                  data={dashboardData.heaterTimeSeriesData.map((item: any) => ({
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
                  data={dashboardData.heaterTimeSeriesData.map((item: any) => ({
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HeaterChart 
                  data={dashboardData.heaterTimeSeriesData.map((item: any) => ({
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
                  data={dashboardData.temperatureTimeSeriesData.map((item: any, index: number) => ({
                    name: item.name,
                    predicted: [223.1, 219.8, 215.3][Math.min(index % 3, 2)],
                    actual: dashboardData.heaterData[0].predictedEcoInlet?.value * (1 + (Math.random() * 0.02 - 0.01)) || 220,
                  }))} 
                  dataKeys={[
                    { key: 'predicted', name: 'Predicted Eco Inlet', color: '#0046AD' },
                    { key: 'actual', name: 'Actual Eco Inlet', color: '#FF3A3A' },
                  ]}
                  title="Eco Inlet Temperature (°C)"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="levels">
              <h2 className="text-2xl font-bold text-adani-navy mb-4">Heater Level Trends</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <HeaterChart 
                  data={levelTrendData} 
                  dataKeys={[
                    { key: 'heater1', name: 'HP Heater 1 Level', color: '#0046AD' },
                    { key: 'heater2', name: 'HP Heater 2 Level', color: '#00A650' },
                    { key: 'heater3', name: 'HP Heater 3 Level', color: '#FF3A3A' },
                  ]}
                  title="Heater Level Trends (%)"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {dashboardData.heaterData.map((heater: any, index: number) => (
                    <div key={heater.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                      <h3 className="text-lg font-semibold text-adani-navy mb-2">{heater.name} - Level Analysis</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Current Level:</span>
                          <span className={`font-medium ${heater.heaterLevel.status === 'healthy' ? 'text-adani-blue' : 
                            heater.heaterLevel.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                            {heater.heaterLevel.value}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Recommended Level:</span>
                          <span className="font-medium text-adani-green">
                            {index === 0 ? '52' : index === 1 ? '55' : '60'}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Level Deviation:</span>
                          <span className={`font-medium ${
                            Math.abs(heater.heaterLevel.value - (index === 0 ? 52 : index === 1 ? 55 : 60)) < 5 ? 'text-adani-green' : 
                            Math.abs(heater.heaterLevel.value - (index === 0 ? 52 : index === 1 ? 55 : 60)) < 10 ? 'text-adani-yellow' : 
                            'text-adani-red'}`}>
                            {Math.abs(heater.heaterLevel.value - (index === 0 ? 52 : index === 1 ? 55 : 60))}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="enthalpy">
              <h2 className="text-2xl font-bold text-adani-navy mb-4">Enthalpy Analysis</h2>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <HeaterChart 
                  data={enthalpyTrendData} 
                  dataKeys={[
                    { key: 'heater1Trip', name: 'Trip Enthalpy', color: '#0046AD' },
                    { key: 'heater1FwInlet', name: 'FW Inlet Enthalpy', color: '#00A650' },
                    { key: 'heater1FwOutlet', name: 'FW Outlet Enthalpy', color: '#FF3A3A' },
                    { key: 'heater1Extraction', name: 'Extraction Enthalpy', color: '#FFC107' },
                  ]}
                  title="Enthalpy Trends (kJ/kg)"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {dashboardData.heaterData.map((heater: any) => (
                    <div key={heater.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                      <h3 className="text-lg font-semibold text-adani-navy mb-3">{heater.name} - Enthalpy Values</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">Trip Enthalpy:</span>
                          <span className={`font-medium ${heater.enthalpyTrip.status === 'healthy' ? 'text-adani-blue' : 
                            heater.enthalpyTrip.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                            {heater.enthalpyTrip.value} {heater.enthalpyTrip.unit}
                          </span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">FW Inlet Enthalpy:</span>
                          <span className={`font-medium ${heater.enthalpyFwInlet.status === 'healthy' ? 'text-adani-blue' : 
                            heater.enthalpyFwInlet.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                            {heater.enthalpyFwInlet.value} {heater.enthalpyFwInlet.unit}
                          </span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">FW Outlet Enthalpy:</span>
                          <span className={`font-medium ${heater.enthalpyFwOutlet.status === 'healthy' ? 'text-adani-blue' : 
                            heater.enthalpyFwOutlet.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                            {heater.enthalpyFwOutlet.value} {heater.enthalpyFwOutlet.unit}
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Extraction Enthalpy:</span>
                          <span className={`font-medium ${heater.enthalpyExtraction.status === 'healthy' ? 'text-adani-blue' : 
                            heater.enthalpyExtraction.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                            {heater.enthalpyExtraction.value} {heater.enthalpyExtraction.unit}
                          </span>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
