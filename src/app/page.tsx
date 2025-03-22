import React from 'react';
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Porfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Experience from "./pages/Experience";
import Collaborations from '@/app/components/Collaborations';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--light)]">
      <Navbar />
      <Hero />
      <About/>
      <Collaborations />
      {/* <Experience/> */}
      <Services/>
      {/* <Portfolio/> */}
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
