export interface DemoStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  stageBadge: string;
  persona: string;
  description: string;
  highlights: string[];
  challengeIdRef?: string;
}

export const SIH_DEMO_STEPS: DemoStep[] = [
  {
    stepNumber: 1,
    title: 'Citizen Voice & Multi-Modal Submission',
    subtitle: 'Overcoming language & literacy barriers through vernacular voice AI',
    stageBadge: '1. REPORT',
    persona: 'Citizen / Rural Beneficiary',
    description: 'A citizen reports a severe crater cluster near St. Xavier School in Doranda, Ranchi. Instead of filling bureaucratic forms, they speak in colloquial Hindi: "School ke paas road mein bahut bade potholes hain, bachho ki auto palatne ka khatra hai". CivicSolve captures the voice note, generates an instant transcription, and auto-tags GPS location with a photo.',
    highlights: [
      'Colloquial Hindi/Marathi voice-to-text with auto-punctuation',
      'Instant GPS geocoding and reverse ward mapping (Ward 36, Doranda)',
      'Multi-modal evidence handling: Photo, Audio, Video, and Impact questionnaire',
      'Generated unique reference: CIV-2026-1042'
    ],
    challengeIdRef: 'CIV-2026-1042'
  },
  {
    stepNumber: 2,
    title: 'AI Multi-Modal Understanding & Intent Extraction',
    subtitle: 'Transforming unstructured voice & images into structured engineering specs',
    stageBadge: '2. UNDERSTAND',
    persona: 'CivicSolve AI Core',
    description: 'The AI pipeline processes the submission in 420ms. Natural Language Processing identifies the core intent ("Civic Infrastructure Hazard"), extracts key entities (School Zone, Road Pothole, Children Risk), while Computer Vision runs bounding-box object detection confirming deep asphalt cavities.',
    highlights: [
      'Language identified: Hindi (Devanagari script)',
      'Entity Extraction: School Zone + Pothole Crater + Monsoon Skidding Risk',
      'Vision Model: 3 distinct road craters detected with 94% depth confidence',
      'Immediate taxonomy mapping: Road & Infrastructure → Potholes'
    ],
    challengeIdRef: 'CIV-2026-1042'
  },
  {
    stepNumber: 3,
    title: 'Explainable Evidence Verification & Fraud Prevention',
    subtitle: 'Distinguishing genuine community needs from fake or manipulated reports',
    stageBadge: '3. VERIFY',
    persona: 'Evidence Verification Service',
    description: 'CivicSolve never accepts claims blindly. It evaluates 5 independent signals: claim/image cross-modal consistency (94%), EXIF camera metadata integrity, device GPS proximity, historical user reputation, and cross-report agreement. The system outputs "Likely Authentic" (92% confidence) with an explainable audit trail.',
    highlights: [
      'No digital tampering or duplicate image reuse detected',
      'Cross-modal consistency: 94% alignment between voice transcript & photo pixels',
      'Human-in-the-loop guarantee: If confidence drops below 75%, flags "Requires Human Review"',
      'Prevents spam and artificial grievance inflation'
    ],
    challengeIdRef: 'CIV-2026-1042'
  },
  {
    stepNumber: 4,
    title: 'Semantic & Geospatial Incident Clustering',
    subtitle: 'Deduplicating 100 raw complaints into 12 actionable physical incidents',
    stageBadge: '4. CLUSTER',
    persona: 'Geospatial Intelligence (PostGIS + Vector DB)',
    description: 'Traditional systems create 27 independent tickets for the same Doranda pothole, overwhelming municipal engineers. CivicSolve utilizes vector semantic embeddings and geospatial radius clustering to consolidate 27 citizen reports into Incident #INC-2841, reducing administrative noise by 88%.',
    highlights: [
      'Consolidates 27 citizen reports, 14 photo uploads, and 2 video submissions',
      'Geographic cluster radius: 1.2 km around Doranda main road',
      'Includes 1 independent NGO field validation log and 1 ward engineer confirmation',
      'Eliminates duplicate work orders and streamlines contractor dispatch'
    ],
    challengeIdRef: 'CIV-2026-1042'
  },
  {
    stepNumber: 5,
    title: 'Explainable Priority Engine',
    subtitle: 'Transparent, mathematical urgency scoring replacing black-box queues',
    stageBadge: '5. PRIORITIZE',
    persona: 'Decision Support Engine',
    description: 'CivicSolve calculates priority using an explainable mathematical formula: Priority = Severity (4/5) × Affected Population (1,850 students) × Safety Hazard (5/5) × Recurrence (Frequent) × Time Unresolved (19 days). Doranda ranks HIGH PRIORITY (Score: 88.4/100).',
    highlights: [
      'Proximity factor: Directly outside school gate with high pedestrian child volume',
      'Seasonal multiplier: Heavy monsoon rains conceal pothole depth, increasing accident risk',
      'Clear, readable justification provided to both citizens and municipal commissioners',
      'Zero arbitrary prioritization; complete auditability'
    ],
    challengeIdRef: 'CIV-2026-1042'
  },
  {
    stepNumber: 6,
    title: 'Smart Routing: Routine Civic vs Collaborative Innovation',
    subtitle: 'Assigning routine repairs to municipal departments and complex challenges to universities',
    stageBadge: '6. ROUTE',
    persona: 'Smart Routing Orchestrator',
    description: 'CivicSolve distinguishes between problems requiring routine government execution vs. those requiring collaborative research. Doranda Pothole is routed to Ranchi Municipal Corporation + NGO field watch. Meanwhile, complex issues like Angara Arsenic Contamination (CIV-2026-0891) are automatically routed to the Quadruple Helix (Govt + University + NGO + Startup).',
    highlights: [
      'Rule: Not every pothole needs a university; not every problem needs industry funding',
      'Path A (Routine): Ranchi Municipal Corporation Urban Roads Division',
      'Path B (Complex): Angara Block Arsenic Contamination → BIT Mesra + DWSD + Vikas Bharti NGO + JalDrishti Startup',
      'Saves academic resources for problems requiring real technological breakthrough'
    ],
    challengeIdRef: 'CIV-2026-0891'
  },
  {
    stepNumber: 7,
    title: 'University Capability Matching & Multidisciplinary Teams',
    subtitle: 'Matching societal challenges with faculty research labs and student talent',
    stageBadge: '7. MATCH & MOBILIZE',
    persona: 'Higher Education Institution (HEI)',
    description: 'For the Angara groundwater contamination challenge, CivicSolve evaluates 5 Jharkhand HEIs and identifies Birla Institute of Technology (BIT Mesra) as the top match (92% match score). BIT Mesra forms a multidisciplinary student team mentored by Dr. Ananya Sharma comprising Environmental, CS, Electronics, and Data Science students.',
    highlights: [
      'Vector match against BIT Mesra’s DST-funded Water Tech Lab and IoT prototyping facilities',
      'Multidisciplinary Team: 2 Environmental Engg + 1 CS IoT + 1 Electronics + 1 Data Science student',
      'Real-world academic credit and capstone project integration for students',
      'Direct co-development with local NGO Vikas Bharti and JalDrishti IoT Startup'
    ],
    challengeIdRef: 'CIV-2026-0891'
  },
  {
    stepNumber: 8,
    title: 'Project Lifecycle & Milestone Tracking',
    subtitle: 'From research and prototyping to community field testing and deployment',
    stageBadge: '8. COLLABORATE & BUILD',
    persona: 'University + NGO + Startup Team',
    description: 'The team works in the CivicSolve Project Workspace through 4 disciplined milestones: Milestone 1 (Water Chemistry & Problem Characterization) → Milestone 2 (Solar-Assisted Electrocoagulation Prototype) → Milestone 3 (Community Field Trials with 32 households) → Milestone 4 (Municipal Deployment).',
    highlights: [
      'Milestone 1 Completed: Sacrificial aluminum electrode design optimized for local pH',
      'Milestone 2 Completed: Benchtop 50 L/hour filtration system fabricated at BIT TBI',
      'Milestone 3 In Progress: 32 tribal households surveyed in Angara; fluoride reduced from 3.8 to 0.45 mg/L',
      'Transparent task board, document sharing, and mentor sign-offs'
    ],
    challengeIdRef: 'CIV-2026-0891'
  },
  {
    stepNumber: 9,
    title: 'Computer Vision Resolution Verification',
    subtitle: 'Objective Before/After comparative proof before closing the lifecycle',
    stageBadge: '9. VERIFY RESOLUTION',
    persona: 'Quality Assurance & Ward Engineer',
    description: 'CivicSolve does not mark challenges resolved based on a paper receipt. For the Doranda road site, post-repair evidence photos undergo computer vision comparison: Before (3 potholes detected at 94% confidence) vs. After (0 potholes detected, asphalt compaction verified at 97% confidence). Executive Engineer Er. Rajesh Sahay adds digital sign-off.',
    highlights: [
      'Side-by-side Computer Vision before/after object detection comparison',
      '96% consistency score with fresh asphalt compaction surface detected',
      'Dual sign-off: Automated Computer Vision + Official Executive Engineer signature',
      'Citizen feedback loop: 38 local respondents gave a 4.8/5 satisfaction rating'
    ],
    challengeIdRef: 'CIV-2026-1042'
  },
  {
    stepNumber: 10,
    title: 'Measurable Societal & Institutional Impact',
    subtitle: 'Closing the loop with concrete social, economic, and research metrics',
    stageBadge: '10. MEASURE IMPACT',
    persona: 'State Leadership & Hackathon Jury',
    description: 'CivicSolve completes the journey by publishing verified impact data: 1,850 school children and daily commuters protected from road hazards; 4,200 villagers safeguarded from fluorosis; 1 student startup incubated (JalDrishti); 1 patent filed by BIT Mesra; average time-to-resolution slashed from 64 to 18.4 days.',
    highlights: [
      'Measurable outcomes: 485,000+ total beneficiaries across Jharkhand',
      'Academic ROI: 42 patents/IPRs filed, 14 student startups incubated',
      'Alignment with UN Sustainable Development Goals: SDG 3, 6, 9, 11',
      'Empowering the Smart India Hackathon vision into a real national innovation engine'
    ],
    challengeIdRef: 'CIV-2026-1042'
  }
];
