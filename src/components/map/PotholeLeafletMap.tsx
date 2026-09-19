import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapPin, Navigation, ShieldCheck, CheckCircle2, Clock, AlertTriangle, Layers, RotateCcw } from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';

export interface PotholeGeoReport {
  id: string;
  name: string;
  streetAddress: string;
  landmark: string;
  district: string;
  lat: number;
  lng: number;
  depthCm: number;
  status: 'Critical' | 'In Repair' | 'Resolved';
  reportsCount: number;
  timeAgo: string;
  cvConfidence: number;
  assignedSquad: string;
  photoUrl: string;
  description: string;
}

const REAL_POTHOLE_REPORTS: PotholeGeoReport[] = [
  {
    id: 'POT-RAN-101',
    name: 'Severe 22cm Asphalt Crater & Skid Hazard',
    streetAddress: 'Mahatma Gandhi Marg, Overbridge Approach at Sujata Chowk',
    landmark: 'Near Ranchi Railway Station & Gurunanak School',
    district: 'Ranchi',
    lat: 23.3569,
    lng: 85.3240,
    depthCm: 22,
    status: 'Critical',
    reportsCount: 42,
    timeAgo: 'Reported 3 hours ago',
    cvConfidence: 96,
    assignedSquad: 'Ranchi Municipal Corporation PWD Bitumen Unit 3',
    photoUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80',
    description: 'Deep pavement crater exceeding 22cm depth right at bus stop. Auto-rickshaws and two-wheelers frequently skidding in rain.'
  },
  {
    id: 'POT-RAN-102',
    name: 'Harmu Bypass Road Pavement Structural Failure',
    streetAddress: 'Harmu Housing Colony, Sahjanand Chowk Main Carriageway',
    landmark: 'Opposite State Guest House & Harmu Ground',
    district: 'Ranchi',
    lat: 23.3625,
    lng: 85.3090,
    depthCm: 19,
    status: 'Critical',
    reportsCount: 38,
    timeAgo: 'Reported 5 hours ago',
    cvConfidence: 94,
    assignedSquad: 'Harmu Ward 26 Rapid PWD Crew',
    photoUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80',
    description: 'Large asphalt void causing severe traffic bottleneck during peak morning and evening Ranchi commute.'
  },
  {
    id: 'POT-RAN-103',
    name: 'Circular Road Lalpur Chowk Approach Cavity',
    streetAddress: 'Circular Road near Nucleus Mall & Lalpur Chowk',
    landmark: 'Outside Women\'s College Science Block',
    district: 'Ranchi',
    lat: 23.3725,
    lng: 85.3340,
    depthCm: 14,
    status: 'In Repair',
    reportsCount: 35,
    timeAgo: 'In Repair (Bitumen dispatched)',
    cvConfidence: 91,
    assignedSquad: 'Ranchi Municipal PWD Bitumen Squad 2',
    photoUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80',
    description: 'Crater around stormwater chamber. Asphalt compaction currently in progress by municipal road crew.'
  },
  {
    id: 'POT-RAN-104',
    name: 'Kanke Road BAU Agriculture Corridor Pothole',
    streetAddress: 'Kanke Road near Birsa Agricultural University Entrance',
    landmark: 'Near Rock Garden & Kanke Dam Road Junction',
    district: 'Ranchi',
    lat: 23.4020,
    lng: 85.3235,
    depthCm: 16,
    status: 'Critical',
    reportsCount: 24,
    timeAgo: 'Reported 1 day ago',
    cvConfidence: 93,
    assignedSquad: 'Ranchi North Road Infrastructure Div',
    photoUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80',
    description: 'Sharp-edged crater submerged under water. Multiple two-wheeler tire punctures reported.'
  },
  {
    id: 'POT-JAM-105',
    name: 'Bistupur Inner Circle Boulevard Road Cavity',
    streetAddress: 'Inner Circle Road near Gopal Maidan & Main Post Office',
    landmark: 'Opposite Regal Building & Bistupur Market',
    district: 'East Singhbhum (Jamshedpur)',
    lat: 22.7925,
    lng: 86.1770,
    depthCm: 25,
    status: 'Critical',
    reportsCount: 29,
    timeAgo: 'Reported 8 hours ago',
    cvConfidence: 97,
    assignedSquad: 'JNAC Urban Road Maintenance Cell',
    photoUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    description: 'Sub-base collapse under heavy transport traffic. Immediate concrete filling dispatched.'
  },
  {
    id: 'POT-DHN-106',
    name: 'Bank More Station Road - Repaired & Verified',
    streetAddress: 'Dhanbad Station South Approach Road, Bank More',
    landmark: 'Near Shastri Nagar & Bank More Chowk',
    district: 'Dhanbad',
    lat: 23.7920,
    lng: 86.4300,
    depthCm: 0,
    status: 'Resolved',
    reportsCount: 31,
    timeAgo: 'Resolved · CV Verified',
    cvConfidence: 98,
    assignedSquad: 'Dhanbad Municipal Corporation Bitumen Squad',
    photoUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    description: 'Hot-mix asphalt patch completed. Computer vision audit confirms 0 surface defects and flush grade.'
  }
];

