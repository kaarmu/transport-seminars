
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import config from '../data/config.json';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-[#0A2342] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-xl font-bold">{config.seriesTitle}</Link>
            <span className="text-sm ml-2 text-gray-300 hidden md:inline-block">
              {config.department}
            </span>
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-[#2CA6A4] transition-colors ${
                location.pathname === '/' ? 'font-bold text-[#2CA6A4]' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/schedule" 
              className={`hover:text-[#2CA6A4] transition-colors ${
                location.pathname === '/schedule' ? 'font-bold text-[#2CA6A4]' : ''
              }`}
            >
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
