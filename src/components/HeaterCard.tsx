
import React from 'react';
import ParameterCard from './ParameterCard';
import { Cpu, Droplet, Activity, Thermometer, TrendingUp } from 'lucide-react';

interface HeaterData {
  id: number;
  name: string;
  heatLoad: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  flow: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  ttd: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  dca: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
  tr: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical'; change?: number };
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
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in h-full">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-adani-navy">{data.name}</h2>
        <div className={`px-2 py-1 rounded-full text-xs font-medium 
          ${data.heaterLevel.status === 'healthy' ? 'bg-green-100 text-green-800' : 
            data.heaterLevel.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}`}>
          Level: {data.heaterLevel.value}{data.heaterLevel.unit}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <ParameterCard 
          title="Heat Load" 
          value={data.heatLoad.value} 
          unit={data.heatLoad.unit} 
          status={data.heatLoad.status}
          change={data.heatLoad.change}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <ParameterCard 
          title="Flow" 
          value={data.flow.value} 
          unit={data.flow.unit} 
          status={data.flow.status}
          change={data.flow.change}
          icon={<Droplet className="h-5 w-5" />}
        />
        <ParameterCard 
          title="TTD" 
          value={data.ttd.value} 
          unit={data.ttd.unit} 
          status={data.ttd.status}
          change={data.ttd.change}
          icon={<Activity className="h-5 w-5" />}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <ParameterCard 
          title="DCA" 
          value={data.dca.value} 
          unit={data.dca.unit} 
          status={data.dca.status}
          change={data.dca.change}
          icon={<Thermometer className="h-5 w-5" />}
        />
        <ParameterCard 
          title="TR" 
          value={data.tr.value} 
          unit={data.tr.unit} 
          status={data.tr.status}
          change={data.tr.change}
          icon={<Cpu className="h-5 w-5" />}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-md">
          <h3 className="text-sm font-medium text-gray-600 mb-2 border-b pb-1">Enthalpy Values</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span className="text-gray-600">Trip:</span>
              <span className={`font-medium ${data.enthalpyTrip.status === 'healthy' ? 'text-adani-blue' : 
                data.enthalpyTrip.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.enthalpyTrip.value} {data.enthalpyTrip.unit}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">FW Inlet:</span>
              <span className={`font-medium ${data.enthalpyFwInlet.status === 'healthy' ? 'text-adani-blue' : 
                data.enthalpyFwInlet.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.enthalpyFwInlet.value} {data.enthalpyFwInlet.unit}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">FW Outlet:</span>
              <span className={`font-medium ${data.enthalpyFwOutlet.status === 'healthy' ? 'text-adani-blue' : 
                data.enthalpyFwOutlet.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.enthalpyFwOutlet.value} {data.enthalpyFwOutlet.unit}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Extraction:</span>
              <span className={`font-medium ${data.enthalpyExtraction.status === 'healthy' ? 'text-adani-blue' : 
                data.enthalpyExtraction.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.enthalpyExtraction.value} {data.enthalpyExtraction.unit}
              </span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md">
          <h3 className="text-sm font-medium text-gray-600 mb-2 border-b pb-1">Temperature & Pressure</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span className="text-gray-600">FW Inlet:</span>
              <span className={`font-medium ${data.fwTempInlet.status === 'healthy' ? 'text-adani-blue' : 
                data.fwTempInlet.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.fwTempInlet.value} {data.fwTempInlet.unit}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">FW Outlet:</span>
              <span className={`font-medium ${data.fwTempOutlet.status === 'healthy' ? 'text-adani-blue' : 
                data.fwTempOutlet.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.fwTempOutlet.value} {data.fwTempOutlet.unit}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Ext Temp:</span>
              <span className={`font-medium ${data.extractionTemp.status === 'healthy' ? 'text-adani-blue' : 
                data.extractionTemp.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.extractionTemp.value} {data.extractionTemp.unit}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Ext Press:</span>
              <span className={`font-medium ${data.extractionPressure.status === 'healthy' ? 'text-adani-blue' : 
                data.extractionPressure.status === 'warning' ? 'text-adani-yellow' : 'text-adani-red'}`}>
                {data.extractionPressure.value} {data.extractionPressure.unit}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaterCard;
