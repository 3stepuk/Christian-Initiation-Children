import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { AppTab } from '../types';
import { 
  BookOpen, 
  Brain, 
  HelpCircle, 
  Heart, 
  CheckSquare, 
  FileText, 
  User, 
  Home, 
  Menu, 
  X, 
  Volume2, 
  VolumeX 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentTab, setCurrentTab, completedLessons, totalLessonsCount, isSpeaking, stopSpeaking } = useProgress();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { tab: AppTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { tab: 'home', label: 'Overview', icon: <Home className="w-4 h-4" /> },
    { 
      tab: 'lessons', 
      label: 'Lessons', 
      icon: <BookOpen className="w-4 h-4" />,
      badge: `${completedLessons.length}/${totalLessonsCount}`
    },
    { tab: 'recall', label: 'Memory Drill', icon: <Brain className="w-4 h-4" /> },
    { tab: 'qa', label: 'Q&A Catechism', icon: <HelpCircle className="w-4 h-4" /> },
    { tab: 'prayers', label: 'Prayers', icon: <Heart className="w-4 h-4" /> },
    { tab: 'readiness', label: 'Readiness', icon: <CheckSquare className="w-4 h-4" /> },
    { tab: 'appendices', label: 'Appendices', icon: <FileText className="w-4 h-4" /> },
    { tab: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
  ];

  const handleTabClick = (tab: AppTab) => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="brand-header-btn"
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#7DBA84] bg-[#161616] flex items-center justify-center text-[#7DBA84] group-hover:scale-105 transition-all shadow-[0_0_12px_rgba(125,186,132,0.18)]">
              <span className="font-serif text-lg font-bold">†</span>
            </div>
            <div>
              <span className="block font-serif small-caps tracking-[0.15em] text-[11px] text-[#7DBA84] leading-tight">
                The Parish Teaching Series
              </span>
              <div className="font-serif small-caps text-sm sm:text-base font-bold tracking-[0.05em] text-[#FFFFFF] group-hover:text-[#7DBA84] transition-colors leading-tight">
                Christian Initiation for Children
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map(item => {
              const isActive = currentTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleTabClick(item.tab)}
                  id={`nav-btn-${item.tab}`}
                  className={`px-3 py-2 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all duration-150 ${
                    isActive
                      ? 'bg-[#7DBA84]/15 text-[#7DBA84] border border-[#7DBA84]/40 shadow-sm'
                      : 'text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#1A1A1A] border border-transparent'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-[#7DBA84]/25 text-[#FFFFFF] border border-[#7DBA84]/30' : 'bg-[#1A1A1A] text-[#94A3B8] border border-[#333333]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Header Progress Counter from Elegant Dark */}
            <div className="hidden xl:flex items-center pl-3 ml-2 border-l border-[#262626]">
              <div className="text-right">
                <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Progress</div>
                <div className="text-xs font-bold text-[#FFFFFF]">
                  {Math.round((completedLessons.length / totalLessonsCount) * 100)}%
                </div>
              </div>
            </div>

            {isSpeaking && (
              <button
                onClick={stopSpeaking}
                title="Stop Audio"
                className="ml-2 px-2 py-1.5 rounded-md bg-amber-900/30 border border-amber-600/40 text-amber-300 text-xs flex items-center gap-1 animate-pulse"
              >
                <VolumeX className="w-3.5 h-3.5" />
                <span>Stop</span>
              </button>
            )}
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="text-right mr-1">
              <div className="text-[9px] text-[#94A3B8] uppercase">Progress</div>
              <div className="text-xs font-bold text-[#FFFFFF]">
                {Math.round((completedLessons.length / totalLessonsCount) * 100)}%
              </div>
            </div>

            {isSpeaking && (
              <button
                onClick={stopSpeaking}
                className="p-2 rounded-md bg-amber-900/30 text-amber-300 border border-amber-600/40"
              >
                <VolumeX className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md text-[#94A3B8] hover:text-white hover:bg-[#1A1A1A] border border-[#262626]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#262626] px-4 pt-2 pb-5 space-y-1 shadow-2xl">
          {navItems.map(item => {
            const isActive = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleTabClick(item.tab)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-[#7DBA84]/15 text-[#7DBA84] border border-[#7DBA84]/30 font-semibold'
                    : 'text-[#94A3B8] hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#1A1A1A] text-[#94A3B8] border border-[#333333]">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Subtle Progress Strip */}
      <div className="w-full bg-[#1A1A1A] h-0.5">
        <div
          className="bg-[#7DBA84] h-0.5 transition-all duration-300"
          style={{ width: `${(completedLessons.length / totalLessonsCount) * 100}%` }}
        />
      </div>
    </header>
  );
};
