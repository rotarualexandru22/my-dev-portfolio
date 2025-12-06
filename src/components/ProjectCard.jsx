import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 12 } 
  },
};

const ProjectCard = ({ title, description, image, live, github }) => {

  const isFutureProject = description === "To be continued...";

  return (
    <motion.div
      variants={cardVariants}
      className="rounded-xl shadow-lg overflow-hidden flex flex-col
                 cursor-pointer md:hover:scale-105 transition-transform duration-300 ease-in-out
                 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
    >
      {isFutureProject ? (
        <div 
          className="w-full h-full flex items-center justify-center 
                     bg-black text-white text-2xl font-semibold 
                     p-4 min-h-[360px] rounded-xl" 
        >
          {description}
        </div>
      ) : (
        <>
          <img src={image} alt={title} className="w-full h-60 object-cover" />

          <div className="p-4 flex flex-col flex-1 justify-between
                          border border-t-0 border-white/20 rounded-b-xl 
                          backdrop-blur-sm bg-black/20">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 text-sm text-justify">{description}</p>
            </div>

            <div className="flex justify-between mt-4">
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm"
                >
                  GitHub
                </a>
              )}
              {live && (
                <a 
                  href={live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ProjectCard;