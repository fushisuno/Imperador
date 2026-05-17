import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  GSAPScrollReveal as Scroll,
} from "../components/AnimationsGSAP";
import { config } from "../config";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const headquarters = [
  { 
    id: 1, 
    name: "Cascavel - Sede Principal", 
    lat: -24.7136, 
    lng: -53.4356, 
    type: "Sede",
    description: "Matriz - atendimento full"
  },
  { 
    id: 2, 
    name: "Foz do Iguaçu", 
    lat: -25.5478, 
    lng: -54.5882, 
    type: "Filial",
    description: "Atendimento região Oeste"
  },
  { 
    id: 3, 
    name: "Guarapuava", 
    lat: -25.0910, 
    lng: -51.4791, 
    type: "Filial",
    description: "Atendimento região Central"
  },
  { 
    id: 4, 
    name: "Maringá", 
    lat: -23.4205, 
    lng: -51.9331, 
    type: "Filial",
    description: "Atendimento região Norte"
  },
];

const createPulseIcon = () => {
  return L.divIcon({
    className: 'custom-pulse-marker',
    html: `
      <div style="
        position: relative;
        width: 40px;
        height: 40px;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          background: #c8921e;
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(200,146,30,0.4);
          animation: pulse-ring 2s infinite;
        "></div>
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          background: #c8921e;
          border-radius: 50%;
          border: 2px solid #fff;
        "></div>
      </div>
      <style>
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(200,146,30, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(200,146,30, 0); }
          100% { box-shadow: 0 0 0 0 rgba(200,146,30, 0); }
        }
      </style>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

const eventTypes = [
  {
    id: "social",
    label: "Eventos Sociais",
    badge: "Festas",
    title: "Festas ",
    title2: "Sociais",
    description: "Aniversários, batizados, formaturas e celebrações. O chopp que todo mundo ama, sem você precisar se preocupar com nada.",
    benefits: [
      "Montagem e regulagem da chopeira",
      "Suporte técnico durante o evento",
      "Quantidade ideal garantida",
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=600&h=450&fit=crop",
    ],
  },
  {
    id: "corporativo",
    label: "Corporativo",
    badge: "Empresas",
    title: "Eventos ",
    title2: "Corporativos",
    description: "Confraternizações, lançamentos e eventos empresariais. Profissionalismo e qualidade no serviço.",
    benefits: [
      "Pontualidade na entrega",
      "Estrutura completa",
      "Atendimento até as 22h",
    ],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop",
    ],
  },
  {
    id: "bares",
    label: "Bares e Restaurantes",
    badge: "Parceria",
    title: "Bares e ",
    title2: "Restaurantes",
    description: "Parceria de fornecimento contínuo com suporte técnico. Seu estabelecimento sempre bem atendidas.",
    benefits: [
      "Fornecimento contínuo",
      "Manutenção inclusa",
      "Atendimento prioritário",
    ],
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=450&fit=crop",
    ],
  },
  {
    id: "casamento",
    label: "Casamentos",
    badge: "Casamento",
    title: "Casamentos ",
    title2: "e Festas",
    description: "O dia mais especial merece o melhor chopp. Estrutura completa para não worry com nada.",
    benefits: [
      "Chopeiras temáticas",
      "Montagem antecipada",
      "Equipe completa",
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=450&fit=crop",
    ],
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState("social");
  const [activeChopeiraTab, setActiveChopeiraTab] = useState("moto");
  const [activeProductFilter, setActiveProductFilter] = useState("all");
  const [isPaused, setIsPaused] = useState(false);
  const [currentDot, setCurrentDot] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const allProducts = [
    { name: "Pilsen", category: "chopp", type: "Clássica", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop", desc: "Leve e refrescante" },
    { name: "Weiss", category: "chopp", type: "Trigo", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Aromática e citrus" },
    { name: "Vienna", category: "chopp", type: "Amber", image: "https://images.unsplash.com/photo-1505236858219-9a1753776f75?w=400&h=400&fit=crop", desc: "Malte caramelizado" },
    { name: "IPA", category: "chopp", type: "American", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Lúpulo intenso" },
    { name: "Stout", category: "chopp", type: "Escura", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Torra marcada" },
    { name: "Barril 20L", category: "barril", type: "Pequeno", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Eventos pequenos" },
    { name: "Barril 30L", category: "barril", type: "Médio", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Festas médias", highlight: true },
    { name: "Barril 50L", category: "barril", type: "Grande", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Grandes eventos" },
    { name: "Growler Tinto", category: "growler", type: "Vinho", image: "https://images.unsplash.com/photo-1505236858219-9a1753776f75?w=400&h=400&fit=crop", desc: "Encorpado", highlight: true },
    { name: "Growler Branco", category: "growler", type: "Vinho", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Leve e refrescante" },
    { name: "Chopeira Premium", category: "acessorios", type: "Equipamento", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Estrutura completa" },
    { name: "Kit Copos", category: "acessorios", type: "Kit", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Conjunto elegante" },
  ];

  const getFilteredProducts = () => allProducts.filter(p => activeProductFilter === 'all' || p.category === activeProductFilter);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 200;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToDot = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 196;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentDot(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        if (carouselRef.current.scrollLeft >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentDot(0);
        } else {
          scrollCarousel('right');
          setCurrentDot(prev => Math.min(prev + 1, getFilteredProducts().length - 1));
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, activeProductFilter]);

  const currentContent = eventTypes.find((t) => t.id === activeTab) || eventTypes[0];

  return (
    <div>
{/* ==============================
          1. HERO - Video Background
          ============================== */}
      <section
        className="relative h-[90vh] flex items-center overflow-hidden"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Imperador/video_canecaenxendo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(20, 12, 0, 0.95) 0%, rgba(20, 12, 0, 0.8) 50%, rgba(20, 12, 0, 0.6) 100%)"
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border"
              style={{
                borderColor: "rgba(200, 146, 30, 0.4)",
                backgroundColor: "rgba(200, 146, 30, 0.1)",
                color: "#c8921e",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#c8921e" }}
              ></span>
              Desde 2017
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-tight mb-4">
              <span style={{ color: "#e8e0d0" }}>Seu evento,</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #d4860e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                nosso chopp
              </span>
            </h1>

            <p className="text-base sm:text-lg max-w-lg leading-relaxed mb-8 text-white">
              Chopp gelado, chopeira montada, suporte garantido até as 22h. Você só cuidar de brindar o resto é com o Imperador.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`https://wa.me/${config.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold"
                style={{
                  backgroundColor: "#c8921e",
                  color: "#1a1208",
                  borderRadius: "4px",
                  fontFamily: "Oswald, sans-serif",
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="#1a1208"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Quero chopp pro meu evento
              </motion.a>
              <motion.a
                href={`https://wa.me/${config.whatsapp}?text=Olá! Quero ser um revendedor Imperador do Chopp`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium"
                style={{
                  backgroundColor: "transparent",
                  color: "#c8921e",
                  border: "1px solid rgba(200, 146, 30, 0.4)",
                  borderRadius: "4px",
                  fontFamily: "Oswald, sans-serif",
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Quero revender Imperador
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==============================
         2. QUEM SOMOS - Design Enxuto e Light
         ============================== */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: "#faf8f4" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10" style={{ background: "linear-gradient(180deg, rgba(200,146,30,0.4) 0%, transparent 100%)" }} />
          <div className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)" }} />
          <div className="absolute bottom-20 -right-20 w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.06) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="relative">
                <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-3xl overflow-hidden relative" style={{ backgroundColor: "#fff", boxShadow: "0 20px 60px rgba(200,146,30,0.1)" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl lg:text-8xl font-black" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e", lineHeight: 1 }}>2017</div>
                      <div className="mt-2 text-xs" style={{ color: "#b8985a", letterSpacing: "4px", fontFamily: "Oswald, sans-serif" }}>DESDE ENTÃO</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 rounded-3xl" style={{ borderColor: "rgba(200,146,30,0.2)" }} />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#c8921e", boxShadow: "0 8px 24px rgba(200,146,30,0.3)" }}>
                  <span className="text-2xl font-black" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#fff" }}>8+</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px" style={{ backgroundColor: "#c8921e" }} />
              <span className="text-xs font-semibold uppercase" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "4px" }}>Quem Somos</span>
              <div className="w-10 h-px" style={{ backgroundColor: "#c8921e" }} />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6" style={{ fontFamily: "Bebas Neue, sans-serif", lineHeight: 1.1 }}>
              <span style={{ color: "#2a1f14" }}>Nascemos pra resolver </span>
              <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #d4860e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>seu problema</span>
            </h2>
            
            <p className="text-lg mb-10 max-w-2xl" style={{ color: "#5a4a3a", lineHeight: 1.7 }}>
              Desde 2017 entregando chopp de qualidade em Cascavel e região. Atendimento honesto, estrutura completa e suporte até as 22h.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: "M5 13l4 4L19 7", text: "Qualidade garantida" },
                { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", text: "Estrutura completa" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Suporte até 22h" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full" style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.25)", boxShadow: "0 4px 12px rgba(200,146,30,0.08)" }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#c8921e" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: "#2a1f14" }}>{item.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="/sobre"
              whileHover={{ y: 2 }}
              className="inline-flex items-center gap-2 text-sm font-medium group px-6 py-3 rounded-xl"
              style={{ backgroundColor: "#c8921e", color: "#fff" }}
            >
              <span>Conheça nossa história completa</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ==============================
         2.1. NOSSOS BARES - Lista de Parceiros
         ============================== */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.15) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-8" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.1) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
          <Scroll>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
                <span className="text-xs font-medium uppercase" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}>Parceiros</span>
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-normal">
                <span style={{ color: "#2a1f14" }}>Nossos </span>
                <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bares</span>
              </h2>
              <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "rgba(42,31,20,0.65)", fontFamily: "Playfair Display, serif" }}>
                Establecimientos parceiros que servem chopp Imperador com qualidade
              </p>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Bar do João", address: "Rua das Flores, 123 - Centro", city: "Cascavel", hours: "Seg-Sáb: 18h-02h", phone: "(45) 99999-0001" },
              { name: "Choperia Central", address: "Av. Brasil, 456 - Centro", city: "Foz do Iguaçu", hours: "Ter-Dom: 17h-00h", phone: "(45) 99999-0002" },
              { name: "Boteco do Zé", address: "Praça da Matrix, 78 - Zona 01", city: "Cascavel", hours: "Qui-Sáb: 19h-03h", phone: "(45) 99999-0003" },
              { name: "Ponto do Chopp", address: "Av. Paraná, 890 - Jd. América", city: "Guarapuava", hours: "Qua-Dom: 18h-01h", phone: "(42) 99999-0004" },
              { name: "Bar da Esquina", address: "Rua XV de Novembro, 234 - Centro", city: "Maringá", hours: "Seg-Sáb: 17h-02h", phone: "(44) 99999-0005" },
              { name: "Chopp & Rock", address: "Av. das Cataratas, 567 - Vila Yolanda", city: "Foz do Iguaçu", hours: "Sex-Sáb: 19h-04h", phone: "(45) 99999-0006" },
            ].map((bar, i) => (
              <motion.div
                key={bar.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-5 cursor-pointer"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(200,146,30,0.15)", borderRadius: "16px" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}>{bar.name}</h3>
                  <span className="px-2 py-1 text-xs rounded" style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>{bar.city}</span>
                </div>
                
                <div className="space-y-2 text-sm" style={{ color: "rgba(42,31,20,0.7)" }}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: "#c8921e" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{bar.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: "#c8921e" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{bar.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: "#c8921e" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{bar.phone}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t flex justify-end" style={{ borderColor: "rgba(200,146,30,0.1)" }}>
                  <a 
                    href={`https://wa.me/55${bar.phone.replace(/\D/g,'')}?text=Olá! Vi o bar ${bar.name} na lista de parceiros Imperador`}
                    className="text-sm font-medium flex items-center gap-1 group-hover:text-[#c8921e] transition-colors"
                    style={{ color: "rgba(42,31,20,0.6)", fontFamily: "Oswald, sans-serif" }}
                  >
                    Falar no WhatsApp
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center mt-8 text-sm italic"
            style={{ color: "rgba(42,31,20,0.4)", fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            *Mais parceiros serão adicionados conforme verificação dos dados
          </motion.p>
        </div>
      </section>

{/* ==============================
          3. DELIVERY - Dark Theme com barril.png
          ============================== */}
      <section className="py-10 lg:py-20 relative" style={{ backgroundColor: "#1a1208" }}>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT SIDE - Content (50%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: "#c8921e" }} />
                <span className="text-xs font-semibold uppercase" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "4px" }}>Delivery</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4" style={{ fontFamily: "Bebas Neue, sans-serif", lineHeight: 1.1 }}>
                <span style={{ color: "#e8e0d0" }}>Chopp na sua casa,</span>
                <br />
                <span style={{ color: "#e8e0d0" }}>na sua empresa ou</span>
                <br />
                <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #d4860e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>onde a festa acontecer</span>
              </h2>

              <p className="text-base mb-2 leading-relaxed text-white" style={{fontFamily: "Playfair Display, serif" }}>
                Pra um jantar em família, aniversário na garagem ou confraternização da firma, o Imperador leva o chopp até você com a mesma qualidade que usamos nos grandes eventos.
              </p>

              <p className="text-sm font-medium mb-6" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "1px" }}>
                BARRIS DO TAMANHO DA SUA COMEMORAÇÃO
              </p>

              {/* Benefits with titles and subtitles */}
              <div className="space-y-5 mb-8">
                {[
                  { title: "Barris de 20L, 30L e 50L", subtitle: "Escolha o tamanho ideal pro seu evento" },
                  { title: "Chopp sempre bem armazenado", subtitle: "Temperatura ideal do início ao fim" },
                  { title: "Entrega agendada e suporte", subtitle: "Sem surpresa de logística no dia" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#c8921e" }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1a1208" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold block" style={{ color: "#e8e0d0" }}>{item.title}</span>
                      <span className="text-xs block" style={{ color: "#9A8870" }}>{item.subtitle}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={`https://wa.me/${config.whatsapp}?text=Olá! Quero chopp no meu próximo evento.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, backgroundColor: "#9A6F25" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold"
                style={{ backgroundColor: "#c8921e", color: "#1a1208", fontFamily: "Oswald, sans-serif", borderRadius: "8px" }}
              >
                <svg className="w-6 h-6" fill="#1a1208" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir meu barril
              </motion.a>
            </motion.div>

            {/* RIGHT SIDE - Large barril.png with levels indicator */}
            <motion.div
              className="relative flex items-center justify-end"
              style={{ height: "550px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative flex items-center justify-end w-full h-full">
                {/* Vertical Ruler - Left Side of barrel */}
                <div className="relative flex flex-col items-end justify-around h-full py-8 mr-4">
                  {/* 50L Marker */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-sm font-semibold" style={{ fontFamily: "Oswald, sans-serif", color: "rgba(200,185,145,0.5)" }}>50L</span>
                    <div className="w-8 h-0.5" style={{ backgroundColor: "rgba(200,146,30,0.3)" }} />
                  </motion.div>

                  {/* 30L Marker - Highlighted */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-base font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "#c8921e" }}>30L</span>
                    <div className="w-12 h-1" style={{ backgroundColor: "#c8921e", borderRadius: "4px" }} />
                  </motion.div>

                  {/* 20L Marker */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-sm font-semibold" style={{ fontFamily: "Oswald, sans-serif", color: "rgba(200,185,145,0.5)" }}>20L</span>
                    <div className="w-8 h-0.5" style={{ backgroundColor: "rgba(200,146,30,0.3)" }} />
                  </motion.div>
                </div>

                {/* Large Barrel Image */}
                <motion.div
                  className="relative flex items-center justify-center h-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="/Imperador/barril.png"
                    alt="Barril de chopp Imperador"
                    className="h-full w-auto object-contain"
                    style={{ maxWidth: "none", filter: "drop-shadow(0 25px 50px rgba(200,146,30,0.35))" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Commercial highlight quote */}
          <motion.div
            className="mt-16 pt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ borderTop: "1px solid rgba(200,146,30,0.15)" }}
          >
            <p className="text-base italic max-w-xl mx-auto" style={{ color: "rgba(232,224,208,0.6)", fontFamily: "Playfair Display, serif" }}>
              Você não contrata "só o chopp". Você leva junto estrutura, atendimento e segurança pra não passar perrengue no meio da festa.
            </p>
          </motion.div>
        </div>
      </section>

{/* ==============================
          4. GROWLERS - Split Horizontal Layout
          ============================== */}
      <section className="py-16 lg:py-20 relative" style={{ backgroundColor: "#faf8f4" }}>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px" style={{ backgroundColor: "#c8921e" }} />
              <span className="text-xs font-semibold uppercase" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "4px" }}>Linha Growlers</span>
              <div className="w-10 h-px" style={{ backgroundColor: "#c8921e" }} />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4" style={{ fontFamily: "Bebas Neue, sans-serif", lineHeight: 1.1 }}>
              <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #d4860e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> chopp de qualidade em versão menor</span>
            </h2>

            <p className="text-base max-w-2xl mx-auto" style={{ color: "#5a4a3a", lineHeight: 1.7, fontFamily: "Playfair Display, serif" }}>
              Nem todo momento pede barril, mas todo momento pode ficar melhor com chopp.
            </p>

            <p className="text-sm max-w-2xl mx-auto mt-3" style={{ color: "#7A6845", lineHeight: 1.6, fontFamily: "Playfair Display, serif" }}>
              Nossa linha de Growlers é perfeita pra quem quer levar chopp de qualidade pra casa, pra um jantar ou pra presentear alguém.
            </p>
          </motion.div>

          {/* Split Layout: Image + Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative overflow-hidden bg-gray-100" style={{ borderRadius: "16px", height: "500px" }}>
                <img
                  src="/Imperador/growlers.jpg"
                  alt="Growlers Imperador"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(42,31,20,0.1) 100%)" }} />
              </div>
            </motion.div>

            {/* Right Column - Cards Stack */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Card 1 - Tinto */}
              <motion.div
                className="group relative bg-white cursor-pointer"
                style={{
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  padding: "24px 28px",
                  border: "2px solid transparent",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease"
                }}
                whileHover={{
                  borderColor: "#c8921e",
                  boxShadow: "0 4px 20px rgba(200,146,30,0.15)"
                }}
              >
                {/* Badge */}
                <span className="inline-block text-xs font-bold uppercase" style={{
                  backgroundColor: "rgba(200,146,30,0.12)",
                  color: "#c8921e",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  letterSpacing: "0.1em"
                }}>
                  Tinto
                </span>

                {/* Title */}
                <h3 className="text-2xl font-extrabold uppercase mt-3" style={{
                  fontFamily: "Bebas Neue, sans-serif",
                  color: "#1A1208",
                  letterSpacing: "0.02em"
                }}>
                  Growler Tinto
                </h3>

                {/* Description */}
                <p className="text-sm mt-2" style={{
                  color: "#7A6845",
                  lineHeight: 1.6
                }}>
                  Encorpado e saboroso, perfeito para jantares e churrascos.
                </p>
              </motion.div>

              {/* Card 2 - Branco */}
              <motion.div
                className="group relative bg-white cursor-pointer"
                style={{
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  padding: "24px 28px",
                  border: "2px solid transparent",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease"
                }}
                whileHover={{
                  borderColor: "#c8921e",
                  boxShadow: "0 4px 20px rgba(200,146,30,0.15)"
                }}
              >
                {/* Badge */}
                <span className="inline-block text-xs font-bold uppercase" style={{
                  backgroundColor: "rgba(200,146,30,0.12)",
                  color: "#c8921e",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  letterSpacing: "0.1em"
                }}>
                  Branco
                </span>

                {/* Title */}
                <h3 className="text-2xl font-extrabold uppercase mt-3" style={{
                  fontFamily: "Bebas Neue, sans-serif",
                  color: "#1A1208",
                  letterSpacing: "0.02em"
                }}>
                  Growler Branco
                </h3>

                {/* Description */}
                <p className="text-sm mt-2" style={{
                  color: "#7A6845",
                  lineHeight: 1.6
                }}>
                  Leve e refrescante, ideal para dias quentes e eventos informais.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href={`https://wa.me/${config.whatsapp}?text=Olá! Quero saber mais sobre os Growlers Imperador.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start mt-6"
                style={{
                  backgroundColor: "#c8921e",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "15px",
                  borderRadius: "40px",
                  padding: "14px 28px",
                  fontFamily: "Oswald, sans-serif"
                }}
                whileHover={{ scale: 1.03, backgroundColor: "#b37d18" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Conhecer linha completa</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
            
            

{/* ==============================
          5. PRODUTOS - Carrossel Horizontal
          ============================== */}
      <section className="py-14 lg:py-20 relative" style={{ backgroundColor: "#1C1917" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(200,146,30,0.05) 0%, transparent 60%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Scroll>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: "rgba(200,146,30,0.4)" }}></div>
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "#CA8A04", fontFamily: "Oswald, sans-serif" }}>Catálogo</span>
                <div className="h-px w-12" style={{ backgroundColor: "rgba(200,146,30,0.4)" }}></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                <span style={{ color: "#FAFAF9" }}>Nossos </span>
                <span style={{ color: "#CA8A04" }}>Produtos</span>
              </h2>
            </motion.div>
          </Scroll>

          {/* Filtros por categoria */}
          <Scroll delay={0.1}>
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {[
                { id: 'all', label: 'Todos' },
                { id: 'chopp', label: 'Chopp' },
                { id: 'barril', label: 'Barril' },
                { id: 'growler', label: 'Growler' },
                { id: 'acessorios', label: 'Acessórios' },
              ].map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveProductFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-2 py-0.5 text-[9px] font-medium transition-all duration-200"
                  style={{
                    backgroundColor: activeProductFilter === filter.id ? "#CA8A04" : "rgba(255,255,255,0.05)",
                    color: activeProductFilter === filter.id ? "#1C1917" : "#FAFAF9",
                    border: activeProductFilter === filter.id ? "none" : "1px solid rgba(200,146,30,0.3)",
                    fontFamily: "Oswald, sans-serif",
                    borderRadius: "6px",
                  }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </Scroll>

          {/* Carrossel */}
          <div className="relative">
            {/* Setas de navegação */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(200,146,30,0.9)", color: "#1C1917" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(200,146,30,0.9)", color: "#1C1917" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Container do carrossel */}
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-8"
              style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[
                { name: "Pilsen", category: "chopp", type: "Clássica", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop", desc: "Leve e refrescante" },
                { name: "Weiss", category: "chopp", type: "Trigo", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Aromática e citrus" },
                { name: "Vienna", category: "chopp", type: "Amber", image: "https://images.unsplash.com/photo-1505236858219-9a1753776f75?w=400&h=400&fit=crop", desc: "Malte caramelizado" },
                { name: "IPA", category: "chopp", type: "American", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Lúpulo intenso" },
                { name: "Stout", category: "chopp", type: "Escura", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Torra marcada" },
                { name: "Barril 20L", category: "barril", type: "Pequeno", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Eventos pequenos" },
                { name: "Barril 30L", category: "barril", type: "Médio", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Festas médias", highlight: true },
                { name: "Barril 50L", category: "barril", type: "Grande", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Grandes eventos" },
                { name: "Growler Tinto", category: "growler", type: "Vinho", image: "https://images.unsplash.com/photo-1505236858219-9a1753776f75?w=400&h=400&fit=crop", desc: "Encorpado", highlight: true },
                { name: "Growler Branco", category: "growler", type: "Vinho", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Leve e refrescante" },
                { name: "Chopeira Premium", category: "acessorios", type: "Equipamento", image: "https://images.unsplash.com/photo-1560132587-2e828a067b2c?w=400&h=400&fit=crop", desc: "Estrutura completa" },
                { name: "Kit Copos", category: "acessorios", type: "Kit", image: "https://images.unsplash.com/photo-1519671482749-fd09a3885e67?w=400&h=400&fit=crop", desc: "Conjunto elegante" },
              ].filter(p => activeProductFilter === 'all' || p.category === activeProductFilter).map((product, i) => (
                <motion.div
                  key={`${product.name}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative flex-shrink-0 w-[180px] rounded-xl overflow-hidden group cursor-pointer"
                  style={{
                    scrollSnapAlign: 'start',
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: product.highlight ? "2px solid #CA8A04" : "1px solid rgba(200,146,30,0.15)",
                    transition: "all 0.3s ease"
                  }}
                  whileHover={{ scale: 1.03, borderColor: "#CA8A04" }}
                >
                  {/* Badge Popular */}
                  {product.highlight && (
                    <div className="absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: "#CA8A04", color: "#1C1917", fontFamily: "Oswald, sans-serif" }}>
                      Popular
                    </div>
                  )}

                  {/* Imagem */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(28,25,23,0.9) 100%)" }} />
                  </div>

                  {/* Conteúdo */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-[10px] uppercase tracking-wider block mb-1" style={{ color: "#CA8A04", fontFamily: "Oswald, sans-serif" }}>
                      {product.type}
                    </span>
                    <h4 className="text-base font-normal truncate" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#FAFAF9" }}>
                      {product.name}
                    </h4>
                    <p className="text-[11px] truncate" style={{ color: "rgba(250,250,249,0.6)", fontFamily: "Playfair Display, serif" }}>
                      {product.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Indicadores (dots) */}
            <div className="flex justify-center gap-1 mt-2 mb-1">
              {getFilteredProducts().map((_, i) => (
                <button
                  key={i}
                  className="w-0.5 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: currentDot === i ? "#CA8A04" : "rgba(200,146,30,0.3)"
                  }}
                  onClick={() => scrollToDot(i)}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de conhecer a linha completa de produtos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold"
              style={{ backgroundColor: "#CA8A04", color: "#1C1917", fontFamily: "Oswald, sans-serif", borderRadius: "8px" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 35px rgba(200,146,30,0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Conhecer linha completa</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ==============================
         6. EVENTOS - Premium Redesign
         ============================== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#1C1917" }}>
        {/* HERO */}
        <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=1920&h=1080&fit=crop"
              alt="Chopeira em ação"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.35)" }}
            />
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,25,23,0.2) 0%, rgba(28,25,23,0.6) 50%, rgba(28,25,23,0.95) 100%)" }}></div>
          <div className="relative h-full flex flex-col justify-end pb-14 lg:pb-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px w-16" style={{ backgroundColor: "#CA8A04" }}></div>
                  <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "#CA8A04", fontFamily: "Oswald, sans-serif" }}>Eventos</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[0.95] mb-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                  <span style={{ color: "#FAFAF9" }}>Seu evento, </span>
                  <span style={{ color: "#CA8A04" }}>nosso chopp</span>
                </h2>
                <p className="text-lg lg:text-xl max-w-2xl mb-4" style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "rgba(250,250,249,0.85)" }}>
                  Sem dor de cabeça.
                </p>
                <p className="text-sm lg:text-base max-w-xl mb-8" style={{ color: "rgba(250,250,249,0.65)", fontFamily: "Playfair Display, serif" }}>
                  Chopp gelado, chopeira montada, suporte garantido até as 22h. Você só cuida de brindar – o resto é com o Imperador.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de informações sobre eventos`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3 text-sm font-semibold"
                    style={{ backgroundColor: "#CA8A04", color: "#1C1917", fontFamily: "Oswald, sans-serif", borderRadius: "4px" }}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(200,146,30,0.4)" }}
                    whileTap={{ scale: 0.98 }}>
                    Quero chopp pro meu evento
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                  <motion.a href={`https://wa.me/${config.whatsapp}?text=Olá! Quero revender Imperador`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3 text-sm font-semibold"
                    style={{ backgroundColor: "transparent", color: "#CA8A04", fontFamily: "Oswald, sans-serif", borderRadius: "4px", border: "1px solid #CA8A04" }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(200,146,30,0.1)" }}
                    whileTap={{ scale: 0.98 }}>
                    Quero revender Imperador
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-6 right-8 lg:right-16 hidden lg:block">
            <span className="text-[10rem] xl:text-[12rem] font-bold leading-none" style={{ fontFamily: "Bebas Neue, sans-serif", color: "rgba(200,146,30,0.06)" }}>06</span>
          </div>
        </div>

        {/* ATENDEMOS + TIPOS DE EVENTOS */}
        <div className="py-14 lg:py-18" style={{ backgroundColor: "#FAFAF9" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Scroll>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-5 w-1" style={{ backgroundColor: "#CA8A04" }}></div>
                  <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "#CA8A04", fontFamily: "Oswald, sans-serif" }}>Conheça</span>
                </div>
                <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#1C1917" }}>Cada evento é único</h3>
                
                {/* Atendemos Tags */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-wider mb-4" style={{ fontFamily: "Oswald, sans-serif", color: "rgba(28,25,23,0.6)" }}>Atendemos:</p>
                  <div className="flex flex-wrap gap-3">
                    {["Festas de aniversário", "Casamentos", "Formaturas", "Eventos corporativos", "Churrascos e confraternizações", "Festas de comunidade"].map((item, i) => (
                      <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 rounded-full text-xs font-medium cursor-default"
                        style={{ backgroundColor: "rgba(200,146,30,0.1)", border: "1px solid rgba(200,146,30,0.2)", color: "#CA8A04", fontFamily: "Oswald, sans-serif" }}
                        whileHover={{ backgroundColor: "rgba(200,146,30,0.15)", y: -2 }}>
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Scroll>

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
              {/* Tabs verticais */}
              <div className="flex flex-col gap-3">
                {eventTypes.map((tab) => (
                  <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-5 py-4 font-medium cursor-pointer group relative overflow-hidden text-sm"
                    style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "1px", textTransform: "uppercase", backgroundColor: activeTab === tab.id ? "#CA8A04" : "#ffffff", border: activeTab === tab.id ? "none" : "1px solid rgba(200,150,30,0.2)", color: activeTab === tab.id ? "#1C1917" : "#1C1917", borderRadius: "10px" }}>
                    <span className="relative z-10 flex items-center justify-between">
                      {tab.label}
                      <svg className="w-4 h-4 transition-transform duration-300" style={{ transform: activeTab === tab.id ? "rotate(90deg)" : "rotate(0deg)", color: activeTab === tab.id ? "#1C1917" : "rgba(200,146,30,0.5)" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Conteúdo do tab */}
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="relative p-6 lg:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(200,150,30,0.15)", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Texto */}
                  <div>
                    <span className="inline-block text-xs font-medium mb-3 px-4 py-1.5 rounded-full" style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#CA8A04", fontFamily: "Oswald, sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>{currentContent.badge}</span>
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-3" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                      <span style={{ color: "#CA8A04" }}>{currentContent.title}</span>
                      <span style={{ color: "#1C1917" }}>{currentContent.title2}</span>
                    </h4>
                    <p className="text-base mb-5 leading-relaxed" style={{ color: "rgba(42,31,20,0.65)", fontFamily: "Playfair Display, serif" }}>{currentContent.description}</p>
                    
                    {/* Benefícios */}
                    <ul className="space-y-2.5 mb-6">
                      {currentContent.benefits.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: "rgba(200,146,30,0.1)" }}>
                            <svg className="w-3 h-3" fill="none" stroke="#CA8A04" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span style={{ color: "rgba(42,31,20,0.7)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de informações sobre ${currentContent.badge}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                      style={{ backgroundColor: "#CA8A04", color: "#1C1917", fontFamily: "Oswald, sans-serif", borderRadius: "6px" }}>
                      Solicitar Orçamento
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>

                  {/* Imagem representativa */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={currentContent.images?.[0] || "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=450&fit=crop"} 
                      alt={currentContent.badge}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,146,30,0.1) 0%, transparent 50%)" }}></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* VÍDEOS */}
        <div className="py-14 lg:py-18" style={{ backgroundColor: "#FAFAF9" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Scroll>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-12" style={{ backgroundColor: "rgba(200,146,30,0.4)" }}></div>
                  <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "#CA8A04", fontFamily: "Oswald, sans-serif" }}>Galeria</span>
                  <div className="h-px w-12" style={{ backgroundColor: "rgba(200,146,30,0.4)" }}></div>
                </div>
                <h4 className="text-2xl lg:text-3xl mb-3" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#1C1917" }}>Veja nossos eventos</h4>
                <p className="text-sm" style={{ color: "rgba(28,25,23,0.6)", fontFamily: "Playfair Display, serif" }}>Momentos únicos servidos com qualidade Imperador</p>
              </motion.div>
            </Scroll>

            {/* Videos em loop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                { label: "Eventos Sociais", videoId: "wQcE4GGk7M4", thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop" },
                { label: "Corporativos", videoId: "3Z6qJEKoRqE", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop" },
                { label: "Casamentos", videoId: "tQ91R8fQT3M", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop" },
                { label: "Bares & Restaurantes", videoId: "wQcE4GGk7M4", thumbnail: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=800&fit=crop" }
              ].map((video, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative aspect-[9/12] rounded-2xl overflow-hidden group cursor-pointer" whileHover={{ scale: 1.03 }}>
                  {/* Thumbnail */}
                  <img src={video.thumbnail} alt={video.label} className="w-full h-full object-cover" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)" }}></div>
                  
                  {/* Play indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(200,146,30,0.9)" }}>
                      <svg className="w-8 h-8" fill="#1C1917" stroke="none" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm uppercase tracking-wider font-medium" style={{ fontFamily: "Oswald, sans-serif", color: "#CA8A04" }}>
                      {video.label}
                    </span>
                  </div>
                  
                  {/* Badge de loop */}
                  <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-full text-xs flex items-center gap-1.5" style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "#fff", fontFamily: "Oswald, sans-serif" }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Loop</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FECHAMENTO */}
        <div className="py-14 lg:py-18" style={{ backgroundColor: "#1C1917" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
              <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "rgba(250,250,249,0.9)" }}>
                "Você não precisa virar 'técnico de chopeira' da própria festa. Nós cuidamos disso pra você aproveitar do primeiro ao último brinde."
              </p>
              <motion.a href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de fazer um orçamento para evento`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold"
                style={{ backgroundColor: "#CA8A04", color: "#1C1917", fontFamily: "Oswald, sans-serif", borderRadius: "6px" }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 35px rgba(200,146,30,0.4)" }}
                whileTap={{ scale: 0.98 }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Fale com a gente no WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

{/* ==============================
         7. DIFERENCIAL IMPERADOR - Tabs Design Compacto
         ============================== */}
      <section className="py-14 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#faf8f4" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10" style={{ background: "linear-gradient(180deg, rgba(200,146,30,0.4) 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: "#c8921e" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>Diferencial Imperador</span>
              <div className="h-px w-10" style={{ backgroundColor: "#c8921e" }} />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-3" style={{ fontFamily: "Bebas Neue, sans-serif", lineHeight: 1.1 }}>
              <span style={{ color: "#2a1f14" }}>Chopeiras que </span>
              <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #d4860e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>viraram atração do evento</span>
            </h2>
            
            <p className="text-sm max-w-xl mx-auto" style={{ color: "#5a4a3a", lineHeight: 1.6 }}>
              Além da qualidade do chopp, a gente também cuida da experiência visual do seu evento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex justify-center gap-2 mb-8">
              {[
                { id: "moto", label: "Moto Chopper", icon: "🏍️" },
                { id: "classica", label: "Clássica", icon: "🍺" },
                { id: "personalizada", label: "Personalizada", icon: "✨" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveChopeiraTab(tab.id)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2"
                  style={{
                    backgroundColor: activeChopeiraTab === tab.id ? "#c8921e" : "#fff",
                    color: activeChopeiraTab === tab.id ? "#fff" : "#2a1f14",
                    border: `1px solid ${activeChopeiraTab === tab.id ? "#c8921e" : "rgba(200,146,30,0.3)"}`,
                    fontFamily: "Oswald, sans-serif",
                    boxShadow: activeChopeiraTab === tab.id ? "0 4px 15px rgba(200,146,30,0.3)" : "0 2px 8px rgba(0,0,0,0.05)"
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden" style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)", boxShadow: "0 15px 40px rgba(200,146,30,0.1)" }}>
              {activeChopeiraTab === "moto" && (
                <motion.div
                  key="moto"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0"
                >
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-normal mb-2" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}>
                      Moto Chopper
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#5a4a3a" }}>
                      Point garantido de foto!
                    </p>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(42,31,20,0.7)" }}>
                      A queridinha dos eventos! Modelo temático em formato de moto que chama atenção e vira o point de foto da festa.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Vira point de foto", "Estilo único", "Conversa garantida"].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#2a1f14" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={`https://wa.me/${config.whatsapp}?text=Olá! Quero saber mais sobre a Chopeira Moto Chopper.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl self-start"
                      style={{ backgroundColor: "#c8921e", color: "#fff", fontFamily: "Oswald, sans-serif" }}
                    >
                      Quero esta
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </motion.a>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 lg:p-10 flex items-center justify-center" style={{ minHeight: "280px" }}>
                    <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none">
                      <ellipse cx="50" cy="90" rx="40" ry="6" fill="none" stroke="#c8921e" strokeWidth="1.5" opacity="0.3"/>
                      <circle cx="22" cy="80" r="12" stroke="#c8921e" strokeWidth="2.5" fill="none"/>
                      <circle cx="22" cy="80" r="5" fill="#c8921e" fillOpacity="0.4"/>
                      <circle cx="78" cy="80" r="12" stroke="#c8921e" strokeWidth="2.5" fill="none"/>
                      <circle cx="78" cy="80" r="5" fill="#c8921e" fillOpacity="0.4"/>
                      <path d="M15 62c0-18 18-28 35-28s35 10 35 28" stroke="#c8921e" strokeWidth="3" strokeLinecap="round" fill="rgba(200,146,30,0.1)"/>
                      <path d="M12 45h76v15c0 8-15 15-38 15S12 68 12 60V45z" stroke="#c8921e" strokeWidth="3" fill="none"/>
                      <path d="M18 45V30c0-6 10-12 32-12s32 6 32 12v15" stroke="#c8921e" strokeWidth="3" fill="none"/>
                      <rect x="30" y="15" width="40" height="18" rx="4" stroke="#c8921e" strokeWidth="2.5" fill="rgba(200,146,30,0.15)"/>
                      <path d="M38 30h8v12H38" stroke="#c8921e" strokeWidth="2"/>
                      <path d="M54 30h8v12H54" stroke="#c8921e" strokeWidth="2"/>
                      <circle cx="50" cy="60" r="8" fill="rgba(200,146,30,0.2)" stroke="#c8921e" strokeWidth="2"/>
                    </svg>
                  </div>
                </motion.div>
              )}

              {activeChopeiraTab === "classica" && (
                <motion.div
                  key="classica"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0"
                >
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-normal mb-2" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}>
                      Clássica
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#5a4a3a" }}>
                      Elegante e eficiente
                    </p>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(42,31,20,0.7)" }}>
                      A escolha certeira pra qualquer evento. Tradicional, fácil de usar e combina com tudo.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Tradicional", "Fácil de usar", "Para qualquer evento"].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(139,115,72,0.1)", color: "#2a1f14" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={`https://wa.me/${config.whatsapp}?text=Olá! Quero saber mais sobre a Chopeira Clássica.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl self-start"
                      style={{ backgroundColor: "transparent", color: "#c8921e", border: "1px solid #c8921e", fontFamily: "Oswald, sans-serif" }}
                    >
                      Quero esta
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </motion.a>
                  </div>
                  <div className="bg-gradient-to-br from-stone-50 to-stone-100/50 p-8 lg:p-10 flex items-center justify-center" style={{ minHeight: "280px" }}>
                    <svg className="w-40 h-48" viewBox="0 0 100 120" fill="none">
                      <ellipse cx="50" cy="112" rx="35" ry="5" fill="none" stroke="#8a7348" strokeWidth="1.5" opacity="0.3"/>
                      <rect x="18" y="45" width="64" height="55" rx="6" stroke="#8a7348" strokeWidth="3" fill="rgba(139,115,72,0.08)"/>
                      <path d="M25 45V30c0-7 14-14 25-14s25 7 25 14v15" stroke="#8a7348" strokeWidth="3" fill="none"/>
                      <rect x="32" y="55" width="36" height="25" rx="3" stroke="#8a7348" strokeWidth="2" fill="rgba(139,115,72,0.1)"/>
                      <path d="M40 80l20 22M60 80L40 102" stroke="#8a7348" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="50" cy="67" r="6" fill="rgba(139,115,72,0.3)"/>
                      <ellipse cx="50" cy="28" rx="12" ry="3" stroke="#8a7348" strokeWidth="1.5" fill="rgba(139,115,72,0.1)"/>
                    </svg>
                  </div>
                </motion.div>
              )}

              {activeChopeiraTab === "personalizada" && (
                <motion.div
                  key="personalizada"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0"
                >
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-normal mb-2" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}>
                      Personalizada
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#5a4a3a" }}>
                      Criamos sob medida
                    </p>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(42,31,20,0.7)" }}>
                      Tem uma ideia? A gente cria! do tema da festa ao branding do seu negócio, fazemos sob medida.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Exclusiva", "Tema da festa", "Memória inesquecível"].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(139,115,72,0.1)", color: "#2a1f14" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={`https://wa.me/${config.whatsapp}?text=Olá! Quero saber mais sobre a Chopeira Personalizada.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl self-start"
                      style={{ backgroundColor: "transparent", color: "#c8921e", border: "1px solid #c8921e", fontFamily: "Oswald, sans-serif" }}
                    >
                      Quero esta
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </motion.a>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-stone-100/50 p-8 lg:p-10 flex items-center justify-center" style={{ minHeight: "280px" }}>
                    <svg className="w-40 h-48" viewBox="0 0 100 120" fill="none">
                      <ellipse cx="50" cy="112" rx="35" ry="5" fill="none" stroke="#8a7348" strokeWidth="1.5" opacity="0.3"/>
                      <rect x="18" y="45" width="64" height="55" rx="6" stroke="#8a7348" strokeWidth="3" fill="rgba(139,115,72,0.08)"/>
                      <path d="M25 45V30c0-7 14-14 25-14s25 7 25 14v15" stroke="#8a7348" strokeWidth="3" fill="none"/>
                      <rect x="32" y="55" width="36" height="25" rx="3" stroke="#8a7348" strokeWidth="2" fill="rgba(139,115,72,0.1)"/>
                      <path d="M42 67l5 5 10-10" stroke="#c8921e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M32 22l18-12 18 12" stroke="#c8921e" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="50" cy="6" r="5" fill="#c8921e"/>
                      <path d="M50 30V18" stroke="#c8921e" strokeWidth="1.5" strokeDasharray="2 2"/>
                      <path d="M10 58l-6-5M90 58l6-5" stroke="#8a7348" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </motion.div>
              )}
            </div>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm mb-4" style={{ color: "rgba(42,31,20,0.6)" }}>
                Quer uma chopeira que seja a cara do seu evento?
              </p>
              <motion.a
                href={`https://wa.me/${config.whatsapp}?text=Olá! Quero uma chopeira que seja a cara do meu evento.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl"
                style={{ backgroundColor: "#c8921e", color: "#fff", fontFamily: "Oswald, sans-serif" }}
              >
                <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Fale com a gente
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==============================
         8. POR QUE ESCOLHER - Redesign Dark Manifesto
         ============================== */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#1a1208" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.15) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.1) 0%, transparent 60%)" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <Scroll>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="h-px w-16" style={{ backgroundColor: "rgba(200,146,30,0.5)" }} />
                <span className="text-xs font-medium uppercase tracking-[4px]" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>
                  Por que escolher
                </span>
                <div className="h-px w-16" style={{ backgroundColor: "rgba(200,146,30,0.5)" }} />
              </motion.div>
              
              <h2 className="text-5xl lg:text-7xl font-normal leading-tight">
                <span style={{ color: "#faf8f4" }}>O </span>
                <span style={{ 
                  background: "linear-gradient(180deg, #d4a420 0%, #c8921e 50%, #a67814 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Imperador
                </span>
                <span style={{ color: "#faf8f4" }}>?</span>
              </h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "rgba(250,248,244,0.6)", fontFamily: "Oswald, sans-serif" }}>
                Cinco razões para você não se preocupar com nada no seu evento
              </p>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              {
                num: "01",
                title: "Qualidade",
                desc: "Chopp sempre bem armazenado, bem tirado e servido na temperatura certa.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="M12 10v4M10 12h4" />
                  </svg>
                )
              },
              {
                num: "02",
                title: "Atendimento",
                desc: "A gente indica a quantidade ideal e explica tudo. Sem surpresas no meio do evento.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                )
              },
              {
                num: "03",
                title: "Estrutura",
                desc: "Barris, chopeiras diferenciadas, montagem, regulagem e suporte.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
                  </svg>
                )
              },
              {
                num: "04",
                title: "Suporte 22h",
                desc: "Deu dúvida? A gente atende. Você não fica na mão.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                )
              },
              {
                num: "05",
                title: "Experiência",
                desc: "Estamos presentes nos mais variados tipos de festa, de aniversário em casa a grandes eventos na região.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-6 lg:p-7 cursor-pointer"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(200,146,30,0.15)",
                  borderRadius: "16px",
                }}
              >
                <div className="absolute inset-0 rounded-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(200,146,30,0.1) 0%, transparent 60%)" }} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl lg:text-6xl font-normal leading-none" style={{ 
                      fontFamily: "Bebas Neue, sans-serif", 
                      color: "rgba(200,146,30,0.2)",
                      WebkitTextStroke: "1px rgba(200,146,30,0.3)"
                    }}>
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "rgba(200,146,30,0.15)" }}>
                      <div className="w-5 h-5" style={{ color: "#c8921e" }}>{item.icon}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-normal mb-3 group-hover:text-[#c8921e] transition-colors duration-300" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#faf8f4" }}>
                    {item.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed group-hover:text-white transition-colors duration-300" style={{ color: "rgba(250,248,244,0.55)" }}>
                    {item.desc}
                  </p>
                </div>
                
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-500 rounded-full" style={{ backgroundColor: "#c8921e" }} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-lg mb-6" style={{ color: "rgba(250,248,244,0.7)", fontFamily: "Oswald, sans-serif" }}>
              Pronto para fazer seu evento sem preocupação?
            </p>
            <motion.a
              href={`https://wa.me/${config.whatsapp}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold"
              style={{ 
                backgroundColor: "#c8921e", 
                color: "#1a1208", 
                fontFamily: "Oswald, sans-serif",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(200,146,30,0.3)"
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ==============================
          9. REGIÃO DE ATENDIMENTO - OpenStreetMap Real (Light)
          ============================== */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)" }} />
          <div className="absolute top-32 right-0 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <Scroll>
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }} />
                <span className="text-xs font-medium uppercase tracking-[4px]" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>Atendimento</span>
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }} />
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-normal">
                <span style={{ color: "#2a1f14" }}>Onde o </span>
                <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Imperador</span>
                <span style={{ color: "#2a1f14" }}> Chega</span>
              </h2>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE - Text */}
            <div className="lg:col-span-4">
              <Scroll>
                <motion.div
                  className="p-6 lg:p-8"
                  style={{ backgroundColor: "#ffffff", borderRadius: "20px", border: "1px solid rgba(200,146,30,0.2)", boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl lg:text-3xl font-normal mb-4" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}>
                    Nossa Rede de <span style={{ color: "#c8921e" }}>Sedes</span>
                  </h3>
                  
                  <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(42,31,20,0.7)" }}>
                    O Imperador do Chopp atua em todo o Paraná com <strong style={{ color: "#c8921e" }}>4 sedes estratégicas</strong>, garantindo atendimento rápido e qualidade em cada região.
                  </p>

                  <div className="space-y-4 mb-6">
                    {headquarters.map((sede) => (
                      <div key={sede.id} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#c8921e", boxShadow: "0 0 8px rgba(200,146,30,0.6)" }}></div>
                        <div>
                          <span className="font-medium" style={{ color: "#2a1f14", fontFamily: "Oswald, sans-serif" }}>{sede.name}</span>
                          <span className="ml-2 text-sm" style={{ color: "rgba(42,31,20,0.5)" }}>- {sede.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl text-center" style={{ backgroundColor: "rgba(200,146,30,0.1)" }}>
                      <div className="text-3xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}>4</div>
                      <div className="text-xs uppercase" style={{ color: "rgba(42,31,20,0.6)", fontFamily: "Oswald, sans-serif" }}>Sedes</div>
                    </div>
                    <div className="p-4 rounded-xl text-center" style={{ backgroundColor: "rgba(200,146,30,0.1)" }}>
                      <div className="text-3xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}>300km</div>
                      <div className="text-xs uppercase" style={{ color: "rgba(42,31,20,0.6)", fontFamily: "Oswald, sans-serif" }}>Raio</div>
                    </div>
                  </div>

                  <motion.a
                    href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de saber se vocês atendem na minha cidade`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 text-base font-semibold"
                    style={{ backgroundColor: "#c8921e", color: "#1a1208", fontFamily: "Oswald, sans-serif", borderRadius: "8px" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Verificar minha cidade
                  </motion.a>
                </motion.div>
              </Scroll>
            </div>

            {/* RIGHT SIDE - Map */}
            <div className="lg:col-span-8">
              <Scroll delay={0.1}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(200,146,30,0.25)", height: "500px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <MapContainer
                    center={[-24.5, -52.0]}
                    zoom={7}
                    style={{ height: "100%", width: "100%", background: "#faf8f4" }}
                    zoomControl={false}
                    attributionControl={false}
                  >
                    <TileLayer
                      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    {headquarters.map((sede) => (
                      <Marker
                        key={sede.id}
                        position={[sede.lat, sede.lng]}
                        icon={createPulseIcon()}
                      >
                        <Popup>
                          <div style={{ 
                            background: '#ffffff', 
                            padding: '12px', 
                            borderRadius: '8px',
                            color: '#2a1f14',
                            minWidth: '180px',
                            border: '1px solid rgba(200,146,30,0.2)'
                          }}>
                            <div style={{ 
                              fontFamily: 'Bebas Neue, sans-serif', 
                              fontSize: '18px', 
                              color: '#c8921e',
                              marginBottom: '4px'
                            }}>
                              {sede.name}
                            </div>
                            <div style={{ 
                              fontFamily: 'Oswald, sans-serif', 
                              fontSize: '12px',
                              color: 'rgba(42,31,20,0.7)',
                              marginBottom: '8px'
                            }}>
                              {sede.type}
                            </div>
                            <div style={{ 
                              fontFamily: 'Oswald, sans-serif', 
                              fontSize: '11px',
                              color: 'rgba(42,31,20,0.5)'
                            }}>
                              {sede.description}
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                  
                  {/* Map Overlay Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(200,146,30,0.3)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#c8921e" }}></div>
                    <span className="text-xs" style={{ color: "#2a1f14", fontFamily: "Oswald, sans-serif" }}>4 Sedes ativas</span>
                  </div>

                  {/* Legend */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-2 py-1 rounded" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#c8921e" }}></div>
                      <span className="text-xs" style={{ color: "#2a1f14", fontFamily: "Oswald, sans-serif" }}>Sede</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#c8921e", opacity: 0.5 }}></div>
                      <span className="text-xs" style={{ color: "#2a1f14", fontFamily: "Oswald, sans-serif" }}>Filial</span>
                    </div>
                  </div>
                </motion.div>
              </Scroll>
            </div>
          </div>
        </div>
      </section>

{/* ==============================
          10. SEA UM DISTRIBUIDOR - Redesign Premium Partnership
          ============================== */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#0f0c08" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.2) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.15) 0%, transparent 60%)" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <Scroll>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="h-px w-12" style={{ backgroundColor: "rgba(200,146,30,0.4)" }} />
                <span className="text-xs font-medium uppercase tracking-[4px]" style={{ color: "rgba(200,146,30,0.7)", fontFamily: "Oswald, sans-serif" }}>
                  Oportunidade
                </span>
                <div className="h-px w-12" style={{ backgroundColor: "rgba(200,146,30,0.4)" }} />
              </motion.div>
              
              <h2 className="text-5xl lg:text-7xl font-normal leading-tight">
                <span style={{ color: "#faf8f4" }}>Quer trabalhar </span>
                <span style={{ 
                  background: "linear-gradient(180deg, #d4a420 0%, #c8921e 50%, #a67814 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  revendendo
                </span>
              </h2>
              <h2 className="text-5xl lg:text-7xl font-normal leading-tight mt-2">
                <span style={{ color: "#faf8f4" }}>chopp na sua </span>
                <span style={{ 
                  background: "linear-gradient(180deg, #d4a420 0%, #c8921e 50%, #a67814 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  região?
                </span>
              </h2>
              
              <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "rgba(250,248,244,0.5)", fontFamily: "Oswald, sans-serif" }}>
                Torne-se parte da maior rede de distribuição de chopp premium do Paraná
              </p>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Você revende",
                subtitle: "na sua região",
                desc: "Tenha seu próprio negócio revendendo chopp Imperador na cidade onde você mora",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
                  </svg>
                )
              },
              {
                title: "Conta com",
                subtitle: "suporte da marca",
                desc: "treinamento, gestão e apoio constante para você decolar com segurança",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Trabalha com",
                subtitle: "produto de qualidade",
                desc: "chopp premium com boa aceitação no mercado e margem competitiva",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-7 cursor-pointer"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(200,146,30,0.15)",
                  borderRadius: "20px",
                }}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(200,146,30,0.12)" }}>
                    <div className="w-7 h-7" style={{ color: "#c8921e" }}>{item.icon}</div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#faf8f4" }}>{item.title}</span>
                    <span className="text-xl ml-1" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}>{item.subtitle}</span>
                  </div>
                  
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(250,248,244,0.5)" }}>
                    {item.desc}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-500 rounded-full" style={{ backgroundColor: "#c8921e" }} />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            <motion.a
              href={`https://wa.me/${config.whatsapp}?text=Olá! Quero ser distribuidor Imperador do Chopp`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold"
              style={{ 
                backgroundColor: "#c8921e", 
                color: "#0f0c08", 
                fontFamily: "Oswald, sans-serif",
                borderRadius: "8px",
                boxShadow: "0 8px 30px rgba(200,146,30,0.35)"
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quero ser distribuidor
            </motion.a>
            
            <motion.a
              href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de falar com um consultor sobre distribuição`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium"
              style={{ 
                border: "2px solid rgba(200,146,30,0.4)", 
                color: "#c8921e", 
                fontFamily: "Oswald, sans-serif",
                borderRadius: "8px",
              }}
            >
              Falar com especialista
            </motion.a>
          </div>

          <motion.p 
            className="text-center text-sm italic"
            style={{ color: "rgba(250,248,244,0.35)", fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            * Parcerias sob análise de disponibilidade de região
          </motion.p>
        </div>
      </section>

      {/* ==============================
         11. CONTATO + TRABALHE CONOSCO
         ============================== */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Scroll>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div
                  className="h-px w-12"
                  style={{ backgroundColor: "#c8921e" }}
                ></div>
                <span
                  className="text-xs font-medium uppercase"
                  style={{
                    color: "#c8921e",
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "3px",
                  }}
                >
                  Contato
                </span>
                <div
                  className="h-px w-12"
                  style={{ backgroundColor: "#c8921e" }}
                ></div>
              </div>
              <h2 className="text-5xl lg:text-6xl font-normal">
                <span style={{ color: "#2a1f14" }}>Fale com o </span>
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Imperador
                </span>
              </h2>
              <p
                className="text-lg mt-4"
                style={{ color: "rgba(42,31,20,0.65)" }}
              >
                O jeito mais rápido é pelo WhatsApp. Manda uma mensagem!
              </p>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 text-center cursor-pointer"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)" }}
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3
                className="text-lg font-normal mb-1"
                style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}
              >
                WhatsApp
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(42,31,20,0.65)" }}
              >
                (45) 99995-4660
              </p>
            </a>
            <a
              href={`tel:${config.phone}`}
              className="group p-6 text-center cursor-pointer"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)" }}
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="#c8921e"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3
                className="text-lg font-normal mb-1"
                style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}
              >
                Telefone
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(42,31,20,0.65)" }}
              >
                (45) 3306-5776
              </p>
            </a>
            <a
              href="https://instagram.com/imperadordochopp"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 text-center cursor-pointer"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)" }}
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </div>
              <h3
                className="text-lg font-normal mb-1"
                style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}
              >
                Instagram
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(42,31,20,0.65)" }}
              >
                @imperadordochopp
              </p>
            </a>
          </div>

          <motion.div
            className="p-8 flex flex-col items-center"
            style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-normal mb-2 text-center"
              style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}
            >
              Trabalhe conosco
            </h3>
            <p
              className="text-sm text-center mb-6"
              style={{ color: "rgba(42,31,20,0.65)" }}
            >
              Quer fazer parte do time Imperador? Preencha o formulário abaixo.
            </p>

            <div className="w-full" style={{ minHeight: "500px" }}>
              <iframe
                src={config.googleFormsUrl + '/viewform?embedded=true'}
                width="100%"
                height="500"
                frameBorder="0"
                style={{ backgroundColor: "#faf8f4" }}
              >
                Carregando formulário...
              </iframe>
            </div>

            <p className="text-xs text-center mt-4" style={{ color: "rgba(42,31,20,0.5)" }}>
              Ou{' '}
              <a
                href={config.googleFormsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c8921e" }}
              >
                clique aqui
              </a>{' '}
              se o formulário não carregar.
            </p>
          </motion.div>

          <motion.div
            className="text-center mt-12 p-8 rounded-xl"
            style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg" style={{ color: "#2a1f14" }}>
              Seu evento merece chopp bom, estrutura completa e atendimento de
              confiança.
            </p>
            <p
              className="text-xl mt-2 font-semibold"
              style={{
                background:
                  "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Bebas Neue, sans-serif",
              }}
            >
              E é exatamente isso que o Imperador entrega.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;