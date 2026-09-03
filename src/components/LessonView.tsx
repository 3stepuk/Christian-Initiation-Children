import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { LESSONS } from '../data/catechismData';
import { 
  CheckCircle2, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Brain, 
  MessageSquare, 
  Sparkles, 
  Calendar, 
  Eye, 
  EyeOff, 
  HelpCircle,
  BookOpen
} from 'lucide-react';

export const LessonView: React.FC = () => {
  const { 
    selectedLessonId, 
    setSelectedLessonId, 
    completedLessons, 
    toggleLessonComplete, 
    setCurrentTab,
    speakText,
    isSpeaking,
    stopSpeaking
  } = useProgress();

  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [showTalkNote, setShowTalkNote] = useState(false);

  const currentLesson = LESSONS.find(l => l.id === selectedLessonId) || LESSONS[0];
  const isCompleted = completedLessons.includes(currentLesson.id);

  const toggleAnswerReveal = (qNum: number) => {
    setRevealedAnswers(prev => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  const revealAllAnswers = () => {
    const allRevealed: Record<number, boolean> = {};
    currentLesson.answers.forEach(a => {
      allRevealed[a.questionNumber] = true;
    });
    setRevealedAnswers(allRevealed);
  };

  const hideAllAnswers = () => {
    setRevealedAnswers({});
  };

  const handlePrevious = () => {
    if (selectedLessonId > 1) {
      setSelectedLessonId(selectedLessonId - 1);
      setShowTalkNote(false);
      setRevealedAnswers({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (selectedLessonId < LESSONS.length) {
      setSelectedLessonId(selectedLessonId + 1);
      setShowTalkNote(false);
      setRevealedAnswers({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePracticeInDrill = () => {
    setCurrentTab('recall');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSpeakLesson = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const fullText = `Lesson ${currentLesson.id}: ${currentLesson.title}. Remember: ${currentLesson.remember}. Explanation: ${currentLesson.explanation.join(' ')}. Prayer: ${currentLesson.prayer}`;
      speakText(fullText);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Top Header & Lesson Navigator */}
      <div className="bg-[#141414] border border-[#262626] rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="lesson-selector" className="text-xs font-serif small-caps text-[#94A3B8] tracking-wider shrink-0">
            Go to:
          </label>
          <select
            id="lesson-selector"
            value={selectedLessonId}
            onChange={(e) => {
              setSelectedLessonId(Number(e.target.value));
              setShowTalkNote(false);
              setRevealedAnswers({});
            }}
            className="w-full sm:w-72 px-3 py-2 bg-[#161616] border border-[#404040] rounded text-xs sm:text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
          >
            {LESSONS.map((l) => (
              <option key={l.id} value={l.id}>
                Lesson {l.id}: {l.title} {completedLessons.includes(l.id) ? '✓' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handleSpeakLesson}
            title={isSpeaking ? "Stop Reading" : "Read Lesson Aloud"}
            className={`px-3 py-2 rounded text-xs font-medium flex items-center gap-1.5 transition-colors border cursor-pointer ${
              isSpeaking
                ? 'bg-amber-900/30 text-amber-300 border-amber-600/40'
                : 'bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] border-[#404040]'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#7DBA84]" />}
            <span>{isSpeaking ? 'Stop Audio' : 'Listen'}</span>
          </button>

          <button
            onClick={() => toggleLessonComplete(currentLesson.id)}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all border cursor-pointer ${
              isCompleted
                ? 'bg-[#7DBA84]/15 border-[#7DBA84] text-[#7DBA84]'
                : 'bg-transparent hover:bg-[#1A1A1A] border-[#404040] text-[#94A3B8] hover:text-[#FFFFFF]'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#7DBA84]" />
                <span>Lesson Completed</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-[#64748B]" />
                <span>Mark Completed</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Lesson Content Card */}
      <article className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-10 shadow-xl space-y-8">
        {/* Lesson Title & Number */}
        <div className="border-b border-[#262626] pb-6">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-serif small-caps text-xs sm:text-sm tracking-[0.1em] text-[#7DBA84] font-medium">
              Lesson {currentLesson.id} of 16
            </span>
            {isCompleted && (
              <span className="text-xs bg-[#7DBA84]/15 text-[#7DBA84] border border-[#7DBA84]/40 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Finished</span>
              </span>
            )}
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FFFFFF] tracking-tight">
            {currentLesson.title}
          </h1>
        </div>

        {/* 1. REMEMBER - Central Truth */}
        <section className="bg-[#161616] border-l-2 border-[#7DBA84] rounded-r-lg p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-serif small-caps tracking-[0.1em] text-[#7DBA84] font-medium mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Remember · Central Truth</span>
          </div>
          <p className="font-garamond text-xl sm:text-2xl text-[#FFFFFF] font-normal italic leading-relaxed">
            "{currentLesson.remember}"
          </p>
        </section>

        {/* 2. EXPLANATION - Core Catholic Teaching */}
        <section className="space-y-4 pt-2">
          <h2 className="font-serif small-caps text-xs uppercase tracking-wider text-[#94A3B8] font-medium flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#7DBA84]" />
            <span>Explanation</span>
          </h2>
          <div className="space-y-4 font-garamond text-lg sm:text-xl text-[#E2E8F0] leading-relaxed">
            {currentLesson.explanation.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* 3. TALK ABOUT IT - Guided Conversation */}
        <section className="bg-[#161616] border border-[#262626] rounded-lg p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-serif small-caps tracking-[0.1em] text-[#7DBA84] font-medium">
              <MessageSquare className="w-4 h-4 text-[#7DBA84]" />
              <span>Talk About It</span>
            </div>
            <button
              onClick={() => setShowTalkNote(!showTalkNote)}
              className="text-xs text-[#94A3B8] hover:text-[#FFFFFF] underline underline-offset-4 cursor-pointer"
            >
              {showTalkNote ? 'Hide Guide' : 'Catechist / Parent Guide'}
            </button>
          </div>

          <p className="font-garamond text-lg sm:text-xl text-[#FFFFFF] font-medium leading-relaxed">
            {currentLesson.talkAboutIt.question}
          </p>

          {showTalkNote && (
            <div className="mt-3 p-4 bg-[#141414] border border-[#262626] rounded text-sm text-[#94A3B8] font-garamond italic leading-relaxed animate-fade-in">
              <span className="font-bold text-[#7DBA84] not-italic">Parent & Catechist Note: </span>
              {currentLesson.talkAboutIt.note}
            </div>
          )}
        </section>

        {/* 4. LEARN THESE ANSWERS - 5 Formal Q&A with Reveal Mode */}
        <section className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#262626] pb-3">
            <div>
              <h2 className="font-serif text-lg font-normal text-[#FFFFFF] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#7DBA84]" />
                <span>Learn These Answers</span>
              </h2>
              <p className="text-xs text-[#94A3B8] font-garamond text-base">
                Click any answer to reveal or hide it. Practise reciting them clearly.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={revealAllAnswers}
                className="text-xs px-2.5 py-1 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] flex items-center gap-1 border border-[#404040] cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Reveal All</span>
              </button>
              <button
                onClick={hideAllAnswers}
                className="text-xs px-2.5 py-1 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] flex items-center gap-1 border border-[#404040] cursor-pointer"
              >
                <EyeOff className="w-3.5 h-3.5" />
                <span>Hide All</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {currentLesson.answers.map((qa) => {
              const isRevealed = revealedAnswers[qa.questionNumber];
              const qNumStr = String(qa.questionNumber).padStart(2, '0');
              return (
                <div
                  key={qa.questionNumber}
                  className="bg-[#161616] border border-[#262626] rounded-lg p-4 sm:p-5 transition-colors hover:border-[#404040]"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full border border-[#7DBA84] bg-[#141414] text-[#7DBA84] text-xs font-serif flex items-center justify-center shrink-0 mt-0.5">
                        {qNumStr}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-[#FFFFFF]">
                        {qa.question}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleAnswerReveal(qa.questionNumber)}
                      className="text-xs text-[#7DBA84] hover:text-[#92c999] shrink-0 font-medium underline underline-offset-2 ml-2 cursor-pointer"
                    >
                      {isRevealed ? 'Hide' : 'Show Answer'}
                    </button>
                  </div>

                  {isRevealed ? (
                    <div className="ml-10 p-3.5 bg-[#141414] border border-[#7DBA84]/40 rounded animate-fade-in">
                      <p className="font-garamond text-lg sm:text-xl text-[#FFFFFF] font-normal leading-relaxed">
                        {qa.answer}
                      </p>
                    </div>
                  ) : (
                    <div
                      onClick={() => toggleAnswerReveal(qa.questionNumber)}
                      className="ml-10 p-3 bg-[#141414] hover:bg-[#1A1A1A] border border-dashed border-[#404040] rounded cursor-pointer text-center text-xs text-[#94A3B8] transition-colors"
                    >
                      Click to reveal catechism answer
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handlePracticeInDrill}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7DBA84] hover:text-[#92c999] bg-transparent hover:bg-[#1A1A1A] border border-[#7DBA84]/40 px-3.5 py-2 rounded transition-colors cursor-pointer"
            >
              <Brain className="w-4 h-4" />
              <span>Practice in Memory Drill Flashcards</span>
            </button>
          </div>
        </section>

        {/* 5. PRAYER - Reverent Prayer Card */}
        <section className="bg-[#161616] border border-[#262626] rounded-lg p-5 sm:p-7 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-serif small-caps text-xs tracking-wider text-[#7DBA84] font-medium">
              Prayer
            </span>
            <button
              onClick={() => speakText(currentLesson.prayer)}
              className="text-xs text-[#94A3B8] hover:text-[#FFFFFF] flex items-center gap-1 cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#7DBA84]" />
              <span>Pray Aloud</span>
            </button>
          </div>

          <p className="font-garamond text-xl sm:text-2xl text-[#FFFFFF] leading-relaxed font-serif italic text-center py-2">
            "{currentLesson.prayer}"
          </p>
        </section>

        {/* 6. THIS WEEK - Practical Home/Parish Action */}
        <section className="bg-[#161616] border border-[#262626] rounded-lg p-5 sm:p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#141414] text-[#7DBA84] flex items-center justify-center shrink-0 mt-0.5">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif small-caps text-xs tracking-wider text-[#7DBA84] font-medium block mb-1">
              This Week
            </span>
            <p className="font-garamond text-lg sm:text-xl text-[#E2E8F0] leading-relaxed font-normal">
              {currentLesson.thisWeek}
            </p>
          </div>
        </section>
      </article>

      {/* Bottom Lesson Navigation */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={handlePrevious}
          disabled={selectedLessonId === 1}
          className="px-4 py-2.5 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#FFFFFF] disabled:opacity-30 disabled:hover:bg-transparent text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Lesson</span>
        </button>

        <button
          onClick={() => toggleLessonComplete(currentLesson.id)}
          className={`px-5 py-2.5 rounded text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border shadow-sm cursor-pointer ${
            isCompleted
              ? 'bg-[#7DBA84] text-[#0F0F0F] border-[#7DBA84]'
              : 'bg-transparent hover:bg-[#1A1A1A] border-[#404040] text-[#7DBA84]'
          }`}
        >
          {isCompleted ? '✓ Completed' : 'Mark Lesson Complete'}
        </button>

        <button
          onClick={handleNext}
          disabled={selectedLessonId === LESSONS.length}
          className="px-4 py-2.5 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#FFFFFF] disabled:opacity-30 disabled:hover:bg-transparent text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
        >
          <span>Next Lesson</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
