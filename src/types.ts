export interface QuestionAnswer {
  questionNumber: number;
  question: string;
  answer: string;
}

export interface Lesson {
  id: number;
  title: string;
  remember: string;
  explanation: string[];
  talkAboutIt: {
    question: string;
    note: string;
  };
  answers: QuestionAnswer[];
  prayer: string;
  thisWeek: string;
}

export interface SummaryQuestion {
  number: number;
  question: string;
  answer: string;
  lessonReference?: number;
}

export interface JourneyStage {
  stage: number;
  name: string;
  whatItMeans: string;
}

export interface BaptismStep {
  step: number;
  name: string;
  description: string;
}

export interface MassPart {
  part: string;
  whatIDoAndUnderstand: string;
}

export interface PrayerItem {
  id: string;
  title: string;
  latinTitle?: string;
  text: string;
  category: 'core' | 'communion' | 'devotion';
}

export interface ReadinessCriterion {
  id: string;
  area: string;
  whatItLooksLike: string;
}

export interface UserProfile {
  childName: string;
  parish: string;
  sponsorMentor: string;
  priestDeaconMentor: string;
  targetDate: string;
  notes: string;
  optInSubmitted: boolean;
  parentEmail: string;
}

export type AppTab =
  | 'home'
  | 'lessons'
  | 'recall'
  | 'qa'
  | 'prayers'
  | 'readiness'
  | 'appendices'
  | 'profile';
