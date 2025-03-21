"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-3 lg:px-4">
      <div>
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-[var(--primary)]" />
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative pl-4"
        >
          {experiences.map((exp, index) => (
            <TimelineCard key={index} item={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}