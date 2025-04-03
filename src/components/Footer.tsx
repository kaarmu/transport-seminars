
import React from 'react';
import config from '../data/config.json';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-[#0A2342] font-bold">{config.seriesTitle}</h3>
            <p className="text-sm text-gray-600">{config.department}</p>
            <p className="text-sm text-gray-600">{config.institution}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">Contact: <a href={`mailto:${config.contactEmail}`} className="text-[#2CA6A4] hover:underline">{config.contactEmail}</a></p>
            <p className="text-sm text-gray-600 mt-1">
              <a href={config.subscribeMailing} className="text-[#2CA6A4] hover:underline">
                Subscribe to mailing list
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              &copy; {new Date().getFullYear()} {config.department}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
