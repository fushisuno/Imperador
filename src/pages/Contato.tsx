import { useState } from 'react'
import { motion } from 'framer-motion'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 11) value = value.slice(0, 11)
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`
    } else if (value.length > 0) {
      value = `(${value}`
    }
    setFormData({ ...formData, telefone: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const assuntoText = formData.assunto === 'vendas' ? 'Vendas' 
                       : formData.assunto === 'suporte' ? 'Suporte' 
                       : formData.assunto === 'parceria' ? 'Parceria' 
                       : 'Outros'
    
    const message = `Olá! Vim pelo site do Imperador do Chopp.%0A%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}%0A*Assunto:* ${assuntoText}%0A%0A*Mensagem:*%0A${formData.mensagem}`
    
    window.open(`https://wa.me/5541999999999?text=${message}`, '_blank')
    
    setFormData({ nome: '', telefone: '', assunto: '', mensagem: '' })
  }

  return (
    <div className="pt-20">
      {/* Section 1: Hero - DARK */}
      <section className="relative py-6 overflow-hidden" style={{ backgroundColor: '#0d0a04' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.12) 0%, transparent 60%)' }}></div>
          <motion.div 
            className="absolute top-0 right-1/4 w-[200px] h-[200px]"
            style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,146,30,0.25), transparent)' }}></div>
          <div className="absolute top-1/2 left-[60px] w-[80px] h-px" style={{ background: 'linear-gradient(90deg, rgba(200,146,30,0.15), transparent)' }}></div>
          <div className="absolute top-1/2 right-[60px] w-[80px] h-px" style={{ background: 'linear-gradient(270deg, rgba(200,146,30,0.15), transparent)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Contato</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-4xl sm:text-5xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#e8e0d0' }}>Fale</span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Conosco</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Section 2: Main Contact - LIGHT */}
      <section className="py-12" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
            {/* Formulário - Envia para WhatsApp */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded" style={{ backgroundColor: '#fff', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
                <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Formulário</span>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.2) 0%, rgba(37,211,102,0.1) 100%)' }}>
                  <svg className="w-6 h-6" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-normal mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Envie pelo WhatsApp</h2>
                  <p className="text-sm" style={{ color: 'rgba(30,25,15,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                    Preencha os dados e clique em enviar para iniciar uma conversa
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: 'rgba(30,25,15,0.6)', fontFamily: 'Oswald, sans-serif' }}>Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 outline-none transition-all text-base rounded"
                      style={{ 
                        backgroundColor: 'rgba(200,146,30,0.03)', 
                        border: '2px solid rgba(200,146,30,0.15)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(200,146,30,0.15)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                  <div className="relative">
                    <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: 'rgba(30,25,15,0.6)', fontFamily: 'Oswald, sans-serif' }}>Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handlePhoneChange}
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 outline-none transition-all text-base rounded"
                      style={{ 
                        backgroundColor: 'rgba(200,146,30,0.03)', 
                        border: '2px solid rgba(200,146,30,0.15)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(200,146,30,0.15)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: 'rgba(30,25,15,0.6)', fontFamily: 'Oswald, sans-serif' }}>Assunto</label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 outline-none transition-all text-base rounded"
                    style={{ 
                      backgroundColor: 'rgba(200,146,30,0.03)', 
                      border: '2px solid rgba(200,146,30,0.15)',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(200,146,30,0.15)'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="vendas">Vendas</option>
                    <option value="suporte">Suporte</option>
                    <option value="parceria">Parceria</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: 'rgba(30,25,15,0.6)', fontFamily: 'Oswald, sans-serif' }}>Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 outline-none transition-all resize-none text-base rounded"
                    style={{ 
                      backgroundColor: 'rgba(200,146,30,0.03)', 
                      border: '2px solid rgba(200,146,30,0.15)',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(200,146,30,0.15)'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 text-base uppercase w-full md:w-auto rounded"
                  style={{ 
                    backgroundColor: '#25D366',
                    color: '#fff',
                    fontFamily: 'Oswald, sans-serif',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.25)'
                  }}
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enviar pelo WhatsApp
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Info Lateral */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Card Telefone */}
              <div className="p-6 relative overflow-hidden rounded" style={{ 
                backgroundColor: 'rgba(255,255,255,0.95)', 
                backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.06)'
              }}>
                <div className="absolute top-0 right-0 w-6 h-6" style={{ background: 'linear-gradient(135deg, transparent 50%, #c8921e 50%)' }}></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, rgba(200,146,30,0.2) 0%, rgba(200,146,30,0.08) 100%)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block mb-0.5" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Telefone</span>
                    <span className="text-base" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>(41) 3333-4444</span>
                  </div>
                </div>
                <motion.a
                  href="tel:+554133334444"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-2 text-sm uppercase w-full rounded"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(200,146,30,0.3)',
                    color: '#c8921e',
                    fontFamily: 'Oswald, sans-serif'
                  }}
                >
                  Ligar Agora
                </motion.a>
              </div>

              {/* Card Endereço */}
              <div className="p-6 relative overflow-hidden rounded" style={{ 
                backgroundColor: 'rgba(255,255,255,0.95)', 
                backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.06)'
              }}>
                <div className="absolute top-0 right-0 w-6 h-6" style={{ background: 'linear-gradient(135deg, transparent 50%, #c8921e 50%)' }}></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, rgba(200,146,30,0.2) 0%, rgba(200,146,30,0.08) 100%)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block mb-0.5" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Endereço</span>
                    <span className="text-sm" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>
                      Av. Vicente Machado, 500<br/>
                      Centro - Curitiba/PR
                    </span>
                  </div>
                </div>
                <motion.a
                  href="/localizacao"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-2 text-sm uppercase w-full rounded"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(200,146,30,0.3)',
                    color: '#c8921e',
                    fontFamily: 'Oswald, sans-serif'
                  }}
                >
                  Ver no Mapa
                </motion.a>
              </div>

              {/* Card Horário */}
              <div className="p-6 relative overflow-hidden rounded" style={{ 
                backgroundColor: 'rgba(255,255,255,0.95)', 
                backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.06)'
              }}>
                <div className="absolute top-0 right-0 w-6 h-6" style={{ background: 'linear-gradient(135deg, transparent 50%, #c8921e 50%)' }}></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, rgba(200,146,30,0.2) 0%, rgba(200,146,30,0.08) 100%)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block mb-0.5" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Horário</span>
                    <span className="text-sm" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>Seg-Sex: 8h às 18h</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: CTA WhatsApp - GOLD */}
      <section className="relative py-10 overflow-hidden rounded" style={{ background: 'linear-gradient(135deg, #c8921e 0%, #e0a820 50%, #b87a10 100%)' }}>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[80px] font-normal leading-none pointer-events-none select-none" style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'rgba(0,0,0,0.05)' }}>WHATSAPP</div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-normal mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Prefere falar direto?</h2>
          <p className="text-base mb-6" style={{ color: 'rgba(13,10,4,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Clique abaixo e inicie uma conversa pelo WhatsApp
          </p>
          
          <motion.a
            href="https://wa.me/5541999999999?text=Olá! Gostaria de mais informações sobre o Imperador do Chopp."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: ['0 8px 32px rgba(0,0,0,0.2)', '0 12px 40px rgba(0,0,0,0.3)', '0 8px 32px rgba(0,0,0,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-8 py-4 text-base uppercase rounded"
            style={{ 
              backgroundColor: '#0d0a04',
              color: '#fff',
              fontFamily: 'Oswald, sans-serif'
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Conversar pelo WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}

export default Contato