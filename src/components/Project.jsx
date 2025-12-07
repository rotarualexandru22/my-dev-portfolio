import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projectData'; 
import { motion } from 'framer-motion';

const Project = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
         duration: 0.5, 
         ease: "easeOut" 
      }
    }
  };

  return (
    <div
      id='projects'
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <motion.div 
          key={project.id} 

          initial="hidden"
          whileInView="show"
          variants={cardVariants}
          viewport={{once: true, amount: 0.2}}
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              image={project.image}
              live={project.live}
              github={project.github}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
