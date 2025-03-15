
import React from 'react';
import { Thermometer, BarChart2, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

interface ParameterCardProps {
  title: string;
  value: string | number;
  unit: string;
  change?: number;
  status?: 'healthy' | 'warning' | 'critical';
  icon?: React.ReactNode;
}

const ParameterCard: React.FC<ParameterCardProps> = ({ 
  title, 
  value, 
  unit, 
  change,
  status = 'healthy',
  icon = <Thermometer className="h-5 w-5" />
}) => {
  const getStatusClass = () => {
    switch(status) {
      case 'healthy': return 'status-healthy';
      case 'warning': return 'status-warning';
      case 'critical': return 'status-critical';
      default: return 'status-healthy';
    }
  };
  
  return (
    <div className="parameter-card group animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-full bg-gray-100 group-hover:bg-adani-gray transition-colors ${getStatusClass()}`}>
            {icon}
          </div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        </div>
        
        {change !== undefined && (
          <div className={`flex items-center text-xs ${change >= 0 ? 'text-adani-green' : 'text-adani-red'}`}>
            {change >= 0 ? <ArrowUp className="h-3 w-3 mr-0.5" /> : <ArrowDown className="h-3 w-3 mr-0.5" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="parameter-value">{value}</span>
        <span className="text-xs text-gray-500">{unit}</span>
      </div>
    </div>
  );
};

export default ParameterCard;
