import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ArrowRight, 
  Cpu, 
  Users,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { JHARKHAND_DISTRICTS } from '../../data/mockData';
import { ChallengeCategory } from '../../types';

export const ChallengeDirectory: React.FC = () => {
  const { 
    challenges, 
    setSelectedChallenge, 
    setCurrentView, 
    setIsAIEngineModalOpen, 
    setActiveAIChallengeId,
    searchQuery,
    setSearchQuery,
    filterDistrict,
    setFilterDistrict,
    filterCategory,
    setFilterCategory,
    setIsReportModalOpen
  } = useAppState();

  const [filterPriority, setFilterPriority] = useState('All');

  const categories = [
    'All',
    'Road & Infrastructure',
    'Water & Sanitation',
    'Clean Energy & Power',
    'Agriculture & Irrigation',
    'Healthcare Access',
    'Environment & Waste',
    'Education & Skill',
    'Accessibility & Mobility'
  ];

  // Filtering logic
  const filteredChallenges = challenges.filter(c => {
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.district.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDistrict = filterDistrict === 'All' || c.district === filterDistrict;
    const matchesCategory = filterCategory === 'All' || c.category === filterCategory;
    const matchesPriority = filterPriority === 'All' || c.priority === filterPriority;

    return matchesSearch && matchesDistrict && matchesCategory && matchesPriority;
  });

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Societal Challenge Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Crowdsourced, verified, and clustered civic challenges across Jharkhand State.
            </p>
          </div>

          <button
            onClick={() => setIsReportModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            + Report New Challenge
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keywords, ID (e.g. CIV-2026-1042), ward, or district..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* District Filter */}
            <div className="md:col-span-3">
              <select
                value={filterDistrict}
                onChange={(e) => setFilterDistrict(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="All">All Districts ({JHARKHAND_DISTRICTS.length})</option>
                {JHARKHAND_DISTRICTS.map((d) => (
                  <option key={d.name} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>

            {/* Priority Filter */}
            <div className="md:col-span-3">
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="All">All Priorities</option>
                <option value="CRITICAL">Critical Only</option>
                <option value="HIGH">High Priority</option>
                <option value="MEDIUM">Medium Priority</option>
                <option value="LOW">Low Priority</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pt-1 pb-1 scrollbar-none">
            <span className="text-xs text-slate-500 font-semibold whitespace-nowrap">Domain:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer border ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white border-blue-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((ch) => {
            const hasCluster = !!ch.incidentClusterId;
            const isResolved = ch.status === 'resolved';

            return (
              <div
                key={ch.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={ch.evidence.photos[0]?.url}
                      alt={ch.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Priority Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md font-mono backdrop-blur-md ${
                        ch.priority === 'CRITICAL'
                          ? 'bg-rose-950/80 text-rose-300 border border-rose-500/50'
                          : ch.priority === 'HIGH'
                          ? 'bg-amber-950/80 text-amber-300 border border-amber-500/50'
                          : 'bg-blue-950/80 text-blue-300 border border-blue-500/50'
                      }`}>
                        {ch.priority} ({ch.priorityScore}/100)
                      </span>
                    </div>

                    {/* Incident Cluster Pill */}
                    {hasCluster && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold bg-purple-950/80 text-purple-300 border border-purple-500/50 px-2 py-0.5 rounded-md backdrop-blur-md flex items-center space-x-1">
                          <Layers className="w-3 h-3" />
                          <span>#{ch.incidentClusterId}</span>
                        </span>
                      </div>
                    )}

                    {/* Status Pill */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md ${
                        isResolved 
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50' 
                          : 'bg-slate-950/80 text-cyan-300 border border-cyan-500/40'
                      }`}>
                        Status: {ch.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono text-cyan-400 font-semibold">{ch.id}</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{ch.district} ({ch.villageOrWard})</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white line-clamp-2 leading-snug">
                      {ch.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {ch.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-500 block">Affected Population</span>
                        <span className="font-semibold text-slate-200">{ch.priorityBreakdown.affectedPopulation.toLocaleString()} citizens</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">AI Verification</span>
                        <span className="font-semibold text-emerald-400">{ch.aiAnalysis.confidenceScore}% (Authentic)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-5 py-3.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setActiveAIChallengeId(ch.id);
                      setIsAIEngineModalOpen(true);
                    }}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>AI Engine</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedChallenge(ch);
                      setCurrentView('challenge-detail');
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>View Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
