import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// A lightweight, CSS-free confetti implementation using Framer Motion
// Generates particles that explode from center
export const Confetti: React.FC = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Create 50 particles
    const ids = Array.from({ length: 50 }, (_, i) => i);
    setParticles(ids);
  }, []);

  const colors = ['#0F62FE', '#FF7A59', '#10B981', '#F59E0B', '#8B5CF6'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50 flex items-center justify-center">
      {particles.map((i) => {
        const randomAngle = Math.random() * 360;
        const randomDistance = Math.random() * 300 + 100;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{
              x: Math.cos(randomAngle * (Math.PI / 180)) * randomDistance,
              y: Math.sin(randomAngle * (Math.PI / 180)) * randomDistance,
              opacity: 0,
              scale: [0, 1, 0],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: Math.random() * 0.2
            }}
            className="absolute w-3 h-3 rounded-sm"
            style={{ backgroundColor: randomColor }}
          />
        );
      })}
    </div>
  );
};