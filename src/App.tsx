import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Eventos from './pages/Eventos'
import Contato from './pages/Contato'
import Pedido from './pages/Pedido'
import Localizacao from './pages/Localizacao'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
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
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App