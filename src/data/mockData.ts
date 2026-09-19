import { Challenge, IncidentCluster, PlatformNotification } from '../types';

export const PLATFORM_STATS = {
  totalSubmitted: 12480,
  verifiedChallenges: 8920,
  projectsInitiated: 2340,
  universitiesConnected: 486,
  communityOrganizations: 312,
  industryStartupPartners: 178,
  solutionsPiloted: 1240,
  citizensBenefited: 485000,
  avgDaysToResolution: 18.4,
  patentsAndIPR: 42,
  startupsIncubated: 14
};

export const JHARKHAND_DISTRICTS = [
  { name: 'Ranchi', lat: 23.3441, lng: 85.3096, total: 2410, verified: 1940, critical: 4, inProgress: 88, resolved: 1420 },
  { name: 'East Singhbhum (Jamshedpur)', lat: 22.8046, lng: 86.2029, total: 1890, verified: 1450, critical: 2, inProgress: 64, resolved: 1120 },
  { name: 'Dhanbad', lat: 23.7957, lng: 86.4304, total: 1650, verified: 1210, critical: 3, inProgress: 52, resolved: 890 },
  { name: 'Bokaro', lat: 23.6693, lng: 86.1511, total: 1120, verified: 830, critical: 1, inProgress: 38, resolved: 640 },
  { name: 'Hazaribagh', lat: 23.9961, lng: 85.3670, total: 980, verified: 720, critical: 1, inProgress: 32, resolved: 560 },
  { name: 'Deoghar', lat: 24.4826, lng: 86.7011, total: 840, verified: 590, critical: 0, inProgress: 24, resolved: 480 },
  { name: 'Palamu', lat: 24.0416, lng: 84.0722, total: 920, verified: 610, critical: 2, inProgress: 28, resolved: 430 },
  { name: 'Gumla', lat: 23.0427, lng: 84.5422, total: 760, verified: 520, critical: 1, inProgress: 21, resolved: 390 },
  { name: 'Giridih', lat: 24.1856, lng: 86.3092, total: 680, verified: 480, critical: 0, inProgress: 19, resolved: 350 },
  { name: 'Dumka', lat: 24.2677, lng: 87.2489, total: 540, verified: 390, critical: 0, inProgress: 16, resolved: 290 }
];

export const MOCK_INCIDENT_CLUSTERS: IncidentCluster[] = [
  {
    id: 'INC-2841',
    title: 'Doranda Main Road Deep Crater Cluster Near St. Xavier School',
    district: 'Ranchi',
    coordinates: { lat: 23.3385, lng: 85.3212 },
    radiusKm: 1.2,
    challengeIds: ['CIV-2026-1042', 'CIV-2026-1043', 'CIV-2026-1047', 'CIV-2026-1051'],
    totalCitizenReports: 27,
    photoMatches: 14,
    videoReports: 3,
    ngoValidation: true,
    governmentConfirmation: true,
    status: 'In Resolution',
    summary: '27 duplicate citizen complaints consolidated into 1 actionable road safety incident, saving 88% municipal triage time.'
  },
  {
    id: 'INC-1932',
    title: 'Angara Block Ground Water Heavy Metal Contamination Belt',
    district: 'Ranchi',
    coordinates: { lat: 23.4182, lng: 85.5124 },
    radiusKm: 5.8,
    challengeIds: ['CIV-2026-0891', 'CIV-2026-0894', 'CIV-2026-0902'],
    totalCitizenReports: 18,
    photoMatches: 9,
    videoReports: 2,
    ngoValidation: true,
    governmentConfirmation: true,
    status: 'In Resolution',
    summary: 'Multi-village fluorosis risk flagged by community health workers. Assigned to BIT Mesra innovation project.'
  },
  {
    id: 'INC-3104',
    title: 'Barkagaon Paddy Crop Bacterial Blight Outbreak',
    district: 'Hazaribagh',
    coordinates: { lat: 23.8612, lng: 85.2155 },
    radiusKm: 8.4,
    challengeIds: ['CIV-2026-1184', 'CIV-2026-1189'],
    totalCitizenReports: 14,
    photoMatches: 8,
    videoReports: 1,
    ngoValidation: true,
    governmentConfirmation: false,
    status: 'Action Scheduled',
    summary: 'Fast-spreading bacterial leaf blight threatening 40 hectares. Routed to Birsa Agricultural University.'
  },
  {
    id: 'INC-0842',
    title: 'Damodar River Tributary Biomedical Waste Dumping',
    district: 'Dhanbad',
    coordinates: { lat: 23.7645, lng: 86.4118 },
    radiusKm: 2.1,
    challengeIds: ['CIV-2026-0562', 'CIV-2026-0568'],
    totalCitizenReports: 11,
    photoMatches: 6,
    videoReports: 2,
    ngoValidation: true,
    governmentConfirmation: true,
    status: 'Investigating',
    summary: 'Illegal biomedical waste discharge upstream of drinking intake. Critical environmental alert.'
  }
];

