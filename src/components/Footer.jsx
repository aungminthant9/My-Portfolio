import { motion } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const { currentColor } = useColor()
  
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/aungminthant9" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/in/yourusername" },
    { icon: FaFacebookF, url: "https://facebook.com/yourusername" }
  ]

  return (
    <footer className="py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 hover:text-white transition-colors"
                style={{ borderColor: currentColor }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: currentColor,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div 
            className="w-24 h-0.5 rounded-full"
            style={{ backgroundColor: currentColor }}
          />

          {/* Copyright */}
          <motion.div 
            className="text-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-500" /> by
              <span style={{ color: currentColor }}>Aung Min Thant</span>
            </p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer