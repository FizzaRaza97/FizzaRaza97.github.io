import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { roleTexts, expertiseAreas } from '../data/aboutData';

const AboutSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = roleTexts[textIndex];
    const shouldDelete = isDeleting;
    const currentLength = displayText.length;

    const handleTyping = () => {
      if (!shouldDelete && currentLength < currentText.length) {
        setDisplayText(currentText.slice(0, currentLength + 1));
        setTypingSpeed(150);
      } else if (shouldDelete && currentLength > 0) {
        setDisplayText(currentText.slice(0, currentLength - 1));
        setTypingSpeed(50);
      } else if (!shouldDelete && currentLength === currentText.length) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (shouldDelete && currentLength === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % roleTexts.length);
        setTypingSpeed(1000);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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



  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/10 flex items-center">
      <div className="w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Hero Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              Fizza Raza
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-semibold mb-4 gradient-text"
            >
              <div className="animated-text">
                {displayText}
                <span className={`cursor ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </div>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              Passionate about transforming data into actionable insights and building
              intelligent systems that solve real-world problems.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <Button
                size="lg"
                variant="ai"
                className="group hover:scale-105 transition-transform duration-300"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FileText className="mr-2 h-5 w-5 group-hover:animate-bounce" />
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
          </motion.div>

          {/* Right Column - Profile Image Slot */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Placeholder */}
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-ai-cyan/20 via-ai-purple/20 to-ai-teal/20 border-2 border-ai-cyan/30 flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-ai-cyan/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-ai-purple/30 rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-ai-teal/30 rounded-full blur-xl"></div>
                </div>

                {/* Image Upload Area */}
                <div className="text-center z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                    <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Profile Image</p>
                  <p className="text-xs text-muted-foreground/70">Upload your photo here</p>
                </div>

                {/* Upload Overlay */}
                <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-foreground text-sm font-medium">Click to Upload</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-ai-cyan rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ai-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-ai-teal rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </motion.div>
          </motion.div>
        </div>

        <div className="space-y-16 mb-20">
          {/* First Row - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                <p className="text-lg">
                  A self-motivated AI researcher & computer scientist with expertise in machine learning, systems research, looking to add value in the agile AI & ML research and tech space.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Row - Expertise Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-foreground text-center"
            >
              Core Expertise
            </motion.h3>
            <div className="grid gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card hover-lift border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${area.bgColor}`}>
                          <area.icon className={`h-6 w-6 ${area.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-foreground">
                            {area.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
