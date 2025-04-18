import { motion, AnimatePresence } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import { useState } from 'react'
import { IoColorPalette } from 'react-icons/io5'

const ColorPicker = () => {
  const { colors, setCurrentColor, currentColor } = useColor()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Color Picker */}
      <motion.div 
        className="fixed bottom-6 left-0 right-0 md:hidden z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-700"
            >
              <div className="grid grid-cols-3 gap-3 p-2">
                {Object.entries(colors).map(([name, color]) => (
                  <motion.button
                    key={name}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl cursor-pointer shadow-lg relative group"
                    style={{ 
                      backgroundColor: color,
                      boxShadow: color === currentColor ? `0 0 20px ${color}80` : 'none'
                    }}
                    onClick={() => {
                      setCurrentColor(color)
                      setIsOpen(false)
                    }}
                  >
                    {color === currentColor && (
                      <motion.div
                        className="absolute inset-0 border-2 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mx-auto flex items-center gap-2 bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: currentColor }}
        >
          <IoColorPalette className="text-2xl" />
          <span className="text-sm font-medium">Theme</span>
        </motion.button>
      </motion.div>

      {/* Desktop Color Picker */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-700"
      >
        <div className="grid grid-cols-1 gap-3 p-2">
          {Object.entries(colors).map(([name, color]) => (
            <motion.button
              key={name}
              whileHover={{ scale: 1.15, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl cursor-pointer shadow-lg relative group"
              style={{ 
                backgroundColor: color,
                boxShadow: color === currentColor ? `0 0 20px ${color}80` : 'none'
              }}
              onClick={() => setCurrentColor(color)}
            >
              {color === currentColor && (
                <motion.div
                  className="absolute inset-0 border-2 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default ColorPicker