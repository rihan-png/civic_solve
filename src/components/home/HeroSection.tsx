import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { PotholeLeafletMap } from '../map/PotholeLeafletMap';

export const HeroSection: React.FC = () => {
  const { setCurrentView, setIsReportModalOpen } = useAppState();

  return (
    <section className="bg-[#F4F6F0] text-[#1A2520] pt-6 sm:pt-12 pb-10 sm:pb-16 border-b border-[#D8E2D5] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & CTAs - Clean Mobile Fit */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#4F6357] bg-[#E5EDE2] px-2.5 py-1 rounded-full border border-[#CBD9C7]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>GEOSPATIAL CIVIC ACTION & RESEARCH PLATFORM</span>
            </div>

            {/* Master Headline matching screenshot with responsive text scaling */}
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight text-[#14261C] leading-[1.15]">
              From local problems <br />
              to <span className="font-serif italic font-normal text-[#143D2B]">verified solutions.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-[#4E6155] leading-relaxed max-w-xl">
              Citizens report geotagged challenges. CivicSolve orchestrates swift field workers, university engineering teams, and government authorities with live GPS and date tracking.
            </p>

            {/* Action Buttons - Full-width on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1">
              {/* Primary Green CTA */}
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="bg-[#143D2B] hover:bg-[#1B4D36] text-white font-semibold px-5 py-3.5 rounded-xl shadow-sm flex items-center justify-center space-x-2 text-sm sm:text-base transition-all active:scale-98 cursor-pointer"
              >
                <span>Report a challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Soft Sage CTA */}
              <button
                onClick={() => {
                  setCurrentView('how-it-works');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#DCE5D8] hover:bg-[#D2DDD0] text-[#143D2B] font-semibold px-5 py-3.5 rounded-xl text-sm sm:text-base transition-all cursor-pointer border border-[#CCD8C8] text-center"
              >
                Explore the lifecycle
              </button>
            </div>

            {/* Trust Strip */}
            <div className="pt-1 flex items-center space-x-2 text-[11px] sm:text-xs text-[#526659]">
              <ShieldCheck className="w-4 h-4 text-[#143D2B] flex-shrink-0" />
              <span>Transparent AI triage · Verified Field Workers · Multi-Institute Collaboration</span>
            </div>

          </div>

          {/* Right Column: Real Geospatial Reported Potholes Leaflet Map Card */}
          <div className="lg:col-span-6 w-full">
            <PotholeLeafletMap heightClass="h-[340px] sm:h-[420px]" />
          </div>

        </div>
      </div>
    </section>
  );
};
