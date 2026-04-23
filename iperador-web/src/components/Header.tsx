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
        <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-white/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <motion.div 
                className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 5.5A.5.5 0 0 1 5.5 5H6v6.5a2 2 0 0 1-2 2h-1v3a3 3 0 0 1-3 3H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V6h.5A.5.5 0 0 1 5 5.5zM8 8.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3zm6.5.5a.5.5 0 0 0-.5-.5V4a1 1 0 0 0-1-1h-1a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3z"/>
                </svg>
              </motion.div>
              <span className="font-bold text-xl text-primary hidden sm:block">
                Imperador<span className="text-cta">do Chopp</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-cta'
                      : 'text-primary hover:text-cta'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-cta/10 rounded-lg"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/venda"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-cta text-white rounded-xl font-semibold hover:bg-cta-dark transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
                </svg>
                Orçamento
              </Link>

              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 relative overflow-hidden"
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-6 h-6">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="absolute left-0 w-6 h-0.5 bg-primary rounded-full"
                    style={{ top: '2px' }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute left-0 w-6 h-0.5 bg-primary rounded-full"
                    style={{ top: '10px' }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="absolute left-0 w-6 h-0.5 bg-primary rounded-full"
                    style={{ top: '18px' }}
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-bold text-xl text-primary">
                    Imperador<span className="text-cta">do Chopp</span>
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-medium transition-colors duration-300 ${
                          location.pathname === link.path
                            ? 'bg-cta text-white'
                            : 'text-primary hover:bg-cta/10 hover:text-cta'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <Link
                    to="/venda"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-cta text-white rounded-xl font-semibold"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
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