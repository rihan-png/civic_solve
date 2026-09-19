import { UniversityCapability, NGOPartner, IndustryPartner } from '../types';

export const UNIVERSITIES_DATABASE: UniversityCapability[] = [
  {
    id: 'hei-bit-mesra',
    name: 'Birla Institute of Technology (BIT Mesra)',
    district: 'Ranchi',
    state: 'Jharkhand',
    departments: [
      'Environmental Science & Engineering',
      'Computer Science & Engineering',
      'Electronics & Communication',
      'Chemical Engineering',
      'Civil Engineering'
    ],
    facultyCount: 142,
    researchAreas: [
      'Water Purification & Electrocoagulation',
      'IoT Sensor Telemetry',
      'Remote Sensing & GIS',
      'Rural Microgrids',
      'Machine Learning for Civic Tech'
    ],
    labs: [
      'Advanced Water Quality Research Lab',
      'IoT & Embedded Systems Lab',
      'Environmental Geotechnology Lab',
      'High Performance Computing Cluster'
    ],
    innovationCenter: 'TBI BIT Mesra - Technology Business Incubator (DST Supported)',
    incubationCenter: 'Birsa Innovation & Start-up Hub',
    studentSkills: [
      'Embedded C/C++',
      'Python / PyTorch',
      'Water Chemistry Analysis',
      'PCB Design',
      'GIS Mapping (QGIS)'
    ],
    availableEquipment: [
      'Atomic Absorption Spectrophotometer (AAS)',
      'UV-Vis Spectrophotometer',
      'Gas Chromatography-Mass Spectrometry (GC-MS)',
      'Solar Radiation Simulators'
    ],
    activeProjectsCount: 18,
    establishedYear: 1955
  },
  {
    id: 'hei-nit-jsr',
    name: 'National Institute of Technology (NIT Jamshedpur)',
    district: 'East Singhbhum (Jamshedpur)',
    state: 'Jharkhand',
    departments: [
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Computer Applications',
      'Metallurgical & Materials Engineering'
    ],
    facultyCount: 120,
    researchAreas: [
      'Renewable Energy Microgrids',
      'Structural Health Monitoring',
      'Battery Management Systems',
      'Autonomous Waste Sorting Robotics'
    ],
    labs: [
      'Smart Grid & Renewable Energy Center',
      'Robotics & Automation Lab',
      'Materials Testing & Characterization Lab'
    ],
    innovationCenter: 'Center of Excellence in Industry 4.0',
    incubationCenter: 'NITJ STEP (Science & Technology Entrepreneurs Park)',
    studentSkills: [
      'SolidWorks',
      'MATLAB / Simulink',
      'IoT Firmware Architecture',
      'Power Electronics Prototyping'
    ],
    availableEquipment: [
      'Solar Cell Tester',
      'Thermal Imaging Cameras',
      'Universal Testing Machine (UTM)',
      'Inductively Coupled Plasma Mass Spectrometry'
    ],
    activeProjectsCount: 14,
    establishedYear: 1960
  },
  {
    id: 'hei-iit-ism',
    name: 'Indian Institute of Technology (IIT ISM Dhanbad)',
    district: 'Dhanbad',
    state: 'Jharkhand',
    departments: [
      'Environmental Engineering',
      'Mining Machinery Engineering',
      'Computer Science',
      'Applied Geology',
      'Chemical Engineering'
    ],
    facultyCount: 310,
    researchAreas: [
      'Effluent Treatment & Industrial Waste Management',
      'Geospatial Groundwater Aquifer Modeling',
      'Air Quality Dispersion Modeling',
      'Clean Coal Technologies'
    ],
    labs: [
      'Centre of Mining Environment',
      'Applied Geophysics & Water Table Mapping Lab',
      'Advanced Air Quality Monitoring Station'
    ],
    innovationCenter: 'Centre for Innovation, Incubation and Entrepreneurship (CIIE)',
    incubationCenter: 'Atal Community Innovation Centre (ACIC IIT-ISM)',
    studentSkills: [
      'Hydrological Simulation (MODFLOW)',
      'Computer Vision for Defect Detection',
      'Environmental Impact Assessment',
      'Deep Learning'
    ],
    availableEquipment: [
      'X-ray Fluorescence (XRF) Analyzer',
      'Ion Chromatograph',
      'Drone LiDAR Scanner for Terrain Analysis'
    ],
    activeProjectsCount: 26,
    establishedYear: 1926
  },
  {
    id: 'hei-bau-ranchi',
    name: 'Birsa Agricultural University (BAU)',
    district: 'Ranchi',
    state: 'Jharkhand',
    departments: [
      'Agronomy',
      'Plant Pathology',
      'Soil Science & Agricultural Chemistry',
      'Agricultural Engineering',
      'Veterinary Science'
    ],
    facultyCount: 95,
    researchAreas: [
      'Crop Disease Diagnostics',
      'Rainwater Harvesting & Micro-Irrigation',
      'Soil Micronutrient Deficiencies in Chota Nagpur Plateau',
      'Tribal Agro-forestry'
    ],
    labs: [
      'Plant Tissue Culture & Pathology Lab',
      'Central Soil & Biofertilizer Testing Lab',
      'Farm Machinery Testing & Training Center'
    ],
    innovationCenter: 'Agri-Business Incubation Centre (R-ABI)',
    incubationCenter: 'Jharkhand Agri-Tech Entrepreneurship Park',
    studentSkills: [
      'Phytopathology Culturing',
      'Soil Salinity & pH Telemetry',
      'GIS Pest Spread Modeling',
      'Drip Irrigation Engineering'
    ],
    availableEquipment: [
      'PCR Thermal Cyclers for Crop Pathogen ID',
      'Soil Nutrient Flame Photometer',
      'Chlorophyll Fluorometer'
    ],
    activeProjectsCount: 11,
    establishedYear: 1981
  },
  {
    id: 'hei-cuj-ranchi',
    name: 'Central University of Jharkhand (CUJ)',
    district: 'Ranchi',
    state: 'Jharkhand',
    departments: [
      'Energy Engineering',
      'Water Engineering & Management',
      'Geoinformatics',
      'Tribal Studies & Rural Management'
    ],
    facultyCount: 75,
    researchAreas: [
      'Rural Community Water Management',
      'Biomass & Waste-to-Energy',
      'Indigenous Knowledge Systems & Social Innovation',
      'Hydrological Watershed Planning'
    ],
    labs: [
      'Centre for Water Engineering Lab',
      'Bio-Energy Testing Facility',
      'Remote Sensing & Spatial Analysis Lab'
    ],
    innovationCenter: 'CUJ Rural Technology Action Group (RuTAG)',
    incubationCenter: 'Jharkhand Social Enterprise Incubator',
    studentSkills: [
      'Community Participatory Rural Appraisal (PRA)',
      'Water Distribution Hydraulics (EPANET)',
      'Statistical Analysis (R, SPSS)'
    ],
    availableEquipment: [
      'Water Multi-parameter Sonde',
      'Bomb Calorimeter',
      'High-resolution Spectroradiometer'
    ],
    activeProjectsCount: 9,
    establishedYear: 2009
  }
];

