import React from 'react';
import { Home, MapPin, PlusCircle, Sparkles, BarChart3, Users } from 'lucide-react';
import { useAppState, type AppView } from '../../context/AppStateContext';

export const AndroidBottomNav: React.FC = () => {
  const { currentView, setCurrentView, setIsReportModalOpen } = useAppState();

  const navItems: { view: AppView; label: string; icon: React.ReactNode }[] = [
    { view: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { view: 'map', label: 'Live Map', icon: <MapPin className="w-5 h-5" /> },
    { view: 'challenges', label: 'Issues', icon: <BarChart3 className="w-5 h-5" /> },
    { view: 'demo', label: 'Demos', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F4F6F0]/95 backdrop-blur-md border-t border-[#D3DDD0] px-3 py-1.5 flex items-center justify-around shadow-lg"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      aria-label="Mobile Navigation"
    >
      {/* Home */}
      <button
        onClick={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          currentView === 'home' ? 'text-[#143D2B] font-bold' : 'text-[#6C7D73] hover:text-[#143D2B]'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Home</span>
      </button>

      {/* Live Map */}
      <button
        onClick={() => {
          setCurrentView('map');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          currentView === 'map' ? 'text-[#143D2B] font-bold' : 'text-[#6C7D73] hover:text-[#143D2B]'
        }`}
      >
        <MapPin className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Map</span>
      </button>

      {/* Primary Report Button in Center (Raised FAB style) */}
      <button
        onClick={() => setIsReportModalOpen(true)}
        className="flex flex-col items-center justify-center -mt-5 bg-[#143D2B] text-white p-3 rounded-full shadow-lg shadow-[#143D2B]/30 hover:scale-105 active:scale-95 transition-transform"
        title="Report a civic problem"
        aria-label="Report Challenge"
      >
        <PlusCircle className="w-6 h-6" />
        <span className="sr-only">Report</span>
      </button>

      {/* Issues / Challenges */}
      <button
        onClick={() => {
          setCurrentView('challenges');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          currentView === 'challenges' ? 'text-[#143D2B] font-bold' : 'text-[#6C7D73] hover:text-[#143D2B]'
        }`}
      >
        <BarChart3 className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Issues</span>
      </button>

      {/* Impact & Transparency */}
      <button
        onClick={() => {
          setCurrentView('impact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          currentView === 'impact' ? 'text-[#143D2B] font-bold' : 'text-[#6C7D73] hover:text-[#143D2B]'
        }`}
      >
        <Sparkles className="w-5 h-5 text-emerald-700" />
        <span className="text-[10px] mt-0.5">Impact</span>
      </button>
    </nav>
  );
};
