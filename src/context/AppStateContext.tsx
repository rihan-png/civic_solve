import React, { createContext, useContext, useState } from 'react';
import { Challenge, IncidentCluster, UserRole, PlatformNotification, ChallengeCategory, CitizenFeedback } from '../types';
import { MOCK_CHALLENGES, MOCK_INCIDENT_CLUSTERS, MOCK_NOTIFICATIONS } from '../data/mockData';

export type AppView = 
  | 'home' 
  | 'challenges' 
  | 'challenge-detail' 
  | 'citizen-portal'
  | 'map' 
  | 'how-it-works' 
  | 'ecosystem' 
  | 'government-dashboard' 
  | 'university-workspace' 
  | 'ngo-dashboard' 
  | 'industry-dashboard' 
  | 'admin-dashboard' 
  | 'impact' 
  | 'demo';

export interface UserSession {
  name: string;
  email: string;
  role: UserRole;
  roleTitle: string;
  organization: string;
  badge: string;
}

interface AppStateContextType {
  challenges: Challenge[];
  incidentClusters: IncidentCluster[];
  selectedChallenge: Challenge | null;
  setSelectedChallenge: (challenge: Challenge | null) => void;
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
  currentUser: UserSession | null;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authTargetRole: UserRole;
  setAuthTargetRole: (role: UserRole) => void;
  loginAs: (role: UserRole, customEmail?: string, customName?: string) => void;
  logout: () => void;
  language: 'en' | 'hi' | 'mr';
  setLanguage: (lang: 'en' | 'hi' | 'mr') => void;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  isReportModalOpen: boolean;
  setIsReportModalOpen: (open: boolean) => void;
  isAIEngineModalOpen: boolean;
  setIsAIEngineModalOpen: (open: boolean) => void;
  activeAIChallengeId: string | null;
  setActiveAIChallengeId: (id: string | null) => void;
  isResolutionModalOpen: boolean;
  setIsResolutionModalOpen: (open: boolean) => void;
  resolutionChallenge: Challenge | null;
  setResolutionChallenge: (challenge: Challenge | null) => void;
  notifications: PlatformNotification[];
  markNotificationAsRead: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterDistrict: string;
  setFilterDistrict: (district: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  submitNewChallenge: (newChallenge: Partial<Challenge>) => Challenge;
  verifyResolution: (challengeId: string, reviewerName: string, remarks: string) => void;
  acceptUniversityMatch: (challengeId: string, universityId: string) => void;
  submitCitizenFeedback: (
    challengeId: string, 
    feedback: { 
      rating: number; 
      satisfaction: 'Fully Resolved & Satisfactory' | 'Partially Resolved' | 'Unsatisfactory'; 
      comment: string; 
      postRepairPhotoUrl?: string; 
    }
  ) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [challenges, setChallenges] = useState<Challenge[]>(MOCK_CHALLENGES);
  const [incidentClusters] = useState<IncidentCluster[]>(MOCK_INCIDENT_CLUSTERS);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(MOCK_CHALLENGES[0]);
  const [activeRole, setActiveRole] = useState<UserRole>('citizen');
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authTargetRole, setAuthTargetRole] = useState<UserRole>('admin');
  const [language, setLanguage] = useState<'en' | 'hi' | 'mr'>('en');
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isAIEngineModalOpen, setIsAIEngineModalOpen] = useState(false);
  const [activeAIChallengeId, setActiveAIChallengeId] = useState<string | null>(null);
  const [isResolutionModalOpen, setIsResolutionModalOpen] = useState(false);
  const [resolutionChallenge, setResolutionChallenge] = useState<Challenge | null>(null);
  const [notifications, setNotifications] = useState<PlatformNotification[]>(MOCK_NOTIFICATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDistrict, setFilterDistrict] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');

  const loginAs = (role: UserRole, customEmail?: string, customName?: string) => {
    let user: UserSession;
    let targetView: AppView = 'home';

    if (role === 'admin' || role === 'government') {
      user = {
        name: customName || 'Er. Rajesh Sahay',
        email: customEmail || 'admin@civicsolve.gov.in',
        role: 'admin',
        roleTitle: 'Municipal Executive Engineer & ULB Admin',
        organization: 'Urban Local Body (ULB) & Smart Cities Mission',
        badge: '🏛️ Municipal Admin'
      };
      targetView = 'admin-dashboard';
    } else if (role === 'ngo') {
      user = {
        name: customName || 'Ashok Bhagat',
        email: customEmail || 'coordinator@vikasbharti.org',
        role: 'ngo',
        roleTitle: 'State Field Director',
        organization: 'Vikas Bharti Grassroots Civil Society',
        badge: '🤝 Registered NGO'
      };
      targetView = 'ngo-dashboard';
    } else if (role === 'university' || role === 'faculty' || role === 'student') {
      user = {
        name: customName || 'Dr. Ananya Sharma',
        email: customEmail || 'prof.sharma@bitmesra.ac.in',
        role: 'university',
        roleTitle: 'Head of Applied AI & IoT Lab',
        organization: 'Birla Institute of Technology (BIT Mesra)',
        badge: '🎓 HEI Research Faculty'
      };
      targetView = 'university-workspace';
    } else if (role === 'industry') {
      user = {
        name: customName || 'Vikram Mehta',
        email: customEmail || 'partnerships@jaldrishti.io',
        role: 'industry',
        roleTitle: 'Director of Civic Technologies',
        organization: 'JalDrishti IoT Systems & CSR Partner',
        badge: '🏭 Industry & MSME Lead'
      };
      targetView = 'industry-dashboard';
    } else {
      user = {
        name: customName || 'Citizen User',
        email: customEmail || 'citizen@civicsolve.in',
        role: 'citizen',
        roleTitle: 'Verified Resident',
        organization: 'Pimpri-Chinchwad Municipal Area',
        badge: '🇮🇳 Citizen'
      };
      targetView = 'home';
    }

    setCurrentUser(user);
    setActiveRole(user.role);
    setCurrentView(targetView);
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setCurrentUser(null);
    setActiveRole('citizen');
    setCurrentView('home');
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const submitNewChallenge = (data: Partial<Challenge>): Challenge => {
    const randomId = `CIV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newChallenge: Challenge = {
      id: randomId,
      title: data.title || 'Reported Community Challenge',
      description: data.description || '',
      category: (data.category as ChallengeCategory) || 'Road & Infrastructure',
      subcategory: data.subcategory || 'General Community Infrastructure',
      district: data.district || 'Ranchi',
      villageOrWard: data.villageOrWard || 'Ward 12',
      coordinates: data.coordinates || { lat: 23.3441, lng: 85.3096 },
      submittedAt: new Date().toISOString(),
      submittedBy: {
        name: data.submittedBy?.name || 'Concerned Citizen',
        role: 'citizen',
        verifiedCitizen: true
      },
      status: 'analyzing',
      priority: 'HIGH',
      priorityScore: 84,
      priorityBreakdown: {
        severity: 4,
        affectedPopulation: 1200,
        safetyRisk: 4,
        recurrence: 'Frequent',
        unresolvedDays: 1,
        formulaScore: 84.0,
        reasons: [
          'High safety risk detected in vicinity of public thoroughfare',
          'Multiple affected community households (1,200+ residents)',
          'High visual evidence confidence score'
        ]
      },
      evidence: data.evidence || {
        photos: [
          {
            id: `ev-${Date.now()}`,
            url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
            caption: 'Citizen uploaded evidence photo',
            timestamp: new Date().toISOString()
          }
        ]
      },
      aiAnalysis: {
        languageDetected: 'Hindi / English',
        intent: 'Civic Infrastructure Hazard Report',
        objectsDetected: ['Pavement failure', 'Pedestrian hazard'],
        claimConsistencyScore: 92,
        tamperingDetected: false,
        confidenceScore: 91,
        confidenceLabel: 'Likely Authentic',
        supportingSignals: [
          'Visual feature match confirms pavement defect depth > 20cm',
          'GPS coordinates match municipal ward boundary',
          'Audio voice transcription corroborated claim description'
        ],
        processingTimeMs: 440
      },
      routing: {
        routeType: 'ROUTINE_CIVIC',
        primaryResolver: {
          name: `${data.district || 'Ranchi'} Municipal Corporation`,
          type: 'government'
        },
        collaborators: [
          {
            name: 'Local NGO Volunteer Cell',
            type: 'ngo',
            contribution: 'Community safety barricading'
          }
        ],
        rationale: 'Standard municipal engineering dispatch required.'
      },
      impactMetrics: {
        beneficiariesCount: 1200,
        resolutionDays: 1,
        estimatedCostSaved: '₹35,000',
        sdgGoals: [11, 3]
      }
    };

    setChallenges(prev => [newChallenge, ...prev]);
    setSelectedChallenge(newChallenge);
    setActiveAIChallengeId(newChallenge.id);
    setIsAIEngineModalOpen(true);

    // Also add a real-time notification
    const newNotif: PlatformNotification = {
      id: `notif-${Date.now()}`,
      title: 'Challenge Registered & Analyzing',
      message: `Your report ${newChallenge.id} has been submitted to the AI Intelligence Engine for multi-modal analysis.`,
      timestamp: 'Just now',
      type: 'info',
      read: false,
      challengeId: newChallenge.id
    };
    setNotifications(prev => [newNotif, ...prev]);

    return newChallenge;
  };

  const verifyResolution = (challengeId: string, reviewerName: string, remarks: string) => {
    setChallenges(prev =>
      prev.map(ch => {
        if (ch.id === challengeId) {
          return {
            ...ch,
            status: 'resolved',
            resolutionVerification: {
              beforeImageUrl: ch.evidence.photos[0]?.url || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
              afterImageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
              beforeDetection: { object: 'Defects', count: 3, confidence: 0.94 },
              afterDetection: { object: 'Defects', count: 0, confidence: 0.98 },
              consistencyScore: 98,
              verdict: 'Resolution Evidence Consistent',
              humanSignOff: {
                isApproved: true,
                reviewerName,
                reviewerDesignation: 'Executive Engineer / Authorized Officer',
                reviewDate: new Date().toISOString(),
                remarks
              },
              beneficiaryFeedback: {
                surveyRespondents: 42,
                rating: 4.9,
                satisfactionRate: 98
              }
            }
          };
        }
        return ch;
      })
    );
  };

  const acceptUniversityMatch = (challengeId: string, universityId: string) => {
    setChallenges(prev =>
      prev.map(ch => {
        if (ch.id === challengeId && ch.universityMatches) {
          return {
            ...ch,
            status: 'in_development',
            universityMatches: ch.universityMatches.map(um =>
              um.id === universityId ? { ...um, status: 'accepted' } : um
            )
          };
        }
        return ch;
      })
    );
  };

  const submitCitizenFeedback = (
    challengeId: string, 
    feedback: { 
      rating: number; 
      satisfaction: 'Fully Resolved & Satisfactory' | 'Partially Resolved' | 'Unsatisfactory'; 
      comment: string; 
      postRepairPhotoUrl?: string; 
    }
  ) => {
    setChallenges(prev =>
      prev.map(ch => {
        if (ch.id === challengeId) {
          const feedbackObj: CitizenFeedback = {
            id: `fb-${Date.now()}`,
            challengeId,
            citizenName: currentUser?.name || 'Sunil Kumar Soren (Verified Resident)',
            rating: feedback.rating,
            satisfaction: feedback.satisfaction,
            comment: feedback.comment,
            postRepairPhotoUrl: feedback.postRepairPhotoUrl || ch.evidence.photos[0]?.url,
            submittedAt: new Date().toISOString(),
            adminAcknowledged: true,
            governmentRemarks: 'Reviewed by Municipal Quality Control Cell & Executive Engineer. Work certified as compliant with IRC standards.'
          };

          return {
            ...ch,
            status: 'impact_verified',
            citizenFeedback: feedbackObj
          };
        }
        return ch;
      })
    );

    const newNotif: PlatformNotification = {
      id: `notif-${Date.now()}`,
      type: 'success',
      title: 'Citizen Quality Feedback Received',
      message: `${feedback.rating}★ Review from citizen: "${feedback.comment.slice(0, 50)}..."`,
      timestamp: 'Just now',
      read: false,
      challengeId
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  return (
    <AppStateContext.Provider
      value={{
        challenges,
        incidentClusters,
        selectedChallenge,
        setSelectedChallenge,
        activeRole,
        setActiveRole,
        currentUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authTargetRole,
        setAuthTargetRole,
        loginAs,
        logout,
        language,
        setLanguage,
        currentView,
        setCurrentView,
        isReportModalOpen,
        setIsReportModalOpen,
        isAIEngineModalOpen,
        setIsAIEngineModalOpen,
        activeAIChallengeId,
        setActiveAIChallengeId,
        isResolutionModalOpen,
        setIsResolutionModalOpen,
        resolutionChallenge,
        setResolutionChallenge,
        notifications,
        markNotificationAsRead,
        searchQuery,
        setSearchQuery,
        filterDistrict,
        setFilterDistrict,
        filterCategory,
        setFilterCategory,
        submitNewChallenge,
        verifyResolution,
        acceptUniversityMatch,
        submitCitizenFeedback
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
