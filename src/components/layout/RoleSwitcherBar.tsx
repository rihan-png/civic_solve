import React from 'react';
import { useAppState, type AppView } from '../../context/AppStateContext';
import type { UserRole } from '../../types';
import { User, Building2, GraduationCap, HeartHandshake, Briefcase, ShieldAlert } from 'lucide-react';

export const RoleSwitcherBar: React.FC = () => {
  const { activeRole, setActiveRole, currentView, setCurrentView } = useAppState();

  const personas: { role: UserRole; label: string; icon: React.ReactNode; defaultView: AppView }[] = [
    { role: 'citizen', label: 'Citizen', icon: <User className="w-3.5 h-3.5" />, defaultView: 'challenges' },
    { role: 'admin', label: 'Admin (ULB)', icon: <Building2 className="w-3.5 h-3.5" />, defaultView: 'admin-dashboard' },
    { role: 'ngo', label: 'Worker / Field', icon: <HeartHandshake className="w-3.5 h-3.5" />, defaultView: 'ngo-dashboard' },
    { role: 'university', label: 'University (HEI)', icon: <GraduationCap className="w-3.5 h-3.5" />, defaultView: 'university-workspace' },
    { role: 'government', label: 'Govt District Officer', icon: <ShieldAlert className="w-3.5 h-3.5" />, defaultView: 'government-dashboard' },
  ];

  return (
    <div className="bg-[#E9EFE6] border-b border-[#D5E1D1] px-4 py-1.5 text-xs text-[#324538]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-[#143D2B] uppercase tracking-wider text-[10px] hidden sm:inline">
            Demonstration Persona:
          </span>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {personas.map((p) => {
              const isActive = activeRole === p.role;
              return (
                <button
                  key={p.role}
                  onClick={() => {
                    setActiveRole(p.role);
                    if (currentView.includes('dashboard') || currentView.includes('workspace') || p.role === 'admin' || p.role === 'citizen') {
                      setCurrentView(p.defaultView);
                    }
                  }}
                  className={`flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#143D2B] text-white shadow-sm ring-1 ring-[#143D2B]'
                      : 'bg-white/80 text-[#304537] hover:bg-white border border-[#CBD7C6]'
                  }`}
                >
                  {p.icon}
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-[11px] text-[#55695B] hidden md:block">
          Active Role: <span className="text-[#143D2B] font-bold uppercase">{activeRole}</span>
        </div>
      </div>
    </div>
  );
};
