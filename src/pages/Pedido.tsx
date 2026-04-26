import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { filiais } from '../data/filiais'
import { Filial } from '../data/filiais'

const equipamentos = [
  { id: 1, name: 'Chopeira', icon: 'M12 2V6M12 22V18M6 6H18M6 18H18' },
  { id: 2, name: 'Barris', icon: 'M20 8V4H4V20H20V8M4 20V4M4 8H20' },
  { id: 3, name: 'Copos', icon: 'M8 2H16V8C16 12 12 14 12 16H8C8 14 8 12 8 2V8H16' },
  { id: 4, name: 'Taças', icon: 'M4 4H20L18 20H6L4 4M12 8V20' },
]

function Pedido() {
  const [selectedSede, setSelectedSede] = useState<Filial | null>(null)
  const [hasEquipamento, setHasEquipamento] = useState<'sim' | 'nao' | null>(null)
  const [selectedEquipamentos, setSelectedEquipamentos] = useState<number[]>([])
  const [observacoes, setObservacoes] = useState('')

  const toggleEquipamento = (id: number) => {
    setSelectedEquipamentos(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    )
  }

  const handleSubmit = () => {
    if (!selectedSede) return

    let message = `*NOVO PEDIDO - Imperador do Chopp*%0A%0A`
    message += `*Sede:* ${selectedSede.nome}%0A`
    message += `*Cidade:* ${selectedSede.cidade} - ${selectedSede.estado}%0A`
    message += `*Endereço:* ${selectedSede.endereco}%0A%0A`

    if (hasEquipamento === 'sim' && selectedEquipamentos.length > 0) {
      message += `*Equipamentos necessários:*%0A`
      selectedEquipamentos.forEach(id => {
        const eq = equipamentos.find(e => e.id === id)
        if (eq) message += `• ${eq.name}%0A`
      })
      message += `%0A`
    }

    if (observacoes) {
      message += `*Observações:*%0A${observacoes}%0A`
    }

    const whatsappUrl = selectedSede.whatsapp 
      ? `https://wa.me/${selectedSede.whatsapp}?text=${message}`
      : `https://wa.me/5541999999999?text=${message}`
    
    window.open(whatsappUrl, '_blank')
  }

  const canSubmit = selectedSede

  return (
    <div className="pt-20">
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
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: '#c8921e' }}></div>
              <span className="text-xs uppercase tracking-[3px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Pedido</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-4xl sm:text-5xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#e8e0d0' }}>Fazer</span>
              <span style={{ background: 'linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Pedido</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded" style={{ backgroundColor: '#fff', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(200,146,30,0.15)' }}>
                    <span className="text-sm font-bold" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>1</span>
                  </div>
                  <h2 className="text-xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Selecione a sede</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {filiais.map((sede) => (
                    <motion.button
                      key={sede.id}
                      onClick={() => setSelectedSede(sede)}
                      className="p-4 rounded relative text-left transition-all"
                      style={{ 
                        backgroundColor: selectedSede?.id === sede.id ? 'rgba(200,146,30,0.08)' : 'rgba(200,146,30,0.03)',
                        border: selectedSede?.id === sede.id ? '2px solid #c8921e' : '2px solid rgba(200,146,30,0.1)'
                      }}
                      whileHover={{ y: -2 }}
                    >
                      {selectedSede?.id === sede.id && (
                        <div className="absolute top-0 right-0 w-5 h-5" style={{ background: 'linear-gradient(135deg, transparent 50%, #c8921e 50%)', borderRadius: '0 4px 0 0' }}></div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        {selectedSede?.id === sede.id && (
                          <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c8921e' }}>
                            <svg className="w-2.5 h-2.5" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                        <span className="text-sm uppercase" style={{ color: '#0d0a04', fontFamily: 'Oswald, sans-serif' }}>{sede.nome}</span>
                      </div>
                      <span className="text-xs block" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Inter, sans-serif' }}>{sede.cidade} - {sede.estado}</span>
                      <span className="text-xs" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Inter, sans-serif' }}>{sede.endereco}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded" style={{ backgroundColor: '#fff', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(200,146,30,0.15)' }}>
                    <span className="text-sm font-bold" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>2</span>
                  </div>
                  <h2 className="text-xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Você possui equipamentos?</h2>
                </div>
                
                <div className="flex gap-4 mb-4">
                  {['sim', 'nao'].map((op) => (
                    <motion.button
                      key={op}
                      onClick={() => setHasEquipamento(op as 'sim' | 'nao')}
                      className="flex-1 py-3 rounded uppercase text-sm transition-all"
                      style={{ 
                        backgroundColor: hasEquipamento === op ? '#c8921e' : 'rgba(200,146,30,0.08)',
                        color: hasEquipamento === op ? '#fff' : '#0d0a04',
                        border: hasEquipamento === op ? 'none' : '2px solid rgba(200,146,30,0.2)',
                        fontFamily: 'Oswald, sans-serif'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {op === 'sim' ? 'Sim' : 'Não'}
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence>
                  {hasEquipamento === 'sim' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3 pt-2"
                    >
                      {equipamentos.map((eq) => (
                        <motion.label
                          key={eq.id}
                          className="flex items-center gap-3 p-3 rounded cursor-pointer"
                          style={{ 
                            backgroundColor: selectedEquipamentos.includes(eq.id) ? 'rgba(200,146,30,0.08)' : 'rgba(200,146,30,0.03)',
                            border: selectedEquipamentos.includes(eq.id) ? '2px solid #c8921e' : '2px solid rgba(200,146,30,0.1)'
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="checkbox"
                            checked={selectedEquipamentos.includes(eq.id)}
                            onChange={() => toggleEquipamento(eq.id)}
                            className="hidden"
                          />
                          <div className={`w-5 h-5 rounded flex items-center justify-center transition-all`}
                            style={{ 
                              backgroundColor: selectedEquipamentos.includes(eq.id) ? '#c8921e' : 'transparent',
                              border: '2px solid rgba(200,146,30,0.3)'
                            }}
                          >
                            {selectedEquipamentos.includes(eq.id) && (
                              <svg className="w-3 h-3" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>{eq.name}</span>
                        </motion.label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded" style={{ backgroundColor: '#fff', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(200,146,30,0.15)' }}>
                    <span className="text-sm font-bold" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>3</span>
                  </div>
                  <h2 className="text-xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Observações</h2>
                </div>
                
                <textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Descreva os produtos desejados, quantidade, data do evento e outras informações importantes..."
                  rows={4}
                  className="w-full px-4 py-3 rounded text-sm outline-none"
                  style={{ 
                    backgroundColor: 'rgba(200,146,30,0.03)', 
                    border: '2px solid rgba(200,146,30,0.15)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(200,146,30,0.15)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="p-6 rounded" style={{ backgroundColor: '#fff', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}>
                <h3 className="text-xl font-normal mb-5" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Resumo do Pedido</h3>
                
                <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(200,146,30,0.1)' }}>
                  <span className="text-[10px] uppercase tracking-wider block mb-1" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Sede</span>
                  {selectedSede ? (
                    <div>
                      <span className="text-sm block" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>{selectedSede.nome}</span>
                      <span className="text-xs" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Inter, sans-serif' }}>{selectedSede.cidade} - {selectedSede.estado}</span>
                    </div>
                  ) : (
                    <span className="text-sm italic" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Inter, sans-serif' }}>Selecione uma sede</span>
                  )}
                </div>

                {hasEquipamento === 'sim' && selectedEquipamentos.length > 0 && (
                  <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(200,146,30,0.1)' }}>
                    <span className="text-[10px] uppercase tracking-wider block mb-2" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Equipamentos</span>
                    <div className="space-y-1">
                      {selectedEquipamentos.map(id => {
                        const eq = equipamentos.find(e => e.id === id)
                        return eq ? (
                          <span key={id} className="text-xs block" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>• {eq.name}</span>
                        ) : null
                      })}
                    </div>
                  </div>
                )}

                {observacoes && (
                  <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(200,146,30,0.1)' }}>
                    <span className="text-[10px] uppercase tracking-wider block mb-2" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Observações</span>
                    <p className="text-xs" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>{observacoes}</p>
                  </div>
                )}

                <motion.button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="w-full py-4 rounded text-base uppercase"
                  style={{ 
                    backgroundColor: canSubmit ? '#25D366' : 'rgba(200,146,30,0.2)',
                    color: canSubmit ? '#fff' : 'rgba(30,25,15,0.4)',
                    fontFamily: 'Oswald, sans-serif',
                    boxShadow: canSubmit ? '0 4px 16px rgba(37,211,102,0.25)' : 'none'
                  }}
                  whileHover={canSubmit ? { scale: 1.02 } : {}}
                  whileTap={canSubmit ? { scale: 0.98 } : {}}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enviar Pedido
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pedido