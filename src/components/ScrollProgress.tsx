import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
      style={{ scaleX }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scaleX }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  );
};

export default ScrollProgress;
