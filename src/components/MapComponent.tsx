import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Sede {
  id: number
  name: string
  cat: string
  bairro: string
  cidade: string
  address: string
  lat: number
  lng: number
  rep: string
  whatsapp: string
  tel: string
  horario: string
}

interface MapProps {
  sedes: Sede[]
  selectedSede: Sede | null
  onSedeSelect: (sede: Sede) => void
  onClearSede: () => void
}

interface MapControllerProps {
  selectedSede: Sede | null
}

function MapController({ selectedSede }: MapControllerProps) {
  const map = useMap()
  
  useEffect(() => {
    if (selectedSede) {
      map.flyTo([selectedSede.lat, selectedSede.lng], 13, { animate: true, duration: 0.5 })
    } else {
      map.flyTo([-24.5, -51.5], 8, { animate: true })
    }
  }, [selectedSede, map])
  
  return null
}

function createMarkerIcon(num: number, isActive: boolean) {
  const color = isActive ? '#c8921e' : '#fff'
  const textColor = isActive ? '#fff' : '#0d0a04'
  const pulse = isActive ? `<div style="position: absolute; width: 50px; height: 50px; border-radius: 50%; background: rgba(200,146,30,0.3); top: -7px; animation: pulse 2s ease-out infinite; z-index: 1;"></div>` : ''
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
        ${pulse}
        <div style="
          width: 36px;
          height: 44px;
          background: ${color};
          border: 3px solid #c8921e;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: ${isActive ? '0 6px 20px rgba(200,146,30,0.4)' : '0 4px 12px rgba(0,0,0,0.15)'};
          transition: all 0.3s ease;
        ">
          <span style="
            transform: rotate(45deg);
            font-family: 'Bebas Neue', sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: ${textColor};
          ">${num}</span>
        </div>
      </div>
    `,
    iconSize: [36, 60],
    iconAnchor: [18, 60],
    popupAnchor: [0, -50]
  })
}

export default function MapComponent({ sedes, selectedSede, onSedeSelect }: MapProps) {
  return (
    <MapContainer
      center={[-24.5, -51.5]}
      zoom={8}
      style={{ height: '100%', width: '100%', zIndex: 1 }}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        subdomains={['a', 'b', 'c']}
      />
      
      <MapController selectedSede={selectedSede} />
      
      {sedes.map((sede, index) => (
        <Marker
          key={sede.id}
          position={[sede.lat, sede.lng]}
          icon={createMarkerIcon(index + 1, selectedSede?.id === sede.id)}
          eventHandlers={{
            click: () => onSedeSelect(sede),
          }}
        />
      ))}
      
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          font-family: 'Inter', sans-serif;
        }
        .leaflet-popup-content {
          margin: 12px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #0d0a04;
        }
        .leaflet-popup-tip { display: none; }
        .leaflet-control-zoom { display: none; }
        .leaflet-control-attribution { display: none; }
        @keyframes pulse {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .leaflet-container {
          background: #f5f5f5;
        }
      `}</style>
    </MapContainer>
  )
}