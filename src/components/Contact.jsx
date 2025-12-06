import React from 'react';
import { motion } from 'framer-motion';

// Variants for the section entrance animation
const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 px-4 max-w-3xl mx-auto text-center"
      variants={contactVariants} // Apply entrance variants
      initial="hidden"          // Start hidden
      whileInView="show"        // Trigger on scroll
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible, only once
    >
      <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
      
      <p className="text-gray-300 max-w-xl mx-auto mb-6">
        Let’s connect. I’m open to new opportunities, collaborations, or simply a friendly chat.
      </p>
      
      <div className='flex items-center justify-center space-x-4'>
        {/* Email Icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
          <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
          <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
        </svg>
        
        {/* Animated Email Link */}
        <motion.a 
          href="mailto:rotarualexandru22@yahoo.com"
          className="text-blue-400 hover:text-blue-300 font-medium 
                     underline underline-offset-4"
          whileHover={{ scale: 1.05, color: "#93c5fd" }} // Framer Motion Hover
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          rotarualexandru22@yahoo.com
        </motion.a>
      </div>
      
    </motion.section>
  )
}

export default Contact