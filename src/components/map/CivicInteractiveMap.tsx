import React, { useState } from 'react';
import { 
  MapPin, 
  GraduationCap, 
  ArrowRight, 
  Cpu
} from 'lucide-react';
import { useAppState } from '../../context/AppStateContext';
import { JHARKHAND_DISTRICTS } from '../../data/mockData';
import { UNIVERSITIES_DATABASE } from '../../data/universitiesData';
import type { Challenge } from '../../types';

export const CivicInteractiveMap: React.FC = () => {
  const { challenges, incidentClusters, setSelectedChallenge, setCurrentView, setIsAIEngineModalOpen, setActiveAIChallengeId } = useAppState();

  const [activeDistrict, setActiveDistrict] = useState('All');
  const [showClusters, setShowClusters] = useState(true);
  const [showUniversities, setShowUniversities] = useState(true);
  const [showNGOs, setShowNGOs] = useState(true);
  const [activePinChallenge, setActivePinChallenge] = useState<Challenge | null>(challenges[0]);

  // Map coordinate bounds for Jharkhand:
  // Lat: 22.0 to 25.0
  // Lng: 83.5 to 88.0
  const latMin = 22.2;
  const latMax = 25.0;
  const lngMin = 83.8;
  const lngMax = 87.8;

  const projectToMap = (lat: number, lng: number) => {
    const x = ((lng - lngMin) / (lngMax - lngMin)) * 100;
    const y = ((latMax - lat) / (latMax - latMin)) * 100;
    return { x: Math.max(5, Math.min(95, x)), y: Math.max(8, Math.min(92, y)) };
  };

  const filteredChallenges = challenges.filter(c => 
    activeDistrict === 'All' || c.district === activeDistrict
  );

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/40 px-2.5 py-0.5 rounded-full">
                PostGIS Geospatial Intelligence
              </span>
              <span className="text-xs text-slate-400">Jharkhand State Spatial GIS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Interactive Incident & Ecosystem Map
            </h1>
          </div>

          {/* Layer Toggles */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setShowClusters(!showClusters)}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                showClusters ? 'bg-purple-900/60 border-purple-500 text-purple-200' : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              Cluster Radii
            </button>
            <button
              onClick={() => setShowUniversities(!showUniversities)}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                showUniversities ? 'bg-indigo-900/60 border-indigo-500 text-indigo-200' : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              Universities
            </button>
            <button
              onClick={() => setShowNGOs(!showNGOs)}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                showNGOs ? 'bg-teal-900/60 border-teal-500 text-teal-200' : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              NGOs
            </button>
          </div>
        </div>

        {/* District Filter Pill Strip */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setActiveDistrict('All')}
            className={`px-3 py-1 rounded-full border whitespace-nowrap cursor-pointer ${
              activeDistrict === 'All' ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            All Jharkhand
          </button>
          {JHARKHAND_DISTRICTS.map((d) => (
            <button
              key={d.name}
              onClick={() => setActiveDistrict(d.name)}
              className={`px-3 py-1 rounded-full border whitespace-nowrap cursor-pointer ${
                activeDistrict === d.name ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Map Layout Grid: Map Viewport + Challenge Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Map Viewport */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 relative min-h-[520px] overflow-hidden flex flex-col justify-between shadow-2xl">
            
            {/* Map Legend Overlay */}
            <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-xl text-[11px] space-y-1.5">
              <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px]">
                Marker Severity
              </span>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span>Critical Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>High Priority</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Resolved & Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                <span>University Lab</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                <span>Community NGO</span>
              </div>
            </div>

            {/* Simulated GIS Canvas with SVG grid and topo lines */}
            <div className="relative w-full h-full min-h-[440px] bg-slate-950/80 rounded-xl border border-slate-900 overflow-hidden">
              {/* Subtle GIS grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

              {/* State Outline Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <span className="text-7xl font-black text-slate-400 uppercase tracking-widest">
                  JHARKHAND
                </span>
              </div>

              {/* District Labels */}
              {JHARKHAND_DISTRICTS.map((dist) => {
                const pos = projectToMap(dist.lat, dist.lng);
                return (
                  <div
                    key={dist.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {dist.name.split(' ')[0]}
                    </span>
                  </div>
                );
              })}

              {/* Incident Cluster Radii Circles */}
              {showClusters && incidentClusters.map((cluster) => {
                const pos = projectToMap(cluster.coordinates.lat, cluster.coordinates.lng);
                return (
                  <div
                    key={cluster.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    <div className="w-24 h-24 rounded-full bg-purple-500/15 border-2 border-purple-500/40 animate-pulse-glow flex items-center justify-center">
                      <span className="text-[9px] font-mono font-bold text-purple-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-500/40">
                        {cluster.id} ({cluster.totalCitizenReports})
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* University Pins */}
              {showUniversities && UNIVERSITIES_DATABASE.map((uni) => {
                // approximate coords
                const uniCoords: Record<string, { lat: number; lng: number }> = {
                  'hei-bit-mesra': { lat: 23.4124, lng: 85.4399 },
                  'hei-nit-jsr': { lat: 22.7752, lng: 86.1438 },
                  'hei-iit-ism': { lat: 23.8142, lng: 86.4412 },
                  'hei-bau-ranchi': { lat: 23.4312, lng: 85.3184 },
                  'hei-cuj-ranchi': { lat: 23.3682, lng: 85.1624 }
                };
                const coords = uniCoords[uni.id] || { lat: 23.3441, lng: 85.3096 };
                const pos = projectToMap(coords.lat, coords.lng);

                return (
                  <div
                    key={uni.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                    title={uni.name}
                  >
                    <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-lg border-2 border-slate-900 group-hover:scale-125 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}

              {/* Challenge Markers */}
              {filteredChallenges.map((ch) => {
                const pos = projectToMap(ch.coordinates.lat, ch.coordinates.lng);
                const isSelected = activePinChallenge?.id === ch.id;

                const colorClass = 
                  ch.status === 'resolved' ? 'bg-emerald-500 ring-emerald-400' :
                  ch.priority === 'CRITICAL' ? 'bg-rose-500 ring-rose-400' :
                  ch.priority === 'HIGH' ? 'bg-amber-500 ring-amber-400' : 'bg-blue-500 ring-blue-400';

                return (
                  <button
                    key={ch.id}
                    onClick={() => setActivePinChallenge(ch)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group focus:outline-none"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    <div className={`w-6 h-6 rounded-full ${colorClass} text-white flex items-center justify-center shadow-lg ring-2 border-2 border-slate-950 transition-all ${
                      isSelected ? 'scale-150 ring-4' : 'hover:scale-125'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Coordinate Bar */}
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
              <span>Projection: WGS 84 / UTM Zone 45N</span>
              <span className="text-emerald-400 font-mono">Telemetry Signal: Nominal</span>
            </div>
          </div>

          {/* Side Challenge Detail Drawer */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl">
            {activePinChallenge ? (
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold block">
                      ID #{activePinChallenge.id}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug mt-0.5">
                      {activePinChallenge.title}
                    </h3>
                  </div>

                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    activePinChallenge.priority === 'CRITICAL' ? 'bg-rose-950 text-rose-300 border border-rose-500/50' : 'bg-amber-950 text-amber-300 border border-amber-500/50'
                  }`}>
                    {activePinChallenge.priority}
                  </span>
                </div>

                {/* Evidence Thumbnail */}
                <div className="rounded-xl overflow-hidden h-36 bg-slate-900 border border-slate-800 relative">
                  <img
                    src={activePinChallenge.evidence.photos[0]?.url}
                    alt="Evidence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded text-[10px] text-slate-300 font-mono">
                    {activePinChallenge.villageOrWard}, {activePinChallenge.district}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="text-slate-300 line-clamp-2 leading-relaxed">
                    {activePinChallenge.description}
                  </p>

                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-500 block">Affected:</span>
                      <span className="font-semibold text-white">{activePinChallenge.priorityBreakdown.affectedPopulation.toLocaleString()} citizens</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Assigned To:</span>
                      <span className="font-semibold text-cyan-400 truncate block">{activePinChallenge.routing.primaryResolver.name}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => {
                      setActiveAIChallengeId(activePinChallenge.id);
                      setIsAIEngineModalOpen(true);
                    }}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 py-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Inspect AI Engine Analysis</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedChallenge(activePinChallenge);
                      setCurrentView('challenge-detail');
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Open Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-500 py-20 text-xs">
                Select any marker on the map to inspect incident details.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
