
import React from 'react';
import { Menu, Bell, Calendar, MapPin } from 'lucide-react';
import adaniLogo from '../assets/adani-logo.png';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <header className="glassmorphism sticky top-0 z-10 flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5 text-adani-navy" />
        </button>
        
        <div className="flex items-center gap-2">
          <img src={adaniLogo} alt="Adani Power Logo" className="h-8" />
          <div className="flex flex-col">
            <h1 className="font-bold text-adani-blue text-lg leading-tight">Adani Power</h1>
            <p className="text-xs text-adani-navy">HP Heater Optimization</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-adani-navy">
          <Calendar className="h-4 w-4" />
          <span>{currentTime.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-adani-navy">
          <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-adani-navy">
          <MapPin className="h-4 w-4" />
          <span>Mundra, Gujarat</span>
        </div>
        
        <div className="relative">
          <Bell className="h-5 w-5 text-adani-navy hover:text-adani-blue cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-adani-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
