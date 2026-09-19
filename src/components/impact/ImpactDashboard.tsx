import React from 'react';
import { 
  TrendingUp, 
  GraduationCap
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line 
} from 'recharts';
import { PLATFORM_STATS } from '../../data/mockData';

export const ImpactDashboard: React.FC = () => {
  // Resolution reduction comparison data
  const resolutionTimelineData = [
    { month: 'Apr', traditionalDays: 68, civicsolveDays: 32 },
    { month: 'May', traditionalDays: 65, civicsolveDays: 26 },
    { month: 'Jun', traditionalDays: 64, civicsolveDays: 22 },
    { month: 'Jul', traditionalDays: 61, civicsolveDays: 19 },
    { month: 'Aug', traditionalDays: 60, civicsolveDays: 18.4 }
  ];

  // University Capstone Leaderboard
  const heiLeaderboard = [
    { name: 'BIT Mesra (Ranchi)', projects: 18, patents: 8, startups: 4, beneficiaries: '142,000' },
    { name: 'IIT (ISM) Dhanbad', projects: 26, patents: 14, startups: 5, beneficiaries: '185,000' },
    { name: 'NIT Jamshedpur', projects: 14, patents: 6, startups: 3, beneficiaries: '84,000' },
    { name: 'Birsa Agricultural University', projects: 11, patents: 4, startups: 2, beneficiaries: '48,000' },
    { name: 'Central University of Jharkhand', projects: 9, patents: 3, startups: 1, beneficiaries: '26,000' }
  ];

  const sdgs = [
    { num: 3, title: 'Good Health & Well-being', desc: 'Fluorosis & Arsenic filtration in Angara block' },
    { num: 6, title: 'Clean Water & Sanitation', desc: 'Decentralized electrocoagulation drinking plants' },
    { num: 7, title: 'Affordable & Clean Energy', desc: 'Ashram school solar microgrid retrofit' },
    { num: 9, title: 'Industry, Innovation & Infra', desc: 'IoT sensor telemetry & low-cost optical probes' },
    { num: 11, title: 'Sustainable Cities & Communities', desc: 'Pothole clustering & rapid hot-mix resurfacing' },
    { num: 13, title: 'Climate Action', desc: 'Community bio-waste composting & river catchment protection' }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-white">
                  Measurable Societal & Institutional Impact
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Verified Outcomes
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Objective social, economic, and academic return-on-investment from the CivicSolve innovation ecosystem.
              </p>
            </div>
          </div>

          <span className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1.5 rounded-xl font-mono">
            * Demonstration Metrics (Jharkhand Model)
          </span>
        </div>

        {/* Master Impact Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Citizens Benefited</span>
            <div className="text-2xl font-black text-cyan-400 mt-1">485,000+</div>
            <span className="text-[10px] text-slate-500">Across 10 Districts</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Resolution Speedup</span>
            <div className="text-2xl font-black text-emerald-400 mt-1">18.4 Days</div>
            <span className="text-[10px] text-emerald-400">Down from 64 Days</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Municipal Cost Saved</span>
            <div className="text-2xl font-black text-amber-400 mt-1">₹4.2 Cr</div>
            <span className="text-[10px] text-amber-300">Clustering Efficiency</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Patents & IPR Filed</span>
            <div className="text-2xl font-black text-purple-400 mt-1">{PLATFORM_STATS.patentsAndIPR}</div>
            <span className="text-[10px] text-purple-300">University Faculty Labs</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Startups Incubated</span>
            <div className="text-2xl font-black text-rose-400 mt-1">{PLATFORM_STATS.startupsIncubated}</div>
            <span className="text-[10px] text-rose-300">From Student Projects</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Citizen Satisfaction</span>
            <div className="text-2xl font-black text-white mt-1">4.8 / 5</div>
            <span className="text-[10px] text-emerald-400">12,400+ Survey Responses</span>
          </div>
        </div>

        {/* Charts Grid: Timeline Acceleration & SDG Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Resolution Acceleration Chart */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Average Resolution Time (Days to Physical Closure)
              </h3>
              <p className="text-xs text-slate-400">
                Traditional bureaucratic queue vs. CivicSolve AI clustering and Quadruple Helix routing
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={resolutionTimelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  />
                  <Line type="monotone" dataKey="traditionalDays" name="Traditional System" stroke="#f43f5e" strokeWidth={2} />
                  <Line type="monotone" dataKey="civicsolveDays" name="CivicSolve Platform" stroke="#10b981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* UN SDG Alignment Card */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                UN Sustainable Development Goals (SDGs)
              </h3>
              <p className="text-xs text-slate-400">Aligned with global development indicators</p>
            </div>

            <div className="space-y-2.5">
              {sdgs.map((sdg) => (
                <div key={sdg.num} className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-3 text-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center flex-shrink-0">
                    {sdg.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">{sdg.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{sdg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* University Innovation & Patent Leaderboard */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>University Research & Student Innovation Leaderboard</span>
              </h3>
              <p className="text-xs text-slate-400">
                Translating grassroots societal challenges into academic research papers, patents, and campus startups.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-2.5 px-3">Institution Name</th>
                  <th className="py-2.5 px-3">Active Projects</th>
                  <th className="py-2.5 px-3">Patents / IPR</th>
                  <th className="py-2.5 px-3">Student Startups</th>
                  <th className="py-2.5 px-3 text-right">Beneficiaries Reached</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {heiLeaderboard.map((hei, i) => (
                  <tr key={i} className="hover:bg-slate-900/50">
                    <td className="py-3 px-3 font-semibold text-white flex items-center space-x-2">
                      <span className="text-slate-500 font-mono">#{i + 1}</span>
                      <span>{hei.name}</span>
                    </td>
                    <td className="py-3 px-3">{hei.projects}</td>
                    <td className="py-3 px-3 text-purple-400 font-semibold">{hei.patents}</td>
                    <td className="py-3 px-3 text-rose-400 font-semibold">{hei.startups}</td>
                    <td className="py-3 px-3 text-right font-bold text-cyan-300">{hei.beneficiaries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
