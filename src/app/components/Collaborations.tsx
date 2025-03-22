"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Duplicate the rows to create seamless scrolling effect
const firstRow = [
  {
    name: "Product Madness",
    logo: "/madness.jpg"
  },
  {
    name: "FireExam",
    logo: "/FireExam.png"
  },
  {
    name: "EMT",
    logo: "/EMT.png"
  },
  {
    name: "Aristocrat",
    logo: "/aristocrat-1.jpg"
  },
  {
    name: "Knowles",
    logo: "/knowles.jpg"
  },
  {
    name: "Huawei",
    logo: "/huawei.jpg"
  }
];

const secondRow = [
  {
    name: "Marki Tech",
    logo: "/mktlogo.jpg"
  },
  {
    name: "Honeywell",
    logo: "/logos/honeywell.png"
  },
  {
    name: "Replenium",
    logo: "/logos/replenium.png"
  },
  {
    name: "Moment.ai",
    logo: "/logos/moment-ai.png"
  },
  {
    name: "Lumatax",
    logo: "/logos/lumatax.png"
  }
];

// Duplicate arrays for infinite scroll effect
const duplicatedFirstRow = [...firstRow, ...firstRow];
const duplicatedSecondRow = [...secondRow, ...secondRow];

const LogoRow = ({ logos, direction = "left" }: { logos: typeof duplicatedFirstRow, direction?: "left" | "right" }) => {
  const { scrollYProgress } = useScroll();
  
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [0, -1000] : [-1000, 0]
  );

  const smoothTranslateX = useSpring(translateX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      style={{ x: smoothTranslateX }}
      className="flex gap-8 md:gap-16 min-w-max"
    >
      {logos.map((collaborator, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="w-[150px] h-[80px] relative flex items-center justify-center p-4"
        >
          <Image
            src={collaborator.logo}
            alt={`${collaborator.name} logo`}
            fill
            className="object-contain filter hover:brightness-110 transition-all duration-300"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Collaborations = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          I've collaborated with
        </motion.h2>
        
        <div className="space-y-12 overflow-hidden">
          <div className="overflow-hidden">
            <LogoRow logos={duplicatedFirstRow} direction="left" />
          </div>
          <div className="overflow-hidden">
            <LogoRow logos={duplicatedSecondRow} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations; 