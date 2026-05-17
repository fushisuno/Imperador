import { motion } from "framer-motion";

interface Location {
  id: string;
  nome: string;
  x: number;
  y: number;
  tipo: "sede" | "filial";
}

const locations: Location[] = [
  { id: "cascavel", nome: "Cascavel", x: 65, y: 50, tipo: "sede" },
  { id: "foz", nome: "Foz do Iguaçu", x: 15, y: 75, tipo: "filial" },
  { id: "guaira", nome: "Guaíra", x: 55, y: 75, tipo: "filial" },
  { id: "guarapuava", nome: "Guarapuava", x: 60, y: 25, tipo: "filial" },
  { id: "assis", nome: "Assis Chateaubriand", x: 70, y: 45, tipo: "filial" },
  { id: "palotina", nome: "Palotina", x: 75, y: 55, tipo: "filial" },
  { id: "lindoeste", nome: "Lindoeste", x: 50, y: 60, tipo: "filial" },
  { id: "capitao", nome: "Capitão Leônidas", x: 80, y: 35, tipo: "filial" },
  { id: "maringa", nome: "Maringá", x: 88, y: 40, tipo: "filial" },
];

interface MapaParanaProps {
  onLocationClick?: (location: Location) => void;
}

export default function MapaParana({ onLocationClick }: MapaParanaProps) {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 10px 30px rgba(200,146,30,0.15))" }}
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a1f14" />
            <stop offset="100%" stopColor="#1a1610" />
          </linearGradient>
        </defs>

        <path
          d="M 10 70 Q 20 85 35 80 Q 50 75 55 85 Q 60 95 70 90 Q 85 85 90 75 Q 95 65 90 55 Q 85 45 90 35 Q 95 25 85 20 Q 75 15 70 10 Q 65 5 55 8 Q 45 10 40 15 Q 30 20 25 30 Q 20 40 15 50 Q 10 60 10 70 Z"
          fill="url(#mapGradient)"
          stroke="#c8921e"
          strokeWidth="0.5"
          opacity="0.9"
        />

        {locations.map((loc) => (
          <g key={loc.id}>
            {loc.tipo === "sede" && (
              <motion.circle
                cx={loc.x}
                cy={loc.y}
                r="4"
                fill="none"
                stroke="#c8921e"
                strokeWidth="0.5"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r={loc.tipo === "sede" ? 1.8 : 1.2}
              fill={loc.tipo === "sede" ? "#c8921e" : "rgba(200,146,30,0.6)"}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + locations.indexOf(loc) * 0.1, duration: 0.3 }}
              style={{ cursor: "pointer" }}
              onClick={() => onLocationClick?.(loc)}
            />
            <motion.text
              x={loc.x}
              y={loc.y + (loc.tipo === "sede" ? 5 : 4)}
              fontSize="2.5"
              fill={loc.tipo === "sede" ? "#c8921e" : "rgba(200,185,145,0.6)"}
              textAnchor="middle"
              fontFamily="Oswald, sans-serif"
              fontWeight={loc.tipo === "sede" ? "bold" : "normal"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + locations.indexOf(loc) * 0.1 }}
              style={{ cursor: "pointer" }}
            >
              {loc.nome}
            </motion.text>
          </g>
        ))}

        <g transform="translate(5, 92)">
          <circle cx="2" cy="0" r="1.2" fill="#c8921e" />
          <text x="4" y="1" fontSize="2" fill="rgba(200,185,145,0.6)" fontFamily="Oswald, sans-serif">Sede</text>
          <circle cx="15" cy="0" r="0.8" fill="rgba(200,146,30,0.6)" />
          <text x="17" y="1" fontSize="2" fill="rgba(200,185,145,0.6)" fontFamily="Oswald, sans-serif">Filial</text>
        </g>
      </svg>

      <motion.div
        className="absolute top-4 right-4 p-3 rounded-lg"
        style={{ backgroundColor: "rgba(42,31,20,0.95)", border: "1px solid rgba(200,146,30,0.3)" }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-xs uppercase mb-1" style={{ color: "rgba(200,185,145,0.5)", fontFamily: "Oswald, sans-serif", letterSpacing: "1px" }}>
          Mapa do Paraná
        </div>
        <div className="text-sm" style={{ color: "#e8e0d0", fontFamily: "Bebas Neue, sans-serif" }}>
          Raio de 300km
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className="w-8 h-8 rounded-full mx-auto mb-2"
            style={{ backgroundColor: "#c8921e" }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs" style={{ color: "rgba(200,185,145,0.5)" }}>Carregando...</span>
        </div>
      </motion.div>
    </div>
  );
}