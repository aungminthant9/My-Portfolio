import { motion } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// Update initialization with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

const Contact = () => {
  const { currentColor } = useColor()
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
        form.current.reset()
      })
      .catch((error) => {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'mgaungminthant1357@gmail.com',
      link: 'mailto:mgaungminthant1357@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+959 960171575',
      link: 'tel:+959960171575'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Yangon, Myanmar',
      link: 'https://maps.google.com/?q=Yangon,Myanmar'
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
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: currentColor }}
            >
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and build something amazing together. 
              Feel free to reach out through any of the following channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl flex items-center gap-6"
                    style={{ borderLeft: `4px solid ${currentColor}` }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${currentColor}15` }}
                    >
                      <info.icon 
                        className="text-xl"
                        style={{ color: currentColor }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: currentColor }}>
                        {info.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{info.content}</p>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <div className="lg:col-span-3">
              <motion.form
                ref={form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 focus:outline-none focus:border-current transition-colors"
                      style={{ '--tw-border-opacity': 1, borderColor: currentColor }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 focus:outline-none focus:border-current transition-colors"
                      style={{ '--tw-border-opacity': 1, borderColor: currentColor }}
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-300">Subject</label>
                  <input
                    type="text"
                    name="title"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 focus:outline-none focus:border-current transition-colors"
                    style={{ '--tw-border-opacity': 1, borderColor: currentColor }}
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 focus:outline-none focus:border-current transition-colors"
                    style={{ '--tw-border-opacity': 1, borderColor: currentColor }}
                  />
                </div>
                
                {submitStatus && (
                  <div className={`mb-4 p-3 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-lg font-medium relative"
                  style={{ 
                    backgroundColor: currentColor,
                    color: currentColor === '#FFFFFF' ? '#1F2937' : 'white'
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </div> // Add this closing div
  )
}

export default Contact