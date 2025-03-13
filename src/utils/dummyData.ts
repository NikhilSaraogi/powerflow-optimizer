export const topBarData = {
  ecoInletTemp: { value: 220.5, unit: "°C", status: "healthy" as const },
  load: { value: 660, unit: "MW", status: "healthy" as const },
  hdrPressure: { value: 170.2, unit: "bar", status: "healthy" as const },
  feedWaterFlow: { value: 1890, unit: "t/h", status: "healthy" as const }
};

export const heaterData = [
  {
    id: 1,
    name: "HP Heater 1",
    heatLoad: { value: 52.4, unit: "MW", status: "healthy" as const, change: 1.2 },
    flow: { value: 630, unit: "t/h", status: "healthy" as const, change: 0.5 },
    ttd: { value: 2.8, unit: "°C", status: "healthy" as const, change: -0.2 },
    dca: { value: 4.5, unit: "°C", status: "healthy" as const, change: 0.1 },
    tr: { value: 0.92, unit: "", status: "healthy" as const, change: 0.0 },
    enthalpyTrip: { value: 3260, unit: "kJ/kg", status: "healthy" as const },
    enthalpyFwInlet: { value: 983, unit: "kJ/kg", status: "healthy" as const },
    enthalpyFwOutlet: { value: 1066, unit: "kJ/kg", status: "healthy" as const },
    enthalpyExtraction: { value: 3140, unit: "kJ/kg", status: "healthy" as const },
    fwTempInlet: { value: 192.5, unit: "°C", status: "healthy" as const },
    fwTempOutlet: { value: 215.2, unit: "°C", status: "healthy" as const },
    extractionTemp: { value: 342.8, unit: "°C", status: "healthy" as const },
    extractionPressure: { value: 32.6, unit: "bar", status: "healthy" as const },
    heaterLevel: { value: 52, unit: "%", status: "healthy" as const }
  },
  {
    id: 2,
    name: "HP Heater 2",
    heatLoad: { value: 48.7, unit: "MW", status: "warning" as const, change: -2.3 },
    flow: { value: 625, unit: "t/h", status: "healthy" as const, change: 0.2 },
    ttd: { value: 3.6, unit: "°C", status: "warning" as const, change: 1.3 },
    dca: { value: 5.2, unit: "°C", status: "warning" as const, change: 0.8 },
    tr: { value: 0.89, unit: "", status: "warning" as const, change: -0.02 },
    enthalpyTrip: { value: 3180, unit: "kJ/kg", status: "warning" as const },
    enthalpyFwInlet: { value: 932, unit: "kJ/kg", status: "healthy" as const },
    enthalpyFwOutlet: { value: 1010, unit: "kJ/kg", status: "warning" as const },
    enthalpyExtraction: { value: 3050, unit: "kJ/kg", status: "warning" as const },
    fwTempInlet: { value: 178.3, unit: "°C", status: "healthy" as const },
    fwTempOutlet: { value: 198.6, unit: "°C", status: "warning" as const },
    extractionTemp: { value: 318.5, unit: "°C", status: "warning" as const },
    extractionPressure: { value: 25.8, unit: "bar", status: "warning" as const },
    heaterLevel: { value: 65, unit: "%", status: "warning" as const }
  },
  {
    id: 3,
    name: "HP Heater 3",
    heatLoad: { value: 45.1, unit: "MW", status: "critical" as const, change: -4.8 },
    flow: { value: 612, unit: "t/h", status: "warning" as const, change: -1.5 },
    ttd: { value: 4.2, unit: "°C", status: "critical" as const, change: 2.1 },
    dca: { value: 6.8, unit: "°C", status: "critical" as const, change: 2.2 },
    tr: { value: 0.83, unit: "", status: "critical" as const, change: -0.05 },
    enthalpyTrip: { value: 3020, unit: "kJ/kg", status: "critical" as const },
    enthalpyFwInlet: { value: 875, unit: "kJ/kg", status: "warning" as const },
    enthalpyFwOutlet: { value: 956, unit: "kJ/kg", status: "critical" as const },
    enthalpyExtraction: { value: 2980, unit: "kJ/kg", status: "critical" as const },
    fwTempInlet: { value: 162.4, unit: "°C", status: "warning" as const },
    fwTempOutlet: { value: 185.1, unit: "°C", status: "critical" as const },
    extractionTemp: { value: 302.6, unit: "°C", status: "critical" as const },
    extractionPressure: { value: 18.5, unit: "bar", status: "critical" as const },
    heaterLevel: { value: 78, unit: "%", status: "critical" as const }
  }
];

