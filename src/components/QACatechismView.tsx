import React, { useState, useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { SUMMARY_CATECHISM, LESSONS } from '../data/catechismData';
import { 
  HelpCircle, 
  Search, 
  Volume2, 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';

export const QACatechismView: React.FC = () => {
  const { masteredQuestions, toggleQuestionMastered, speakText } = useProgress();

  const [activeTab, setActiveTab] = useState<'summary' | 'full'>('summary');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  // Prepare full list from all 16 lessons
  const allFullQuestions = useMemo(() => {
    const list: Array<{ id: number; questionNumber: number; lessonId: number; lessonTitle: string; question: string; answer: string }> = [];
    LESSONS.forEach(l => {
      l.answers.forEach(a => {
        list.push({
          id: l.id * 100 + a.questionNumber,
          questionNumber: a.questionNumber,
          lessonId: l.id,
          lessonTitle: l.title,
          question: a.question,
          answer: a.answer
        });
      });
    });
    return list;
  }, []);

  // Filter questions based on search query
  const filteredSummary = useMemo(() => {
    if (!searchQuery.trim()) return SUMMARY_CATECHISM;
    const query = searchQuery.toLowerCase();
    return SUMMARY_CATECHISM.filter(
      q => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const filteredFull = useMemo(() => {
    if (!searchQuery.trim()) return allFullQuestions;
    const query = searchQuery.toLowerCase();
    return allFullQuestions.filter(
      q => q.question.toLowerCase().includes(query) || 
           q.answer.toLowerCase().includes(query) || 
           q.lessonTitle.toLowerCase().includes(query)
    );
  }, [searchQuery, allFullQuestions]);

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const map: Record<number, boolean> = {};
    if (activeTab === 'summary') {
      filteredSummary.forEach(q => { map[q.number] = true; });
    } else {
      filteredFull.forEach(q => { map[q.id] = true; });
    }
    setExpandedItems(map);
  };

  const collapseAll = () => {
    setExpandedItems({});
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#7DBA84]/30 text-[#7DBA84] text-xs font-serif small-caps tracking-[0.15em]">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Catholic Doctrine Reference</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF]">
          Q&A Catechism
        </h1>
        <p className="font-garamond text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto">
          Formal questions and answers faithfully preserved from "My Christian Initiation Catechism" to learn, recite, and understand.
        </p>
      </div>

      {/* Mode Tabs & Search Bar */}
      <div className="bg-[#141414] border border-[#262626] rounded-lg p-4 sm:p-5 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex p-1 bg-[#161616] rounded border border-[#262626]">
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'summary'
                  ? 'bg-[#7DBA84] text-[#0F0F0F] shadow'
                  : 'text-[#94A3B8] hover:text-[#FFFFFF]'
              }`}
            >
              Summary Catechism (Appendix E · 36 Qs)
            </button>
            <button
              onClick={() => setActiveTab('full')}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'full'
                  ? 'bg-[#7DBA84] text-[#0F0F0F] shadow'
                  : 'text-[#94A3B8] hover:text-[#FFFFFF]'
              }`}
            >
              All 16 Lessons (80 Qs)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="text-xs px-2.5 py-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] border border-[#404040] cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="text-xs px-2.5 py-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] border border-[#404040] cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or answers (e.g. Baptism, Trinity, Mass, sin, Fast)..."
            className="w-full pl-10 pr-10 py-2.5 bg-[#161616] border border-[#404040] rounded text-sm text-[#FFFFFF] placeholder-[#64748B] focus:outline-none focus:border-[#7DBA84]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#FFFFFF] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Questions Listing */}
      <div className="space-y-3">
        {activeTab === 'summary' ? (
          filteredSummary.length === 0 ? (
            <div className="text-center py-12 text-[#94A3B8] bg-[#141414] rounded-lg border border-[#262626]">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredSummary.map((q) => {
              const isExpanded = expandedItems[q.number] ?? true;
              const isMastered = masteredQuestions.includes(q.number);
              const qNumStr = String(q.number).padStart(2, '0');

              return (
                <div
                  key={q.number}
                  className={`bg-[#141414] border transition-all rounded-lg overflow-hidden ${
                    isMastered ? 'border-[#7DBA84]/40' : 'border-[#262626] hover:border-[#404040]'
                  }`}
                >
                  <div
                    onClick={() => toggleExpand(q.number)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] text-xs font-serif flex items-center justify-center shrink-0 mt-0.5">
                        {qNumStr}
                      </span>
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-medium text-[#FFFFFF] leading-snug">
                          {q.question}
                        </h3>
                        {q.lessonReference && (
                          <span className="text-[11px] text-[#64748B] font-sans">
                            Source: Lesson {q.lessonReference}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(`Question: ${q.question}. Answer: ${q.answer}`);
                        }}
                        title="Read aloud"
                        className="p-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4 text-[#7DBA84]" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleQuestionMastered(q.number);
                        }}
                        title={isMastered ? "Mastered" : "Mark as mastered"}
                        className="p-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] cursor-pointer"
                      >
                        {isMastered ? (
                          <CheckCircle2 className="w-4 h-4 text-[#7DBA84]" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#64748B] hover:text-[#94A3B8]" />
                        )}
                      </button>

                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#94A3B8]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#94A3B8]" />
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-3 ml-10 border-t border-[#262626] bg-[#161616] animate-fade-in">
                      <p className="font-garamond text-xl text-[#E2E8F0] font-normal leading-relaxed">
                        {q.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )
        ) : (
          filteredFull.length === 0 ? (
            <div className="text-center py-12 text-[#94A3B8] bg-[#141414] rounded-lg border border-[#262626]">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredFull.map((q) => {
              const isExpanded = expandedItems[q.id] ?? true;
              const isMastered = masteredQuestions.includes(q.id);
              const qNumStr = String(q.questionNumber).padStart(2, '0');

              return (
                <div
                  key={q.id}
                  className={`bg-[#141414] border transition-all rounded-lg overflow-hidden ${
                    isMastered ? 'border-[#7DBA84]/40' : 'border-[#262626] hover:border-[#404040]'
                  }`}
                >
                  <div
                    onClick={() => toggleExpand(q.id)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] text-xs font-serif flex items-center justify-center shrink-0 mt-0.5">
                        {qNumStr}
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#7DBA84] font-serif small-caps font-medium mb-0.5">
                          Lesson {q.lessonId}: {q.lessonTitle}
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-medium text-[#FFFFFF] leading-snug">
                          {q.question}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(`Question: ${q.question}. Answer: ${q.answer}`);
                        }}
                        title="Read aloud"
                        className="p-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4 text-[#7DBA84]" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleQuestionMastered(q.id);
                        }}
                        title={isMastered ? "Mastered" : "Mark as mastered"}
                        className="p-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] cursor-pointer"
                      >
                        {isMastered ? (
                          <CheckCircle2 className="w-4 h-4 text-[#7DBA84]" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#64748B] hover:text-[#94A3B8]" />
                        )}
                      </button>

                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#94A3B8]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#94A3B8]" />
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-3 ml-10 border-t border-[#262626] bg-[#161616] animate-fade-in">
                      <p className="font-garamond text-xl text-[#E2E8F0] font-normal leading-relaxed">
                        {q.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )
        )}
      </div>
    </div>
  );
};
