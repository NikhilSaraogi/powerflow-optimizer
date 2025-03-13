
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface HeaterChartProps {
  data: any[];
  dataKeys: { key: string; color: string; name: string }[];
  title: string;
}

const HeaterChart: React.FC<HeaterChartProps> = ({ data, dataKeys, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in">
      <h3 className="text-lg font-semibold text-adani-navy mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#718096" fontSize={12} />
            <YAxis stroke="#718096" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '0.375rem',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Legend />
            {dataKeys.map((dataKey) => (
              <Line
                key={dataKey.key}
                type="monotone"
                dataKey={dataKey.key}
                name={dataKey.name}
                stroke={dataKey.color}
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HeaterChart;
