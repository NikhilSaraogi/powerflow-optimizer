
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, LineChartIcon, Gauge, MessageSquareText, Settings, FileText } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div 
      className={`fixed h-full bg-adani-navy text-white transition-all duration-300 ease-in-out z-10 ${isOpen ? 'w-64' : 'w-16'}`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-adani-navy-light">
          <h2 className={`text-xl font-bold whitespace-nowrap overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            Heater Optimization
          </h2>
        </div>
        
        <nav className="flex-1 py-4 px-2">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-all hover:bg-adani-blue/60 ${isActive ? 'bg-adani-blue' : ''}`
                }
              >
                <HomeIcon className="h-5 w-5" />
                <span className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-all hover:bg-adani-blue/60 ${isActive ? 'bg-adani-blue' : ''}`
                }
              >
                <LineChartIcon className="h-5 w-5" />
                <span className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  Analytics
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-all hover:bg-adani-blue/60 ${isActive ? 'bg-adani-blue' : ''}`
                }
              >
                <FileText className="h-5 w-5" />
                <span className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  Reports
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-all hover:bg-adani-blue/60 ${isActive ? 'bg-adani-blue' : ''}`
                }
              >
                <MessageSquareText className="h-5 w-5" />
                <span className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  Feedback
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-adani-navy-light">
          <NavLink
            to="/settings"
            className={({ isActive }) => 
              `flex items-center p-3 rounded-lg transition-all hover:bg-adani-blue/60 ${isActive ? 'bg-adani-blue' : ''}`
            }
          >
            <Settings className="h-5 w-5" />
            <span className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              Settings
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
