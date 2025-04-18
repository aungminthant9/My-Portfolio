import { motion } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import nextjs from '../assets/nextjs.jpg'
import numpy from '../assets/numpy_pandas.jpg'
import sql from '../assets/sql.png'
import tailwind from '../assets/tailwind.jpg'
import simbolo from '../assets/simbolo_certificate.png'

const Certificates = () => {
  const { currentColor } = useColor()

  const certificates = [
    { 
      title: "NumPy & Pandas Mastery", 
      image: numpy,
      link: "https://www.udemy.com/certificate/UC-1703a399-6316-415f-bc7d-04ade1fef924/"
    },
    { 
      title: "Simbolo Achievement", 
      image: simbolo,
      link: "#"
    },
    { 
      title: "Next.js Development", 
      image: nextjs,
      link: "https://www.udemy.com/certificate/UC-fa3c0aed-0532-487b-a3af-7934e07d584b/"
    },
    { 
      title: "SQL Database Management", 
      image: sql,
      link: "https://www.udemy.com/certificate/UC-22d8176a-59a3-4d91-bb1d-791467c3d19e/"
    },
    { 
      title: "Tailwind CSS Expert", 
      image: tailwind,
      link: "https://www.udemy.com/certificate/UC-642fd2fe-dd5f-4d94-bbfd-1b2313c43e42/"
    }
  ]

  return (
    <div className="min-h-screen py-20">
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
              My Certificates
            </h2>
            <p className="text-gray-300 text-lg">Professional achievements and certifications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => cert.link && window.open(cert.link, '_blank')}
              >
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full rounded-lg shadow-xl"
                  style={{ 
                    boxShadow: `0 0 20px ${currentColor}30`
                  }}
                  whileHover={{ 
                    boxShadow: `0 0 30px ${currentColor}50`,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center"
                >
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certificates