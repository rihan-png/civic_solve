import React from 'react';
import { AppStateProvider, useAppState } from './context/AppStateContext';
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

const AppContent: React.FC = () => {
  const { currentView } = useAppState();

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

      {/* Global Modals & Engine Inspection */}
      <ReportWizardModal />
      <AuthModal />
      <AIEngineModal />
    </div>
  );
};

export default function App() {
  return (
    <AppStateProvider>
      <AppContent />
    </AppStateProvider>
  );
}
