import { createContext, useContext, ReactNode } from 'react'

export const theme = {
  colors: {
    primary: '#1C1917',
    secondary: '#44403C',
    cta: '#CA8A04',
    ctaLight: '#EAB308',
    background: '#FAFAF9',
    text: '#0C0A09',
    gold: '#CA8A04',
    goldLight: '#EAB308',
    goldDark: '#A16207',
    black: '#0C0A09',
    white: '#FAFAF9',
  },
  fonts: {
    sans: ['DM Sans', 'sans-serif'],
  },
  animations: {
    float: 'float 6s ease-in-out infinite',
    pulseSlow: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
}

export const themeStyles = {
  colors: {
    primary: { bg: 'bg-primary', text: 'text-primary', border: 'border-primary' },
    secondary: { bg: 'bg-secondary', text: 'text-secondary', border: 'border-secondary' },
    cta: { bg: 'bg-cta', text: 'text-cta', border: 'border-cta' },
    ctaLight: { bg: 'bg-cta-light', text: 'text-cta-light', border: 'border-cta-light' },
    background: { bg: 'bg-background', text: 'text-background', border: 'border-background' },
    text: { bg: 'bg-text', text: 'text-text', border: 'border-text' },
    gold: { bg: 'bg-gold', text: 'text-gold', border: 'border-gold' },
    goldLight: { bg: 'bg-gold-light', text: 'text-gold-light', border: 'border-gold-light' },
    goldDark: { bg: 'bg-gold-dark', text: 'text-gold-dark', border: 'border-gold-dark' },
    black: { bg: 'bg-black', text: 'text-black', border: 'border-black' },
    white: { bg: 'bg-white', text: 'text-white', border: 'border-white' },
  },
}

const ThemeContext = createContext<typeof theme | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function useThemeColor(colorKey: keyof typeof theme.colors) {
  return theme.colors[colorKey]
}

export function useThemeStyles(colorKey: keyof typeof themeStyles.colors) {
  return themeStyles.colors[colorKey]
}