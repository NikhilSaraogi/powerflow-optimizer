
/**
 * API utilities for fetching data from the backend
 * Replace these with your actual API implementation
 */

import { topBarData, heaterData, notificationData, heaterTimeSeriesData, temperatureTimeSeriesData } from './dummyData';

// Define types for all your data structures
export interface TopBarDataType {
  ecoInletTemp: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  load: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  hdrPressure: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  feedWaterFlow: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
}

export interface HeaterDataType {
  id: number;
  name: string;
  heatLoad: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change: number };
  flow: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change: number };
  ttd: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change: number };
  dca: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change: number };
  tr: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change: number };
  enthalpyTrip: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  enthalpyFwInlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  enthalpyFwOutlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  enthalpyExtraction: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  fwTempInlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  fwTempOutlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  extractionTemp: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  extractionPressure: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  heaterLevel: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  predictedEcoInlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
}

export interface NotificationType {
  id: string;
  type: 'recommendation' | 'rca' | 'alert';
  title: string;
  message: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
}

export interface DashboardDataType {
  topBarData: TopBarDataType;
  heaterData: HeaterDataType[];
  notificationData: NotificationType[];
  heaterTimeSeriesData: any[];
  temperatureTimeSeriesData: any[];
}

// Base API URL - replace with your actual API endpoint
const API_BASE_URL = 'https://your-api-endpoint.com/api';

// Fetch all dashboard data - replace this with actual API calls
export const fetchAllDashboardData = async (): Promise<DashboardDataType> => {
  try {
    // In a real implementation, this would call your API endpoints
    // For example:
    // const topBarResponse = await fetch(`${API_BASE_URL}/topbar-data`);
    // const topBarData = await topBarResponse.json();
    
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
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

// Individual API calls for each data type
export const fetchTopBarData = async (): Promise<TopBarDataType> => {
  // Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(topBarData), 500);
  });
};

export const fetchHeaterData = async (): Promise<HeaterDataType[]> => {
  // Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(heaterData), 500);
  });
};

export const fetchNotificationData = async (): Promise<NotificationType[]> => {
  // Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(notificationData), 500);
  });
};

export const fetchTimeSeriesData = async (): Promise<{
  heaterTimeSeriesData: any[];
  temperatureTimeSeriesData: any[];
}> => {
  // Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      heaterTimeSeriesData,
      temperatureTimeSeriesData
    }), 500);
  });
};
