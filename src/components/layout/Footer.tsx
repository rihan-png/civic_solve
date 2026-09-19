import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';

export const Footer: React.FC = () => {
  const { setCurrentView } = useAppState();

  return (
    <footer className="bg-[#18261E] text-[#B0C3B8] text-xs pt-12 pb-16 border-t border-[#293D31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & MoHUA Tag */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#143D2B] border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                CivicSolve
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                Government of India · 2026
              </span>
            </div>

            <p className="text-[#96ADA0] leading-relaxed max-w-md">
              National Geospatial Civic Problem-Solving Platform connecting citizens, municipal administrative officers, university engineering research teams, and verified field workers for rapid, accountable civic remediation.
            </p>

            <div className="flex items-center space-x-2 pt-1 text-[11px] text-[#A6BCB0]">
              <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Ministry of Housing and Urban Affairs · National Civic Network</span>
            </div>
          </div>

          {/* Operational Portals */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Operational Portals
            </h4>
            <ul className="space-y-1.5 text-[#96ADA0]">
              <li>
                <button 
                  onClick={() => setCurrentView('admin-dashboard')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  🏛️ Urban Local Body Admin Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('ngo-dashboard')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  🛠️ Field Worker & Verification
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('university-workspace')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  🎓 University Research Workspace
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('challenges')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  📢 Public Challenge Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Compliance */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Government Standards
            </h4>
            <ul className="space-y-1.5 text-[#96ADA0]">
              <li>Smart Cities Mission Architecture</li>
              <li>Digital India Open Standards</li>
              <li>GIGW Compliant Web Design</li>
              <li>PostGIS Open Geospatial Consortium (OGC)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Minimal Copyright Bar */}
        <div className="pt-6 border-t border-[#293D31] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-[#7E9689]">
          <p className="w-full text-center">
            © 2026 CivicSolve · National Geospatial Civic Problem-Solving Platform · Government of India
          </p>
        </div>

      </div>
    </footer>
  );
};
