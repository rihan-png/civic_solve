import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Volume2
} from 'lucide-react';
import { SIH_DEMO_STEPS } from '../../data/demoScenarios';
import { useAppState } from '../../context/AppStateContext';

export const GuidedDemoMode: React.FC = () => {
  const { setCurrentView } = useAppState();
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const step = SIH_DEMO_STEPS[currentStepIdx];
  const totalSteps = SIH_DEMO_STEPS.length;

  // Auto-play timer for presentation mode
  useEffect(() => {
    let timer: any = null;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentStepIdx(idx => {
          if (idx < totalSteps - 1) {
            return idx + 1;
          } else {
            setIsAutoPlaying(false);
            return idx;
          }
        });
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalSteps]);

  const handleNext = () => {
    if (currentStepIdx < totalSteps - 1) {
      setCurrentStepIdx(idx => idx + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(idx => idx - 1);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Hackathon Judge Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950/40 to-slate-950 border border-amber-500/40 rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                National Civic Platform Operational Walkthrough · 2026
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-white">
              End-to-End Problem-to-Impact Lifecycle Walkthrough
            </h1>
            <p className="text-xs text-slate-300">
              Evaluator experience: Review the complete technical pipeline in under 2 minutes.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isAutoPlaying
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-amber-500/40'
              }`}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-300" />}
              <span>{isAutoPlaying ? 'Pause Auto Tour' : 'Auto-Play (6s)'}</span>
            </button>
          </div>
        </div>

        {/* Step Progress Stepper */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {SIH_DEMO_STEPS.map((s, idx) => {
              const isActive = idx === currentStepIdx;
              const isPast = idx < currentStepIdx;

              return (
                <button
                  key={s.stepNumber}
                  onClick={() => setCurrentStepIdx(idx)}
                  className={`flex-1 flex flex-col items-center text-center p-2 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/30 border border-blue-500 text-white'
                      : isPast
                      ? 'bg-slate-900 border border-emerald-500/30 text-emerald-400'
                      : 'bg-slate-900/40 border border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-400' : ''}`}>
                    {s.stepNumber}
                  </span>
                  <span className="text-[11px] font-bold truncate max-w-[90px]">
                    {s.stageBadge.split('. ')[1]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Demonstration Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Header of Active Step */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {step.stageBadge}
                </span>
                <span className="text-xs text-slate-400">
                  Persona: <strong className="text-cyan-300">{step.persona}</strong>
                </span>
              </div>
              <h2 className="text-2xl font-black text-white mt-1.5">
                {step.title}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {step.subtitle}
              </p>
            </div>

            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              Step {step.stepNumber} of {totalSteps}
            </span>
          </div>

          {/* Step Main Explanation & Graphic Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Narrative Description */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {step.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Key Technical Innovations Demonstrated:
                </span>
                <ul className="space-y-2">
                  {step.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Interactive Visual Preview for This Step */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-2xl space-y-4">
              
              {/* STEP 1: Voice Simulation */}
              {step.stepNumber === 1 && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-cyan-400 flex items-center space-x-1.5">
                      <Volume2 className="w-4 h-4" />
                      <span>Citizen Voice Audio Stream</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Hindi Devanagari</span>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed italic">
                    "School ke paas road mein bahut bade potholes hain, bachho ki auto palatne ka khatra hai."
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800 text-[11px] text-emerald-400 flex items-center justify-between">
                    <span>GPS Auto-Captured: 23.3385° N, 85.3212° E</span>
                    <span>Ward 36, Doranda</span>
                  </div>
                </div>
              )}

              {/* STEP 2: Understanding */}
              {step.stepNumber === 2 && (
                <div className="space-y-3">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Intent:</span>
                      <span className="font-bold text-white">Civic Infrastructure Hazard</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Entities Detected:</span>
                      <span className="font-bold text-cyan-300">School Zone, Road Crater, Rain Risk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Vision Bounding Box:</span>
                      <span className="font-bold text-emerald-400">3 Potholes (94% confidence)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Verification */}
              {step.stepNumber === 3 && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-400">Authenticity Confidence:</span>
                    <span className="text-lg font-black text-emerald-400">92% (Likely Authentic)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
                      Tampering: <strong>None (0.00)</strong>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
                      Audio-Pixel Match: <strong>94%</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Clustering */}
              {step.stepNumber === 4 && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
                  <div className="flex items-center justify-center space-x-3 text-xs">
                    <span className="bg-rose-950 text-rose-300 px-3 py-1.5 rounded-lg border border-rose-800 font-bold">
                      27 Citizen Reports
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                    <span className="bg-emerald-950 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800 font-bold">
                      Incident #INC-2841
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 block font-semibold">
                    88% Municipal Noise Reduction via Vector Clustering
                  </span>
                </div>
              )}

              {/* STEP 5: Priority Engine */}
              {step.stepNumber === 5 && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                  <span className="text-[10px] font-mono text-cyan-300 block">
                    Priority = Severity × Affected × Safety × Recurrence × Days Unresolved
                  </span>
                  <div className="text-xl font-black text-amber-400">
                    HIGH PRIORITY (Score: 88.4 / 100)
                  </div>
                  <span className="text-[11px] text-slate-400 block">
                    1,850+ School Children in Perimeter + Monsoon Skidding Hazard
                  </span>
                </div>
              )}

              {/* STEP 6: Smart Routing */}
              {step.stepNumber === 6 && (
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Routine Pothole:</span>
                    <span className="text-blue-400 font-bold">RMC Road Cell + Local NGO</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-purple-500/40 flex justify-between">
                    <span className="text-slate-400">Complex Arsenic Water:</span>
                    <span className="text-purple-300 font-bold">BIT Mesra + DWSD + JalDrishti</span>
                  </div>
                </div>
              )}

              {/* STEP 7: University Match */}
              {step.stepNumber === 7 && (
                <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/40 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Birla Institute of Technology</span>
                    <span className="text-emerald-400 font-bold text-sm">92% Match</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Multidisciplinary Team: CS, Environmental Engg, Electronics & Data Science.
                  </p>
                </div>
              )}

              {/* STEP 8: Project Milestones */}
              {step.stepNumber === 8 && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-950 p-2.5 rounded border border-emerald-500/40 text-emerald-300">
                    M1: Research [✓]
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded border border-emerald-500/40 text-emerald-300">
                    M2: Prototype [✓]
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded border border-blue-500/40 text-blue-300">
                    M3: NGO Field Trials [In Progress]
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-slate-500">
                    M4: Deployment [Pending]
                  </div>
                </div>
              )}

              {/* STEP 9: Resolution Slider */}
              {step.stepNumber === 9 && (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Before: 3 Potholes (94% conf)</span>
                    <span className="text-emerald-400 font-bold">After: 0 Potholes (98% conf)</span>
                  </div>
                  <div className="relative h-28 rounded-lg overflow-hidden border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
                      alt="Verified road"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-emerald-950/20 flex items-center justify-center">
                      <span className="bg-slate-950/80 px-2 py-1 rounded text-[10px] font-bold text-emerald-400 border border-emerald-500/40">
                        Resolution Evidence Consistent
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 10: Impact */}
              {step.stepNumber === 10 && (
                <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/40 space-y-2 text-xs text-center">
                  <div className="text-2xl font-black text-emerald-400">485,000+ Citizens</div>
                  <span className="text-[11px] text-slate-400 block">
                    Protected & Empowered across Jharkhand Ecosystem
                  </span>
                  <div className="flex justify-around pt-2 border-t border-slate-800 text-[11px]">
                    <span>42 Patents</span>
                    <span>14 Startups</span>
                    <span>18.4 Days Resolution</span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentStepIdx === 0}
              className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                currentStepIdx === 0 ? 'bg-slate-950 border-slate-800 text-slate-600' : 'bg-slate-900 border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Stage</span>
            </button>

            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              National Civic Platform Operational Pipeline · 2026
            </span>

            {currentStepIdx < totalSteps - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span>Next Stage: {SIH_DEMO_STEPS[currentStepIdx + 1].stageBadge}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setCurrentView('challenges')}
                className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Full Live Platform</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
