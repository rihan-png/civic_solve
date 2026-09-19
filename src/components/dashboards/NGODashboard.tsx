import React, { useState } from 'react';
import { 
  HeartHandshake, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Camera, 
  FileText, 
  Plus, 
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { NGOS_DATABASE } from '../../data/universitiesData';
import { useAppState } from '../../context/AppStateContext';

export const NGODashboard: React.FC = () => {
  const { challenges, setSelectedChallenge, setCurrentView } = useAppState();
  const [selectedNGO, setSelectedNGO] = useState(NGOS_DATABASE[0]);

  // NGO-relevant challenges (Water, Road Safety, Child Welfare)
  const relevantChallenges = challenges.filter(c => 
    c.category === 'Water & Sanitation' || c.category === 'Road & Infrastructure' || c.category === 'Agriculture & Irrigation'
  );

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-teal-600/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  NGO & Grassroots Civil Society Portal
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  {selectedNGO.name}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Empowering registered NGOs and grassroots organizations to conduct ground-truth field audits, verify geotagged civic defects, and coordinate local citizen relief.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={selectedNGO.id}
              onChange={(e) => {
                const found = NGOS_DATABASE.find(n => n.id === e.target.value);
                if (found) setSelectedNGO(found);
              }}
              className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-3 py-2"
            >
              {NGOS_DATABASE.map((n) => (
                <option key={n.id} value={n.id}>{n.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* NGO Overview Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Field Staff / Volunteers</span>
            <div className="text-2xl font-bold text-white mt-1">{selectedNGO.fieldStaffCount}</div>
            <span className="text-[10px] text-teal-400">Trained on Mobile GIS</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Active Communities</span>
            <div className="text-2xl font-bold text-teal-400 mt-1">{selectedNGO.activeCommunities}</div>
            <span className="text-[10px] text-slate-400">Hamlets & Wards</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Completed Validations</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{selectedNGO.completedValidations}</div>
            <span className="text-[10px] text-emerald-400">100% Certified</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Active HEI Co-Projects</span>
            <div className="text-2xl font-bold text-purple-400 mt-1">4</div>
            <span className="text-[10px] text-purple-300">With BIT & BAU</span>
          </div>
        </div>

        {/* Community Validation Spotlight Card */}
        <div className="bg-slate-950 border border-teal-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg shadow-teal-500/5">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-500/40 px-2.5 py-0.5 rounded-full">
                Active Field Validation Assignment
              </span>
              <h3 className="text-xl font-extrabold text-white mt-1.5">
                Water Contamination Field Audit — Angara Block (Incident #INC-1932)
              </h3>
            </div>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-bold">
              ✓ Field Visit Completed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Households Interviewed</span>
              <span className="text-lg font-bold text-white mt-0.5 block">32 Tribal Households</span>
              <span className="text-[10px] text-emerald-400">Pre & Post Survey Logged</span>
            </div>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Water Samples Collected</span>
              <span className="text-lg font-bold text-white mt-0.5 block">8 Borewell Samples</span>
              <span className="text-[10px] text-cyan-400">Tested in BIT Mesra Lab</span>
            </div>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Baseline Fluoride Level</span>
              <span className="text-lg font-bold text-rose-400 mt-0.5 block">3.8 mg/L (Critical)</span>
              <span className="text-[10px] text-slate-400">Safe Limit: 1.0 mg/L</span>
            </div>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Post-Filtration Result</span>
              <span className="text-lg font-bold text-emerald-400 mt-0.5 block">0.45 mg/L (Potable)</span>
              <span className="text-[10px] text-emerald-400">88% Reduction Verified</span>
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
            <span className="font-bold text-white block">Field Coordinator Observation:</span>
            <p className="italic text-slate-300">
              "Local residents initially relied on dysfunctional handpumps with severe reddish precipitate. Community women were trained to operate the solar electrocoagulation filter. Zero complaints of gastrointestinal discomfort or bad taste during the 30-day continuous trial."
            </p>
            <span className="text-[11px] text-slate-400 font-mono block">
              Logged by: Ashok Bhagat (National Coordinator, Vikas Bharti) on 2026-09-05
            </span>
          </div>
        </div>

        {/* Local Community Challenges Awaiting NGO Validation */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Discover Community Challenges in Your Coverage Area
              </h3>
              <p className="text-xs text-slate-400">
                Offer field validation, beneficiary mobilization, or join university innovation teams.
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {relevantChallenges.map((ch) => (
              <div key={ch.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-cyan-400">{ch.id}</span>
                    <span className="text-xs text-slate-400">● {ch.villageOrWard}, {ch.district}</span>
                    <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {ch.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{ch.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{ch.description}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setSelectedChallenge(ch);
                      setCurrentView('challenge-detail');
                    }}
                    className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Validate on Field</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
