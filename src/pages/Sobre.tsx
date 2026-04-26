import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true
      const startTime = Date.now()
      const updateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(updateCount)
      }
      requestAnimationFrame(updateCount)
    }
  }, [isInView, end, duration])

  return { count, ref }
}

const timeline = [
  { year: '2009', title: 'Fundação', description: 'Nasceu em Cascavel o sonho de levar chopp premium para o Paraná.' },
  { year: '2013', title: 'Primeira Expansão', description: 'Consolidamos nossa marca e iniciamos atendimento em Toledo.' },
  { year: '2017', title: 'Parcerias Estratégicas', description: 'Acordos com bares e restaurantes fortaleceram nossa rede.' },
  { year: '2024', title: 'Referência Regional', description: 'Liderança confirmada no Sul do Brasil em chopp premium.' },
]

const missionVision = [
  {
    type: 'Missão',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Nossa Missão',
    description: 'Levar experiências memoráveis através de chopp premium de alta qualidade, transformando cada evento em uma celebração inesquecível.',
    details: 'Priorizamos ingredientes selecionados, processos rigorosos e atendimento diferenciado para garantir a satisfação total dos nossos clientes.',
  },
  {
    type: 'Visão',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Nossa Visão',
    description: 'Ser a referência incontestável em distribuição de chopp premium no Sul do Brasil, reconhecida pela excelência e inovação.',
    details: 'Almejamos expandir nossa presença mantendo os mais altos padrões de qualidade e atendimento personalizado.',
  },
  {
    type: 'Valores',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Nossos Valores',
    description: 'Qualidade absoluta, pontualidade impecável, transparência nas relações e compromisso com a satisfação do cliente.',
    details: 'Cada decisão é guiada pela busca da excelência e pelo respeito aos nossos colaboradores, parceiros e clientes.',
  },
]

