import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { education } from '../data/educationData';

const EducationSection: React.FC = () => {
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
    <section id="education" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
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
            Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Strong academic foundation in computer science with international experience,
            demonstrating excellence across multiple educational levels and institutions.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              <Card className={`glass-card hover-lift ${edu.color} border-2`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${edu.bgColor}`}>
                      <edu.icon className={`h-6 w-6 ${edu.color.replace('border-', 'text-')}`} />
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-semibold mb-2">
                    {edu.degree}
                  </CardTitle>
                  <div className="text-lg text-ai-cyan font-medium mb-2">
                    {edu.institution}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Specialization: {edu.specialization}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Achievements</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-ai-cyan rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCoursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
