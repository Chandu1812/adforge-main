import React, { useState } from 'react';
import { WaitlistStatus, WaitlistFormData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Confetti } from './Confetti';
import { ReferralDashboard } from './ReferralDashboard';
import { BUSINESS_TYPES, REVENUE_OPTIONS } from '../constants';

export const WaitlistSection: React.FC = () => {
  const [status, setStatus] = useState<WaitlistStatus>(WaitlistStatus.IDLE);
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    role: '', // used for business type
    revenue: '',
    country: '',
    challenges: [],
    consent: false,
    website: ''
  });
  const [position, setPosition] = useState(0);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
        toast.error("Please agree to the terms to join.");
        return;
    }
    setStatus(WaitlistStatus.SUBMITTING);
    
    try {
      // Using FormSubmit.co AJAX endpoint to send email without redirecting
      const response = await fetch("https://formsubmit.co/ajax/n8n.wing@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `AdForge Waitlist: ${formData.email}`,
            _template: "table",
            _captcha: "false" // Optional: disable captcha for smoother UX
        })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // Success State
      setStatus(WaitlistStatus.SUCCESS);
      // Simulate a dynamic position for the demo (normally would come from DB)
      setPosition(Math.floor(Math.random() * (150 - 42 + 1) + 42));
      toast.success("You're on the list!");

    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
      setStatus(WaitlistStatus.IDLE);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {status === WaitlistStatus.SUCCESS && <Confetti />}
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
             
             {/* Left Col - Info */}
             <div className="lg:col-span-2 bg-neutral-800/50 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                    <h2 className="font-heading font-bold text-3xl mb-4">The future of brand building is here.</h2>
                    <p className="text-neutral-400 text-lg mb-8">Join AdForge early and get priority access. You're officially cooler than 73% of other waitlisted brands.</p>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                            <CheckCircle2 className="w-5 h-5 text-primary" /> 50% off for life
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                            <CheckCircle2 className="w-5 h-5 text-primary" /> Priority onboarding
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                            <CheckCircle2 className="w-5 h-5 text-primary" /> Human polish credit
                        </li>
                    </ul>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex -space-x-2 mb-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-neutral-800"></div>
                        ))}
                    </div>
                    <p className="text-xs text-neutral-500">Joined by founders from YC, Techstars, and bootstrapped legends.</p>
                </div>
             </div>

             {/* Right Col - Form */}
             <div className="lg:col-span-3 p-8 lg:p-10 bg-white">
                <AnimatePresence mode='wait'>
                    {status !== WaitlistStatus.SUCCESS ? (
                    <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit} 
                        className="space-y-5"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Full Name</label>
                                <input 
                                required
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-neutral-900 focus:bg-white text-neutral-900 outline-none transition-all"
                                placeholder="Elon M."
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Work Email</label>
                                <input 
                                required
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-neutral-900 focus:bg-white text-neutral-900 outline-none transition-all"
                                placeholder="elon@tesla.com"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Business Type</label>
                                <select 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-neutral-900 focus:bg-white text-neutral-900 outline-none transition-all"
                                    value={formData.role}
                                    onChange={e => setFormData({...formData, role: e.target.value})}
                                    required
                                >
                                    <option value="" disabled>Select type</option>
                                    {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Revenue</label>
                                <select 
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-neutral-900 focus:bg-white text-neutral-900 outline-none transition-all"
                                    value={formData.revenue}
                                    onChange={e => setFormData({...formData, revenue: e.target.value})}
                                    required
                                >
                                    <option value="" disabled>Range</option>
                                    {REVENUE_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">Website / IG (Optional)</label>
                            <input 
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-neutral-900 focus:bg-white text-neutral-900 outline-none transition-all"
                            placeholder="adforge.app"
                            value={formData.website}
                            onChange={e => setFormData({...formData, website: e.target.value})}
                            />
                        </div>

                        <div className="flex items-start gap-2 pt-2">
                            <input 
                                type="checkbox" 
                                id="consent"
                                className="mt-1"
                                checked={formData.consent}
                                onChange={e => setFormData({...formData, consent: e.target.checked})}
                            />
                            <label htmlFor="consent" className="text-xs text-neutral-500 leading-snug cursor-pointer">
                                I agree to get updates. No spam, we promise. We are too busy building to write spam.
                            </label>
                        </div>

                        <button 
                        type="submit"
                        disabled={status === WaitlistStatus.SUBMITTING}
                        className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                        >
                        {status === WaitlistStatus.SUBMITTING ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                            <>
                            Get Early Access <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                        </button>
                    </motion.form>
                    ) : (
                    <motion.div 
                        key="dashboard"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-full flex flex-col justify-center"
                    >
                        <ReferralDashboard email={formData.email} position={position} />
                    </motion.div>
                    )}
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};