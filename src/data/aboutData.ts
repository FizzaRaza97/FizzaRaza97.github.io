import { Brain, Code, Database, TrendingUp } from 'lucide-react';

export const roleTexts = [
  "Data Scientist & AI Engineer",
  "Machine Learning Researcher",
  "Deep Learning Specialist",
  "AI Systems Developer",
  "Data Analytics Expert",
  "Computer Vision Engineer"
];

export interface ExpertiseArea {
  icon: typeof Brain;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export const expertiseAreas: ExpertiseArea[] = [
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
