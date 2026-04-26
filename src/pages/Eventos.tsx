import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

const events = [
  {
    id: 1,
    title: 'Festa de Fim de Ano',
    category: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1511578314322-35811e2ba4bc?w=800&h=600&fit=crop',
    guests: 300,
    barrels: '8 barris',
    date: 'Dezembro 2024',
    description: 'Celebração de encerramento de ano com equipe'
  },
  {
    id: 2,
    title: 'Casamento Julia & Carlos',
    category: 'Casamento',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    guests: 180,
    barrels: '5 barris',
    date: 'Novembro 2024',
    description: 'Cerimônia e recepção memorável'
  },
  {
    id: 3,
    title: 'Oktoberfest Regional',
    category: 'Festival',
    image: 'https://images.unsplash.com/photo-1579373903761-f8cdc9b7d997?w=800&h=600&fit=crop',
    guests: 1200,
    barrels: '25 barris',
    date: 'Outubro 2024',
    description: '3 dias de festival Germânico'
  }
]

const gallery = [
  { category: 'Social', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af0bc3?w=500&h=400&fit=crop' },
  { category: 'Corporativo', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop' },
  { category: 'Casamento', image: 'https://images.unsplash.com/photo-1465499947626-6212114308ed?w=500&h=400&fit=crop' },
  { category: 'Festival', image: 'https://images.unsplash.com/photo-1533177632549-6ff2d46d8e57?w=500&h=400&fit=crop' }
]

const textEvents = [
  {
    type: 'highlight',
    category: 'Corporativo',
    title: 'Confraternização de Fim de Ano',
    description: 'Empresa líder do setor automotivo celebrating annual closing with 300 collaborators.',
    meta: '300 convidados • 8 barris • 4°C'
  },
  {
    type: 'highlight',
    category: 'Casamento',
    title: 'Casamento Tradition',
    description: 'Celebração intimista com família e amigos próximos.',
    meta: '180 convidados • 5 barris'
  },
  {
    type: 'light',
    category: 'Festival',
    title: 'Oktoberfest Edition',
    description: 'Three-day German festival celebration.',
    meta: '1.200 pessoas • 3 dias'
  }
]

function Eventos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')
  const isMobile = useIsMobile()

  const categorias = ['Todos', 'Sociais', 'Corporativos', 'Casamentos', 'Festivais']

  return (
    <div className="pt-20">
      {/* Section 1: Hero with Mosaic - DARK */}
      <section className="relative min-h-[480px] overflow-hidden" style={{ backgroundColor: '#0d0a04' }}>
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                backgroundColor: 'rgba(200,146,30,0.6)',
                left: `${10 + Math.random() * 30}%`,
                bottom: '-10px'
              }}
              animate={{
                y: [0, -400 - Math.random() * 200],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.12) 0%, transparent 60%)' }}></div>
          {!isMobile ? (
            <motion.div 
              className="absolute top-10 right-1/4 w-[350px] h-[350px]"
              style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          ) : (
            <div className="absolute top-10 right-1/4 w-[350px] h-[350px] animate-glow" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 70%)' }}></div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,146,30,0.25), transparent)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[480px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full py-16">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Momentos que ficam</span>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span style={{ color: '#e8e0d0' }}>Nossos</span>
                <br />
                <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Eventos</span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed max-w-sm mb-8" style={{ color: 'rgba(200,185,145,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                O Imperador faz parte dos momentos mais especiais da vida dos nossos clientes há mais de uma década.
              </motion.p>

              {/* Filter Buttons */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    onClick={() => setCategoriaSelecionada(categoria)}
                    className="relative px-5 py-2.5 text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    style={{ 
                      fontFamily: 'Oswald, sans-serif',
                      backgroundColor: categoriaSelecionada === categoria ? '#c8921e' : 'transparent',
                      color: categoriaSelecionada === categoria ? '#0d0a04' : 'rgba(200,185,145,0.7)',
                      border: '1px solid rgba(200,146,30,0.25)',
                    }}
                  >
                    {categoria}
                  </button>
                ))}
              </motion.div>
            </div>
            
            {/* Right Mosaic - Hidden on Mobile */}
            <div className="hidden lg:block lg:col-span-7 h-full relative">
              <div className="absolute inset-0" style={{ backgroundColor: '#111008', clipPath: 'polygon(16% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                <div className="absolute top-0 bottom-0 w-px" style={{ left: '16%', background: 'linear-gradient(to bottom, transparent, rgba(200,146,30,0.6), transparent)' }}></div>
                <div className="absolute top-0 bottom-0 w-px" style={{ left: '17%', background: 'linear-gradient(to bottom, transparent, rgba(200,146,30,0.2), transparent)' }}></div>
              </div>
              
              {/* Mosaic Grid */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" style={{ clipPath: 'polygon(16% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                {[
                  { image: 'https://images.unsplash.com/photo-1464366400600-7168b8af0bc3?w=500&h=400&fit=crop', category: 'Social' },
                  { image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop', category: 'Corporativo' },
                  { image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop', category: 'Casamento' },
                  { image: 'https://images.unsplash.com/photo-1533177632549-6ff2d46d8e57?w=500&h=400&fit=crop', category: 'Festival' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.45 }}
                  >
                    <img src={item.image} alt={item.category} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,10,4,0.7), transparent)' }}></div>
                    <span className="absolute bottom-3 left-3 text-xs uppercase tracking-wider" style={{ color: '#e8e0d0', fontFamily: 'Oswald, sans-serif' }}>{item.category}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats Band - GOLD */}
      <section className="relative py-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, #c8921e 0%, #e0a820 50%, #b87a10 100%)' }}>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[80px] font-normal leading-none pointer-events-none select-none" style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'rgba(0,0,0,0.07)' }}>IMPERADOR DO CHOPP</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Eventos realizados' },
              { number: '12+', label: 'Anos de experiência' },
              { number: '98%', label: 'Clientes satisfeitos' },
              { number: '4°C', label: 'Sempre gelado' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-[44px] font-normal mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>{stat.number}</div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(10,7,0,0.6)', fontFamily: 'Oswald, sans-serif' }}>{stat.label}</div>
                {i < 3 && <div className="absolute right-0 top-0 bottom-0 w-px" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2.5: Testimonials - LIGHT */}
      <section className="py-16" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Familia Silva', text: 'Foi o casamento mais bonito da nossa vida. O chopp da Imperador fez tudo especial.', event: 'Casamento' },
              { name: 'Empresa XYZ', text: 'Nosso evento corporativo foi um sucesso. Todos elogiaram a qualidade do chopp.', event: 'Corporativo' },
              { name: 'Maria Santos', text: 'Comemorei minhas bodas de ouro com a família. Momento inesquecível!', event: 'Bodas' }
            ].map((depoimento, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-white"
                style={{ border: '1px solid rgba(200,146,30,0.12)', boxShadow: '0 4px 20px rgba(42,31,20,0.04)' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-4 h-4" fill="#c8921e" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed mb-4" style={{ color: 'rgba(42,31,20,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>"{depoimento.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium" style={{ color: '#2a1f14', fontFamily: 'Oswald, sans-serif' }}>{depoimento.name}</p>
                  <span className="text-xs" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>{depoimento.event}</span>
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none" style={{ borderBottom: '2px solid rgba(200,146,30,0.2)', borderRight: '2px solid rgba(200,146,30,0.2)' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Events - LIGHT */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.03) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Histórias reais</span>
            </div>
            <span className="text-sm cursor-pointer transition-colors hover:text-[#c8921e]" style={{ color: 'rgba(42,31,20,0.5)', fontFamily: 'Oswald, sans-serif' }}>
              Ver todos →
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-normal mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#2a1f14' }}>
            Eventos em Destaque
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
            {/* Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative cursor-pointer group"
              style={{ gridRow: 'span 2' }}
            >
              <div className="relative h-full min-h-[320px] overflow-hidden" style={{ backgroundColor: '#111008' }}>
                <img 
                  src={events[0].image} 
                  alt={events[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,10,4,0.88) 0%, rgba(13,10,4,0.3) 50%, transparent)' }}></div>
                
                <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', backgroundColor: 'rgba(13,10,4,0.85)', border: '1px solid rgba(200,146,30,0.4)', color: '#d4a820' }}>
                  {events[0].category}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c8921e', animation: 'pulse 2s infinite' }}></div>
                    <span className="text-[10px] uppercase tracking-wider" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>{events[0].category}</span>
                  </div>
                  <h3 className="text-xl font-normal mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#f5f2ea' }}>{events[0].title}</h3>
                  <p className="text-[10px]" style={{ color: 'rgba(232,224,208,0.5)', fontFamily: 'Oswald, sans-serif' }}>{events[0].date} • {events[0].guests} convidados • {events[0].barrels}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none" style={{ borderBottom: '2px solid rgba(200,146,30,0.4)', borderRight: '2px solid rgba(200,146,30,0.4)' }}></div>
            </motion.div>

            {/* Smaller Cards */}
            {textEvents.slice(0, 2).map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative p-5 cursor-pointer bg-white"
                style={{ 
                  border: '1px solid rgba(200,146,30,0.15)',
                  boxShadow: '0 4px 20px rgba(42,31,20,0.04)'
                }}
              >
                <span className="text-[10px] uppercase tracking-wider block mb-2" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>{event.category}</span>
                <h3 className="text-lg font-normal mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#2a1f14' }}>{event.title}</h3>
                <p className="text-sm mb-3 leading-relaxed" style={{ color: 'rgba(42,31,20,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{event.description}</p>
                <p className="text-[10px]" style={{ color: 'rgba(42,31,20,0.4)', fontFamily: 'Oswald, sans-serif' }}>{event.meta}</p>
                <span className="text-xs mt-3 inline-block cursor-pointer" style={{ color: 'rgba(42,31,20,0.5)', fontFamily: 'Oswald, sans-serif' }}>Ver detalhes →</span>
                <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none" style={{ borderBottom: '2px solid rgba(200,146,30,0.2)', borderRight: '2px solid rgba(200,146,30,0.2)' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Gallery - MEDIUM DARK */}

      {/* Section 4: Gallery - MEDIUM DARK */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2a1f14 0%, #1f1810 50%, #2a1f14 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(200,146,30,0.04) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(200,146,30,0.03) 0%, transparent 40%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
            <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Cada evento</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-normal mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}>
            Uma história
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden cursor-pointer aspect-square"
                style={{ backgroundColor: '#161209' }}
              >
                <img 
                  src={item.image} 
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-450 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0.35 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: 'rgba(13,10,4,0.35)' }}
                />
                <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-wider" style={{ color: 'rgba(200,185,145,0.4)', fontFamily: 'Oswald, sans-serif' }}>{item.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA - GOLD */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #c8921e 0%, #e0a820 50%, #b87a10 100%)' }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[100px] font-normal leading-none pointer-events-none select-none" style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'rgba(13,10,4,0.06)' }}>SEU EVENTO AQUI</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <span className="text-xs uppercase block mb-2" style={{ color: 'rgba(13,10,4,0.5)', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>Invista em memória</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Vamos fazer parte do seu momento</h2>
              <p className="text-sm max-w-md" style={{ color: 'rgba(13,10,4,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Entre em contato agora e faça seu pedido personalizado.</p>
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

export default Eventos