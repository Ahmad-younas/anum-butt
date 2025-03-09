"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {  Github, Linkedin, Twitter } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import Image from 'next/image';
const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary)] opacity-5 rounded-bl-full z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-medium mb-2">👋 Hi There,</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I'm
              <span className="text-[var(--primary)]">
                 <Typewriter words={[' Solutions Architect', ' Engineering Leader', ' Technology Enthusiast', ' Mentor', ' Trainer']}loop={false}cursor/>
              </span>
            </h1>
            {/* <h2 className="text-2xl md:text-3xl font-medium mb-6">Creative Developer</h2> */}
            
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
             IT professional with 12+ years in software architecture, development, and support, delivering innovative solutions for startups to Fortune 500 companies. Known for analytical skills, attention to detail, and enhancing user functionality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* <Link href="#contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2 bg-[var(--primary)] text-white hover:bg-opacity-90">
                Get In Touch <ArrowRight size={18} />
              </Link> */}
              <Link href="#about" className="px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
                More About Me              
                </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <span className="text-gray-700">Follow Me:</span>
              <div className="flex gap-4">
                <Link href="https://github.com/anum-tariq-butt" target='_blank' className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                  
                  <Github size={18} />
                </Link>
                <Link href="https://www.linkedin.com/in/anum-tariq-butt-37b31039/" target='_blank'  className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                  <Linkedin size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                  <Twitter size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-xl max-w-md mx-auto">
              <Image 
                src="anumbutt.jpeg"
                alt="Anum Butt" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--primary)] rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--primary)] rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;