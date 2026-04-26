import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sedes = [
  {
    id: 1,
    name: 'Imperador Centro',
    cat: 'Matriz',
    bairro: 'Centro',
    cidade: 'Curitiba',
    address: 'Av. Vicente Machado, 500',
    lat: -25.4284,
    lng: -49.2733,
    rep: 'Roberto Martins',
    whatsapp: '5545998044188',
    tel: '(41) 99999-0001',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 2,
    name: 'Imperador Norte',
    cat: 'Filial',
    bairro: 'Boa Vista',
    cidade: 'Curitiba',
    address: 'Av. Paraná, 2340',
    lat: -25.3833,
    lng: -49.2333,
    rep: 'Carlos Silva',
    whatsapp: '5545998044189',
    tel: '(41) 99999-0002',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 3,
    name: 'Imperador Sul',
    cat: 'Filial',
    bairro: 'Pinheirinho',
    cidade: 'Curitiba',
    address: 'Av. Winston Churchill, 1200',
    lat: -25.4667,
    lng: -49.3167,
    rep: 'Ana Paula',
    whatsapp: '5545998044190',
    tel: '(41) 99999-0003',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 4,
    name: 'Imperador Leste',
    cat: 'Filial',
    bairro: 'Boqueirão',
    cidade: 'Curitiba',
    address: 'Av. do Boqueirão, 890',
    lat: -25.4500,
    lng: -49.2500,
    rep: 'Marcos Oliveira',
    whatsapp: '5545998044191',
    tel: '(41) 99999-0004',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 5,
    name: 'Imperador Oeste',
    cat: 'Filial',
    bairro: 'Portão',
    cidade: 'Curitiba',
    address: 'Av. das Américas, 3400',
    lat: -25.4500,
    lng: -49.3000,
    rep: 'Juliana Santos',
    whatsapp: '5545998044192',
    tel: '(41) 99999-0005',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 6,
    name: 'Imperador Cascavel',
    cat: 'Filial',
    bairro: 'Centro',
    cidade: 'Cascavel',
    address: 'Av. Brasil, 1520',
    lat: -24.9557,
    lng: -53.4554,
    rep: 'Paulo Henrique',
    whatsapp: '5545998044193',
    tel: '(45) 99999-0006',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 7,
    name: 'Imperador Cascavel Oeste',
    cat: 'Filial',
    bairro: 'Núcleo Urbano',
    cidade: 'Cascavel',
    address: 'Av. Tito Muffo, 850',
    lat: -24.9713,
    lng: -53.4918,
    rep: 'Fernanda Lima',
    whatsapp: '5545998044194',
    tel: '(45) 99999-0007',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 8,
    name: 'Imperador Maringá',
    cat: 'Filial',
    bairro: 'Zona 1',
    cidade: 'Maringá',
    address: 'Av. XV de Novembro, 890',
    lat: -23.4203,
    lng: -51.9336,
    rep: 'Ricardo Souza',
    whatsapp: '5545998044195',
    tel: '(44) 99999-0008',
    horario: 'Seg-Sex: 8h-18h'
  },
  {
    id: 9,
    name: 'Imperador Maringá Sul',
    cat: 'Filial',
    bairro: 'Jardim Independência',
    cidade: 'Maringá',
    address: 'Av. Cerro Azul, 1200',
    lat: -23.4467,
    lng: -51.9584,
    rep: 'Vanessa Costa',
    whatsapp: '5545998044196',
    tel: '(44) 99999-0009',
    horario: 'Seg-Sex: 8h-18h'
  }
]

