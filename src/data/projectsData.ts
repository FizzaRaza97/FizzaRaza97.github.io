import { ExternalLink, Github, Brain, Database, TrendingUp, Users, Satellite, BarChart3, Video } from 'lucide-react';

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

export interface ResearchPaper {
  title: string;
  conference: string;
  authors: string;
  description: string;
  link: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Analyzing the Impact of GEO Arc Avoidance on LEO Constellations",
    description: "Master's thesis research analyzing the performance impact of GEO arc avoidance strategies on Low Earth Orbit (LEO) satellite constellations. Developed simulation models to evaluate constellation performance under different avoidance scenarios.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Simulation", "Satellite Communication", "Network Analysis", "Data Visualization"],
    category: "Research",
    icon: Satellite,
    color: "border-ai-cyan",
    bgColor: "bg-ai-cyan/10",
    link: "https://www.research-collection.ethz.ch/entities/publication/bda15bc9-a5a5-4cfc-a123-e1214327c5b4",
    impact: "Master's thesis at ETH Zurich, Systems Group",
    metrics: [
      { label: "Duration", value: "18 months" },
      { label: "Institution", value: "ETH Zurich" },
      { label: "Type", value: "Master Thesis" },
    ],
  },
  {
    title: "Hybrid Non-Negative Matrix Factorization for Recommender Systems",
    description: "Novel approach combining factorization and neighborhood-based methods for collaborative filtering. Developed a hybrid algorithm that considers hidden factors for overall ratings matrix and sub-matrices obtained by clustering users and items.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Surprise"],
    category: "Machine Learning",
    icon: BarChart3,
    color: "border-ai-purple",
    bgColor: "bg-ai-purple/10",
    github: "https://github.com/FizzaRaza97/Hybrid_NMF",
    impact: "Novel hybrid approach for recommendation systems",
    metrics: [
      { label: "Algorithm Type", value: "Hybrid NMF" },
      { label: "Framework", value: "Collaborative Filtering" },
      { label: "Language", value: "Python" },
    ],
  },
  {
    title: "Evaluating a Shift to SVC Encoding for Effective ABR Algorithms",
    description: "Research project evaluating Scalable Video Coding (SVC) as an alternative to traditional AVC encoding for Adaptive Bitrate (ABR) algorithms. Analyzed QoE improvements and bandwidth efficiency in video streaming applications.",
    image: "/api/placeholder/600/400",
    technologies: ["Video Processing", "SVC Encoding", "ABR Algorithms", "QoE Analysis", "Network Simulation"],
    category: "Video Streaming",
    icon: Video,
    color: "border-ai-teal",
    bgColor: "bg-ai-teal/10",
    link: "https://fizzaraza97.github.io/static/Evaluating-shift-SVC-encoding.pdf",
    impact: "Distributed Systems Laboratory project at ETH Zurich",
    metrics: [
      { label: "Focus Area", value: "Video Streaming" },
      { label: "Encoding", value: "SVC vs AVC" },
      { label: "Institution", value: "ETH Zurich" },
    ],
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    title: "Analyzing the Impact of GEO Arc Avoidance on LEO Constellation Performance",
    conference: "ETH Zurich Master Thesis",
    authors: "Fizza Zafar",
    description: "Comprehensive analysis of GEO arc avoidance strategies and their impact on LEO satellite constellation performance",
    link: "https://www.research-collection.ethz.ch/entities/publication/bda15bc9-a5a5-4cfc-a123-e1214327c5b4",
  },
  {
    title: "Hybrid Non-Negative Matrix Factorization for Recommender Systems",
    conference: "Academic Project",
    authors: "Fizza Zafar, Supraja Sridhara",
    description: "Novel hybrid approach combining factorization and neighborhood-based methods for improved collaborative filtering",
    link: "https://github.com/FizzaRaza97/Hybrid_NMF",
  },
  {
    title: "Evaluating a Shift to SVC Encoding for Effective ABR Algorithms",
    conference: "Distributed Systems Laboratory, ETH Zurich",
    authors: "Fizza Zafar",
    description: "Research evaluating Scalable Video Coding as an alternative to AVC encoding for adaptive bitrate streaming",
    link: "https://fizzaraza97.github.io/static/Evaluating-shift-SVC-encoding.pdf",
  },
];
