import { motion } from 'framer-motion'
import { useState } from 'react'
import { GSAPCounter, GSAPScrollReveal, GSAPScrollReveal as Scroll } from '../components/AnimationsGSAP'

const brands = [
  { name: 'Budweiser', origin: 'Estados Unidos', flag: '🇺🇸' },
  { name: 'Stella Artois', origin: 'Bélgica', flag: '🇧🇪' },
  { name: 'Heineken', origin: 'Holanda', flag: '🇳🇱' },
  { name: 'Brahma', origin: 'Brasil', flag: '🇧🇷' },
  { name: 'Spaten', origin: 'Alemanha', flag: '🇩🇪' },
  { name: 'Hoegaarden', origin: 'Bélgica', flag: '🇧🇪' },
]

const valuePillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.756.08P8.25 6.75a2.25 2.25 0 012.25 2.25v1.372c0 .82-.516 1.559-1.28 1.974l-6.457 3.315a2.25 2.25 0 01-1.673 0L2.25 13.27a2.25 2.25 0 011.28-1.974V9.75m9.75 3.104c.251-.023.501-.05.756-.08a2.25 2.25 0 012.25-2.25v-1.372c0-.82.516-1.559 1.28-1.974l6.457-3.315a2.25 2.25 0 011.673 0l6.457 3.315a2.25 2.25 0 011.28 1.974V14.25" />
      </svg>
    ),
    title: 'Qualidade',
    description: 'Chopp na temperatura certa (4°C)',
    detail: 'Garante sabor e frescor do primeiro ao último copo',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Estrutura',
    description: 'Tanques, chopeiras e logística',
    detail: 'Equipamento profissional — tudo pronto',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.123 9.337 9.337 0 003.756 0 9.337 9.337 0 003.757 0c.162.017.324.032.486.024M7 10.5a3 3 0 11-6 0 3 3 0 016 0zm0 0v5.25a2.25 2.25 0 002.25 2.25h8.25a2.25 2.25 0 002.25-2.25V12m-9 6l3 3m0 0l-3-3m3 3V4.5" />
      </svg>
    ),
    title: 'Suporte',
    description: 'Equipe presente no seu evento',
    detail: 'Montagem, operação e desmontagem inclusas',
  },
]

const iconStyles = {
  wrapper: 'inline-flex p-3',
  container: {
    backgroundColor: 'rgba(200,146,30,0.1)',
    border: '1px solid rgba(200,146,30,0.2)',
  } as const,
}

