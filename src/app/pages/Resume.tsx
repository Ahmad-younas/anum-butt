"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Users,
  Cloud,
  Database,
  Layout,
  Cpu,
  GitBranch,
  Monitor,
  Server,
  Smartphone,
  Gamepad2,
  Wrench
} from "lucide-react";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Professional Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "interview", label: "Interview", icon: Users },
];

const skills = [
  {
    category: "Architecture & Cloud",
    icon: Cloud,
    items: [
      { name: "Azure Architecture", level: 95 },
      { name: "AWS Solutions", level: 90 },
      { name: "Microservices", level: 92 },
      { name: "System Design", level: 95 },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    icon: GitBranch,
    items: [
      { name: "Docker/Kubernetes", level: 88 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Infrastructure as Code", level: 85 },
      { name: "Jenkins/GitLab", level: 87 },
    ],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    items: [
      { name: ".NET Core/C#", level: 92 },
      { name: "SQL/NoSQL", level: 90 },
      { name: "Node.js/Python", level: 85 },
      { name: "API Design", level: 93 },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "React Native", level: 88 },
      { name: "iOS/Swift", level: 85 },
      { name: "Android/Kotlin", level: 83 },
      { name: "Mobile Architecture", level: 90 },
    ],
  },
  {
    category: "Game Development",
    icon: Gamepad2,
    items: [
      { name: "Unity3D", level: 85 },
      { name: "Game Architecture", level: 88 },
      { name: "C++ Gaming", level: 82 },
      { name: "Multiplayer Systems", level: 80 },
    ],
  },
  {
    category: "Tools & Methodologies",
    icon: Wrench,
    items: [
      { name: "Agile/Scrum", level: 95 },
      { name: "JIRA/Confluence", level: 90 },
      { name: "Enterprise Patterns", level: 92 },
      { name: "Technical Leadership", level: 95 },
    ],
  },
];

const experiences = [
  {
    period: "2007 - 2010",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    description:
      "Led development of enterprise-scale applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    rating: "4.70/5",
  },
  {
    period: "2007 - 2010",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    description:
      "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Improved application performance by 40%.",
    rating: "4.30/5",
  },
];

const education = [
  {
    period: "2007 - 2010",
    title: "Personal Portfolio April Fools",
    institution: "University of DVI (1997 - 2001)",
    description:
      "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
    rating: "4.30/5",
  },
  {
    period: "2007 - 2010",
    title: "Diploma in Web Development",
    institution: "BSE In CSE (2004 - 2008)",
    description:
      "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
    rating: "4.70/5",
  },
];

const TimelineCard = ({ item, index }: any) => (
  <div className="relative">
    {/* Timeline connector */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
    
    {/* Timeline dot */}
    <div className="absolute left-[-5px] top-6 w-[10px] h-[10px] rounded-full bg-[var(--primary)]" />
    
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="ml-8 bg-white rounded-2xl p-8 shadow-lg mb-8"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[var(--primary)] font-medium">{item.period}</p>
          <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
          <p className="text-gray-600 mt-1">{item.institution || item.company}</p>
        </div>
        <div className="bg-white shadow px-3 py-1 rounded-full">
          <span className="text-[var(--primary)] font-medium">{item.rating}</span>
        </div>
      </div>
      <p className="text-gray-600">{item.description}</p>
    </motion.div>
  </div>
);
export default function Resume() {
    const [activeTab, setActiveTab] = useState("education");
  
    const renderContent = () => {
      switch (activeTab) {
        case "skills":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-8 h-8 text-[var(--primary)]" />
                    <h3 className="text-2xl font-bold text-gray-800">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {category.items.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-[var(--primary)]">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIdx * 0.2 }}
                            className="h-full bg-[var(--primary)] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          );
  
        case "experience":
          return (
            <div className="relative pl-4">
              <h2 className="text-4xl font-bold mb-8">Job Experience</h2>
              {experiences.map((exp, index) => (
                <TimelineCard key={index} item={exp} index={index} />
              ))}
            </div>
          );
  
        default:
          return (
            <div className="relative pl-4">
              <h2 className="text-4xl font-bold mb-8">Education</h2>
              {education.map((edu, index) => (
                <TimelineCard key={index} item={edu} index={index} />
              ))}
            </div>
          );
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-3 lg:px-4">
        <div >
          <nav className="flex justify-between items-center mb-12 bg-white  shadow-lg p-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3  text-lg font-medium transition-colors flex items-center gap-2 ${
                    isActive ? "text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[var(--primary)] rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    <tab.icon className="w-5 h-5 inline-block mr-1" />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </nav>
  
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }