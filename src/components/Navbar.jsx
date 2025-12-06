import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const handler = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [isOpen]); 

  return (
    <motion.nav
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
        type: "spring",
        stiffness: 80,
        damping: 12
    }}

    className='text-white border-b border-blue-500/20
    fixed top-0 left-0 w-full z-50 bg-[linear-gradient(to_right,#0B0F17,#111827,#0B0F17)]'>
        
        <div className='flex items-center justify-between px-3 md:px-6 lg:px-10 py-3'>

        {/* Logo + Name */}
        <a href='#home' className='flex items-center justify-center space-x-1'>
            <img src="/logo/arlogowhite.svg" className='size-8 md:size-10 ' alt="" />
            <span className='gradient-text md:text-lg lg:text-xl font-semibold'>Alexandru Rotaru</span>
        </a>

        {/* Sections List */}
        <ul className='hidden md:flex lg:flex xl:flex items-center space-x-2 lg:space-x-4'>
            <li className='li-styling'> <a href="#home">Home</a> </li>
            <li className='li-styling'> <a href="#projects">Projects</a> </li>
            <li className='li-styling'> <a href="#skills">Skills</a> </li>
            <li className='li-styling'> <a href="#contact">Contact</a> </li>
        </ul>

        {/* Contact Icons */}
        <div className='hidden md:flex lg:flex xl:flex items-center space-x-2 lg:space-x-4'>
            {/* Github Icon */}
            <a href="https://github.com/rotarualexandru22" target='_blank' rel='noopener noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg-styling" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </a>
            {/* Linkedin Icon */}
            <a href="https://www.linkedin.com/in/rotaru-alexandru-34779b214/" target='_blank' rel='noopener noreferrer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg-styling" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
            </a>
            {/* CV Button + Icon */}
            <a href="/public/RACV.pdf" target="_blank" rel="noopener noreferrer"
            className="cv-container">

                <span>View CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </a>

        </div>

            {/* Mobile menu button */}
            <button className='md:hidden text-white focus:outline-none'
            onClick={() => setIsOpen(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-8 cursor-pointer hover:text-gray-300" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>

            {/* Drawer */}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-64 bg-[#0C0E12]/90 shadow-xl z-50
                    transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                    md:hidden
                `}>

                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-white font-bold"
                    onClick={() => setIsOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-6 cursor-pointer hover:text-gray-300" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>

                {/* Menu Items */}
                <nav className="mt-16 flex flex-col gap-6 px-6 text-lg text-white">
                    <a href="#home" className='li-styling-sm' onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#projects" className='li-styling-sm' onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#skills" className='li-styling-sm' onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#contact" className='li-styling-sm' onClick={() => setIsOpen(false)}>Contact</a>

                    {/* Socials + CV */}
                    <div className="mt-6 flex justify-center space-x-4">
                        {/* Github Icon */}
                        <a href="https://github.com/rotarualexandru22" target='_blank' rel='noopener noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg-styling" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                        {/* Linkedin Icon */}
                        <a href="https://www.linkedin.com/in/rotaru-alexandru-34779b214/" target='_blank' rel='noopener noreferrer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg-styling"  viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>

                </nav>

                {/* CV Button + Icon */}
                <a href="/public/RACV.pdf" target="_blank" rel="noopener noreferrer"
                    className="cv-container-sm">

                    <span>View CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </a>

            </div>
        </div>
    </motion.nav>
    
  )
}

export default Navbar