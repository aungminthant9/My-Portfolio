import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaNodeJs, FaPhp, FaLaravel, FaDocker, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { BiBrain } from 'react-icons/bi'
import { useColor } from '../context/ColorContext'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const { currentColor } = useColor()

  const skills = [
    { name: 'HTML', level: '90%', color: '#E34F26', icon: FaHtml5 },
    { name: 'CSS', level: '85%', color: '#1572B6', icon: FaCss3Alt },
    { name: 'JavaScript', level: '85%', color: '#F7DF1E', icon: FaJs },
    { name: 'Python', level: '80%', color: '#3776AB', icon: FaPython },
    { name: 'React', level: '85%', color: '#61DAFB', icon: FaReact },
    { name: 'Tailwind CSS', level: '90%', color: '#06B6D4', icon: SiTailwindcss },
    { name: 'Node.js', level: '75%', color: '#339933', icon: FaNodeJs },
    { name: 'PHP', level: '80%', color: '#777BB4', icon: FaPhp },
    { name: 'Laravel', level: '80%', color: '#FF2D20', icon: FaLaravel },
    { name: 'SQL', level: '85%', color: '#4479A1', icon: FaDatabase },
    { name: 'Docker', level: '40%', color: '#2496ED', icon: FaDocker },
    { name: 'AI/ML', level: '40%', color: '#FF6B6B', icon: BiBrain }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
          <h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ color: currentColor }}
          >
            Technical Skills
          </h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
                style={{
                  boxShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}33` : 'none',
                  border: `1px solid ${skill.color}33`
                }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl group-hover:text-4xl transition-all duration-300"
                      style={{ color: skill.color }}
                    >
                      {<skill.icon />}
                    </motion.div>
                    <h3 className="text-xl font-bold group-hover:text-2xl transition-all duration-300">{skill.name}</h3>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span 
                          className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full"
                          style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                        >
                          Proficiency
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block" style={{ color: skill.color }}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-700/50"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </motion.div>
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

export default Skills