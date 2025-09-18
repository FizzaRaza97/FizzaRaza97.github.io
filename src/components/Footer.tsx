import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="w-full px-6 lg:px-8">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <motion.h3
            className="text-xl font-bold gradient-text mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            FIZZA RAZA
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
