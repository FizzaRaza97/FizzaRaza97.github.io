import { Mail, Github, Linkedin, FileText, MapPin, Calendar } from 'lucide-react';

export interface ContactInfo {
  icon: typeof Mail;
  title: string;
  value: string;
  link: string;
  color: string;
  bgColor: string;
}

export interface SocialLink {
  icon: typeof Github;
  name: string;
  username: string;
  url: string;
  description: string;
  color: string;
}

export interface QuickAction {
  title: string;
  description: string;
  icon: typeof FileText;
  action: () => void;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: "fizza.raza97@gmail.com",
    link: "mailto:fizza.raza97@gmail.com",
    color: "text-ai-cyan",
    bgColor: "bg-ai-cyan/10",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "St Louis, Missouri, United States",
    link: "https://maps.google.com/?q=St+Louis,+Missouri,+United+States",
    color: "text-ai-teal",
    bgColor: "bg-ai-teal/10",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    name: "GitHub",
    username: "Fizza Raza",
    url: 'https://github.com/FizzaRaza97',
    description: "View my code repositories and projects",
    color: "hover:text-gray-400",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    username: "Fizza Raza",
    url: "https://linkedin.com/in/fizzazafar",
    description: "Connect with me professionally",
    color: "hover:text-blue-400",
  },
];

export const quickActions: QuickAction[] = [
  {
    title: "Download Resume",
    description: "Get my latest resume in PDF format",
    icon: FileText,
    action: () => {
      // In a real app, this would download the actual resume
      window.open('/resume.pdf', '_blank');
    },
  },
  {
    title: "Schedule Meeting",
    description: "Book a time to discuss opportunities",
    icon: Calendar,
    action: () => {
      // In a real app, this would open a calendar booking link
      window.open('https://calendly.com/fizzazafar', '_blank');
    },
  },
];
