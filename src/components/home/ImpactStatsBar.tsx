import React from 'react';
import { PLATFORM_STATS } from '../../data/mockData';
import { 
  FileText, 
  CheckCircle2, 
  FolderGit2, 
  GraduationCap, 
  HeartHandshake, 
  Rocket, 
  Award, 
  Users 
} from 'lucide-react';

export const ImpactStatsBar: React.FC = () => {
  const stats = [
    { label: 'Reports Logged', value: PLATFORM_STATS.totalSubmitted.toLocaleString(), icon: <FileText className="w-4 h-4 text-[#143D2B]" /> },
    { label: 'AI Verified', value: PLATFORM_STATS.verifiedChallenges.toLocaleString(), icon: <CheckCircle2 className="w-4 h-4 text-emerald-700" /> },
    { label: 'Active Projects', value: PLATFORM_STATS.projectsInitiated.toLocaleString(), icon: <FolderGit2 className="w-4 h-4 text-emerald-800" /> },
    { label: 'Universities', value: PLATFORM_STATS.universitiesConnected.toLocaleString(), icon: <GraduationCap className="w-4 h-4 text-[#143D2B]" /> },
    { label: 'Community NGOs', value: PLATFORM_STATS.communityOrganizations.toLocaleString(), icon: <HeartHandshake className="w-4 h-4 text-emerald-700" /> },
    { label: 'Industry Partners', value: PLATFORM_STATS.industryStartupPartners.toLocaleString(), icon: <Rocket className="w-4 h-4 text-amber-700" /> },
    { label: 'Potholes Fixed', value: PLATFORM_STATS.solutionsPiloted.toLocaleString(), icon: <Award className="w-4 h-4 text-emerald-800" /> },
    { label: 'Beneficiaries', value: '485,000+', icon: <Users className="w-4 h-4 text-[#143D2B]" /> }
  ];

  return (
    <section className="bg-[#EBF1E8] border-b border-[#D8E2D5] py-5 sm:py-7 relative text-[#1E3024]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 mb-4 border-b border-[#D5E1D1] pb-2.5">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#143D2B]">
              National Civic Action & Resolution Metrics
            </h3>
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#4E6155] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#CAD8C6]">
            Smart Cities Mission & State Geospatial Grid
          </span>
        </div>

        {/* Responsive Grid that NEVER squeezes on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 w-full">
          {stats.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white/90 border border-[#CBD7C6] rounded-xl p-2.5 sm:p-3 text-center hover:shadow-sm hover:border-[#143D2B]/30 transition-all flex flex-col items-center justify-center min-w-0 w-full"
            >
              <div className="flex items-center justify-center mb-1">
                {item.icon}
              </div>
              <div className="text-base sm:text-lg font-extrabold text-[#143D2B] tracking-tight truncate w-full">
                {item.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#55695B] font-medium leading-tight mt-0.5 truncate w-full">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
