export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ToolItem {
  name: string;
  category: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", description: "Primary language for ML/AI development and web applications" },
      { name: "C/C++", description: "System programming and performance-critical applications" },
      { name: "JavaScript", description: "Web development and interactive applications" },
      { name: "Haskell", description: "Functional programming and mathematical computations" },
      { name: "HTML/CSS", description: "Frontend web development and styling" },
    ],
  },
  {
    title: "Data Science & AI/ML",
    skills: [
      { name: "Advanced Data Analytics", description: "Complex data analysis and insights generation" },
      { name: "Applied Machine Learning", description: "Practical ML implementation and deployment" },
      { name: "Recommender Systems", description: "Collaborative filtering and recommendation algorithms" },
      { name: "Large Language Models", description: "LLM applications and fine-tuning" },
      { name: "Natural Language Processing", description: "Text processing and language models" },
    ],
  },
  {
    title: "Software Engineering & Development",
    skills: [
      { name: "Algorithm Design", description: "Design and analysis of efficient algorithms" },
      { name: "Django", description: "Python web framework for rapid development" },
      { name: "Flask", description: "Lightweight Python web framework" },
      { name: "WordPress", description: "Content management and web development" },
      { name: "Version Control", description: "Git and collaborative development practices" },
      { name: "System & Solution Design", description: "Architecture design and technical solutions" },
      { name: "Deployment", description: "Application deployment and DevOps practices" },
    ],
  },
  {
    title: "Research & Technical Analysis",
    skills: [
      { name: "Network Emulation", description: "Network simulation and performance analysis" },
      { name: "Systems Measurement", description: "Performance evaluation and benchmarking" },
      { name: "Web App Development", description: "Full-stack web application development" },
      { name: "Product Delivery", description: "End-to-end product development and delivery" },
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
