"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Cyber Security",
    description: "Strengthen defense, future-proof against threats & ensure data security .",
    image: "/CyberSecurity.jpg",
    items: [
      "Network Security",
      "Application Security",
      "Cloud Security",
      "Mobile Security",
      "Digital Forensics",
      "IoT Security",
      "Security Operations",
      "Cyber Risk Assessment",
      
    ]
  },
  {
    title: "Artificial Intelligence",
    description: "Leverage AI to gain insights, automate processes & drive growth and innovation.",
    image: "/ArtificialIntelligence.jpg",
    items: [
      "AI Incubator",
      "AI Transformation solution and Service",
      "AI POC & MVP ",
      "MLOps",
      "Generative AI",
      "Conversational AI",
      "Machine Learning",
    ]
  },
  {
    title: "AI Agents",
    description: "We build AI agents that automate task, streamline operations & enhance customer experience.",
    image: "/AI-agent.jpg",
    items: [
      "Automated Task Management",
      "Customer Service Bots",
      "Decision Support Systems",
      "Process Automation",
      "Intelligent Analytics"
    ]
  },
  {
    title: "Application Re-engineering",
    description: "Optimize systems performance, cloud adoption and UX through code modernization.",
    image: "/application-reengineering.jpg",
    items: [
      "Software Audit",
      "Quality Assurance",
      "Support & Maintenance",
      "Performance Optimization"
    ]
  },
  {
    title: "Appliction Development",
    description: "Build or enhance digital products that are reliabale, high-perfomance, and designed to scale quickly.",
    image: "/applicationDevelopment.jpg",
    items: [
      "Product Development",
      "Application Modernization",
      "POC Development",
      "AI Software Development",
      "Cloud Engineering",
      "Cloud Migration"
    ]
  },
  {
    title: "Advisory",
    description: "Tap into our extensive expertise in emerging technologies.",
    image: "/Advisory.jpg",
    items: [
      "Technical Feasibility Study",
      "Product Strategy",
      "Solution Architecture",
      "Software Architecture",
    ]
  }
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </div>

      {/* Initial Content - Hides on Hover */}
      <div className="relative h-full p-8 flex flex-col justify-end transform transition-all duration-500 group-hover:translate-y-full">
        <div>
          <div className="w-12 h-1 bg-[var(--primary)] mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            {service.title}
          </h3>
          <p className="text-white/80 text-lg">
            {service.description}
          </p>
        </div>
      </div>

      {/* Services List - Shows on Hover */}
      <div className="absolute inset-0 p-8 flex flex-col justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
        <div className="space-y-3">
          {service.items.map((item: string, idx: number) => (
            <div 
              key={idx}
              className="flex items-center gap-3 text-white/90 hover:text-white group/item"
            >
              <ArrowRight className="w-5 h-5 text-[var(--primary)] transform group-hover/item:translate-x-1 transition-transform" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2">Our Services</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">I Engineer Software Solutions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I help you envision technology that powers the future of your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}