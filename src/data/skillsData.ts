export interface SkillItem {
  name: string;
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

export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    color: "border-ai-cyan",
    bgColor: "bg-ai-cyan/10",
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
    color: "border-ai-purple",
    bgColor: "bg-ai-purple/10",
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
    color: "border-ai-teal",
    bgColor: "bg-ai-teal/10",
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
    color: "border-ai-pink",
    bgColor: "bg-ai-pink/10",
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

export const awards: AwardItem[] = [
  {
    title: "Excellence Scholarship and Opportunity Programme (ESOP) Award",
    issuer: "ETH Zurich",
    year: "2019-2021",
    description: "Prestigious scholarship awarded for academic excellence and research potential",
    category: "Academic Excellence"
  },
  {
    title: "National Management Foundation (NMF) Gold Medal",
    issuer: "LUMS",
    year: "2015",
    description: "Awarded for securing the highest GPA in the graduating cohort",
    category: "Academic Achievement"
  },
  {
    title: "Merit Scholarship",
    issuer: "LUMS",
    year: "2015",
    description: "Scholarship awarded to top-performing students",
    category: "Academic Excellence"
  },
  {
    title: "Best Across Cambridge A-Levels",
    issuer: "Cambridge International",
    year: "2015",
    description: "Recognition for outstanding performance across all A-level subjects",
    category: "Academic Excellence"
  },
];