export const MOCK_CHALLENGES: Challenge[] = [
  {
    id: 'CIV-2026-1042',
    title: 'Hazardous Road Pothole Cluster & Waterlogging Near St. Xavier School',
    description: 'During monsoon, large deep potholes exceeding 1.5ft depth develop right in front of St. Xavier School gate in Doranda. School auto-rickshaws and two-wheelers frequently skid. Massive pedestrian traffic of school children daily.',
    category: 'Road & Infrastructure',
    subcategory: 'Potholes & Pavement Structural Failure',
    district: 'Ranchi',
    villageOrWard: 'Ward 36, Doranda',
    coordinates: { lat: 23.3385, lng: 85.3212 },
    submittedAt: '2026-09-01T09:14:00Z',
    submittedBy: {
      name: 'Sunil Kumar Soren',
      role: 'citizen',
      verifiedCitizen: true
    },
    status: 'resolved',
    priority: 'HIGH',
    priorityScore: 88,
    priorityBreakdown: {
      severity: 4,
      affectedPopulation: 1850,
      safetyRisk: 5,
      recurrence: 'Frequent',
      unresolvedDays: 19,
      formulaScore: 88.4,
      reasons: [
        'Immediate perimeter of primary & secondary school (1,850+ children)',
        'Heavy non-motorized and two-wheeler traffic',
        '27 independent citizen reports consolidated (Incident #INC-2841)',
        'Waterlogging obscures cavity depth causing acute hazard during monsoon'
      ]
    },
    incidentClusterId: 'INC-2841',
    evidence: {
      photos: [
        {
          id: 'ev-photo-1042-1',
          url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
          caption: 'Deep pothole cluster on Doranda main road right at pedestrian crossing',
          timestamp: '2026-09-01T09:10:00Z',
          detectedObjects: ['Pothole (Cavity 42cm)', 'Water Accumulation', 'School Bus']
        }
      ],
      audioRecordings: [
        {
          id: 'ev-aud-1042',
          url: '#',
          language: 'Hindi / Marathi',
          transcription: 'School ke paas road mein bahut bade potholes hain, bachho ki rickshaw palatne ka khatra hai.',
          duration: '0:14'
        }
      ],
      videos: [
        {
          id: 'ev-vid-1042',
          url: '#',
          duration: '0:26'
        }
      ]
    },
    aiAnalysis: {
      languageDetected: 'Hindi (Devanagari)',
      intent: 'Civic Infrastructure Hazard Report',
      objectsDetected: ['Pothole (3 distinct cavities)', 'Asphalt crumbling', 'Pedestrian crosswalk'],
      claimConsistencyScore: 94,
      tamperingDetected: false,
      confidenceScore: 92,
      confidenceLabel: 'Likely Authentic',
      supportingSignals: [
        'Visual object recognition confirms asphalt pavement crater depth > 25cm',
        'Geotag matches Ward 36 municipal GIS road layer',
        'Audio transcript matches reported spatial damage description',
        'Consolidated with 6 duplicate reports within 5.8 km radius into Incident #INC-2841'
      ],
      processingTimeMs: 420
    },
    routing: {
      routeType: 'ROUTINE_CIVIC',
      primaryResolver: {
        name: 'Ranchi Municipal Corporation (RMC) - Engineering Cell',
        type: 'government',
        department: 'Urban Road Infrastructure'
      },
      collaborators: [
        {
          name: 'Jan Kalyan Kendra Jharkhand',
          type: 'ngo',
          contribution: 'Field inspection & pedestrian barrier management during hot-mix asphalt application'
        }
      ],
      rationale: 'Physical road repair using standard bitumen hot-mix mastic asphalt. Does not require academic HEI research or specialized startup technology.'
    },
    resolutionVerification: {
      beforeImageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      afterImageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      beforeDetection: { object: 'Potholes', count: 3, confidence: 0.94 },
      afterDetection: { object: 'Potholes', count: 0, confidence: 0.97 },
      consistencyScore: 96,
      verdict: 'Resolution Evidence Consistent',
      humanSignOff: {
        isApproved: true,
        reviewerName: 'Er. Rajesh Sahay',
        reviewerDesignation: 'Executive Engineer, Ward 36, RMC',
        reviewDate: '2026-09-16T14:30:00Z',
        remarks: 'Cold patch compaction and surface re-carpeting inspected on-site. Drainage channel cleared.'
      },
      beneficiaryFeedback: {
        surveyRespondents: 38,
        rating: 4.8,
        satisfactionRate: 96
      }
    },
    impactMetrics: {
      beneficiariesCount: 1850,
      resolutionDays: 15,
      estimatedCostSaved: '₹48,000 via clustered repair dispatch',
      sdgGoals: [11, 3]
    }
  },
  {
    id: 'CIV-2026-0891',
    title: 'Severe Arsenic & High Fluoride Contamination in Angara Tribal Block Borewells',
    description: 'Groundwater testing in 4 tribal hamlets of Angara Block shows fluoride concentrations exceeding 3.8 mg/L (safe limit 1.0 mg/L) and arsenic traces. Over 80 children exhibit early dental fluorosis and elderly complain of joint stiffness. Routine handpump filters fail within 2 weeks due to iron clogging.',
    category: 'Water & Sanitation',
    subcategory: 'Heavy Metal & Fluoride Contamination',
    district: 'Ranchi',
    villageOrWard: 'Angara Gram Panchayat, Block Angara',
    coordinates: { lat: 23.4182, lng: 85.5124 },
    submittedAt: '2026-08-14T11:20:00Z',
    submittedBy: {
      name: 'Vikas Bharti Bishunpur Field Team',
      role: 'ngo',
      verifiedCitizen: true
    },
    status: 'field_testing',
    priority: 'CRITICAL',
    priorityScore: 96,
    priorityBreakdown: {
      severity: 5,
      affectedPopulation: 4200,
      safetyRisk: 5,
      recurrence: 'Continuous',
      unresolvedDays: 36,
      formulaScore: 96.8,
      reasons: [
        'Toxic heavy metal & fluoride levels exceeding WHO and BIS drinking limits',
        'Endemic dental and skeletal fluorosis detected among school children',
        'Routine municipal/panchayat filtration systems ineffective (frequent membrane clogging)',
        'Requires collaborative multidisciplinary innovation (electrocoagulation + IoT telemetry)'
      ]
    },
    incidentClusterId: 'INC-1932',
    evidence: {
      photos: [
        {
          id: 'ev-photo-0891-1',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
          caption: 'Handpump with reddish-brown heavy iron and fluoride precipitation in Angara',
          timestamp: '2026-08-14T11:15:00Z',
          detectedObjects: ['Handpump discharge', 'Precipitate staining', 'Community water vessel']
        }
      ],
      documents: [
        {
          id: 'ev-doc-0891',
          name: 'Angara_Panchayat_Water_Lab_Report_Aug2026.pdf',
          size: '2.4 MB'
        }
      ]
    },
    aiAnalysis: {
      languageDetected: 'English / Hindi',
      intent: 'Public Health & Drinking Water Crisis',
      objectsDetected: ['Water point', 'Heavy metal precipitation', 'Community well'],
      claimConsistencyScore: 98,
      tamperingDetected: false,
      confidenceScore: 95,
      confidenceLabel: 'Likely Authentic',
      supportingSignals: [
        'Uploaded certified lab spectrographic report corroborates fluoride 3.8 mg/L',
        'NGO field validation survey corroborated by 32 local household interviews',
        'Cross-matched with Jharkhand DWSD geological groundwater fault survey'
      ],
      processingTimeMs: 510
    },
    routing: {
      routeType: 'COLLABORATIVE_INNOVATION',
      primaryResolver: {
        name: 'Birla Institute of Technology (BIT Mesra)',
        type: 'university',
        department: 'Environmental Science & Engineering'
      },
      collaborators: [
        {
          name: 'Jharkhand Drinking Water & Sanitation Dept (DWSD)',
          type: 'government',
          contribution: 'Well site access, civil piping and solar booster pump installation'
        },
        {
          name: 'Vikas Bharti Bishunpur',
          type: 'ngo',
          contribution: 'Field trials, community mobilization and daily water consumption monitoring'
        },
        {
          name: 'JalDrishti IoT Systems',
          type: 'industry',
          contribution: 'Solar-powered IoT turbidity & fluoride continuous monitoring telemetry probe'
        }
      ],
      rationale: 'Standard municipal chlorination is inadequate for fluoride/arsenic removal. Requires multidisciplinary university research (electrocoagulation adsorption filter) combined with IoT telemetry and NGO field coordination.'
    },
    universityMatches: [
      {
        id: 'hei-bit-mesra',
        name: 'Birla Institute of Technology (BIT Mesra)',
        district: 'Ranchi',
        matchScore: 92,
        departments: ['Environmental Science & Engineering', 'Chemical Engineering', 'IoT & Embedded Systems'],
        labs: ['Advanced Water Quality Research Lab', 'IoT & Embedded Systems Lab'],
        reasons: [
          'Direct faculty expertise in solar electrocoagulation water purification',
          'Located 18 km from Angara Block field site (easy logistics for student teams)',
          'DST-supported Technology Business Incubator for rapid prototyping'
        ],
        status: 'accepted'
      },
      {
        id: 'hei-cuj-ranchi',
        name: 'Central University of Jharkhand (CUJ)',
        district: 'Ranchi',
        matchScore: 79,
        departments: ['Water Engineering & Management', 'Geoinformatics'],
        labs: ['Centre for Water Engineering Lab'],
        reasons: ['Strong watershed hydrological modeling expertise'],
        status: 'recommended'
      }
    ],
    project: {
      id: 'proj-angara-water',
      challengeId: 'CIV-2026-0891',
      title: 'Solar-Assisted Low-Cost Electrocoagulation Fluoride Removal & IoT Telemetry System',
      leadInstitution: 'Birla Institute of Technology (BIT Mesra)',
      facultyMentor: {
        name: 'Dr. Ananya Sharma',
        designation: 'Associate Professor & Head of Water Tech Lab',
        department: 'Environmental Science & Engineering',
        email: 'ananya.sharma@bitmesra.ac.in'
      },
      teamMembers: [
        { id: 'tm-1', name: 'Rohan Verma', department: 'Environmental Engineering', role: 'Filter Chemistry & Media Design', year: '4th Year B.Tech' },
        { id: 'tm-2', name: 'Sneha Kumari', department: 'Computer Science & Engg', role: 'IoT Cloud Dashboard & Telemetry', year: '3rd Year B.Tech' },
        { id: 'tm-3', name: 'Abhishek Roy', department: 'Electronics & Comm', role: 'Solar Micro-controller Circuitry', year: '4th Year B.Tech' },
        { id: 'tm-4', name: 'Priya Mahato', department: 'Data Science', role: 'Groundwater Predictive Analytics', year: 'M.Tech 2nd Year' }
      ],
      partnerOrganizations: [
        { name: 'Vikas Bharti Bishunpur', type: 'NGO', role: 'Beneficiary mobilization and field testing coordination' },
        { name: 'JalDrishti IoT Systems', type: 'Industry', role: 'Sensor calibration and telemetry hardware kits' },
        { name: 'Angara Gram Panchayat', type: 'Panchayat', role: 'Community land allocation and solar panel security' }
      ],
      milestones: [
        {
          id: 'ms-1',
          title: 'Problem Characterization & Water Sample Spectrometry',
          phase: 'Research',
          status: 'completed',
          deliverable: 'Chemical baseline report & sacrificial aluminum electrode reaction rate analysis',
          completedDate: '2026-08-25'
        },
        {
          id: 'ms-2',
          title: 'Fabrication of Solar Electrocoagulation Benchtop Prototype',
          phase: 'Prototype',
          status: 'completed',
          deliverable: '50 L/hour filtration unit with automated polarity reversal',
          completedDate: '2026-09-08'
        },
        {
          id: 'ms-3',
          title: 'Pilot Community Field Testing & Water Quality Telemetry',
          phase: 'Field Testing',
          status: 'in_progress',
          deliverable: 'Continuous 30-day trial with 32 tribal households in Angara'
        },
        {
          id: 'ms-4',
          title: 'Permanent Deployment & Panchayat Handover',
          phase: 'Deployment',
          status: 'pending',
          deliverable: 'Scaled 500 L/day village community plant with operator training'
        }
      ],
      tasks: [
        { id: 'tsk-1', title: 'Collect weekly water samples from 4 testing borewells', assignedTo: 'Rohan Verma', status: 'done', dueDate: '2026-09-12' },
        { id: 'tsk-2', title: 'Calibrate optical turbidity sensor with JalDrishti team', assignedTo: 'Sneha Kumari', status: 'in_progress', dueDate: '2026-09-20' },
        { id: 'tsk-3', title: 'Prepare solar battery charge-controller thermal box', assignedTo: 'Abhishek Roy', status: 'done', dueDate: '2026-09-15' },
        { id: 'tsk-4', title: 'Publish preliminary test report on open portal', assignedTo: 'Dr. Ananya Sharma', status: 'in_progress', dueDate: '2026-09-22' }
      ],
      fieldVisits: [
        {
          id: 'fv-1',
          ngoName: 'Vikas Bharti Bishunpur',
          visitDate: '2026-09-05',
          householdsSurveyed: 32,
          samplesCollected: 8,
          findings: 'Community enthusiasm very high. Fluoride levels dropped from 3.8 mg/L to 0.45 mg/L in prototype outlet (safe drinking standard). Zero iron staining observed.',
          evidencePhotoUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=600&q=80',
          verified: true
        }
      ]
    },
    impactMetrics: {
      beneficiariesCount: 4200,
      resolutionDays: 38,
      estimatedCostSaved: '₹3,40,000 vs commercial RO plant with zero brine rejection waste',
      sdgGoals: [6, 3, 9, 17],
      patentsFiled: 1,
      startupsSpawned: 1
    }
  },
  {
    id: 'CIV-2026-0412',
    title: 'Tribal Residential Ashram School Microgrid Inverter Failure & Battery Degradation',
    description: '120 tribal students in Netarhat residential school are plunged into darkness due to failure of a 5 kW hybrid solar inverter and battery cell unbalancing. Local grid electricity is available only 4 hours a day.',
    category: 'Clean Energy & Power',
    subcategory: 'Decentralized Solar & Battery Storage',
    district: 'Gumla',
    villageOrWard: 'Netarhat Hills, Block Bishunpur',
    coordinates: { lat: 23.4795, lng: 84.2682 },
    submittedAt: '2026-08-20T14:10:00Z',
    submittedBy: {
      name: 'Ashram School Principal (B. K. Munda)',
      role: 'citizen',
      verifiedCitizen: true
    },
    status: 'in_development',
    priority: 'HIGH',
    priorityScore: 84,
    priorityBreakdown: {
      severity: 4,
      affectedPopulation: 140,
      safetyRisk: 4,
      recurrence: 'Continuous',
      unresolvedDays: 30,
      formulaScore: 84.2,
      reasons: [
        'Night-time lighting for 120 residential tribal students completely compromised',
        'Refrigeration for anti-snake-venom vials and medicines offline',
        'Remote hilly terrain with no quick commercial servicing'
      ]
    },
    evidence: {
      photos: [
        {
          id: 'ev-photo-0412-1',
          url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
          caption: 'Ashram school rooftop solar array and tripped breaker box',
          timestamp: '2026-08-20T14:05:00Z'
        }
      ]
    },
    aiAnalysis: {
      languageDetected: 'Hindi',
      intent: 'Renewable Power Failure in Educational Institution',
      objectsDetected: ['Solar array', 'Power inverter', 'Lead acid battery bank'],
      claimConsistencyScore: 91,
      tamperingDetected: false,
      confidenceScore: 89,
      confidenceLabel: 'Likely Authentic',
      supportingSignals: [
        'Visual breaker fault corroborated by school administrative letterhead',
        'Remoteness verified via Netarhat terrain topography'
      ],
      processingTimeMs: 460
    },
    routing: {
      routeType: 'COLLABORATIVE_INNOVATION',
      primaryResolver: {
        name: 'National Institute of Technology (NIT Jamshedpur)',
        type: 'university',
        department: 'Smart Grid & Renewable Energy Center'
      },
      collaborators: [
        {
          name: 'SuryaUrja CleanTech MSME',
          type: 'industry',
          contribution: 'Supplying smart Lithium Iron Phosphate (LiFePO4) battery management system'
        },
        {
          name: 'Vikas Bharti Bishunpur',
          type: 'ngo',
          contribution: 'Field transport and school administration coordination'
        }
      ],
      rationale: 'Requires battery management cell-balancing retrofit and smart MPPT controller engineered by HEI electrical engineering team.'
    },
    impactMetrics: {
      beneficiariesCount: 140,
      resolutionDays: 28,
      estimatedCostSaved: '₹1,20,000',
      sdgGoals: [7, 4]
    }
  },
  {
    id: 'CIV-2026-1184',
    title: 'Bacterial Leaf Blight Epidemic across 40 Hectares Paddy in Barkagaon',
    description: 'Sudden yellowing and wilting of paddy leaves observed across 28 farm plots in Barkagaon. Over 60 smallholder tribal farmers at risk of total crop loss before harvest.',
    category: 'Agriculture & Irrigation',
    subcategory: 'Crop Pathogen & Plant Disease',
    district: 'Hazaribagh',
    villageOrWard: 'Barkagaon Village Panchayat',
    coordinates: { lat: 23.8612, lng: 85.2155 },
    submittedAt: '2026-09-04T08:30:00Z',
    submittedBy: {
      name: 'Rameshwar Mahto (Kisan Mitra)',
      role: 'citizen',
      verifiedCitizen: true
    },
    status: 'assigned',
    priority: 'HIGH',
    priorityScore: 82,
    priorityBreakdown: {
      severity: 4,
      affectedPopulation: 320,
      safetyRisk: 3,
      recurrence: 'Frequent',
      unresolvedDays: 15,
      formulaScore: 82.5,
      reasons: [
        'Rapid bacterial transmission under high monsoon humidity',
        'Severe livelihood threat for 60 marginal farming families',
        'Consolidated 14 farmer reports into Incident #INC-3104'
      ]
    },
    incidentClusterId: 'INC-3104',
    evidence: {
      photos: [
        {
          id: 'ev-photo-1184-1',
          url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
          caption: 'Severe leaf margin lesions indicative of Xanthomonas oryzae pv. oryzae',
          timestamp: '2026-09-04T08:25:00Z'
        }
      ]
    },
    aiAnalysis: {
      languageDetected: 'Hindi / Khortha',
      intent: 'Agricultural Disease Outbreak Alert',
      objectsDetected: ['Paddy foliage', 'Bacterial blight lesion', 'Stunted panicle'],
      claimConsistencyScore: 96,
      tamperingDetected: false,
      confidenceScore: 93,
      confidenceLabel: 'Likely Authentic',
      supportingSignals: [
        'VLM leaf pattern analysis matches Bacterial Leaf Blight (BLB) symptomology (94% match)',
        '14 concurrent reports from adjacent Barkagaon farm geocoordinates'
      ],
      processingTimeMs: 480
    },
    routing: {
      routeType: 'COLLABORATIVE_INNOVATION',
      primaryResolver: {
        name: 'Birsa Agricultural University (BAU Ranchi)',
        type: 'university',
        department: 'Plant Pathology & Agronomy'
      },
      collaborators: [
        {
          name: 'AgriKisan Precision Systems',
          type: 'industry',
          contribution: 'Drone-based bio-copper fungicide spraying and spectral imagery'
        },
        {
          name: 'Jharkhand Agriculture Directorate',
          type: 'government',
          contribution: 'Emergency seed subsidy and Krishi Vigyan Kendra extension team'
        }
      ],
      rationale: 'Requires scientific pathogen strain identification and targeted organic bactericide containment plan.'
    },
    impactMetrics: {
      beneficiariesCount: 320,
      resolutionDays: 14,
      estimatedCostSaved: '₹14,50,000 in saved paddy crop yield',
      sdgGoals: [2, 1, 8]
    }
  },
  {
    id: 'CIV-2026-0562',
    title: 'Hazardous Bio-Medical Waste Dumping Near Damodar River Tributary',
    description: 'Unregulated dumping of medical waste including used syringes, expired saline bottles, and pathology bags along the riverbank near Katras. Threatens downstream community bathing ghats and drinking intakes.',
    category: 'Environment & Waste',
    subcategory: 'Hazardous & Bio-Medical Waste',
    district: 'Dhanbad',
    villageOrWard: 'Katras Ward 12, Riverbank Road',
    coordinates: { lat: 23.7645, lng: 86.4118 },
    submittedAt: '2026-09-08T16:45:00Z',
    submittedBy: {
      name: 'Srijan Foundation Youth Green Watch',
      role: 'ngo',
      verifiedCitizen: true
    },
    status: 'analyzing',
    priority: 'CRITICAL',
    priorityScore: 95,
    priorityBreakdown: {
      severity: 5,
      affectedPopulation: 12000,
      safetyRisk: 5,
      recurrence: 'Frequent',
      unresolvedDays: 11,
      formulaScore: 95.0,
      reasons: [
        'Biohazard pathogens in direct proximity to surface drinking water intake',
        'Contamination of river sediment affecting 12,000+ downstream residents',
        'Illegal dumping violating Bio-Medical Waste Management Rules 2016'
      ]
    },
    incidentClusterId: 'INC-0842',
    evidence: {
      photos: [
        {
          id: 'ev-photo-0562-1',
          url: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
          caption: 'Piles of yellow-bagged biohazard clinical waste scattered on riverbank gravel',
          timestamp: '2026-09-08T16:30:00Z'
        }
      ]
    },
    aiAnalysis: {
      languageDetected: 'English / Bengali',
      intent: 'Illegal Biohazard Environmental Violation',
      objectsDetected: ['Biohazard bag', 'Clinical tubing', 'River embankment'],
      claimConsistencyScore: 97,
      tamperingDetected: false,
      confidenceScore: 96,
      confidenceLabel: 'Likely Authentic',
      supportingSignals: [
        'Visual detection identified yellow biohazard container marking',
        'Coordinates align with Damodar river buffer zone',
        'Corroborated by NGO field observer log'
      ],
      processingTimeMs: 440
    },
    routing: {
      routeType: 'COLLABORATIVE_INNOVATION',
      primaryResolver: {
        name: 'Jharkhand State Pollution Control Board (JSPCB) & IIT ISM Dhanbad',
        type: 'government',
        department: 'Regional Environmental Office'
      },
      collaborators: [
        {
          name: 'IIT (ISM) Dhanbad Centre of Mining Environment',
          type: 'university',
          contribution: 'Water sample toxicological assay and leachate tracing'
        },
        {
          name: 'Dhanbad Municipal Corporation',
          type: 'government',
          contribution: 'Immediate bio-secure transport to common bio-medical waste incineration facility'
        }
      ],
      rationale: 'Combines emergency government enforcement and bio-secure disposal with IIT ISM environmental water contamination monitoring.'
    },
    impactMetrics: {
      beneficiariesCount: 12000,
      resolutionDays: 11,
      estimatedCostSaved: 'Prevented major water-borne hepatitis epidemic',
      sdgGoals: [6, 12, 14, 3]
    }
  }
];

