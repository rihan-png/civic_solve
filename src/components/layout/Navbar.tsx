import React, { useState } from 'react';
import {
  ArrowRight,
  Bell,
  Menu,
  X,
  PlusCircle,
  Building2,
  HeartHandshake,
  GraduationCap,
  FileQuestion,
  MapPin,
  Lock,
  LogOut,
  UserCheck,
  ChevronDown
} from 'lucide-react';
import { useAppState, type AppView } from '../../context/AppStateContext';
import type { UserRole } from '../../types';

export const Navbar: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    activeRole,
    setActiveRole,
    setIsReportModalOpen,
    notifications,
    markNotificationAsRead,
    setSelectedChallenge,
    challenges,
    currentUser,
    setIsAuthModalOpen,
    setAuthTargetRole,
    logout
  } = useAppState();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNavClick = (view: AppView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleSelect = (role: UserRole, targetView: AppView) => {
    setActiveRole(role);
    setCurrentView(targetView);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4F6F0]/95 backdrop-blur-md border-b border-[#D8E2D5] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Brand Logo matching screenshot */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 group cursor-pointer focus:outline-none"
              title="CivicSolve Home"
            >
              <div className="flex items-center space-x-1.5 bg-[#143D2B] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm group-hover:bg-[#1B4D36] transition-colors">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-400 flex items-center justify-center text-[#143D2B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#143D2B]"></span>
                </div>
                <span className="font-bold text-sm sm:text-base tracking-tight font-brand">CivicSolve</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links - Quadruple Helix Governance */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 text-sm font-medium text-[#2C3E33]">
            <button
              onClick={() => handleNavClick('how-it-works')}
              className={`hover:text-[#143D2B] transition-colors cursor-pointer ${currentView === 'how-it-works' ? 'text-[#143D2B] font-bold underline underline-offset-4 decoration-[#143D2B]' : ''
                }`}
            >
              How it works
            </button>

            <button
              onClick={() => handleNavClick('citizen-portal')}
              className={`hover:text-[#143D2B] transition-colors cursor-pointer flex items-center space-x-1.5 px-2.5 py-1 rounded-lg ${currentView === 'citizen-portal' ? 'bg-[#E0E9DD] text-[#143D2B] font-bold' : ''
                }`}
              title="Citizen Progress Tracker & Verification Feedback"
            >
              <span>🇮🇳</span>
              <span>Citizen</span>
            </button>

            <button
              onClick={() => handleRoleSelect('admin', 'admin-dashboard')}
              className={`hover:text-[#143D2B] transition-colors cursor-pointer flex items-center space-x-1.5 px-2.5 py-1 rounded-lg ${currentView === 'admin-dashboard' ? 'bg-[#E0E9DD] text-[#143D2B] font-bold' : ''
                }`}
              title="Municipal Admin & AI Governance Portal"
            >
              <span>🏛️</span>
              <span>Admin</span>
            </button>

            <button
              onClick={() => handleRoleSelect('ngo', 'ngo-dashboard')}
              className={`hover:text-[#143D2B] transition-colors cursor-pointer flex items-center space-x-1.5 px-2.5 py-1 rounded-lg ${currentView === 'ngo-dashboard' ? 'bg-[#E0E9DD] text-[#143D2B] font-bold' : ''
                }`}
              title="NGO & Grassroots Civil Society Portal"
            >
              <span>🤝</span>
              <span>NGO</span>
            </button>

            <button
              onClick={() => handleRoleSelect('university', 'university-workspace')}
              className={`hover:text-[#143D2B] transition-colors cursor-pointer flex items-center space-x-1.5 px-2.5 py-1 rounded-lg ${currentView === 'university-workspace' ? 'bg-[#E0E9DD] text-[#143D2B] font-bold' : ''
                }`}
              title="University & Academic Research Workspace"
            >
              <span>🎓</span>
              <span>University</span>
            </button>

            <button
              onClick={() => handleRoleSelect('industry', 'industry-dashboard')}
              className={`hover:text-[#143D2B] transition-colors cursor-pointer flex items-center space-x-1.5 px-2.5 py-1 rounded-lg ${currentView === 'industry-dashboard' ? 'bg-[#E0E9DD] text-[#143D2B] font-bold' : ''
                }`}
              title="Industry, Startup & Corporate CSR Hub"
            >
              <span>🏭</span>
              <span>Industry</span>
            </button>
          </nav>

          {/* Right Actions: Desktop View Toggle, Notifications, Report, Sign In, Hamburger */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">



            {/* Quick Report CTA on Mobile / Tablet */}
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="bg-[#143D2B] hover:bg-[#1B4D36] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center space-x-1 shadow-sm transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Report</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-1.5 sm:p-2 rounded-full hover:bg-[#E3EBE0] text-[#34483D] transition-colors relative cursor-pointer"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-amber-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-[#D5E0D2] rounded-xl shadow-xl py-2 z-50">
                  <div className="px-3 py-2 border-b border-gray-100 flex justify-between items-center text-xs">
                    <span className="font-bold text-[#143D2B]">Geo Alerts ({notifications.length})</span>
                    <span className="text-[10px] text-gray-500">Live Pothole Feed</span>
                  </div>
                  <div className="max-h-60 overflow-y-auto divide-y divide-gray-100">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => {
                          markNotificationAsRead(n.id);
                          if (n.challengeId) {
                            const found = challenges.find(c => c.id === n.challengeId);
                            if (found) {
                              setSelectedChallenge(found);
                              setCurrentView('challenge-detail');
                            }
                          }
                          setShowNotifications(false);
                        }}
                        className="px-3 py-2 hover:bg-[#F8FAF7] cursor-pointer text-xs"
                      >
                        <p className="font-medium text-[#1E2E25] truncate">{n.title}</p>
                        <p className="text-[11px] text-gray-600 line-clamp-1">{n.message}</p>
                        <span className="text-[10px] text-gray-400">{n.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Authentication Action or Active User Profile */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-1.5 bg-[#E1EADF] hover:bg-[#D4E3D1] border border-[#CBD7C6] px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#143D2B] transition-colors cursor-pointer shadow-sm"
                  title="Manage logged in account"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="truncate max-w-[110px] sm:max-w-[150px] font-bold">{currentUser.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#143D2B]" />
                </button>

                {/* User Session Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-[#CBD7C6] rounded-xl shadow-xl py-2 z-50 animate-fadeIn text-xs">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="font-bold text-[#143D2B] truncate">{currentUser.name}</p>
                      <p className="text-[11px] text-gray-500 truncate">{currentUser.email}</p>
                      <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        {currentUser.badge}
                      </span>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => {
                          if (currentUser.role === 'admin') setCurrentView('admin-dashboard');
                          else if (currentUser.role === 'ngo') setCurrentView('ngo-dashboard');
                          else if (currentUser.role === 'university') setCurrentView('university-workspace');
                          else if (currentUser.role === 'industry') setCurrentView('industry-dashboard');
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-[#F2F7EF] text-[#1E2E25] flex items-center space-x-2 cursor-pointer"
                      >
                        <Building2 className="w-3.5 h-3.5 text-emerald-800" />
                        <span>Go to My Dashboard</span>
                      </button>

                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          setIsAuthModalOpen(true);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-[#F2F7EF] text-[#1E2E25] flex items-center space-x-2 cursor-pointer"
                      >
                        <UserCheck className="w-3.5 h-3.5 text-teal-800" />
                        <span>Switch Stakeholder Account</span>
                      </button>

                      <div className="border-t border-gray-100 my-1" />

                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-red-50 text-red-700 flex items-center space-x-2 cursor-pointer font-medium"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  if (currentView === 'ngo-dashboard') setAuthTargetRole('ngo');
                  else if (currentView === 'university-workspace') setAuthTargetRole('university');
                  else if (currentView === 'industry-dashboard') setAuthTargetRole('industry');
                  else setAuthTargetRole('admin');
                  setIsAuthModalOpen(true);
                }}
                className="bg-[#143D2B] hover:bg-[#1B4D36] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm flex items-center space-x-1.5 transition-all cursor-pointer"
                title="Authenticate to access stakeholder dashboards"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-300" />
                <span>Sign in</span>
              </button>
            )}

            {/* Mobile Hamburger Menu Button (Visible < lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-[#E3EBE0] text-[#143D2B] cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu when hamburger is open */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F6F0] border-b border-[#D8E2D5] px-4 py-3 space-y-2 shadow-lg animate-fadeIn">
          <div className="text-[11px] font-bold text-[#4E6155] uppercase tracking-wider pb-1 border-b border-[#D8E2D5]">
            Government Navigation
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'home' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <span>🏠</span>
            <span>Home & Pothole Geospace Map</span>
          </button>

          <button
            onClick={() => handleNavClick('how-it-works')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'how-it-works' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <FileQuestion className="w-4 h-4 text-emerald-800" />
            <span>How CivicSolve Works</span>
          </button>

          <button
            onClick={() => handleNavClick('citizen-portal')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'citizen-portal' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <span>🇮🇳</span>
            <span>Citizen Progress Tracker & Quality Feedback</span>
          </button>

          <button
            onClick={() => handleRoleSelect('admin', 'admin-dashboard')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'admin-dashboard' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <Building2 className="w-4 h-4 text-[#143D2B]" />
            <span>Urban Local Body Admin Portal</span>
          </button>

          <button
            onClick={() => handleRoleSelect('ngo', 'ngo-dashboard')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'ngo-dashboard' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <span>🤝</span>
            <span>NGO & Grassroots Civil Society Portal</span>
          </button>

          <button
            onClick={() => handleRoleSelect('university', 'university-workspace')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'university-workspace' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <GraduationCap className="w-4 h-4 text-purple-800" />
            <span>University & Academic Research Workspace</span>
          </button>

          <button
            onClick={() => handleRoleSelect('industry', 'industry-dashboard')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'industry-dashboard' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <span>🏭</span>
            <span>Industry, Startup & Corporate CSR Hub</span>
          </button>

          <button
            onClick={() => handleNavClick('map')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 ${currentView === 'map' ? 'bg-[#143D2B] text-white' : 'text-[#2C3E33] hover:bg-[#E7EFE4]'
              }`}
          >
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Full Geospatial GIS Map</span>
          </button>

          {/* Mobile Drawer Auth Action */}
          <div className="pt-2 border-t border-[#D8E2D5] mt-2">
            {currentUser ? (
              <div className="bg-white border border-[#CBD7C6] rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="truncate">
                    <span className="text-xs font-bold text-[#143D2B] block truncate">{currentUser.name}</span>
                    <span className="text-[10px] text-gray-500 block truncate">{currentUser.email}</span>
                  </div>
                  <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    {currentUser.badge}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold py-1.5 rounded-lg flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
                className="w-full bg-[#143D2B] hover:bg-[#1B4D36] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-300" />
                <span>Sign In to Stakeholder Portal (SSO)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
