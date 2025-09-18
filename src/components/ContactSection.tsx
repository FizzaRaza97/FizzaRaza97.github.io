import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ContactSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
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

  const socialLinks = [
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

  const quickActions = [
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="w-full px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I'm always interested in discussing new opportunities, collaborations,
            or just having a conversation about data science and AI. Let's connect!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-foreground"
            >
              Contact Information
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card hover-lift cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${info.bgColor}`}>
                          <info.icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-ai-cyan transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <h4 className="text-xl font-semibold mb-6 text-foreground">Quick Actions</h4>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="glass-card hover-lift cursor-pointer group">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <action.icon className="h-5 w-5 text-ai-cyan" />
                            <div>
                              <h5 className="font-medium text-foreground">{action.title}</h5>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="glow-border"
                            onClick={action.action}
                          >
                            Go
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-foreground"
            >
              Connect With Me
            </motion.h3>

            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card hover-lift cursor-pointer group glow-border">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-secondary/50">
                          <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-ai-cyan transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{social.name}</h4>
                          <p className="text-sm text-ai-cyan font-medium mb-1">{social.username}</p>
                          <p className="text-sm text-muted-foreground">{social.description}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="glow-border"
                          onClick={() => window.open(social.url, '_blank')}
                        >
                          Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <Card className="glass-card glow-border">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-lg font-semibold text-foreground">Available for Opportunities</span>
                  </div>
                  <p className="text-muted-foreground">
                    Currently open to new projects, collaborations, and full-time opportunities
                    in data science and AI engineering.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
