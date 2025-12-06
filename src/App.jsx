import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App