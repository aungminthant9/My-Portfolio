import { motion } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import { FaGraduationCap } from 'react-icons/fa'

const Qualifications = () => {
  const { currentColor } = useColor()

  const education = [
    {
      period: "2024-Present",
      title: "BTEC Pearson Level 4 & 5",
      institution: "Higher National Diploma in Computing",
      description: "Advancing in Software Development and AI/ML"
    },
    {
      period: "2022-2023",
      title: "BTEC Pearson Level 3",
      institution: "National Diploma in Computing",
      description: "Foundation in Software Engineering"
    },
    {
      period: "2020",
      title: "High School",
      institution: "Graduated with Distinctions",
    //   description: "Focused on Science and Technology"
    }
  ]

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: currentColor }}
            >
              Education
            </h2>
            <p className="text-gray-300 text-lg">My Academic Journey</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 rounded-full"
              style={{ backgroundColor: `${currentColor}33` }}
            />

            {/* Timeline items */}
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'
                } md:w-1/2 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl w-full md:w-[calc(100%-2rem)] shadow-xl"
                  style={{ 
                    borderLeft: `4px solid ${currentColor}`,
                    backgroundColor: `${currentColor}08`
                  }}
                >
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: currentColor }}
                    >
                      <FaGraduationCap className="text-white text-sm" />
                    </div>
                  </div>
                  <span 
                    className="text-sm font-semibold mb-2 inline-block px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${currentColor}15`,
                      color: currentColor 
                    }}
                  >
                    {item.period}
                  </span>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: currentColor }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-medium mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Qualifications