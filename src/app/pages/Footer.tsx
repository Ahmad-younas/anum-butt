import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--dark)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg font-medium mb-4 md:mb-0">
            © {currentYear} Anum Butt. All Rights Reserved.
          </p>
          
          <p className="flex items-center">
            Made with <Heart size={16} className="text-[var(--primary)] mx-1" /> by Anum Butt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;