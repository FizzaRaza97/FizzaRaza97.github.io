import { GraduationCap, Award, BookOpen } from 'lucide-react';

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  specialization: string;
  description: string;
  achievements: string[];
  relevantCoursework: string[];
  icon: typeof GraduationCap;
}

export const education: EducationItem[] = [
  {
    degree: "Computer Science Masters (General Computer Science)",
    institution: "Swiss Federal Institute of Technology (ETH) Zurich",
    year: "September 2019 - April 2021",
    specialization: "General Computer Science",
    description: "Comprehensive master's program covering advanced computer science topics including algorithms, systems, and theoretical foundations. Focused on developing strong analytical and problem-solving skills.",
    achievements: [
      "Recipient of Excellence Scholarship and Opportunity Programme (ESOP) Award",
      "Awarded to ~50 students from entire pool of applicants across all majors/specializations"
    ],
    relevantCoursework: [
      "Advanced Algorithms",
      "Computer Systems",
      "Machine Learning",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Distributed Systems",
      "Theoretical Computer Science"
    ],
    icon: GraduationCap
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Lahore University of Management Sciences (LUMS)",
    year: "September 2015 - June 2019",
    specialization: "Computer Science",
    description: "Strong foundation in computer science fundamentals with focus on software development, algorithms, and system design. Consistently maintained excellent academic performance throughout the program.",
    achievements: [
      "Recipient of National Management Foundation (NMF) Gold Medal",
      "Highest GPA in graduating cohort",
      "Dean's Honor List (Academic Years 2015-2019)",
      "Merit-based scholarship (Top 3 students across all majors)"
    ],
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Computer Networks",
      "Database Systems",
      "Software Engineering",
      "Operating Systems",
      "Computer Architecture",
      "Artificial Intelligence"
    ],
    icon: Award
  },
  {
    degree: "GCE Cambridge International Advanced Level",
    institution: "Lahore Grammar School",
    year: "August 2013 - June 2015",
    specialization: "Physics, Chemistry, Mathematics, Economics",
    description: "Completed A-levels with distinction in all subjects, demonstrating strong analytical and mathematical skills across multiple disciplines.",
    achievements: [
      "4A*s in Physics, Chemistry, Mathematics, Economics",
      "Best Across 3 A-levels Award",
      "Cambridge International Examinations 2015",
      "100% Merit Scholarship (Academic Years 2013-2015)"
    ],
    relevantCoursework: [
      "Advanced Mathematics",
      "Physics",
      "Chemistry",
      "Economics",
      "Problem Solving",
      "Critical Thinking"
    ],
    icon: BookOpen
  },
];
