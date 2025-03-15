"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import Image from 'next/image';
const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Tech Innovations',
      //image: '/testimonial-1.jpg',
      text: 'Sarah transformed our online presence completely. Her attention to detail and creative approach resulted in a website that perfectly represents our brand and has significantly increased our conversion rates.'
    },
    {
      id: 2,
      name: 'Emily Johnson',
      position: 'Marketing Director, Bloom Retail',
      //image: '/testimonial-2.jpg',
      text: 'Working with Sarah was a pleasure from start to finish. She took the time to understand our needs and delivered a solution that exceeded our expectations. Her technical skills and design sensibility are truly impressive.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Founder, Fitness First',
      //image: '/testimonial-3.jpg',
      text: 'The mobile app Sarah developed for our fitness studio has been a game-changer. It intuitive, beautifully designed, and our customers love it. Sarahs ongoing support has been exceptional as well.'
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">What Clients Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-lg border border-gray-100"
            >
              <div className="text-[var(--primary)] mb-4">
                <Quote size={40} />
              </div>
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <Image
                  src={"/testimonial.image"} 
                  alt={testimonial.name} 
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;