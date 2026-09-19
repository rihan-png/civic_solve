import React, { useState } from 'react';
import { 
  FileEdit, 
  Cpu, 
  CheckCircle2, 
  BarChart3, 
  Users2, 
  Award,
  ArrowRight
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';

export const HowItWorks: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const { setCurrentView } = useAppState();

  const stages = [
    {
      id: 'report',
      step: '01',
      title: 'Report',
      icon: <FileEdit className="w-5 h-5" />,
      tagline: 'Multi-Modal Vernacular Citizen Crowdsourcing',
      description: 'Citizens submit challenges in colloquial Hindi, Marathi, or English via voice recordings, photos, or text. GPS coordinates and reverse administrative ward geocodes are automatically captured.',
      aiRole: 'Speech-to-text NLP auto-transcribes spoken dialect into structured engineering representations.',
      sampleOutput: {
        type: 'Citizen Voice Submission',
        content: '"Road mein bahut bade potholes hain, bachho ki auto palatne ka khatra hai."',
        metadata: 'Ward 36, Pune Region | GPS: 18.6279° N, 73.8009° E'
      }
    },
    {
      id: 'understand',
      step: '02',
      title: 'Understand',
      icon: <Cpu className="w-5 h-5" />,
      tagline: 'Semantic Intent & Visual Object Recognition',
      description: 'The platform understands the underlying physical reality of the problem. Vision Language Models inspect photos to detect cavities, structural fractures, contamination, or electrical faults.',
      aiRole: 'Object detection bounding boxes + domain classification (Road & Infrastructure → Pavements).',
      sampleOutput: {
        type: 'Computer Vision Bounding Box',
        content: '3 Deep Potholes detected (Cavity depth: ~38cm) with surrounding asphalt crumbling.',
        metadata: 'Confidence: 94% | Language: Hindi / Marathi'
      }
    },
    {
      id: 'verify',
      step: '03',
      title: 'Verify',
      icon: <CheckCircle2 className="w-5 h-5" />,
      tagline: 'Explainable Authenticity & Fraud Prevention',
      description: 'Before any agency is dispatched, CivicSolve cross-correlates 5 independent signals: claim-to-pixel consistency, EXIF camera timestamps, GPS boundaries, user reputation, and cross-report consensus.',
      aiRole: 'Outputs an explainable confidence score. If below 75%, flags "Requires Human Audit" rather than false rejection.',
      sampleOutput: {
        type: 'Authenticity Audit Trail',
        content: 'Likely Authentic (92% Confidence). Zero digital tampering indicators. Photo matches audio description.',
        metadata: 'Tampering: None | Cross-report agreement: High'
      }
    },
    {
      id: 'prioritize',
      step: '04',
      title: 'Prioritize',
      icon: <BarChart3 className="w-5 h-5" />,
      tagline: 'Mathematical, Explainable Urgency Scoring',
      description: 'Priority is never a black box. Calculated dynamically: Priority = Severity × Affected Population × Safety Hazard × Recurrence × Time Unresolved.',
      aiRole: 'Evaluates spatial GIS proximity to vulnerable institutions like schools, hospitals, and primary health centers.',
      sampleOutput: {
        type: 'Priority Assessment',
        content: 'HIGH PRIORITY (Score: 88.4 / 100). School zone perimeter (1,850+ children) + Monsoon waterlogging risk.',
        metadata: 'Severity: 4/5 | Safety Hazard: 5/5 | 3 Days Unresolved'
      }
    },
    {
      id: 'collaborate',
      step: '05',
      title: 'Collaborate',
      icon: <Users2 className="w-5 h-5" />,
      tagline: 'Smart Routing & Multidisciplinary HEI Teams',
      description: 'Routine municipal issues route directly to government departments. Societal challenges requiring innovation route to matched universities, NGOs, and startups.',
      aiRole: 'Semantic matching between challenge specs and university department labs, DST incubators, and student skill vectors.',
      sampleOutput: {
        type: 'Smart Routing Dispatch',
        content: 'Matched with COEP Tech & PCMC Field Squad + Swachh Community Lead.',
        metadata: 'Route Type: Collaborative Innovation | Team: 4 Students + 1 Lead'
      }
    },
    {
      id: 'resolve',
      step: '06',
      title: 'Resolve & Measure',
      icon: <Award className="w-5 h-5" />,
      tagline: 'Computer Vision Resolution Check & Measurable Impact',
      description: 'No challenge is marked resolved on paper receipts. Post-repair photos undergo computer vision comparison (Before vs After) corroborated by local beneficiary satisfaction surveys.',
      aiRole: 'Comparative computer vision confirms zero remaining potholes or safe sensor telemetry readings.',
      sampleOutput: {
        type: 'Resolution Audit Certificate',
        content: 'Before: 3 defects detected → After: 0 defects detected. Executive Engineer signed off.',
        metadata: 'Citizen Feedback: 4.8 / 5.0 (38 respondents) | Verified Impact Published'
      }
    }
  ];

  return (
    <section className="bg-[#F4F6F0] text-[#1A2520] py-14 sm:py-18 border-b border-[#D8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-[#143D2B] uppercase tracking-wider bg-[#DCE5D8] border border-[#CAD8C5] px-3.5 py-1 rounded-full">
            Autonomous Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C]">
            How CivicSolve Works
          </h2>
          <p className="text-[#55675C] text-sm sm:text-base">
            From raw community voice report to verified deployment and measurable societal impact in six structured stages.
          </p>
        </div>

        {/* Stage Timeline Buttons */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`flex flex-col items-center p-2 sm:p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#143D2B] text-white border-[#143D2B] shadow-sm scale-102'
                    : 'bg-white/80 border-[#CBD7C6] text-[#4F6255] hover:bg-white hover:text-[#143D2B]'
                }`}
              >
                <span className={`text-[10px] font-extrabold tracking-wider mb-1 ${
                  isSelected ? 'text-emerald-300' : 'text-[#7B8F82]'
                }`}>
                  STAGE {stage.step}
                </span>
                <div className={`p-2 rounded-lg mb-1.5 ${
                  isSelected ? 'bg-emerald-950 text-white' : 'bg-[#EBF1E8] text-[#143D2B]'
                }`}>
                  {stage.icon}
                </div>
                <span className="text-xs font-bold leading-tight">{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-white rounded-2xl border border-[#CBD7C6] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-white bg-[#143D2B] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Stage {stages[activeStage].step}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#14261C]">
                  {stages[activeStage].title}: {stages[activeStage].tagline}
                </h3>
              </div>

              <p className="text-sm text-[#4E6155] leading-relaxed">
                {stages[activeStage].description}
              </p>

              <div className="bg-[#EBF1E8] border-l-4 border-[#143D2B] p-3.5 rounded-r-lg text-xs space-y-1">
                <span className="font-bold text-[#143D2B] uppercase tracking-wider block text-[10px]">
                  Autonomous AI Engine Role:
                </span>
                <p className="text-[#324538]">{stages[activeStage].aiRole}</p>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => setCurrentView('challenges')}
                  className="bg-[#143D2B] hover:bg-[#1B4D36] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <span>See In Live Challenges</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Simulated AI Output Inspection */}
            <div className="lg:col-span-5 bg-[#F6FAF4] border border-[#CBD7C6] rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-[#D8E2D5]">
                <span className="text-[10px] font-bold text-[#143D2B] uppercase tracking-wider">
                  Live Triage Telemetry
                </span>
                <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                  Status: Validated
                </span>
              </div>

              <div className="space-y-1 text-[#223328]">
                <p className="text-[11px] font-sans font-bold text-[#143D2B]">
                  {stages[activeStage].sampleOutput.type}:
                </p>
                <p className="text-xs bg-white p-2.5 rounded border border-[#D8E2D5] font-sans text-[#1A2520] italic">
                  {stages[activeStage].sampleOutput.content}
                </p>
              </div>

              <div className="pt-1 text-[10px] text-[#55695B] font-sans flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>{stages[activeStage].sampleOutput.metadata}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
