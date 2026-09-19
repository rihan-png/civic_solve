import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Layers, 
  FolderGit2, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus, 
  Award, 
  ExternalLink,
  BookOpen,
  Cpu,
  FlaskConical,
  Building,
  UserCheck
} from 'lucide-react';
import { UNIVERSITIES_DATABASE } from '../../data/universitiesData';
import { useAppState } from '../../context/AppStateContext';

export const UniversityWorkspace: React.FC = () => {
  const { challenges, acceptUniversityMatch, setSelectedChallenge, setCurrentView } = useAppState();

  const [activeTab, setActiveTab] = useState<'projects' | 'capability-db' | 'team-builder'>('projects');
  
  // Find project-enabled challenge: Angara Water Contamination
  const projectChallenge = challenges.find(c => c.id === 'CIV-2026-0891') || challenges[1];
  const project = projectChallenge.project;

  const [tasks, setTasks] = useState(project?.tasks || []);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentDept, setNewStudentDept] = useState('Computer Science');
  const [newStudentRole, setNewStudentRole] = useState('Firmware & Edge AI');

  const toggleTask = (taskId: string) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === taskId
          ? { ...t, status: t.status === 'done' ? 'in_progress' : 'done' }
          : t
      )
    );
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  University & Academic Research Workspace
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  {UNIVERSITIES_DATABASE[0]?.name || 'Academic Partner'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Collaborative R&D workspace connecting academic faculty, engineering departments, and student innovation teams with real-world municipal challenges.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3.5 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${
                activeTab === 'projects' ? 'bg-purple-600 text-white shadow' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Active Projects (1)
            </button>
            <button
              onClick={() => setActiveTab('capability-db')}
              className={`px-3.5 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${
                activeTab === 'capability-db' ? 'bg-purple-600 text-white shadow' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              HEI Capability Directory ({UNIVERSITIES_DATABASE.length})
            </button>
          </div>
        </div>

        {/* TAB 1: Active Project Workspace */}
        {activeTab === 'projects' && project && (
          <div className="space-y-8">
            {/* Project Overview Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-900/60 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded">
                      R&D Project #{project.id}
                    </span>
                    <span className="text-xs text-slate-400">
                      Linked to Challenge: <strong className="text-cyan-300">{projectChallenge.id}</strong>
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white mt-1.5">
                    {project.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Lead Institution: <strong className="text-slate-200">{project.leadInstitution}</strong> | Location: Angara Block, Ranchi
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setSelectedChallenge(projectChallenge);
                      setCurrentView('challenge-detail');
                    }}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-700 flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Challenge Specs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 4-Stage Project Milestones */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Project Innovation Milestones (Research to Deployment)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.milestones.map((m, idx) => {
                    const isDone = m.status === 'completed';
                    const isInProgress = m.status === 'in_progress';

                    return (
                      <div
                        key={m.id}
                        className={`p-4 rounded-xl border space-y-2 relative ${
                          isDone
                            ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                            : isInProgress
                            ? 'bg-blue-950/30 border-blue-500/40 text-blue-300 shadow-md shadow-blue-500/10'
                            : 'bg-slate-900/50 border-slate-800 text-slate-500'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                            Stage {idx + 1}: {m.phase}
                          </span>
                          {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                          {isInProgress && (
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-white line-clamp-2">
                          {m.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {m.deliverable}
                        </p>
                        {m.completedDate && (
                          <span className="text-[10px] text-emerald-400/80 font-mono block">
                            Completed: {m.completedDate}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Faculty Mentor & Multidisciplinary Team Creation */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                {/* Faculty Mentor Card */}
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Approved Faculty Mentor
                      </h4>
                      <p className="text-sm font-bold text-white">{project.facultyMentor.name}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">
                    {project.facultyMentor.designation} — {project.facultyMentor.department}
                  </p>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-[11px] text-slate-300 font-mono">
                    {project.facultyMentor.email}
                  </div>
                </div>

                {/* Multidisciplinary Team */}
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Multidisciplinary Student Team ({project.teamMembers.length} Members)
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-400">Academic Capstone Credit Assigned</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {project.teamMembers.map((tm) => (
                      <div key={tm.id} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-white">{tm.name}</p>
                          <p className="text-[10px] text-purple-300">{tm.department} ({tm.year})</p>
                        </div>
                        <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {tm.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Task Board & NGO Field Validation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                {/* Tasks */}
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Work Breakdown Tasks
                    </span>
                    <span className="text-[11px] text-slate-400">Click to toggle progress</span>
                  </div>

                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`p-2.5 rounded-lg border flex items-center justify-between text-xs cursor-pointer transition-colors ${
                          task.status === 'done'
                            ? 'bg-slate-950/40 border-slate-800 text-slate-500 line-through'
                            : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className={`w-4 h-4 ${task.status === 'done' ? 'text-emerald-400' : 'text-slate-600'}`} />
                          <span>{task.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">{task.assignedTo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* NGO Field Validation Logs */}
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                      Field Validation Log (NGO Vikas Bharti)
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">● Verified On-Site</span>
                  </div>

                  {project.fieldVisits.map((fv) => (
                    <div key={fv.id} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-400 text-[11px]">
                        <span>Visit Date: <strong>{fv.visitDate}</strong></span>
                        <span>Surveys: <strong>{fv.householdsSurveyed} Households</strong></span>
                        <span>Samples: <strong>{fv.samplesCollected} Tested</strong></span>
                      </div>
                      <p className="text-slate-200 text-xs italic bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
                        "{fv.findings}"
                      </p>
                      <div className="flex items-center space-x-2 text-[10px] text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Fluoride dropped from 3.8 mg/L to 0.45 mg/L (Safe BIS Drinking Limit)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: University Capability Directory */}
        {activeTab === 'capability-db' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {UNIVERSITIES_DATABASE.map((uni) => (
                <div key={uni.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                        <Building className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        Est. {uni.establishedYear}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white">{uni.name}</h3>
                      <p className="text-xs text-purple-400">{uni.district}, {uni.state}</p>
                    </div>

                    <div className="space-y-1 text-xs">
                      <span className="text-slate-400 text-[11px] block font-semibold uppercase tracking-wider">
                        Core Research Areas:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {uni.researchAreas.slice(0, 3).map((ra, idx) => (
                          <span key={idx} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                            {ra}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <span className="text-slate-400 text-[11px] block font-semibold uppercase tracking-wider">
                        Labs & Incubation:
                      </span>
                      <p className="text-xs text-slate-300 font-medium">
                        {uni.labs[0]}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {uni.innovationCenter}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{uni.activeProjectsCount} Active Civic Projects</span>
                    <span className="text-emerald-400 font-semibold">● Ready to Accept</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
