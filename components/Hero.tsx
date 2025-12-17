import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, PlayCircle, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Refined Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-gradient-to-b from-indigo-50/80 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[0%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-t from-orange-50/50 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 max-w-2xl z-10"
          >
             {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 mb-8 shadow-sm hover:bg-neutral-100 transition-colors cursor-default">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-bold text-neutral-600 tracking-wide uppercase">
                AI Drafts. Human Polish.
              </span>
            </div>
            
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-neutral-900 mb-6 tracking-tight">
              Your AI-Powered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Brand Director.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 mb-10 leading-relaxed font-medium max-w-lg">
              Logos, brand kit, landing copy, ad concepts & a welcome email sequence — <span className="text-neutral-900 font-semibold">done for you in minutes.</span> Go from idea to iconic without the agency price tag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToWaitlist}
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-neutral-900/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
              >
                Join the Waitlist <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollToFeatures}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-neutral-600 font-semibold bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                See How It Works
              </button>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col sm:flex-row gap-y-3 gap-x-6 text-sm font-medium text-neutral-600">
               <div className="flex items-center gap-2">
                  <div className="p-0.5 bg-green-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                  Instant, unique branding
               </div>
               <div className="flex items-center gap-2">
                  <div className="p-0.5 bg-green-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                  High-converting content
               </div>
               <div className="flex items-center gap-2">
                  <div className="p-0.5 bg-green-100 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                  Ready-to-launch kits
               </div>
            </div>
          </motion.div>

          {/* Hero Visual - 3D Sim */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 w-full relative flex items-center justify-center h-[500px] md:h-[600px]"
          >
             <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Decorative Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] border border-dashed border-gray-200 rounded-full opacity-50"
                    />
                </div>
                
                {/* Central Card Stack */}
                <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                    <div className="h-1/2 bg-neutral-50 p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
                        <div className="w-16 h-16 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-heading font-bold text-2xl">AF</span>
                        </div>
                    </div>
                    <div className="h-1/2 p-6 flex flex-col justify-center">
                        <div className="w-12 h-1 bg-gray-200 mb-4 rounded-full"></div>
                        <div className="w-full h-2 bg-gray-100 mb-2 rounded-full"></div>
                        <div className="w-3/4 h-2 bg-gray-100 mb-6 rounded-full"></div>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-100"></div>
                            <div className="w-8 h-8 rounded-full bg-orange-100"></div>
                            <div className="w-8 h-8 rounded-full bg-green-100"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 sm:right-10 right-0 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 z-20 max-w-[180px]"
                >
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Generated</p>
                  <p className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
                    12 Ad Variants
                   </p>
                </motion.div>

                <motion.div 
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-32 sm:left-0 -left-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 z-20 max-w-[200px]"
                >
                   <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Voice Analysis</p>
                   <p className="text-sm font-semibold text-gray-800">"Witty, Confident, Gen Z"</p>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};