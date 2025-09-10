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

export interface InterpersonalSkill {
  name: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    color: "border-ai-cyan",
    bgColor: "bg-ai-cyan/10",
    skills: [
      { name: "Python", level: 95, description: "Primary language for ML/AI development and web applications" },
      { name: "C/C++", level: 90, description: "System programming and performance-critical applications" },
      { name: "JavaScript", level: 85, description: "Web development and interactive applications" },
      { name: "Haskell", level: 80, description: "Functional programming and mathematical computations" },
      { name: "HTML/CSS", level: 85, description: "Frontend web development and styling" },
    ],
  },
  {
    title: "Data Science & AI/ML",
    color: "border-ai-purple",
    bgColor: "bg-ai-purple/10",
    skills: [
      { name: "Advanced Data Analytics", level: 95, description: "Complex data analysis and insights generation" },
      { name: "Applied Machine Learning", level: 90, description: "Practical ML implementation and deployment" },
      { name: "Recommender Systems", level: 90, description: "Collaborative filtering and recommendation algorithms" },
      { name: "Large Language Models", level: 85, description: "LLM applications and fine-tuning" },
      { name: "Natural Language Processing", level: 85, description: "Text processing and language models" },
    ],
  },
  {
    title: "Software Engineering & Development",
    color: "border-ai-teal",
    bgColor: "bg-ai-teal/10",
    skills: [
      { name: "Algorithm Design", level: 95, description: "Design and analysis of efficient algorithms" },
      { name: "Django", level: 90, description: "Python web framework for rapid development" },
      { name: "Flask", level: 85, description: "Lightweight Python web framework" },
      { name: "WordPress", level: 80, description: "Content management and web development" },
      { name: "Version Control", level: 90, description: "Git and collaborative development practices" },
      { name: "System & Solution Design", level: 90, description: "Architecture design and technical solutions" },
      { name: "Deployment", level: 85, description: "Application deployment and DevOps practices" },
    ],
  },
  {
    title: "Research & Technical Analysis",
    color: "border-ai-pink",
    bgColor: "bg-ai-pink/10",
    skills: [
      { name: "Network Emulation", level: 90, description: "Network simulation and performance analysis" },
      { name: "Systems Measurement", level: 90, description: "Performance evaluation and benchmarking" },
      { name: "Web App Development", level: 85, description: "Full-stack web application development" },
      { name: "Product Delivery", level: 90, description: "End-to-end product development and delivery" },
    ],
  },
];

export const tools: ToolItem[] = [
  { name: "Jupyter Notebooks", category: "Development" },
  { name: "Git & GitHub", category: "Version Control" },
  { name: "Django", category: "Web Framework" },
  { name: "Flask", category: "Web Framework" },
  { name: "WordPress", category: "CMS" },
  { name: "Python", category: "Programming" },
  { name: "C/C++", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Haskell", category: "Programming" },
  { name: "Docker", category: "Containerization" },
  { name: "PostgreSQL", category: "Database" },
];

export const interpersonalSkills: InterpersonalSkill[] = [
  {
    name: "Leadership",
    description: "Leading teams and projects with vision and direction"
  },
  {
    name: "Collaboration",
    description: "Working effectively with cross-functional teams"
  },
  {
    name: "Attention to Details",
    description: "Meticulous approach to quality and precision"
  },
  {
    name: "Communication",
    description: "Clear and effective verbal and written communication"
  },
  {
    name: "Problem Solving",
    description: "Analytical thinking and creative solution development"
  },
  {
    name: "Conflict Resolution",
    description: "Mediating disputes and finding common ground"
  },
  {
    name: "Goal Focus",
    description: "Maintaining focus on objectives and delivering results"
  },
];
