import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { filiais } from '../data/filiais'
import { Stagger, StaggerItem } from '../components/Animations'
import 'leaflet/dist/leaflet.css'

const choppIcon = new L.DivIcon({
  html: `
    <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 44C18 44 2 32 2 18C2 8 9 2 18 2C27 2 34 8 34 18C34 32 18 44 18 44Z" fill="#1C1917"/>
      <rect x="5" y="10" width="26" height="26" rx="3" fill="#CA8A04"/>
      <rect x="7" y="12" width="22" height="22" rx="2" fill="#FCD34D"/>
      <path d="M10 18L16 26H24L30 18" stroke="#CA8A04" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  className: 'chopp-marker',
  iconSize: [36, 44],
  iconAnchor: [18, 44],
  popupAnchor: [0, -40],
})

const choppIconSelected = new L.DivIcon({
  html: `
    <svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 54C22 54 4 40 4 22C4 10 12 2 22 2C32 2 40 10 40 22C40 40 22 54 22 54Z" fill="#1C1917"/>
      <rect x="6" y="12" width="32" height="32" rx="4" fill="#CA8A04"/>
      <rect x="9" y="15" width="26" height="26" rx="3" fill="#FCD34D"/>
      <path d="M14 24L20 32H28L34 24" stroke="#CA8A04" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,
  className: 'chopp-marker-selected',
  iconSize: [44, 54],
  iconAnchor: [22, 54],
  popupAnchor: [0, -50],
})

function MapCenter({ center }: { center: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.5 })
  }, [center, map])
  return null
}

function Localizacao() {
  const [selectedFilial, setSelectedFilial] = useState(filiais[0])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const center: [number, number] = selectedFilial.coordenadas

  const abrirWhatsApp = (filialId: string) => {
    const filial = filiais.find(f => f.id === filialId)
    if (!filial) return
    const mensagem = encodeURIComponent('Olá! Gostaria de mais informações sobre a Imperador do Chopp.')
    window.open(`https://wa.me/55${filial.whatsapp}?text=${mensagem}`, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-12">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Encontre a filial <span className="text-gradient-gold">mais próxima</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-lg text-gray-300"
          >
            Estamos em 3 cidades do Paraná para melhor atender você
          </motion.p>
        </div>
      </section>

      {/* Main Content - Mapa Grande + Painel */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
          
          {/* Sidebar - Lista de Filiais */}
          <div className="lg:col-span-3 bg-white border-r border-gray-100 p-6 order-2 lg:order-1">
            <h3 className="text-lg font-bold text-primary mb-4">Selecione uma filial</h3>
            <Stagger delay={0.1}>
              {filiais.map((filial) => (
                <StaggerItem key={filial.id}>
                  <motion.button
                    onClick={() => setSelectedFilial(filial)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 mb-3 ${
                      selectedFilial.id === filial.id
                        ? 'bg-gradient-to-r from-cta/10 to-amber-50 border-2 border-cta shadow-lg shadow-cta/10'
                        : 'bg-gray-50 border-2 border-transparent hover:border-cta/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          selectedFilial.id === filial.id 
                            ? 'gradient-gold' 
                            : 'bg-gray-200'
                        }`}
                        animate={selectedFilial.id === filial.id ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className={`w-6 h-6 ${selectedFilial.id === filial.id ? 'text-white' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 5.5A.5.5 0 0 1 5.5 5H6v6.5a2 2 0 0 1-2 2h-1v3a3 3 0 0 1-3 3H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V6h.5A.5.5 0 0 1 5 5.5zM8 8.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3z"/>
                        </svg>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-primary truncate">{filial.cidade}</p>
                        <p className="text-sm text-gray-500">{filial.estado}</p>
                      </div>
                      {selectedFilial.id === filial.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <svg className="w-6 h-6 text-cta" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Info da filial selecionada */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFilial.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-4 bg-gradient-to-br from-cta/5 to-amber-50 rounded-2xl border border-cta/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Filial selecionada</span>
                </div>
                <p className="text-sm text-gray-600">
                  Clique no marcador no mapa ou use os botões abaixo para entrar em contato.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mapa - Grande e Interativo */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <motion.div 
              className="h-[350px] lg:h-[700px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isClient && (
                <MapContainer
                  center={center}
                  zoom={13}
                  className="h-full w-full"
                  scrollWheelZoom={true}
                  style={{ background: '#f8fafc' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />
                  <MapCenter center={center} />
                  {filiais.map((filial) => (
                    <Marker
                      key={filial.id}
                      position={filial.coordenadas}
                      icon={selectedFilial.id === filial.id ? choppIconSelected : choppIcon}
                      eventHandlers={{
                        click: () => setSelectedFilial(filial),
                      }}
                    >
                      <Popup>
                        <div className="p-3 min-w-[200px] text-center">
                          <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-2">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5 5.5A.5.5 0 0 1 5.5 5H6v6.5a2 2 0 0 1-2 2h-1v3a3 3 0 0 1-3 3H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V6h.5A.5.5 0 0 1 5 5.5z"/>
                            </svg>
                          </div>
                          <p className="font-bold text-lg text-primary">{filial.cidade}</p>
                          <p className="text-sm text-gray-500 mb-3">{filial.estado}</p>
                          <button
                            onClick={() => abrirWhatsApp(filial.id)}
                            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
                            </svg>
                            Falar no WhatsApp
                          </button>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              )}
            </motion.div>
            
            {/* Overlay de instruções */}
            <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg inline-flex items-center gap-2">
                <svg className="w-4 h-4 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">Clique nos marcadores para mais informações</span>
              </div>
            </div>
          </div>

          {/* Painel Lateral - Info da Filial */}
          <div className="lg:col-span-3 bg-gradient-to-b from-gray-50 to-white p-6 border-l border-gray-100 order-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFilial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <motion.div 
                    className="w-24 h-24 rounded-3xl gradient-gold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cta/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 5.5A.5.5 0 0 1 5.5 5H6v6.5a2 2 0 0 1-2 2h-1v3a3 3 0 0 1-3 3H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V6h.5A.5.5 0 0 1 5 5.5zM8 8.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3z"/>
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-primary">{selectedFilial.cidade}</h2>
                  <p className="text-gray-500">{selectedFilial.estado}</p>
                </div>

                <div className="space-y-4">
                  <motion.button
                    onClick={() => abrirWhatsApp(selectedFilial.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
                    </svg>
                    Falar no WhatsApp
                  </motion.button>

                  <motion.a
                    href="#venda"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-cta text-white rounded-2xl font-semibold text-lg shadow-lg shadow-cta/30 hover:bg-cta-dark transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Solicitar Orçamento
                  </motion.a>
                </div>

                <div className="mt-8 p-4 bg-white rounded-2xl shadow-md">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Sobre esta filial
                  </h4>
                  <p className="text-sm text-gray-600">
                    Nossa filial em {selectedFilial.cidade} atende toda a região com excelência e qualidade Imperador do Chopp.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Localizacao