"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Globe, BarChart, Smartphone, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites built with the latest technologies to ensure fast loading, responsiveness, and optimal user experience.'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces designed with a focus on usability, accessibility, and visual appeal.'
    },
    {
      icon: <Globe size={40} />,
      title: 'E-Commerce Solutions',
      description: 'Fully-featured online stores with secure payment gateways, inventory management, and customer relationship tools.'
    },
    {
      icon: <BarChart size={40} />,
      title: 'SEO Optimization',
      description: 'Improve your websites visibility in search engines with technical SEO, content optimization, and performance enhancements.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business grow online, reach new customers, and achieve your goals.'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2">My Services</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">What I Do</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg transition-all duration-300 hover:shadow-xl bg-white border border-gray-100 hover:border-[var(--primary)];"
            >
              <div className="text-[var(--primary)] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl mb-6">Looking for a custom service? I'm here to help you with your specific needs.</p>
          <a href="#contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2 bg-[var(--primary)] text-white hover:bg-opacity-90">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;