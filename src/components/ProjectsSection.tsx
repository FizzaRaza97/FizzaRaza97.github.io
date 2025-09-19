import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { projects } from '../data/projectsData';

const ProjectsSection: React.FC = () => {
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
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10">
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
            Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Explore my portfolio of machine learning projects, AI applications,
            and research contributions that demonstrate real-world impact.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`glass-card hover-lift ${project.color} border-2 h-full`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${project.bgColor}`}>
                      <project.icon className={`h-6 w-6 ${project.color.replace('border-', 'text-')}`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Metrics</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-2 bg-secondary/50 rounded-lg">
                          <div className="text-sm font-semibold text-ai-cyan">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-6 p-3 bg-gradient-to-r from-ai-cyan/10 to-ai-purple/10 rounded-lg">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-ai-cyan">Impact:</span> {project.impact}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 glow-border"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    <Button
                      variant="ai"
                      size="sm"
                      className={project.github ? "flex-1" : "w-full"}
                      onClick={() => window.open(project.link || project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.link ? 'View Project' : 'Demo'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
