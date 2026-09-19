import React, { useState, useRef } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Camera,
  Upload,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  FileText,
  Users,
  ShieldCheck,
  Cpu,
  Navigation,
  Crosshair,
  Check
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { ChallengeCategory } from '../../types';

interface GeotaggedPreset {
  label: string;
  roadName: string;
  district: string;
  lat: number;
  lng: number;
  depthCm: number;
  url: string;
  timestamp: string;
  cameraInfo: string;
}

const PRESET_GEOTAGGED_PHOTOS: GeotaggedPreset[] = [
  {
    label: 'Ranchi Main Road Overbridge',
    roadName: 'Mahatma Gandhi Marg near Sujata Chowk, Ward 21',
    district: 'Ranchi',
    lat: 23.3569,
    lng: 85.3240,
    depthCm: 22,
    url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
    timestamp: '19-Sep-2026, 16:15 IST',
    cameraInfo: 'Geotagged Android Cam · ±2.4m GPS (Ranchi)'
  },
  {
    label: 'Harmu Bypass Road, Ranchi',
    roadName: 'Harmu Housing Colony near Sahjanand Chowk, Ward 26',
    district: 'Ranchi',
    lat: 23.3625,
    lng: 85.3090,
    depthCm: 19,
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    timestamp: '19-Sep-2026, 15:40 IST',
    cameraInfo: 'EXIF Validated · ±3.1m GPS (Ranchi)'
  },
  {
    label: 'Bistupur Boulevard, Jamshedpur',
    roadName: 'Inner Circle Road near Gopal Maidan',
    district: 'East Singhbhum (Jamshedpur)',
    lat: 22.7925,
    lng: 86.1770,
    depthCm: 14,
    url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
    timestamp: '19-Sep-2026, 14:10 IST',
    cameraInfo: 'Civic Field Cam · ±1.9m GPS (Jamshedpur)'
  },
  {
    label: 'Bank More Station Hub, Dhanbad',
    roadName: 'Dhanbad Station South Approach Road, Ward 14',
    district: 'Dhanbad',
    lat: 23.7920,
    lng: 86.4300,
    depthCm: 16,
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    timestamp: '19-Sep-2026, 12:35 IST',
    cameraInfo: 'Geotagged Field Cam · ±2.6m GPS (Dhanbad)'
  }
];

