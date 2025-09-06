import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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

  const skillCategories = [
    {
      title: "Programming Languages",
      color: "border-ai-cyan",
      bgColor: "bg-ai-cyan/10",
      skills: [
        { name: "Python", level: 95, description: "Primary language for ML/AI development" },
        { name: "R", level: 85, description: "Statistical analysis and data visualization" },
        { name: "SQL", level: 90, description: "Database queries and data manipulation" },
        { name: "JavaScript", level: 75, description: "Web development and data visualization" },
        { name: "Scala", level: 70, description: "Big data processing with Spark" },
      ],
    },
    {
      title: "ML/AI Frameworks",
      color: "border-ai-purple",
      bgColor: "bg-ai-purple/10",
      skills: [
        { name: "TensorFlow", level: 90, description: "Deep learning and neural networks" },
        { name: "PyTorch", level: 88, description: "Research and production ML models" },
        { name: "Scikit-learn", level: 95, description: "Classical machine learning algorithms" },
        { name: "Keras", level: 85, description: "High-level neural network API" },
        { name: "LangChain", level: 80, description: "LLM applications and AI agents" },
        { name: "Hugging Face", level: 85, description: "Transformers and NLP models" },
      ],
    },
    {
      title: "Data Platforms",
      color: "border-ai-teal",
      bgColor: "bg-ai-teal/10",
      skills: [
        { name: "AWS", level: 90, description: "Cloud computing and ML services" },
        { name: "Google Cloud", level: 85, description: "BigQuery, Vertex AI, AutoML" },
        { name: "Azure", level: 80, description: "Machine Learning Studio and Databricks" },
        { name: "Databricks", level: 85, description: "Unified analytics platform" },
        { name: "Snowflake", level: 75, description: "Cloud data warehouse" },
        { name: "Apache Spark", level: 80, description: "Big data processing engine" },
      ],
    },
    {
      title: "Data Visualization",
      color: "border-ai-pink",
      bgColor: "bg-ai-pink/10",
      skills: [
        { name: "Tableau", level: 85, description: "Business intelligence and dashboards" },
        { name: "Power BI", level: 80, description: "Microsoft analytics platform" },
        { name: "D3.js", level: 75, description: "Custom interactive visualizations" },
        { name: "Plotly", level: 90, description: "Python-based interactive plots" },
        { name: "Matplotlib", level: 95, description: "Python plotting library" },
        { name: "Seaborn", level: 90, description: "Statistical data visualization" },
      ],
    },
  ];

  const tools = [
    { name: "Jupyter Notebooks", category: "Development" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "MLflow", category: "ML Lifecycle" },
    { name: "Apache Airflow", category: "Workflow Management" },
    { name: "Elasticsearch", category: "Search & Analytics" },
    { name: "Redis", category: "Caching" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "NoSQL" },
    { name: "Apache Kafka", category: "Stream Processing" },
    { name: "Grafana", category: "Monitoring" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
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
            Skills & Tools
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive expertise in modern data science and AI technologies,
            from programming languages to cloud platforms and visualization tools.
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
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className={`glass-card hover-lift ${category.color} border-2`}>
                <CardHeader>
                  <CardTitle className={`text-xl font-semibold ${category.color.replace('border-', 'text-')}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${category.bgColor.replace('bg-', 'bg-gradient-to-r from-').replace('/10', ' to-transparent')}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  ))}
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
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Additional Tools & Technologies
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
                <Card className="glass-card hover-lift cursor-pointer group-hover:glow-border transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="font-medium text-foreground group-hover:text-ai-cyan transition-colors duration-300">
                      {tool.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {tool.category}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Certifications
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certified Machine Learning",
                issuer: "Amazon Web Services",
                year: "2023",
                description: "Specialty certification in ML on AWS platform"
              },
              {
                title: "Google Cloud Professional ML Engineer",
                issuer: "Google Cloud",
                year: "2022",
                description: "Advanced ML engineering and MLOps practices"
              },
              {
                title: "Databricks Certified ML Associate",
                issuer: "Databricks",
                year: "2023",
                description: "Machine learning with Apache Spark and MLflow"
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="glass-card hover-lift glow-border">
                  <CardContent className="p-6">
                    <div className="text-center">
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

export default SkillsSection;
