import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { READINESS_CRITERIA, PARISH_CHECKLIST, SAFEGUARDING_STATEMENT } from '../data/catechismData';
import { 
  CheckSquare, 
  CheckCircle2, 
  Square, 
  ShieldAlert, 
  UserCheck, 
  Sparkles, 
  ClipboardCheck, 
  Printer, 
  RotateCcw 
} from 'lucide-react';

export const ReadinessView: React.FC = () => {
  const { readinessChecked, toggleReadinessItem, profile } = useProgress();
  const [parishChecked, setParishChecked] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('rcic_parish_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleParishCheck = (index: number) => {
    setParishChecked(prev => {
      const updated = { ...prev, [index]: !prev[index] };
      localStorage.setItem('rcic_parish_checklist', JSON.stringify(updated));
      return updated;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const readinessCount = readinessChecked.length;
  const isAllReady = readinessCount === READINESS_CRITERIA.length;

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#7DBA84]/30 text-[#7DBA84] text-xs font-serif small-caps tracking-[0.15em]">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Appendix F · Parish Discernment Guide</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF]">
          Readiness & Parish Guide
        </h1>
        <p className="font-garamond text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto">
          "Readiness is not perfect memory. The child should show a sincere desire for Baptism, sufficient understanding according to capacity, developing conversion, regular participation in Sunday worship and a real beginning of Christian life."
        </p>
      </div>

      {/* Readiness Progress Bar Banner */}
      <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs uppercase tracking-wider text-[#7DBA84] font-serif small-caps font-medium">
            Discernment Progress
          </div>
          <div className="font-serif text-xl sm:text-2xl font-normal text-[#FFFFFF]">
            {readinessCount} of {READINESS_CRITERIA.length} Areas Discerned Ready
          </div>
          {profile.childName && (
            <div className="text-xs text-[#94A3B8]">
              For catechumen: <span className="text-[#FFFFFF] font-medium">{profile.childName}</span>
              {profile.parish ? ` · ${profile.parish}` : ''}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-xs font-bold uppercase tracking-wider text-[#FFFFFF] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#7DBA84]" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* 9 Areas of Readiness Table */}
      <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm">
        <div>
          <h2 className="font-serif text-xl font-normal text-[#FFFFFF] mb-1">
            Child Readiness Discernment
          </h2>
          <p className="text-xs text-[#94A3B8] font-garamond text-base">
            Accompanied by the catechist, priest, and family. Tap each item once discerned.
          </p>
        </div>

        <div className="divide-y divide-[#262626]">
          {READINESS_CRITERIA.map((crit) => {
            const isChecked = readinessChecked.includes(crit.id);
            return (
              <div
                key={crit.id}
                onClick={() => toggleReadinessItem(crit.id)}
                className={`py-4 px-3 sm:px-4 rounded cursor-pointer transition-colors flex items-start justify-between gap-4 ${
                  isChecked
                    ? 'bg-[#161616] text-[#FFFFFF]'
                    : 'hover:bg-[#1A1A1A] text-[#E2E8F0]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm sm:text-base font-medium text-[#FFFFFF]">
                      {crit.area}
                    </span>
                    {isChecked && (
                      <span className="text-[10px] uppercase font-bold text-[#7DBA84] bg-[#7DBA84]/15 px-2 py-0.5 rounded border border-[#7DBA84]/30 font-serif small-caps">
                        Ready
                      </span>
                    )}
                  </div>
                  <p className="font-garamond text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                    {crit.whatItLooksLike}
                  </p>
                </div>

                <div className="shrink-0 mt-1">
                  {isChecked ? (
                    <CheckCircle2 className="w-6 h-6 text-[#7DBA84]" />
                  ) : (
                    <Square className="w-6 h-6 text-[#64748B]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Parish Working Checklist (Page 28) */}
      <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-normal text-[#FFFFFF]">
              Parish Working Checklist
            </h2>
            <p className="text-xs text-[#7DBA84] font-serif small-caps tracking-wider">
              Canonical and pastoral tasks for catechists and clergy
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {PARISH_CHECKLIST.map((item, idx) => {
            const isChecked = !!parishChecked[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleParishCheck(idx)}
                className={`cursor-pointer p-4 rounded-lg border transition-all flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-[#161616] border-[#7DBA84]/40 text-[#FFFFFF]'
                    : 'bg-[#161616] border-[#262626] hover:border-[#404040] text-[#E2E8F0]'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-[#7DBA84]" />
                  ) : (
                    <Square className="w-5 h-5 text-[#64748B]" />
                  )}
                </div>
                <p className="font-garamond text-base sm:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safeguarding Policy Statement */}
      <section className="bg-[#161616] border border-amber-800/40 rounded-lg p-6 sm:p-7 space-y-3 shadow-sm">
        <div className="flex items-center gap-2.5 text-amber-400 font-serif small-caps text-xs tracking-wider font-medium">
          <ShieldAlert className="w-4 h-4" />
          <span>Diocesan Safeguarding Policy</span>
        </div>
        <p className="font-garamond text-lg text-[#94A3B8] leading-relaxed">
          {SAFEGUARDING_STATEMENT}
        </p>
      </section>
    </div>
  );
};
