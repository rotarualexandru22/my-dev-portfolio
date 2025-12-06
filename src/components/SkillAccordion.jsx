import React from "react";
import { motion, AnimatePresence } from 'framer-motion'; 

const contentVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    show: { 
      opacity: 1, 
      height: "auto", 
      marginTop: "0.75rem", 
      transition: {
        height: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      marginTop: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.15 }
      }
    }
};

const SkillAccordion = ({ title, children, id, isOpen, onToggle }) => {
  return (
    <motion.div
      onClick={() => onToggle(id)} 

      layout
      className="border border-white/20 rounded-xl 
      bg-black/20 backdrop-blur-sm p-4 mb-4
      cursor-pointer transition-300
      hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
    >
      <button 
        className="w-full flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-white text-lg font-semibold">{title}</h3>

        <svg 
          className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      <AnimatePresence> 
        {isOpen && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            
            className="overflow-hidden" 
          >
            <ul className="pl-4 text-gray-300 list-disc text-sm space-y-1">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillAccordion;