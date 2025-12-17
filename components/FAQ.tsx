import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../constants';
import { FaqItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button 
      onClick={onClick}
      className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
    >
      <span className="text-neutral-900 font-semibold pr-8 group-hover:text-primary transition-colors">{item.question}</span>
      {isOpen ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0 group-hover:text-primary" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
        >
            <p className="text-neutral-600 pb-6 leading-relaxed text-sm md:text-base">
                {item.answer}
            </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-2">No silly questions</h2>
          <p className="text-neutral-500">Everything you need to know before you join.</p>
        </div>

        <div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-2xl p-6 md:p-8">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};