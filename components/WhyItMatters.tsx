import React from 'react';
import { ShieldCheck, Rocket, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-start p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 group"
  >
    <div className="p-3 bg-indigo-50 rounded-xl text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
      {title}
    </h3>
    <p className="text-neutral-600 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export const WhyItMatters: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
            Why it matters
          </h2>
          <p className="text-neutral-500 text-lg">
             Building a brand shouldn't feel like gambling. We bridge the gap between "idea" and "income".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureItem 
            icon={<Rocket className="w-6 h-6" />}
            title="From overwhelmed to validated"
            desc="Ship something your first customers recognize. Stop tweaking logos and start testing offers."
            delay={0}
          />
          <FeatureItem 
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Not just pretty"
            desc="Creatives built to convert and pass policy checks. No more ad account bans for vague reasons."
            delay={0.1}
          />
          <FeatureItem 
            icon={<Heart className="w-6 h-6" />}
            title="Speed with soul"
            desc="AI handles the volume. Humans handle the conversion. You get the best of both worlds."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};