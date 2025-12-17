import React from 'react';
import { Quote } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <section id="pilot" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Quote className="w-10 h-10 text-neutral-700" />
          </div>
          
          <h3 className="font-serif text-2xl md:text-4xl italic leading-relaxed mb-10 text-neutral-200">
            “Maya launched in 10 days. <span className="text-white font-semibold not-italic border-b-2 border-primary">₹47k preorders</span> in week two. We didn't even have the product in hand yet.”
          </h3>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
              <img src="https://picsum.photos/100/100" alt="Maya" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Maya S.</div>
              <div className="text-sm text-neutral-400">Founder, EcoWare</div>
            </div>
          </div>
          
          <div className="mt-10">
            <button className="text-sm text-neutral-400 hover:text-white transition-colors underline decoration-neutral-700 underline-offset-4">
              Read the full case study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};