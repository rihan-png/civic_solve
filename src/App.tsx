import React from 'react';
import { AppStateProvider, useAppState } from './context/AppStateContext';
import { CopilotProvider, useCopilot } from './context/CopilotContext';
import { GovernmentBanner } from './components/layout/GovernmentBanner';
import { Navbar } from './components/layout/Navbar';
import { AndroidBottomNav } from './components/layout/AndroidBottomNav';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { ImpactStatsBar } from './components/home/ImpactStatsBar';
import { HowItWorks } from './components/home/HowItWorks';
import { ParadigmShift } from './components/home/ParadigmShift';
import { EcosystemMap } from './components/home/EcosystemMap';
import { ChallengeDirectory } from './components/challenges/ChallengeDirectory';
import { ChallengeDetailPage } from './components/challenges/ChallengeDetailPage';
import { CivicInteractiveMap } from './components/map/CivicInteractiveMap';
import { GovernmentDashboard } from './components/dashboards/GovernmentDashboard';
import { UniversityWorkspace } from './components/dashboards/UniversityWorkspace';
import { NGODashboard } from './components/dashboards/NGODashboard';
import { IndustryDashboard } from './components/dashboards/IndustryDashboard';
import { AdminDashboard } from './components/dashboards/AdminDashboard';
import { ImpactDashboard } from './components/impact/ImpactDashboard';
import { GuidedDemoMode } from './components/demo/GuidedDemoMode';
import { ReportWizardModal } from './components/citizen/ReportWizardModal';
import { CitizenPortal } from './components/citizen/CitizenPortal';
import { AuthModal } from './components/auth/AuthModal';
import { AIEngineModal } from './components/ai-engine/AIEngineModal';
import { AICopilotDrawer } from './components/copilot/AICopilotDrawer';
import { Sparkles } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentView } = useAppState();
  const { setIsOpen: setCopilotOpen } = useCopilot();

  const renderViewContent = () => (
    <>
      {currentView === 'home' && (
        <>
          <HeroSection />
          <ImpactStatsBar />
          <HowItWorks />
          <ParadigmShift />
          <EcosystemMap />
        </>
      )}

      {currentView === 'challenges' && <ChallengeDirectory />}
      {currentView === 'challenge-detail' && <ChallengeDetailPage />}
      {currentView === 'citizen-portal' && <CitizenPortal />}
      {currentView === 'map' && <CivicInteractiveMap />}
      {currentView === 'how-it-works' && <HowItWorks />}
      {currentView === 'ecosystem' && <EcosystemMap />}
      {currentView === 'government-dashboard' && <GovernmentDashboard />}
      {currentView === 'university-workspace' && <UniversityWorkspace />}
      {currentView === 'ngo-dashboard' && <NGODashboard />}
      {currentView === 'industry-dashboard' && <IndustryDashboard />}
      {currentView === 'admin-dashboard' && <AdminDashboard />}
      {currentView === 'impact' && <ImpactDashboard />}
      {currentView === 'demo' && <GuidedDemoMode />}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F0] font-sans text-[#18241D]">
      {/* Government of India Top Banner */}
      <GovernmentBanner />

      {/* Main CivicSolve Navbar */}
      <Navbar />

      {/* Main Responsive View Content */}
      <main className="flex-1 pb-16 md:pb-0">
        {renderViewContent()}
      </main>

      {/* Native Mobile Bottom Navigation (for touch devices) */}
      <AndroidBottomNav />

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <ReportWizardModal />
      <AuthModal />
      <AIEngineModal />
      <AICopilotDrawer />

      {/* Floating AI Copilot Button */}
      <button
        onClick={() => setCopilotOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-5 z-40 bg-[#143D2B] hover:bg-[#1B4D36] text-white font-bold px-4 py-3 rounded-full shadow-2xl flex items-center space-x-2 transition-all hover:scale-105 cursor-pointer border border-emerald-400/30"
        title="Open CivicSolve Intelligence AI Copilot"
        aria-label="Open AI Copilot"
      >
        <Sparkles className="w-5 h-5 text-amber-300" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">AI Copilot</span>
      </button>
    </div>
  );
};

export default function App() {
  return (
    <AppStateProvider>
      <CopilotProvider>
        <AppContent />
      </CopilotProvider>
    </AppStateProvider>
  );
}
