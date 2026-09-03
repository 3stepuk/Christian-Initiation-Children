import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { 
  User, 
  Save, 
  CheckCircle2, 
  Mail, 
  Calendar, 
  RotateCcw, 
  Download, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  Award
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { 
    profile, 
    updateProfile, 
    completedLessons, 
    totalLessonsCount, 
    masteredQuestions, 
    readinessChecked, 
    resetAllProgress,
    submitOptInNotification
  } = useProgress();

  const [childName, setChildName] = useState(profile.childName);
  const [parish, setParish] = useState(profile.parish);
  const [sponsorMentor, setSponsorMentor] = useState(profile.sponsorMentor);
  const [priestDeaconMentor, setPriestDeaconMentor] = useState(profile.priestDeaconMentor);
  const [targetDate, setTargetDate] = useState(profile.targetDate);
  const [notes, setNotes] = useState(profile.notes);
  const [parentEmail, setParentEmail] = useState(profile.parentEmail);
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmittingNotification, setIsSubmittingNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      childName,
      parish,
      sponsorMentor,
      priestDeaconMentor,
      targetDate,
      notes,
      parentEmail
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleSendOrUpdateNotification = async () => {
    if (!parentEmail.trim()) {
      setNotificationMsg('Please enter an email address first.');
      return;
    }
    setIsSubmittingNotification(true);
    setNotificationMsg('');
    const ok = await submitOptInNotification(childName, parentEmail, parish);
    setIsSubmittingNotification(false);
    if (ok) {
      setNotificationMsg('Father John has been sent this notification.');
    } else {
      setNotificationMsg('Could not send notification right now. Saved locally.');
    }
  };

  const handleExportData = () => {
    const backupData = {
      profile: {
        childName,
        parish,
        sponsorMentor,
        priestDeaconMentor,
        targetDate,
        notes
      },
      completedLessons,
      masteredQuestions,
      readinessChecked,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rcic-preparation-${childName ? childName.toLowerCase().replace(/\s+/g, '-') : 'progress'}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#7DBA84]/30 text-[#7DBA84] text-xs font-serif small-caps tracking-[0.15em]">
          <User className="w-3.5 h-3.5" />
          <span>My Sacramental Preparation</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF]">
          Catechumen Profile
        </h1>
        <p className="font-garamond text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto">
          Record your name, parish, sponsor, and clergy mentor. All information is saved securely on this device.
        </p>
      </div>

      {/* Progress Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 text-center shadow-sm">
          <div className="text-3xl font-normal font-serif text-[#7DBA84] mb-1">
            {completedLessons.length} / {totalLessonsCount}
          </div>
          <div className="text-xs uppercase font-medium tracking-wider text-[#94A3B8] font-serif small-caps">
            Lessons Completed
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 text-center shadow-sm">
          <div className="text-3xl font-normal font-serif text-[#7DBA84] mb-1">
            {masteredQuestions.length} / 36
          </div>
          <div className="text-xs uppercase font-medium tracking-wider text-[#94A3B8] font-serif small-caps">
            Questions Mastered
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 text-center shadow-sm">
          <div className="text-3xl font-normal font-serif text-[#7DBA84] mb-1">
            {readinessChecked.length} / 9
          </div>
          <div className="text-xs uppercase font-medium tracking-wider text-[#94A3B8] font-serif small-caps">
            Readiness Areas Checked
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSaveProfile} className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#262626] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-normal text-[#FFFFFF]">
                Personal & Parish Details
              </h2>
              <p className="text-xs text-[#7DBA84] font-serif small-caps tracking-wider">
                For the child, sponsor, and parish team
              </p>
            </div>
          </div>

          {isSaved && (
            <span className="text-xs text-[#7DBA84] bg-[#161616] border border-[#7DBA84]/40 px-3 py-1 rounded font-serif small-caps font-medium flex items-center gap-1.5 animate-fade-in">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Saved</span>
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Child's Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1.5">
              Child's Name
            </label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="e.g. Thomas, Maria"
              className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
            />
          </div>

          {/* Parish */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1.5">
              Parish
            </label>
            <input
              type="text"
              value={parish}
              onChange={(e) => setParish(e.target.value)}
              placeholder="e.g. St Mary's, St John Bosco, St Edward's"
              className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
            />
          </div>

          {/* Sponsor / Mentor (Father John's wording) */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1.5">
              Sponsor / Mentor
            </label>
            <input
              type="text"
              value={sponsorMentor}
              onChange={(e) => setSponsorMentor(e.target.value)}
              placeholder="e.g. Godparent or family mentor"
              className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
            />
          </div>

          {/* Priest / Deacon / Mentor (Module-specific wording) */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1.5">
              Priest / Deacon / Mentor
            </label>
            <input
              type="text"
              value={priestDeaconMentor}
              onChange={(e) => setPriestDeaconMentor(e.target.value)}
              placeholder="e.g. Fr John, Deacon Paul, or lead catechist"
              className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
            />
          </div>

          {/* Target Initiation Date */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1.5">
              Target Initiation Date (Optional)
            </label>
            <input
              type="text"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              placeholder="e.g. Easter Vigil or Pentecost"
              className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
            />
          </div>

          {/* Parent/Guardian Email */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1.5">
              Parent / Guardian Email
            </label>
            <input
              type="email"
              value={parentEmail}
              onChange={(e) => setParentEmail(e.target.value)}
              placeholder="e.g. family@example.com"
              className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
            />
          </div>
        </div>

        {/* Notes & Intentions */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1.5">
            Personal Notes, Questions & Prayer Intentions
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write down questions to ask Father John or your catechist, or personal thoughts on your journey..."
            className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84]"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 rounded bg-[#7DBA84] hover:bg-[#92c999] text-[#0F0F0F] font-bold text-xs sm:text-sm uppercase tracking-wider shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile Details</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <ShieldCheck className="w-4 h-4 text-[#7DBA84]" />
            <span>Encrypted locally in browser localStorage</span>
          </div>
        </div>
      </form>

      {/* Parish Sign-in / Formspree Section */}
      <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] text-[#7DBA84] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-normal text-[#FFFFFF]">
              Parish Notification Status
            </h3>
            <p className="text-xs text-[#7DBA84] font-serif small-caps tracking-wider">
              Opt-in notification via Formspree (xvkoozdo)
            </p>
          </div>
        </div>

        <p className="font-garamond text-base text-[#94A3B8] leading-relaxed">
          {profile.optInSubmitted
            ? "Father John and your parish team have been informed that you have begun this catechism."
            : "If you have not done so yet, you may notify Father John by sending an opt-in message with your name and email."}
        </p>

        {notificationMsg && (
          <div className="p-3 bg-[#161616] border border-[#262626] rounded text-xs text-[#7DBA84]">
            {notificationMsg}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={handleSendOrUpdateNotification}
            disabled={isSubmittingNotification}
            className="px-4 py-2 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#7DBA84]" />
            <span>
              {isSubmittingNotification 
                ? 'Submitting...' 
                : profile.optInSubmitted 
                ? 'Update Father John with Latest Details' 
                : 'Send Notification to Father John'}
            </span>
          </button>
        </div>
      </section>

      {/* Export & Reset Actions */}
      <section className="bg-[#141414] border border-[#262626] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div>
          <h3 className="font-serif text-base font-medium text-[#FFFFFF]">
            Backup & Reset Options
          </h3>
          <p className="text-xs text-[#94A3B8] font-sans mt-0.5">
            Download your completed progress as a file or clear local storage.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleExportData}
            className="flex-1 sm:flex-initial px-4 py-2 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#7DBA84]" />
            <span>Export Progress</span>
          </button>

          <button
            onClick={resetAllProgress}
            className="flex-1 sm:flex-initial px-4 py-2 rounded bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/40 text-rose-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            <span>Reset Progress</span>
          </button>
        </div>
      </section>
    </div>
  );
};
