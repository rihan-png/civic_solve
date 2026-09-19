import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  MapPin, 
  Camera, 
  PlusCircle, 
  Star, 
  Send, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Building2, 
  Users, 
  Calendar,
  Check,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { Challenge } from '../../types';

export const CitizenPortal: React.FC = () => {
  const { 
    challenges, 
    setIsReportModalOpen, 
    setSelectedChallenge, 
    setCurrentView,
    submitCitizenFeedback,
    currentUser
  } = useAppState();

  const [filterTab, setFilterTab] = useState<'all' | 'in_progress' | 'awaiting_feedback' | 'closed'>('all');
  
  // Feedback form state per challenge
  const [activeFeedbackChallengeId, setActiveFeedbackChallengeId] = useState<string | null>('CIV-2026-1042');
  const [rating, setRating] = useState<number>(5);
  const [satisfaction, setSatisfaction] = useState<'Fully Resolved & Satisfactory' | 'Partially Resolved' | 'Unsatisfactory'>('Fully Resolved & Satisfactory');
  const [feedbackComment, setFeedbackComment] = useState('Potholes in front of the school gate have been completely filled with high-grade bitumen and leveled smoothly. School auto-rickshaws and two-wheelers are passing safely without waterlogging.');
  const [submittedSuccessId, setSubmittedSuccessId] = useState<string | null>(null);

  // Filter challenges
  const filteredChallenges = challenges.filter(c => {
    if (filterTab === 'in_progress') {
      return c.status === 'assigned' || c.status === 'in_development' || c.status === 'field_testing';
    }
    if (filterTab === 'awaiting_feedback') {
      return c.status === 'resolved' && !c.citizenFeedback;
    }
    if (filterTab === 'closed') {
      return c.status === 'impact_verified' || (c.status === 'resolved' && !!c.citizenFeedback);
    }
    return true;
  });

  const handleFeedbackSubmit = (challengeId: string) => {
    submitCitizenFeedback(challengeId, {
      rating,
      satisfaction,
      comment: feedbackComment
    });
    setSubmittedSuccessId(challengeId);
    setTimeout(() => {
      setSubmittedSuccessId(null);
    }, 4000);
  };

  return (
    <div className="bg-[#F4F6F0] min-h-screen py-6 sm:py-8 text-[#18241D]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Citizen Header Banner */}
        <div className="bg-[#143D2B] text-white rounded-2xl p-5 sm:p-7 shadow-lg border border-[#20523C] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-800 text-emerald-200 border border-emerald-600/40 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                National Citizen Grievance Network · 2026
              </span>
              <span className="text-emerald-300 text-xs hidden sm:inline">
                Jan Parichay & ULB Verified
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-brand">
              Citizen Civic Hub & Live Work Progress Tracker
            </h1>
            
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Track municipal road and utility repair progress in real-time, inspect verified before/after geotag evidence, and submit official quality feedback directly to the Municipal Commissioner and Government Admin.
            </p>
          </div>

          {/* Quick Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="bg-white hover:bg-[#EBF1E8] text-[#143D2B] font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#143D2B]" />
              <span>Report New Challenge</span>
            </button>
          </div>
        </div>

        {/* Citizen Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white border border-[#CBD7C6] rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] font-bold text-[#6C7E72] uppercase tracking-wider block">
              Total Logged
            </span>
            <span className="text-2xl font-bold text-[#143D2B] font-brand mt-0.5 block">
              {challenges.length} Issues
            </span>
            <span className="text-[10px] text-emerald-700 font-semibold">100% Geotagged with EXIF</span>
          </div>

          <div className="bg-white border border-[#CBD7C6] rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] font-bold text-[#6C7E72] uppercase tracking-wider block">
              Field Work in Progress
            </span>
            <span className="text-2xl font-bold text-amber-700 font-brand mt-0.5 block">
              2 Dispatched
            </span>
            <span className="text-[10px] text-[#6C7E72]">Active municipal crews</span>
          </div>

          <div className="bg-white border border-[#CBD7C6] rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] font-bold text-[#6C7E72] uppercase tracking-wider block">
              Work Completed
            </span>
            <span className="text-2xl font-bold text-emerald-700 font-brand mt-0.5 block">
              4 Repaired
            </span>
            <span className="text-[10px] text-emerald-800 font-semibold">Before/After photos verified</span>
          </div>

          <div className="bg-white border border-[#CBD7C6] rounded-xl p-3.5 shadow-sm">
            <span className="text-[11px] font-bold text-[#6C7E72] uppercase tracking-wider block">
              Citizen CSAT Rating
            </span>
            <span className="text-2xl font-bold text-[#143D2B] font-brand mt-0.5 block flex items-center space-x-1">
              <span>4.9</span>
              <Star className="w-5 h-5 text-amber-500 fill-amber-400 inline" />
            </span>
            <span className="text-[10px] text-emerald-700 font-semibold">Admin Audited & Signed Off</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#CBD7C6] pb-2">
          <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
            {[
              { key: 'all', label: `All Reports (${challenges.length})` },
              { key: 'in_progress', label: 'In Progress / Dispatched (2)' },
              { key: 'awaiting_feedback', label: 'Awaiting Citizen Feedback' },
              { key: 'closed', label: 'Citizen Verified & Closed' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilterTab(tab.key as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  filterTab === tab.key
                    ? 'bg-[#143D2B] text-white shadow-sm'
                    : 'bg-white text-[#4A5D51] hover:bg-[#EBF1E8] border border-[#CBD7C6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#55695B] font-medium hidden sm:inline">
            Showing {filteredChallenges.length} tracked civic issues
          </span>
        </div>

        {/* Tracked Challenges Feed */}
        <div className="space-y-6">
          {filteredChallenges.map((ch) => {
            const isResolved = ch.status === 'resolved' || ch.status === 'impact_verified';
            const hasFeedback = !!ch.citizenFeedback;
            const isExpandedFeedback = activeFeedbackChallengeId === ch.id;

            return (
              <div 
                key={ch.id} 
                className="bg-white border border-[#CBD7C6] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Challenge Header Strip */}
                <div className="p-4 sm:p-5 border-b border-[#CBD7C6] bg-[#F9FBF8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#143D2B] bg-[#EBF1E8] px-2 py-0.5 rounded border border-[#CBD7C6]">
                        {ch.id}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {ch.category}
                      </span>
                      <span className="text-xs text-[#6C7E72] flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-red-500" />
                        <span>{ch.villageOrWard}, {ch.district}</span>
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-[#143D2B]">
                      {ch.title}
                    </h2>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center space-x-2">
                    {hasFeedback ? (
                      <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Citizen Verified & Closed</span>
                      </span>
                    ) : isResolved ? (
                      <span className="bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                        <Star className="w-3.5 h-3.5 text-amber-600" />
                        <span>Work Completed · Feedback Requested</span>
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>Repair Crew Active on Site</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* 5-Step Civic Lifecycle Progress Bar */}
                <div className="p-4 sm:p-5 bg-[#EBF1E8]/50 border-b border-[#CBD7C6]">
                  <div className="text-[11px] font-bold text-[#4E6155] uppercase tracking-wider mb-2.5">
                    Municipal Work Progress & Audit Trail:
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { 
                        step: 1, 
                        title: '1. Geotagged Report', 
                        desc: 'GPS & EXIF Captured', 
                        completed: true 
                      },
                      { 
                        step: 2, 
                        title: '2. AI Severity Triage', 
                        desc: `Priority: ${ch.priority}`, 
                        completed: true 
                      },
                      { 
                        step: 3, 
                        title: '3. Crew Dispatched', 
                        desc: 'Road Works Unit #14', 
                        completed: true 
                      },
                      { 
                        step: 4, 
                        title: '4. Physical Repair', 
                        desc: isResolved ? 'Bitumen Compaction Complete' : 'In Progress (70%)', 
                        completed: isResolved 
                      },
                      { 
                        step: 5, 
                        title: '5. Citizen Feedback', 
                        desc: hasFeedback ? '5★ Verified by Citizen' : isResolved ? 'Action Required' : 'Pending Repair', 
                        completed: hasFeedback 
                      }
                    ].map(s => (
                      <div 
                        key={s.step}
                        className={`p-2 rounded-xl border text-left transition-all ${
                          s.completed
                            ? 'bg-white border-emerald-600/40 text-[#143D2B]'
                            : isResolved && s.step === 5
                            ? 'bg-amber-50 border-amber-400 text-amber-900 ring-2 ring-amber-300'
                            : 'bg-white/60 border-gray-200 text-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[10px] font-bold block truncate">{s.title}</span>
                          {s.completed ? (
                            <Check className="w-3 h-3 text-emerald-700 flex-shrink-0" />
                          ) : isResolved && s.step === 5 ? (
                            <Star className="w-3 h-3 text-amber-600 flex-shrink-0 fill-amber-500" />
                          ) : (
                            <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                        <span className="text-[9px] text-[#6C7E72] block truncate">
                          {s.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evidence Comparison (Before vs After) */}
                <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Reported Problem Evidence */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-[#143D2B]">
                      <span>Original Geotagged Defect Photo</span>
                      <span className="text-[10px] text-red-700 font-mono">Before Repair</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-[#CBD7C6] bg-black">
                      <img 
                        src={ch.evidence.photos[0]?.url || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80'} 
                        alt="Before Repair"
                        className="w-full h-44 sm:h-52 object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-sm p-2 text-white font-mono text-[10px] flex justify-between">
                        <span>GPS: {ch.coordinates.lat.toFixed(4)}°N, {ch.coordinates.lng.toFixed(4)}°E</span>
                        <span className="text-amber-300 font-sans font-bold">Severity: {ch.priorityScore}/100</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#4A5D51] line-clamp-2">
                      {ch.description}
                    </p>
                  </div>

                  {/* Resolved Evidence or Work Execution Status */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-[#143D2B]">
                      <span>Post-Repair Geotagged Inspection</span>
                      <span className="text-[10px] text-emerald-700 font-mono">
                        {isResolved ? 'After Repair (Verified)' : 'Scheduled'}
                      </span>
                    </div>

                    {isResolved ? (
                      <div className="relative rounded-xl overflow-hidden border-2 border-emerald-600 bg-black">
                        <img 
                          src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80" 
                          alt="After Repair"
                          className="w-full h-44 sm:h-52 object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-sm p-2 text-white font-mono text-[10px] flex justify-between">
                          <span className="text-emerald-300">✓ 0 Cavities Detected · Compaction 97%</span>
                          <span className="bg-emerald-800 text-white px-1.5 py-0.2 rounded font-sans font-bold text-[9px]">
                            Post-Repair EXIF Valid
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="h-44 sm:h-52 rounded-xl border border-dashed border-[#CAD8C5] bg-[#F4F6F0] flex flex-col items-center justify-center p-4 text-center">
                        <Clock className="w-8 h-8 text-amber-600 mb-2 animate-bounce" />
                        <span className="text-xs font-bold text-[#143D2B]">Work in Progress by PWD Ward Crew</span>
                        <span className="text-[11px] text-[#6C7E72] mt-1">
                          Contractor currently executing hot-mix asphalt filling. Post-repair photos will appear here automatically upon completion.
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[11px] text-[#4A5D51] pt-1">
                      <span><strong>Responsible Officer:</strong> Er. Rajesh Sahay (ULB)</span>
                      <span><strong>Contractor:</strong> Unit 14 PWD Paving</span>
                    </div>
                  </div>

                </div>

                {/* THE CITIZEN FEEDBACK FORM SECTION (Satisfying User Request) */}
                <div className="border-t border-[#CBD7C6] bg-[#F9FBF8] p-4 sm:p-5">
                  {hasFeedback ? (
                    /* Display Already Submitted Citizen Feedback with Government Audit Acknowledgement */
                    <div className="bg-white border border-emerald-300 rounded-xl p-4 space-y-2.5 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#143D2B] block">
                              Citizen Verification Submitted by {ch.citizenFeedback?.citizenName}
                            </span>
                            <div className="flex items-center space-x-1 text-amber-500 mt-0.5">
                              {[...Array(ch.citizenFeedback?.rating || 5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                              ))}
                              <span className="text-[11px] text-[#143D2B] font-bold ml-1">
                                {ch.citizenFeedback?.rating} / 5 Stars ({ch.citizenFeedback?.satisfaction})
                              </span>
                            </div>
                          </div>
                        </div>

                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          ✓ Audit Ledger Recorded
                        </span>
                      </div>

                      <p className="text-xs text-[#2A3F33] italic bg-[#F4F6F0] p-2.5 rounded-lg border border-[#CBD7C6]">
                        "{ch.citizenFeedback?.comment}"
                      </p>

                      {/* Government & Admin Acknowledgement Note */}
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 text-xs text-emerald-900 flex items-start space-x-2">
                        <Building2 className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[11px] text-emerald-950 uppercase tracking-wider">
                            Government Admin & Municipal Audit Acknowledged:
                          </strong>
                          <span className="text-[11px] text-emerald-900">
                            {ch.citizenFeedback?.governmentRemarks || 'Citizen feedback officially logged into Municipal Performance Index. Contractor work grade certified as satisfactory.'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : isResolved ? (
                    /* Active Feedback Form for Citizen to Submit */
                    <div className="space-y-3.5 bg-white border border-[#CBD7C6] rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="w-4 h-4 text-[#143D2B]" />
                          <h3 className="text-xs sm:text-sm font-bold text-[#143D2B] uppercase tracking-wider">
                            Citizen Quality Feedback Form for Government & Admin Audit
                          </h3>
                        </div>
                        <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded">
                          Your Rating Verifies Contractor Quality
                        </span>
                      </div>

                      <p className="text-xs text-[#55695B]">
                        Please rate the road repair work. Your feedback is sent directly to the Urban Local Body Admin to verify contractor payment and ensure work is done fine.
                      </p>

                      {/* Interactive Star Rating */}
                      <div>
                        <label className="block text-xs font-bold text-[#143D2B] mb-1">
                          How satisfied are you with the physical repair? *
                        </label>
                        <div className="flex items-center space-x-1.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setRating(s)}
                              className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                              title={`${s} Star${s > 1 ? 's' : ''}`}
                            >
                              <Star 
                                className={`w-6 h-6 ${s <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                              />
                            </button>
                          ))}
                          <span className="text-xs font-bold text-[#143D2B] ml-2">
                            {rating === 5 ? '⭐⭐⭐⭐⭐ Excellent / Perfectly Fixed' :
                             rating === 4 ? '⭐⭐⭐⭐ Very Good / Smooth' :
                             rating === 3 ? '⭐⭐⭐ Moderate / Acceptable' :
                             rating === 2 ? '⭐⭐ Poor / Needs More Work' : '⭐ Terrible / Defect Remains'}
                          </span>
                        </div>
                      </div>

                      {/* Satisfaction Tier Selector */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { key: 'Fully Resolved & Satisfactory', desc: 'Cavity completely eliminated & safe' },
                          { key: 'Partially Resolved', desc: 'Filled but surface still uneven' },
                          { key: 'Unsatisfactory', desc: 'Poor repair, water still logging' }
                        ].map((tier) => (
                          <button
                            key={tier.key}
                            type="button"
                            onClick={() => setSatisfaction(tier.key as any)}
                            className={`p-2 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                              satisfaction === tier.key
                                ? 'bg-[#143D2B] text-white border-[#143D2B] font-bold shadow-sm'
                                : 'bg-[#F9FBF8] border-[#CBD7C6] text-[#3D5244] hover:bg-white'
                            }`}
                          >
                            <span className="block font-semibold">{tier.key}</span>
                            <span className={`text-[10px] block mt-0.5 ${satisfaction === tier.key ? 'text-emerald-200' : 'text-[#6C7E72]'}`}>
                              {tier.desc}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Detailed Feedback Textarea */}
                      <div>
                        <label className="block text-xs font-bold text-[#143D2B] mb-1">
                          Detailed Citizen Comments for Municipal Executive Engineer *
                        </label>
                        <textarea
                          rows={3}
                          value={feedbackComment}
                          onChange={(e) => setFeedbackComment(e.target.value)}
                          className="w-full bg-[#F9FBF8] border border-[#CBD7C6] rounded-xl p-3 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                          placeholder="State whether the road is smooth, waterlogging stopped, and traffic safe..."
                          required
                        />
                      </div>

                      {/* Submit Action */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-[#6C7E72]">
                          Recorded in Municipal Audit & Anti-Fraud Ledger
                        </span>

                        <button
                          type="button"
                          onClick={() => handleFeedbackSubmit(ch.id)}
                          className="bg-[#143D2B] hover:bg-[#1B4D36] text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center space-x-2 shadow-md cursor-pointer transition-all"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Official Feedback to Government</span>
                        </button>
                      </div>

                      {submittedSuccessId === ch.id && (
                        <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-3 text-xs text-emerald-900 font-bold flex items-center space-x-2 animate-fadeIn">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          <span>Thank you! Your verified feedback has been logged in the Municipal Audit Ledger. Government & Admin have been notified.</span>
                        </div>
                      )}

                    </div>
                  ) : (
                    /* For in-progress tasks */
                    <div className="flex items-center justify-between text-xs text-[#55695B]">
                      <span>Repair work currently active on site. Feedback form will activate once work completion photo is submitted.</span>
                      <button
                        onClick={() => {
                          setSelectedChallenge(ch);
                          setCurrentView('challenge-detail');
                        }}
                        className="font-bold text-[#143D2B] hover:underline"
                      >
                        View Full Incident Dossier →
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
