import React, { useState } from 'react';
import { 
  Rocket, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Wrench, 
  Award, 
  HeartHandshake, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { INDUSTRY_PARTNERS_DATABASE } from '../../data/universitiesData';
import { useAppState } from '../../context/AppStateContext';

export const IndustryDashboard: React.FC = () => {
  const { challenges, setSelectedChallenge, setCurrentView } = useAppState();
  const [selectedPartner, setSelectedPartner] = useState(INDUSTRY_PARTNERS_DATABASE[1]); // JalDrishti IoT
  const [offeredNotice, setOfferedNotice] = useState<string | null>(null);

  const handleOffer = (type: string, challengeTitle: string) => {
    setOfferedNotice(`Successfully registered offer: "${type}" for challenge "${challengeTitle}". University team notified.`);
    setTimeout(() => setOfferedNotice(null), 4000);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Rocket className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Industry, Startup & Corporate CSR Hub
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  {selectedPartner.name}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Public-private civic engineering co-development: provide IoT sensor toolkits, mentor university innovators, and scale field-tested infrastructure prototypes.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={selectedPartner.id}
              onChange={(e) => {
                const found = INDUSTRY_PARTNERS_DATABASE.find(p => p.id === e.target.value);
                if (found) setSelectedPartner(found);
              }}
              className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-3 py-2"
            >
              {INDUSTRY_PARTNERS_DATABASE.map((p) => (
                <option key={p.id} value={p.id}>{p.name} ({p.type})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Notice Banner */}
        {offeredNotice && (
          <div className="bg-emerald-950 border border-emerald-500 p-4 rounded-xl text-xs text-emerald-300 flex items-center space-x-2 shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{offeredNotice}</span>
          </div>
        )}

        {/* 10 Contribution Types Bar */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Industry Stakeholder Contribution Spectrum (National Civic Framework)
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              'Technology & APIs',
              'Engineering Mentorship',
              'Hardware & Sensor Kits',
              'Software & Cloud Telemetry',
              'Lab & Stress Testing',
              'Pilot Deployment Support',
              'Pilot Manufacturing',
              'Commercial Scaling',
              'CSR Strategic Funding',
              'Field Distribution'
            ].map((c, i) => (
              <span key={i} className="text-xs bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{c}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Partner Opportunity Spotlight */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                Featured Innovation Opportunity
              </span>
              <h3 className="text-xl font-extrabold text-white mt-1.5">
                Low-Cost Rural Optical Water Fluoride Telemetry System
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Angara Tribal Block | Linked to BIT Mesra Capstone Project #{challenges[1].id}
              </p>
            </div>
            <span className="text-xs text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full font-bold">
              3 Hardware Kits Needed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Needed Capabilities:</span>
              <ul className="space-y-1 text-slate-200">
                <li>✓ IoT Sub-GHz / LoRa Telemetry</li>
                <li>✓ Optical Spectrophotometry probe</li>
                <li>✓ Solar power charge circuit</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Academic & NGO Partners:</span>
              <ul className="space-y-1 text-slate-200">
                <li>• BIT Mesra Water Lab (Dr. Ananya Sharma)</li>
                <li>• Vikas Bharti (32 households ready for pilot)</li>
                <li>• DWSD Jharkhand (Well sites authorized)</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Funding Status:</span>
              <p className="text-emerald-400 font-bold text-sm mt-1">₹1,80,000 DST/CSR Grant Secured</p>
              <span className="text-[10px] text-slate-400">Additional funding optional; technology expertise prioritized.</span>
            </div>
          </div>

          {/* 3 Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleOffer('Hardware / IoT Sensor Supply', 'Low-Cost Rural Water Telemetry')}
              className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg flex items-center space-x-1.5 shadow-md shadow-amber-600/20 transition-all cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>Offer Technology & Hardware</span>
            </button>

            <button
              onClick={() => handleOffer('Technical Mentorship', 'Low-Cost Rural Water Telemetry')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-700 flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-purple-400" />
              <span>Offer Mentorship</span>
            </button>

            <button
              onClick={() => handleOffer('Pilot Deployment Sponsorship', 'Low-Cost Rural Water Telemetry')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-700 flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Support Pilot Deployment</span>
            </button>
          </div>
        </div>

        {/* Other Active Innovation Opportunities */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Browse Other Industry & CSR Co-Development Challenges
              </h3>
              <p className="text-xs text-slate-400">
                Filter by technical domain (Solar, Agriculture, Clean Water, Air Quality)
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {challenges.slice(2).map((ch) => (
              <div key={ch.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-cyan-400">{ch.id}</span>
                    <span className="text-xs text-slate-400">● {ch.villageOrWard}, {ch.district}</span>
                    <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-slate-800 text-slate-300">
                      {ch.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{ch.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{ch.description}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedChallenge(ch);
                    setCurrentView('challenge-detail');
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-semibold px-4 py-2 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer self-start md:self-center"
                >
                  <span>Inspect Spec</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
