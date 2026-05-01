import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Eventos from './pages/Eventos'
import Contato from './pages/Contato'
import Pedido from './pages/Pedido'
import Localizacao from './pages/Localizacao'
import Componentes from './pages/Componentes'
import NotFound from './pages/404'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [location.pathname])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(13,10,4,0.95)' }}
    >
      <div className="text-center">
        <div className="w-12 h-12 border-3 border-t-[#c8921e] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <span className="text-sm uppercase tracking-widest" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>
          Carregando
        </span>
      </div>
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/componentes" element={<Componentes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <PageLoader />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cta focus:text-black focus:font-semibold focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App