"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Nick Drogo',
      position: 'Global Director IT',
      image: '/Nick-Drogo.png',
      text: 'Anum completely transformed the way we manage our customer relationships. Their customized CRM system streamlined our processes and improved customer satisfaction. We highly recommend their services to any business looking for real results.'
    },
    {
      id: 2,
      name: 'Rostislav Morozov',
      position: 'ISTQB certified QA Engineer',
      image: '/Rostislav.jpg',
      text: 'Anum is an architecture genius. Her expertise as a solution architect is significant, and it helped our team come up with more efficient solutions on several projects. She is a professional, helpful, and positive person. It is a honor and pleasure to recommend Anum to anyone who wants to hire her and I would love to work with her again.'
    },
    {
      id: 3,
      name: 'Gianfranco Turrini',
      position: 'Highly effective and results-driven Solutions Architect offering ',
      image: '/Gina.jpg',
      text: 'Anum is a highly skilled Solutions Architect with a strong grasp of both technical and business aspects. She excels at seeing the big picture while capturing critical details, ensuring future-proof solutions with a focus on non-functional requirements and maintainability. Her commitment to delivering the best results, along with her ability to ask the right questions and defend ideas respectfully, makes her a valuable team member who drives progress.'
    },
    {
      id: 4,
      name: 'Tammany Petrie',
      position: 'Founder, Everyday Heroes Kids - @EverydayHeroesKids',
      image: '/Tammany.jpg',
      text: 'Anum is the engineering project manager for our platform and app. She has been incredible to work with; responsive, follows through on all details and has an excellent attitude. I would highly recommend Anum in any capacity.'
    },
    {
      id: 5,
      name: 'Adam Wang ',
      position: 'Senior Digital Business Strategist at National Grid',
      image: '/Adam.jpg',
      text: 'Anum is a highly skilled Solutions Architect with a strong grasp of both technical and business aspects. She excels at seeing the big picture while capturing critical details, ensuring future-proof solutions with a focus on non-functional requirements and maintainability. Her commitment to delivering the best results, along with her ability to ask the right questions and defend ideas respectfully, makes her a valuable team member who drives progress.'
    },
    {
      id: 6,
      name: 'Sameer Ahmad',
      position: 'Full Stack Developer | Former CTO | Passionate About Building Scalable Solutions ',
      image: '/samer.jpg',
      text: 'Anum is an excellent mentor and counselor. I met her at Softech. She shared a great insight of how professional world is different from student life and provided me clarity regarding the career path I should follow. '
    },
    {
      id: 7,
      name: 'Umair Ahmed',
      position: '.Net Core | Blazor | MVC | Microservices | Azure | SQL | WPF | Architectures ',
      image: '/Umair.jpg',
      text: 'Anum is one of those resources that any manager would love to have in team. Technically very sound, self-motivated, hard working, responsible, meeting deadlines, quick learner, mentor, speaker and team leadership are few of her many qualities. Highly recommend her.'
    },
    {
      id: 8,
      name: 'Muhammad Ali Ansari',
      position: 'Sr. Android Engineer at mobile.de GmbH',
      image: '/Ali.jpg',
      text: 'I had the pleasure of working with Anum Tariq, who has exceptional expertise in leadership, coaching and motivation. Foreseeing need of the hour, she collaborated in redesigning the course structure. Her hands-on approach to problem solving, management and positive attitude won her the respect of the staff and I hope she will be the most treasured resource to any platform that will hire her services.'
    }
  
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">What Clients Say</h2>
        </motion.div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[400px] md:min-w-[600px] bg-white rounded-xl p-8 shadow-lg snap-center"
              >
                <div className="mb-6">
                  <Quote className="text-[var(--primary)] mb-4" size={40} />
                  <p className="text-gray-700 text-sm italic leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="relative overflow-hidden rounded-full w-14 h-14 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;