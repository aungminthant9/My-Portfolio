import { createContext, useState, useContext } from 'react'

const ColorContext = createContext()

export const ColorProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState('#3B82F6')

  const themes = {
    white: {
      color: '#FFFFFF',
      gradient: 'from-slate-900 to-gray-800'
    },
    blue: {
      color: '#3B82F6',
      gradient: 'from-slate-900 to-blue-900'
    },
    red: {
      color: '#EF4444',
      gradient: 'from-slate-900 to-red-900'
    },
    yellow: {
      color: '#F59E0B',
      gradient: 'from-slate-900 to-amber-900'
    },
    green: {
      color: '#10B981',
      gradient: 'from-slate-900 to-green-900'
    },
    purple: {
      color: '#8B5CF6',
      gradient: 'from-slate-900 to-purple-900'
    }
  }

  const colors = Object.fromEntries(
    Object.entries(themes).map(([key, value]) => [key, value.color])
  )

  const getCurrentTheme = () => {
    return Object.values(themes).find(theme => theme.color === currentColor) || themes.blue
  }

  return (
    <ColorContext.Provider value={{ currentColor, setCurrentColor, colors, getCurrentTheme }}>
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => useContext(ColorContext)