function Sobre() {
  return (
    <div className="pt-20">
      {/* Section 1: Hero - DARK SPLIT */}
      <section className="relative min-h-[520px] overflow-hidden" style={{ backgroundColor: '#0d0a04' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.12) 0%, transparent 60%)' }}></div>
          <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 70%)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[520px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full py-16 lg:py-20">
            <div className="lg:col-span-7">
              <GSAPScrollReveal direction="up" delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                  <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Quem Somos</span>
                </div>
              </GSAPScrollReveal>
              
              <GSAPScrollReveal direction="up" delay={0.2}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span style={{ color: '#e8e0d0' }}>Imperador</span>
                  <br />
                  <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>do Chopp</span>
                </h1>
              </GSAPScrollReveal>
              
              <GSAPScrollReveal direction="up" delay={0.3}>
                <p className="text-lg sm:text-xl leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                  A referência em chopp premium que faz o seu evento acontecer.<br/>
                  <span className="text-base" style={{ color: 'rgba(200,185,145,0.5)' }}>Transformamos cada evento em uma celebração — chopp na temperatura certa, sem dor de cabeça.</span>
                </p>
              </GSAPScrollReveal>
              
              <GSAPScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-6 sm:gap-8" style={{ borderTop: '1px solid rgba(200,146,30,0.2)', paddingTop: '24px' }}>
                  <StatCounter value={15} suffix="+" label="anos" />
                  <div className="w-px h-12" style={{ backgroundColor: 'rgba(200,146,30,0.3)' }}></div>
                  <StatCounter value={500} suffix="+" label="eventos" />
                  <div className="w-px h-12" style={{ backgroundColor: 'rgba(200,146,30,0.3)' }}></div>
                  <StatCounter value={4} suffix="°C" label="temperatura" />
                </div>
              </GSAPScrollReveal>
            </div>
            
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="absolute inset-0" style={{ backgroundColor: '#111008', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                <div className="absolute top-0 bottom-0 w-px" style={{ left: '20%', background: 'linear-gradient(to bottom, transparent, rgba(200,146,30,0.5), transparent)' }}></div>
              </div>
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-64 h-64" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.2) 0%, transparent 70%)' }}></div>
              </motion.div>
              <div className="absolute bottom-8 right-8 flex items-center gap-3 px-4 py-2" style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.2)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-wider" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Referência Sul</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Origin - LIGHT SPLIT (Visual Left, Text Right) */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(200,146,30,0.04) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div 
                className="relative aspect-square max-w-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0" style={{ backgroundColor: '#1a1208', clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 15% 100%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32" style={{ color: 'rgba(200,146,30,0.3)' }} fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-5.858 12.75-12.75 12.75S-6 17.642-6 10.5 5.858-2.25 6.75-2.25 19.5 3.358 19.5 10.5z" />
                  </svg>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1" style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.2)' }}>
                  <span className="text-xs" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Cascavel, PR</span>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Scroll>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Origem</span>
              </div>
              </Scroll>
              
              <Scroll>
              <h2 className="text-4xl sm:text-5xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <span style={{ color: '#2a1f14' }}>Pioneiros </span>
                <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>desde 2009</span>
              </h2>
              </Scroll>
              
              <Scroll>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(42,31,20,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                <strong style={{ color: '#2a1f14' }}>Nascemos em Cascavel com um sonho:</strong> levar chopp premium para o Paraná. De um primeiro barril a uma rede que atende bares, restaurantes e eventos por toda a região — construímos credibilidade tanque após tanque.
              </p>
              </Scroll>
              
              <Scroll>
              <div className="inline-flex items-center gap-3 px-5 py-3" style={{ backgroundColor: 'rgba(200,146,30,0.08)', border: '1px solid rgba(200,146,30,0.2)' }}>
                <svg className="w-5 h-5" style={{ color: '#c8921e' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-sm" style={{ color: 'rgba(42,31,20,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>Mais de 15 anos de história no chopp premium paranaense</span>
              </div>
              </Scroll>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Problem/Solution - DARK */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1208 0%, #0d0a04 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 60%)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <GSAPScrollReveal direction="up" delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                  <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Solução</span>
                </div>
              </GSAPScrollReveal>
              
              <GSAPScrollReveal direction="up" delay={0.2}>
                <h2 className="text-4xl sm:text-5xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span style={{ color: '#e8e0d0' }}>Sem estresse. </span>
                  <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Só animação.</span>
                </h2>
              </GSAPScrollReveal>
              
              <GSAPScrollReveal direction="up" delay={0.3}>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                  O planejamento de evento tem mil detalhes. <strong style={{ color: '#e8e0d0' }}>O chopp não precisa ser um deles.</strong><br/>
                  Você foca na festa. Nós garantimos:
                </p>
              </GSAPScrollReveal>
              
              <GSAPScrollReveal direction="up" delay={0.4}>
                <ul className="space-y-4 mb-8">
                  {[
                    { text: 'Chopp na temperatura perfeita (4°C, sempre)', icon: '🌡️' },
                    { text: 'Equipamento completo e pronto', icon: '📦' },
                    { text: 'Equipe de apoio do início ao fim', icon: '👥' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-base" style={{ color: 'rgba(200,185,145,0.8)', fontFamily: 'Inter, sans-serif' }}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </GSAPScrollReveal>
              
              <GSAPScrollReveal direction="up" delay={0.5}>
                <div className="inline-flex items-center gap-3 px-6 py-4" style={{ backgroundColor: 'rgba(200,146,30,0.1)', border: '1px solid rgba(200,146,30,0.3)' }}>
                  <span className="text-lg" style={{ color: '#c8921e' }}>✓</span>
                  <span className="text-base font-medium" style={{ color: '#e8e0d0', fontFamily: 'Inter, sans-serif' }}>Você só precisa brindar. O resto é com a gente.</span>
                </div>
              </GSAPScrollReveal>
            </div>
            
            <div className="hidden lg:block lg:col-span-6 relative">
              <motion.div 
                className="relative w-72 h-72 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,146,30,0.05)', border: '1px solid rgba(200,146,30,0.15)', borderRadius: '50%' }}>
                  <svg className="w-24 h-24" style={{ color: 'rgba(200,146,30,0.4)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 2v4.007c0 .177.038.347.112.497l1.755 4.17a1.5 1.5 0 001.266.707h4.734c.424 0 .792-.264.95-.65l2.25-5.5a1 1 0 00-1.763-.878l-1.892 4.626-1.627-3.88A1 1 0 0012.938 2H9V1a1 1 0 00-1-1H4a1 1 0 000 2h3v1z"/>
                  </svg>
                </div>
                <motion.div 
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ border: '1px solid rgba(200,146,30,0.2)', borderRadius: '50%' }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Authority - DARK STATS */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d0a04 0%, #1a1208 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.1) 0%, transparent 60%)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 60%)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Scroll>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Autoridade</span>
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
              </div>
            </Scroll>
            
            <Scroll>
            <h2 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#e8e0d0' }}>Referência no Sul </span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>do Brasil</span>
            </h2>
            </Scroll>
            
            <p className="text-base" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Confirmada em 2024: líder em chopp premium na região.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 500, suffix: '+', label: 'Eventos', detail: 'realizados com excelência' },
              { value: 12, suffix: '', label: 'Marcas', detail: 'premium parceiras' },
              { value: 4, suffix: '°C', label: 'Temperatura', detail: 'controlada em cada entrega' },
              { value: '24/7', suffix: '', label: 'Monitoramento', detail: 'logístico' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
                style={{ backgroundColor: 'rgba(200,146,30,0.03)', border: '1px solid rgba(200,146,30,0.1)' }}
              >
                <div className="text-5xl lg:text-6xl font-normal mb-2" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>
                  {typeof stat.value === 'number' ? <GSAPCounter end={stat.value} suffix={stat.suffix} /> : stat.value}
                </div>
                <div className="text-sm uppercase mb-1" style={{ color: '#e8e0d0', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>{stat.label}</div>
                <div className="text-xs" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif' }}>{stat.detail}</div>
              </motion.div>
            ))}
          </div>
          
          <Scroll>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4" style={{ backgroundColor: 'rgba(200,146,30,0.08)', border: '1px solid rgba(200,146,30,0.15)' }}>
              <span className="text-2xl font-normal" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>500+</span>
              <span className="text-base" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Inter, sans-serif' }}>eventos.</span>
              <span className="text-2xl font-normal" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>0</span>
              <span className="text-base" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Inter, sans-serif' }}>estresse.</span>
            </div>
          </div>
          </Scroll>
        </div>
      </section>

      {/* Section 5: Value Pillars - LIGHT CARDS */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.04) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Scroll>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Pilares</span>
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
              </div>
            </Scroll>
            
            <Scroll>
            <h2 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#2a1f14' }}>Três pilares. </span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Uma certeza:</span>
            </h2>
            </Scroll>
            
            <p className="text-base" style={{ color: 'rgba(42,31,20,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Chopp sempre gelado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePillars.map((pillar, idx) => (
              <ValueCard key={idx} pillar={pillar} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Featured Quote - GOLD ACCENT */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1510 0%, #0d0a04 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(200,146,30,0.08) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-10 sm:p-14"
            style={{ backgroundColor: 'rgba(200,146,30,0.04)', border: '1px solid rgba(200,146,30,0.2)' }}
          >
            <span className="text-8xl absolute top-4 left-8 sm:left-12" style={{ color: 'rgba(200,146,30,0.15)', fontFamily: 'Bebas Neue, sans-serif', lineHeight: 1 }}>"</span>
            
            <blockquote className="text-2xl sm:text-3xl italic mb-8 leading-relaxed" style={{ color: '#e8e0d0', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              A Imperador transformou nosso evento. O chopp estava perfeito, a equipe foi impecável. Só precisamos brindando do início ao fim.
            </blockquote>
            
            <cite className="text-sm block" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>
              — Cliente Satisfeito, Evento Corporativo
            </cite>
            
            <div className="absolute bottom-0 right-0 w-16 h-16" style={{ borderBottom: '2px solid rgba(200,146,30,0.25)', borderRight: '2px solid rgba(200,146,30,0.25)' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Brands - DARK GRID */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1208 0%, #0d0a04 50%, #1a1610 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200,146,30,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(200,146,30,0.04) 0%, transparent 50%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Scroll>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Marcas</span>
                <div className="h-px w-12" style={{ backgroundColor: '#c8921e' }}></div>
              </div>
            </Scroll>
            
            <Scroll>
            <h2 className="text-4xl sm:text-5xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#e8e0d0' }}>Cervejarias que </span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>confiamos</span>
            </h2>
            </Scroll>
            
            <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Parcerias com as melhores do mundo para garantir qualidade incomparável em cada chopp.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 text-center cursor-pointer"
                style={{ backgroundColor: 'rgba(200,146,30,0.03)', border: '1px solid rgba(200,146,30,0.1)' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.08) 0%, transparent 60%)' }}></div>
                
                <div className="relative z-10">
                  <span className="text-3xl mb-2 block">{brand.flag}</span>
                  <h3 className="text-base font-medium" style={{ color: '#e8e0d0', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>{brand.name}</h3>
                  <span className="text-xs" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif' }}>{brand.origin}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4" style={{ backgroundColor: 'rgba(200,146,30,0.06)', border: '1px solid rgba(200,146,30,0.15)' }}>
              <span className="text-sm" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif' }}>Trabalhamos com</span>
              <span className="text-3xl font-normal" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>12</span>
              <span className="text-sm" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif' }}>marcas premium</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: CTA - GOLD GRADIENT */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #c8921e 0%, #e0a820 50%, #b87a10 100%)' }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[120px] sm:text-[160px] font-normal leading-none pointer-events-none select-none" style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'rgba(13,10,4,0.05)' }}>IMPERADOR</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <span className="text-xs uppercase block mb-3" style={{ color: 'rgba(13,10,4,0.5)', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>Entre em contato</span>
              <Scroll>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Traga o Imperador para o seu evento</h2>
              </Scroll>
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

function ValueCard({ pillar, index }: { pillar: typeof valuePillars[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 cursor-pointer bg-white transition-all duration-300"
      style={{ border: '1px solid rgba(200,150,30,0.15)', boxShadow: '0 4px 20px rgba(42,31,20,0.04)' }}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(200,146,30,0.08) 0%, transparent 50%)' }}
      />
      
      <div className="relative z-10">
        <div className={iconStyles.wrapper} style={iconStyles.container}>
          <div style={{ color: '#c8921e' }}>{pillar.icon}</div>
        </div>
        
        <h3 className="text-2xl font-normal mt-6 mb-3" style={{ color: '#2a1f14', fontFamily: 'Bebas Neue, sans-serif' }}>{pillar.title}</h3>
        
        <p className="text-base font-medium mb-3" style={{ color: '#c8921e', fontFamily: 'Inter, sans-serif' }}>{pillar.description}</p>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm leading-relaxed pb-3 mb-3" style={{ borderBottom: '1px solid rgba(200,146,30,0.15)', color: 'rgba(42,31,20,0.65)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            {pillar.detail}
          </p>
        </motion.div>
        
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(42,31,20,0.55)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          {pillar.description}
        </p>
      </div>
      
      <motion.div 
        className="absolute bottom-0 right-0"
        transition={{ duration: 0.3 }}
        style={{ 
          borderBottom: '2px solid #c8921e',
          borderRight: '2px solid #c8921e',
          width: isHovered ? '40px' : '0px',
          height: isHovered ? '40px' : '0px'
        }}
      />
    </motion.div>
  )
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-normal" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>
        <GSAPCounter end={value} suffix={suffix} />
      </div>
      <div className="text-[10px] uppercase mt-1 tracking-wider" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>{label}</div>
    </div>
  )
}

export default Sobre