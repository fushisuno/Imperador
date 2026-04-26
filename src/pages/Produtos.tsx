import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useMedia'

const products = [
  {
    id: 1,
    name: 'Chopp Pilsen',
    category: 'Chopp',
    ibu: 12,
    abv: '4.8%',
    temperature: '0–4°C',
    badge: 'Mais pedido',
    badgeType: 'primary',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
    volumes: ['30L', '50L', 'Chopp'],
  },
  {
    id: 2,
    name: 'Chopp Weiss',
    category: 'Chopp',
    ibu: 14,
    abv: '5.2%',
    temperature: '2–5°C',
    badge: null,
    badgeType: 'primary',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=500&h=400&fit=crop',
    volumes: ['30L', '50L'],
  },
  {
    id: 3,
    name: 'Chopp Escuro',
    category: 'Chopp',
    ibu: 28,
    abv: '5.8%',
    temperature: '3–6°C',
    badge: 'Premium',
    badgeType: 'dark',
    image: 'https://images.unsplash.com/photo-1608855238291-c3e3e939c8b7?w=500&h=400&fit=crop',
    volumes: ['30L', '50L'],
  },
  {
    id: 4,
    name: 'Chopp Rosé',
    category: 'Chopp',
    ibu: 8,
    abv: '4.5%',
    temperature: '0–4°C',
    badge: null,
    badgeType: 'primary',
    image: 'https://images.unsplash.com/photo-1575037614876-c38a4c44f5bd?w=500&h=400&fit=crop',
    volumes: ['30L', '50L', 'Chopp'],
  },
  {
    id: 5,
    name: 'Chopp IPA',
    category: 'Chopp',
    ibu: 45,
    abv: '6.2%',
    temperature: '2–5°C',
    badge: 'Intenso',
    badgeType: 'primary',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67deb?w=500&h=400&fit=crop',
    volumes: ['30L', '50L'],
  },
  {
    id: 6,
    name: 'Chopp Zero',
    category: 'Chopp',
    ibu: 10,
    abv: '0%',
    temperature: '0–4°C',
    badge: 'Sem álcool',
    badgeType: 'dark',
    image: 'https://images.unsplash.com/photo-1584195616901-4c6c1a8c3e2c?w=500&h=400&fit=crop',
    volumes: ['30L', '50L', 'Chopp'],
  },
]

