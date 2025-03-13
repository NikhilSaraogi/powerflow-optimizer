
import React from 'react';
import ParameterCard from './ParameterCard';
import { Thermometer, Wind, Gauge, Droplet } from 'lucide-react';

interface TopBarProps {
  ecoInletTemp: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  load: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  hdrPressure: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
  feedWaterFlow: { value: number; unit: string; status: 'healthy' | 'warning' | 'critical' };
}

const TopBar: React.FC<TopBarProps> = ({ ecoInletTemp, load, hdrPressure, feedWaterFlow }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <ParameterCard 
        title="Eco Inlet Temperature" 
        value={ecoInletTemp.value} 
        unit={ecoInletTemp.unit} 
        status={ecoInletTemp.status}
        icon={<Thermometer className="h-5 w-5" />}
      />
      <ParameterCard 
        title="Load" 
        value={load.value} 
        unit={load.unit} 
        status={load.status}
        icon={<Gauge className="h-5 w-5" />}
      />
      <ParameterCard 
        title="HDR Pressure" 
        value={hdrPressure.value} 
        unit={hdrPressure.unit} 
        status={hdrPressure.status}
        icon={<Wind className="h-5 w-5" />}
      />
      <ParameterCard 
        title="Feed Water Flow" 
        value={feedWaterFlow.value} 
        unit={feedWaterFlow.unit} 
        status={feedWaterFlow.status}
        icon={<Droplet className="h-5 w-5" />}
      />
    </div>
  );
};

export default TopBar;
