import { useEffect, useRef, ReactNode, useState } from 'react'
import { motion, useInView, useAnimation, MotionValue, useMotionValue } from 'framer-motion'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  
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

interface FadeInProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  once = true
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const controls = useAnimation()
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()

  const shouldAnimate = !isMobile && !prefersReduced

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  }

  useEffect(() => {
    if (shouldAnimate && isInView) {
      controls.start("visible")
    } else if (!shouldAnimate) {
      controls.start("visible")
    }
  }, [isInView, controls, shouldAnimate])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0, 
          ...directions[direction] 
        },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode[]
  className?: string
  delay?: number
}

export function Stagger({ children, className = '', delay = 0.1 }: StaggerProps) {
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()
  const shouldAnimate = !isMobile && !prefersReduced

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()
  const shouldAnimate = !isMobile && !prefersReduced

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, className = '' }: ScaleInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()
  const shouldAnimate = !isMobile && !prefersReduced

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()
  const shouldAnimate = !isMobile && !prefersReduced

  const words = text.split(' ')

  if (!shouldAnimate) {
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
    <motion.div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: delay + i * 0.05,
            ease: [0.25, 0.1, 0.25, 1] 
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function FloatingElement({ 
  children, 
  className = '', 
  duration = 6,
  delay = 0 
}: FloatingElementProps) {
  const isMobile = useIsMobile()
  const prefersReduced = useReducedMotion()
  const shouldAnimate = !isMobile && !prefersReduced

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  const mobileDuration = duration * 1.5

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: mobileDuration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: (progress: MotionValue<number>) => ReactNode
  className?: string
}

export function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const progress = useMotionValue(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return

    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height + windowHeight)))
      progress.set(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [progress, isMobile])

  if (isMobile) {
    return (
      <div ref={ref} className={className}>
        {children(progress)}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {children(progress)}
    </div>
  )
}