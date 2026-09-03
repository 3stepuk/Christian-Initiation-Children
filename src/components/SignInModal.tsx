import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { X, Mail, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const SignInModal: React.FC = () => {
  const { isOptInModalOpen, setIsOptInModalOpen, submitOptInNotification, profile, updateProfile } = useProgress();
  const [name, setName] = useState(profile.childName || '');
  const [email, setEmail] = useState(profile.parentEmail || '');
  const [parish, setParish] = useState(profile.parish || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOptInModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('Please provide an email address if you wish to notify Father John.');
      return;
    }
    setIsSubmitting(true);
    setErrorMessage('');

    const success = await submitOptInNotification(name, email, parish);
    setIsSubmitting(false);
    if (success) {
      setSubmittedSuccess(true);
      setTimeout(() => {
        setIsOptInModalOpen(false);
      }, 1600);
    } else {
      setErrorMessage('Could not send notification right now. Your details have still been saved locally on this device.');
      setTimeout(() => {
        setIsOptInModalOpen(false);
      }, 2500);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('rcic_opt_in_prompt_shown', 'true');
    setIsOptInModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#141414] border border-[#262626] rounded-lg max-w-lg w-full p-6 shadow-2xl relative text-[#E2E8F0]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#FFFFFF] p-1 rounded hover:bg-[#1A1A1A] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#161616] text-[#7DBA84] flex items-center justify-center mx-auto border border-[#7DBA84]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#FFFFFF] font-normal">Notification Sent</h3>
            <p className="text-sm text-[#94A3B8] max-w-sm mx-auto font-garamond text-lg leading-relaxed">
              Father John has been notified that your family is preparing for Christian Initiation. God bless you on this holy journey.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#7DBA84] bg-[#161616] flex items-center justify-center text-[#7DBA84]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 id="modal-title" className="font-serif text-lg font-normal text-[#FFFFFF]">
                  Parish Sign-in (Optional)
                </h3>
                <p className="text-xs text-[#7DBA84] font-serif small-caps tracking-wider">
                  Welcome to Catholic Sacramental Preparation
                </p>
              </div>
            </div>

            <p className="text-[#94A3B8] text-sm font-garamond text-base leading-relaxed mb-4">
              If you wish, you can notify Father John and your parish team that you are starting this catechism. This is entirely opt-in and privacy-respecting.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1">
                  Child's Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Thomas or Mary"
                  className="w-full px-3 py-2 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1">
                  Parent / Guardian Email <span className="text-[#7DBA84]">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. family@example.com"
                  className="w-full px-3 py-2 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#94A3B8] font-serif small-caps mb-1">
                  Parish / Town (Optional)
                </label>
                <input
                  type="text"
                  value={parish}
                  onChange={(e) => setParish(e.target.value)}
                  placeholder="e.g. St Mary's, St John Bosco, St Edward's"
                  className="w-full px-3 py-2 bg-[#161616] border border-[#262626] rounded text-sm text-[#FFFFFF] focus:outline-none focus:border-[#7DBA84] transition-colors"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-400 bg-rose-950/30 border border-rose-800/40 p-2 rounded">
                  {errorMessage}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 px-4 rounded bg-[#7DBA84] hover:bg-[#92c999] text-[#0F0F0F] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Notify Father John'}
                </button>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="py-2.5 px-4 rounded bg-transparent hover:bg-[#1A1A1A] border border-[#404040] text-[#FFFFFF] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Continue Privately
                </button>
              </div>

              <div className="flex items-center gap-2 pt-2 text-[11px] text-[#94A3B8]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7DBA84]" />
                <span>Saved only to this device. No data is shared without your consent.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
