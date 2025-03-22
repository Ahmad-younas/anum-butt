"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    title: "The Rise of Multi-Cloud Strategies",
    name: "Jonathan Donaldson",
    role: "CTO",
    company: "Google",
    image: "/anumbutt.jpeg", // Replace with actual image
    description: "Leading the transformation of cloud infrastructure and developing innovative solutions for enterprise-scale applications. Expertise in multi-cloud architecture and strategic technology implementation.",
    topics: [
      "Cloud Infrastructure Evolution",
      "Multi-Cloud Strategy Development",
      "Enterprise Architecture",
      "Digital Transformation",
      "Cloud Native Solutions"
    ]
  },
  {
    title: "Future of Cloud Computing",
    name: "Sarah Mitchell",
    role: "Cloud Architect",
    company: "Microsoft",
    image: "/anumbutt.jpeg", // Replace with actual image
    description: "Pioneering cloud-native solutions and implementing cutting-edge technologies for scalable enterprise applications.",
    topics: [
      "Cloud Native Architecture",
      "Serverless Computing",
      "DevOps Transformation",
      "Microservices Design",
      "Container Orchestration"
    ]
  },
  {
    title: "AI in Cloud Infrastructure",
    name: "David Chen",
    role: "AI Solutions Architect",
    company: "Amazon Web Services",
    image: "/anumbutt.jpeg", // Replace with actual image
    description: "Integrating AI capabilities into cloud infrastructure and developing intelligent solutions for enterprise needs.",
    topics: [
      "AI Integration",
      "Machine Learning Operations",
      "Intelligent Infrastructure",
      "Automated Cloud Management",
      "AI-Driven Security"
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={experience.image}
          alt={experience.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between text-white">
        {/* Top Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium opacity-80">{experience.company}</span>
          </div>
          <h3 className="text-3xl font-bold mb-2">{experience.role}</h3>
          <h4 className="text-xl font-semibold">{experience.name}</h4>
        </div>

        {/* Title and Play Button */}
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold max-w-[80%] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            {experience.title}
          </h2>
          <div className="bg-[#00DC89] rounded-full p-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <Play className="w-6 h-6 text-black" />
          </div>
        </div>

        {/* Topics that appear on hover */}
        <div className="absolute inset-0 p-8 bg-black/80 flex flex-col justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold mb-6">{experience.title}</h3>
          <p className="text-gray-300 mb-6">{experience.description}</p>
          <div className="space-y-3">
            {experience.topics.map((topic: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00DC89]" />
                <span className="text-white/90">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#00DC89] text-lg md:text-xl font-medium mb-2">Featured Talks</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Technology Leadership</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights and experiences from industry leaders shaping the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 