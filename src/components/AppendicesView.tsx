import React, { useState } from 'react';
import { 
  JOURNEY_STAGES, 
  BAPTISM_STEPS, 
  BAPTISM_LITURGICAL_NOTE, 
  MASS_PARTS, 
  BEFORE_COMMUNION_NOTE, 
  SOURCES_AND_REFERENCES 
} from '../data/catechismData';
import { 
  FileText, 
  Sparkles, 
  Compass, 
  Droplet, 
  BookOpen, 
  Flame, 
  Scale, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

type AppendixSubTab = 'journey' | 'baptism-rite' | 'mass-guide' | 'sources';

export const AppendicesView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<AppendixSubTab>('journey');

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#7DBA84]/30 text-[#7DBA84] text-xs font-serif small-caps tracking-[0.15em]">
          <FileText className="w-3.5 h-3.5" />
          <span>Catholic Rites & Pastoral Appendices</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF]">
          Appendices & Rites
        </h1>
        <p className="font-garamond text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto">
          Liturgical steps, stages of the catechumenate, the structure of the Mass, and authoritative Catholic references.
        </p>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="bg-[#141414] border border-[#262626] rounded-lg p-2 flex flex-wrap gap-2 shadow-sm">
        <button
          onClick={() => setActiveSubTab('journey')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'journey'
              ? 'bg-[#7DBA84] text-[#0F0F0F] shadow'
              : 'text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#1A1A1A]'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Appx A: The Journey</span>
        </button>

        <button
          onClick={() => setActiveSubTab('baptism-rite')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'baptism-rite'
              ? 'bg-[#7DBA84] text-[#0F0F0F] shadow'
              : 'text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#1A1A1A]'
          }`}
        >
          <Droplet className="w-4 h-4" />
          <span>Appx B: Rite of Baptism</span>
        </button>

        <button
          onClick={() => setActiveSubTab('mass-guide')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'mass-guide'
              ? 'bg-[#7DBA84] text-[#0F0F0F] shadow'
              : 'text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#1A1A1A]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Appx C: Guide to Mass</span>
        </button>

        <button
          onClick={() => setActiveSubTab('sources')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'sources'
              ? 'bg-[#7DBA84] text-[#0F0F0F] shadow'
              : 'text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#1A1A1A]'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Sources & Doctrine</span>
        </button>
      </div>

      {/* Tab 1: Appendix A - The Journey Step by Step */}
      {activeSubTab === 'journey' && (
        <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm animate-fade-in">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7DBA84] font-serif small-caps">
              Appendix A
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#FFFFFF] mt-1">
              The Journey Step by Step
            </h2>
            <p className="font-garamond text-base sm:text-lg text-[#94A3B8] mt-2 italic">
              "The journey is not a rigid school course. Its periods and rites serve conversion and are adapted to the child’s age, capacity, family circumstances and spiritual progress."
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#7DBA84] space-y-8 my-6">
            {JOURNEY_STAGES.map((stage) => (
              <div key={stage.stage} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-7 h-7 rounded-full bg-[#161616] border border-[#7DBA84] text-[#7DBA84] text-xs font-serif flex items-center justify-center shadow">
                  {stage.stage}
                </div>

                <div className="bg-[#161616] p-5 rounded-lg border border-[#262626] group-hover:border-[#404040] transition-colors">
                  <h3 className="font-serif text-lg font-medium text-[#FFFFFF] flex items-center gap-2 mb-2">
                    <span>{stage.name}</span>
                  </h3>
                  <p className="font-garamond text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                    {stage.whatItMeans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tab 2: Appendix B - The Rite of Baptism Step by Step */}
      {activeSubTab === 'baptism-rite' && (
        <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm animate-fade-in">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7DBA84] font-serif small-caps">
              Appendix B
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#FFFFFF] mt-1">
              The Rite of Baptism Step by Step
            </h2>
            <p className="font-garamond text-base sm:text-lg text-[#94A3B8] mt-2">
              The exact celebration follows the approved liturgical book and the directions of the celebrant. These signs help the child understand what the Church is doing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BAPTISM_STEPS.map((step) => {
              const stepStr = String(step.step).padStart(2, '0');
              return (
                <div
                  key={step.step}
                  className="bg-[#161616] border border-[#262626] hover:border-[#404040] p-5 rounded-lg transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full border border-[#7DBA84] bg-[#141414] text-[#7DBA84] text-xs font-serif flex items-center justify-center shrink-0">
                      {stepStr}
                    </span>
                    <h3 className="font-serif text-base font-medium text-[#FFFFFF]">
                      {step.name}
                    </h3>
                  </div>
                  <p className="font-garamond text-base text-[#94A3B8] ml-8 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Liturgical Note */}
          <div className="bg-[#161616] border-l-2 border-amber-600/70 p-5 rounded-r-lg space-y-1">
            <span className="font-serif text-xs uppercase tracking-wider text-amber-400 font-serif small-caps">
              Liturgical Note
            </span>
            <p className="font-garamond text-base text-[#94A3B8] leading-relaxed">
              {BAPTISM_LITURGICAL_NOTE}
            </p>
          </div>
        </section>
      )}

      {/* Tab 3: Appendix C - A Child's Guide to Mass and Communion */}
      {activeSubTab === 'mass-guide' && (
        <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm animate-fade-in">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7DBA84] font-serif small-caps">
              Appendix C
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#FFFFFF] mt-1">
              A Child’s Guide to Mass and Communion
            </h2>
            <p className="font-garamond text-base sm:text-lg text-[#94A3B8] mt-2">
              What we do, say, and understand during the Holy Sacrifice of the Mass:
            </p>
          </div>

          <div className="divide-y divide-[#262626] border border-[#262626] rounded-lg overflow-hidden bg-[#161616]">
            {MASS_PARTS.map((mp, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#1A1A1A] transition-colors">
                <div className="sm:w-1/3">
                  <span className="font-serif text-base font-medium text-[#7DBA84]">
                    {mp.part}
                  </span>
                </div>
                <div className="sm:w-2/3">
                  <p className="font-garamond text-base sm:text-lg text-[#E2E8F0] leading-relaxed">
                    {mp.whatIDoAndUnderstand}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Before Communion Box */}
          <div className="bg-[#161616] border-l-2 border-[#7DBA84] rounded-r-lg p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-serif small-caps tracking-[0.1em] text-[#7DBA84] font-medium mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Before Communion · Disposition</span>
            </div>
            <p className="font-garamond text-lg sm:text-xl text-[#FFFFFF] font-normal italic leading-relaxed">
              "{BEFORE_COMMUNION_NOTE}"
            </p>
          </div>
        </section>
      )}

      {/* Tab 4: Sources and Doctrinal References */}
      {activeSubTab === 'sources' && (
        <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm animate-fade-in">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7DBA84] font-serif small-caps">
              References
            </span>
            <h2 className="font-serif text-2xl font-normal text-[#FFFFFF] mt-1">
              Sources and Doctrinal References
            </h2>
            <p className="font-garamond text-base sm:text-lg text-[#94A3B8] mt-2">
              The theological, canonical, and liturgical authorities underpinning this catechism:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SOURCES_AND_REFERENCES.sources.map((item, idx) => (
              <div key={idx} className="bg-[#161616] border border-[#262626] p-4 rounded-lg">
                <h3 className="font-serif text-sm font-medium text-[#7DBA84] mb-1">
                  {item.source}
                </h3>
                <p className="font-garamond text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Doctrinal and Canonical Standard */}
          <div className="bg-[#161616] border border-[#262626] p-5 rounded-lg space-y-2">
            <h3 className="font-serif text-xs uppercase tracking-wider text-[#FFFFFF] font-serif small-caps">
              Doctrinal and Canonical Standard
            </h3>
            <p className="font-garamond text-base text-[#94A3B8] leading-relaxed whitespace-pre-line">
              {SOURCES_AND_REFERENCES.doctrinalStandard}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