const equipment = [
  {
    id: 1,
    name: 'Chopeiro 2 Vias',
    subtitle: 'Serviço Simultâneo',
    description: 'Serve duas variações de chopp ao mesmo tempo com controle independente de temperatura.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 3H3m2 0h14v14H3V3zm2 0v14m8-14v14m0-14v14" />
      </svg>
    ),
    isCta: false,
  },
  {
    id: 2,
    name: 'Barril 30 Litros',
    subtitle: 'Capacidade Padrão',
    description: 'Barril de alta pressão com válvula profissional e sistema de CO2 integrado.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4l8-4M4 7v10m8-4v4" />
      </svg>
    ),
    isCta: false,
  },
  {
    id: 3,
    name: 'Barril 50 Litros',
    subtitle: 'Alta Capacidade',
    description: 'Ideal para grandes eventos, com maior rendimento e sistema de refrigeração eficiente.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4l8-4M4 7v10m8-4v4" />
      </svg>
    ),
    isCta: false,
  },
  {
    id: 4,
    name: 'Chopeiro 4 Vias',
    subtitle: 'Alta Capacidade',
    description: 'Sistema profissional para grandes eventos com até 4 diferentes tipos de chopp simultâneos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v8m0 0h8m8 0v8m0 0H4m8-16v8m0 0H4m8-8v8m0 0H4m8-8V4" />
      </svg>
    ),
    isCta: false,
  },
  {
    id: 5,
    name: 'Kit Completo',
    subtitle: 'Estrutura Total',
    description: 'Tudo o que você precisa: chopeiro, barris, copas e acessórios para servir.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    isCta: false,
  },
  {
    id: 6,
    name: 'Orçamento Personalizado',
    subtitle: 'Consultoria Gratuita',
    description: 'Fale com nossa equipe para encontre a melhor solução para seu evento.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    isCta: true,
  },
]

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')
  const isMobile = useIsMobile()

  const categorias = ['Todos', 'Chopps', 'Barris', 'Equipamentos']

  const showEquipment = categoriaSelecionada === 'Equipamentos' || categoriaSelecionada === 'Todos'
  const showProducts = categoriaSelecionada !== 'Equipamentos'

  return (
    <div className="pt-20">
      {/* Section 1: Hero - DARK */}
      <section className="relative min-h-[480px] overflow-hidden" style={{ backgroundColor: '#0d0a04' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.12) 0%, transparent 60%)' }}></div>
          {isMobile ? (
            <div className="absolute top-10 right-1/4 w-[350px] h-[350px] animate-glow" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 70%)' }}></div>
          ) : (
            <motion.div 
              className="absolute top-10 right-1/4 w-[350px] h-[350px]"
              style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,146,30,0.25), transparent)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[480px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-16 lg:py-20">
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Linha completa</span>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span style={{ color: '#e8e0d0' }}>Nossos</span>
                <br />
                <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Produtos</span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(200,185,145,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Variedadede chopps premium, barris de alta qualidade e equipamentos profissionais para tornar seu evento inesquecível.
              </motion.p>

              {/* Filter Buttons */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    onClick={() => setCategoriaSelecionada(categoria)}
                    className="relative px-6 py-2.5 text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    style={{ 
                      fontFamily: 'Oswald, sans-serif',
                      backgroundColor: categoriaSelecionada === categoria ? '#c8921e' : 'transparent',
                      color: categoriaSelecionada === categoria ? '#0d0a04' : 'rgba(200,185,145,0.7)',
                      border: '1px solid rgba(200,146,30,0.25)',
                      clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
                    }}
                  >
                    {categoria}
                  </button>
                ))}
              </motion.div>
            </div>
            
            {/* Right Side - Diagonal Contrast */}
            <div className="hidden lg:block lg:col-span-6 relative">
              <div className="absolute inset-0" style={{ backgroundColor: '#111008', clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                <div className="absolute top-0 bottom-0 w-px" style={{ left: '30%', background: 'linear-gradient(to bottom, transparent, rgba(200,146,30,0.5), transparent)' }}></div>
              </div>
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-64 h-64" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.2) 0%, transparent 70%)' }}></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Products Grid - LIGHT */}
      {showProducts && (
        <section className="py-14 relative overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.04) 0%, transparent 50%)' }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Catálogo</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-normal mb-10" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#2a1f14' }}>
              Escolha o seu Favorito
            </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: -30 }}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: isMobile ? 0 : index * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer bg-white overflow-hidden hover-lift"
                  style={{ 
                    border: '1px solid rgba(200,150,30,0.12)',
                    boxShadow: '0 4px 20px rgba(42,31,20,0.04)'
                  }}
                >
                  <div className="relative h-52 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #faf8f4, #f5f2ea)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                        style={{ filter: 'saturate(0.9) brightness(1.02)' }}
                      />
                    </div>
                    
                    {!isMobile && (
                      <motion.div 
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ 
                          boxShadow: 'inset 0 0 30px rgba(200,146,30,0.06), 0 8px 30px rgba(200,146,30,0.1)',
                          background: 'linear-gradient(135deg, rgba(200,146,30,0.03) 0%, transparent 50%)'
                        }}
                      />
                    )}
                    
                    {!isMobile && (
                      <motion.div 
                        className="absolute top-0 left-0 h-px z-10"
                        style={{ width: '100%', background: 'linear-gradient(90deg, transparent, #c8921e, transparent)' }}
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.7 }}
                      />
                    )}
                    
                    {product.badge && (
                      <div 
                        className="absolute top-4 left-4 px-3 py-1.5 text-[10px] uppercase tracking-wider z-10"
                        style={{ 
                          fontFamily: 'Oswald, sans-serif',
                          backgroundColor: product.badgeType === 'dark' ? 'rgba(42,31,20,0.85)' : '#c8921e',
                          color: product.badgeType === 'dark' ? '#e8e0d0' : '#0d0a04',
                          clipPath: 'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%)'
                        }}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div className="relative p-6">
                    <span className="text-[10px] uppercase tracking-[2.5px] block mb-2" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>
                      {product.category}
                    </span>
                    
                    <h3 className="text-2xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#2a1f14' }}>
                      {product.name}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="p-3" style={{ backgroundColor: 'rgba(200,146,30,0.04)', border: '1px solid rgba(200,146,30,0.08)' }}>
                        <span className="text-[9px] uppercase block mb-1" style={{ color: 'rgba(42,31,20,0.4)', fontFamily: 'Oswald, sans-serif' }}>Teor</span>
                        <span className="text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c8921e' }}>
                          {product.abv}
                        </span>
                      </div>
                      <div className="p-3" style={{ backgroundColor: 'rgba(200,146,30,0.04)', border: '1px solid rgba(200,146,30,0.08)' }}>
                        <span className="text-[9px] uppercase block mb-1" style={{ color: 'rgba(42,31,20,0.4)', fontFamily: 'Oswald, sans-serif' }}>Temperatura</span>
                        <span className="text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c8921e' }}>
                          {product.temperature}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.volumes.map((vol, i) => (
                        <motion.span 
                          key={vol}
                          className="px-3 py-1.5 text-[11px] uppercase tracking-wider"
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          style={{ 
                            fontFamily: 'Oswald, sans-serif',
                            border: '1px solid rgba(200,150,30,0.2)',
                            color: 'rgba(42,31,20,0.5)'
                          }}
whileHover={{ 
                              borderColor: 'rgba(200,146,30,0.5)',
                              color: '#c8921e',
                              backgroundColor: 'rgba(200,146,30,0.08)'
                            }}
                          >
                            {vol}
                          </motion.span>
                      ))}
                    </div>
                    
                    {/* IBU Bar - Animated */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(42,31,20,0.4)', fontFamily: 'Oswald, sans-serif' }}>
                          Amargor (IBU)
                        </span>
                        <span className="text-xs font-normal" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>
                          {product.ibu}
                        </span>
                      </div>
                      <div className="h-1" style={{ backgroundColor: 'rgba(200,150,30,0.12)', borderRadius: '2px' }}>
                        <motion.div 
                          className="h-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(product.ibu / 50) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                          style={{ 
                            background: 'linear-gradient(90deg, #c8921e, #e8b832)',
                            borderRadius: '2px'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(200,146,30,0.1)' }}>
                      <motion.button 
                        className="flex-1 px-5 py-3 text-sm uppercase tracking-wider"
                        style={{ 
                          fontFamily: 'Oswald, sans-serif',
                          backgroundColor: '#c8921e',
                          color: '#0d0a04',
                          clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                        }}
                        whileHover={{ scale: 1.03, backgroundColor: '#d4a820' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Detalhes
                      </motion.button>
                      <motion.button 
                        className="w-11 h-11 flex items-center justify-center"
                        style={{ border: '1px solid rgba(200,146,30,0.2)', color: 'rgba(42,31,20,0.3)' }}
                        whileHover={{ 
                          borderColor: 'rgba(200,146,30,0.5)', 
                          color: '#c8921e', 
                          backgroundColor: 'rgba(200,146,30,0.1)',
                          boxShadow: '0 0 15px rgba(200,146,30,0.2)'
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none" style={{ borderBottom: '2px solid rgba(200,146,30,0.25)', borderRight: '2px solid rgba(200,146,30,0.25)' }}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Equipment - MEDIUM DARK */}
      {showEquipment && (
        <section className="py-14 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2a1f14 0%, #1f1810 50%, #2a1f14 100%)' }}>
          {/* Watermark */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none" style={{ opacity: 0.04 }}>
            <span className="text-[120px] font-normal leading-none" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c8921e' }}>
              EQUIPAMENTOS
            </span>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Estrutura completa</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-normal mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}>
              Nossos Equipamentos
            </h2>
            <p className="text-sm mb-10 max-w-md" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Estrutura profissional completa para tornar seu evento inesquecível.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative cursor-pointer"
                  style={{ 
                    backgroundColor: item.isCta ? 'rgba(200,146,30,0.08)' : 'rgba(200,146,30,0.03)',
                    border: item.isCta ? '1px solid rgba(200,146,30,0.35)' : '1px solid rgba(200,146,30,0.12)'
                  }}
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 mb-5 flex items-center justify-center"
                      style={{ 
                        backgroundColor: item.isCta ? 'rgba(200,146,30,0.2)' : 'rgba(200,146,30,0.08)',
                        border: '1px solid rgba(200,146,30,0.25)',
                        color: '#c8921e'
                      }}
                    >
                      {item.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-xl font-normal mb-1"
                      style={{ 
                        fontFamily: 'Bebas Neue, sans-serif', 
                        color: item.isCta ? '#c8921e' : '#e8e0d0' 
                      }}
                    >
                      {item.name}
                    </h3>
                    
                    {/* Subtitle */}
                    <span 
                      className="text-[10px] uppercase tracking-wider block mb-3"
                      style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}
                    >
                      {item.subtitle}
                    </span>
                    
                    {/* Description */}
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-[22px] h-[22px] pointer-events-none" style={{ borderBottom: '2px solid rgba(200,146,30,0.3)', borderRight: '2px solid rgba(200,146,30,0.3)' }}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final - GOLD */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #c8921e 0%, #e0a820 50%, #b87a10 100%)' }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[100px] font-normal leading-none pointer-events-none select-none" style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'rgba(13,10,4,0.06)' }}>IMPERADOR</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <span className="text-xs uppercase block mb-2" style={{ color: 'rgba(13,10,4,0.5)', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>Precisa de ajuda?</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Fale com nossa equipe</h2>
              <p className="text-sm max-w-md" style={{ color: 'rgba(13,10,4,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Estamos prontos para ajudar a encontrar a melhor solução para seu evento.</p>
            </div>
            
            <motion.a href="https://wa.me/5545998044188" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase transition-all duration-300" style={{ backgroundColor: '#0d0a04', color: '#d4a820', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar no WhatsApp
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Produtos