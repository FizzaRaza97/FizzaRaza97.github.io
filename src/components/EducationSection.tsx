import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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

  const education = [
    {
      degree: "PhD in Computer Science",
      institution: "Stanford University",
      year: "2018 - 2020",
      gpa: "3.9/4.0",
      specialization: "Deep Learning & Computer Vision",
      description: "Focused on developing novel neural network architectures for medical image analysis. Published 8 research papers in top-tier conferences including NeurIPS, ICML, and CVPR.",
      achievements: [
        "Summa Cum Laude",
        "Dean's List (All Semesters)",
        "Best Thesis Award 2020",
        "NSF Graduate Research Fellowship"
      ],
      relevantCoursework: [
        "Advanced Machine Learning",
        "Computer Vision",
        "Deep Learning",
        "Statistical Learning Theory",
        "Optimization Methods",
        "Information Theory"
      ],
      icon: GraduationCap,
      color: "border-ai-cyan",
      bgColor: "bg-ai-cyan/10",
    },
    {
      degree: "Master of Science in Data Science",
      institution: "Carnegie Mellon University",
      year: "2016 - 2018",
      gpa: "3.8/4.0",
      specialization: "Machine Learning & Statistics",
      description: "Comprehensive program covering machine learning algorithms, statistical methods, and big data processing. Completed capstone project on real-time fraud detection.",
      achievements: [
        "Magna Cum Laude",
        "Outstanding Student Award",
        "Research Assistant Position"
      ],
      relevantCoursework: [
        "Machine Learning",
        "Statistical Methods",
        "Big Data Analytics",
        "Database Systems",
        "Data Mining",
        "Time Series Analysis"
      ],
      icon: Award,
      color: "border-ai-purple",
      bgColor: "bg-ai-purple/10",
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "University of California, Berkeley",
      year: "2012 - 2016",
      gpa: "3.7/4.0",
      specialization: "Applied Mathematics & Statistics",
      description: "Strong foundation in mathematical theory with focus on applied statistics and computational methods. Minor in Computer Science.",
      achievements: [
        "Phi Beta Kappa",
        "Dean's List",
        "Mathematics Honor Society"
      ],
      relevantCoursework: [
        "Linear Algebra",
        "Calculus & Analysis",
        "Probability Theory",
        "Statistical Inference",
        "Numerical Methods",
        "Discrete Mathematics"
      ],
      icon: BookOpen,
      color: "border-ai-teal",
      bgColor: "bg-ai-teal/10",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Advanced certification in machine learning on AWS platform",
      icon: Award,
    },
    {
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      year: "2022",
      description: "Machine learning engineering and MLOps practices",
      icon: Award,
    },
    {
      title: "Databricks Certified ML Associate",
      issuer: "Databricks",
      year: "2023",
      description: "Machine learning with Apache Spark and MLflow",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
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
            Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Strong academic foundation in computer science, data science, and mathematics,
            with specialized focus on machine learning and artificial intelligence.
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
              viewport={{ once: true, amount: 0.3 }}
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
                      <div className="text-sm text-ai-cyan font-medium mt-1">
                        GPA: {edu.gpa}
                      </div>
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

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="glass-card hover-lift glow-border">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <cert.icon className="h-8 w-8 text-ai-cyan mx-auto mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                      <p className="text-sm text-ai-cyan font-medium mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-3">{cert.year}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
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

export default EducationSection;
