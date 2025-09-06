import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Database, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

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

  const projects = [
    {
      title: "Medical Image Analysis AI",
      description: "Developed a deep learning model for automated detection of lung cancer in CT scans using convolutional neural networks. Achieved 94% accuracy and reduced diagnosis time by 70%.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "OpenCV", "DICOM", "AWS"],
      category: "Computer Vision",
      icon: Brain,
      color: "border-ai-cyan",
      bgColor: "bg-ai-cyan/10",
      github: "https://github.com/username/medical-ai",
      demo: "https://demo.example.com",
      impact: "94% accuracy, 70% faster diagnosis",
      metrics: [
        { label: "Accuracy", value: "94%" },
        { label: "Speed Improvement", value: "70%" },
        { label: "Dataset Size", value: "50K+ images" },
      ],
    },
    {
      title: "Real-time Fraud Detection System",
      description: "Built a machine learning pipeline for real-time fraud detection in financial transactions using ensemble methods and streaming data processing.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Apache Kafka", "Spark", "MLflow", "Redis"],
      category: "ML Engineering",
      icon: TrendingUp,
      color: "border-ai-purple",
      bgColor: "bg-ai-purple/10",
      github: "https://github.com/username/fraud-detection",
      demo: "https://demo.example.com",
      impact: "99.2% precision, <10ms latency",
      metrics: [
        { label: "Precision", value: "99.2%" },
        { label: "Latency", value: "<10ms" },
        { label: "Transactions/sec", value: "100K+" },
      ],
    },
    {
      title: "Customer Churn Prediction",
      description: "Created a comprehensive churn prediction model using advanced feature engineering and ensemble learning, helping reduce customer churn by 25%.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Tableau", "PostgreSQL"],
      category: "Predictive Analytics",
      icon: Users,
      color: "border-ai-teal",
      bgColor: "bg-ai-teal/10",
      github: "https://github.com/username/churn-prediction",
      demo: "https://demo.example.com",
      impact: "25% churn reduction, $2M+ saved",
      metrics: [
        { label: "Churn Reduction", value: "25%" },
        { label: "Cost Savings", value: "$2M+" },
        { label: "Model Accuracy", value: "89%" },
      ],
    },
    {
      title: "Data Pipeline Automation",
      description: "Designed and implemented an automated ETL pipeline processing 10TB+ daily data with real-time monitoring and alerting systems.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Apache Airflow", "Snowflake", "dbt", "Grafana"],
      category: "Data Engineering",
      icon: Database,
      color: "border-ai-pink",
      bgColor: "bg-ai-pink/10",
      github: "https://github.com/username/data-pipeline",
      demo: "https://demo.example.com",
      impact: "10TB+ daily processing, 99.9% uptime",
      metrics: [
        { label: "Daily Volume", value: "10TB+" },
        { label: "Uptime", value: "99.9%" },
        { label: "Processing Time", value: "2 hours" },
      ],
    },
  ];

  const researchPapers = [
    {
      title: "Attention-Based Neural Networks for Medical Image Segmentation",
      conference: "NeurIPS 2023",
      authors: "Smith, J., Johnson, A., et al.",
      description: "Novel attention mechanism improving segmentation accuracy by 15%",
      link: "https://arxiv.org/abs/2023.12345",
    },
    {
      title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
      conference: "ICML 2023",
      authors: "Smith, J., Brown, K., et al.",
      description: "Framework enabling collaborative ML without data sharing",
      link: "https://arxiv.org/abs/2023.67890",
    },
    {
      title: "Real-time Anomaly Detection in Streaming Data",
      conference: "KDD 2022",
      authors: "Smith, J., Davis, M., et al.",
      description: "Lightweight model achieving 99.5% accuracy with <5ms latency",
      link: "https://arxiv.org/abs/2022.11111",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10">
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
            Projects & Research
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
          viewport={{ once: true, amount: 0.3 }}
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 glow-border"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="ai"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Papers */}
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
            Research Publications
          </motion.h3>

          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="glass-card hover-lift glow-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {paper.title}
                        </h4>
                        <p className="text-sm text-ai-cyan font-medium mb-1">
                          {paper.conference}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          {paper.authors}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {paper.description}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4 glow-border"
                        onClick={() => window.open(paper.link, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read
                      </Button>
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

export default ProjectsSection;
