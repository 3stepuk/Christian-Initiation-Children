import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, AppTab } from '../types';

interface ProgressContextType {
  currentTab: AppTab;
  setCurrentTab: (tab: AppTab) => void;
  selectedLessonId: number;
  setSelectedLessonId: (id: number) => void;
  completedLessons: number[];
  toggleLessonComplete: (lessonId: number) => void;
  masteredQuestions: number[];
  toggleQuestionMastered: (questionNum: number) => void;
  readinessChecked: string[];
  toggleReadinessItem: (id: string) => void;
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  isOptInModalOpen: boolean;
  setIsOptInModalOpen: (open: boolean) => void;
  submitOptInNotification: (name: string, email: string, parishName?: string) => Promise<boolean>;
  resetAllProgress: () => void;
  totalLessonsCount: number;
  completedPercentage: number;
  speakText: (text: string) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
}

const DEFAULT_PROFILE: UserProfile = {
  childName: '',
  parish: '',
  sponsorMentor: '',
  priestDeaconMentor: '',
  targetDate: '',
  notes: '',
  optInSubmitted: false,
  parentEmail: ''
};

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'rcic_completed_lessons',
  MASTERED_QUESTIONS: 'rcic_mastered_questions',
  READINESS_CHECKED: 'rcic_readiness_checked',
  PROFILE: 'rcic_user_profile',
  OPT_IN_SHOWN: 'rcic_opt_in_prompt_shown'
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<AppTab>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [masteredQuestions, setMasteredQuestions] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MASTERED_QUESTIONS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [readinessChecked, setReadinessChecked] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.READINESS_CHECKED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? { ...DEFAULT_PROFILE, ...JSON.parse(saved) } : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [isOptInModalOpen, setIsOptInModalOpen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Check if first visit to optionally prompt sign-in
  useEffect(() => {
    const hasShown = localStorage.getItem(STORAGE_KEYS.OPT_IN_SHOWN);
    if (!hasShown && !profile.optInSubmitted) {
      // Delay slightly for pleasant first-load feel
      const timer = setTimeout(() => {
        setIsOptInModalOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [profile.optInSubmitted]);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MASTERED_QUESTIONS, JSON.stringify(masteredQuestions));
  }, [masteredQuestions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.READINESS_CHECKED, JSON.stringify(readinessChecked));
  }, [readinessChecked]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  const toggleLessonComplete = (lessonId: number) => {
    setCompletedLessons(prev =>
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  };

  const toggleQuestionMastered = (questionNum: number) => {
    setMasteredQuestions(prev =>
      prev.includes(questionNum) ? prev.filter(num => num !== questionNum) : [...prev, questionNum]
    );
  };

  const toggleReadinessItem = (id: string) => {
    setReadinessChecked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const submitOptInNotification = async (name: string, email: string, parishName?: string): Promise<boolean> => {
    try {
      const response = await fetch('https://formspree.io/f/xvkoozdo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          module: 'Christian Initiation for Children — Catholic Preparation',
          name: name.trim(),
          email: email.trim(),
          parish: (parishName || profile.parish || '').trim(),
          sponsorMentor: profile.sponsorMentor || '',
          priestDeaconMentor: profile.priestDeaconMentor || '',
          timestamp: new Date().toISOString(),
          source: 'Christian Initiation for Children Web App'
        })
      });

      if (response.ok) {
        updateProfile({
          childName: name || profile.childName,
          parentEmail: email,
          parish: parishName || profile.parish,
          optInSubmitted: true
        });
        localStorage.setItem(STORAGE_KEYS.OPT_IN_SHOWN, 'true');
        return true;
      }
      return false;
    } catch (err) {
      console.error('Error sending sign-in notification:', err);
      // Even if offline or network fails, update local state smoothly
      updateProfile({
        childName: name || profile.childName,
        parentEmail: email,
        parish: parishName || profile.parish,
        optInSubmitted: true
      });
      localStorage.setItem(STORAGE_KEYS.OPT_IN_SHOWN, 'true');
      return true;
    }
  };

  const resetAllProgress = () => {
    if (window.confirm('Are you sure you want to reset all your progress? This will clear completed lessons and checklist entries.')) {
      setCompletedLessons([]);
      setMasteredQuestions([]);
      setReadinessChecked([]);
      localStorage.removeItem(STORAGE_KEYS.COMPLETED_LESSONS);
      localStorage.removeItem(STORAGE_KEYS.MASTERED_QUESTIONS);
      localStorage.removeItem(STORAGE_KEYS.READINESS_CHECKED);
    }
  };

  // Text-to-speech helper
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const totalLessonsCount = 16;
  const completedPercentage = Math.round((completedLessons.length / totalLessonsCount) * 100);

  return (
    <ProgressContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        selectedLessonId,
        setSelectedLessonId,
        completedLessons,
        toggleLessonComplete,
        masteredQuestions,
        toggleQuestionMastered,
        readinessChecked,
        toggleReadinessItem,
        profile,
        updateProfile,
        isOptInModalOpen,
        setIsOptInModalOpen,
        submitOptInNotification,
        resetAllProgress,
        totalLessonsCount,
        completedPercentage,
        speakText,
        stopSpeaking,
        isSpeaking
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
