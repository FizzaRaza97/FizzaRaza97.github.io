export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: string;
}

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