export const MOCK_NOTIFICATIONS: PlatformNotification[] = [
  {
    id: 'notif-1',
    title: 'Challenge Verified & Clustered',
    message: 'Your challenge CIV-2026-1042 has been verified by AI and consolidated into Incident #INC-2841 with 27 citizen reports.',
    timestamp: '10 minutes ago',
    type: 'success',
    read: false,
    challengeId: 'CIV-2026-1042'
  },
  {
    id: 'notif-2',
    title: 'University HEI Partnership Active',
    message: 'BIT Mesra accepted Challenge CIV-2026-0891 (Angara Fluoride Contamination). Multidisciplinary team led by Dr. Ananya Sharma mobilized.',
    timestamp: '1 hour ago',
    type: 'info',
    read: false,
    challengeId: 'CIV-2026-0891'
  },
  {
    id: 'notif-3',
    title: 'Field Validation Uploaded',
    message: 'NGO Vikas Bharti uploaded field validation results: 32 households surveyed and 8 water samples tested.',
    timestamp: '4 hours ago',
    type: 'info',
    read: true,
    challengeId: 'CIV-2026-0891'
  },
  {
    id: 'notif-4',
    title: 'Resolution Evidence Verified',
    message: 'Computer Vision check confirmed 0 potholes remaining at Doranda St. Xavier site. Executive Engineer signed off.',
    timestamp: '1 day ago',
    type: 'success',
    read: true,
    challengeId: 'CIV-2026-1042'
  }
];
