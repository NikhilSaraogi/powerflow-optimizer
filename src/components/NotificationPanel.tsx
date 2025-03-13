
import React from 'react';
import { Bell, AlertTriangle, CheckCircle2, Info, ThermometerIcon } from 'lucide-react';

interface Notification {
  id: string;
  type: 'recommendation' | 'rca' | 'alert';
  title: string;
  message: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
}

interface NotificationPanelProps {
  notifications: Notification[];
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ notifications }) => {
  // Filter notifications by type
  const recommendations = notifications.filter(n => n.type === 'recommendation');
  const alerts = notifications.filter(n => n.type === 'rca' || n.type === 'alert');
  
  const renderIcon = (type: Notification['type'], priority: Notification['priority']) => {
    if (type === 'recommendation') {
      return <CheckCircle2 className="h-5 w-5 text-adani-green" />;
    } else if (type === 'rca') {
      return <Info className="h-5 w-5 text-adani-blue" />;
    } else {
      return <AlertTriangle className={`h-5 w-5 ${
        priority === 'high' ? 'text-adani-red' : 
        priority === 'medium' ? 'text-adani-yellow' : 
        'text-adani-blue'
      }`} />;
    }
  };
  
  // Function to highlight predicted values in message
  const highlightMessage = (message: string) => {
    // Look for patterns like "eco inlet temperature of 223.1°C" or "heater level at 52%"
    const levelPattern = /(\d+\.?\d*)%/g;
    const tempPattern = /(\d+\.?\d*)°C/g;
    
    return message
      .replace(levelPattern, '<span class="font-semibold text-adani-blue">$&</span>')
      .replace(tempPattern, '<span class="font-semibold text-adani-green">$&</span>');
  };
  
  return (
    <div className="grid grid-cols-1 gap-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 bg-adani-blue text-white font-medium flex items-center">
          <CheckCircle2 className="h-5 w-5 mr-2" />
          Recommendations
        </div>
        <div className="max-h-[300px] overflow-y-auto p-4">
          {recommendations.length > 0 ? (
            <ul className="space-y-4">
              {recommendations.map(notification => (
                <li key={notification.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  {renderIcon(notification.type, notification.priority)}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-adani-navy">{notification.title}</h4>
                      <span className="text-xs text-gray-500">{notification.timestamp}</span>
                    </div>
                    <p 
                      className="text-sm text-gray-600" 
                      dangerouslySetInnerHTML={{ __html: highlightMessage(notification.message) }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 py-4">No recommendations at this time</p>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 bg-adani-navy text-white font-medium flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          RCA & Alerts
        </div>
        <div className="max-h-[300px] overflow-y-auto p-4">
          {alerts.length > 0 ? (
            <ul className="space-y-4">
              {alerts.map(notification => (
                <li key={notification.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  {renderIcon(notification.type, notification.priority)}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-adani-navy flex items-center">
                        {notification.title}
                        {notification.priority === 'high' && (
                          <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs">Critical</span>
                        )}
                      </h4>
                      <span className="text-xs text-gray-500">{notification.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 py-4">No alerts at this time</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
