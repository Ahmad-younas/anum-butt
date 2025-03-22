"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  position?: string;
  company?: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rostislav Morozov',
    position: 'ISTQB certified QA Engineer',
    image: '/Rostislav.jpg',
    text: 'Anum is an architecture genius. Her expertise as a solution architect is significant, and it helped our team come up with more efficient solutions on several projects. She is a professional, helpful, and positive person. It is a honor and pleasure to recommend Anum to anyone who wants to hire her and I would love to work with her again.'
  },
  {
    id: 2,
    name: 'Gianfranco Turrini',
    position: 'Highly effective and results-driven Solutions Architect',
    image: '/Gina.jpg',
    text: 'Anum is a highly skilled Solutions Architect with a strong grasp of both technical and business aspects. She excels at seeing the big picture while capturing critical details, ensuring future-proof solutions with a focus on non-functional requirements and maintainability.'
  },
  {
    id: 3,
    name: 'Tammany Petrie',
    position: 'Everyday Heroes Kids',
    image: '/Tammany.jpg',
    text: 'Anum is the engineering project manager for our platform and app. She has been incredible to work with; responsive, follows through on all details and has an excellent attitude. I would highly recommend Anum in any capacity.'
  },
  {
    id: 4,
    name: 'Adam Wang',
    position: 'Senior Digital Business Strategist',
    image: '/Adam.jpg',
    text: 'Anum is a highly skilled Solutions Architect with a strong grasp of both technical and business aspects. She excels at seeing the big picture while capturing critical details, ensuring future-proof solutions with a focus on non-functional requirements and maintainability.'
  },
  {
    id: 5,
    name: 'Nick Drogo',
    position: 'Global Director IT',
    image: '/Nick-Drogo.jpg',
    text: 'Anum completely transformed the way we manage our customer relationships. Their customized CRM system streamlined our processes and improved customer satisfaction. We highly recommend their services to any business looking for real results.'
  },
  {
    id: 6,
    name: 'Robert K Burger',
    position: 'COO, Sterne Kessler',
    image: '/RobertKBurger.jpg',
    text: 'Anum helped us buid docketing app that features anintuitive user interface, allowing our attorneys to track over 10,000 U.S. and international patent systems'
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
  },
  {
    id: 9,
    name: 'Sameer Ahmad',
    position: 'Full Stack Developer | Former CTO',
    image: '/samer.jpg',
    text: 'Anum is an excellent mentor and counselor. I met her at Softech. She shared a great insight of how professional world is different from student life and provided me clarity regarding the career path I should follow.'
  },
  {
    id: 10,
    name: 'mxvnxmvmvcxvx',
    position: 'Technology Enthusiast',
    image: '/1740279866293.jpg',
    text: 'Amazing sense of responsibility and merit, eager to learn, passionate to code, sublime work ethics, works tirelessly and benevolent teammate.'
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative h-[250px] w-[300px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer mx-3"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 via-[var(--primary)]/10 to-transparent" /> */}
      </div>

      {/* Default Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
          <p className="text-white/80 text-sm mb-2">{testimonial.company}</p>
          <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-white/90 text-sm">{testimonial.position}</p>
        </div>
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 p-6 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
        <div>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-[var(--primary)] text-lg md:text-xl font-medium mb-2">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our valued clients about their experience working with us
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/5 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/5 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-2 pb-8 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}