import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  Star, 
  Sliders, 
  Maximize2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Challenge } from '../../types';
import { useAppState } from '../../context/AppStateContext';

interface ResolutionVerificationViewProps {
  challenge: Challenge;
}

export const ResolutionVerificationView: React.FC<ResolutionVerificationViewProps> = ({ challenge }) => {
  const { verifyResolution } = useAppState();
  const res = challenge.resolutionVerification;

  const [sliderPos, setSliderPos] = useState(50);
  const [reviewerName, setReviewerName] = useState(res?.humanSignOff.reviewerName || 'Er. Rajesh Sahay');
  const [reviewerRemarks, setReviewerRemarks] = useState(res?.humanSignOff.remarks || 'Compacted bituminous hot-mix overlay inspected on site. Zero water pooling.');
  const [isSignedOff, setIsSignedOff] = useState(res?.humanSignOff.isApproved || false);

  const handleSignOff = () => {
    verifyResolution(challenge.id, reviewerName, reviewerRemarks);
    setIsSignedOff(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const beforeImg = res?.beforeImageUrl || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80';
  const afterImg = res?.afterImageUrl || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
              Computer Vision Verification
            </span>
            <span className="text-xs text-slate-400">Resolution Verification Protocol</span>
          </div>
          <h3 className="text-xl font-extrabold text-white mt-1">
            Before / After Physical Intervention Audit
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-slate-400">Consistency Score:</span>
          <span className="text-lg font-black text-emerald-400 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg">
            {res?.consistencyScore || 96}%
          </span>
        </div>
      </div>

      {/* Comparative Visual Slider Container */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden border border-slate-800 select-none shadow-xl bg-slate-900">
        {/* Before Image (Full background) */}
        <img
          src={beforeImg}
          alt="Before Intervention"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bounding Box on Before */}
        <div className="absolute top-1/4 left-1/4 border-2 border-rose-500 bg-rose-500/20 rounded px-2 py-1 text-[10px] font-bold text-rose-200">
          Cavity Detected (38cm depth, 94% conf)
        </div>

        {/* After Image (Clipped by slider position) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={afterImg}
            alt="After Intervention"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: '100%' }}
          />
          <div className="absolute top-1/4 left-1/6 border-2 border-emerald-500 bg-emerald-500/20 rounded px-2 py-1 text-[10px] font-bold text-emerald-200">
            Compacted Asphalt Surface (0 defects, 98% conf)
          </div>
        </div>

        {/* Draggable Divider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center text-white">
            <Sliders className="w-3 h-3" />
          </div>
        </div>

        {/* Left & Right Labels */}
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-emerald-400 border border-emerald-500/30">
          AFTER INTERVENTION
        </div>
        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-rose-400 border border-rose-500/30">
          BEFORE INTERVENTION
        </div>

        {/* Slider Input Controller */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-64 accent-blue-500 cursor-pointer opacity-80 hover:opacity-100"
        />
      </div>

      {/* CV Detection Comparison Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Before Specs */}
        <div className="bg-slate-900/80 border border-rose-900/30 p-4 rounded-xl space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
            Initial Pre-Intervention Scan
          </span>
          <div className="text-xl font-black text-rose-300">
            {res?.beforeDetection.count ?? 3} Defects Detected
          </div>
          <p className="text-xs text-slate-400">
            Confidence: {Math.round((res?.beforeDetection.confidence ?? 0.94) * 100)}% | Asphalt crumbling & deep puddle craters
          </p>
        </div>

        {/* After Specs */}
        <div className="bg-slate-900/80 border border-emerald-900/30 p-4 rounded-xl space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
            Post-Intervention Scan
          </span>
          <div className="text-xl font-black text-emerald-300">
            {res?.afterDetection.count ?? 0} Defects Remaining
          </div>
          <p className="text-xs text-slate-400">
            Confidence: {Math.round((res?.afterDetection.confidence ?? 0.98) * 100)}% | Asphalt resurfacing verified
          </p>
        </div>

        {/* Beneficiary Survey */}
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
            Community Beneficiary Survey
          </span>
          <div className="text-xl font-black text-white flex items-center space-x-1.5">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span>{res?.beneficiaryFeedback.rating || 4.8} / 5.0</span>
          </div>
          <p className="text-xs text-slate-400">
            {res?.beneficiaryFeedback.surveyRespondents || 38} Local survey respondents | {res?.beneficiaryFeedback.satisfactionRate || 96}% satisfaction
          </p>
        </div>
      </div>

      {/* Principle Disclaimer */}
      <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl text-xs text-slate-300 flex items-start space-x-2.5">
        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <strong>Integrity Assurance:</strong> CivicSolve does not mark problems closed purely based on computer vision. Real-world resolution requires dual sign-off: objective vision comparison <em>plus</em> on-site municipal engineer or NGO validation.
        </div>
      </div>

      {/* Human Engineer Sign-Off Box */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl space-y-4">
        <div className="flex items-center space-x-2">
          <UserCheck className="w-5 h-5 text-blue-400" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Official Stakeholder Sign-Off
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-slate-400 mb-1 font-semibold">
              Authorized Reviewer Name & Title:
            </label>
            <input
              type="text"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              disabled={isSignedOff}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-semibold">
              Inspection Date:
            </label>
            <input
              type="text"
              value={new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              disabled
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1 font-semibold">
            Field Inspection Remarks:
          </label>
          <textarea
            rows={2}
            value={reviewerRemarks}
            onChange={(e) => setReviewerRemarks(e.target.value)}
            disabled={isSignedOff}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
          />
        </div>

        {!isSignedOff ? (
          <button
            onClick={handleSignOff}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-6 py-2.5 rounded-lg flex items-center space-x-2 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Certify Resolution & Mark Completed</span>
          </button>
        ) : (
          <div className="bg-emerald-950/50 border border-emerald-500/50 p-3 rounded-lg flex items-center justify-between text-xs text-emerald-300">
            <span className="flex items-center space-x-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Certified & Verified on Blockchain/Audit Log by {reviewerName}</span>
            </span>
            <span className="text-[11px] text-emerald-400/80 font-mono">STATUS: RESOLUTION LOCKED</span>
          </div>
        )}
      </div>
    </div>
  );
};