export const NGOS_DATABASE: NGOPartner[] = [
  {
    id: 'ngo-vikas-bharti',
    name: 'Vikas Bharti Bishunpur',
    district: 'Gumla / Ranchi',
    focusAreas: ['Water Security', 'Rural Livelihoods', 'Tribal Healthcare', 'Community Mobilization'],
    fieldStaffCount: 180,
    activeCommunities: 420,
    completedValidations: 312,
    contactPerson: 'Ashok Bhagat (National Coordinator)'
  },
  {
    id: 'ngo-gram-jyoti',
    name: 'Gram Jyoti Sansthan',
    district: 'Hazaribagh / Bokaro',
    focusAreas: ['Decentralized Renewable Energy', 'Sanitation', 'Farmer Cooperatives'],
    fieldStaffCount: 45,
    activeCommunities: 140,
    completedValidations: 189,
    contactPerson: 'Sunita Devi (Field Director)'
  },
  {
    id: 'ngo-jan-kalyan',
    name: 'Jan Kalyan Kendra Jharkhand',
    district: 'East Singhbhum (Jamshedpur)',
    focusAreas: ['Urban Slum Infrastructure', 'Road Safety', 'Youth Education'],
    fieldStaffCount: 60,
    activeCommunities: 95,
    completedValidations: 240,
    contactPerson: 'Manoj Kumar Murmu (Executive Secretary)'
  },
  {
    id: 'ngo-srijan',
    name: 'Srijan Foundation',
    district: 'Dhanbad / Giridih',
    focusAreas: ['Child Rights', 'Clean Drinking Water', 'Community Health Monitoring'],
    fieldStaffCount: 52,
    activeCommunities: 165,
    completedValidations: 178,
    contactPerson: 'Pooja Srivastava (Program Head)'
  }
];

export const INDUSTRY_PARTNERS_DATABASE: IndustryPartner[] = [
  {
    id: 'ind-tsrds',
    name: 'Tata Steel Rural Development Society (TSRDS)',
    type: 'CSR Foundation',
    domain: 'Rural Infrastructure, Health & Water Systems',
    offerings: ['CSR Funding', 'Hardware', 'Pilot Deployment', 'Mentorship', 'Scaling'],
    activePilots: 12,
    mentorsCount: 24,
    headquarters: 'Jamshedpur, Jharkhand'
  },
  {
    id: 'ind-jaldrishti',
    name: 'JalDrishti IoT Systems',
    type: 'Startup',
    domain: 'Low-cost Optical Water Quality Telemetry',
    offerings: ['Technology', 'Hardware', 'Testing', 'Software', 'Mentorship'],
    activePilots: 6,
    mentorsCount: 8,
    headquarters: 'Ranchi, Jharkhand'
  },
  {
    id: 'ind-suryaurja',
    name: 'SuryaUrja CleanTech MSME',
    type: 'MSME',
    domain: 'Solar Microgrids & Rural Battery Backup Systems',
    offerings: ['Hardware', 'Manufacturing', 'Pilot Deployment', 'Testing'],
    activePilots: 5,
    mentorsCount: 6,
    headquarters: 'Bokaro Industrial Area, Jharkhand'
  },
  {
    id: 'ind-agrikisan',
    name: 'AgriKisan Precision Systems',
    type: 'Startup',
    domain: 'AI Crop Disease Detection & Bio-pesticide Delivery',
    offerings: ['Technology', 'Software', 'Mentorship', 'Scaling'],
    activePilots: 4,
    mentorsCount: 5,
    headquarters: 'Hazaribagh, Jharkhand'
  },
  {
    id: 'ind-apex-sensors',
    name: 'Apex Sensor Labs India',
    type: 'Enterprise',
    domain: 'Industrial & Municipal Telemetry Hardware',
    offerings: ['Hardware', 'Manufacturing', 'Technology', 'Testing'],
    activePilots: 9,
    mentorsCount: 15,
    headquarters: 'Dhanbad, Jharkhand'
  }
];
