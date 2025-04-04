"use client"
import React, { ReactNode } from 'react';
import { motion, useAnimation, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Award, Calendar, Briefcase, Building2,UsersRound   } from 'lucide-react';

import Image from 'next/image';
import Resume from './Resume';

interface CounterProps {
  value: string;
  label: string;
  icon: ReactNode;
}

const Counter: React.FC<CounterProps> = ({ value, label, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const targetNumber = parseInt(value);
      const controls = animate(0, targetNumber, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="bg-white p-4 rounded-lg shadow-md text-center">
      <div className="text-[var(--primary)] mb-2 flex justify-center">{icon}</div>
      <h4 className="text-2xl font-bold">{count}+</h4>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Calendar size={24} />, value: '13', label: 'Years of Experience' },
    { icon: <Briefcase size={24} />, value: '100', label: 'Projects Completed' },
    { icon: <Award size={24} />, value: '15', label: 'Awards Received' },
    { icon: <Building2 size={24} />, value: '25', label: 'Industries I Served' },
    { icon: <UsersRound  size={24} />, value: '94', label: 'Customer Satisfaction' },
  ];



  const skills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'UI/UX Design', percentage: 75 },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"> 
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2" >About Me</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">Know Me More</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Image
                src="/anumbutt.jpeg"
                alt="About Anum Butt" 
                width={500}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 -l w-32 h-32 bg-[var(--primary)] rounded-lg opacity-20"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className='bg-[var(--about)] rounded-lg shadow-xl h-full p-3'
          >
            <h3 className= {`xl:text-3xl md:text-2xl  font-bold mb-4`}>Hello, I&apos;m Anum Butt, Based in UK, London</h3>
            <p className="text-gray-700 mb-6">
            A seasoned and dynamic IT Professional with 13+ years of hands-on experience across software architecture, design, development, and production support. I have a solid track record of driving innovation and delivering high-impact solutions for a diverse range of clients, from startups to Fortune 500 companies. Known for my analytical mindset and attention to detail, I excel at enhancing end-user functionality and ensuring project accuracy from start to finish.
            </p>
            <p className="text-gray-700 mb-6">
            Whether leading complex projects or collaborating within teams, I&apos;m passionate about using technology to solve real-world problems and create scalable, efficient systems that deliver measurable results.
            </p>
            <p className="text-gray-700 mb-6">
            In addition to my professional experience, I&apos;m actively involved in public speaking and mentoring through platforms like ProWomen, where I support and empower other women in tech.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Counter 
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
            
            <a href="/Profile.pdf" target='_blank' className="px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2 bg-[var(--primary)] text-white hover:bg-opacity-90">
              Download CV <Download size={18} />
            </a>
          </motion.div>
        </div>
        
        {/* <div className="mt-20">
          <h3 className="mb-8 text-center text-[var(--primary)]">13 + Years of Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
          <div>
            <h1 className='text-6xl font-bold mb-4 text-center'>My Resume</h1>
          </div>
           <Resume/>
        </div> */}
      </div>
    </section>
  );
};

export default About;