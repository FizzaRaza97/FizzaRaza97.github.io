import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Brain, Code, Database } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ai-teal/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 text-ai-cyan/30"
          variants={iconVariants}
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Brain size={32} />
        </motion.div>
        <motion.div
          className="absolute top-32 right-16 text-ai-purple/30"
          variants={iconVariants}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Code size={28} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-ai-teal/30"
          variants={iconVariants}
          animate={{
            y: [0, -8, 0],
            transition: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Database size={24} />
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Data Scientist
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl font-semibold mb-4 text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            & AI Engineer
          </motion.h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transforming complex data into actionable insights through machine learning,
          deep learning, and advanced analytics. Building intelligent systems that
          drive innovation and solve real-world problems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            variant="ai"
            className="group hover:scale-105 transition-transform duration-300"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group hover:scale-105 transition-transform duration-300 glow-border"
            onClick={() => window.open('https://github.com/FizzaRaza97', '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            View Projects
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            className="glass-card rounded-2xl p-6 hover-lift"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </motion.div>
          <motion.div
            className="glass-card rounded-2xl p-6 hover-lift"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">ML Models Deployed</div>
          </motion.div>
          <motion.div
            className="glass-card rounded-2xl p-6 hover-lift"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-muted-foreground">Research Papers</div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-ai-cyan/50 rounded-full flex justify-center"
            animate={{
              borderColor: ["rgba(0, 212, 255, 0.5)", "rgba(0, 212, 255, 1)", "rgba(0, 212, 255, 0.5)"],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            <motion.div
              className="w-1 h-3 bg-ai-cyan rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
