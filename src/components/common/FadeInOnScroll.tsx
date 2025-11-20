'use client';

// --- FIX: Import the 'Variants' type ---
import { motion, Variants } from 'framer-motion';

interface FadeInOnScrollProps {
  children: React.ReactNode;
}

// --- FIX: Apply the 'Variants' type ---
const variants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 // Start 40px down
  },
  visible: {
    opacity: 1,
    y: 0, // Animate to 0px (original position)
    transition: {
      duration: 1.0, // 1 second
      ease: [0.6, 0.01, 0.05, 0.95], // A smooth, custom ease
    },
  },
};

export default function FadeInOnScroll({ children }: FadeInOnScrollProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"       // Start in the 'hidden' state
      whileInView="visible"  // Animate to 'visible' when it enters the viewport
      viewport={{ once: true, amount: 0.1 }} // Trigger once when 10% is visible
    >
      {children}
    </motion.div>
  );
}

