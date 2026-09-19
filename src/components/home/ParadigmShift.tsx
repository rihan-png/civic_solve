import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ParadigmShift: React.FC = () => {
  return (
    <section className="bg-[#EBF1E8] py-14 border-b border-[#D8E2D5] text-[#1E3024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs font-bold text-[#143D2B] uppercase tracking-wider bg-[#D5E2D1] border border-[#BFD0BA] px-3 py-1 rounded-full">
            The Paradigm Shift
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14261C]">
            Why CivicSolve?
          </h2>
          <p className="text-[#55695B] text-xs sm:text-sm">
            Moving from passive bureaucratic complaint ticketing to an active societal innovation and civic intelligence platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traditional System Card */}
          <div className="bg-white/80 border border-[#CBD7C6] rounded-2xl p-6 space-y-4">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#D5E1D1]">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#14261C]">Traditional Grievance Portals</h3>
                <p className="text-xs text-[#6C7E72]">Standard complaint routing bottleneck</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#55695B]">
              <span className="bg-[#F4F6F0] px-2.5 py-1 rounded-md border border-[#CBD7C6] text-red-700 font-medium">
                Complaint
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="bg-[#F4F6F0] px-2.5 py-1 rounded-md border border-[#CBD7C6]">
                Ticket #
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="bg-[#F4F6F0] px-2.5 py-1 rounded-md border border-[#CBD7C6]">
                Department Dump
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="bg-[#F4F6F0] px-2.5 py-1 rounded-md border border-[#CBD7C6] text-gray-400">
                Paper Closure
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-[#4F6255]">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✕</span>
                <span><strong>Duplicate Ticket Overload:</strong> 50 citizens reporting the same pothole create 50 separate tickets, overwhelming junior municipal staff.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✕</span>
                <span><strong>Zero Research Connection:</strong> Complex challenges (arsenic water, crop diseases) are repeatedly assigned to clerks who lack technological capabilities.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✕</span>
                <span><strong>Unverified Paper Resolutions:</strong> Contractors mark issues "resolved" without objective computer vision verification or citizen sign-off.</span>
              </li>
            </ul>
          </div>

          {/* CivicSolve Platform Card */}
          <div className="bg-white border-2 border-[#143D2B] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#D5E1D1]">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#143D2B] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#143D2B]">CivicSolve Collaborative Intelligence</h3>
                <p className="text-xs text-[#55695B]">PostGIS Clustering + Quadruple Helix Solutions</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
              <span className="bg-[#DCE5D8] px-2.5 py-1 rounded-md border border-[#CAD8C5] text-[#143D2B]">
                Citizen Voice
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              <span className="bg-[#DCE5D8] px-2.5 py-1 rounded-md border border-[#CAD8C5] text-[#143D2B]">
                AI Cluster
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              <span className="bg-[#143D2B] text-white px-2.5 py-1 rounded-md">
                HEI + ULB
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              <span className="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md border border-emerald-300">
                CV Verified
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-[#304537]">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Autonomous PostGIS Deduplication:</strong> Consolidates duplicate citizen reports into 1 clustered incident, saving 88% municipal triage time.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Multi-Stakeholder Innovation:</strong> Dispatches complex engineering problems to 480+ universities and student researchers for field validation.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-700 font-bold">✓</span>
                <span><strong>Transparent Before/After AI Audit:</strong> Requires ground photo validation and citizen satisfaction before closing.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
