import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { contactInfo, socialLinks, quickActions } from '../data/contactData';

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
            GET IN TOUCH
          </motion.h2>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="w-full">
            <Card className="glass-card glow-border group">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                  {/* Left Side - Status & Message */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="relative">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="ml-3 text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-ai-purple bg-clip-text text-transparent">
                        Open for Opportunities
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      Ready to collaborate on exciting projects in AI, machine learning, and data science.
                      Let's build something amazing together!
                    </p>
                  </div>

                  {/* Right Side - Quick Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="ai"
                      className="group hover:scale-105 transition-all duration-300 min-w-[140px]"
                      onClick={() => window.open('mailto:your-email@example.com', '_blank')}
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Message
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="group hover:scale-105 transition-all duration-300 glow-border min-w-[140px]"
                      onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                      <svg className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Resume
                    </Button>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-8 pt-6 border-t border-ai-cyan/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                      { label: "Response Time", value: "< 24hrs" },
                      { label: "Availability", value: "Immediate" },
                      { label: "Preferred", value: "Remote" },
                      { label: "Status", value: "Active" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-lg font-bold text-foreground transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card hover-lift group glow-border">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-secondary/50">
                          <info.icon className="h-6 w-6 text-muted-foreground transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="glow-border"
                          onClick={() => window.open(info.link, '_blank')}
                        >
                          {info.title === "Email" ? "Email" : "View on Maps"}
                        </Button>
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
              <div className="space-y-6">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="glass-card hover-lift group">
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
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card hover-lift group glow-border">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-secondary/50">
                          <social.icon className="h-6 w-6 text-muted-foreground transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{social.name}</h4>
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

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
