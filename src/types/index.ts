export type UserRole = 
  | 'citizen' 
  | 'ngo' 
  | 'government' 
  | 'university' 
  | 'student' 
  | 'faculty' 
  | 'industry' 
  | 'admin';

export type ChallengeCategory = 
  | 'Water & Sanitation'
  | 'Road & Infrastructure'
  | 'Clean Energy & Power'
  | 'Agriculture & Irrigation'
  | 'Healthcare Access'
  | 'Environment & Waste'
  | 'Education & Skill'
  | 'Accessibility & Mobility';

export type ChallengePriority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type ChallengeStatus = 
  | 'submitted'
  | 'analyzing'
  | 'verified'
  | 'clustered'
  | 'assigned'
  | 'in_development'
  | 'field_testing'
  | 'resolved'
  | 'impact_verified';

export interface EvidencePhoto {
  id: string;
  url: string;
  caption?: string;
  timestamp: string;
  detectedObjects?: string[];
}

export interface EvidenceAudio {
  id: string;
  url: string;
  language: string;
  transcription: string;
  duration: string;
}

export interface ChallengeEvidence {
  photos: EvidencePhoto[];
  audioRecordings?: EvidenceAudio[];
  videos?: { id: string; url: string; duration: string }[];
  documents?: { id: string; name: string; size: string }[];
}

export interface AIAnalysisData {
  languageDetected: string;
  intent: string;
  objectsDetected: string[];
  claimConsistencyScore: number; // 0 to 100
  tamperingDetected: boolean;
  confidenceScore: number; // 0 to 100
  confidenceLabel: 'Likely Authentic' | 'Requires Human Review' | 'Conflicting Evidence' | 'Likely Duplicate';
  supportingSignals: string[];
  semanticVectorId?: string;
  processingTimeMs: number;
}

export interface PriorityBreakdown {
  severity: number; // 1 to 5
  affectedPopulation: number;
  safetyRisk: number; // 1 to 5
  recurrence: 'Rare' | 'Occasional' | 'Frequent' | 'Continuous';
  unresolvedDays: number;
  formulaScore: number;
  reasons: string[];
}

export interface SmartRoutingInfo {
  routeType: 'ROUTINE_CIVIC' | 'COLLABORATIVE_INNOVATION';
  primaryResolver: {
    name: string;
    type: 'government' | 'university' | 'ngo' | 'industry';
    department?: string;
  };
  collaborators: {
    name: string;
    type: 'government' | 'university' | 'ngo' | 'industry';
    contribution: string;
  }[];
  rationale: string;
}

export interface UniversityMatch {
  id: string;
  name: string;
  district: string;
  matchScore: number;
  departments: string[];
  labs: string[];
  reasons: string[];
  status: 'recommended' | 'invited' | 'accepted' | 'declined';
}

export interface ProjectMilestone {
  id: string;
  title: string;
  phase: 'Research' | 'Prototype' | 'Field Testing' | 'Deployment';
  status: 'completed' | 'in_progress' | 'pending';
  deliverable: string;
  completedDate?: string;
  proofUrl?: string;
}

export interface ProjectTask {
  id: string;
  title: string;
  assignedTo: string;
  status: 'todo' | 'in_progress' | 'done';
  dueDate: string;
}

export interface FieldVisitRecord {
  id: string;
  ngoName: string;
  visitDate: string;
  householdsSurveyed: number;
  samplesCollected: number;
  findings: string;
  evidencePhotoUrl: string;
  verified: boolean;
}

export interface ProjectWorkspace {
  id: string;
  challengeId: string;
  title: string;
  leadInstitution: string;
  facultyMentor: {
    name: string;
    designation: string;
    department: string;
    email: string;
  };
  teamMembers: {
    id: string;
    name: string;
    department: string;
    role: string;
    year: string;
  }[];
  partnerOrganizations: {
    name: string;
    type: 'NGO' | 'Industry' | 'Government' | 'Panchayat';
    role: string;
  }[];
  milestones: ProjectMilestone[];
  tasks: ProjectTask[];
  fieldVisits: FieldVisitRecord[];
}

export interface ResolutionVerification {
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeDetection: { object: string; count: number; confidence: number };
  afterDetection: { object: string; count: number; confidence: number };
  consistencyScore: number; // e.g. 96
  verdict: 'Resolution Evidence Consistent' | 'Inconclusive' | 'Requires Human Audit';
  humanSignOff: {
    isApproved: boolean;
    reviewerName?: string;
    reviewerDesignation?: string;
    reviewDate?: string;
    remarks?: string;
  };
  beneficiaryFeedback: {
    surveyRespondents: number;
    rating: number; // 4.8 / 5
    satisfactionRate: number; // 94%
  };
}

export interface CitizenFeedback {
  id: string;
  challengeId: string;
  citizenName: string;
  rating: number; // 1 to 5
  satisfaction: 'Fully Resolved & Satisfactory' | 'Partially Resolved' | 'Unsatisfactory';
  comment: string;
  postRepairPhotoUrl?: string;
  submittedAt: string;
  adminAcknowledged: boolean;
  governmentRemarks?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: ChallengeCategory;
  subcategory: string;
  district: string;
  villageOrWard: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  submittedAt: string;
  submittedBy: {
    name: string;
    role: UserRole;
    verifiedCitizen: boolean;
  };
  status: ChallengeStatus;
  priority: ChallengePriority;
  priorityScore: number;
  priorityBreakdown: PriorityBreakdown;
  incidentClusterId?: string;
  evidence: ChallengeEvidence;
  aiAnalysis: AIAnalysisData;
  routing: SmartRoutingInfo;
  universityMatches?: UniversityMatch[];
  project?: ProjectWorkspace;
  resolutionVerification?: ResolutionVerification;
  citizenFeedback?: CitizenFeedback;
  impactMetrics: {
    beneficiariesCount: number;
    resolutionDays: number;
    estimatedCostSaved: string;
    sdgGoals: number[];
    patentsFiled?: number;
    startupsSpawned?: number;
  };
}

export interface IncidentCluster {
  id: string;
  title: string;
  district: string;
  coordinates: { lat: number; lng: number };
  radiusKm: number;
  challengeIds: string[];
  totalCitizenReports: number;
  photoMatches: number;
  videoReports: number;
  ngoValidation: boolean;
  governmentConfirmation: boolean;
  status: 'Investigating' | 'Action Scheduled' | 'In Resolution' | 'Resolved';
  summary: string;
}

export interface UniversityCapability {
  id: string;
  name: string;
  district: string;
  state: string;
  departments: string[];
  facultyCount: number;
  researchAreas: string[];
  labs: string[];
  innovationCenter: string;
  incubationCenter: string;
  studentSkills: string[];
  availableEquipment: string[];
  activeProjectsCount: number;
  establishedYear: number;
}

export interface NGOPartner {
  id: string;
  name: string;
  district: string;
  focusAreas: string[];
  fieldStaffCount: number;
  activeCommunities: number;
  completedValidations: number;
  contactPerson: string;
}

export interface IndustryPartner {
  id: string;
  name: string;
  type: 'Startup' | 'MSME' | 'Enterprise' | 'CSR Foundation';
  domain: string;
  offerings: string[];
  activePilots: number;
  mentorsCount: number;
  headquarters: string;
}

export interface PlatformNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'alert';
  read: boolean;
  challengeId?: string;
  roleTarget?: UserRole;
}
