import React from 'react';
import { motion } from 'framer-motion'; 

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0B0F17] text-gray-400 py-6 mt-12"
      variants={footerVariants} 
      initial="hidden"          
      whileInView="show"        
      viewport={{ once: true, amount: 0.5 }} 
    >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
    
        {/* Copyright / Name */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Alexandru Rotaru. All rights reserved.</p>

        {/* Social links */}
        <div className="flex space-x-4">
          <a href="https://github.com/rotarualexandru22" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rotaru-alexandru-34779b214/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="/RACV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            CV
          </a>
        </div>
    </div>
  </motion.footer>
  );
};

export default Footer;