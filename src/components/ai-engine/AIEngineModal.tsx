import React, { useState, useEffect } from 'react';
import { 
  X, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  Clock,
  Check
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';

export const AIEngineModal: React.FC = () => {
  const { 
    isAIEngineModalOpen, 
    setIsAIEngineModalOpen, 
    activeAIChallengeId, 
    challenges, 
    setSelectedChallenge, 
    setCurrentView 
  } = useAppState();

  const [activeTab, setActiveTab] = useState<'pipeline' | 'verification' | 'clustering' | 'priority' | 'routing'>('pipeline');
  const [pipelineProgress, setPipelineProgress] = useState(1);

  const challenge = challenges.find(c => c.id === activeAIChallengeId) || challenges[0];

  useEffect(() => {
    if (isAIEngineModalOpen) {
      const timers = [
        setTimeout(() => setPipelineProgress(2), 700),
        setTimeout(() => setPipelineProgress(3), 1400),
        setTimeout(() => setPipelineProgress(4), 2100),
        setTimeout(() => setPipelineProgress(5), 2800),
        setTimeout(() => setPipelineProgress(6), 3500),
      ];
      return () => timers.forEach(t => clearTimeout(t));
    } else {
      setPipelineProgress(1);
    }
  }, [isAIEngineModalOpen, activeAIChallengeId]);

  if (!isAIEngineModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl text-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-white">CivicSolve AI Intelligence Engine</h3>
                <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.2 rounded-full font-bold">
                  Active Run
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Processing Challenge <span className="text-cyan-300 font-mono font-semibold">{challenge.id}</span> ({challenge.district}, Jharkhand)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAIEngineModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/80 px-4 text-xs font-semibold overflow-x-auto">
          {[
            { id: 'pipeline', label: '1. Animated Pipeline' },
            { id: 'verification', label: '2. Evidence Verification' },
            { id: 'clustering', label: '3. Incident Clustering' },
            { id: 'priority', label: '4. Explainable Priority' },
            { id: 'routing', label: '5. Smart Resolver Routing' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-300 bg-slate-900/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-900/50">

          {/* TAB 1: Animated Pipeline Progress */}
          {activeTab === 'pipeline' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 font-medium">Multi-Modal Pipeline Status:</span>
                  <div className="text-sm font-bold text-white flex items-center space-x-2 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-ping"></span>
                    <span>
                      {pipelineProgress < 6 ? `Running Step ${pipelineProgress} of 6...` : 'Analysis Complete (Latency: 420ms)'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Overall Confidence</span>
                  <span className="text-base font-extrabold text-emerald-400">
                    {challenge.aiAnalysis.confidenceScore}% (Likely Authentic)
                  </span>
                </div>
              </div>

              {/* 6 Step Animated Progress Grid */}
              <div className="space-y-3">
                {/* Step 1: Understanding */}
                <div className={`p-4 rounded-xl border transition-all ${
                  pipelineProgress >= 1 ? 'bg-slate-950 border-blue-500/40' : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                      {pipelineProgress >= 1 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4" />}
                      <span>1. Understanding (NLP & Audio Transcription)</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Multimodal NLP + DeBERTa</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300 mt-2">
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 text-[10px] block">Detected Language</span>
                      <span className="font-semibold text-slate-200">{challenge.aiAnalysis.languageDetected}</span>
                    </div>
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 text-[10px] block">Extracted Intent</span>
                      <span className="font-semibold text-slate-200">{challenge.aiAnalysis.intent}</span>
                    </div>
                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                      <span className="text-slate-500 text-[10px] block">Detected Physical Objects</span>
                      <span className="font-semibold text-slate-200">{challenge.aiAnalysis.objectsDetected.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Step 2: Evidence Analysis */}
                <div className={`p-4 rounded-xl border transition-all ${
                  pipelineProgress >= 2 ? 'bg-slate-950 border-blue-500/40' : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                      {pipelineProgress >= 2 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4" />}
                      <span>2. Evidence Analysis & Cross-Modal Consistency</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">VLM + Pixel Audit</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Image readability: <strong>High</strong> | GPS EXIF integrity: <strong>Verified</strong> | Audio-pixel semantic alignment: <strong>{challenge.aiAnalysis.claimConsistencyScore}%</strong>.
                  </p>
                </div>

                {/* Step 3: Duplicate Detection & Incident Clustering */}
                <div className={`p-4 rounded-xl border transition-all ${
                  pipelineProgress >= 3 ? 'bg-slate-950 border-blue-500/40' : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                      {pipelineProgress >= 3 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4" />}
                      <span>3. Duplicate Detection & Clustering</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">FAISS Vector + PostGIS</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Found <strong>6 similar citizen reports</strong> within 1.2 km radius. Consolidated into active Incident <strong className="text-amber-300">#INC-2841</strong> (27 total community reports).
                  </p>
                </div>

                {/* Step 4: Priority & Safety Assessment */}
                <div className={`p-4 rounded-xl border transition-all ${
                  pipelineProgress >= 4 ? 'bg-slate-950 border-blue-500/40' : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                      {pipelineProgress >= 4 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4" />}
                      <span>4. Priority & Safety Assessment</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Explainable Formula</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Severity: <strong>{challenge.priorityBreakdown.severity}/5</strong> | Safety Hazard: <strong>{challenge.priorityBreakdown.safetyRisk}/5</strong> | Affected Population: <strong>{challenge.priorityBreakdown.affectedPopulation.toLocaleString()}</strong> → <span className="text-amber-400 font-bold uppercase">{challenge.priority} Priority</span> (Score: {challenge.priorityBreakdown.formulaScore}/100).
                  </p>
                </div>

                {/* Step 5: Geographic Analysis */}
                <div className={`p-4 rounded-xl border transition-all ${
                  pipelineProgress >= 5 ? 'bg-slate-950 border-blue-500/40' : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                      {pipelineProgress >= 5 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4" />}
                      <span>5. Geographic & Proximity Analysis</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Jharkhand Ward GIS</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Proximity alert: Located within 100 meters of St. Xavier Primary School. High pedestrian and child transit density.
                  </p>
                </div>

                {/* Step 6: Resolver Matching */}
                <div className={`p-4 rounded-xl border transition-all ${
                  pipelineProgress >= 6 ? 'bg-slate-950 border-emerald-500/40' : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
                      {pipelineProgress >= 6 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4" />}
                      <span>6. Smart Resolver Matching</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Routing Matrix</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Dispatch Route: <strong>{challenge.routing.routeType}</strong>. Assigned to <strong>{challenge.routing.primaryResolver.name}</strong> + Supporting NGO <strong>{challenge.routing.collaborators[0]?.name}</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Evidence Verification */}
          {activeTab === 'verification' && (
            <div className="space-y-5">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Authenticity Status
                    </span>
                    <h4 className="text-xl font-extrabold text-emerald-400 flex items-center space-x-2">
                      <ShieldCheck className="w-6 h-6" />
                      <span>{challenge.aiAnalysis.confidenceLabel}</span>
                    </h4>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-400 block">AI Confidence Score</span>
                    <span className="text-2xl font-black text-white">{challenge.aiAnalysis.confidenceScore}%</span>
                  </div>
                </div>

                {/* Signal Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Claim & Image Consistency:</span>
                    <span className="font-semibold text-emerald-400">High ({challenge.aiAnalysis.claimConsistencyScore}%)</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">GPS Hardware Integrity:</span>
                    <span className="font-semibold text-emerald-400">Verified (Ward 36)</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Camera EXIF Metadata:</span>
                    <span className="font-semibold text-emerald-400">Present & Unaltered</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Cross-Report Agreement:</span>
                    <span className="font-semibold text-emerald-400">High (27 Reports)</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Digital Tampering Indicators:</span>
                    <span className="font-semibold text-emerald-400">None Detected (0.00)</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Reporter Credibility Weight:</span>
                    <span className="font-semibold text-blue-400">Verified Citizen (Tier 1)</span>
                  </div>
                </div>

                {/* Important Disclaimer Alert */}
                <div className="bg-amber-950/40 border border-amber-500/40 rounded-lg p-3 text-xs text-amber-200 flex items-start space-x-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Civic Principle:</strong> AI verification is an assistive intelligence signal, not absolute judicial truth. For borderline cases (&lt;75% confidence), the system automatically triggers <strong>⚠ Human Verification Required</strong>.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Incident Clustering */}
          {activeTab === 'clustering' && (
            <div className="space-y-5">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
                <div className="pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Geospatial & Semantic De-duplication
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">
                    How CivicSolve Eliminates Administrative Noise
                  </h4>
                  <p className="text-xs text-slate-400">
                    Consolidating 100 raw citizen reports into 12 actionable physical ground-truth incidents.
                  </p>
                </div>

                {/* Clustering Graphic Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center w-full sm:w-48">
                      <span className="text-2xl font-black text-rose-400">27 Reports</span>
                      <span className="text-[11px] text-slate-400 block mt-1">Raw Citizen Tickets</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold">Vector Similarity + PostGIS</span>
                      <ArrowRight className="w-5 h-5 text-cyan-400 my-1 rotate-90 sm:rotate-0" />
                      <span className="text-[10px] text-emerald-400 font-semibold">88% Administrative Noise Reduction</span>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/40 text-center w-full sm:w-48">
                      <span className="text-2xl font-black text-emerald-400">1 Incident</span>
                      <span className="text-[11px] text-emerald-300 block mt-1">Incident #INC-2841</span>
                    </div>
                  </div>
                </div>

                {/* Cluster Breakdown Details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Consolidated Reports</span>
                    <span className="text-base font-bold text-white">27</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Photo Matches</span>
                    <span className="text-base font-bold text-white">14</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">NGO Validation</span>
                    <span className="text-base font-bold text-emerald-400">Verified</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Cluster Radius</span>
                    <span className="text-base font-bold text-cyan-400">1.2 km</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Explainable Priority */}
          {activeTab === 'priority' && (
            <div className="space-y-5">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
                <div className="pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Transparent Decision Support
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">
                    Explainable Priority Engine
                  </h4>
                  <p className="text-xs text-slate-400">
                    Zero arbitrary black-box scores. Calculated from verifiable physical variables.
                  </p>
                </div>

                {/* Mathematical Formula Banner */}
                <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-4 text-center">
                  <span className="text-[11px] font-mono text-cyan-300 block mb-1">
                    Priority Score = Severity × Affected Population × Safety Hazard × Recurrence × Time Unresolved
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono mt-2">
                    HIGH PRIORITY (Score: {challenge.priorityBreakdown.formulaScore} / 100)
                  </div>
                </div>

                {/* Rationale Bullet Points */}
                <div>
                  <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                    Supporting Signals & Explanations:
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {challenge.priorityBreakdown.reasons.map((r, idx) => (
                      <li key={idx} className="flex items-start space-x-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Smart Resolver Routing */}
          {activeTab === 'routing' && (
            <div className="space-y-5">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
                <div className="pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Routing Engine
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">
                    Who Can Best Solve This Problem?
                  </h4>
                  <p className="text-xs text-slate-400">
                    Distinguishing between routine civic execution and multidisciplinary collaborative innovation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                      Primary Assigned Resolver
                    </span>
                    <h5 className="text-base font-bold text-white">
                      {challenge.routing.primaryResolver.name}
                    </h5>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Type: {challenge.routing.primaryResolver.type.toUpperCase()}
                    </span>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">
                      Supporting Collaborators
                    </span>
                    <h5 className="text-base font-bold text-white">
                      {challenge.routing.collaborators[0]?.name || 'Local Community Watch'}
                    </h5>
                    <p className="text-xs text-slate-400">
                      {challenge.routing.collaborators[0]?.contribution || 'Field validation & safety surveillance'}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-slate-300 block mb-1">
                    Autonomous Routing Rationale:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {challenge.routing.rationale}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex justify-between items-center">
          <span className="text-xs text-slate-400 font-mono">
            Analysis Verified: ID #{challenge.id}
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setSelectedChallenge(challenge);
                setIsAIEngineModalOpen(false);
                setCurrentView('challenge-detail');
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
