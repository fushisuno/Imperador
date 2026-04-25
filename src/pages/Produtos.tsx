import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { produtos } from '../data/produtos'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function usePrefersReducedMotion() {
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

const categorias = ['Todos', 'Chopp', 'Barril', 'Acessórios']

const categoryColors: Record<string, string> = {
  'Chopp': 'from-amber-500 to-orange-600',
  'Barril': 'from-blue-500 to-indigo-600',
  'Acessórios': 'from-purple-500 to-pink-600',
}

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')
  const isMobile = useIsMobile()
  const prefersReduced = usePrefersReducedMotion()
  const shouldAnimate = !isMobile && !prefersReduced

  const produtosFiltrados = categoriaSelecionada === 'Todos'
    ? produtos
    : produtos.filter((p) => p.categoria === categoriaSelecionada)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-cta rounded-full md:blur-3xl blur-xl"
            animate={shouldAnimate ? { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] } : { opacity: 0.2 }}
            transition={shouldAnimate ? { duration: 6, repeat: Infinity } : { duration: 0 }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-cta-light rounded-full md:blur-3xl blur-xl"
            animate={shouldAnimate ? { scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] } : { opacity: 0.15 }}
            transition={shouldAnimate ? { duration: 5, repeat: Infinity } : { duration: 0 }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-cta/20 rounded-full text-cta text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-cta rounded-full animate-pulse"></span>
              Premium Collection
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Nossos <span className="text-gradient-gold">Produtos</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              Qualidade premium em cada produto. Escolha o perfeito para seu evento.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white sticky top-20 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  categoriaSelecionada === categoria
                    ? 'text-white'
                    : 'bg-gray-100 text-primary hover:bg-gray-200'
                }`}
              >
                {categoriaSelecionada === categoria && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${categoryColors[categoria] || 'from-cta to-cta-light'}`}
                    layoutId="activeFilter"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{categoria}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid - Cards Premium */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {produtosFiltrados.map((produto, index) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Principal */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Imagem com sobreposição */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Badge categoria */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${categoryColors[produto.categoria] || 'from-cta to-cta-light'} rounded-full text-sm font-semibold text-white shadow-lg`}>
                        {produto.categoria}
                      </span>
                    </div>

                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary group-hover:text-cta transition-colors duration-300">
                          {produto.nome}
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {produto.descricao}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {produto.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gradient-to-r from-cta/10 to-cta-light/10 border border-cta/20 rounded-full text-xs font-medium text-cta"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Preço e CTA */}
                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">A partir de</p>
                        <p className="text-2xl font-bold text-cta">{produto.preco.replace('A partir de ', '')}</p>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/venda"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cta to-cta-light text-white rounded-xl font-semibold shadow-lg shadow-cta/30 hover:shadow-xl hover:shadow-cta/40 transition-all duration-300"
                        >
                          Solicitar
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Borda premium no hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cta/30 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Sombra decorativa */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-black/10 blur-xl rounded-full group-hover:blur-2xl group-hover:w-3/4 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA - Fundo branco para variar */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cta/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Precisa de ajuda para escolher?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nossa equipe está pronta para ajudar a encontrar o produto perfeito para seu evento.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/venda" className="px-8 py-4 bg-cta text-white rounded-2xl font-semibold text-lg shadow-lg shadow-cta/30 hover:bg-cta-dark transition-all">
              Solicitar Orçamento
            </Link>
            <Link to="/contato" className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-secondary transition-all">
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Produtos