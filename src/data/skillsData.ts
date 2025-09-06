export interface SkillItem {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  bgColor: string;
  skills: SkillItem[];
}

export interface ToolItem {
  name: string;
  category: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    color: "border-ai-cyan",
    bgColor: "bg-ai-cyan/10",
    skills: [
      { name: "Python", level: 95, description: "Primary language for ML/AI development and web applications" },
      { name: "C/C++", level: 85, description: "System programming and performance-critical applications" },
      { name: "JavaScript", level: 80, description: "Web development and interactive applications" },
      { name: "Haskell", level: 70, description: "Functional programming and mathematical computations" },
      { name: "SQL", level: 90, description: "Database queries and data manipulation" },
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    color: "border-ai-purple",
    bgColor: "bg-ai-purple/10",
    skills: [
      { name: "Machine Learning", level: 90, description: "Supervised and unsupervised learning algorithms" },
      { name: "Artificial Intelligence", level: 88, description: "AI system design and implementation" },
      { name: "Natural Language Processing", level: 85, description: "Text processing and language models" },
      { name: "Large Language Models", level: 80, description: "LLM applications and fine-tuning" },
      { name: "Time Series Forecasting", level: 85, description: "Predictive modeling for temporal data" },
      { name: "Collaborative Filtering", level: 90, description: "Recommendation systems and matrix factorization" },
    ],
  },
  {
    title: "Software Engineering & Development",
    color: "border-ai-teal",
    bgColor: "bg-ai-teal/10",
    skills: [
      { name: "Software Engineering", level: 90, description: "System design and software architecture" },
      { name: "Web Application Development", level: 85, description: "Full-stack web development" },
      { name: "Django", level: 80, description: "Python web framework for rapid development" },
      { name: "Flask", level: 85, description: "Lightweight Python web framework" },
      { name: "MERN Stack", level: 75, description: "MongoDB, Express, React, Node.js" },
      { name: "MLOps", level: 80, description: "Machine learning operations and deployment" },
    ],
  },
  {
    title: "Research & Analysis",
    color: "border-ai-pink",
    bgColor: "bg-ai-pink/10",
    skills: [
      { name: "Algorithm Design", level: 90, description: "Design and analysis of efficient algorithms" },
      { name: "Statistical Analysis", level: 85, description: "Statistical methods and data interpretation" },
      { name: "Network Emulation", level: 80, description: "Network simulation and performance analysis" },
      { name: "System Measurements", level: 85, description: "Performance evaluation and benchmarking" },
    ],
  },
];

export const tools: ToolItem[] = [
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

export const certifications: CertificationItem[] = [
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
];
