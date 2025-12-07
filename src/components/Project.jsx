import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projectData'; 
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.20,
      delayChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const Project = () => {
  return (
    <motion.div
      id='projects'
      className="py-16 px-4 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <motion.div key={project.id} variants={cardVariants}>
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
    </motion.div>
  );
};

export default Project;
