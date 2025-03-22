"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);

    // Update active section based on scroll position
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    // { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    // { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-[var(--primary)]">Portfolio</a>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      className={`relative text-[var(--dark)] hover:text-[var(--primary)] transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary)] hover:after:w-full after:transition-all after:duration-300 ${activeSection === link.id ? 'text-[var(--primary)] after:w-full' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <button 
              className="md:hidden text-[var(--dark)] hover:text-[var(--primary)] transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6 transform transition-transform duration-300">
            <div className="flex justify-end">
              <button 
                onClick={toggleMenu}
                className="text-[var(--dark)] hover:text-[var(--primary)] transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="mt-8">
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      className={`text-lg ${activeSection === link.id ? 'text-[var(--primary)] font-medium' : 'text-[var(--dark)]'}`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
      
      {/* Scroll to top button */}
      <button 
        className={`fixed bottom-6 right-6 bg-[var(--primary)] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;