import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { filiais, whatsappGeral } from '../data/filiais'

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

function Contato() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)
  const isMobile = useIsMobile()
  const prefersReduced = usePrefersReducedMotion()
  const shouldAnimate = !isMobile && !prefersReduced
  
  const abrirWhatsApp = (mensagem?: string) => {
    const texto = mensagem ? encodeURIComponent(mensagem) : ''
    window.open(`https://wa.me/55${whatsappGeral}?text=${texto}`, '_blank')
  }

  const abrirWhatsAppFilial = (filialId: string) => {
    const filial = filiais.find(f => f.id === filialId)
    if (!filial) return
    const mensagem = encodeURIComponent('Olá! Gostaria de mais informações.')
    window.open(`https://wa.me/55${filial.whatsapp}?text=${mensagem}`, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero Section - Muito mais impactante */}
      <section className="relative bg-primary overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full md:blur-[100px] blur-[50px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={shouldAnimate ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : { opacity: 0.2 }}
            transition={shouldAnimate ? { duration: 6, repeat: Infinity } : { duration: 0 }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full md:blur-[80px] blur-[40px]"
            style={{ background: 'radial-gradient(circle, #EAB308 0%, transparent 70%)' }}
            animate={shouldAnimate ? { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] } : { opacity: 0.15 }}
            transition={shouldAnimate ? { duration: 5, repeat: Infinity } : { duration: 0 }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Resposta em menos de 5 minutos</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Vamos conversar?
            <br />
            <span className="text-gradient-gold">É rapidinho!</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Seja para distribuição de chopp, eventos ou parcerias,
            <br className="hidden sm:block" /> estamos prontos para atender você.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => abrirWhatsApp('Olá! Vim pelo site e gostaria de mais informações sobre os serviços da Imperador do Chopp.')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-green-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-green-500/30 flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
              </svg>
              Falar no WhatsApp Agora
            </motion.button>
            
            <motion.a
              href="#opcoes"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ver Outras Opções
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas de Confiança */}
      <section className="py-12 bg-white relative -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"
          >
            {[
              { numero: '3', label: 'Filiais no Paraná' },
              { numero: '100%', label: 'Qualidade Garantida' },
              { numero: '5min', label: 'Tempo de Resposta' },
              { numero: '24h', label: 'Atendimento' },
            ].map((stat, index) => (
              <div key={index} className="p-6 sm:p-8 text-center">
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold text-gradient-gold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                >
                  {stat.numero}
                </motion.div>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Principais Formas de Contato - Cards grandes e chamativos */}
      <section id="opcoes" className="py-24 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Como podemos te ajudar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Escolha a melhor forma de entrar em contato
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card WhatsApp - Maior e mais chamativo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredContact('whatsapp')}
              onMouseLeave={() => setHoveredContact(null)}
              className={`relative p-8 sm:p-10 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredContact === 'whatsapp' ? 'bg-green-500 scale-[1.02]' : 'bg-green-500/10 border-2 border-green-500/20'
              }`}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-green-400/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <motion.div 
                  animate={{ scale: hoveredContact === 'whatsapp' ? 1.1 : 1 }}
                  className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    hoveredContact === 'whatsapp' ? 'bg-white/20' : 'bg-green-500'
                  }`}
                >
                  <svg className={`w-12 h-12 transition-colors duration-300 ${hoveredContact === 'whatsapp' ? 'text-white' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
                  </svg>
                </motion.div>
                
                <div className="flex-1">
                  <h3 className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${hoveredContact === 'whatsapp' ? 'text-white' : 'text-primary'}`}>
                    WhatsApp
                  </h3>
                  <p className={`mt-2 text-base transition-colors duration-300 ${hoveredContact === 'whatsapp' ? 'text-white/80' : 'text-gray-600'}`}>
                    Resposta imediata, simples e prática. 
                    <br />Clique e já seja atendido!
                  </p>
                  
                  <motion.button
                    onClick={() => abrirWhatsApp()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-6 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      hoveredContact === 'whatsapp' 
                        ? 'bg-white text-green-600 shadow-xl hover:shadow-2xl' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    Iniciar Conversa →
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Card Orçamento */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredContact('orcamento')}
              onMouseLeave={() => setHoveredContact(null)}
              className={`relative p-8 sm:p-10 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredContact === 'orcamento' ? 'bg-cta scale-[1.02]' : 'bg-cta/10 border-2 border-cta/20'
              }`}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl" />
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <motion.div 
                  animate={{ scale: hoveredContact === 'orcamento' ? 1.1 : 1 }}
                  className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    hoveredContact === 'orcamento' ? 'bg-white/20' : 'bg-cta'
                  }`}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </motion.div>
                
                <div className="flex-1">
                  <h3 className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${hoveredContact === 'orcamento' ? 'text-white' : 'text-primary'}`}>
                    Solicitar Orçamento
                  </h3>
                  <p className={`mt-2 text-base transition-colors duration-300 ${hoveredContact === 'orcamento' ? 'text-white/80' : 'text-gray-600'}`}>
                    Precisa de chopp para evento ou festa?
                    <br />Solicite um orçamento personalizado.
                  </p>
                  
                  <motion.a
                    href="/venda"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-6 inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      hoveredContact === 'orcamento' 
                        ? 'bg-white text-cta shadow-xl hover:shadow-2xl' 
                        : 'bg-cta text-white hover:bg-cta-dark'
                    }`}
                  >
                    Fazer Solicitação →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filiais com WhatsApp direto */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Falar com <span className="text-gradient-gold">filial específica</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Cada filial tem seu WhatsApp para atender você mais rápido
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filiais.map((filial, index) => (
              <motion.div
                key={filial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{filial.cidade}</h3>
                    <p className="text-gray-400">{filial.estado}</p>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => abrirWhatsAppFilial(filial.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
                  </svg>
                  Falar com {filial.cidade}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos / Prova Social */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              O que dizem nossos clientes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                texto: "Atendimento excepcional! Fiz a encomenda para o casamento da minha filha e ficou perfeito. Recomendo demais!",
                autor: "Carlos Silva",
                papel: "Cliente - Cascavel"
              },
              {
                texto: "Somos clientes há mais de 3 anos. Qualidade nunca falha e o atendimento é sempre rápido.",
                autor: "Maria Oliveira",
                papel: "Proprietária de Restaurante - Toledo"
              },
              {
                texto: "O chopp mais fresco que já experimentei! Vendas aumentaram desde que troquei para a Imperador.",
                autor: "Roberto Mendes",
                papel: "Bar - Maringá"
              }
            ].map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{depoimento.texto}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{depoimento.autor[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{depoimento.autor}</p>
                    <p className="text-sm text-gray-500">{depoimento.papel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-primary via-primary to-gray-900 overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-60 h-60 bg-cta/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Nossa equipe está pronta para te ajudar!
              </p>
              
              <motion.button
                onClick={() => abrirWhatsApp('Olá! Ainda tenho algumas dúvidas sobre os serviços da Imperador do Chopp.')}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-green-500 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-green-500/30 inline-flex items-center gap-4"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
                </svg>
                Chamar no WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contato