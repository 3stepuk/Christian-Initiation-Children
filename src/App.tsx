import React from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { LessonView } from './components/LessonView';
import { MemoryDrillView } from './components/MemoryDrillView';
import { QACatechismView } from './components/QACatechismView';
import { PrayersView } from './components/PrayersView';
import { ReadinessView } from './components/ReadinessView';
import { AppendicesView } from './components/AppendicesView';
import { ProfileView } from './components/ProfileView';
import { Footer } from './components/Footer';
import { SignInModal } from './components/SignInModal';

const AppContent: React.FC = () => {
  const { currentTab } = useProgress();

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-[#E2E8F0] selection:bg-[#7DBA84]/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {currentTab === 'home' && <HomeView />}
        {currentTab === 'lessons' && <LessonView />}
        {currentTab === 'recall' && <MemoryDrillView />}
        {currentTab === 'qa' && <QACatechismView />}
        {currentTab === 'prayers' && <PrayersView />}
        {currentTab === 'readiness' && <ReadinessView />}
        {currentTab === 'appendices' && <AppendicesView />}
        {currentTab === 'profile' && <ProfileView />}
      </main>

      {/* Optional Formspree Notification Modal */}
      <SignInModal />

      {/* Parish Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
