import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  HeartHandshake, 
  GraduationCap, 
  Rocket, 
  KeyRound, 
  Zap,
  Check
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { UserRole } from '../../types';

interface RoleAuthProfile {
  role: UserRole;
  label: string;
  icon: string;
  targetDashboard: string;
  targetDashboardName: string;
  name: string;
  email: string;
  demoPassword: string;
  organization: string;
  badge: string;
  badgeColor: string;
  description: string;
}

const ROLE_PROFILES: RoleAuthProfile[] = [
  {
    role: 'admin',
    label: 'Municipal Admin',
    icon: '🏛️',
    targetDashboard: 'admin-dashboard',
    targetDashboardName: 'Municipal Admin & AI Governance Portal',
    name: 'Er. Rajesh Sahay',
    email: 'admin@civicsolve.gov.in',
    demoPassword: 'Admin@2026#Civic',
    organization: 'Urban Local Body (ULB) & Smart Cities Mission',
    badge: 'Executive Engineer · ULB Admin',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    description: 'Urban Local Body command: supervise autonomous AI triage, review incident clusters, and execute priority overrides.'
  },
  {
    role: 'ngo',
    label: 'NGO & Civil Society',
    icon: '🤝',
    targetDashboard: 'ngo-dashboard',
    targetDashboardName: 'NGO & Grassroots Civil Society Portal',
    name: 'Ashok Bhagat',
    email: 'coordinator@vikasbharti.org',
    demoPassword: 'Ngo@2026#GroundTruth',
    organization: 'Vikas Bharti Grassroots Civil Society',
    badge: 'Registered NGO Partner',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    description: 'Ground-truth audits: verify geotagged civic defects, conduct water/road inspections, and coordinate local relief.'
  },
  {
    role: 'university',
    label: 'University & Academia',
    icon: '🎓',
    targetDashboard: 'university-workspace',
    targetDashboardName: 'University & Academic Research Workspace',
    name: 'Dr. Ananya Sharma',
    email: 'prof.sharma@bitmesra.ac.in',
    demoPassword: 'Research@2026#BIT',
    organization: 'Birla Institute of Technology (BIT Mesra)',
    badge: 'HEI Research Faculty',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Academic innovation: connect faculty labs and student engineering teams with real-world municipal infrastructure.'
  },
  {
    role: 'industry',
    label: 'Industry & CSR',
    icon: '🏭',
    targetDashboard: 'industry-dashboard',
    targetDashboardName: 'Industry, Startup & Corporate CSR Hub',
    name: 'Vikram Mehta',
    email: 'partnerships@jaldrishti.io',
    demoPassword: 'Industry@2026#CSR',
    organization: 'JalDrishti IoT Systems & CSR Partner',
    badge: 'Industry & MSME Lead',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'Public-private civic co-development: provide IoT sensor kits, mentor university teams, and deploy CSR capital.'
  },
  {
    role: 'citizen',
    label: 'Citizen Grievance',
    icon: '🇮🇳',
    targetDashboard: 'citizen-portal',
    targetDashboardName: 'Citizen Civic Hub & Live Work Progress Tracker',
    name: 'Sunil Kumar Soren',
    email: 'citizen@civicsolve.in',
    demoPassword: 'Citizen@2026#Track',
    organization: 'Resident, Ward 36, Doranda, Ranchi (Jharkhand)',
    badge: 'Verified Resident (Jan Parichay)',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Track municipal repair progress in real-time, inspect verified before/after geotag evidence, and submit quality feedback.'
  }
];

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    authTargetRole, 
    setAuthTargetRole, 
    loginAs 
  } = useAppState();

  const [selectedRole, setSelectedRole] = useState<UserRole>('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [autofillSuccess, setAutofillSuccess] = useState(false);

  // Sync with authTargetRole when modal opens
  useEffect(() => {
    if (isAuthModalOpen) {
      const initialRole = authTargetRole || 'admin';
      setSelectedRole(initialRole);
      const profile = ROLE_PROFILES.find(p => p.role === initialRole) || ROLE_PROFILES[0];
      setEmail(profile.email);
      setPassword(profile.demoPassword);
    }
  }, [isAuthModalOpen, authTargetRole]);

  if (!isAuthModalOpen) return null;

  const currentProfile = ROLE_PROFILES.find(p => p.role === selectedRole) || ROLE_PROFILES[0];

  const handleRoleChange = (role: UserRole) => {
    setSelectedRole(role);
    setAuthTargetRole(role);
    const profile = ROLE_PROFILES.find(p => p.role === role) || ROLE_PROFILES[0];
    setEmail(profile.email);
    setPassword(profile.demoPassword);
    setAutofillSuccess(false);
  };

  const handleFillDemoPass = () => {
    setEmail(currentProfile.email);
    setPassword(currentProfile.demoPassword);
    setAutofillSuccess(true);
    setTimeout(() => setAutofillSuccess(false), 2500);
  };

  const handleQuickCheck = (roleToLaunch: UserRole) => {
    setIsLoading(true);
    setTimeout(() => {
      loginAs(roleToLaunch);
      setIsLoading(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      loginAs(selectedRole, email, currentProfile.name);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#F4F6F0] border border-[#CBD7C6] rounded-2xl w-full max-w-xl text-[#18241D] shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn">
        
        {/* Official Header */}
        <div className="px-5 py-4 border-b border-[#CBD7C6] flex justify-between items-center bg-[#143D2B] text-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm sm:text-base font-bold tracking-tight">Portal Authentication & Sign In</h3>
                <span className="bg-emerald-800 text-emerald-200 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-emerald-600/40">
                  Jan Parichay SSO 2026
                </span>
              </div>
              <p className="text-[11px] text-emerald-200">
                Secure Quadruple-Helix Single Sign-On for Authorized Stakeholders
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Role Selector Tabs */}
        <div className="bg-[#EBF1E8] border-b border-[#CAD8C5] px-3 pt-2.5 pb-0">
          <div className="text-[10px] font-bold text-[#4E6155] uppercase tracking-wider mb-1.5 px-1 flex items-center justify-between">
            <span>Select Target Portal & Role:</span>
            <span className="text-emerald-800 font-semibold">Autofill Demo Supported</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
            {ROLE_PROFILES.map((p) => {
              const isSelected = selectedRole === p.role;
              return (
                <button
                  key={p.role}
                  type="button"
                  onClick={() => handleRoleChange(p.role)}
                  className={`py-2 px-2 rounded-t-xl text-left border-t border-x transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#F4F6F0] border-[#CBD7C6] text-[#143D2B] font-bold shadow-sm -mb-px pb-2.5'
                      : 'bg-[#DFE7DC] border-transparent text-[#5A6E60] hover:bg-[#E7EFE4] hover:text-[#143D2B]'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 text-xs truncate">
                    <span>{p.icon}</span>
                    <span className="truncate">{p.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          
          {/* Active Target Portal Information Card */}
          <div className="bg-white border border-[#CBD7C6] rounded-xl p-3.5 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#143D2B] flex items-center space-x-1.5">
                <span>{currentProfile.icon}</span>
                <span>Target: {currentProfile.targetDashboardName}</span>
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${currentProfile.badgeColor}`}>
                {currentProfile.badge}
              </span>
            </div>
            <p className="text-[11px] text-[#4A5D51] leading-relaxed">
              {currentProfile.description}
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-[#6C7E72] pt-1 border-t border-gray-100">
              <span className="font-semibold text-[#143D2B]">Designated Entity:</span>
              <span className="truncate">{currentProfile.organization}</span>
            </div>
          </div>

          {/* Quick Check & Autofill Banner */}
          <div className="bg-[#EBF1E8] border border-[#CAD8C5] rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-[#143D2B] text-white">
                <Zap className="w-4 h-4 text-amber-300" />
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-[#143D2B] block">Demo Credentials & Quick Check</span>
                <span className="text-[10px] text-[#55695B]">Instant evaluation without manual typing</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleFillDemoPass}
                className="flex-1 sm:flex-none bg-white hover:bg-[#F2F7EF] text-[#143D2B] border border-[#CAD8C5] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center justify-center space-x-1 transition-colors cursor-pointer shadow-sm"
              >
                {autofillSuccess ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <KeyRound className="w-3.5 h-3.5 text-[#143D2B]" />}
                <span>{autofillSuccess ? 'Filled!' : 'Fill Demo Pass'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickCheck(selectedRole)}
                className="flex-1 sm:flex-none bg-[#143D2B] hover:bg-[#1B4D36] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Quick Check (Launch)</span>
              </button>
            </div>
          </div>

          {/* Authentication Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider mb-1">
                Official Email / Authorized Username *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#CBD7C6] rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                  placeholder="e.g. officer@civicsolve.gov.in"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-[#143D2B] uppercase tracking-wider">
                  Security Password *
                </label>
                <span className="text-[10px] text-emerald-800 font-mono">
                  Demo: <strong className="font-semibold">{currentProfile.demoPassword}</strong>
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-[#CBD7C6] rounded-xl pl-9 pr-10 py-2.5 text-xs sm:text-sm text-[#14261C] font-mono focus:outline-none focus:ring-2 focus:ring-[#143D2B]/30"
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-800 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Presets Strip for all 4 personas */}
            <div className="pt-1">
              <span className="text-[11px] font-bold text-[#4E6155] block mb-1.5">
                Switch Persona & Quick Launch:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                {ROLE_PROFILES.map((p) => (
                  <button
                    key={p.role}
                    type="button"
                    onClick={() => handleQuickCheck(p.role)}
                    className="bg-white hover:bg-[#EBF1E8] border border-[#CBD7C6] rounded-lg p-1.5 text-left transition-colors cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-[#143D2B] block truncate">
                      {p.icon} {p.label}
                    </span>
                    <span className="text-[9px] text-[#6C7E72] block truncate">
                      {p.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#143D2B] hover:bg-[#1B4D36] text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer disabled:opacity-75"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying Credentials & Entering {currentProfile.label}...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Authenticate & Enter {currentProfile.targetDashboardName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </button>
            </div>
          </form>

          {/* Security & Compliance Footer */}
          <div className="pt-2 border-t border-[#CAD8C5] flex items-center justify-between text-[10px] text-[#6C7E72]">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>TLS 1.3 • AES-256 Session Token</span>
            </span>
            <span>Government of India Standards · 2026</span>
          </div>

        </div>

      </div>
    </div>
  );
};
