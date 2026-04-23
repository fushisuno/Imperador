import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn, FloatingElement, TextReveal } from '../components/Animations'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Chopp Premium',
    description: 'Cerveja artesanal de alta qualidade, servida gelada na pressão para manter o sabor perfeito.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Atendimento Especializado',
    description: 'Equipe treinada para garantir a melhor experiência no seu evento.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Entrega Pontual',
    description: 'Compromisso com a pontualidade na entrega do produto e montagem do bar.',
  },
]

const services = [
  {
    title: 'Distribuidora',
    description: 'Fornecemos chopp para bares e restaurantes. Qualidade garantida em cada entrega.',
    link: '/contato',
    cta: 'Ser Distribuidor',
  },
  {
    title: 'Eventos',
    description: 'Chopp completo para casamentos, festas corporativas e eventos particulares.',
    link: '/venda',
    cta: 'Solicitar Orçamento',
  },
]

function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="pt-20">
      {/* Hero Section - Glassmorphism Fluido */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, #EAB308 0%, transparent 70%)' }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{ background: 'radial-gradient(circle, #44403C 0%, transparent 70%)' }}
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Floating Elements */}
        <FloatingElement className="absolute top-32 left-[10%] w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm" duration={8} delay={0}>
          <div className="w-full h-full rounded-2xl border border-white/20"></div>
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 right-[15%] w-16 h-16 rounded-full bg-cta/20 backdrop-blur-sm" duration={7} delay={1}>
          <div className="w-full h-full rounded-full border border-cta/30"></div>
        </FloatingElement>
        <FloatingElement className="absolute top-1/4 right-[20%] w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm" duration={9} delay={2}>
          <div className="w-full h-full rounded-xl border border-white/10"></div>
        </FloatingElement>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div style={{ y: y1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-cta text-sm font-medium mb-6 border border-white/20"
              >
                <motion.span 
                  className="w-2 h-2 bg-cta rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Premium Quality
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                <TextReveal text="O Melhor Chopp" delay={0.1} />
                <span className="block text-gradient-gold mt-2">
                  <TextReveal text="está aqui!" delay={0.3} />
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6 text-xl text-gray-300 max-w-xl leading-relaxed"
              >
                Distribuidora de chopp premium com tradição e qualidade. 
                Atendemos Cascavel, Toledo e Maringá com excelência em cada dose.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/venda" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-white rounded-2xl font-semibold text-lg shadow-lg shadow-cta/30 hover:bg-cta-dark transition-all duration-300">
                    Solicitar Orçamento
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/produtos" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                    Ver Produtos
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Animated Beer Glass */}
            <motion.div style={{ y: y2, opacity }} className="hidden lg:block">
              <div className="relative">
                <motion.div
                  className="absolute -inset-16 bg-gradient-to-r from-cta/30 via-cta-light/20 to-cta/30 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="relative w-80 h-96 mx-auto"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {/* Beer Glass SVG */}
                  <svg viewBox="0 0 200 300" className="w-full h-full">
                    <defs>
                      <linearGradient id="beerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#EAB308" />
                        <stop offset="100%" stopColor="#CA8A04" />
                      </linearGradient>
                      <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Glass */}
                    <path
                      d="M40 20 L20 280 Q20 295 35 295 L165 295 Q180 295 180 280 L160 20 Q160 5 145 5 L55 5 Q40 5 40 20Z"
                      fill="url(#glassGradient)"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                    />
                    
                    {/* Beer */}
                    <motion.path
                      d="M45 50 L30 275 Q30 285 42 285 L158 285 Q170 285 170 275 L155 50 Q155 35 142 35 L58 35 Q45 35 45 50Z"
                      fill="url(#beerGradient)"
                      filter="url(#glow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    
                    {/* Foam */}
                    <motion.g
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                    >
                      <ellipse cx="100" cy="35" rx="45" ry="15" fill="white" opacity="0.9" />
                      <ellipse cx="70" cy="40" rx="25" ry="12" fill="white" opacity="0.8" />
                      <ellipse cx="130" cy="40" rx="25" ry="12" fill="white" opacity="0.8" />
                      <circle cx="60" cy="38" r="10" fill="white" opacity="0.7" />
                      <circle cx="140" cy="38" r="10" fill="white" opacity="0.7" />
                      <circle cx="100" cy="30" r="12" fill="white" opacity="0.8" />
                    </motion.g>
                    
                    {/* Bubbles */}
                    <motion.g>
                      {[...Array(8)].map((_, i) => (
                        <motion.circle
                          key={i}
                          cx={60 + Math.random() * 80}
                          cy={100 + i * 20}
                          r={2 + Math.random() * 3}
                          fill="white"
                          opacity={0.6}
                          initial={{ y: 200, opacity: 0 }}
                          animate={{ 
                            y: [200, 50 + i * 10],
                            opacity: [0, 0.6, 0]
                          }}
                          transition={{ 
                            duration: 3 + Math.random() * 2,
                            delay: 1 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.g>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div 
              className="w-1.5 h-3 bg-cta rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Fundo claro para alternar */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-cta/10 rounded-full text-cta text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 bg-cta rounded-full animate-pulse"></span>
                O que oferecemos
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary">
                Nossos <span className="text-cta">Serviços</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Qualidade premium e tradição em cada atendimento. Veja o que temos para você.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card Distribuidora */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-cta/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cta/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <motion.div 
                  className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">{services[0].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{services[0].description}</p>
                
                <Link
                  to={services[0].link}
                  className="inline-flex items-center gap-2 text-cta font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {services[0].cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Card Eventos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-cta/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cta/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <motion.div 
                  className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">{services[1].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{services[1].description}</p>
                
                <Link
                  to={services[1].link}
                  className="inline-flex items-center gap-2 text-cta font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {services[1].cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Fundo com tom dourado sutil */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cta/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cta/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-cta/10 rounded-full text-cta text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 bg-cta rounded-full animate-pulse"></span>
                Nossa qualidade
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary">
                Por Que Escolher a <span className="text-cta">Imperador?</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Experiência premium e atendimento diferenciado para seu evento
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cta/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cta to-cta-light flex items-center justify-center mb-6 shadow-lg shadow-cta/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-cta transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cta to-cta-light rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fundo branco para destacar do footer */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              Pronto para tornar seu evento inesquecível?
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Entre em contato agora e solicite seu orçamento personalizado.
            </p>
          </FadeIn>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/venda" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-white rounded-2xl font-semibold text-lg">
                Solicitar Orçamento
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/localizacao" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white border-2 border-primary rounded-2xl font-semibold text-lg hover:bg-secondary">
                Ver Localização
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home