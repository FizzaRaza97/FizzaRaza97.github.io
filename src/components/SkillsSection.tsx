import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { skillCategories, tools } from '../data/skillsData';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="w-full px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            SKILLS & TOOLS
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-2xl text-muted-foreground max-w-6xl mx-auto leading-relaxed"
          >
            Strong foundation in computer science with expertise in AI/ML, software engineering,
            and research methodologies developed through academic and practical experience.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              <Card className={`glass-card hover-lift ${category.color} border-2`}>
                <CardHeader>
                  <CardTitle className={`text-xl font-semibold ${category.color.replace('border-', 'text-')}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={itemVariants}
                        className="group p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 border border-transparent hover:border-secondary/50"
                      >
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground group-hover:text-ai-cyan transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            ADDITIONAL TOOLS & TECHNOLOGIES
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="glass-card hover-lift group-hover:glow-border transition-all duration-300 bg-secondary/10 hover:bg-secondary/20">
                  <CardContent className="p-6 text-center">
                    <div className="font-semibold text-foreground transition-colors duration-300 mb-2">
                      {tool.name}
                    </div>
                    <div className="text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded-full inline-block">
                      {tool.category}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
