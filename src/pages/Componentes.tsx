import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useIsMobile } from '../hooks/useMedia'

function ButtonDemo() {
  const variants = ['primary', 'secondary', 'outline', 'ghost'] as const
  const sizes = ['sm', 'md', 'lg'] as const

  return (
    <section className="p-8" style={{ backgroundColor: '#faf8f4' }}>
      <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>
        Buttons
      </h3>
      
      <div className="mb-6">
        <span className="text-xs uppercase mb-3 block" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Oswald, sans-serif' }}>Variantes</span>
        <div className="flex flex-wrap gap-4">
          {variants.map(v => (
            <motion.button
              key={v}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-semibold"
              style={{
                backgroundColor: v === 'primary' ? '#c8921e' : v === 'secondary' ? '#0d0a04' : 'transparent',
                color: v === 'primary' ? '#0d0a04' : v === 'outline' ? '#c8921e' : '#e8e0d0',
                border: v === 'outline' ? '2px solid #c8921e' : 'none',
                fontFamily: 'Oswald, sans-serif',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
              }}
            >
              {v}
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <span className="text-xs uppercase mb-3 block" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Oswald, sans-serif' }}>Tamanhos</span>
        <div className="flex items-center gap-4">
          {sizes.map(s => (
            <motion.button
              key={s}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-semibold"
              style={{
                backgroundColor: '#c8921e',
                color: '#0d0a04',
                fontFamily: 'Oswald, sans-serif',
                padding: s === 'sm' ? '8px 16px' : s === 'md' ? '12px 24px' : '16px 32px',
                fontSize: s === 'sm' ? '12px' : s === 'md' ? '14px' : '16px'
              }}
            >
              {s}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

function CardDemo() {
  return (
    <section className="p-8" style={{ backgroundColor: '#0d0a04' }}>
      <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}>
        Cards
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Card Básico', desc: 'Somente borda e sombra' },
          { title: 'Card com Hover', desc: 'Animação ao passar mouse' },
          { title: 'Card Ativo', desc: 'Estado selecionado' }
        ].map((item, i) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-6 cursor-pointer"
            style={{
              backgroundColor: i === 2 ? 'rgba(200,146,30,0.1)' : '#1a1610',
              border: '1px solid rgba(200,146,30,0.2)',
              boxShadow: i === 2 ? '0 8px 24px rgba(200,146,30,0.15)' : '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <h4 className="text-lg font-normal mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c8921e' }}>
              {item.title}
            </h4>
            <p className="text-sm" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Inter, sans-serif' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function InputDemo() {
  const [focused, setFocused] = useState(false)

  return (
    <section className="p-8" style={{ backgroundColor: '#faf8f4' }}>
      <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>
        Inputs
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
        <div>
          <span className="text-xs uppercase mb-3 block" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Oswald, sans-serif' }}>Text Input</span>
          <input
            type="text"
            placeholder="Digite algo..."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full px-4 py-3 text-sm outline-none"
            style={{
              backgroundColor: 'rgba(200,146,30,0.05)',
              border: focused ? '2px solid #c8921e' : '1px solid rgba(200,146,30,0.2)',
              color: '#0d0a04',
              fontFamily: 'Inter, sans-serif'
            }}
          />
        </div>

        <div>
          <span className="text-xs uppercase mb-3 block" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Oswald, sans-serif' }}>Com Ícone</span>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'rgba(30,25,15,0.4)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-12 pr-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: 'rgba(200,146,30,0.05)',
                border: '1px solid rgba(200,146,30,0.2)',
                color: '#0d0a04',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeDemo() {
  const badges = [
    { label: 'Primary', bg: '#c8921e', color: '#0d0a04' },
    { label: 'Dark', bg: 'rgba(42,31,20,0.85)', color: '#e8e0d0' },
    { label: 'Outline', bg: 'rgba(200,146,30,0.1)', color: '#c8921e' }
  ]

  return (
    <section className="p-8" style={{ backgroundColor: '#faf8f4' }}>
      <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>
        Badges
      </h3>

      <div className="flex flex-wrap gap-3">
        {badges.map(b => (
          <span
            key={b.label}
            className="px-3 py-1.5 text-xs uppercase"
            style={{
              backgroundColor: b.bg,
              color: b.color,
              fontFamily: 'Oswald, sans-serif'
            }}
          >
            {b.label}
          </span>
        ))}
      </div>
    </section>
  )
}

function TypographyDemo() {
  const fonts = [
    { name: 'Bebas Neue', sample: 'Título Grande', font: 'Bebas Neue, sans-serif', size: 'text-4xl', color: '#0d0a04' },
    { name: 'Oswald', sample: 'LABEL BUTTON', font: 'Oswald, sans-serif', size: 'text-xl', color: '#0d0a04' },
    { name: 'Inter', sample: 'Corpo de texto padrão', font: 'Inter, sans-serif', size: 'text-base', color: 'rgba(30,25,15,0.7)' }
  ]

  return (
    <section className="p-8" style={{ backgroundColor: '#faf8f4' }}>
      <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>
        Tipografia
      </h3>

      <div className="space-y-6">
        {fonts.map(f => (
          <div key={f.name}>
            <span className="text-xs uppercase mb-2 block" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Oswald, sans-serif' }}>{f.name}</span>
            <p className={f.size} style={{ fontFamily: f.font, color: f.color }}>{f.sample}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ColorsDemo() {
  const colors = [
    { name: 'Primary Gold', hex: '#c8921e' },
    { name: 'Dark', hex: '#0d0a04' },
    { name: 'Light', hex: '#faf8f4' },
    { name: 'Text Dark', hex: '#0d0a04' },
    { name: 'Text Light', hex: '#e8e0d0' },
    { name: 'Muted', hex: 'rgba(200,185,145,0.6)' }
  ]

  return (
    <section className="p-8" style={{ backgroundColor: '#0d0a04' }}>
      <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}>
        Cores
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {colors.map(c => (
          <div key={c.name} className="text-center">
            <div className="w-full h-20 rounded mb-2" style={{ backgroundColor: c.hex }}></div>
            <span className="text-xs block" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Oswald, sans-serif' }}>{c.name}</span>
            <span className="text-[10px] block" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'monospace' }}>{c.hex}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function NavDemo() {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="p-8" style={{ backgroundColor: '#0d0a04' }}>
      <h3 className="text-2xl font-normal mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}>
        Navegação {isMobile ? '(Mobile)' : '(Desktop)'}
      </h3>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {['Início', 'Produtos', 'Eventos', 'Localização', 'Contato', 'Sobre'].map((label, i) => (
            <Link
              key={label}
              to="#"
              className={`px-4 py-2 text-sm font-medium transition-colors ${i === 0 ? 'text-[#c8921e]' : 'text-[rgba(232,224,208,0.8)]'}`}
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 flex items-center justify-center"
            style={{ backgroundColor: '#c8921e', color: '#0d0a04' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}

function ComponentsDemo() {
  return (
    <div className="pt-20 min-h-screen" style={{ backgroundColor: '#0d0a04' }}>
      <div className="max-w-7xl mx-auto">
        <div className="py-12 px-4">
          <h1 className="text-5xl font-normal mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}>
            Components <span style={{ color: '#c8921e' }}>UI</span>
          </h1>
          <p className="text-lg mb-12" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif' }}>
            Biblioteca de componentes do Imperador do Chopp
          </p>

          <ColorsDemo />
          <TypographyDemo />
          <ButtonDemo />
          <CardDemo />
          <InputDemo />
          <BadgeDemo />
          <NavDemo />
        </div>
      </div>
    </div>
  )
}

export default ComponentsDemo