const brands = [
  { name: 'Budweiser', origin: 'Estados Unidos', image: 'https://images.unsplash.com/photo-1608270586620-248524c67deb?w=400&h=300&fit=crop' },
  { name: 'Stella Artois', origin: 'Bélgica', image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=400&h=300&fit=crop' },
  { name: 'Heineken', origin: 'Holanda', image: 'https://images.unsplash.com/photo-1608855238291-c3e3e939c8b7?w=400&h=300&fit=crop' },
  { name: 'Brahma', origin: 'Brasil', image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop' },
  { name: 'Spaten', origin: 'Alemanha', image: 'https://images.unsplash.com/photo-1584195616901-4c6c1a8c3e2c?w=400&h=300&fit=crop' },
  { name: 'Hoegaarden', origin: 'Bélgica', image: 'https://images.unsplash.com/photo-1575037614876-c38a4c44f5bd?w=400&h=300&fit=crop' },
]

const facilities = [
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.421-.035.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.421.035-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: 'Tanques Refrigerados',
    description: 'Sistema completo de tanques com controle automático de temperatura para manter o chopp a 4°C.',
    stat: '8',
    statLabel: 'Tanques',
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Frota Refrigerada',
    description: 'Veículos adaptados com sistemas de refrigeração para garantir a integridade do produto.',
    stat: '5',
    statLabel: 'Veículos',
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Chopeiras Profissionais',
    description: 'Equipamentos de alta performance para servir chopp com espuma perfeita.',
    stat: '50+',
    statLabel: 'Chopeiras',
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Logística 24/7',
    description: 'Rastreamento em tempo real para garantir pontualidade em cada entrega.',
    stat: '24/7',
    statLabel: 'Monitoramento',
  },
]

const team = [
  { 
    name: 'Roberto Martins', 
    role: 'Fundador & CEO', 
    bio: 'Visionário por trás da Imperador, transforma sonhos em realidade há 15 anos.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
  },
  { 
    name: 'Carlos Silva', 
    role: 'Diretor Operacional', 
    bio: 'Garante que cada entrega seja perfeita, do primeiro ao último barril.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  { 
    name: 'Ana Paula', 
    role: 'Gerente Comercial', 
    bio: 'Conecta clientes e produtos com dedicação e empatia genuína.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  },
]

function Sobre() {
  return (
    <div className="pt-20">
      {/* Section 1: Hero - DARK */}
      <section className="relative min-h-[480px] overflow-hidden" style={{ backgroundColor: '#0d0a04' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.15) 0%, transparent 60%)' }}></div>
          <motion.div 
            className="absolute top-20 right-1/4 w-[400px] h-[400px]"
            style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,146,30,0.3), transparent)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[480px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-16 lg:py-20">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Quem somos</span>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span style={{ color: '#e8e0d0' }}>Imperador</span>
                <br />
                <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>do Chopp</span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Transformamos cada evento em uma celebração inesquecível. Há mais de uma década levando chopp premium com excelência e dedicação.
              </motion.p>
              
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-8" style={{ borderTop: '1px solid rgba(200,146,30,0.2)', paddingTop: '28px' }}>
                <StatCounter value={15} suffix="+" label="Anos" />
                <div className="w-px h-14" style={{ backgroundColor: 'rgba(200,146,30,0.3)' }}></div>
                <StatCounter value={500} suffix="+" label="Eventos" />
                <div className="w-px h-14" style={{ backgroundColor: 'rgba(200,146,30,0.3)' }}></div>
                <StatCounter value={4} suffix="°C" label="Temperatura" />
              </motion.div>
            </div>
            
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="absolute inset-0" style={{ backgroundColor: '#111008', clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                <div className="absolute top-0 bottom-0 w-px" style={{ left: '25%', background: 'linear-gradient(to bottom, transparent, rgba(200,146,30,0.5), transparent)' }}></div>
              </div>
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-72 h-72" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.25) 0%, transparent 70%)' }}></div>
              </motion.div>
              <div className="absolute bottom-8 right-8 flex items-center gap-3 px-4 py-2" style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.2)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-wider" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Referência Sul</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Missão/Visão/Valores - LIGHT */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.04) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Fundamentos</span>
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#2a1f14' }}>Chopp não é bebida. </span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>É experiência.</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(42,31,20,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              A Imperador do Chopp nasceu de um sonho: levar o melhor chopp para os paranaenses. Começamos em 2009, em Cascavel, com uma visão clara — qualidade acima de tudo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionVision.map((item, index) => (
              <MissionCardLight key={item.type} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Marcas - DARK */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1208 0%, #0d0a04 50%, #1a1610 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200,146,30,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(200,146,30,0.05) 0%, transparent 50%)' }}></div>
        
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8921e' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-2 mb-6"
              style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.2)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif', letterSpacing: '3px' }}>Parceiros Oficiais</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#e8e0d0' }}>Cervejarias que </span>
              <motion.span
                className="inline-block"
                style={{ 
                  background: 'linear-gradient(90deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%'
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Confiamos
              </motion.span>
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Parcerias estratégicas com as melhores cervejarias do mundo para garantir qualidade incomparável em cada chopp.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, x: -30, rotateY: -5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(200,146,30,0.12)',
                }}
              >
                {/* Corner Accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-0 h-0"
                  style={{ 
                    borderTop: '30px solid transparent',
                    borderRight: '30px solid rgba(200,146,30,0.15)',
                  }}
                  whileHover={{ width: 'auto', height: 'auto' }}
                />
                
                {/* Shimmer Line */}
                <motion.div 
                  className="absolute top-0 left-0 h-px"
                  style={{ 
                    width: '100%',
                    background: 'linear-gradient(90deg, transparent, #c8921e, transparent)',
                  }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Hover Glow */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    boxShadow: 'inset 0 0 30px rgba(200,146,30,0.08), 0 0 25px rgba(200,146,30,0.15)',
                    background: 'linear-gradient(135deg, rgba(200,146,30,0.05) 0%, transparent 50%, rgba(200,146,30,0.02) 100%)'
                  }}
                />
                
                <div className="relative flex items-center gap-5 p-6">
                  <motion.div 
                    className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
                  >
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="w-full h-full object-cover"
                      style={{ filter: 'saturate(1.1) brightness(1.05)' }}
                    />
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-medium mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0', letterSpacing: '1px' }}>{brand.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-px" style={{ backgroundColor: '#c8921e' }}></div>
                      <span className="text-xs uppercase" style={{ color: 'rgba(200,146,30,0.7)', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>{brand.origin}</span>
                    </div>
                    <p className="text-sm" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Distribuidor autorizado</p>
                  </div>
                  
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.15)' }}
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(200,146,30,0.2)', borderColor: 'rgba(200,146,30,0.4)' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Bottom Accent Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1"
                  style={{ width: '100%', background: 'linear-gradient(90deg, #c8921e, #f0a820, #c8921e)' }}
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* 12 Marcas Badge with Glow */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 relative"
              style={{ 
                backgroundColor: 'rgba(200,146,30,0.08)', 
                border: '1px solid rgba(200,146,30,0.2)',
              }}
              animate={{ 
                boxShadow: ['0 0 0px rgba(200,146,30,0)', '0 0 20px rgba(200,146,30,0.15)', '0 0 0px rgba(200,146,30,0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif' }}>Trabalhamos com mais de</span>
              <span className="text-3xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c8921e' }}>12</span>
              <span className="text-sm" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif' }}>marcas premium</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Timeline - MEDIUM DARK */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2a1f14 0%, #1f1810 50%, #2a1f14 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(200,146,30,0.05) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(200,146,30,0.03) 0%, transparent 40%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Nossa jornada</span>
              <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#e8e0d0' }}>Trajetória </span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Imperador</span>
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Do primeiro barril em Cascavel até a referência regional em chopp premium.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-10 md:pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,150,30,0.5), transparent)' }}></div>
              
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative py-8"
                >
                  <div className="absolute -left-10 md:-left-12 top-2 w-5 h-5 -translate-x-1/2" style={{ backgroundColor: '#1f1810', border: '2px solid #c8921e' }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#c8921e' }}></div>
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-4xl font-normal" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>{item.year}</span>
                    <h3 className="text-lg uppercase mt-2 mb-2" style={{ color: '#e8e0d0', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Equipe - LIGHT */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(200,146,30,0.05) 0%, transparent 40%)' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Time</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#2a1f14' }}>Nossa </span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Equipe</span>
            </h2>
            <p className="text-sm" style={{ color: 'rgba(42,31,20,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>As pessoas que fazem a Imperador acontecer todos os dias.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div 
                key={member.name} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white overflow-hidden cursor-pointer"
                style={{ border: '1px solid rgba(200,150,30,0.15)', boxShadow: '0 4px 20px rgba(42,31,20,0.04)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,20,0.8) 0%, transparent 60%)' }}></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: 'linear-gradient(90deg, #c8921e, #f0a820, #c8921e)' }}></div>
                </div>
                
                <div className="relative p-6">
                  <h3 className="text-xl uppercase mb-1" style={{ color: '#2a1f14', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>{member.name}</h3>
                  <span className="text-xs uppercase block mb-4" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>{member.role}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(42,31,20,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{member.bio}</p>
                </div>

                <div className="absolute bottom-0 right-0 w-6 h-6 transition-all duration-300 group-hover:w-10 group-hover:h-10" style={{ borderBottom: '2px solid rgba(200,146,30,0.2)', borderRight: '2px solid rgba(200,146,30,0.2)' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Instalações - DARK */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a1510 0%, #0d0a04 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(200,146,30,0.06) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(200,146,30,0.04) 0%, transparent 40%)' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Infraestrutura</span>
              <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#e8e0d0' }}>Nossas </span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Instalações</span>
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Infraestrutura de ponta para garantir a qualidade e frescor do nosso chopp em cada entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 cursor-pointer"
                style={{ backgroundColor: 'rgba(200,146,30,0.03)', border: '1px solid rgba(200,146,30,0.1)' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.08) 0%, transparent 60%)' }}></div>
                
                <div className="relative z-10">
                  <div className="mb-6 p-5 inline-block" style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.2)' }}>
                    <div style={{ color: '#c8921e' }}>{item.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3" style={{ fontFamily: 'Oswald, sans-serif', color: '#e8e0d0', letterSpacing: '1px' }}>{item.title}</h3>
                  
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{item.description}</p>
                  
                  <div className="flex items-baseline gap-2 pt-4" style={{ borderTop: '1px solid rgba(200,146,30,0.15)' }}>
                    <span className="text-5xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c8921e' }}>{item.stat}</span>
                    <span className="text-xs uppercase" style={{ color: 'rgba(200,146,30,0.6)', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>{item.statLabel}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-8 h-8 transition-all duration-300 group-hover:w-12 group-hover:h-12" style={{ borderBottom: '2px solid rgba(200,146,30,0.25)', borderRight: '2px solid rgba(200,146,30,0.25)' }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA - GOLD GRADIENT */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #c8921e 0%, #e0a820 50%, #b87a10 100%)' }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] font-normal leading-none pointer-events-none select-none" style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'rgba(13,10,4,0.06)' }}>IMPERADOR</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <span className="text-xs uppercase block mb-3" style={{ color: 'rgba(13,10,4,0.5)', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>Entre em contato</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Traga o Imperador para o seu evento</h2>
              <p className="text-lg max-w-md" style={{ color: 'rgba(13,10,4,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Entre em contato agora e faça seu pedido personalizado.</p>
            </div>
            
            <motion.a href="https://wa.me/5545998044188" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 px-10 py-5 text-base font-bold uppercase transition-all duration-300" style={{ backgroundColor: '#0d0a04', color: '#d4a820', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px', clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Solicitar Orçamento
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}

function MissionCardLight({ item, index }: { item: typeof missionVision[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-10 cursor-pointer bg-white transition-all duration-300"
      style={{ border: '1px solid rgba(200,150,30,0.15)', boxShadow: '0 4px 20px rgba(42,31,20,0.04)' }}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.08) 0%, transparent 50%)' }}
      />
      
      <div className="relative z-10">
        <div className="p-5 mb-8 inline-block" style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.2)' }}>
          <div style={{ color: '#c8921e' }}>{item.icon}</div>
        </div>
        
        <span className="text-xs uppercase mb-3 block" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif', letterSpacing: '2.5px' }}>{item.type}</span>
        
        <h3 className="text-2xl font-normal mb-5" style={{ color: '#2a1f14', fontFamily: 'Bebas Neue, sans-serif' }}>{item.title}</h3>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm leading-relaxed pb-5 mb-5" style={{ borderBottom: '1px solid rgba(200,146,30,0.15)', color: 'rgba(42,31,20,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            {item.details}
          </p>
        </motion.div>

        <p className="text-sm leading-relaxed" style={{ color: 'rgba(42,31,20,0.55)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          {item.description}
        </p>
      </div>

      <motion.div 
        className="absolute bottom-0 right-0"
        transition={{ duration: 0.3 }}
        style={{ 
          borderBottom: '2px solid #c8921e',
          borderRight: '2px solid #c8921e',
          bottom: 0,
          right: 0,
          width: isHovered ? '40px' : '0px',
          height: isHovered ? '40px' : '0px'
        }}
      />
    </motion.div>
  )
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  
  return (
    <div ref={ref} className="text-center px-6">
      <div className="text-4xl font-normal" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase mt-2 tracking-wider" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>{label}</div>
    </div>
  )
}

export default Sobre