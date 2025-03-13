
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { fetchAllDashboardData } from '../utils/apiUtils';
import { toast } from '../components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaterChart from '../components/HeaterChart';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Download, FileText, TrendingUp } from "lucide-react";

const Reports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]);
  
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
          description: "Failed to load reports data. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Function to generate dummy daily eco inlet temperature gains
  const generateDailyGains = () => {
    const days = 7;
    const dailyGains = [];
    
    for(let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      dailyGains.push({
        date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        gain: (Math.random() * 3 + 1).toFixed(2),
        heater1Level: (Math.random() * 10 + 45).toFixed(1),
        heater2Level: (Math.random() * 10 + 50).toFixed(1),
        heater3Level: (Math.random() * 10 + 55).toFixed(1),
      });
    }
    
    return dailyGains.reverse();
  };
  
  const dailyGains = generateDailyGains();
  
  // Calculate eco inlet temperature gain data for chart
  const ecoInletGainData = dailyGains.map(day => ({
    name: day.date,
    gain: parseFloat(day.gain)
  }));
  
  if (isLoading || !dashboardData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-adani-blue border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-adani-navy">Loading reports data...</p>
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

          <div className="flex justify-between items-center mt-6 mb-4">
            <h1 className="text-2xl font-bold text-adani-navy">Reports</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="start-date" className="text-sm text-gray-600">Start:</label>
                <input 
                  type="date" 
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded px-2 py-1 text-sm" 
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <label htmlFor="end-date" className="text-sm text-gray-600">End:</label>
                <input 
                  type="date" 
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded px-2 py-1 text-sm" 
                />
              </div>
              
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-1" /> Last 7 Days
              </Button>
              
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-1" /> Last 30 Days
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid grid-cols-2 w-[400px] mb-4">
              <TabsTrigger value="benefits">Benefits Report</TabsTrigger>
              <TabsTrigger value="recommendations">RCA & Recommendations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Avg. Daily Eco Inlet Gain</CardTitle>
                    <CardDescription>Last 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-adani-green flex items-center">
                      +2.31°C
                      <TrendingUp className="h-5 w-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Est. Heat Rate Improvement</CardTitle>
                    <CardDescription>Based on current gain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-adani-blue">
                      0.48%
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Est. Annual Savings</CardTitle>
                    <CardDescription>Coal consumption reduction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-adani-green">
                      ₹14.2M
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Eco Inlet Temperature Gain</CardTitle>
                    <CardDescription>Showing increase in economizer inlet temperature</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <HeaterChart 
                        data={ecoInletGainData} 
                        dataKeys={[
                          { key: 'gain', name: 'Temperature Gain (°C)', color: '#00A650' },
                        ]}
                        title=""
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Benefits Summary</CardTitle>
                    <CardDescription>Based on heater optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain (°C)</th>
                            <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HP1 Level</th>
                            <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HP2 Level</th>
                            <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HP3 Level</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {dailyGains.map((day, idx) => (
                            <tr key={idx}>
                              <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{day.date}</td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-adani-green">+{day.gain}°C</td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{day.heater1Level}%</td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{day.heater2Level}%</td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{day.heater3Level}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recommendations">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Recommendations & Root Cause Analysis</CardTitle>
                      <CardDescription>Recent actions and alerts for heaters</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Export Full Report
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {dashboardData.notificationData.map((notification: any) => (
                            <tr key={notification.id}>
                              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{notification.timestamp}</td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  notification.type === 'recommendation' ? 'bg-green-100 text-green-800' : 
                                  notification.type === 'rca' ? 'bg-blue-100 text-blue-800' : 
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {notification.type === 'recommendation' ? 'Recommendation' : 
                                   notification.type === 'rca' ? 'RCA' : 'Alert'}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  notification.priority === 'low' ? 'bg-gray-100 text-gray-800' : 
                                  notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {notification.priority}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{notification.title}</td>
                              <td className="px-4 py-3 text-sm text-gray-500 max-w-md">{notification.message}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Reports;