interface PotholeLeafletMapProps {
  onSelectPothole?: (pothole: PotholeGeoReport) => void;
  selectedPotholeId?: string;
  heightClass?: string;
}

export const PotholeLeafletMap: React.FC<PotholeLeafletMapProps> = ({
  onSelectPothole,
  selectedPotholeId,
  heightClass = "h-[320px] sm:h-[420px]"
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const { setIsReportModalOpen, challenges } = useAppState();

  const [activeFilter, setActiveFilter] = useState<'all' | 'critical' | 'resolved'>('all');

  // Combine mock reports with any newly submitted citizen road challenges in Jharkhand
  const allReports: PotholeGeoReport[] = [
    ...REAL_POTHOLE_REPORTS,
    ...challenges
      .filter(ch => ch.category === 'Road & Infrastructure' && ch.id.startsWith('CIV-') && !REAL_POTHOLE_REPORTS.some(r => r.id === ch.id))
      .map(ch => ({
        id: ch.id,
        name: ch.title,
        streetAddress: ch.villageOrWard,
        landmark: `${ch.district} Municipal Area`,
        district: ch.district,
        lat: ch.coordinates.lat,
        lng: ch.coordinates.lng,
        depthCm: 22,
        status: (ch.status === 'resolved' || ch.status === 'impact_verified' 
          ? 'Resolved' 
          : ch.status === 'assigned' || ch.status === 'in_development' 
          ? 'In Repair' 
          : 'Critical') as 'Critical' | 'In Repair' | 'Resolved',
        reportsCount: 1,
        timeAgo: 'Reported by Citizen',
        cvConfidence: ch.aiAnalysis?.confidenceScore || 94,
        assignedSquad: ch.routing?.primaryResolver?.name || 'Ranchi Municipal PWD Unit',
        photoUrl: ch.evidence?.photos?.[0]?.url || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80',
        description: ch.description
      }))
  ];

  const [activePothole, setActivePothole] = useState<PotholeGeoReport>(allReports[0]);

  // Center of Ranchi (Capital of Jharkhand)
  const defaultCenter: [number, number] = [23.3569, 85.3240];
  const defaultZoom = 12;

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Initialize real Leaflet map
    const map = L.map(mapContainerRef.current, {
      center: defaultCenter,
      zoom: defaultZoom,
      zoomControl: false,
      attributionControl: false
    });

    // Add crisp OpenStreetMap / CartoDB tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd'
    }).addTo(map);

    // Zoom control in top-left
    L.control.zoom({ position: 'topleft' }).addTo(map);

    mapInstanceRef.current = map;

    // Cleanup on unmount
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update markers whenever filter or data changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    const filtered = allReports.filter(p => {
      if (activeFilter === 'critical') return p.status === 'Critical';
      if (activeFilter === 'resolved') return p.status === 'Resolved';
      return true;
    });

    filtered.forEach(pothole => {
      const isSelected = activePothole?.id === pothole.id;

      const pinColor = pothole.status === 'Critical'
        ? '#DC2626'
        : pothole.status === 'In Repair'
          ? '#D97706'
          : '#16A34A';

      const iconHtml = `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          ${pothole.status === 'Critical' ? `<div style="position: absolute; width: 34px; height: 34px; border-radius: 9999px; background-color: rgba(220, 38, 38, 0.35); animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>` : ''}
          <div style="width: ${isSelected ? '32px' : '26px'}; height: ${isSelected ? '32px' : '26px'}; border-radius: 9999px; background-color: ${pinColor}; border: 2.5px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: bold; transition: transform 0.2s;">
            ${pothole.status === 'Resolved' ? '✓' : '🕳️'}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-pothole-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([pothole.lat, pothole.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setActivePothole(pothole);
        if (onSelectPothole) onSelectPothole(pothole);
        map.panTo([pothole.lat, pothole.lng], { animate: true });
      });

      markersRef.current[pothole.id] = marker;
    });
  }, [activeFilter, activePothole, allReports, onSelectPothole]);

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(defaultCenter, defaultZoom, { animate: true });
    }
  };

  const handleSelectPothole = (p: PotholeGeoReport) => {
    setActivePothole(p);
    if (onSelectPothole) onSelectPothole(p);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.panTo([p.lat, p.lng], { animate: true });
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#BDCCB9] bg-[#E7EFE4] shadow-md">

      {/* Top Map Control Bar with Pothole Filter Tabs */}
      <div className="bg-[#DCE5D8] px-3 py-2 border-b border-[#CAD8C5] flex flex-wrap items-center justify-between gap-2 z-20 relative">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-[#143D2B] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span>Reported Pothole Hotspots (Real GPS)</span>
          </div>
          <span className="text-[10px] bg-white/80 text-[#143D2B] font-semibold px-2 py-0.5 rounded-full border border-[#CAD8C5]">
            Jharkhand Municipal Road Network (Ranchi & Urban Corridors)
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1 text-[11px]">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-0.5 rounded-md font-medium transition-colors ${activeFilter === 'all' ? 'bg-[#143D2B] text-white font-bold' : 'bg-white/80 text-[#2C3E33] hover:bg-white'
              }`}
          >
            All ({REAL_POTHOLE_REPORTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('critical')}
            className={`px-2.5 py-0.5 rounded-md font-medium transition-colors ${activeFilter === 'critical' ? 'bg-red-700 text-white font-bold' : 'bg-white/80 text-red-700 hover:bg-white'
              }`}
          >
            Critical Cavities
          </button>
          <button
            onClick={() => setActiveFilter('resolved')}
            className={`px-2.5 py-0.5 rounded-md font-medium transition-colors ${activeFilter === 'resolved' ? 'bg-emerald-700 text-white font-bold' : 'bg-white/80 text-emerald-800 hover:bg-white'
              }`}
          >
            Patched (0 Cavities)
          </button>

          <button
            onClick={handleRecenter}
            className="p-1 rounded bg-white text-[#143D2B] hover:bg-[#F0F5EE] transition-colors border border-[#CAD8C5] ml-1"
            title="Recenter Map to Ranchi (Jharkhand)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Map Canvas Container with Real Leaflet Map */}
      <div className={`relative w-full ${heightClass} bg-slate-100 select-none z-10`}>
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Selected Pothole Detail Popup at Bottom */}
        {activePothole && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:left-auto sm:right-3 sm:w-96 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-[#CBD7C7] z-[1000] text-left transition-all animate-fadeIn">
            <div className="flex items-start justify-between gap-1.5">
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5 mb-1">
                  <span
                    className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white ${activePothole.status === 'Critical' ? 'bg-red-600' :
                        activePothole.status === 'In Repair' ? 'bg-amber-600' : 'bg-emerald-600'
                      }`}
                  >
                    {activePothole.status === 'Resolved' ? 'Patched & Verified' : `${activePothole.status} Pothole`}
                  </span>
                  <span className="text-[10px] text-gray-600 font-mono font-bold">
                    {activePothole.depthCm > 0 ? `Depth: ~${activePothole.depthCm}cm` : 'Level Restored (0cm)'}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#14261C] leading-snug truncate">
                  {activePothole.name}
                </h4>
              </div>
            </div>

            {/* Address & Landmark */}
            <p className="text-[11px] text-[#2C3E33] font-medium mt-1 truncate">
              📍 {activePothole.streetAddress}
            </p>
            <p className="text-[10px] text-gray-500 truncate">
              Landmark: {activePothole.landmark}
            </p>

            {/* GPS Coordinates & Live Reports Count */}
            <div className="mt-1.5 pt-1.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-[#4E6155]">
              <div className="flex items-center space-x-1 font-mono">
                <Navigation className="w-3 h-3 text-[#143D2B]" />
                <span>{activePothole.lat.toFixed(4)}°N, {activePothole.lng.toFixed(4)}°E</span>
              </div>
              <div className="flex items-center space-x-1 text-emerald-800 font-semibold">
                <ShieldCheck className="w-3 h-3" />
                <span>{activePothole.reportsCount} citizen reports</span>
              </div>
            </div>

            {/* Assigned Repair Squad & Actions */}
            <div className="mt-2 pt-1.5 border-t border-gray-100 flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 truncate">
                {activePothole.assignedSquad}
              </span>

              <button
                onClick={() => setIsReportModalOpen(true)}
                className="bg-[#143D2B] hover:bg-[#1B4D36] text-white text-[10px] font-bold px-2.5 py-1 rounded cursor-pointer transition-colors whitespace-nowrap"
              >
                Report at this GPS
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Pothole Strip on bottom for fast switching */}
      <div className="bg-[#EBF1E8] px-3 py-1.5 border-t border-[#CAD8C5] flex items-center space-x-2 overflow-x-auto text-[11px] z-20 relative">
        <span className="text-[10px] font-bold text-[#143D2B] uppercase tracking-wider whitespace-nowrap">
          Quick Jump:
        </span>
        {REAL_POTHOLE_REPORTS.map((p) => (
          <button
            key={p.id}
            onClick={() => handleSelectPothole(p)}
            className={`px-2 py-0.5 rounded whitespace-nowrap text-[10px] font-medium transition-all ${activePothole?.id === p.id
                ? 'bg-[#143D2B] text-white font-bold'
                : 'bg-white/80 text-[#2C3E33] hover:bg-white border border-[#CBD7C6]'
              }`}
          >
            {p.district}: {p.name.slice(0, 18)}...
          </button>
        ))}
      </div>

    </div>
  );
};
