import { useEffect, useRef, ReactNode, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return isMobile
}

function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])
  
  return prefersReduced
}

interface GSAPFadeInProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function GSAPFadeIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  className = '',
  threshold = -100
}: GSAPFadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return
    if (isMobile || prefersReduced) return

    const ctx = gsap.context(() => {
      const directions: Record<string, { y: number; x: number }> = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { x: 60, y: 0 },
        right: { x: -60, y: 0 },
        none: { x: 0, y: 0 }
      }

      gsap.fromTo(
        ref.current,
        { 
          opacity: 0, 
          ...directions[direction],
          willChange: 'transform, opacity'
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [direction, delay, duration, isMobile, prefersReduced, threshold])

  return (
    <div ref={ref} className={className} style={{ opacity: isMobile || prefersReduced ? 1 : 0 }}>
      {children}
    </div>
  )
}

interface GSAPStaggerProps {
  children: ReactNode[]
  className?: string
  stagger?: number
  delay?: number
}

export function GSAPStagger({ children, className = '', stagger = 0.1, delay = 0 }: GSAPStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return
    if (isMobile || prefersReduced) return

    const ctx = gsap.context(() => {
      const items = ref.current?.children
      if (!items) return

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%'
          }
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [stagger, delay, isMobile, prefersReduced])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

interface GSAPScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function GSAPScaleIn({ children, delay = 0, duration = 0.6, className = '' }: GSAPScaleInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return
    if (isMobile || prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%'
          }
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, duration, isMobile, prefersReduced])

  return (
    <div ref={ref} className={className} style={{ opacity: isMobile || prefersReduced ? 1 : 0, scale: isMobile || prefersReduced ? 1 : 0.85 }}>
      {children}
    </div>
  )
}

interface GSAPCounterProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function GSAPCounter({ end, duration = 2, className = '', suffix = '', prefix = '' }: GSAPCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return
    if (isMobile || prefersReduced) {
      if (ref.current) ref.current.textContent = `${prefix}${end}${suffix}`
      return
    }

    const ctx = gsap.context(() => {
      const obj = { value: 0 }
      gsap.to(obj, {
        value: end,
        duration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(obj.value)}${suffix}`
          }
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [end, duration, isMobile, prefersReduced, prefix, suffix])

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}

interface GSAPTextRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function GSAPTextReveal({ text, className = '', delay = 0, stagger = 0.03 }: GSAPTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()
  const words = text.split(' ')

  useEffect(() => {
    if (!ref.current) return
    if (isMobile || prefersReduced) return

    const ctx = gsap.context(() => {
      const spans = ref.current?.querySelectorAll('span')
      if (!spans) return

      gsap.fromTo(
        spans,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%'
          }
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, stagger, isMobile, prefersReduced])

  if (isMobile || prefersReduced) {
    return (
      <div className={className}>
        {words.map((word, i) => (
          <span key={i} style={{ display: 'inline-block', marginRight: '0.3em' }}>
            {word}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', marginRight: '0.3em', opacity: 0 }}>
          {word}
        </span>
      ))}
    </div>
  )
}

interface GSAPPageTransitionProps {
  children: ReactNode
  className?: string
}

export function GSAPPageTransition({ children, className = '' }: GSAPPageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return
    if (isMobile || prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    }, ref)

    return () => ctx.revert()
  }, [isMobile, prefersReduced])

  if (isMobile || prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

interface GSAPScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
}

export function GSAPScrollReveal({ children, className = '', direction = 'up', delay = 0 }: GSAPScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return
    if (isMobile || prefersReduced) return

    const ctx = gsap.context(() => {
      const initialState: gsap.TweenVars = { opacity: 0 }
      
      switch (direction) {
        case 'up':
          initialState.y = 40
          break
        case 'left':
          initialState.x = 40
          break
        case 'right':
          initialState.x = -40
          break
        case 'scale':
          initialState.scale = 0.9
          break
      }

      gsap.fromTo(
        ref.current,
        initialState,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            once: true
          }
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [direction, delay, isMobile, prefersReduced])

  return (
    <div ref={ref} className={className} style={{ opacity: isMobile || prefersReduced ? 1 : 0 }}>
      {children}
    </div>
  )
}

export { ScrollTrigger, gsap }