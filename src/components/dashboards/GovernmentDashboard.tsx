import React, { useState } from 'react';
import { 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Layers, 
  MapPin, 
  ShieldAlert, 
  Filter, 
  ArrowRight, 
  Eye,
  Check,
  Send
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { JHARKHAND_DISTRICTS, PLATFORM_STATS } from '../../data/mockData';
import { useAppState } from '../../context/AppStateContext';

export const GovernmentDashboard: React.FC = () => {
  const { challenges, setSelectedChallenge, setCurrentView, setIsAIEngineModalOpen, setActiveAIChallengeId } = useAppState();

  const [selectedDistrict, setSelectedDistrict] = useState('All');

  // Domain distribution data for Pie Chart
  const domainData = [
    { name: 'Road & Infra', value: 3420, color: '#3b82f6' },
    { name: 'Water & Sanitation', value: 2890, color: '#06b6d4' },
    { name: 'Clean Energy', value: 1640, color: '#eab308' },
    { name: 'Agriculture', value: 1480, color: '#22c55e' },
    { name: 'Environment & Waste', value: 1250, color: '#10b981' },
    { name: 'Healthcare Access', value: 980, color: '#f43f5e' },
    { name: 'Education & Skill', value: 820, color: '#8b5cf6' }
  ];

  // District bar chart data
  const districtChartData = JHARKHAND_DISTRICTS.map(d => ({
    name: d.name.replace('East Singhbhum (Jamshedpur)', 'Jamshedpur'),
    total: d.total,
    verified: d.verified,
    resolved: d.resolved
  }));

  // Urgent triage items (High & Critical)
  const urgentQueue = challenges.filter(c => c.priority === 'CRITICAL' || c.priority === 'HIGH');

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Executive Header Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Government & Urban Local Body (ULB) Executive Portal
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  National Smart Cities Mission · 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                District-level civic infrastructure intelligence, autonomous severity triage, and Quadruple-Helix innovation deployment funnel.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-400">All 10 Districts Online</span>
          </div>
        </div>

        {/* Top Executive KPI Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Total Crowdsourced
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">
              {PLATFORM_STATS.totalSubmitted.toLocaleString()}
            </div>
            <span className="text-[10px] text-blue-400 font-medium">100% Ingested</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              AI Verified & Clustered
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
              {PLATFORM_STATS.verifiedChallenges.toLocaleString()}
            </div>
            <span className="text-[10px] text-emerald-400 font-medium">88% Noise Deduplicated</span>
          </div>

          <div className="bg-slate-950 border border-rose-900/40 rounded-xl p-4 text-center">
            <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block">
              Critical Safety Alerts
            </span>
            <div className="text-2xl sm:text-3xl font-black text-rose-400 mt-1">
              12
            </div>
            <span className="text-[10px] text-rose-400 font-medium">High priority triage</span>
          </div>

          <div className="bg-slate-950 border border-purple-900/40 rounded-xl p-4 text-center">
            <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider block">
              Active HEI Projects
            </span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 mt-1">
              64
            </div>
            <span className="text-[10px] text-purple-300 font-medium">BIT, NIT & IIT Labs</span>
          </div>

          <div className="bg-slate-950 border border-teal-900/40 rounded-xl p-4 text-center">
            <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block">
              Verified Solutions Deployed
            </span>
            <div className="text-2xl sm:text-3xl font-black text-teal-300 mt-1">
              1,240
            </div>
            <span className="text-[10px] text-teal-400 font-medium">CV Certified Sign-Off</span>
          </div>
        </div>

        {/* Project Funnel Pipeline */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              State-Wide Project Innovation Funnel
            </h3>
            <span className="text-xs text-slate-400">Quadruple Helix Conversion Funnel</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs">
            {[
              { stage: '1. Submitted', count: '12,480', color: 'bg-slate-900 text-slate-300' },
              { stage: '2. Verified', count: '8,920', color: 'bg-blue-950 text-blue-300' },
              { stage: '3. Clustered', count: '1,420', color: 'bg-cyan-950 text-cyan-300' },
              { stage: '4. Matched', count: '486 HEIs', color: 'bg-purple-950 text-purple-300' },
              { stage: '5. Prototype', count: '310 Units', color: 'bg-indigo-950 text-indigo-300' },
              { stage: '6. Pilot Trials', count: '180 Trials', color: 'bg-amber-950 text-amber-300' },
              { stage: '7. Deployed', count: '1,240 Sites', color: 'bg-emerald-950 text-emerald-300' },
              { stage: '8. Impact Cert.', count: '485k Citizens', color: 'bg-teal-950 text-teal-300 font-bold' }
            ].map((st, i) => (
              <div key={i} className={`p-3 rounded-xl border border-slate-800/80 ${st.color}`}>
                <span className="text-[10px] text-slate-400 block">{st.stage}</span>
                <span className="text-sm font-extrabold mt-1 block">{st.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Charts Grid: District Breakdown & Domain Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* District Bar Chart */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  District Challenge Density (Jharkhand)
                </h3>
                <p className="text-xs text-slate-400">Comparing Total Crowdsourced vs AI Verified by District</p>
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={districtChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Bar dataKey="total" name="Total Submitted" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="verified" name="Verified by AI" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Domain Distribution Donut */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Domain Distribution
              </h3>
              <p className="text-xs text-slate-400">Share across 7 core societal domains</p>
            </div>

            <div className="h-56 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={domainData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {domainData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              {domainData.slice(0, 6).map((d) => (
                <div key={d.name} className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></span>
                  <span className="text-slate-300 truncate">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actionable Urgent Triage Queue */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Actionable Work Queue — High & Critical Priority</span>
              </h3>
              <p className="text-xs text-slate-400">
                Sorted by Explainable Priority Score (Near schools, acute health risks, long unresolved)
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {urgentQueue.map((item) => (
              <div key={item.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
                      item.priority === 'CRITICAL' ? 'bg-rose-900/60 text-rose-300 border border-rose-500/40' : 'bg-amber-900/60 text-amber-300 border border-amber-500/40'
                    }`}>
                      {item.priority} Priority ({item.priorityScore}/100)
                    </span>
                    <span className="text-xs text-slate-400 font-mono">#{item.id}</span>
                    <span className="text-xs text-slate-400">● {item.district} ({item.villageOrWard})</span>
                  </div>

                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{item.description}</p>

                  <div className="text-[11px] text-slate-400 flex items-center space-x-3 pt-1">
                    <span>Assigned: <strong className="text-slate-200">{item.routing.primaryResolver.name}</strong></span>
                    <span>Affected: <strong className="text-cyan-400">{item.priorityBreakdown.affectedPopulation.toLocaleString()} citizens</strong></span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-start md:self-center">
                  <button
                    onClick={() => {
                      setActiveAIChallengeId(item.id);
                      setIsAIEngineModalOpen(true);
                    }}
                    className="bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>Inspect AI Engine</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedChallenge(item);
                      setCurrentView('challenge-detail');
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>View Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
