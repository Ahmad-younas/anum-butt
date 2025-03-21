"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Advisory",
    description: "Navigate the complexities of digital technology with expert consultation.",
    image: "/advisory.jpg",
    items: [
      "Discovery Workshop",
      "Market Research",
      "Technical Feasibility Study",
      "Product Strategy",
      "UI/UX Design",
      "Digital Transformation"
    ]
  },
  {
    title: "Engineering",
    description: "Transform your ideas into reality with cutting-edge engineering expertise.",
    image: "/engineering.jpg",
    items: [
      "Product Development",
      "Application Development",
      "Application Modernization",
      "POC Development",
      "AI Software Development",
      "Cloud Engineering",
      "Cloud Migration"
    ]
  },
  {
    title: "AI Agents",
    description: "Transform your business into a high-performance engine by deploying AI agents that automate repetitive tasks.",
    image: "/ai-service.jpg",
    items: [
      "Automated Task Management",
      "Customer Service Bots",
      "Decision Support Systems",
      "Process Automation",
      "Intelligent Analytics"
    ]
  },
  {
    title: "Optimization",
    description: "Maximize your software's efficiency and reliability with our optimization services.",
    image: "/optimization.jpg",
    items: [
      "Software Audit",
      "Quality Assurance",
      "Support & Maintenance",
      "Performance Optimization"
    ]
  },
  {
    title: "Business Enablement",
    description: "Boost your operations with comprehensive business solutions.",
    image: "/business.jpg",
    items: [
      "Accounts & Finance",
      "HR & Recruitment",
      "Digital Marketing & Branding"
    ]
  },
  {
    title: "Expertise",
    description: "Tap into our extensive expertise in emerging technologies.",
    image: "/expertise.jpg",
    items: [
      "UX Design",
      "RPA",
      "DevOps",
      "Internet of Things",
      "Blockchain",
      "AR/VR/MR",
      "Data Science",
      "Cybersecurity"
    ]
  }
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[400px] group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Content Section */}
      <div className="relative z-10 h-full p-10 flex flex-col">
        <div>
          <div className="w-12 h-1 bg-[var(--primary)] mb-6 group-hover:bg-white transition-colors duration-500" />
          <h3 className="text-4xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-500">
            {service.description}
          </p>
        </div>

        {/* Child Topics that slide up with the image */}
        <div className="mt-auto transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h4 className="text-white font-semibold mb-4 text-xl">Services</h4>
          <div className="space-y-3">
            {service.items.map((item: string, idx: number) => (
              <div 
                key={idx}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group/item"
              >
                <ArrowRight className="w-4 h-4 transform group-hover/item:translate-x-1 transition-transform" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image that slides up */}
      <div 
        className="absolute inset-0 transform translate-y-[65%] group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(to top, rgb(0 0 0 / 0.9), rgb(0 0 0 / 0.75))',
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="opacity-60 -z-10"
        />
      </div>

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent group-hover:opacity-0 transition-opacity duration-500"
        style={{ height: '65%' }}
      />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">We Engineer Software Solutions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We help you envision technology that powers the future of your business
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