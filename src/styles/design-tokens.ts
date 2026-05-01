export const tokens = {
  colors: {
    primary: '#1C1917',
    secondary: '#44403C',
    cta: '#CA8A04',
    ctaLight: '#EAB308',
    ctaDark: '#A16B0F',
    background: '#FAFAF9',
    text: '#0C0A09',
    gold: '#CA8A04',
    goldLight: '#EAB308',
    goldDark: '#A16B0F',
    black: '#0C0A09',
    white: '#FAFAF9',
    cream: '#F5F0E6',
    creamDark: '#F0E8D8',
    brown: {
      dark: '#2A1F14',
      darker: '#1A1208',
      darkest: '#0D0A04',
    },
    goldShades: {
      light: '#E8C040',
      DEFAULT: '#CA8A04',
      dark: '#A16B0F',
      muted: 'rgba(200, 146, 30, 0.8)',
    },
    creamShades: {
      light: '#F5F0E6',
      DEFAULT: '#F0E8D8',
      dark: '#E8E0D0',
    },
  },
  spacing: {
    touchTarget: '44px',
  },
} as const

export const focusStyles = {
  focusVisible: 'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-stone-950',
}

export const reducedMotion = {
  prefersReducedMotion: '@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }',
}
