import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

export function useReducedMotion() {
  const shouldReduceMotion = useFramerReducedMotion()

  return {
    shouldReduceMotion,
    isMobile: typeof window !== 'undefined' && window.innerWidth < 768,
    shouldAnimate: !shouldReduceMotion && typeof window !== 'undefined' && window.innerWidth >= 768,
  }
}

export function useMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}