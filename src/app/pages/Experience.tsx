"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Ltd",
    location: "London, UK",
    period: "2020 - Present",
    description: "Leading development of enterprise-scale applications and microservices architecture.",
    achievements: [
      "Spearheaded the migration of legacy systems to modern cloud architecture",
      "Implemented AI-driven features resulting in 40% efficiency improvement",
      "Mentored junior developers and established best practices",
      "Led a team of 8 developers across multiple projects"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    location: "Manchester, UK",
    period: "2018 - 2020",
    description: "Developed and maintained full-stack web applications for enterprise clients.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Implemented automated testing reducing bugs by 45%",
      "Developed real-time analytics dashboard for client reporting",
      "Integrated multiple third-party APIs and payment systems"
    ],
    technologies: ["Angular", "Python", "PostgreSQL", "Redis", "GCP"]
  },
  {
    title: "Software Developer",
    company: "Innovation Labs",
    location: "Birmingham, UK",
    period: "2016 - 2018",
    description: "Focused on building scalable web applications and RESTful APIs.",
    achievements: [
      "Built and deployed 15+ customer-facing applications",
      "Improved database query performance by 75%",
      "Implemented CI/CD pipeline reducing deployment time",
      "Developed mobile-first responsive designs"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Jenkins", "Azure"]
  }
];

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Company and Title Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors duration-300">
          {experience.title}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <Building2 className="w-4 h-4 text-[var(--primary)]" />
          <span className="text-gray-600">{experience.company}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <MapPin className="w-4 h-4 text-[var(--primary)]" />
          <span className="text-gray-600">{experience.location}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <Calendar className="w-4 h-4 text-[var(--primary)]" />
          <span className="text-gray-600">{experience.period}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 group/item">
              <ArrowUpRight className="w-5 h-5 text-[var(--primary)] mt-1 group-hover/item:rotate-45 transition-transform duration-300" />
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech: string, idx: number) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[var(--primary)] hover:text-white transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[var(--primary)] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2">Professional Journey</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Over 13 years of experience in delivering innovative software solutions and driving digital transformation
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 