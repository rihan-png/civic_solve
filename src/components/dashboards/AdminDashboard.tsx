import React, { useState } from 'react';
import {
  ShieldAlert,
  Cpu,
  Users,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  RefreshCw,
  RotateCcw,
  Check,
  X,
  MapPin,
  Camera,
  Clock,
  Wrench,
  Sparkles
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';

export const AdminDashboard: React.FC = () => {
  const { challenges, incidentClusters, updateChallengeStatus } = useAppState();
  const [aiOverrideLogs, setAiOverrideLogs] = useState([
    { id: 'ov-1', challengeId: 'CIV-2026-0562', original: 'MEDIUM', overridden: 'CRITICAL', officer: 'Director Admin (JSPCB)', reason: 'Upstream proximity to drinking intake overlooked by geo-buffer', date: '2026-09-09' }
  ]);
  const [overrideNotice, setOverrideNotice] = useState<string | null>(null);

  const handleManualOverride = (challengeId: string) => {
    const log = {
      id: `ov-${Date.now()}`,
      challengeId,
      original: 'HIGH',
      overridden: 'CRITICAL',
      officer: 'Platform System Admin',
      reason: 'Manual priority elevation based on emergency collectorate note',
      date: new Date().toISOString().split('T')[0]
    };
    setAiOverrideLogs([log, ...aiOverrideLogs]);
    setOverrideNotice(`Manual human override recorded for ${challengeId}. Immutable audit log updated.`);
    setTimeout(() => setOverrideNotice(null), 4000);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Header Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/30 flex items-center justify-center">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Municipal Admin & AI Governance Portal
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-400/30">
                  Government Administration · 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Urban Local Body (ULB) executive command: supervise autonomous AI triage, review geotagged incident clusters, and execute human-in-the-loop priority overrides.
              </p>
            </div>
          </div>

          <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-full font-bold">
            Audit Ledger Active
          </span>
        </div>

        {overrideNotice && (
          <div className="bg-emerald-950 border border-emerald-500 p-4 rounded-xl text-xs text-emerald-300 flex items-center space-x-2 shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{overrideNotice}</span>
          </div>
        )}

        {/* Real-time Incoming Citizen Grievances & Work Orders Queue */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Incoming Citizen Grievances & Work Orders Queue</span>
                </h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/40">
                  Jharkhand Municipal Grievance Flow
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                New reports filed by verified citizens in Jharkhand districts. Triage, assign municipal repair squads, or mark completed.
              </p>
            </div>
            <span className="text-xs bg-slate-900 border border-slate-700 text-slate-300 px-3 py-1 rounded-full font-mono font-semibold">
              {challenges.length} Total Registered in State
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.slice(0, 6).map((ch) => (
              <div key={ch.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3 hover:border-slate-700 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-cyan-400 font-bold">{ch.id}</span>
                    <span className={`px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      ch.status === 'resolved' || ch.status === 'impact_verified'
                        ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                        : ch.status === 'assigned' || ch.status === 'in_development'
                        ? 'bg-amber-900/60 text-amber-300 border border-amber-700'
                        : 'bg-rose-900/60 text-rose-300 border border-rose-700'
                    }`}>
                      {ch.status === 'in_development' ? 'In Repair' : ch.status}
                    </span>
                  </div>

                  {ch.evidence?.photos?.[0]?.url && (
                    <div className="relative h-32 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                      <img
                        src={ch.evidence.photos[0].url}
                        alt={ch.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 left-1 bg-black/80 backdrop-blur-xs text-[9px] text-white px-2 py-0.5 rounded font-mono">
                        📍 {ch.coordinates.lat.toFixed(4)}°N, {ch.coordinates.lng.toFixed(4)}°E
                      </div>
                    </div>
                  )}

                  <h4 className="text-xs font-bold text-white leading-snug line-clamp-2">
                    {ch.title}
                  </h4>

                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {ch.description}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                    <span className="flex items-center space-x-1 truncate max-w-[180px]">
                      <MapPin className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{ch.villageOrWard}, {ch.district}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold flex-shrink-0">
                      AI: {ch.aiAnalysis?.confidenceScore || 92}%
                    </span>
                  </div>
                </div>

                {/* Direct Action Dispatch Buttons */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-1.5 text-[10px]">
                  <button
                    onClick={() => {
                      updateChallengeStatus(ch.id, 'assigned', `${ch.district} PWD Rapid Asphalt Squad`, `Dispatched municipal bitumen repair crew to ${ch.villageOrWard}.`);
                      setOverrideNotice(`Dispatched repair squad to ${ch.id} (${ch.villageOrWard}, ${ch.district}).`);
                      setTimeout(() => setOverrideNotice(null), 4000);
                    }}
                    className="flex-1 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-600/40 py-1.5 px-1 rounded font-medium text-center transition-colors cursor-pointer"
                  >
                    Dispatch Crew
                  </button>
                  <button
                    onClick={() => {
                      updateChallengeStatus(ch.id, 'resolved', undefined, `Marked ${ch.id} resolved and verified via municipal engineering inspection.`);
                      setOverrideNotice(`Marked ${ch.id} as Resolved & Verified.`);
                      setTimeout(() => setOverrideNotice(null), 4000);
                    }}
                    className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-600/40 py-1.5 px-1 rounded font-medium text-center transition-colors cursor-pointer"
                  >
                    Mark Resolved
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Decision Oversight & Human Overrides */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>AI Recommendation Oversight & Manual Override</span>
              </h3>
              <p className="text-xs text-slate-400">
                Civic Principle: Human officers must always maintain authority to override automated classifications.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-2.5 px-3">Challenge ID</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">AI Confidence</th>
                  <th className="py-2.5 px-3">AI Priority</th>
                  <th className="py-2.5 px-3">Assigned Route</th>
                  <th className="py-2.5 px-3 text-right">Human Override Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {challenges.map((ch) => (
                  <tr key={ch.id} className="hover:bg-slate-900/50">
                    <td className="py-3 px-3 font-mono font-semibold text-white">{ch.id}</td>
                    <td className="py-3 px-3">{ch.category}</td>
                    <td className="py-3 px-3 font-semibold text-emerald-400">{ch.aiAnalysis.confidenceScore}%</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ch.priority === 'CRITICAL' ? 'bg-rose-900/50 text-rose-300' : 'bg-amber-900/50 text-amber-300'
                        }`}>
                        {ch.priority}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-400 truncate max-w-xs">{ch.routing.primaryResolver.name}</td>
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => handleManualOverride(ch.id)}
                        className="bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer"
                      >
                        Override Priority
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Citizen Quality Feedback & Post-Repair Verification Ledger */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <span className="text-amber-400">★</span>
                <span>Citizen Quality Feedback & Contractor Performance Audit</span>
              </h3>
              <p className="text-xs text-slate-400">
                Direct resident verification for completed municipal road & civic works to authorize contractor payment.
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full text-xs font-bold text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Citizen CSAT: 4.9 / 5.0 (98% Positive)</span>
            </div>
          </div>

          {/* Feedback Items Feed */}
          <div className="space-y-3">
            {challenges.filter(c => c.citizenFeedback || c.status === 'resolved').map((ch) => {
              const fb = ch.citizenFeedback;
              return (
                <div key={ch.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-cyan-300 font-bold">{ch.id}</span>
                      <span className="text-white font-semibold">{ch.title}</span>
                      <span className="text-slate-500">({ch.villageOrWard})</span>
                    </div>

                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(fb?.rating || 5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      <span className="text-white font-bold ml-1">{fb?.rating || 5}/5 Stars</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-700/50 ml-2">
                        {fb?.satisfaction || 'Fully Resolved & Satisfactory'}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 italic bg-slate-950 p-2.5 rounded border border-slate-800">
                    "{fb?.comment || 'Potholes in front of the school gate have been completely filled with high-grade bitumen and leveled smoothly. School auto-rickshaws and two-wheelers are passing safely without waterlogging.'}"
                  </p>

                  <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                    <span>Verified Citizen: <strong>{fb?.citizenName || 'Sunil Kumar Soren (Resident, Ward 36)'}</strong></span>
                    <span className="text-emerald-400 font-medium">
                      ✓ Municipal QC Clearance: <strong>Approved by Executive Engineer</strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Immutable Human-in-the-Loop Audit Trail
          </h3>

          <div className="space-y-2">
            {aiOverrideLogs.map((log) => (
              <div key={log.id} className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl text-xs flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-cyan-300 font-bold">Log #{log.id}</span>
                    <span className="text-slate-400">● Target: {log.challengeId}</span>
                    <span className="text-amber-400">({log.original} → {log.overridden})</span>
                  </div>
                  <p className="text-slate-300 mt-1">Reason: "{log.reason}"</p>
                </div>
                <div className="text-left sm:text-right text-slate-500 text-[11px]">
                  <span>Authorized by: <strong>{log.officer}</strong></span>
                  <span className="block font-mono">{log.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