function Localizacao() {
  const [selectedSede, setSelectedSede] = useState<typeof sedes[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    setIsClient(true)
    setIsMobile(window.innerWidth < 1024)
    
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'sede-selected') {
        const sede = sedes.find(s => s.id === e.data.id)
        if (sede) setSelectedSede(sede)
      }
    }
    window.addEventListener('message', handleMessage)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  const handleSelectSede = (sede: typeof sedes[0]) => {
    setSelectedSede(sede)
    setTimeout(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage({ type: 'sede-selected', id: sede.id }, '*')
      }
    }, 100)
  }

  useEffect(() => {
    if (selectedSede && iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'sede-selected', id: selectedSede.id }, '*')
    }
  }, [selectedSede])

  const handleClearSede = () => {
    setSelectedSede(null)
    setTimeout(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage({ type: 'clear-selection' }, '*')
      }
    }, 50)
  }

  const filteredSedes = sedes.filter(sede => 
    sede.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sede.bairro.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-20 relative" style={{ backgroundColor: '#faf8f4' }}>
      {/* Full-screen Map */}
      <div className="relative" style={{ height: isMobile ? 'calc(100vh - 80px)' : 'calc(100vh - 80px)' }}>
        
        {/* Map Container */}
        <div className="absolute inset-0">
          {isClient && (
            <iframe
              ref={iframeRef}
              title="Mapa de Localização"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              loading="lazy"
              srcDoc={`
                <!DOCTYPE html>
                <html>
                <head>
                  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
                  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
                  <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    html, body { height: 100%; width: 100%; }
                    #map { height: 100%; width: 100%; }
                    .custom-marker { background: none; border: none; }
                    
                    .marker-wrapper {
                      position: relative;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    }
                    
                    .marker-pin {
                      width: 36px;
                      height: 44px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                      transition: transform 0.3s ease;
                      position: relative;
                      z-index: 2;
                    }
                    
                    .marker-pin:hover { transform: scale(1.15); }
                    
                    .marker-inactive {
                      background: #fff;
                      border: 3px solid #c8921e;
                      border-radius: 50% 50% 50% 0;
                      transform: rotate(-45deg);
                      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    }
                    
                    .marker-active {
                      background: #c8921e;
                      border: 3px solid #c8921e;
                      border-radius: 50% 50% 50% 0;
                      transform: rotate(-45deg);
                      box-shadow: 0 6px 20px rgba(200,146,30,0.4);
                    }
                    
                    .marker-number {
                      transform: rotate(45deg);
                      font-family: 'Bebas Neue', sans-serif;
                      font-size: 14px;
                      font-weight: bold;
                      color: #0d0a04;
                    }
                    
                    .marker-active .marker-number { color: #fff; }
                    
                    .marker-pulse {
                      position: absolute;
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      background: rgba(200,146,30,0.3);
                      top: -7px;
                      animation: pulse 2s ease-out infinite;
                      z-index: 1;
                    }
                    
                    @keyframes pulse {
                      0% { transform: scale(0.5); opacity: 1; }
                      100% { transform: scale(1.5); opacity: 0; }
                    }
                    
                    .leaflet-popup-content-wrapper {
                      border-radius: 4px;
                      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    }
                    
                    .leaflet-popup-content {
                      margin: 12px 16px;
                      font-family: 'Inter', sans-serif;
                      font-size: 13px;
                      color: #0d0a04;
                    }
                    
                    .leaflet-popup-tip { display: none; }
                    
                    .leaflet-control-zoom { display: none; }
                    .leaflet-control-attribution { 
                      display: none;
                    }
                  </style>
                </head>
                <body>
                  <div id="map"></div>
                  <script>
                    var map = L.map('map', {
                      center: [-24.5, -51.5],
                      zoom: 8,
                      zoomControl: false,
                      attributionControl: false
                    });
                    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                      subdomains: 'abc'
                    }).addTo(map);
                    
                    var markers = [];
                    var sedeData = ${JSON.stringify(sedes)};
                    
                    function createMarkerIcon(num, isActive) {
                      return L.divIcon({
                        className: 'custom-marker',
                        html: '<div class="marker-wrapper">' +
                              (isActive ? '<div class="marker-pulse"></div>' : '') +
                              '<div class="marker-pin ' + (isActive ? 'marker-active' : 'marker-inactive') + '">' +
                              '<span class="marker-number">' + num + '</span></div></div>',
                        iconSize: [36, 60],
                        iconAnchor: [18, 60],
                        popupAnchor: [0, -50]
                      });
                    }
                    
                    sedeData.forEach(function(sede, index) {
                      var marker = L.marker([sede.lat, sede.lng], {
                        icon: createMarkerIcon(index + 1, false)
                      }).addTo(map);
                      
                      var popupContent = '<div style="font-family: Oswald, sans-serif; font-size: 14px; text-transform: uppercase; margin-bottom: 4px;">' + sede.name + '</div>' +
                                         '<div style="font-family: Inter, sans-serif; font-size: 11px; color: #666; margin-bottom: 8px;">' + sede.address + '</div>' +
                                         '<div style="display: flex; gap: 8px;">' +
                                         '<a href="tel:' + sede.tel + '" style="color: #c8921e; text-decoration: none; font-size: 11px;">☎ ' + sede.tel + '</a>' +
                                         '</div>';
                      
                      marker.bindPopup(popupContent);
                      marker.on('click', function(e) {
                        window.parent.postMessage({type: 'sede-selected', id: sede.id}, '*');
                      });
                      
                      markers.push({id: sede.id, marker: marker, lat: sede.lat, lng: sede.lng, name: sede.name});
                    });
                    
                    window.addEventListener('message', function(e) {
                      if (e.data.type === 'sede-selected') {
                        var targetId = e.data.id;
                        var num = 1;
                        markers.forEach(function(m) {
                          if (m.id === targetId) {
                            map.flyTo([m.lat, m.lng], 14, {animate: true, duration: 0.5});
                            m.marker.setIcon(createMarkerIcon(num, true));
                            setTimeout(function() {
                              m.marker.openPopup();
                            }, 300);
                          } else {
                            m.marker.setIcon(createMarkerIcon(num, false));
                          }
                          num++;
                        });
                      } else if (e.data.type === 'clear-selection') {
                        var num = 1;
                        markers.forEach(function(m) {
                          m.marker.setIcon(createMarkerIcon(num, false));
                          m.marker.closePopup();
                          num++;
                        });
                        map.flyTo([-24.5, -51.5], 8, {animate: true});
                      }
                    });
                  </script>
                </body>
                </html>
              `}
            />
          )}
        </div>

        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-[#faf8f4] via-[#faf8f4]/90 to-transparent pointer-events-none">
          <div className="pointer-events-auto">
            <span className="text-xs uppercase tracking-[3px] mb-2 block" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>Onde Estamos</span>
            <h1 className="text-4xl sm:text-5xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#0d0a04' }}>Nossas</span>
              <span style={{ color: '#c8921e' }}> Sedes</span>
            </h1>
          </div>
        </div>

        {/* Left Floating Sidebar */}
        <motion.div 
          initial={{ x: -320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute top-24 left-6 bottom-20 w-[300px] z-10"
        >
          <div 
            className="h-full rounded overflow-hidden flex flex-col"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
          >
            {/* Sidebar Header */}
            <div className="p-4 border-b flex-shrink-0" style={{ borderColor: 'rgba(200,146,30,0.15)' }}>
              <h2 className="text-[16px] font-normal mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>Encontre uma sede</h2>
              <p className="text-[10px]" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Inter, sans-serif' }}>Selecione no mapa ou na lista</p>
              
              {/* Search */}
              <div className="relative mt-3">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: 'rgba(30,25,15,0.4)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar por nome ou bairro..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm outline-none"
                  style={{ 
                    backgroundColor: 'rgba(200,146,30,0.05)', 
                    border: '1px solid rgba(200,146,30,0.2)',
                    color: '#0d0a04',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>
            </div>

            {/* Sede List - Scrollable */}
            <div 
              className="flex-1 overflow-y-auto p-3 space-y-2"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(200,146,30,0.4) rgba(200,146,30,0.1)' }}
            >
              {filteredSedes.map((sede, index) => (
                <motion.button
                  key={sede.id}
                  onClick={() => handleSelectSede(sede)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full text-left p-3 transition-all duration-200 relative overflow-hidden"
                  style={{ 
                    backgroundColor: selectedSede?.id === sede.id ? 'rgba(200,146,30,0.08)' : '#fff',
                    boxShadow: selectedSede?.id === sede.id 
                      ? '0 4px 16px rgba(200,146,30,0.12)' 
                      : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                  whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(200,146,30,0.1)' }}
                >
                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-5 h-5"
                    style={{ 
                      background: selectedSede?.id === sede.id 
                        ? 'linear-gradient(135deg, transparent 50%, #c8921e 50%)' 
                        : 'transparent'
                    }}
                  />
                  
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: selectedSede?.id === sede.id ? '#c8921e' : 'rgba(200,146,30,0.1)',
                        border: '2px solid #c8921e'
                      }}
                    >
                      {selectedSede?.id === sede.id ? (
                        <svg className="w-5 h-5" fill="none" stroke="#0d0a04" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-sm font-bold" style={{ color: '#c8921e', fontFamily: 'Bebas Neue, sans-serif' }}>{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm uppercase" style={{ color: '#0d0a04', fontFamily: 'Oswald, sans-serif' }}>{sede.name}</span>
                        {sede.cat === 'Matriz' && (
                          <span 
                            className="px-2 py-0.5 text-[8px] uppercase font-medium"
                            style={{ backgroundColor: '#c8921e', color: '#fff', fontFamily: 'Oswald, sans-serif' }}
                          >
                            {sede.cat}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] mb-1" style={{ color: 'rgba(30,25,15,0.5)', fontFamily: 'Inter, sans-serif' }}>{sede.address}</p>
                      <span className="text-[10px] px-2 py-0.5" style={{ backgroundColor: 'rgba(200,146,30,0.1)', color: '#c8921e', fontFamily: 'Inter, sans-serif' }}>
                        {sede.bairro}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            
          </div>
        </motion.div>

        {/* Bottom Detail Panel */}
        <AnimatePresence>
          {selectedSede && (
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 150, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute bottom-4 left-6 right-6 z-10"
            >
              <div 
                className="rounded overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.98)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 -4px 32px rgba(0,0,0,0.15)'
                }}
              >
                <div className="p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Left: Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span 
                          className="px-3 py-1 text-xs uppercase font-medium"
                          style={{ backgroundColor: '#c8921e', color: '#fff', fontFamily: 'Oswald, sans-serif' }}
                        >
                          {selectedSede.cat}
                        </span>
                        <h3 className="text-3xl font-normal" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04' }}>
                          {selectedSede.name}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,146,30,0.1)', borderRadius: '50%' }}>
                            <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-xs uppercase block" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Endereço</span>
                            <span className="text-sm" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>{selectedSede.address}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,146,30,0.1)', borderRadius: '50%' }}>
                            <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-xs uppercase block" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Telefone</span>
                            <span className="text-sm" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>{selectedSede.tel}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,146,30,0.1)', borderRadius: '50%' }}>
                            <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-xs uppercase block" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Responsável</span>
                            <span className="text-sm" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>{selectedSede.rep}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,146,30,0.1)', borderRadius: '50%' }}>
                            <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-xs uppercase block" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Horário</span>
                            <span className="text-sm" style={{ color: '#0d0a04', fontFamily: 'Inter, sans-serif' }}>{selectedSede.horario}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right: Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                      <motion.a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${selectedSede.lat},${selectedSede.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-6 py-3 text-sm uppercase"
                        style={{ 
                          backgroundColor: '#0d0a04',
                          color: '#fff',
                          fontFamily: 'Oswald, sans-serif'
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Como Chegar
                      </motion.a>
                      
                      <motion.a
                        href={`https://wa.me/${selectedSede.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-6 py-3 text-sm uppercase"
                        style={{ 
                          backgroundColor: '#c8921e',
                          color: '#fff',
                          fontFamily: 'Oswald, sans-serif'
                        }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </motion.a>
                      
                      <motion.button
                        onClick={handleClearSede}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 flex items-center justify-center"
                        style={{ 
                          backgroundColor: 'rgba(30,25,15,0.05)',
                          border: '1px solid rgba(30,25,15,0.1)'
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="rgba(30,25,15,0.5)" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map Legend - Top Right */}
        <div 
          className="absolute top-24 right-6 p-4 z-10"
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}
        >
          <p className="text-[9px] uppercase tracking-wider mb-2" style={{ color: 'rgba(30,25,15,0.4)', fontFamily: 'Oswald, sans-serif' }}>Legenda</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#fff] border-2 border-[#c8921e] rounded-full"></div>
              </div>
              <span className="text-[10px]" style={{ color: 'rgba(30,25,15,0.6)', fontFamily: 'Inter, sans-serif' }}>Sede</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#c8921e] rounded-full"></div>
              </div>
              <span className="text-[10px]" style={{ color: 'rgba(30,25,15,0.6)', fontFamily: 'Inter, sans-serif' }}>Selecionada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Localizacao