import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { LESSONS, INTRO_NOTE } from '../data/catechismData';
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Brain, 
  Heart, 
  Shield, 
  ChevronRight, 
  Info, 
  UserCheck, 
  Flame, 
  Scroll,
  HelpCircle
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { 
    setCurrentTab, 
    setSelectedLessonId, 
    completedLessons, 
    totalLessonsCount, 
    masteredQuestions, 
    readinessChecked,
    profile,
    setIsOptInModalOpen
  } = useProgress();

  const [showNoteDetails, setShowNoteDetails] = useState(false);

  // Determine next uncompleted lesson
  const nextLessonId = LESSONS.find(l => !completedLessons.includes(l.id))?.id || 1;

  const handleStartOrContinue = () => {
    setSelectedLessonId(nextLessonId);
    setCurrentTab('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (id: number) => {
    setSelectedLessonId(id);
    setCurrentTab('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section styled with Elegant Dark aesthetic */}
      <section className="relative overflow-hidden rounded-lg bg-[#141414] border border-[#262626] p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#7DBA84]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-[#5b9462]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          {/* Accent Line */}
          <div className="w-[60px] h-[2px] bg-[#7DBA84] mb-6"></div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#7DBA84]/30 text-[#7DBA84] text-xs font-serif small-caps tracking-[0.15em] mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Parish Teaching Series · RCIC</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-normal text-[#FFFFFF] leading-[1.15] mb-4">
            Welcome to the <br />
            <span className="text-[#7DBA84]">Journey of Faith</span>
          </h1>
          <h2 className="font-serif small-caps text-base sm:text-lg text-[#94A3B8] font-normal tracking-wide mb-5">
            Christian Initiation for Children · Preparing for Holy Baptism & First Holy Communion
          </h2>

          <p className="font-garamond text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-8">
            Written for unbaptised children aged seven to ten who have reached the use of reason and are asking to become Catholics. Accompanied by family, godparents and catechists, this pathway introduces the child to living faith in Jesus Christ, prayer, Sunday worship, and the life of the Church.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleStartOrContinue}
              id="hero-begin-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#7DBA84] hover:bg-[#92c999] text-[#0F0F0F] font-bold text-xs sm:text-sm uppercase tracking-[0.1em] shadow-lg shadow-[#7DBA84]/20 transition-all duration-200 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>
                {completedLessons.length === 0 ? 'Begin the First Lesson' : `Continue Lesson ${nextLessonId}`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentTab('recall')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#FFFFFF] border border-[#404040] hover:border-[#64748B] font-bold text-xs sm:text-sm uppercase tracking-[0.1em] transition-all cursor-pointer"
            >
              <Brain className="w-4 h-4 text-[#7DBA84]" />
              <span>Memory Recall Drill</span>
            </button>

            <button
              onClick={() => setCurrentTab('readiness')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#FFFFFF] border border-[#404040] hover:border-[#64748B] font-bold text-xs sm:text-sm uppercase tracking-[0.1em] transition-all cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-[#7DBA84]" />
              <span>Readiness Guide</span>
            </button>
          </div>

          {!profile.optInSubmitted && (
            <div className="mt-8 pt-6 border-t border-[#262626] flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs text-[#94A3B8] flex items-center gap-2">
                <Info className="w-4 h-4 text-[#7DBA84]" />
                <span>Would you like to inform your parish priest that you have started?</span>
              </div>
              <button
                onClick={() => setIsOptInModalOpen(true)}
                className="text-xs text-[#7DBA84] hover:text-[#92c999] font-serif small-caps tracking-wider underline underline-offset-4"
              >
                Optional Parish Sign-in
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Progress Dashboard Banner */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full border border-[#7DBA84] bg-[#161616] flex items-center justify-center text-[#7DBA84] shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#FFFFFF]">
              {completedLessons.length} / {totalLessonsCount}
            </div>
            <div className="text-xs text-[#94A3B8] uppercase tracking-wider font-sans">
              Lessons Completed ({Math.round((completedLessons.length / totalLessonsCount) * 100)}%)
            </div>
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full border border-[#7DBA84] bg-[#161616] flex items-center justify-center text-[#7DBA84] shrink-0">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#FFFFFF]">
              {masteredQuestions.length} / 36
            </div>
            <div className="text-xs text-[#94A3B8] uppercase tracking-wider font-sans">
              Catechism Answers Mastered
            </div>
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-full border border-[#7DBA84] bg-[#161616] flex items-center justify-center text-[#7DBA84] shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#FFFFFF]">
              {readinessChecked.length} / 9
            </div>
            <div className="text-xs text-[#94A3B8] uppercase tracking-wider font-sans">
              Readiness Areas Discerned
            </div>
          </div>
        </div>
      </section>

      {/* 16 Lessons Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#262626] pb-3">
          <div>
            <div className="font-serif small-caps tracking-[0.1em] text-xs text-[#7DBA84] mb-1">
              Preparation Steps
            </div>
            <h2 className="font-serif text-2xl font-normal text-[#FFFFFF]">
              The 16 Lessons of the Catechism
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] font-garamond text-base mt-1">
              Each lesson includes a central truth to remember, an explanation, talk about it, five answers to learn, a prayer, and a weekly action.
            </p>
          </div>
          <button
            onClick={() => setCurrentTab('qa')}
            className="hidden sm:inline-flex items-center gap-1 text-xs text-[#7DBA84] hover:text-[#92c999] font-serif small-caps tracking-wider"
          >
            <span>View All Q&A</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LESSONS.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isCurrent = lesson.id === nextLessonId;
            const lessonNumStr = String(lesson.id).padStart(2, '0');
            return (
              <div
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson.id)}
                className={`group cursor-pointer rounded-lg p-5 transition-all duration-200 flex flex-col justify-between border text-left ${
                  isCurrent
                    ? 'bg-[#181818] border-[#7DBA84] shadow-[0_0_15px_rgba(125,186,132,0.15)] ring-1 ring-[#7DBA84]/40'
                    : isCompleted
                    ? 'bg-[#141414] border-[#262626] hover:border-[#7DBA84]/60'
                    : 'bg-[#141414] border-[#262626] hover:border-[#404040] hover:bg-[#181818]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-serif ${
                        isCompleted
                          ? 'border border-[#7DBA84] text-[#7DBA84] bg-[#161616]'
                          : isCurrent
                          ? 'border border-[#7DBA84] text-[#7DBA84] bg-[#7DBA84]/15 font-bold'
                          : 'border border-[#404040] text-[#64748B] bg-[#161616]'
                      }`}>
                        {lessonNumStr}
                      </div>
                      <span className="font-serif small-caps text-xs text-[#7DBA84] font-medium tracking-wider">
                        Lesson {lesson.id}
                      </span>
                    </div>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-[11px] text-[#7DBA84] font-medium bg-[#7DBA84]/15 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </span>
                    ) : isCurrent ? (
                      <span className="text-[11px] text-[#FFFFFF] font-medium bg-[#7DBA84]/20 px-2 py-0.5 rounded-full border border-[#7DBA84]/40">
                        Up Next
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#64748B] font-sans">
                        5 Answers
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-base font-medium text-[#FFFFFF] group-hover:text-[#7DBA84] transition-colors leading-snug mb-2">
                    {lesson.title}
                  </h3>

                  <p className="font-garamond text-xs sm:text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {lesson.remember}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-xs text-[#94A3B8] group-hover:text-[#FFFFFF]">
                  <span className="text-[11px] text-[#64748B]">Read & practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#7DBA84]" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Note for Parents, Catechists and Priests */}
      <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] flex items-center justify-center text-[#7DBA84]">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif small-caps text-xs text-[#7DBA84] tracking-[0.1em]">
                Pastoral Guidance
              </div>
              <h2 className="font-serif text-xl font-normal text-[#FFFFFF]">
                {INTRO_NOTE.title}
              </h2>
            </div>
          </div>
          <button
            onClick={() => setShowNoteDetails(!showNoteDetails)}
            className="text-xs px-3 py-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#E2E8F0] border border-[#404040] font-medium transition-colors cursor-pointer"
          >
            {showNoteDetails ? 'Collapse' : 'Read Full Note'}
          </button>
        </div>

        <p className="font-garamond text-lg text-[#E2E8F0] leading-relaxed whitespace-pre-line">
          {INTRO_NOTE.body}
        </p>

        {showNoteDetails && (
          <div className="space-y-6 pt-4 border-t border-[#262626] animate-fade-in">
            {/* Pastoral Principles */}
            <div>
              <h3 className="font-serif small-caps text-sm tracking-wider text-[#7DBA84] font-bold mb-3">
                Pastoral Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {INTRO_NOTE.pastoralPrinciples.map((item, idx) => (
                  <div key={idx} className="bg-[#161616] p-4 rounded-lg border border-[#262626]">
                    <div className="font-serif text-sm font-medium text-[#FFFFFF] mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7DBA84]" />
                      {item.title}
                    </div>
                    <p className="text-xs font-garamond text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* A necessary note about Confession */}
            <div className="bg-[#161616] p-5 rounded-lg border border-amber-900/40">
              <h3 className="font-serif text-sm text-amber-300 font-semibold mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-400" />
                <span>A Necessary Note About Confession</span>
              </h3>
              <p className="font-garamond text-base text-[#E2E8F0] leading-relaxed">
                {INTRO_NOTE.confessionNote}
              </p>
            </div>

            {/* Diocesan and Confirmation Notice */}
            <div className="bg-[#161616] p-4 rounded-lg border border-[#262626] text-xs font-sans text-[#94A3B8]">
              <span className="font-semibold text-[#E2E8F0]">Diocesan Canonical Policy: </span>
              {INTRO_NOTE.importantNotice}
            </div>
          </div>
        )}
      </section>

      {/* Quick Access Pathways (Appendices, Prayers, Q&A, Profile) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => setCurrentTab('prayers')}
          className="cursor-pointer bg-[#141414] hover:bg-[#181818] border border-[#262626] hover:border-[#7DBA84]/40 p-5 rounded-lg transition-all group"
        >
          <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-medium text-[#FFFFFF] group-hover:text-[#7DBA84] transition-colors">
            Prayers to Learn
          </h3>
          <p className="text-xs font-garamond text-[#94A3B8] mt-1">
            Our Father, Hail Mary, Glory Be, Act of Contrition, Communion Prayers & Examination of Conscience.
          </p>
        </div>

        <div 
          onClick={() => setCurrentTab('qa')}
          className="cursor-pointer bg-[#141414] hover:bg-[#181818] border border-[#262626] hover:border-[#7DBA84]/40 p-5 rounded-lg transition-all group"
        >
          <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-medium text-[#FFFFFF] group-hover:text-[#7DBA84] transition-colors">
            Summary Catechism
          </h3>
          <p className="text-xs font-garamond text-[#94A3B8] mt-1">
            All 36 foundational questions and answers covering God, the Trinity, the Cross, Baptism & Mass.
          </p>
        </div>

        <div 
          onClick={() => setCurrentTab('appendices')}
          className="cursor-pointer bg-[#141414] hover:bg-[#181818] border border-[#262626] hover:border-[#7DBA84]/40 p-5 rounded-lg transition-all group"
        >
          <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-medium text-[#FFFFFF] group-hover:text-[#7DBA84] transition-colors">
            Appendices & Rites
          </h3>
          <p className="text-xs font-garamond text-[#94A3B8] mt-1">
            The Journey Step by Step, Rite of Baptism, Child's Guide to Mass, and canonical sources.
          </p>
        </div>

        <div 
          onClick={() => setCurrentTab('profile')}
          className="cursor-pointer bg-[#141414] hover:bg-[#181818] border border-[#262626] hover:border-[#7DBA84]/40 p-5 rounded-lg transition-all group"
        >
          <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <UserCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-medium text-[#FFFFFF] group-hover:text-[#7DBA84] transition-colors">
            Profile & Mentors
          </h3>
          <p className="text-xs font-garamond text-[#94A3B8] mt-1">
            Record Sponsor / Mentor, Priest / Deacon, Parish, and your personal preparation record.
          </p>
        </div>
      </section>
    </div>
  );
};
