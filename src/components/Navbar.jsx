import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useColor } from '../context/ColorContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact']
  const { currentColor } = useColor()
  
  // Optimize menu animation variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.nav 
      initial={false}
      animate={{ y: 0 }}
      className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 py-4 px-6"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <motion.h1 
            whileHover={{ scale: 1.1 }}
            style={{ color: currentColor }}
            className="text-2xl font-bold relative cursor-pointer font-['Orbitron']"
          >
            <div className="relative">
              <span className="relative z-10 flex items-center">
                <span className="text-3xl tracking-wider">A</span>
                <span className="ml-1 tracking-widest">ung</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  style={{ backgroundColor: currentColor }}
                />
              </span>
            </div>
          </motion.h1>

          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="relative cursor-pointer text-gray-300 group"
                  style={{ hover: { color: currentColor } }}
                >
                  {item}
                  <span 
                    className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: currentColor }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            style={{ color: currentColor }}
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu with updated colors */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-4"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-b border-slate-700 pb-2"
                  >
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="block text-gray-300"
                      style={{ hover: { color: currentColor } }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar