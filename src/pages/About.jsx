import { motion } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import { FaFilm, FaLaptopCode, FaPodcast, FaBrain } from 'react-icons/fa'

const About = () => {
  const { currentColor } = useColor()

  const interests = [
    { icon: FaLaptopCode, text: "Full Stack Development" },
    { icon: FaBrain, text: "AI/ML Engineering" },
    { icon: FaFilm, text: "Movies" },
    { icon: FaPodcast, text: "Tech Podcasts" },
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
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: currentColor }}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300">
                I'm a 20-year-old Full Stack Developer with a passion for turning ideas into functional, elegant digital solutions. Currently pursuing my BTEC Pearson Level 5 Diploma, I'm also diving deep into AI/ML, driven by the goal of transitioning into an AI/ML Engineering role.
              </p>
              <p className="text-lg text-gray-300">
                My days revolve around coding, problem-solving, and experimenting with machine learning frameworks like TensorFlow. While I build robust web applications today, I'm actively learning AI concepts—from neural networks to predictive models—to create smarter, adaptive systems tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300">
                When offline, I recharge with movies, open-source projects, or geeking out over tech podcasts. Let's connect if you're as excited about AI's potential as I am!
              </p>
              <p className="text-lg text-gray-300">
                Always open to collaborations, learning opportunities, or a coffee chat about tech!
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg flex items-center gap-3"
                    style={{ backgroundColor: `${currentColor}15` }}
                  >
                    <interest.icon 
                      className="text-2xl"
                      style={{ color: currentColor }}
                    />
                    <span className="text-gray-300">{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            <div 
              className="p-6 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: `${currentColor}10`,
                borderLeft: `4px solid ${currentColor}`
              }}
            >
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: currentColor }}
              >
                Current Focus
              </h3>
              <p className="text-gray-300">
                BTEC Pearson Level 5 Diploma
                <br />
                AI/ML Engineering Transition
                <br />
                Full Stack Development
              </p>
            </div>
            <div 
              className="p-6 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: `${currentColor}10`,
                borderLeft: `4px solid ${currentColor}`
              }}
            >
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: currentColor }}
              >
                Tech Stack
              </h3>
              <p className="text-gray-300">
                Web Technologies
                <br />
                Machine Learning Frameworks
                <br />
                Neural Networks
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About