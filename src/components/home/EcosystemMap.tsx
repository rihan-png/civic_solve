import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  Rocket, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';

export const EcosystemMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<'citizen' | 'government' | 'university' | 'ngo' | 'industry'>('university');
  const { setCurrentView, setActiveRole } = useAppState();

  const nodes = {
    citizen: {
      title: 'Citizens & Local Communities',
      icon: <User className="w-5 h-5 text-emerald-700" />,
      color: 'border-emerald-600/40 text-emerald-800 bg-emerald-50',
      tagline: 'Grassroots sensors reporting localized reality',
      capabilities: [
        'Voice reporting in native vernacular languages (Hindi, Marathi, regional dialects)',
        'Rich multi-modal evidence submission (photos, audio waveforms, video, documents)',
        'Real-time tracking of problem-to-solution milestones',
        'Post-intervention citizen satisfaction surveys and feedback'
      ],
      partnerLink: 'Pune, Pimpri-Chinchwad, Wagholi, and rural blocks',
      cta: 'Explore Citizen Reports',
      view: 'challenges'
    },
    government: {
      title: 'Government & Local Bodies (ULBs)',
      icon: <Building2 className="w-5 h-5 text-[#143D2B]" />,
      color: 'border-[#143D2B]/30 text-[#143D2B] bg-[#EBF1E8]',
      tagline: 'Statutory authority, public infrastructure & scale',
      capabilities: [
        'Review verified and deduplicated district/ward-level incidents',
        'Direct routine civic issues to internal municipal and engineering cells',
        'Sponsor pilot deployments for high-performing HEI prototypes',
        'Executive GIS district heatmaps and state-wide impact analytics'
      ],
      partnerLink: 'Pune Municipal Corp, PCMC, Maharashtra PWD, Smart Cities Mission',
      cta: 'Open Government Dashboard',
      view: 'government-dashboard'
    },
    university: {
      title: 'Higher Education Institutions (HEIs)',
      icon: <GraduationCap className="w-5 h-5 text-purple-700" />,
      color: 'border-purple-600/30 text-purple-800 bg-purple-50',
      tagline: 'Multidisciplinary faculty, research labs & student innovators',
      capabilities: [
        'Automated challenge-to-lab capability matching (e.g. COEP Tech 92% match)',
        'Form multidisciplinary student teams (CS, Environmental, Civil, Electronics)',
        'Academic credit integration: Final-year capstones & applied research projects',
        'Fabricate prototypes in DST-funded incubators and campus labs'
      ],
      partnerLink: 'COEP Tech, Pune University, MIT-WPU, PCCOE, VIT Pune',
      cta: 'Open University Workspace',
      view: 'university-workspace'
    },
    ngo: {
      title: 'NGOs & Community Organizations',
      icon: <HeartHandshake className="w-5 h-5 text-teal-700" />,
      color: 'border-teal-600/30 text-teal-800 bg-teal-50',
      tagline: 'Ground truth validation, field access & trust',
      capabilities: [
        'Independent physical inspection of reported problem sites',
        'Co-design human-centered solutions with affected vulnerable groups',
        'Host field testing trials and coordinate community mobilization',
        'Participate in final resolution sign-off alongside ULB engineers'
      ],
      partnerLink: 'Swachh Nagar Foundation, Janwani, Seva Sahayog, Local Resident Welfare Assns',
      cta: 'Open NGO Portal',
      view: 'ngo-dashboard'
    },
    industry: {
      title: 'Industry & Startup Partners',
      icon: <Rocket className="w-5 h-5 text-amber-700" />,
      color: 'border-amber-600/30 text-amber-800 bg-amber-50',
      tagline: 'Scale-up engineering, commercialization & CSR grants',
      capabilities: [
        'License verified university prototypes into scalable commercial products',
        'Provide industry mentorship, hardware testing rigs, and API credits',
        'CSR funding for high-impact social infrastructure pilots',
        'Hire student researchers demonstrated through solved challenges'
      ],
      partnerLink: 'Chakan Automotive Hub, Pune Tech Incubators, CII Western Region',
      cta: 'Open Industry Portal',
      view: 'industry-dashboard'
    }
  };

  return (
    <section className="bg-[#F4F6F0] py-14 border-b border-[#D8E2D5] text-[#1E3024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs font-bold text-[#143D2B] uppercase tracking-wider bg-[#DCE5D8] border border-[#CAD8C5] px-3.5 py-1 rounded-full">
            The Quadruple Helix Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14261C]">
            Interactive Stakeholder Ecosystem
          </h2>
          <p className="text-[#55695B] text-xs sm:text-sm">
            Select any stakeholder pillar to see how CivicSolve orchestrates responsibilities and drives collective impact.
          </p>
        </div>

        {/* Stakeholder Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(Object.keys(nodes) as Array<keyof typeof nodes>).map((key) => {
            const item = nodes[key];
            const isSelected = selectedNode === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedNode(key)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#143D2B] text-white border-[#143D2B] shadow-sm'
                    : 'bg-white/80 border-[#CBD7C6] text-[#4E6155] hover:bg-white hover:text-[#143D2B]'
                }`}
              >
                {item.icon}
                <span>{item.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Node View */}
        <div className="bg-white rounded-2xl border border-[#CBD7C6] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2.5 rounded-xl border ${nodes[selectedNode].color}`}>
                  {nodes[selectedNode].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#14261C]">
                    {nodes[selectedNode].title}
                  </h3>
                  <p className="text-xs text-[#55695B]">
                    {nodes[selectedNode].tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-[#143D2B] uppercase tracking-wider block">
                  Core Platform Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {nodes[selectedNode].capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#3D5244] bg-[#F8FAF7] p-2.5 rounded-lg border border-[#E2EBE0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-[#55695B] flex flex-wrap items-center justify-between gap-3">
                <span className="bg-[#EBF1E8] px-3 py-1 rounded-md text-[11px] text-[#2D4536]">
                  <strong>Affiliated Network:</strong> {nodes[selectedNode].partnerLink}
                </span>

                <button
                  onClick={() => {
                    setActiveRole(selectedNode as any);
                    setCurrentView(nodes[selectedNode].view as any);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#143D2B] hover:bg-[#1B4D36] text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  <span>{nodes[selectedNode].cta}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#EBF1E8] border border-[#CBD7C6] rounded-xl p-4 text-center space-y-3">
              <span className="text-[10px] font-bold text-[#143D2B] uppercase tracking-wider block">
                Ecosystem Interconnection
              </span>
              <div className="w-16 h-16 rounded-full bg-[#143D2B] text-white flex items-center justify-center mx-auto shadow-md">
                {nodes[selectedNode].icon}
              </div>
              <p className="text-xs text-[#3C5043]">
                Directly synchronized with District Geospatial Triage Layer & Smart Cities Mission Engine.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
