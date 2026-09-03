import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { PRAYERS, EXAMINATION_OF_CONSCIENCE } from '../data/catechismData';
import { 
  Heart, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Sparkles, 
  CheckSquare, 
  Square,
  BookOpen,
  RotateCcw
} from 'lucide-react';

export const PrayersView: React.FC = () => {
  const { speakText, isSpeaking, stopSpeaking } = useProgress();
  const [largeText, setLargeText] = useState(false);
  const [checkedConscience, setCheckedConscience] = useState<Record<number, boolean>>({});

  const toggleConscience = (index: number) => {
    setCheckedConscience(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const resetConscience = () => {
    setCheckedConscience({});
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#7DBA84]/30 text-[#7DBA84] text-xs font-serif small-caps tracking-[0.15em]">
          <Heart className="w-3.5 h-3.5" />
          <span>Appendix D · Sacred Prayers & Reflection</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF]">
          Prayers to Learn and Pray
        </h1>
        <p className="font-garamond text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto">
          The essential Catholic prayers to commit to heart, pray daily with your family, and recite during holy Mass.
        </p>
      </div>

      {/* Preferences Bar */}
      <div className="flex items-center justify-between bg-[#141414] border border-[#262626] rounded-lg px-4 py-2.5">
        <span className="text-xs text-[#94A3B8] font-serif small-caps tracking-wider">
          Reading display
        </span>
        <button
          onClick={() => setLargeText(!largeText)}
          className="text-xs px-3 py-1 rounded bg-transparent hover:bg-[#1A1A1A] text-[#FFFFFF] border border-[#404040] transition-colors cursor-pointer"
        >
          {largeText ? 'Standard Font' : 'Large Prayer Font'}
        </button>
      </div>

      {/* Prayers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PRAYERS.map((prayer) => (
          <div
            key={prayer.id}
            className="bg-[#141414] border border-[#262626] hover:border-[#404040] rounded-lg p-6 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-medium text-[#FFFFFF]">
                    {prayer.title}
                  </h2>
                  {prayer.latinTitle && (
                    <span className="text-xs font-garamond italic text-[#7DBA84]">
                      {prayer.latinTitle}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => speakText(prayer.text)}
                  title="Read aloud"
                  className="p-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-[#7DBA84]" />
                </button>
              </div>

              <p
                className={`font-garamond text-[#E2E8F0] leading-relaxed italic ${
                  largeText ? 'text-2xl leading-loose' : 'text-xl'
                }`}
              >
                "{prayer.text}"
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#262626] flex items-center justify-between text-xs text-[#64748B]">
              <span className="capitalize font-sans">{prayer.category} Prayer</span>
              <span className="text-[#7DBA84] font-serif small-caps font-medium">Amen</span>
            </div>
          </div>
        ))}
      </div>

      {/* A Short Examination of Conscience (Page 24) */}
      <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#262626] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-normal text-[#FFFFFF]">
                {EXAMINATION_OF_CONSCIENCE.title}
              </h2>
              <p className="text-xs text-[#7DBA84] font-serif small-caps tracking-wider">
                For quiet personal reflection before God
              </p>
            </div>
          </div>

          <button
            onClick={resetConscience}
            className="text-xs px-2.5 py-1.5 rounded bg-transparent hover:bg-[#1A1A1A] text-[#94A3B8] hover:text-[#FFFFFF] border border-[#404040] flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset checkmarks</span>
          </button>
        </div>

        <p className="font-garamond text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          Before your Baptism, look honestly at your thoughts, words, and actions with God’s help:
        </p>

        <div className="space-y-3">
          {EXAMINATION_OF_CONSCIENCE.questions.map((question, idx) => {
            const isChecked = !!checkedConscience[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleConscience(idx)}
                className={`cursor-pointer p-4 rounded-lg border transition-all flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-[#161616] border-[#7DBA84]/40 text-[#FFFFFF]'
                    : 'bg-[#161616] border-[#262626] hover:border-[#404040] text-[#E2E8F0]'
                }`}
              >
                <div className="mt-0.5 shrink-0 text-[#7DBA84]">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-[#7DBA84]" />
                  ) : (
                    <Square className="w-5 h-5 text-[#64748B]" />
                  )}
                </div>
                <p className="font-garamond text-lg sm:text-xl leading-relaxed">
                  {question}
                </p>
              </div>
            );
          })}
        </div>

        {/* Remember Callout */}
        <div className="bg-[#161616] border-l-2 border-[#7DBA84] rounded-r-lg p-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-serif small-caps tracking-[0.1em] text-[#7DBA84] font-medium mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Remember · Repentance and Baptism</span>
          </div>
          <p className="font-garamond text-lg sm:text-xl text-[#FFFFFF] leading-relaxed italic">
            "{EXAMINATION_OF_CONSCIENCE.remember}"
          </p>
        </div>
      </section>
    </div>
  );
};
