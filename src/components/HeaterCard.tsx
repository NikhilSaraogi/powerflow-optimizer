
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface HeaterData {
  id: number;
  name: string;
  heatLoad: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  flow: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  ttd: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  dca: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  tr: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  heaterLevel: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  enthalpyTrip: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  enthalpyFwInlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  enthalpyFwOutlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  enthalpyExtraction: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  fwTempInlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  fwTempOutlet: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  extractionTemp: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  extractionPressure: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  heaterLevel: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
}

interface HeaterCardProps {
  data: HeaterData;
}

const HeaterCard: React.FC<HeaterCardProps> = ({ data }) => {
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'healthy':
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Optimal</span>;
      case 'warning':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Needs Attention</span>;
      case 'critical':
        return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Critical</span>;
      default:
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Optimal</span>;
    }
  };

  const getBorderColor = (status: string) => {
    switch(status) {
      case 'healthy': return 'border-l-4 border-green-500';
      case 'warning': return 'border-l-4 border-yellow-500';
      case 'critical': return 'border-l-4 border-red-500';
      default: return 'border-l-4 border-green-500';
    }
  };

  const getChangeIcon = (change?: number) => {
    if (!change) return null;
    if (change > 0) return <ArrowUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <ArrowDown className="h-4 w-4 text-red-500" />;
    return null;
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md border ${getBorderColor(data.heatLoad.status)}`}>
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
        {getStatusBadge(data.heatLoad.status)}
      </div>
      
      <div className="grid grid-cols-2 gap-0">
        {/* Heat Loading & Flow */}
        <div className="p-4 bg-gray-50">
          <h3 className="text-sm text-gray-500 mb-1">Heat Loading</h3>
          <h3 className="text-sm text-gray-500">Flow</h3>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-gray-800">{data.flow.value}</span>
            <span className="text-sm ml-1 text-gray-600">{data.flow.unit}</span>
            <span className="ml-2">{getChangeIcon(data.flow.change)}</span>
          </div>
        </div>
        
        {/* TTD */}
        <div className="p-4 bg-gray-50">
          <h3 className="text-sm text-gray-500 mb-1">TTD</h3>
          <div className="flex items-center mt-3">
            <span className="text-2xl font-bold text-gray-800">{data.ttd.value}</span>
            <span className="text-sm ml-1 text-gray-600">{data.ttd.unit}</span>
            <span className="ml-2">{getChangeIcon(data.ttd.change)}</span>
          </div>
        </div>
        
        {/* DCA */}
        <div className="p-4 bg-gray-50 border-t">
          <h3 className="text-sm text-gray-500 mb-1">DCA</h3>
          <div className="flex items-center mt-3">
            <span className="text-2xl font-bold text-gray-800">{data.dca.value}</span>
            <span className="text-sm ml-1 text-gray-600">{data.dca.unit}</span>
            <span className="ml-2">{getChangeIcon(data.dca.change)}</span>
          </div>
        </div>
        
        {/* TR */}
        <div className="p-4 bg-gray-50 border-t">
          <h3 className="text-sm text-gray-500 mb-1">Tr</h3>
          <div className="flex items-center mt-3">
            <span className="text-2xl font-bold text-gray-800">{data.tr.value}</span>
            <span className="text-sm ml-1 text-gray-600">{data.tr.unit}</span>
            <span className="ml-2">{getChangeIcon(data.tr.change)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2 border-b pb-1">Enthalpy Values</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">Trip:</span>
                <span className="font-medium text-gray-800">
                  {data.enthalpyTrip.value} {data.enthalpyTrip.unit}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">FW Inlet:</span>
                <span className="font-medium text-gray-800">
                  {data.enthalpyFwInlet.value} {data.enthalpyFwInlet.unit}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">FW Outlet:</span>
                <span className="font-medium text-gray-800">
                  {data.enthalpyFwOutlet.value} {data.enthalpyFwOutlet.unit}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Extraction:</span>
                <span className="font-medium text-gray-800">
                  {data.enthalpyExtraction.value} {data.enthalpyExtraction.unit}
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2 border-b pb-1">Temperature & Pressure</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">FW Inlet:</span>
                <span className="font-medium text-gray-800">
                  {data.fwTempInlet.value} {data.fwTempInlet.unit}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">FW Outlet:</span>
                <span className="font-medium text-gray-800">
                  {data.fwTempOutlet.value} {data.fwTempOutlet.unit}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Ext Temp:</span>
                <span className="font-medium text-gray-800">
                  {data.extractionTemp.value} {data.extractionTemp.unit}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Ext Press:</span>
                <span className="font-medium text-gray-800">
                  {data.extractionPressure.value} {data.extractionPressure.unit}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaterCard;
