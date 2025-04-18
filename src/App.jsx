import './App.css'
import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Qualifications from './pages/Qualifications'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { ColorProvider, useColor } from './context/ColorContext'
import { motion, AnimatePresence } from 'framer-motion'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'

const AppContent = () => {
  const { getCurrentTheme } = useColor()
  const { gradient } = getCurrentTheme()

  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} text-white min-h-screen transition-colors duration-700`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="qualifications">
        <Qualifications />
      </Element>
      <Element name="certificates">
        <Certificates />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </motion.div>
  )
}

function App() {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  )
}

export default App