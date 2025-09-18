import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-teal shadow-2xl hover:shadow-ai-cyan/25 transition-shadow duration-300 group"
          aria-label="Back to top"
        >
          <motion.div
            className="relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <ChevronUp className="h-6 w-6 text-white" />
          </motion.div>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.6 }}
          />

          {/* Tooltip */}
          <motion.div
            className="absolute -top-12 right-0 bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-2 rounded-lg shadow-lg border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Back to top
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-background/90"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
