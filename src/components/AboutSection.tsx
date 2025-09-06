import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, TrendingUp, Award, Users, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const AboutSection: React.FC = () => {
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

  const expertiseAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and advanced ML algorithms",
      color: "text-ai-cyan",
      bgColor: "bg-ai-cyan/10",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, data warehousing, and big data processing",
      color: "text-ai-purple",
      bgColor: "bg-ai-purple/10",
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Building intelligent systems and AI-powered applications",
      color: "text-ai-teal",
      bgColor: "bg-ai-teal/10",
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Statistical analysis, predictive modeling, and insights",
      color: "text-ai-pink",
      bgColor: "bg-ai-pink/10",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "PhD in Computer Science",
      subtitle: "Stanford University, 2020",
      description: "Specialized in Deep Learning and Computer Vision",
    },
    {
      icon: Users,
      title: "Senior Data Scientist",
      subtitle: "TechCorp Inc., 2020-Present",
      description: "Leading ML initiatives and mentoring junior data scientists",
    },
    {
      icon: Brain,
      title: "Research Publications",
      subtitle: "15+ Papers Published",
      description: "Top-tier conferences: NeurIPS, ICML, ICLR",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/10 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Hero Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              Fizza Raza
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-semibold mb-4 text-foreground/90"
            >
              Data Scientist & AI Engineer
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
              >
                <FileText className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group hover:scale-105 transition-transform duration-300 glow-border"
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
            viewport={{ once: true, amount: 0.3 }}
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
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-white text-sm font-medium">Click to Upload</p>
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                My Journey in Data Science
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in data science and AI, I've dedicated my career
                  to unlocking the potential of data through machine learning and advanced analytics.
                  My journey began with a fascination for pattern recognition and has evolved into
                  a passion for building intelligent systems.
                </p>
                <p>
                  I hold a PhD in Computer Science from Stanford University, where I specialized
                  in deep learning and computer vision. My research focused on developing novel
                  neural network architectures for medical image analysis, resulting in several
                  publications in top-tier conferences.
                </p>
                <p>
                  Currently, I work as a Senior Data Scientist at TechCorp Inc., where I lead
                  machine learning initiatives and mentor junior data scientists. I've successfully
                  deployed over 50 ML models in production, impacting millions of users and
                  generating significant business value.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl glass-card hover-lift"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <achievement.icon className={`h-6 w-6 ${achievement.icon === Award ? 'text-ai-cyan' : achievement.icon === Users ? 'text-ai-purple' : 'text-ai-teal'}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                      <p className="text-sm text-ai-cyan font-medium">{achievement.subtitle}</p>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Expertise Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-foreground"
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

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "ML Models Deployed" },
            { number: "15+", label: "Research Papers" },
            { number: "10+", label: "Team Members Led" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl glass-card hover-lift"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
