import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Bot, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Define your Brand DNA",
    desc: "A 5-minute guided onboarding captures your offer, audience, and vibe. No endless meetings, no 'mood board' paralysis.",
    icon: <PenTool className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "AI Crafts the First Draft",
    desc: "We generate the logos, color palette, landing page copy, and ad concepts instantly. It's 80% done before you sip your coffee.",
    icon: <Bot className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1664575602554-2087b04d35a1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Human Polish & Launch",
    desc: "You (or our experts) refine the edges. We fix the nuance, you hit publish. We check for ad-policy safety so you don't get banned.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
           <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
            How it works
          </h2>
          <p className="text-neutral-500 text-lg">
            No designers were harmed in the making of this process.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Steps Navigation */}
            <div className="lg:w-1/2 flex flex-col gap-4 relative">
                <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200 -z-10 hidden md:block"></div>
                
                {steps.map((step) => (
                    <button 
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`relative flex items-start gap-6 p-6 rounded-2xl text-left transition-all duration-300 group ${
                            activeStep === step.id ? 'bg-white shadow-lg shadow-gray-100 scale-[1.02]' : 'hover:bg-white/60'
                        }`}
                    >
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            activeStep === step.id ? 'bg-neutral-900 text-white shadow-md' : 'bg-white border border-gray-200 text-neutral-400 group-hover:border-neutral-300'
                        }`}>
                            {step.icon}
                        </div>
                        <div>
                            <h3 className={`font-heading font-bold text-xl mb-2 transition-colors ${activeStep === step.id ? 'text-neutral-900' : 'text-neutral-500'}`}>
                                {step.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Visual Preview */}
            <div className="lg:w-1/2 w-full min-h-[400px] relative">
                <div className="sticky top-32">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white ring-1 ring-black/5">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={activeStep}
                                src={steps[activeStep - 1].image}
                                alt={steps[activeStep - 1].title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        
                        {/* Overlay info */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                            <div className="text-white">
                                <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Step {activeStep}
                                </div>
                                <div className="font-heading font-bold text-2xl">{steps[activeStep-1].title}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};