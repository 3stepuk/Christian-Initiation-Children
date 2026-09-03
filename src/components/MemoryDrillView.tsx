import React, { useState, useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { SUMMARY_CATECHISM, LESSONS } from '../data/catechismData';
import { 
  Brain, 
  RotateCw, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Shuffle, 
  HelpCircle,
  Award,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';

type DrillMode = 'summary' | 'lesson' | 'all';

export const MemoryDrillView: React.FC = () => {
  const { masteredQuestions, toggleQuestionMastered, speakText } = useProgress();

  const [mode, setMode] = useState<DrillMode>('summary');
  const [selectedLessonFilter, setSelectedLessonFilter] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [shuffleOrder, setShuffleOrder] = useState<number[]>([]);

  // Build the list of questions based on active mode
  const rawQuestions = useMemo(() => {
    if (mode === 'summary') {
      return SUMMARY_CATECHISM.map(q => ({
        id: q.number,
        displayNumber: q.number,
        question: q.question,
        answer: q.answer,
        tag: `Summary Q${q.number} · Lesson ${q.lessonReference || ''}`
      }));
    } else if (mode === 'lesson') {
      const lesson = LESSONS.find(l => l.id === selectedLessonFilter) || LESSONS[0];
      return lesson.answers.map((a, idx) => ({
        id: selectedLessonFilter * 100 + a.questionNumber,
        displayNumber: a.questionNumber,
        question: a.question,
        answer: a.answer,
        tag: `Lesson ${selectedLessonFilter}: ${lesson.title}`
      }));
    } else {
      // All questions from all lessons
      const list: Array<{ id: number; displayNumber: number; question: string; answer: string; tag: string }> = [];
      LESSONS.forEach(l => {
        l.answers.forEach(a => {
          list.push({
            id: l.id * 100 + a.questionNumber,
            displayNumber: a.questionNumber,
            question: a.question,
            answer: a.answer,
            tag: `Lesson ${l.id}: ${l.title}`
          });
        });
      });
      return list;
    }
  }, [mode, selectedLessonFilter]);

  // Handle deck ordering
  const questions = useMemo(() => {
    if (shuffleOrder.length === rawQuestions.length && shuffleOrder.length > 0) {
      return shuffleOrder.map(i => rawQuestions[i]).filter(Boolean);
    }
    return rawQuestions;
  }, [rawQuestions, shuffleOrder]);

  const currentQ = questions[currentIndex] || questions[0];
  const isMastered = currentQ ? masteredQuestions.includes(currentQ.id) : false;

  const handleNext = () => {
    setIsAnswerRevealed(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsAnswerRevealed(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(questions.length - 1);
    }
  };

  const handleShuffle = () => {
    const indices = Array.from({ length: rawQuestions.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffleOrder(indices);
    setCurrentIndex(0);
    setIsAnswerRevealed(false);
  };

  const handleResetOrder = () => {
    setShuffleOrder([]);
    setCurrentIndex(0);
    setIsAnswerRevealed(false);
  };

  const handleModeChange = (newMode: DrillMode) => {
    setMode(newMode);
    setShuffleOrder([]);
    setCurrentIndex(0);
    setIsAnswerRevealed(false);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentQ) return;
    const text = isAnswerRevealed 
      ? `Question: ${currentQ.question}. Answer: ${currentQ.answer}`
      : `Question: ${currentQ.question}`;
    speakText(text);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#7DBA84]/30 text-[#7DBA84] text-xs font-serif small-caps tracking-[0.15em]">
          <Brain className="w-3.5 h-3.5" />
          <span>Memory-Recall Drills</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF]">
          Catechism Recall Practice
        </h1>
        <p className="font-garamond text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto">
          Train your memory on the formal Catholic answers. Test yourself, flip to reveal, and mark the ones you know by heart.
        </p>
      </div>

      {/* Mode Selectors */}
      <div className="bg-[#141414] border border-[#262626] rounded-lg p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleModeChange('summary')}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              mode === 'summary'
                ? 'bg-[#7DBA84] text-[#0F0F0F]'
                : 'bg-transparent text-[#94A3B8] hover:text-[#FFFFFF] border border-[#404040]'
            }`}
          >
            Summary Catechism (36 Qs)
          </button>

          <button
            onClick={() => handleModeChange('lesson')}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              mode === 'lesson'
                ? 'bg-[#7DBA84] text-[#0F0F0F]'
                : 'bg-transparent text-[#94A3B8] hover:text-[#FFFFFF] border border-[#404040]'
            }`}
          >
            Single Lesson (5 Qs)
          </button>

          <button
            onClick={() => handleModeChange('all')}
            className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              mode === 'all'
                ? 'bg-[#7DBA84] text-[#0F0F0F]'
                : 'bg-transparent text-[#94A3B8] hover:text-[#FFFFFF] border border-[#404040]'
            }`}
          >
            All Lessons (80 Qs)
          </button>
        </div>

        <div className="flex items-center gap-2">
          {mode === 'lesson' && (
            <select
              value={selectedLessonFilter}
              onChange={(e) => {
                setSelectedLessonFilter(Number(e.target.value));
                setCurrentIndex(0);
                setIsAnswerRevealed(false);
              }}
              className="px-2.5 py-1 bg-[#161616] border border-[#404040] rounded text-xs text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
            >
              {LESSONS.map(l => (
                <option key={l.id} value={l.id}>
                  Lesson {l.id}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleShuffle}
            title="Shuffle deck"
            className="p-1.5 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#94A3B8] hover:text-[#FFFFFF] text-xs flex items-center gap-1 cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#7DBA84]" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
        </div>
      </div>

      {/* Flashcard Component */}
      {currentQ && (
        <div className="space-y-6">
          {/* Card Counter & Tag */}
          <div className="flex items-center justify-between text-xs text-[#94A3B8] px-1">
            <span className="font-serif small-caps tracking-wider text-[#7DBA84]">
              {currentQ.tag}
            </span>
            <span className="font-sans">
              Card {currentIndex + 1} of {questions.length}
            </span>
          </div>

          {/* Card Body */}
          <div
            onClick={() => setIsAnswerRevealed(!isAnswerRevealed)}
            className={`cursor-pointer min-h-[300px] sm:min-h-[320px] rounded-lg p-6 sm:p-10 border transition-all duration-300 flex flex-col justify-between shadow-xl relative select-none ${
              isAnswerRevealed
                ? 'bg-[#161616] border-[#7DBA84]/50 shadow-[0_0_25px_rgba(125,186,132,0.12)]'
                : 'bg-[#141414] hover:bg-[#181818] border-[#262626] hover:border-[#404040]'
            }`}
          >
            {/* Top Card Controls */}
            <div className="flex items-center justify-between gap-2 border-b border-[#262626] pb-3">
              <span className="text-xs uppercase tracking-widest text-[#7DBA84] font-medium font-serif small-caps">
                Question {currentQ.displayNumber}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSpeak}
                  title="Read aloud"
                  className="p-1.5 rounded bg-[#161616] hover:bg-[#202020] text-[#94A3B8] hover:text-[#FFFFFF] cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-[#7DBA84]" />
                </button>
                <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                  {isAnswerRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-[#7DBA84]" />}
                  <span>{isAnswerRevealed ? 'Click to hide' : 'Click to reveal'}</span>
                </span>
              </div>
            </div>

            {/* Middle Question / Answer Content */}
            <div className="py-6 sm:py-8 space-y-6 text-center">
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-[#FFFFFF] leading-snug">
                {currentQ.question}
              </h2>

              {isAnswerRevealed ? (
                <div className="pt-4 border-t border-[#7DBA84]/30 animate-fade-in">
                  <p className="font-garamond text-2xl sm:text-3xl text-[#7DBA84] font-normal italic leading-relaxed max-w-2xl mx-auto">
                    "{currentQ.answer}"
                  </p>
                </div>
              ) : (
                <div className="pt-4">
                  <div className="inline-block px-4 py-2 rounded bg-[#161616] border border-dashed border-[#404040] text-xs text-[#94A3B8] font-sans tracking-wide">
                    Tap anywhere to check answer
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="border-t border-[#262626] pt-4 flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleQuestionMastered(currentQ.id);
                }}
                className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  isMastered
                    ? 'bg-[#7DBA84] text-[#0F0F0F]'
                    : 'bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] border border-[#404040]'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isMastered ? 'text-[#0F0F0F]' : 'text-[#64748B]'}`} />
                <span>{isMastered ? 'Mastered!' : 'Mark as Mastered'}</span>
              </button>

              <span className="text-xs text-[#64748B] font-sans">
                {isMastered ? 'Saved to your profile' : 'Keep practicing'}
              </span>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="flex-1 py-3 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#FFFFFF] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setIsAnswerRevealed(!isAnswerRevealed)}
              className="px-6 py-3 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#FFFFFF] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {isAnswerRevealed ? 'Hide Answer' : 'Reveal Answer'}
            </button>

            <button
              onClick={handleNext}
              className="flex-1 py-3 rounded bg-[#7DBA84] hover:bg-[#92c999] text-[#0F0F0F] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#7DBA84]/20 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
