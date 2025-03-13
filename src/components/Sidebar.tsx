
import React from 'react';
import { Home, LineChart, MessageSquare, Settings, Thermometer, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <aside 
      className={`fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200 transition-all duration-300 z-20 
        ${isOpen ? 'w-64' : 'w-16'}`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex justify-end">
          <button 
            onClick={toggle} 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? (
              <ChevronLeft className="h-5 w-5 text-adani-navy" />
            ) : (
              <ChevronRight className="h-5 w-5 text-adani-navy" />
            )}
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            <li>
              <a href="#" className="sidebar-item active">
                <Home className="h-5 w-5" />
                {isOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <Thermometer className="h-5 w-5" />
                {isOpen && <span>HP Heaters</span>}
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <LineChart className="h-5 w-5" />
                {isOpen && <span>Analytics</span>}
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <MessageSquare className="h-5 w-5" />
                {isOpen && <span>Feedback</span>}
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <ul className="space-y-2">
            <li>
              <a href="#" className="sidebar-item">
                <Settings className="h-5 w-5" />
                {isOpen && <span>Settings</span>}
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <HelpCircle className="h-5 w-5" />
                {isOpen && <span>Help</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
