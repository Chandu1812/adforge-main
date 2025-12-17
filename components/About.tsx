import React from 'react';
import { Heart, Zap, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-6">
                    Why we built AdForge
                </h2>
                <div className="prose prose-lg text-neutral-600">
                    <p className="mb-4">
                        Most founders have ideas. They lack momentum.
                    </p>
                    <p className="mb-4">
                        We watched too many brilliant friends get stuck in "logo limbo" or "copywriter hell", burning months of runway before launching a single ad.
                    </p>
                    <p className="font-medium text-neutral-900 italic border-l-4 border-primary pl-4 py-2 bg-gray-50 rounded-r-lg">
                        "We built AdForge to convert hustle into results — fast."
                    </p>
                    <p className="mt-4">
                        We aren't a faceless enterprise tool. We are built by founders who launched things that failed (and one that didn't). We know the pain of staring at a blank page.
                    </p>
                </div>
            </div>

            <div className="lg:w-1/2 grid gap-6">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg"><Zap className="w-5 h-5 text-blue-600" /></div>
                        <h3 className="font-heading font-bold text-lg">Speed with soul</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">AI provides the velocity. Human experience provides the connection. We refuse to choose one.</p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-green-100 p-2 rounded-lg"><Users className="w-5 h-5 text-green-600" /></div>
                        <h3 className="font-heading font-bold text-lg">Outcome-first</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">We don't care about "pretty" if it doesn't sell. Every pixel we generate is designed to convert.</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-orange-100 p-2 rounded-lg"><Heart className="w-5 h-5 text-orange-600" /></div>
                        <h3 className="font-heading font-bold text-lg">Human touch</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">Technology works for us, not the other way around. We believe in tools that empower creators.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};