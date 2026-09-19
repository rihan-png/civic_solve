import React from 'react';

export const GovernmentBanner: React.FC = () => {
  return (
    <header className="w-full bg-[#15231B] text-[#D8E3DB] border-b border-[#2A3F33] select-none">
      {/* Top Official Tricolor Ribbon */}
      <div className="h-1 w-full bg-tricolor-gradient" />

      {/* Main Official Banner Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
        {/* Left: National Emblem + Government of India Tag */}
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          {/* Ashoka Stambh (State Emblem of India) Vector SVG */}
          <svg 
            className="w-4 h-6 sm:w-5 sm:h-7 text-[#FFD700] flex-shrink-0 drop-shadow-sm" 
            viewBox="0 0 24 32" 
            fill="currentColor"
            aria-label="National Emblem of India"
          >
            <path d="M12 2C9.5 2 8 3.5 8 5.5c0 .7.2 1.4.6 2C6.8 8.1 5.5 9.7 5.5 11.5c0 1.2.5 2.2 1.3 3-.8.8-1.3 1.9-1.3 3.1 0 2 1.5 3.7 3.5 4.1v1.8H7v2h10v-2h-2v-1.8c2-.4 3.5-2.1 3.5-4.1 0-1.2-.5-2.3-1.3-3.1.8-.8 1.3-1.8 1.3-3 0-1.8-1.3-3.4-3.1-4 .4-.6.6-1.3.6-2C16 3.5 14.5 2 12 2zm0 2c1.4 0 2 .9 2 1.5s-.6 1.5-2 1.5-2-.9-2-1.5.6-1.5 2-1.5zm-3.5 5.5c.8 0 1.5.7 1.5 1.5S9.3 12.5 8.5 12.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm7 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zM12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 5.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm8 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zM12 17c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
          </svg>
          
          <div className="leading-tight truncate">
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-white tracking-wide text-[11px] sm:text-xs">
                भारत सरकार
              </span>
              <span className="text-[#6D8577]">|</span>
              <span className="font-semibold text-white tracking-wide text-[11px] sm:text-xs">
                Government of India
              </span>
            </div>
            <p className="text-[10px] text-[#A6BCB0] hidden md:block truncate">
              Ministry of Housing and Urban Affairs · आवासन और शहरी कार्य मंत्रालय
            </p>
          </div>

          {/* Smart Cities Mission Tag (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-2 pl-2 border-l border-[#2F473A]">
            <span className="bg-[#1C3326] text-[#A7F3D0] border border-[#2B4B38] px-2 py-0.5 rounded text-[10px] font-medium">
              Smart Cities Mission
            </span>
          </div>
        </div>

        {/* Right: National Portal Status Tag */}
        <div className="flex items-center space-x-2 text-[11px] flex-shrink-0">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#1C3326] border border-[#2B4B38] text-[#A7F3D0]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-[10px] tracking-wide whitespace-nowrap">
              National Civic Network · 2026
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