export const notificationData = [
  {
    id: "n1",
    type: "recommendation" as const,
    title: "Optimize HP Heater 2 Level",
    message: "Reduce heater level to 55% to improve heat transfer efficiency and lower TTD value.",
    timestamp: "10:32 AM",
    priority: "medium" as const
  },
  {
    id: "n2",
    type: "recommendation" as const,
    title: "Adjust HP Heater 3 Drain Control",
    message: "Increase drain flow rate by 5% to reduce heater level and improve heat transfer rate.",
    timestamp: "10:15 AM",
    priority: "high" as const
  },
  {
    id: "n3",
    type: "recommendation" as const,
    title: "Eco Inlet Temperature Recommendation",
    message: "Maintain current feed water flow rate to stabilize eco inlet temperature around 222°C.",
    timestamp: "09:45 AM",
    priority: "low" as const
  },
  {
    id: "n4",
    type: "rca" as const,
    title: "HP Heater 3 Performance Degradation",
    message: "Root cause analysis indicates possible tube fouling. Schedule inspection during next outage.",
    timestamp: "10:05 AM",
    priority: "medium" as const
  },
  {
    id: "n5",
    type: "alert" as const,
    title: "HP Heater 3 High Level",
    message: "Heater level exceeding optimal range. Check drain valve operation and control system.",
    timestamp: "10:22 AM",
    priority: "high" as const
  },
  {
    id: "n6",
    type: "alert" as const,
    title: "HP Heater 2 TTD Increasing",
    message: "Terminal temperature difference trending upward. Monitor for possible tube leakage.",
    timestamp: "09:58 AM",
    priority: "medium" as const
  }
];

export const heaterTimeSeriesData = [
  {
    name: "06:00",
    heater1: 51.8,
    heater2: 49.2,
    heater3: 46.5,
  },
  {
    name: "07:00",
    heater1: 52.0,
    heater2: 49.5,
    heater3: 47.2,
  },
  {
    name: "08:00",
    heater1: 52.2,
    heater2: 49.0,
    heater3: 46.8,
  },
  {
    name: "09:00",
    heater1: 52.3,
    heater2: 48.8,
    heater3: 45.8,
  },
  {
    name: "10:00",
    heater1: 52.4,
    heater2: 48.7,
    heater3: 45.1,
  },
  {
    name: "11:00",
    heater1: 52.5,
    heater2: 48.5,
    heater3: 44.5,
  },
];

export const temperatureTimeSeriesData = [
  {
    name: "06:00",
    fwInlet: 190.5,
    fwOutlet: 212.8,
    extraction: 340.2,
  },
  {
    name: "07:00",
    fwInlet: 191.2,
    fwOutlet: 213.5,
    extraction: 341.5,
  },
  {
    name: "08:00",
    fwInlet: 192.0,
    fwOutlet: 214.2,
    extraction: 342.0,
  },
  {
    name: "09:00",
    fwInlet: 192.2,
    fwOutlet: 214.6,
    extraction: 342.5,
  },
  {
    name: "10:00",
    fwInlet: 192.5,
    fwOutlet: 215.2,
    extraction: 342.8,
  },
  {
    name: "11:00",
    fwInlet: 192.8,
    fwOutlet: 215.5,
    extraction: 343.0,
  },
];
