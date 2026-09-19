import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  User, 
  Layers, 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  Cpu
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { ResolutionVerificationView } from './ResolutionVerificationView';

export const ChallengeDetailPage: React.FC = () => {
  const { selectedChallenge, setCurrentView, setIsAIEngineModalOpen, setActiveAIChallengeId } = useAppState();

  if (!selectedChallenge) {
    return (
      <div className="bg-slate-900 text-slate-100 min-h-screen py-16 text-center">
        <p>No challenge selected.</p>
        <button onClick={() => setCurrentView('challenges')} className="mt-4 text-blue-400">
          Back to Directory
        </button>
      </div>
    );
  }

  const ch = selectedChallenge;
  const isResolved = ch.status === 'resolved';

  const timelineSteps = [
    { title: 'Reported', done: true },
    { title: 'AI Verified', done: true },
    { title: 'Incident Clustered', done: !!ch.incidentClusterId },
    { title: 'Smart Routed', done: true },
    { title: 'Prototype Developed', done: ch.status === 'in_development' || ch.status === 'field_testing' || ch.status === 'resolved' },
    { title: 'Pilot Field Testing', done: ch.status === 'field_testing' || ch.status === 'resolved', current: ch.status === 'field_testing' },
    { title: 'Resolution Certified', done: isResolved, current: isResolved }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentView('challenges')}
            className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Challenge Directory</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setActiveAIChallengeId(ch.id);
                setIsAIEngineModalOpen(true);
              }}
              className="bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Inspect AI Engine Logs</span>
            </button>
          </div>
        </div>

        {/* Case Study Master Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-cyan-400 text-xs font-bold bg-cyan-950/60 border border-cyan-700/60 px-2.5 py-0.5 rounded">
              ID #{ch.id}
            </span>
            <span className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded font-mono ${
              ch.priority === 'CRITICAL' ? 'bg-rose-950 text-rose-300 border border-rose-600' : 'bg-amber-950 text-amber-300 border border-amber-600'
            }`}>
              {ch.priority} Priority ({ch.priorityScore}/100)
            </span>
            <span className="text-xs bg-slate-900 text-slate-300 border border-slate-700 px-2.5 py-0.5 rounded">
              {ch.category}
            </span>
            {ch.incidentClusterId && (
              <span className="text-xs bg-purple-950 text-purple-300 border border-purple-600 px-2.5 py-0.5 rounded flex items-center space-x-1">
                <Layers className="w-3 h-3" />
                <span>Cluster #{ch.incidentClusterId}</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {ch.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{ch.villageOrWard}, {ch.district}, Jharkhand</span>
            </span>
            <span className="flex items-center space-x-1">
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>Submitted by: <strong>{ch.submittedBy.name}</strong></span>
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{new Date(ch.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </span>
          </div>
        </div>

        {/* Milestone Timeline Strip */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Problem-to-Solution Verification Timeline
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex flex-col items-center justify-between ${
                  step.done
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                    : step.current
                    ? 'bg-blue-950/40 border-blue-500/50 text-blue-300 animate-pulse'
                    : 'bg-slate-900/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-center mb-1">
                  {step.done ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4" />}
                </div>
                <span className="font-semibold text-[11px] mt-1">{step.title}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {step.done ? 'Verified' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Description & Evidence Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Ground-Truth Problem Description
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {ch.description}
              </p>
            </div>

            {/* Evidence Gallery */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Multi-Modal Evidence Dossier
              </h3>

              <div className="space-y-3">
                {ch.evidence.photos.map((photo) => (
                  <div key={photo.id} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 relative">
                    <img src={photo.url} alt={photo.caption} className="w-full h-64 object-cover" />
                    
                    {/* Geotag Stamp Watermark */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-2.5 text-white font-mono text-xs border-t border-white/15">
                      <div className="flex items-center justify-between text-[10px] text-amber-300 font-bold">
                        <span>GPS: {ch.coordinates.lat.toFixed(4)}°N, {ch.coordinates.lng.toFixed(4)}°E</span>
                        <span className="text-white/80">{photo.timestamp || '19-Sep-2026, 16:15 IST'}</span>
                      </div>
                      <div className="text-[10px] text-white/90 truncate font-sans font-medium mt-0.5">
                        📍 {ch.villageOrWard}, {ch.district}
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-emerald-300 pt-1 border-t border-white/10 mt-1">
                        <span>📷 JPEG EXIF 2.32 · ±2.4m GPS Accuracy</span>
                        <span className="bg-emerald-800 text-white px-1.5 py-0.2 rounded font-sans font-bold text-[8px] uppercase">
                          ✓ GEOTAG VERIFIED
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Audio Recording Transcription */}
                {ch.evidence.audioRecordings && ch.evidence.audioRecordings.length > 0 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                      Citizen Vernacular Voice Note ({ch.evidence.audioRecordings[0].language})
                    </span>
                    <p className="text-xs text-slate-200 italic font-mono bg-slate-950 p-2.5 rounded border border-slate-800">
                      "{ch.evidence.audioRecordings[0].transcription}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Stakeholders & AI Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stakeholder Quadruple Helix Assignment */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Assigned Stakeholders
              </h3>

              <div className="space-y-3 text-xs">
                {/* Government */}
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-400">Government Authority</span>
                    <p className="font-bold text-white">{ch.routing.primaryResolver.name}</p>
                  </div>
                </div>

                {/* Supporting Collaborators */}
                {ch.routing.collaborators.map((c, i) => (
                  <div key={i} className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start space-x-3">
                    {c.type === 'university' && <GraduationCap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />}
                    {c.type === 'ngo' && <HeartHandshake className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />}
                    {c.type === 'industry' && <Rocket className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />}
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">{c.type} Partner</span>
                      <p className="font-bold text-white">{c.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{c.contribution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explainable Priority Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Explainable Priority Score
                </h3>
                <span className="text-base font-extrabold text-amber-400">
                  {ch.priorityBreakdown.formulaScore} / 100
                </span>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-300">
                {ch.priorityBreakdown.reasons.map((r, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-amber-400">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Resolution Verification Section (Before / After) */}
        <div className="pt-4">
          <ResolutionVerificationView challenge={ch} />
        </div>

      </div>
    </div>
  );
};
