import React, { useState } from 'react';
import SkillAccordion from "./SkillAccordion";
import { motion } from 'framer-motion'; 
import skillData from '../data/skillData'; 

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function Skills() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionToggle = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <motion.div
      id="skills" 
      className="max-w-2xl mx-auto p-4 text-white"
      variants={containerVariants} 
      initial="hidden" 
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Skills</h1>

      {skillData.map((group) => (
        <motion.div key={group.id} variants={itemVariants}> 
          <SkillAccordion 
            id={group.id} 
            title={group.title}
            isOpen={openAccordionId === group.id} 
            onToggle={handleAccordionToggle} 
          >
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </SkillAccordion>
        </motion.div>
      ))}
      
    </motion.div>
  );
}