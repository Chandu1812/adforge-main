import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Twitter, MessageCircle, CheckCircle2, Lock } from 'lucide-react';
import toast from 'react-hot-toast';
import { REFERRAL_MILESTONES } from '../constants';

interface ReferralDashboardProps {
  email: string;
  position: number;
}

export const ReferralDashboard: React.FC<ReferralDashboardProps> = ({ email, position }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://adforge.app/?ref=${btoa(email).substring(0, 8)}`);
    toast.success("Referral link copied!");
  };

  const currentReferrals = 0; // Simulated for now

  return (
    <div className="p-8 md:p-10">
        <div className="text-center mb-10">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-2">You're on the list!</h2>
            <p className="text-neutral-500">We've sent a confirmation to <span className="font-semibold text-neutral-900">{email}</span>.</p>
        </div>

        {/* Position Card */}
        <div className="bg-neutral-900 text-white rounded-2xl p-8 mb-10 relative overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider font-bold mb-1">Your Current Position</div>
                    <div className="text-6xl font-heading font-bold text-white tracking-tight">#{position}</div>
                </div>
                <div className="text-right">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                        <span className="text-sm font-medium text-neutral-300">Estimated access: <span className="text-white font-bold">2 days</span></span>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        </div>

        {/* Referral Progress */}
        <div className="mb-10">
             <div className="flex justify-between items-end mb-4">
                <h3 className="font-heading font-bold text-lg">Referral Ladder</h3>
                <span className="text-sm font-medium text-primary bg-indigo-50 px-3 py-1 rounded-full">
                    {currentReferrals} Invites
                </span>
            </div>
            
            <div className="relative pt-8 pb-4 px-2">
                {/* Progress Bar Background */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-100 rounded-full -translate-y-1/2"></div>
                {/* Progress Fill */}
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentReferrals / 25) * 100}%` }}
                    className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full -translate-y-1/2 z-10"
                ></motion.div>

                {/* Milestones */}
                <div className="relative z-20 flex justify-between w-full">
                    {REFERRAL_MILESTONES.map((milestone, idx) => {
                        const isUnlocked = currentReferrals >= milestone.count;
                        return (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${isUnlocked ? 'bg-white border-primary text-primary shadow-md' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
                                    {isUnlocked ? <CheckCircle2 className="w-4 h-4" /> : <Lock className="w-3 h-3" />}
                                </div>
                                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                    {milestone.reward}
                                </div>
                                <div className="mt-2 text-xs font-bold text-neutral-500">{milestone.count}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
             <p className="text-center text-sm text-neutral-500 mt-4">
                Invite 3 friends to unlock <span className="font-bold text-neutral-900">Priority Onboarding</span>
            </p>
        </div>

        {/* Share Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 w-full border border-gray-200 py-4 rounded-xl text-sm font-bold text-neutral-700 hover:bg-gray-50 transition-colors sm:col-span-2"
            >
                <Copy className="w-4 h-4" /> Copy Unique Link
            </button>
            <button className="flex items-center justify-center gap-2 w-full bg-[#1DA1F2] text-white py-4 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-sm">
                <Twitter className="w-4 h-4" fill="currentColor" /> Share on X
            </button>
            <button className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp
            </button>
        </div>
    </div>
  );
};