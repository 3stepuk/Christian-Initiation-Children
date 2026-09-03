import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { AppTab } from '../types';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentTab, profile } = useProgress();

  const handleNav = (tab: AppTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto border-t border-[#262626] bg-[#161616] text-[#94A3B8]">
      {/* Primary Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Title & pastoral info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-[#FFFFFF] font-serif small-caps font-bold text-base">
              <span className="text-[#7DBA84] text-lg font-bold">†</span>
              <span>Christian Initiation for Children</span>
            </div>
            <p className="font-garamond text-base text-[#94A3B8] leading-relaxed max-w-md">
              A Catholic preparation catechism for unbaptised children aged 7–10 who have reached the use of reason, preparing for Holy Baptism and First Holy Communion. Faithful to Sacred Scripture, the Catechism of the Catholic Church, and diocesan norms.
            </p>
            <div className="text-xs text-[#64748B] font-sans flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#7DBA84]" />
              <span>Offline-ready · Privacy-first · Local device storage</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif small-caps text-xs tracking-wider text-[#FFFFFF] font-semibold">
              The Catechism
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('lessons')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  The 16 Lessons
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('recall')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  Memory Recall Drills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('qa')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  Summary Catechism (36 Q&A)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('prayers')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  Prayers & Examination
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Formation & Appendices */}
          <div className="space-y-3">
            <h4 className="font-serif small-caps text-xs tracking-wider text-[#FFFFFF] font-semibold">
              Parish Pathway
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('readiness')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  Readiness Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('appendices')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  Appendices A – F
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('appendices')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  The Rite of Baptism
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('profile')}
                  className="hover:text-[#7DBA84] transition-colors cursor-pointer"
                >
                  Sponsor & Priest Mentors
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Elegant Dark Mentor & Quick Bar Strip */}
      <div className="border-t border-[#262626] bg-[#141414] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider">Sponsor / Mentor</span>
              <span className="text-[13px] text-[#E2E8F0] font-medium">
                {profile.mentorName ? profile.mentorName : 'Not yet assigned'}
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider">Priest / Deacon</span>
              <span className="text-[13px] text-[#E2E8F0] font-medium">
                {profile.priestName ? profile.priestName : 'Fr. John'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-serif small-caps text-xs tracking-[0.1em]">
            <button
              onClick={() => handleNav('recall')}
              className="cursor-pointer text-[#7DBA84] hover:text-[#92c999] transition-colors"
            >
              Memory Recall
            </button>
            <button
              onClick={() => handleNav('qa')}
              className="cursor-pointer text-[#94A3B8] hover:text-[#FFFFFF] transition-colors"
            >
              Q&A Drill
            </button>
            <button
              onClick={() => handleNav('appendices')}
              className="cursor-pointer text-[#94A3B8] hover:text-[#FFFFFF] transition-colors"
            >
              Appendices
            </button>
            <button
              onClick={() => handleNav('profile')}
              className="cursor-pointer text-[#94A3B8] hover:text-[#FFFFFF] transition-colors"
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
