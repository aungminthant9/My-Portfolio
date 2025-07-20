import { motion } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import ColorPicker from '../components/ColorPicker'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import photome from '../assets/me2.png'
import resumePDF from '../assets/aungminthant_resume.pdf' // Add this import

const Hero = () => {
  const { currentColor } = useColor()

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/aungminthant9" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/aung-min-thant-thant-24715b376/" },
    { icon: FaFacebookF, url: "https://facebook.com/yourusername" }
  ]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'aungminthant_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-hidden">
      {/* Background Animation - Optimize performance */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-current to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ color: currentColor }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-l from-current to-transparent rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ color: currentColor }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6 text-center md:text-left md:pl-8 lg:pl-12 xl:pl-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">
            Hi, I'm <span style={{ color: currentColor }}>Aung Min Thant</span>
          </h1>
          <div className="text-lg sm:text-xl text-gray-300 h-8">
            <TypeAnimation
              sequence={[
                'AI/ML Enthusiast',
                1000,
                'Full Stack Developer',
                1000,
                'Software Engineer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-300">
            AI/ML Enthusiast & Full Stack Developer
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base cursor-pointer"
              style={{ 
                backgroundColor: currentColor,
                color: currentColor === '#FFFFFF' ? '#1F2937' : 'white'
              }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer"
              >
                Get In Touch
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 text-sm sm:text-base"
              style={{ borderColor: currentColor }}
              onClick={handleDownload}
            >
              Download Resume
            </motion.button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 hover:text-white transition-colors"
                style={{ borderColor: currentColor }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: currentColor,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-lg sm:text-xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-6 sm:py-10 md:py-0"
        >
          <div className="flame-border" style={{ color: currentColor }}>
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 20px ${currentColor}`,
                  `0 0 40px ${currentColor}`,
                  `0 0 20px ${currentColor}`
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 bg-slate-800/50 backdrop-blur-sm flex items-center justify-center relative z-10"
              style={{ borderColor: currentColor }}
            >
              <motion.img 
                src={photome}
                alt="Aung Min Thant"
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
        <ColorPicker />
      </div>
    </div>
  )
}

export default Hero
