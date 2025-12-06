import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='home' 
    className="min-h-screen flex flex-col items-center justify-center p-4
    bg-[url('/images/background.jpg')] 
    bg-cover pt-20">

      {/* Profile Image */}
      <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      
      className="relative mb-6 lg:mb-0 lg:mr-8 self-center">

        {/* Glow */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}

        className="absolute inset-0 rounded-full bg-linear-to-r 
        from-orange-400 to-red-500 blur-xl opacity-25"></motion.div>

        <img 
          src="/images/profile.png" 
          className="w-72 h-72
          lg:w-96 lg:h-96 rounded-full relative z-10 object-cover" 
          alt="Profile picture" 
        />
      </motion.div>

      {/* Text */}
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      
      className="relative max-w-[90%] mx-auto mt-6">

        {/* Overlay blur */}
        <div className="absolute inset-0 bg-black/50  rounded-xl z-0"></div>

        {/* Text content */}
        <div className="relative z-10 text-white p-4">
          <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}

          className="text-center text-3xl mb-2">
            Hi, I am Alex!
          </motion.h1>

          <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}

          className="text-justify text-lg leading-relaxed">
            I'm a junior web developer passionate about creating 
            user-friendly and visually polished interfaces. 
            Through hands-on projects in React, Tailwind, and UI/UX design, 
            I've developed a solid foundation and a structured way of 
            working. I'm currently pursuing a Master's degree in 
            Software Development and Business Information Systems, 
            which helps me deepen both my technical and analytical skills. 
            I'm driven, detail-oriented, and excited to take the next step 
            in my development career.
          </motion.p>
        </div>

      </motion.div>


    </div>
  )
}

export default Hero
