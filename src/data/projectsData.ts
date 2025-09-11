import { Brain, Satellite, BarChart3, Video } from 'lucide-react';

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  icon: typeof Brain;
  color: string;
  bgColor: string;
  github?: string;
  demo?: string;
  link?: string;
  impact: string;
  metrics: Array<{ label: string; value: string }>;
}

export const projects: ProjectItem[] = [
  {
    title: "AI Large Language Model Systems Course Design",
    description: "Assisted in designing course content on Large Language Models (LLM) systems and their practical application in business for Master of AI students at LUMS. Developed comprehensive curriculum covering LLM fundamentals, applications, and business integration.",
    image: "/api/placeholder/600/400",
    technologies: ["LLM Systems", "Course Design", "AI Education", "Business Applications", "Curriculum Development"],
    category: "Education",
    icon: Brain,
    color: "border-ai-cyan",
    bgColor: "bg-ai-cyan/10",
    impact: "Course content for Master of AI students at LUMS",
    metrics: [
      { label: "Duration", value: "Jan 2025 – May 2025" },
      { label: "Institution", value: "LUMS" },
      { label: "Target", value: "Master AI Students" },
    ],
  },
  {
    title: "Automating Healthcare Management System",
    description: "Designed and maintained website for a healthcare clinic based in Lahore. Implemented automated billing and book-keeping solutions for comprehensive clinic management, streamlining operations and improving efficiency.",
    image: "/api/placeholder/600/400",
    technologies: ["Web Development", "Django", "Flask", "Automated Billing", "Database Management", "Healthcare IT"],
    category: "Web Development",
    icon: BarChart3,
    color: "border-ai-purple",
    bgColor: "bg-ai-purple/10",
    impact: "Automated healthcare clinic management system",
    metrics: [
      { label: "Duration", value: "Jan 2022 – Present" },
      { label: "Type", value: "Freelance" },
      { label: "Location", value: "Lahore" },
    ],
  },
  {
    title: "Automatic Dart Scoring System",
    description: "Developed dart board detection and scoring module for different angles and range detection of camera feeds for sports analytics company. Implemented state-of-the-art vision analytics using YOLOX v4 models for accurate scoring.",
    image: "/api/placeholder/600/400",
    technologies: ["Computer Vision", "YOLOX v4", "Object Detection", "Sports Analytics", "Camera Feed Processing", "Python"],
    category: "Computer Vision",
    icon: Video,
    color: "border-ai-teal",
    bgColor: "bg-ai-teal/10",
    impact: "Automated dart scoring for sports analytics",
    metrics: [
      { label: "Duration", value: "Apr 2022 – Dec 2022" },
      { label: "Type", value: "Freelance" },
      { label: "Model", value: "YOLOX v4" },
    ],
  },
  {
    title: "Impact of GEO Arc Avoidance on LEO Constellations",
    description: "Master's thesis research analyzing the performance impact of GEO arc avoidance strategies on Low Earth Orbit (LEO) satellite constellations. Developed simulation models to evaluate constellation performance under different avoidance scenarios.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Simulation", "Satellite Communication", "Network Analysis", "Data Visualization"],
    category: "Research",
    icon: Satellite,
    color: "border-ai-pink",
    bgColor: "bg-ai-pink/10",
    link: "https://www.research-collection.ethz.ch/entities/publication/bda15bc9-a5a5-4cfc-a123-e1214327c5b4",
    impact: "Master's thesis at ETH Zurich, Systems Group",
    metrics: [
      { label: "Duration", value: "May 2020 – April 2021" },
      { label: "Institution", value: "ETH Zurich" },
      { label: "Type", value: "Master Thesis" },
    ],
  },
  {
    title: "Hybrid Non-Negative Matrix Factorization for Recommender Systems",
    description: "Implemented a novel approach combining factorization and neighborhood-based methods for collaborative filtering. Experimented and researched ratings by considering hidden factors for overall ratings matrix and sub-matrices obtained by clustering users and items.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Surprise", "Collaborative Filtering"],
    category: "Machine Learning",
    icon: BarChart3,
    color: "border-ai-cyan",
    bgColor: "bg-ai-cyan/10",
    github: "https://github.com/FizzaRaza97/Hybrid_NMF",
    impact: "Novel hybrid approach for recommendation systems",
    metrics: [
      { label: "Duration", value: "Aug 2019 – May 2020" },
      { label: "Institution", value: "ETH Zurich" },
      { label: "Algorithm", value: "Hybrid NMF" },
    ],
  },
  {
    title: "Video Streaming Optimization Research",
    description: "Conducted research on video streaming optimization for low-end mobile devices, developing a measurement platform to analyze session and device-level performance. Assisted in teaching undergraduate courses including Data Structures, Networking, and Calculus.",
    image: "/api/placeholder/600/400",
    technologies: ["Video Streaming", "Mobile Optimization", "Performance Analysis", "Teaching", "Data Structures", "Networking"],
    category: "Research & Education",
    icon: Video,
    color: "border-ai-purple",
    bgColor: "bg-ai-purple/10",
    impact: "Research and teaching at LUMS",
    metrics: [
      { label: "Duration", value: "June 2017 – June 2019" },
      { label: "Institution", value: "LUMS" },
      { label: "Students", value: "800+" },
    ],
  },
];
