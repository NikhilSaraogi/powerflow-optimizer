
import React from 'react';
import ParameterCard from './ParameterCard';
import { Thermometer, Gauge, Wind, Droplet, Power, PowerOff } from 'lucide-react';

interface TopBarProps {
  ecoInletTemp: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  load: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  hdrPressure: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  feedWaterFlow: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
}

const TopBar: React.FC<TopBarProps> = ({ ecoInletTemp, load, hdrPressure, feedWaterFlow }) => {
  // Determine plant status based on load value
  const isPlantRunning = load.value > 0;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">
      <ParameterCard 
        title="Eco Inlet Temperature" 
        value={ecoInletTemp.value} 
        unit={ecoInletTemp.unit} 
        status={ecoInletTemp.status}
        icon={<Thermometer className="h-5 w-5 text-green-500" />}
        valueClassName="text-blue-700"
      />
      <ParameterCard 
        title="Load" 
        value={load.value} 
        unit={load.unit} 
        status={load.status}
        icon={<Gauge className="h-5 w-5 text-blue-500" />}
        valueClassName="text-blue-700"
      />
      <ParameterCard 
        title="HDR Pressure" 
        value={hdrPressure.value} 
        unit={hdrPressure.unit} 
        status={hdrPressure.status}
        icon={<Wind className="h-5 w-5 text-green-500" />}
        valueClassName="text-blue-700"
      />
      <ParameterCard 
        title="Feed Water Flow" 
        value={feedWaterFlow.value} 
        unit={feedWaterFlow.unit} 
        status={feedWaterFlow.status}
        icon={<Droplet className="h-5 w-5 text-blue-500" />}
        valueClassName="text-blue-700"
      />
      <div className={`bg-white rounded-lg shadow-md p-3 border border-gray-100 flex flex-col items-center justify-center ${isPlantRunning ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <div className="text-sm font-medium text-gray-600 mb-1">Plant Status</div>
        <div className="flex items-center gap-2">
          {isPlantRunning ? (
            <>
              <Power className="h-6 w-6 text-green-500" />
              <span className="text-green-600 font-semibold">Running</span>
            </>
          ) : (
            <>
              <PowerOff className="h-6 w-6 text-red-500" />
              <span className="text-red-600 font-semibold">Shutdown</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
