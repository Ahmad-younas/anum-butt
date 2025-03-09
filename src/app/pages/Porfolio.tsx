"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Plus } from 'lucide-react';
import Image from 'next/image';
const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '#'
    },
    {
      id: 3,
      title: 'Corporate Branding',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      link: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '#'
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      link: '#'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'App' },
    { id: 'design', label: 'Design' }
  ];

  return (
    <section id="portfolio" ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2">My Portfolio</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">Recent Works</h2>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-[var(--primary)] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg group"
            >
              <Image
                src={item.image} 
                alt={item.title} 
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[var(--primary)] bg-opacity-90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0;">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white mb-4 capitalize">{item.category}</p>
                <div className="flex gap-4">
                  <a 
                    href={item.link} 
                    className="w-10 h-10 rounded-full bg-white text-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={item.image} 
                    className="w-10 h-10 rounded-full bg-white [var(--primary)] flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Plus size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;