import React from 'react';
import { Palette, Layout, Mail, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { FeatureCardProps } from '../types';

const Card: React.FC<FeatureCardProps> = ({ title, description, icon, tooltip }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 relative group h-full">
    {tooltip && (
       <div className="absolute top-4 right-4 bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
         {tooltip}
       </div>
    )}
    <div className="bg-neutral-50 w-12 h-12 rounded-xl flex items-center justify-center text-neutral-900 mb-6 shadow-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h4 className="font-heading font-bold text-xl text-neutral-900 mb-3">{title}</h4>
    <p className="text-neutral-500 leading-relaxed text-sm">{description}</p>
  </div>
);

export const LaunchPack: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
                    Unlock your brand’s full potential
                </h2>
                <p className="text-neutral-500 text-lg">
                    Powerful features that replace busywork with results. We do the copy. You do the victory lap.
                </p>
            </div>
            <div className="text-right hidden md:block">
                 <span className="inline-block text-xs font-bold text-neutral-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                    ✨ Full Suite Included
                 </span>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Logo Suite" 
            description="Primary, secondary, and icon variations. Exported in SVG, PNG, and transparent formats ready for any background."
            icon={<Palette className="w-6 h-6" />}
          />
          <Card 
            title="Social Templates" 
            description="Editable Canva-ready templates and punchy captions for IG, LinkedIn, and Twitter. Stop staring at a blank cursor."
            icon={<Layout className="w-6 h-6" />}
          />
          <Card 
            title="Ad Copy Engine" 
            description="Hooks, body copy, and CTAs generated for specific objectives (Traffic, Sales, Leads). Policy-checked automatically."
            icon={<ShieldCheck className="w-6 h-6" />}
            tooltip="We check for banned words"
          />
          <Card 
            title="Brand Guidelines" 
            description="A beautiful PDF outlining your typography, color codes, and voice rules to keep your team aligned."
            icon={<Zap className="w-6 h-6" />}
          />
          <Card 
            title="Performance Dashboard" 
            description="Connect your ad accounts (coming soon) to see which creatives are actually driving revenue."
            icon={<BarChart3 className="w-6 h-6" />}
          />
          <Card 
            title="Email Sequences" 
            description="Welcome series, abandoned cart, and product launch emails written in your brand voice."
            icon={<Mail className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};