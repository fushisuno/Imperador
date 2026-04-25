import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/produtos', label: 'Produtos' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/eventos', label: 'Eventos' },
  { path: '/localizacao', label: 'Localização' },
  { path: '/contato', label: 'Contato' },
]

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const linkVariants = {
  closed: { opacity: 0, x: 50 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
  })
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13,10,4,0.98)', backdropFilter: 'blur(12px)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 border-b" style={{ borderColor: 'rgba(200,146,30,0.2)' }}>
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <motion.img 
                src="/imperador_logo.png"
                alt="Imperador do Chopp"
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(30%) hue-rotate(5deg)' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="px-4 py-2 font-medium text-sm relative group"
                    style={{ 
                      fontFamily: 'Oswald, sans-serif',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span 
                      className="relative z-10 transition-colors duration-300"
                      style={{ 
                        color: location.pathname === link.path ? '#c8921e' : 'rgba(232,224,208,0.8)',
                      }}
                    >
                      {link.label}
                    </span>
                    
                    {/* Hover background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: 'rgba(200,146,30,0.1)',
                        border: location.pathname === link.path ? 'none' : '1px solid rgba(200,146,30,0.2)',
                      }}
                    ></div>
                    
                    {/* Hover underline */}
                    <div 
                      className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ backgroundColor: '#c8921e' }}
                    ></div>
                    
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5"
                        style={{ backgroundColor: '#c8921e' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/venda"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 font-semibold transition-all duration-300 hover:brightness-110"
                style={{ 
                  backgroundColor: '#c8921e',
                  color: '#2a1f14',
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '1px',
                  clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Orçamento
              </Link>

              <motion.button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(!isMenuOpen)
                }}
                className="lg:hidden p-2 relative overflow-hidden"
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-6 h-6">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="absolute left-0 w-6 h-0.5 rounded-full"
                    style={{ top: '2px', backgroundColor: '#e8e0d0' }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute left-0 w-6 h-0.5 rounded-full"
                    style={{ top: '10px', backgroundColor: '#e8e0d0' }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="absolute left-0 w-6 h-0.5 rounded-full"
                    style={{ top: '18px', backgroundColor: '#e8e0d0' }}
                  />
                </div>
              </motion.button>
</div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: 'rgba(13,10,4,0.8)', backdropFilter: 'blur(4px)' }}
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setIsMenuOpen(false)
              }}
              role="button"
              tabIndex={0}
              aria-label="Fechar menu"
            />
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-[300px] z-50 lg:hidden shadow-2xl"
              style={{ backgroundColor: '#2a1f14' }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-12">
                  <img 
                    src="/imperador_logo.png"
                    alt="Imperador do Chopp"
                    className="h-10 w-auto"
                    style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(30%) hue-rotate(5deg)' }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setIsMenuOpen(false)
                    }}
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ color: 'rgba(232,224,208,0.6)' }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      custom={i}
                      variants={linkVariants}
                    >
                      <Link
                        to={link.path}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          setIsMenuOpen(false)
                        }}
                        className="block px-4 py-3 font-medium transition-all duration-300 group"
                        style={{ 
                          fontFamily: 'Oswald, sans-serif',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          backgroundColor: location.pathname === link.path ? '#c8921e' : 'transparent',
                          color: location.pathname === link.path ? '#2a1f14' : 'rgba(232,224,208,0.8)',
                          borderRadius: 0,
                        }}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ 
                            backgroundColor: location.pathname === link.path ? 'transparent' : 'rgba(200,146,30,0.1)',
                          }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(200,146,30,0.2)' }}>
                  <Link
                    to="/venda"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 font-semibold transition-all duration-300 hover:brightness-110"
                    style={{ 
                      backgroundColor: '#c8921e',
                      color: '#2a1f14',
                      fontFamily: 'Oswald, sans-serif',
                      letterSpacing: '1px',
                      clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header