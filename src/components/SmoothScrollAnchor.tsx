import React from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface SmoothScrollAnchorProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

const SmoothScrollAnchor: React.FC<SmoothScrollAnchorProps> = ({
  targetId,
  children,
  className = '',
  offset = 80,
  onClick
}) => {
  const { scrollToElement } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(targetId, offset);
    if (onClick) onClick();
  };

  return (
    <motion.a
      href={`#${targetId}`}
      onClick={handleClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};

export default SmoothScrollAnchor;
