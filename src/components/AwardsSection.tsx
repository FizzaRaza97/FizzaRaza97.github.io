import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { awards } from '../data/skillsData';

const AwardsSection: React.FC = () => {
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

  const getIcon = (category: string) => {
    switch (category) {
      case 'Academic Excellence':
        return Star;
      case 'Academic Achievement':
        return Trophy;
      default:
        return Award;
    }
  };

  const getColor = (category: string) => {
    switch (category) {
      case 'Academic Excellence':
        return 'border-ai-cyan';
      case 'Academic Achievement':
        return 'border-ai-purple';
      default:
        return 'border-ai-teal';
    }
  };

  const getBgColor = (category: string) => {
    switch (category) {
      case 'Academic Excellence':
        return 'bg-ai-cyan/10';
      case 'Academic Achievement':
        return 'bg-ai-purple/10';
      default:
        return 'bg-ai-teal/10';
    }
  };

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Awards & Accomplishments
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Recognition for academic excellence, research achievements, and outstanding performance
            throughout my educational and professional journey.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {awards.map((award, index) => {
            const IconComponent = getIcon(award.category);
            const colorClass = getColor(award.category);
            const bgColorClass = getBgColor(award.category);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className={`glass-card hover-lift ${colorClass} border-2`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${bgColorClass}`}>
                        <IconComponent className={`h-6 w-6 ${colorClass.replace('border-', 'text-')}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-foreground">
                          {award.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {award.issuer} • {award.year}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                    <div className="mt-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${bgColorClass} ${colorClass.replace('border-', 'text-')}`}>
                        {award.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
