import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "../hooks/useMedia";
import {
  GSAPFadeIn,
  GSAPScrollReveal as Scroll,
} from "../components/AnimationsGSAP";
import { BeerMug } from "../components/BeerMug";
import { Carousel } from "../components/Carousel";
import { config } from "../config";

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
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState("social");
  const isMobile = useIsMobile();
  const currentContent = eventTypes.find((t) => t.id === activeTab) || eventTypes[0];

  return (
    <div>
      {/* ==============================
         1. HERO
         ============================== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#1a1208" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse at center bottom, rgba(200, 146, 30, 0.25) 0%, rgba(26, 18, 8, 0) 70%)",
            }}
          />
          <div
            className="absolute top-1/2 right-0 w-[500px] h-[600px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(240, 168, 32, 0.15) 0%, rgba(26, 18, 8, 0) 70%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, #c8921e 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(200, 146, 30, 0.3), transparent)",
            }}
          />
          <div
            className="absolute bottom-8 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(200, 146, 30, 0.15), transparent)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-8 items-center">
            <div className="text-left">
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

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-none mb-2">
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

              <p className="text-lg sm:text-xl mt-6 mb-8 max-w-lg leading-relaxed" style={{ color: "#b8985a" }}>
                Chopp gelado, chopeira montada, suporte garantido até as 22h. Você
                só cuidar de brindar – o resto é com o Imperador.
              </p>

<div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`https://wa.me/${config.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
                  style={{
                    backgroundColor: "#c8921e",
                    color: "#1a1208",
                    borderRadius: "4px",
                    fontFamily: "Oswald, sans-serif",
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="#c8921e"
                    viewBox="0 0 24 24"
                  >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quero chopp pro meu evento
                </motion.a>
                <motion.a
                  href={`https://wa.me/${config.whatsapp}?text=Olá! Quero ser um revendedor Imperador do Chopp`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium"
                  style={{
                    backgroundColor: "transparent",
                    color: "#c8921e",
                    border: "1px solid rgba(200, 146, 30, 0.4)",
                    borderRadius: "4px",
                    fontFamily: "Oswald, sans-serif",
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Quero revender Imperador
                </motion.a>
              </div>

              <p
                className="mt-8 text-sm"
                style={{ color: "rgba(200, 185, 145, 0.5)" }}
              >
                Desde 2017, entregando chopp de qualidade em Cascavel e região, com atendimento próximo, honesto e estrutura completa pra você não se preocupar com nada.
              </p>
            </div>

            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <BeerMug />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ==============================
         2. QUEM SOMOS - Melhorado
         ============================== */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Scroll>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
                <span className="text-xs font-medium uppercase" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}>Nossa História</span>
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal">
                <span style={{ color: "#2a1f14" }}>A gente </span>
                <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>resolve</span>
                <span style={{ color: "#2a1f14" }}> seu problema</span>
              </h2>
            </div>
          </Scroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Scroll>
              <div className="relative">
                <motion.div 
                  className="relative rounded-2xl overflow-hidden" 
                  style={{ backgroundColor: "#2a1f14" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, rgba(200,146,30,0.3) 0%, transparent 70%)" }}></div>
                    <div className="text-center relative z-10 p-8">
                      <div className="text-7xl lg:text-8xl font-normal mb-2" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}>2017</div>
                      <div className="text-lg" style={{ color: "#e8e0d0", fontFamily: "Oswald, sans-serif" }}>O ANO QUE TUDO COMEÇOU</div>
                      <div className="w-16 h-1 mx-auto mt-6" style={{ backgroundColor: "#c8921e" }}></div>
                      <p className="mt-6 text-sm max-w-xs mx-auto leading-relaxed" style={{ color: "rgba(200,185,145,0.7)" }}>
                        Nasceu a resposta para uma pergunta que todo mundo fazia: "Como ter chopp bom, gelado e sem dor de cabeça no evento?"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Scroll>

            <Scroll delay={0.1}>
              <div className="space-y-6">
                <div>
                  <p className="text-lg leading-relaxed" style={{ color: "#2a1f14" }}>
                    Fundado em <strong style={{ color: "#c8921e" }}>Cascavel</strong> em 2017, o Imperador do Chopp nasceu pra resolver um problema simples.
                  </p>
                </div>

                <motion.div 
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)" }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(200,146,30,0.1)" }}>
                      <svg className="w-6 h-6" fill="none" stroke="#c8921e" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-normal mb-1" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}>Hoje</h4>
                      <p className="text-sm" style={{ color: "rgba(42,31,20,0.65)" }}>
                        Referência em chopp na região. Delivery, eventos, pontos fixos e subdistribuidores.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Anos de história", value: "8+" },
                    { title: "Eventos realizados", value: "5000+" },
                    { title: "Cidades atendidas", value: "9" },
                    { title: "Raio de atendimento", value: "300km" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 text-center" style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.15)" }}>
                      <div className="text-2xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}>{stat.value}</div>
                      <div className="text-xs" style={{ color: "rgba(42,31,20,0.6)" }}>{stat.title}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Qualidade", "Estrutura", "Suporte 22h", "Próximo"].map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Scroll>
          </div>

          <Scroll delay={0.2}>
            <div className="mt-12">
              <div className="text-center mb-6">
                <span className="text-sm" style={{ color: "rgba(42,31,20,0.6)" }}>Onde chegamos</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                {["Cascavel", "Foz do Iguaçu", "Guaíra", "Guarapuava", "Assis Chateaubriand", "Palotina", "Lindoeste", "Capitão Leônidas", "Maringá"].map((cidade) => (
                  <motion.div 
                    key={cidade}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                    style={{ backgroundColor: "#fff", border: "1px solid rgba(200,146,30,0.2)", color: "#2a1f14" }}
                  >
                    {cidade}
                  </motion.div>
                ))}
              </div>
              <p className="text-center mt-4 text-sm" style={{ color: "rgba(42,31,20,0.5)" }}>
                Raio de até 300km de Cascavel + operação em Maringá
              </p>
            </div>
          </Scroll>
        </div>
      </section>

      {/* ==============================
         3. DELIVERY - Cards estilo planos
         ============================== */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: "#1a1208" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.15) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Scroll>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="#c8921e" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                <span className="text-xs font-medium uppercase" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}>Delivery</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                <span style={{ color: "#e8e0d0" }}>Chopp no seu evento,</span>
                <br />
                <span style={{ color: "#e8e0d0" }}>do seu jeito</span>
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: "#b8985a" }}>
                Escolha o tamanho ideal. A gente entrega tudo: chopp, chopeira e suporte.
              </p>
            </div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {[
              { size: "20L", pessoas: "10-15", label: "Jantar em família", desc: "Ideal para encontros pequenos", features: ["Chopp Premium", "Chopeira included", "Suporte básico"], price: "A partir de", highlight: false },
              { size: "30L", pessoas: "15-25", label: "Aniversário", desc: "O mais pedido!", features: ["Chopp Premium", "Chopeira included", "Suporte priority", "Copos Imperador"], price: "A partir de", highlight: true },
              { size: "50L", pessoas: "25-40", label: "Grande evento", desc: "Para multidões", features: ["Chopp Premium", "Chopeira Pro", "Suporte completo", "Copos Imperador"], price: "A partir de", highlight: false },
            ].map((barril, i) => (
              <motion.div
                key={barril.size}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: barril.highlight ? "0 25px 50px rgba(200,146,30,0.4)" : "0 20px 40px rgba(0,0,0,0.3)" }}
                className={`relative rounded-2xl overflow-hidden text-center ${barril.highlight ? 'ring-2 ring-[#c8921e]' : ''}`}
                style={{ 
                  backgroundColor: barril.highlight ? "#2a2015" : "#252019", 
                  border: barril.highlight ? "2px solid #c8921e" : "1px solid rgba(200,146,30,0.15)",
                  transform: barril.highlight ? "scale(1.05)" : "scale(1)"
                }}
              >
                {barril.highlight && (
                  <div className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-bold" style={{ backgroundColor: "#c8921e", color: "#1a1208", fontFamily: "Oswald, sans-serif" }}>
                    ★ MAIS PEDIDO
                  </div>
                )}

                <div className="p-6 lg:p-8" style={{ marginTop: barril.highlight ? '24px' : '0' }}>
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 80" fill="none">
                      <rect x="12" y="16" width="40" height="56" rx="4" stroke={barril.highlight ? "#c8921e" : "#8a7348"} strokeWidth="2.5"/>
                      <path d="M20 16V8h24v8" stroke={barril.highlight ? "#c8921e" : "#8a7348"} strokeWidth="2.5"/>
                      <rect x="18" y="20" width="28" height="8" rx="1" fill={barril.highlight ? "#c8921e" : "#3d3420"} stroke={barril.highlight ? "#c8921e" : "#8a7348"} strokeWidth="1.5"/>
                      <ellipse cx="32" cy="52" rx="14" ry="4" fill={barril.highlight ? "rgba(200,146,30,0.2)" : "rgba(139,115,72,0.1)"} stroke={barril.highlight ? "#c8921e" : "#8a7348"} strokeWidth="1.5"/>
                    </svg>
                  </div>

                  <div className="text-4xl lg:text-5xl font-normal mb-1" style={{ fontFamily: "Bebas Neue, sans-serif", color: barril.highlight ? "#c8921e" : "#e8e0d0" }}>
                    {barril.size}
                  </div>
                  <div className="text-sm font-medium mb-1" style={{ color: barril.highlight ? "#c8921e" : "#e8e0d0", fontFamily: "Oswald, sans-serif" }}>
                    {barril.label}
                  </div>
                  <div className="text-xs mb-4" style={{ color: barril.highlight ? "rgba(200,146,30,0.7)" : "#8a7348" }}>
                    {barril.desc}
                  </div>

                  <div className="py-3 mb-4 rounded-lg" style={{ backgroundColor: barril.highlight ? "rgba(200,146,30,0.1)" : "rgba(139,115,72,0.1)" }}>
                    <span className="text-lg font-semibold" style={{ color: barril.highlight ? "#e8e0d0" : "#e8e0d0" }}>
                      {barril.pessoas}
                    </span>
                    <span className="text-xs ml-1" style={{ color: barril.highlight ? "rgba(200,146,30,0.7)" : "#8a7348" }}>pessoas</span>
                  </div>

                  <ul className="space-y-2 mb-6 text-left">
                    {barril.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={barril.highlight ? "#c8921e" : "#8a7348"} strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: barril.highlight ? "rgba(200,185,145,0.8)" : "rgba(200,185,145,0.6)" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className={`block w-full py-3 text-sm font-semibold transition-all duration-200 ${barril.highlight ? 'hover:brightness-110' : 'hover:bg-[#c8921e] hover:text-[#1a1208]'}`}
                    style={{ 
                      backgroundColor: barril.highlight ? "#c8921e" : "transparent", 
                      color: barril.highlight ? "#1a1208" : "#c8921e", 
                      border: barril.highlight ? "none" : "1px solid #c8921e",
                      fontFamily: "Oswald, sans-serif"
                    }}
                  >
                    {barril.highlight ? 'Quero Este' : 'Solicitar'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-sm mb-3" style={{ color: "rgba(200,185,145,0.6)" }}>Não sabe qual escolher?</p>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:gap-3"
              style={{ backgroundColor: "transparent", color: "#c8921e", border: "1px solid rgba(200,146,30,0.3)", fontFamily: "Oswald, sans-serif" }}>
              <span>Falar no WhatsApp</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==============================
         4. GROWLERS (versão melhorada)
         ============================== */}
      <section className="py-14 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#faf8f4" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 80% 30%, rgba(200,146,30,0.06) 0%, transparent 50%)" }} />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
          <Scroll>
            <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xs font-medium uppercase px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "2px" }}>Nova linha</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-normal">
                <span style={{ color: "#2a1f14" }}>Growlers </span>
                <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Imperador</span>
              </h3>
              <p className="mt-3 max-w-lg mx-auto text-sm leading-relaxed" style={{ color: "rgba(42,31,20,0.65)" }}>
                Nem todo momento pede barril, mas todo momento pode ficar melhor com chopp. 
                <strong style={{ color: "#c8921e" }}>Prático, moderno e perfeito pra presentear.</strong>
              </p>
            </motion.div>
          </Scroll>

          <div className="flex flex-col sm:flex-row justify-center gap-5 lg:gap-8 max-w-3xl mx-auto">
            {[
              { 
                title: "Vinho Tinto", 
                desc: "Encorpado e saboroso", 
                ideal: ["Jantares", "Churrascos", "Presentear"],
                highlight: true 
              },
              { 
                title: "Vinho Branco", 
                desc: "Leve e refrescante", 
                ideal: ["Dias quentes", "Eventos informais", "Presentear"],
                highlight: false 
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(200,146,30,0.2)" }}
                className="relative flex-1 max-w-sm mx-auto w-full"
                style={{ 
                  backgroundColor: "#fff", 
                  border: item.highlight ? "2px solid #c8921e" : "1px solid rgba(200,146,30,0.15)",
                  borderRadius: "16px",
                  overflow: "hidden"
                }}
              >
                {item.highlight && (
                  <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold" style={{ backgroundColor: "#c8921e", color: "#2a1f14", fontFamily: "Oswald, sans-serif", borderBottomLeftRadius: "8px" }}>
                    Mais pedido
                  </div>
                )}

                <div className="p-5 lg:p-6">
                  <div className="mb-4 flex justify-center">
                    <svg className="w-20 h-20" viewBox="0 0 80 100" fill="none">
                      <rect x="20" y="20" width="40" height="70" rx="6" stroke={item.highlight ? "#c8921e" : "#8a7348"} strokeWidth="2.5"/>
                      <path d="M24 20V12c0-2 4-4 16-4s16 2 16 4v8" stroke={item.highlight ? "#c8921e" : "#8a7348"} strokeWidth="2.5"/>
                      <path d="M20 40c0-4 8-8 20-8s20 4 20 8" stroke={item.highlight ? "#c8921e" : "#8a7348"} strokeWidth="2" strokeLinecap="round"/>
                      <rect x="30" y="50" width="20" height="25" rx="2" fill={item.highlight ? "rgba(200,146,30,0.15)" : "rgba(139,115,72,0.1)"} stroke={item.highlight ? "#c8921e" : "#8a7348"} strokeWidth="1.5"/>
                    </svg>
                  </div>

                  <div className="text-center mb-3">
                    <h4 className="text-xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: item.highlight ? "#c8921e" : "#2a1f14" }}>
                      Growler {item.title}
                    </h4>
                    <p className="text-sm mt-1" style={{ color: "rgba(42,31,20,0.6)" }}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="mb-5 p-3 rounded-lg" style={{ backgroundColor: "#faf8f4" }}>
                    <p className="text-xs font-medium mb-2" style={{ color: "rgba(42,31,20,0.5)", fontFamily: "Oswald, sans-serif" }}>IDEAL PARA:</p>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {item.ideal.map((use, j) => (
                        <span key={j} className="px-2 py-0.5 text-xs rounded" style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#2a1f14" }}>
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="block w-full py-2.5 text-sm font-semibold text-center transition-all hover:brightness-110"
                    style={{ 
                      backgroundColor: item.highlight ? "#c8921e" : "transparent", 
                      color: item.highlight ? "#2a1f14" : "#c8921e", 
                      border: item.highlight ? "none" : "1px solid #c8921e",
                      fontFamily: "Oswald, sans-serif",
                      borderRadius: "8px"
                    }}
                  >
                    Quero Este
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
              style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>
              <span>🎁 Presentear alguém especial?</span>
              <span className="underline">Ver opções</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==============================
         5. PRODUTOS
         ============================== */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#faf8f4", minHeight: "auto" }}
        >
          <div className="px-4 py-10 lg:px-16 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="h-px w-6"
                    style={{ backgroundColor: "#c8921e" }}
                  ></div>
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: "#c8921e",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                    }}
                  >
                    Catálogo
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-normal leading-none mb-4">
                  <span style={{ color: "#1a1610" }}>Nossos</span>
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Produtos
                  </span>
                </h2>
                <div
                  className="w-9 h-px mb-6"
                  style={{
                    background: "linear-gradient(to right, #c8921e, rgba(200,146,30,0.3))",
                  }}
                ></div>
                <p
                  className="text-sm mb-8 leading-7"
                  style={{ color: "rgba(26,22,16,0.7)", fontWeight: 300 }}
                >
                  Linha completa de chopps artesanais premium. Cada chopp é
                  produzida com ingredientes selecionados para garantir o melhor sabor.
                </p>
                <Link
                  to="/produtos"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110 w-fit"
                  style={{
                    backgroundColor: "#c8921e",
                    color: "#2a1f14",
                    fontFamily: "Oswald, sans-serif",
                    clipPath: "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)",
                  }}
                >
                  Ver Todos
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="pr-4 lg:pr-16 mt-6 lg:mt-0">
                <Carousel
                  products={[
                    { name: "Chopp Pilsen", type: "Clássica", highlight: false },
                    { name: "Chopp Weiss", type: "Trigo", highlight: false },
                    { name: "Chopp Vienna", type: "Amber", highlight: false },
                    { name: "Chopp IPA", type: "American", highlight: false },
                    { name: "Chopp Stout", type: "Escura", highlight: false },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </GSAPFadeIn>

      {/* ==============================
         6. EVENTOS (tamanho normal, sem espaços)
         ============================== */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section className="py-14 lg:py-18 relative overflow-hidden" style={{ backgroundColor: "#faf8f4" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Scroll>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-7 w-1" style={{ backgroundColor: "#c8921e" }}></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal">
                  <span style={{ color: "#2a1f14" }}>Tipos de </span>
                  <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Evento</span>
                </h2>
              </div>
            </Scroll>

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
              <div className="flex flex-col gap-2">
                {eventTypes.map((tab) => (
                  <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-5 py-4 font-medium cursor-pointer group relative overflow-hidden text-sm"
                    style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "1px", textTransform: "uppercase", backgroundColor: activeTab === tab.id ? "#c8921e" : "#ffffff", border: activeTab === tab.id ? "none" : "1px solid rgba(200,150,30,0.2)", color: activeTab === tab.id ? "#2a1f14" : "#2a1f14", borderRadius: "8px" }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {tab.label}
                      <svg className="w-4 h-4 transition-transform duration-300" style={{ transform: activeTab === tab.id ? "rotate(90deg)" : "rotate(0deg)", color: activeTab === tab.id ? "#2a1f14" : "rgba(200,146,30,0.5)" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                className="relative p-6 lg:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(200,150,30,0.15)", borderRadius: "12px" }}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr] gap-5">
                  <div>
                    <span className="inline-block text-xs font-medium mb-3 px-3 py-1.5" style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>
                      {currentContent.badge}
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-3" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                      <span style={{ color: "#c8921e" }}>{currentContent.title}</span>
                      <span style={{ color: "#2a1f14" }}>{currentContent.title2}</span>
                    </h3>
                    <p className="text-base mb-5 leading-relaxed max-w-lg" style={{ color: "rgba(42,31,20,0.65)" }}>{currentContent.description}</p>

                    <ul className="space-y-2 mb-5">
                      {currentContent.benefits.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: "rgba(200,146,30,0.1)" }}>
                            <svg className="w-3 h-3" fill="none" stroke="#c8921e" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span style={{ color: "rgba(42,31,20,0.7)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de informações sobre ${currentContent.badge}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold" style={{ backgroundColor: "#c8921e", color: "#2a1f14", fontFamily: "Oswald, sans-serif", borderRadius: "6px" }}>
                      Solicitar Orçamento
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </GSAPFadeIn>

      {/* ==============================
         7. CHOPEIRAS TEMÁTICAS (versão melhorada)
         ============================== */}
      <section className="py-14 lg:py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1a1208 0%, #252019 50%, #1a1208 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(200,146,30,0.1) 0%, transparent 60%)" }} />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
          <Scroll>
            <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xs font-medium uppercase px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(200,146,30,0.15)", color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "2px" }}>Diferencial Imperador</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-normal">
                <span style={{ color: "#e8e0d0" }}>Chopeiras que </span>
                <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>viram atração</span>
              </h3>
              <p className="mt-3 max-w-lg mx-auto text-sm leading-relaxed" style={{ color: "rgba(200,185,145,0.65)" }}>
                Além da qualidade do chopp, a gente também custa da experiência visual. 
                <strong style={{ color: "#e8e0d0" }}>Deixa seu evento muito mais bonito.</strong>
              </p>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {[
              { 
                title: "Moto Chopper", 
                desc: "Point garantido de foto!", 
                icon: "🏍️",
                benefits: ["Vira point de foto", "Estilo único", "Conversa garantida"],
                highlight: true 
              },
              { 
                title: "Clássica", 
                desc: "Elegante e eficiente", 
                icon: "🍺",
                benefits: ["Tradicional", "Fácil de usar", "Para qualquer evento"],
                highlight: false 
              },
              { 
                title: "Personalizada", 
                desc: "Criamos sob medida", 
                icon: "✨",
                benefits: ["Exclusiva", "Tema da festa", "Memória inesquecível"],
                highlight: false 
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative"
                style={{ 
                  backgroundColor: item.highlight ? "rgba(200,146,30,0.15)" : "#3d2e1a", 
                  border: item.highlight ? "2px solid #c8921e" : "1px solid rgba(200,146,30,0.15)",
                  borderRadius: "16px",
                  overflow: "hidden"
                }}
              >
                {item.highlight && (
                  <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold" style={{ backgroundColor: "#c8921e", color: "#1f1810", fontFamily: "Oswald, sans-serif", borderBottomLeftRadius: "8px" }}>
                    Mais Procurada
                  </div>
                )}

                <div className="p-5 lg:p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  
                  <h4 className="text-xl font-normal mb-1" style={{ fontFamily: "Bebas Neue, sans-serif", color: item.highlight ? "#c8921e" : "#e8e0d0" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm mb-4" style={{ color: item.highlight ? "rgba(200,185,145,0.8)" : "rgba(200,185,145,0.65)" }}>
                    {item.desc}
                  </p>

                  <div className="space-y-2 mb-5">
                    <p className="text-xs font-medium" style={{ color: "rgba(200,185,145,0.5)", fontFamily: "Oswald, sans-serif" }}>POR QUE É ESPECIAL:</p>
                    {item.benefits.map((ben, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#c8921e" }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span style={{ color: "rgba(200,185,145,0.7)" }}>{ben}</span>
                      </div>
                    ))}
                  </div>

                  <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="block w-full py-2.5 text-sm font-semibold text-center transition-all hover:brightness-110"
                    style={{ 
                      backgroundColor: item.highlight ? "#c8921e" : "transparent", 
                      color: item.highlight ? "#1f1810" : "#c8921e", 
                      border: item.highlight ? "none" : "1px solid #c8921e",
                      fontFamily: "Oswald, sans-serif",
                      borderRadius: "8px"
                    }}
                  >
                    Quero Esta
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {[
              { icon: "📸", text: "Deixa o bar do evento muito mais bonito" },
              { icon: "🎯", text: "Vira ponto de foto e conversa" },
              { icon: "✨", text: "Reforça a sensação de cuidado e capricho" },
            ].map((ben, i) => (
              <div key={i} className="text-center p-3 rounded-lg" style={{ backgroundColor: "rgba(200,146,30,0.08)" }}>
                <span className="text-xl mr-2">{ben.icon}</span>
                <span className="text-sm" style={{ color: "rgba(200,185,145,0.8)" }}>{ben.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:gap-3"
              style={{ backgroundColor: "#c8921e", color: "#1f1810", fontFamily: "Oswald, sans-serif", borderRadius: "8px" }}>
              <span>Ver opções disponíveis</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==============================
         8. POR QUE ESCOLHER (unificado com Sobre)
         ============================== */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, rgba(200,146,30,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(200,146,30,0.05) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
                  Diferenciais
                </span>
                <div
                  className="h-px w-12"
                  style={{ backgroundColor: "#c8921e" }}
                ></div>
              </div>
              <h2 className="text-5xl lg:text-6xl font-normal">
                <span style={{ color: "#2a1f14" }}>Por que escolher o </span>
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Imperador?
                </span>
              </h2>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Qualidade",
                desc: "Chopp sempre bem armazenado, bem tirado e na temperatura certa.",
              },
              {
                title: "Atendimento Honesto",
                desc: "Indicamos a quantidade ideal. Sem surpresas.",
              },
              {
                title: "Estrutura Completa",
                desc: "Barris, chopeiras, montagem, regulagem e suporte.",
              },
              {
                title: "Suporte até 22h",
                desc: "Deu dúvida? A gente atende. Você não fica na mão.",
              },
              {
                title: "Experiência",
                desc: "Presentes nos mais variados tipos de festa.",
              },
              {
                title: "Próximo",
                desc: "Atendimento humanizado e transparente.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(200,146,30,0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#c8921e"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-normal mb-2"
                  style={{ fontFamily: "Bebas Neue, sans-serif", color: "#2a1f14" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(42,31,20,0.7)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          9. REGIÃO DE ATENDIMENTO
          ============================== */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)" }} />
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
                <span className="text-xs font-medium uppercase" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}>Atendimento</span>
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-normal">
                <span style={{ color: "#2a1f14" }}>Onde o </span>
                <span style={{ background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Imperador</span>
                <span style={{ color: "#2a1f14" }}> chega</span>
              </h2>
            </motion.div>
          </Scroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Scroll>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: "rgba(42,31,20,0.7)" }}>
                  Atendemos exclusivamente o <strong style={{ color: "#c8921e" }}>Paraná</strong>, em um raio de até <strong style={{ color: "#c8921e" }}>300 km de Cascavel</strong>.
                </p>
                <p className="text-base" style={{ color: "rgba(42,31,20,0.65)" }}>
                  Com forte atuação nas seguintes cidades:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cascavel", "Foz do Iguaçu", "Guaíra", "Guarapuava", "Assis Chateaubriand", "Palotina", "Lindoeste", "Capitão Leônidas Marques"].map((cidade) => (
                    <span
                      key={cidade}
                      className="px-3 py-1.5 text-sm"
                      style={{ backgroundColor: "rgba(200,146,30,0.1)", color: "#2a1f14", borderRadius: "4px", fontFamily: "Oswald, sans-serif" }}
                    >
                      {cidade}
                    </span>
                  ))}
                </div>
                <p className="text-base mt-4" style={{ color: "rgba(42,31,20,0.65)" }}>
                  Também temos operação em <strong style={{ color: "#2a1f14" }}>Maringá</strong> e região, conforme disponibilidade.
                </p>
              </div>
            </Scroll>

            <Scroll delay={0.1}>
              <motion.div
                className="relative p-6 lg:p-8"
                style={{ backgroundColor: "#2a1f14", borderRadius: "16px" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16" style={{ background: "linear-gradient(to bottom, #c8921e, transparent)" }}>
                  <motion.div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#c8921e", boxShadow: "0 0 15px #c8921e" }}
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <div className="text-center pt-6">
                  <div className="text-5xl lg:text-6xl font-normal mb-2" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}>300km</div>
                  <div className="text-sm uppercase mb-6" style={{ color: "rgba(200,185,145,0.6)", fontFamily: "Oswald, sans-serif", letterSpacing: "2px" }}>Raio de atendimento</div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(200,146,30,0.1)" }}>
                      <div className="text-2xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#e8e0d0" }}>8+</div>
                      <div className="text-xs" style={{ color: "rgba(200,185,145,0.5)" }}>Cidades</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(200,146,30,0.1)" }}>
                      <div className="text-2xl font-normal" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#e8e0d0" }}>2</div>
                      <div className="text-xs" style={{ color: "rgba(200,185,145,0.5)" }}>Estados</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Scroll>
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href={`https://wa.me/${config.whatsapp}?text=Olá! Gostaria de saber se vocês atendem na minha cidade`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium"
              style={{ backgroundColor: "#c8921e", color: "#2a1f14", fontFamily: "Oswald, sans-serif", borderRadius: "6px" }}
            >
              Verificar atendimento na minha cidade
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

{/* ==============================
          10. PARCERIAS (Ponto Fixo + Subdistribuidor)
          ============================== */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #2a1f14 0%, #1a1610 50%, #2a1f14 100%)",
        }}
      >
        {/* Diagonal contrast on right side */}
        <div
          className="absolute top-0 right-0 h-full hidden lg:block"
          style={{
            backgroundColor: "#0d0a04",
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
            width: "50%",
          }}
        />

        {/* Metallic edge lines */}
        <div
          className="absolute top-0 h-full w-px hidden lg:block"
          style={{
            left: "12%",
            background:
              "linear-gradient(to bottom, #c8921e, rgba(200,146,30,0.7), rgba(200,146,30,0.3))",
          }}
        />
        <div
          className="absolute top-0 h-full w-px hidden lg:block"
          style={{
            left: "calc(12% + 3px)",
            background:
              "linear-gradient(to bottom, rgba(200,146,30,0.3), rgba(200,146,30,0.15), transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text */}
            <Scroll>
              <div className="flex flex-col justify-center">
                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-6 h-px"
                    style={{ backgroundColor: "#c8921e" }}
                  ></div>
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: "#c8921e",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                    }}
                  >
                    Oportunidade
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-5xl lg:text-7xl font-normal leading-none mb-4"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  <span style={{ color: "#e8e0d0" }}>Seja um</span>
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Distribuidor
                  </span>
                </h2>

                {/* Separator */}
                <div
                  className="w-10 h-px mb-6"
                  style={{
                    background:
                      "linear-gradient(to right, #c8921e, transparent)",
                  }}
                ></div>

                {/* Description */}
                <p
                  className="text-sm mb-8 leading-7"
                  style={{
                    color: "rgba(200,185,145,0.65)",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Torne-se parte da maior rede de distribuição de chopp premium
                  do Paraná. Oferecemos suporte completo, treinamento e
                  condições exclusivas para parceiros.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-10">
                  {[
                    { name: "Margens", desc: "competitivas" },
                    { name: "Suporte", desc: "técnico especializado" },
                    { name: "Marca", desc: "reconhecida no mercado" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{
                          backgroundColor: "#c8921e",
                          boxShadow: "0 0 8px rgba(200,146,30,0.6)",
                        }}
                      ></div>
                      <span
                        style={{
                          color: "rgba(200,185,145,0.75)",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        <strong style={{ color: "#d4a820" }}>
                          {item.name}
                        </strong>{" "}
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${config.whatsapp}?text=Olá! Quero ser um distribuidor`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold transition-all duration-200 hover:brightness-110"
                    style={{
                      backgroundColor: "#c8921e",
                      color: "#2a1f14",
                      clipPath:
                        "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Quero Ser Distribuidor
                  </a>
                  <a
                    href="/contato"
                    className="inline-flex items-center text-base font-medium py-3 px-2"
                    style={{
                      color: "#c8921e",
                      borderBottom: "1px solid #c8921e",
                    }}
                  >
                    Falar com consultor
                  </a>
                </div>
              </div>
            </Scroll>

            {/* Right Column - Mockup Card */}
            <motion.div
              className="flex items-center justify-center lg:justify-end group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="relative transition-all duration-500"
                style={{ maxWidth: "340px" }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(200,146,30,0.15) 0%, transparent 70%)",
                    filter: "blur(20px)",
                    transform: "scale(1.1)",
                  }}
                ></div>

                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-[#c8921e] transition-all duration-300 group-hover:w-10 group-hover:h-10"></div>
                <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-[#c8921e] transition-all duration-300 group-hover:w-10 group-hover:h-10"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-[#c8921e] transition-all duration-300 group-hover:w-10 group-hover:h-10"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-[#c8921e] transition-all duration-300 group-hover:w-10 group-hover:h-10"></div>

                {/* Card */}
                <motion.div
                  className="p-6 transition-all duration-300 group-hover:shadow-2xl"
                  style={{
                    backgroundColor: "#1a1610",
                    border: "1px solid rgba(200,150,30,0.25)",
                  }}
                  whileHover={{ borderColor: "rgba(200,146,30,0.5)" }}
                >
                  {/* Spotlight */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12"
                    style={{
                      background:
                        "linear-gradient(to bottom, #c8921e, transparent)",
                    }}
                  >
                    <motion.div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "#c8921e",
                        boxShadow: "0 0 10px #c8921e",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 10px #c8921e",
                          "0 0 20px #c8921e",
                          "0 0 10px #c8921e",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Header */}
                  <div className="text-center mb-6 pt-4">
                    <motion.div
                      className="text-3xl font-normal mb-2 transition-all duration-300"
                      style={{
                        fontFamily: "Bebas Neue, sans-serif",
                        color: "#e8e0d0",
                      }}
                      whileHover={{ color: "#c8921e" }}
                    >
                      IMPERADOR
                    </motion.div>
                    <span
                      className="text-xs px-3 py-1 transition-all duration-300 hover:bg-[#c8921e] hover:text-[#2a1f14]"
                      style={{
                        backgroundColor: "rgba(200,146,30,0.2)",
                        color: "#c8921e",
                        fontFamily: "Oswald, sans-serif",
                        letterSpacing: "1px",
                        cursor: "pointer",
                      }}
                    >
                      50+ Unidades
                    </span>
                  </div>

                  {/* Body */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div
                      className="flex items-center justify-center p-4 transition-all duration-300 hover:bg-[#2a1f14]"
                      style={{ backgroundColor: "#2a1f14" }}
                    >
                      <motion.span
                        className="hidden lg:block"
                        style={{
                          fontFamily: "Bebas Neue, sans-serif",
                          color: "rgba(200,185,145,0.5)",
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                        }}
                      >
                        IMPERADOR DO CHOPP
                      </motion.span>
                    </div>
                    <motion.div
                      className="flex items-center justify-center p-4 transition-all duration-300"
                      style={{ backgroundColor: "#221d16" }}
                      whileHover={{ backgroundColor: "rgba(200,146,30,0.1)" }}
                    >
                      <div className="text-center">
                        <span
                          style={{
                            fontFamily: "Bebas Neue, sans-serif",
                            fontSize: "1.5rem",
                            color: "#e8e0d0",
                          }}
                        >
                          Descubra seu
                        </span>
                        <br />
                        <span
                          style={{
                            fontFamily: "Bebas Neue, sans-serif",
                            fontSize: "1.5rem",
                            background:
                              "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          chopp preferido
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <div className="text-center">
                    <div
                      className="text-xs mb-3"
                      style={{
                        color: "#b8985a",
                        fontFamily: "Oswald, sans-serif",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      Seja um parceiro
                    </div>
                    <motion.div
                      className="flex justify-center gap-2"
                      animate={{ gap: [2, 4, 2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: "#c8921e" }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: "rgba(200,146,30,0.3)" }}
                        whileHover={{ scale: 1.5, backgroundColor: "#c8921e" }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: "rgba(200,146,30,0.3)" }}
                        whileHover={{ scale: 1.5, backgroundColor: "#c8921e" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-3 -left-8 px-4 py-2 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: "#1a1610",
                    border: "1px solid rgba(200,146,30,0.3)",
                  }}
                  whileHover={{ scale: 1.1, borderColor: "#c8921e" }}
                >
                  <div
                    className="text-2xl font-normal"
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      color: "#c8921e",
                    }}
                  >
                    15+
                  </div>
                  <div
                    className="text-[10px] uppercase"
                    style={{
                      color: "#8a7348",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    Anos no mercado
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -right-8 px-4 py-2 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: "#1a1610",
                    border: "1px solid rgba(200,146,30,0.3)",
                  }}
                  whileHover={{ scale: 1.1, borderColor: "#c8921e" }}
                >
                  <div
                    className="text-2xl font-normal"
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      color: "#c8921e",
                    }}
                  >
                    4°C
                  </div>
                  <div
                    className="text-[10px] uppercase"
                    style={{
                      color: "#8a7348",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    Temperatura ideal
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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