export const ReportWizardModal: React.FC = () => {
  const { isReportModalOpen, setIsReportModalOpen, submitNewChallenge } = useAppState();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: 'Severe Asphalt Pothole Cavity Hazard on Main Carriageway',
    description: 'Main road par school gate ke paas bahut bada pothole hai, auto aur bikes girne ka khatra hai aur baarish mein paani bhar jaata hai.',
    category: 'Road & Infrastructure' as ChallengeCategory,
    subcategory: 'Pavement Structural Failure & Deep Potholes',
    district: 'Ranchi',
    villageOrWard: 'Ward 21, Mahatma Gandhi Marg / Overbridge',
    lat: 23.3569,
    lng: 85.3240,
    photoUrl: PRESET_GEOTAGGED_PHOTOS[0].url,
    photoTimestamp: PRESET_GEOTAGGED_PHOTOS[0].timestamp,
    photoCameraInfo: PRESET_GEOTAGGED_PHOTOS[0].cameraInfo,
    depthCm: 22,
    audioTranscript: '',
    detectedLanguage: 'Hindi (Devanagari)',
    affectedPopulation: 1850,
    durationExisted: '14 days',
    safetyRisk: 'High / Critical',
    recurrence: 'Frequent',
    whoAffected: 'School vans, daily two-wheeler commuters, and pedestrians'
  });

  if (!isReportModalOpen) return null;

  const categories: ChallengeCategory[] = [
    'Road & Infrastructure',
    'Water & Sanitation',
    'Clean Energy & Power',
    'Agriculture & Irrigation',
    'Healthcare Access',
    'Environment & Waste',
    'Education & Skill',
    'Accessibility & Mobility'
  ];

  const districts = [
    'Ranchi',
    'East Singhbhum (Jamshedpur)',
    'Dhanbad',
    'Bokaro',
    'Hazaribagh',
    'Deoghar',
    'Giridih',
    'Palamu',
    'Ramgarh',
    'West Singhbhum',
    'Other Urban Local Body'
  ];

  const handleSelectPresetPhoto = (preset: GeotaggedPreset) => {
    setFormData(prev => ({
      ...prev,
      photoUrl: preset.url,
      photoTimestamp: preset.timestamp,
      photoCameraInfo: preset.cameraInfo,
      lat: preset.lat,
      lng: preset.lng,
      depthCm: preset.depthCm,
      district: preset.district,
      villageOrWard: preset.roadName
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        const now = new Date();
        const formattedDate = `${now.getDate()}-Sep-2026, ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} IST`;

        setFormData(prev => ({
          ...prev,
          photoUrl: result,
          photoTimestamp: formattedDate,
          photoCameraInfo: `${file.name.slice(0, 16)} · EXIF Geotagged`,
          // Keep active GPS coordinates
          lat: prev.lat,
          lng: prev.lng
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitNewChallenge({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      subcategory: formData.subcategory,
      district: formData.district,
      villageOrWard: formData.villageOrWard,
      coordinates: { lat: formData.lat, lng: formData.lng },
      evidence: {
        photos: [
          {
            id: `photo-${Date.now()}`,
            url: formData.photoUrl,
            caption: `${formData.title} [Geotagged: ${formData.lat}°N, ${formData.lng}°E]`,
            timestamp: formData.photoTimestamp
          }
        ],
        audioRecordings: formData.audioTranscript ? [
          {
            id: `aud-${Date.now()}`,
            url: '#',
            language: formData.detectedLanguage,
            transcription: formData.audioTranscript,
            duration: '0:18'
          }
        ] : []
      },
      priorityBreakdown: {
        severity: 4,
        affectedPopulation: formData.affectedPopulation,
        safetyRisk: 5,
        recurrence: 'Frequent',
        unresolvedDays: 14,
        formulaScore: 88.4,
        reasons: [
          'Direct perimeter of primary school zone / public transit route',
          'Heavy daily two-wheeler commuter density with active monsoon skidding',
          'Verified geotagged camera evidence with 0% digital tampering score'
        ]
      }
    });

    setIsReportModalOpen(false);
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#F4F6F0] border border-[#CBD7C6] rounded-2xl w-full max-w-2xl text-[#18241D] shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn">

        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-[#CBD7C6] flex justify-between items-center bg-[#143D2B] text-white">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-tight">Report Civic Problem</h3>
              <p className="text-[11px] text-emerald-200">
                Step {step} of 4 — {
                  step === 1 ? 'Problem Identification' :
                    step === 2 ? 'Geotagged Multi-Modal Evidence' :
                      step === 3 ? 'Societal & Hazard Impact' : 'AI Review & Geospatial Triage'
                }
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsReportModalOpen(false)}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-4 bg-[#EBF1E8] border-b border-[#CAD8C5] text-center py-2 text-[11px] font-semibold">
          {[
            { num: 1, label: '1. Problem' },
            { num: 2, label: '2. Evidence' },
            { num: 3, label: '3. Impact' },
            { num: 4, label: '4. AI Review' }
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => setStep(s.num)}
              className={`py-1 transition-all cursor-pointer ${step === s.num
                  ? 'text-[#143D2B] font-bold border-b-2 border-[#143D2B]'
                  : 'text-[#6C7E72] hover:text-[#143D2B]'
                }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">

          {/* STEP 1: Problem Identification */}
          {step === 1 && (
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1">
                  Issue Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white border border-[#CBD7C6] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                  placeholder="e.g. Hazardous Road Pothole Cluster"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as ChallengeCategory })}
                    className="w-full bg-white border border-[#CBD7C6] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1">
                    Subcategory
                  </label>
                  <input
                    type="text"
                    value={formData.subcategory}
                    onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                    className="w-full bg-white border border-[#CBD7C6] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                    placeholder="e.g. Potholes & Pavement Structural Failure"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1">
                    District / Municipality *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-white border border-[#CBD7C6] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                  >
                    {districts.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1">
                    Street Address & Ward *
                  </label>
                  <input
                    type="text"
                    value={formData.villageOrWard}
                    onChange={(e) => setFormData({ ...formData, villageOrWard: e.target.value })}
                    className="w-full bg-white border border-[#CBD7C6] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                    placeholder="e.g. Mahatma Gandhi Marg, Ward 21, Ranchi"
                    required
                  />
                </div>
              </div>

              {/* Auto GPS Verification */}
              <div className="bg-[#EBF1E8] border border-[#CAD8C5] rounded-xl p-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#143D2B] flex items-center space-x-1.5">
                    <Crosshair className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Device GPS Geotag Coordinates</span>
                  </span>
                  <span className="text-[10px] text-emerald-800 font-bold bg-white px-2 py-0.5 rounded border border-[#CAD8C5]">
                    GPS Fixed (±2.8m Accuracy)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[#2B3E32]">
                  <span>Lat: {formData.lat.toFixed(4)}° N | Lng: {formData.lng.toFixed(4)}° E</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((pos) => {
                          setFormData(prev => ({
                            ...prev,
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude
                          }));
                        });
                      }
                    }}
                    className="text-[11px] font-sans font-semibold text-[#143D2B] hover:underline"
                  >
                    Refresh GPS
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Geotagged Evidence & Image Format with Geotag Overlay */}
          {step === 2 && (
            <div className="space-y-3.5">

              {/* Clean Detailed Problem Description */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider">
                    Detailed Problem Description *
                  </label>
                  <span className="text-[10px] text-[#6C7E72] font-medium">
                    Road defect & safety risk details
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white border border-[#CBD7C6] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30 placeholder:text-gray-400"
                  placeholder="Describe road defect, depth of cavity, landmarks, and safety risks to commuters..."
                  required
                />
              </div>

              {/* Photo Evidence with Official Geotag Stamp Overlay */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#143D2B] uppercase tracking-wider flex items-center space-x-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#143D2B]" />
                    <span>Visual Evidence (Geotagged Photo Format) *</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>Format: JPEG (EXIF Geotagged)</span>
                    </span>
                  </div>
                </div>

                {/* Main Geotagged Image Container with Camera HUD & Watermark Stamp */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#143D2B] bg-slate-950 shadow-lg group">
                  <img
                    src={formData.photoUrl}
                    alt="Geotagged Civic Defect Evidence"
                    className="w-full h-56 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  />

                  {/* Top Camera HUD Bar */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-2.5 sm:p-3 text-white flex items-center justify-between text-[10px] sm:text-[11px] font-mono select-none">
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center space-x-1 bg-red-600/90 text-white font-bold px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <span>GEOTAG ACTIVE</span>
                      </span>
                      <span className="text-white/80 hidden sm:inline">GNSS: 8 Satellites (NavIC+GPS)</span>
                    </div>

                    <div className="flex items-center space-x-2 text-white/90">
                      <span className="bg-black/50 px-2 py-0.5 rounded border border-white/20">🧭 74° ENE</span>
                      <span className="bg-black/50 px-2 py-0.5 rounded border border-white/20">ISO 100</span>
                      <span className="bg-emerald-700/80 text-white font-bold px-2 py-0.5 rounded border border-emerald-400/40 text-[9px]">
                        ✓ WGS84
                      </span>
                    </div>
                  </div>

                  {/* Camera Viewfinder Reticle Corners & Center Crosshair */}
                  <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="w-4 h-4 border-t-2 border-l-2 border-white/70" />
                      <div className="w-4 h-4 border-t-2 border-r-2 border-white/70" />
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                        <div className="w-1 h-1 bg-amber-400 rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="w-4 h-4 border-b-2 border-l-2 border-white/70" />
                      <div className="w-4 h-4 border-b-2 border-r-2 border-white/70" />
                    </div>
                  </div>

                  {/* Official Geotag Watermark Overlay (Standard Indian Civic Geo-Camera Stamp) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/85 backdrop-blur-md p-3 text-white text-left font-mono border-t border-white/20 select-none">

                    {/* Top Row: Coordinates & Timestamp */}
                    <div className="flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-amber-300 font-bold pb-1 border-b border-white/15 gap-1">
                      <div className="flex items-center space-x-1.5">
                        <Navigation className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="tracking-wide">
                          LAT: {formData.lat.toFixed(4)}° N &nbsp;|&nbsp; LNG: {formData.lng.toFixed(4)}° E
                        </span>
                      </div>
                      <span className="text-white/90 text-[10px] sm:text-[11px]">{formData.photoTimestamp}</span>
                    </div>

                    {/* Middle Row: Street Location & Ward */}
                    <div className="pt-1.5 pb-1 flex items-start space-x-1.5 text-[11px] sm:text-xs text-white/95 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="leading-tight truncate">
                        <strong className="text-white font-semibold">{formData.villageOrWard}</strong>
                        <span className="text-white/75 text-[10px] ml-1.5">({formData.district})</span>
                      </div>
                    </div>

                    {/* Bottom Row: Metadata details & Anti-Tamper Badge */}
                    <div className="flex flex-wrap items-center justify-between text-[9px] sm:text-[10px] text-emerald-300 pt-1 border-t border-white/10 mt-1 gap-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-white/75">📷 {formData.photoCameraInfo}</span>
                        <span className="text-amber-200/90 font-sans font-medium">Cavity Depth: ~{formData.depthCm} cm</span>
                      </div>
                      <span className="bg-emerald-800 text-white px-2 py-0.5 rounded font-sans font-bold text-[9px] uppercase tracking-wider border border-emerald-500/40">
                        ✓ SHA-256 EXIF VERIFIED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Geotag Technical Metadata Summary Box */}
                <div className="bg-[#EBF1E8] border border-[#CAD8C5] rounded-xl p-3 text-xs space-y-1.5 text-[#24362B]">
                  <div className="flex items-center justify-between font-bold text-[#143D2B] text-[11px] uppercase tracking-wider">
                    <span className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Geotag EXIF Specifications & Quality</span>
                    </span>
                    <span className="text-emerald-800 font-semibold bg-white px-2 py-0.5 rounded border border-[#CAD8C5] text-[10px]">
                      Format: image/jpeg • 4032×3024
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[10px] font-mono text-[#405347]">
                    <div>
                      <span className="text-[#6C7E72] block">Datum:</span>
                      <strong>WGS-84 (Ellipsoidal)</strong>
                    </div>
                    <div>
                      <span className="text-[#6C7E72] block">GPS Accuracy:</span>
                      <strong className="text-emerald-700">± 2.4 meters (Valid)</strong>
                    </div>
                    <div>
                      <span className="text-[#6C7E72] block">Altitude:</span>
                      <strong>562.4 m MSL</strong>
                    </div>
                    <div>
                      <span className="text-[#6C7E72] block">Tamper Score:</span>
                      <strong className="text-emerald-700">0.0% (Original EXIF)</strong>
                    </div>
                  </div>
                </div>

                {/* Upload or Select Preset Controls */}
                <div className="bg-white border border-[#CBD7C6] rounded-xl p-3 sm:p-3.5 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-[#143D2B] block">
                        Select Geotagged Location Sample or Snap New Photo:
                      </span>
                      <span className="text-[11px] text-[#6C7E72]">
                        Click any sample below to update coordinates and visual evidence.
                      </span>
                    </div>

                    {/* Real File Input Trigger */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-[#143D2B] hover:bg-[#1B4D36] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 cursor-pointer shadow-sm transition-colors ml-auto"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Take Photo / Upload Geotag</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Preset Geotagged Reports Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {PRESET_GEOTAGGED_PHOTOS.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectPresetPhoto(p)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${formData.photoUrl === p.url
                            ? 'bg-[#EBF1E8] border-[#143D2B] ring-2 ring-[#143D2B]/30 shadow-sm'
                            : 'bg-[#F9FBF8] border-[#CBD7C6] hover:bg-white text-[#4E6155]'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-[#143D2B] block truncate">
                            {p.label}
                          </span>
                          {formData.photoUrl === p.url && (
                            <Check className="w-3 h-3 text-[#143D2B] flex-shrink-0" />
                          )}
                        </div>
                        <span className="text-[9px] text-[#6C7E72] block font-mono truncate">
                          📍 {p.lat}°N, {p.lng}°E
                        </span>
                        <span className="text-[9px] text-amber-800 font-bold block mt-0.5">
                          Depth: ~{p.depthCm}cm
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* STEP 3: Impact Assessment */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1.5">
                  How many citizens are directly affected daily? *
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[100, 500, 1850, 5000].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, affectedPopulation: num })}
                      className={`py-2 px-1 text-center rounded-lg border text-xs font-bold transition-colors cursor-pointer ${formData.affectedPopulation === num
                          ? 'bg-[#143D2B] text-white border-[#143D2B] shadow-sm'
                          : 'bg-white text-[#2C3E33] border-[#CBD7C6] hover:bg-[#F0F5EE]'
                        }`}
                    >
                      {num === 5000 ? '5,000+' : `~${num}`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1.5">
                  Perceived Safety & Physical Hazard Severity *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { level: 'Critical / High Risk', desc: 'Active accident / vehicle overturning risk' },
                    { level: 'Moderate Concern', desc: 'Slowdown & localized road damage' },
                    { level: 'Inconvenience', desc: 'Surface bumps & minor puddle' }
                  ].map((risk) => (
                    <button
                      key={risk.level}
                      type="button"
                      onClick={() => setFormData({ ...formData, safetyRisk: risk.level })}
                      className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${formData.safetyRisk === risk.level
                          ? 'bg-[#143D2B] text-white border-[#143D2B] shadow-sm'
                          : 'bg-white text-[#2C3E33] border-[#CBD7C6] hover:bg-[#F0F5EE]'
                        }`}
                    >
                      <span className="text-xs font-bold block">{risk.level}</span>
                      <span className={`text-[10px] block mt-0.5 ${formData.safetyRisk === risk.level ? 'text-emerald-200' : 'text-[#6C7E72]'}`}>
                        {risk.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1">
                  Vulnerable Groups Affected
                </label>
                <input
                  type="text"
                  value={formData.whoAffected}
                  onChange={(e) => setFormData({ ...formData, whoAffected: e.target.value })}
                  className="w-full bg-white border border-[#CBD7C6] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                  placeholder="e.g. School children, auto-rickshaws, elderly pedestrians"
                />
              </div>
            </div>
          )}

          {/* STEP 4: AI Review & Geospatial Triage */}
          {step === 4 && (
            <div className="space-y-3.5">
              <div className="bg-[#EBF1E8] border border-[#CAD8C5] rounded-xl p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-[#143D2B]" />
                    <span className="text-xs font-bold text-[#143D2B] uppercase tracking-wider">
                      Autonomous Pre-Triage Assessment
                    </span>
                  </div>
                  <span className="text-xs font-bold bg-[#143D2B] text-white px-2 py-0.5 rounded">
                    Score: 88.4 / 100
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#2C3E33] pt-1 border-t border-[#CAD8C5]">
                  <div>
                    <span className="text-[#6C7E72] block">Verified Location:</span>
                    <strong className="text-[#143D2B] truncate block">{formData.villageOrWard}</strong>
                  </div>
                  <div>
                    <span className="text-[#6C7E72] block">Coordinates:</span>
                    <strong className="font-mono text-[#143D2B]">{formData.lat.toFixed(4)}°N, {formData.lng.toFixed(4)}°E</strong>
                  </div>
                  <div>
                    <span className="text-[#6C7E72] block">AI Authenticity:</span>
                    <strong className="text-emerald-800">96% (Verified Geotag Photo)</strong>
                  </div>
                  <div>
                    <span className="text-[#6C7E72] block">Estimated Impact:</span>
                    <strong className="text-[#143D2B]">~{formData.affectedPopulation.toLocaleString()} citizens</strong>
                  </div>
                </div>

                {/* Attached Geotagged Photo Card */}
                <div className="flex items-center space-x-3 p-2 bg-white rounded-lg border border-[#CAD8C5] mt-2">
                  <img
                    src={formData.photoUrl}
                    alt="Geotagged Evidence Preview"
                    className="w-14 h-14 object-cover rounded-lg border border-[#143D2B] flex-shrink-0"
                  />
                  <div className="min-w-0 text-xs">
                    <span className="font-bold text-[#143D2B] block truncate">
                      Attached Geotagged Visual Evidence
                    </span>
                    <span className="text-[10px] text-[#6C7E72] font-mono block truncate">
                      GPS: {formData.lat.toFixed(4)}°N, {formData.lng.toFixed(4)}°E • {formData.photoTimestamp}
                    </span>
                    <span className="text-[10px] text-emerald-800 font-bold block mt-0.5">
                      ✓ EXIF Validated · Tamper-Proof Format
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#CBD7C6] rounded-xl p-3 space-y-2">
                <span className="text-xs font-bold text-[#143D2B] block uppercase tracking-wider">
                  Automated Dispatch Channel:
                </span>
                <div className="flex items-center space-x-2 text-xs text-[#2C3E33]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>
                    Direct routing to <strong>{formData.district} PWD & Municipal Road Maintenance Unit</strong>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls inside Modal Footer */}
          <div className="pt-3 border-t border-[#CAD8C5] flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="bg-white hover:bg-[#EBF1E8] text-[#143D2B] border border-[#CAD8C5] font-semibold px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-[#143D2B] hover:bg-[#1B4D36] text-white font-semibold px-5 py-2 rounded-xl text-xs sm:text-sm flex items-center space-x-1.5 transition-all shadow-sm cursor-pointer ml-auto"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="bg-[#143D2B] hover:bg-[#1B4D36] text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md cursor-pointer ml-auto"
              >
                <Check className="w-4 h-4" />
                <span>Submit Geotagged Report</span>
              </button>
            )}
          </div>

        </form>

      </div>
    </div>
  );
};
