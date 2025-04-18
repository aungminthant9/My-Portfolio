import { motion } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import car from "../assets/car_sale.png"
import lifesync from "../assets/lifesync.png"

const Projects = () => {
  const { currentColor } = useColor()

  const projects = [
    {
      title: "LifeSync AI",
      description: "LifeSync AI is a cutting-edge wellness platform that combines artificial intelligence with personalized fitness tracking to help users achieve their health and fitness goals. The application features an AI-powered assistant that provides real-time guidance, a comprehensive activity tracker for monitoring various health metrics, and an innovative posture detection system using TensorFlow.js..",
      technologies: ["React.js", "TensorFlow", "Hugging Face", "Firebase", "Tailwind CSS","Framer Motion"],
      github: "https://github.com/aungminthant9/LifeSync",
      live: "https://www.youtube.com/embed/7PQVDmd87-A",
      image: lifesync
    },
    {
      title: "Used Car Sale Portal",
      description: "This is a modern web application built with Laravel for managing and facilitating car sales. The application provides a platform for users to list, browse, and purchase used cars with a user-friendly interface and robust backend functionality.",
      technologies: ["Blade", "Tailwind CSS","JavaScript", "PHP", "Laravel", "MySQL", "Laravel Breeze"],
      github: "https://github.com/aungminthant9/car_sale_app",
      live: "https://www.youtube.com/embed/z33xW9uMv1Y",
      image: car
    },
    // Add more projects as needed
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: currentColor }}
            >
              My Recent Projects
            </h2>
            <p className="text-gray-300 text-lg">Showcasing my recent work</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-transparent transition-colors duration-300 h-full flex flex-col"
                     style={{ borderColor: `${currentColor}20` }}>
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain bg-slate-900/50"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="flex gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                          style={{ boxShadow: `0 0 10px ${currentColor}40` }}
                        >
                          <FaGithub className="text-white text-xl" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                          style={{ boxShadow: `0 0 10px ${currentColor}40` }}
                        >
                          <FaExternalLinkAlt className="text-white text-lg" />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <motion.h3 
                      className="text-2xl font-bold mb-3"
                      style={{ color: currentColor }}
                      whileHover={{ x: 10 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 mb-6 flex-grow line-clamp-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: `${currentColor}15`,
                            color: currentColor
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: `${currentColor}30`
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors"
                        style={{ borderColor: currentColor }}
                      >
                        <FaGithub className="text-lg" />
                        <span>GitHub</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                        style={{ 
                          backgroundColor: currentColor,
                          color: currentColor === '#FFFFFF' ? '#000000' : '#FFFFFF'
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.live.replace('/embed/', '/watch?v='), '_blank');
                        }}
                      >
                        <FaPlay className="text-sm" />
                        <span>Watch Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects