import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn } from "../components/Animations";
import { Carousel } from "../components/Carousel";
import { useState } from "react";
import { useIsMobile, usePrefersReducedMotion } from "../hooks/useMedia";
import {
  GSAPFadeIn,
  GSAPScrollReveal as Scroll,
} from "../components/AnimationsGSAP";
import { BeerMug } from "../components/BeerMug";

function Home() {
  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();
  const shouldAnimate = !isMobile && !prefersReduced;
  const [activeTab, setActiveTab] = useState<string>("social");

  const eventTypes = [
    { id: "social", label: "Eventos Sociais" },
    { id: "corporativo", label: "Eventos Corporativos" },
    { id: "bares", label: "Bares e Restaurantes" },
    { id: "casamentos", label: "Casamentos" },
  ];

  const eventContent: Record<
    string,
    {
      badge: string;
      title: string;
      title2: string;
      description: string;
      benefits: string[];
      cta: string;
    }
  > = {
    social: {
      badge: "Eventos Sociais",
      title: "Celebrações ",
      title2: "com Amigos e Família",
      description:
        "Transforme qualquer encontro em um momento memorável. Nosso chopp premium é perfeito para churrascos, aniversários e celebrações íntimas.",
      benefits: [
        "Atendimento personalizado",
        "Montagem completa do bar",
        "Copos personalizados",
      ],
      cta: "Fazer Pedido",
    },
    corporativo: {
      badge: "Eventos Corporativos",
      title: "Happy Hours ",
      title2: "e Confraternizações",
      description:
        "Fortalça o espírito de equipe com um happy hour diferenciado. Atendimento profissional e estrutura completa para seu evento corporativo.",
      benefits: [
        "Atendimento profissional uniformizado",
        "Estrutura para grandes grupos",
        "Flexibilidade de horários",
      ],
      cta: "Fazer Pedido",
    },
    bares: {
      badge: "Bares e Restaurantes",
      title: "Parceria ",
      title2: "B2B Profissional",
      description:
        "Fornecimento regular de chopp premium para seu estabelecimento. Qualidade consistente e suporte técnico especializado.",
      benefits: [
        "Entrega regular programada",
        "Suporte técnico especializado",
        "Condições comerciais especiais",
      ],
      cta: "Ser Parceiro",
    },
    casamentos: {
      badge: "Casamentos",
      title: "O Grande Dia ",
      title2: "Perfeito",
      description:
        "Faça do seu casamento uma celebração inesquecível. Decoração personalizada, atendimento premium e chopp de excelência.",
      benefits: [
        "Decoração personalizada",
        "Atendimento premium dedicado",
        "Copos de cortesia para noivos",
      ],
      cta: "Fazer Pedido",
    },
  };

  const currentContent = eventContent[activeTab];

  return (
    <div className="pt-0">
      {/* Hero Section - Dark Premium Style */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#1a1208" }}
      >
        {/* Noise Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse at center bottom, rgba(200, 146, 30, 0.25) 0%, rgba(26, 18, 8, 0) 70%)",
            }}
          ></div>
          <div
            className="absolute top-1/2 right-0 w-[500px] h-[600px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(240, 168, 32, 0.15) 0%, rgba(26, 18, 8, 0) 70%)",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #c8921e 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          ></div>
        </div>

        {/* Light Stripes at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(200, 146, 30, 0.3), transparent)",
            }}
          ></div>
          <div
            className="absolute bottom-8 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(200, 146, 30, 0.15), transparent)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-8 items-center">
            {/* Left Column - Text */}
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
                Tradição desde 2014
              </motion.div>

              <h1
                className="text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-none mb-2"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                <span style={{ color: "#e8e0d0" }}>Imperador</span>
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #d4860e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  do Chopp
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl font-light mt-6 mb-10 max-w-lg"
                style={{
                  color: "#b8985a",
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 300,
                }}
              >
                A distribuidora de chopp premium que transforma seu evento em
                uma experiência imperial.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/pedido"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #f0a820 0%, #e8c040 50%, #d4860e 100%)",
                    color: "#1a1208",
                    clipPath:
                      "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    boxShadow: "0 4px 20px rgba(200, 146, 30, 0.4)",
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Fazer Pedido
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link
                    to="/produtos"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 hover:opacity-70"
                    style={{
                      color: "#b8985a",
                      borderBottom: "2px solid #b8985a",
                    }}
                  >
                    Ver Produtos
                  </Link>
                </motion.div>
              </div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 pt-8 flex gap-8 lg:gap-12"
                style={{ borderTop: "1px solid rgba(200, 146, 30, 0.2)" }}
              >
                <motion.div
                  className="cursor-pointer group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(200,146,30,0.2) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div className="relative">
                    <div
                      className="text-4xl lg:text-5xl font-normal transition-colors duration-300 group-hover:text-[#d4a820]"
                      style={{
                        color: "#c8921e",
                        fontFamily: "Bebas Neue, sans-serif",
                      }}
                    >
                      10+
                    </div>
                    <div className="text-sm mt-1" style={{ color: "#8a7348" }}>
                      Anos de Tradição
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="cursor-pointer group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(200,146,30,0.2) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div className="relative">
                    <div
                      className="text-4xl lg:text-5xl font-normal transition-colors duration-300 group-hover:text-[#d4a820]"
                      style={{
                        color: "#c8921e",
                        fontFamily: "Bebas Neue, sans-serif",
                      }}
                    >
                      5000+
                    </div>
                    <div className="text-sm mt-1" style={{ color: "#8a7348" }}>
                      Eventos Servidos
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="cursor-pointer group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(200,146,30,0.2) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div className="relative">
                    <div
                      className="text-4xl lg:text-5xl font-normal transition-colors duration-300 group-hover:text-[#d4a820]"
                      style={{
                        color: "#c8921e",
                        fontFamily: "Bebas Neue, sans-serif",
                      }}
                    >
                      4°C
                    </div>
                    <div className="text-sm mt-1" style={{ color: "#8a7348" }}>
                      Temperatura Ideal
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Beer Image */}
            <div className="relative hidden lg:block">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(200, 146, 30, 0.35) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              ></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative flex items-center justify-center"
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(200, 146, 30, 0.35) 0%, transparent 70%)",
                    filter: "blur(50px)",
                  }}
                ></div>

                <BeerMug />

                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-24 rounded-[100%]"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(200, 146, 30, 0.2), transparent)",
                    filter: "blur(15px)",
                  }}
                ></div>
              </motion.div>
            </div>
          </div>
        </div>

        {shouldAnimate && !isMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-14 rounded-full border-2 flex justify-center pt-3"
              style={{ borderColor: "rgba(200, 146, 30, 0.4)" }}
            >
              <motion.div
                className="w-1.5 h-3 rounded-full"
                style={{ backgroundColor: "#c8921e" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        ) : (
          shouldAnimate && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
              <div
                className="w-8 h-14 rounded-full border-2 flex justify-center pt-3 animate-float"
                style={{ borderColor: "rgba(200, 146, 30, 0.4)" }}
              >
                <div
                  className="w-1.5 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "#c8921e" }}
                ></div>
              </div>
            </div>
          )
        )}
      </section>

      {/* Event Types Section - Modern Light Theme */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section
          className="py-20 lg:py-32 relative overflow-hidden"
          style={{ backgroundColor: "#faf8f4" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <Scroll>
              <div className="mb-12 flex items-center gap-4">
                <div
                  className="h-8 w-1"
                  style={{ backgroundColor: "#c8921e" }}
                ></div>
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-normal"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  <span style={{ color: "#2a1f14" }}>Tipos de </span>
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Evento
                  </span>
                </h2>
              </div>
            </Scroll>

            {/* Main Container */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              {/* Left Column - Tab Navigation */}
              <div className="flex flex-col gap-3">
                {eventTypes.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-6 py-5 font-medium cursor-pointer group relative overflow-hidden transition-all duration-300"
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      backgroundColor:
                        activeTab === tab.id ? "#c8921e" : "#ffffff",
                      border:
                        activeTab === tab.id
                          ? "none"
                          : "1px solid rgba(200,150,30,0.2)",
                      color: activeTab === tab.id ? "#2a1f14" : "#2a1f14",
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(240,168,32,0.3) 0%, rgba(200,146,30,0) 100%)",
                        }}
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-between">
                      {tab.label}
                      <svg
                        className="w-5 h-5 transition-transform duration-300"
                        style={{
                          transform:
                            activeTab === tab.id
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                          color:
                            activeTab === tab.id
                              ? "#2a1f14"
                              : "rgba(200,146,30,0.5)",
                        }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Right Column - Content Panel */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 lg:p-10"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(200,150,30,0.15)",
                  boxShadow: "0 4px 30px rgba(42,31,20,0.05)",
                }}
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-[1px] h-12"
                    style={{
                      background:
                        "linear-gradient(to bottom, #c8921e, transparent)",
                    }}
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-12 h-[1px]"
                    style={{
                      background:
                        "linear-gradient(to left, #c8921e, transparent)",
                    }}
                  ></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 h-full">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span
                        className="inline-block text-xs font-medium mb-4 px-3 py-1.5"
                        style={{
                          backgroundColor: "rgba(200,146,30,0.1)",
                          color: "#c8921e",
                          fontFamily: "Oswald, sans-serif",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        {currentContent.badge}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6"
                      style={{ fontFamily: "Bebas Neue, sans-serif" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <span style={{ color: "#c8921e" }}>
                        {currentContent.title}
                      </span>
                      <span style={{ color: "#2a1f14" }}>
                        {currentContent.title2}
                      </span>
                    </motion.h3>

                    <motion.p
                      className="mb-8 text-base leading-relaxed max-w-xl"
                      style={{
                        color: "rgba(42,31,20,0.65)",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 300,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentContent.description}
                    </motion.p>

                    <motion.ul
                      className="space-y-4 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      {currentContent.benefits.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 group">
                          <div
                            className="w-6 h-6 flex items-center justify-center"
                            style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="#c8921e"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span
                            style={{
                              color: "rgba(42,31,20,0.7)",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 300,
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </motion.ul>

                    <motion.a
                      href={`https://wa.me/5545998044188?text=Olá! Gostaria de informações sobre ${currentContent.badge}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold w-fit transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: "#c8921e",
                        color: "#2a1f14",
                        fontFamily: "Oswald, sans-serif",
                        letterSpacing: "1px",
                        clipPath:
                          "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                        boxShadow: "0 4px 15px rgba(200,146,30,0.3)",
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {currentContent.cta}
                    </motion.a>
                  </div>

                  {/* Visual */}
                  <div className="relative hidden lg:flex items-center justify-center">
                    <div
                      className="w-full h-full min-h-[300px] flex items-center justify-center relative"
                      style={{ backgroundColor: "rgba(200,146,30,0.05)" }}
                    >
                      {activeTab === "social" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-center"
                        >
                          <svg
                            className="w-32 h-32 mx-auto mb-4"
                            fill="none"
                            stroke="#c8921e"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span
                            className="text-sm uppercase"
                            style={{
                              color: "rgba(200,146,30,0.5)",
                              fontFamily: "Oswald, sans-serif",
                              letterSpacing: "2px",
                            }}
                          >
                            Eventos Sociais
                          </span>
                        </motion.div>
                      )}
                      {activeTab === "corporativo" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-center"
                        >
                          <svg
                            className="w-32 h-32 mx-auto mb-4"
                            fill="none"
                            stroke="#c8921e"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span
                            className="text-sm uppercase"
                            style={{
                              color: "rgba(200,146,30,0.5)",
                              fontFamily: "Oswald, sans-serif",
                              letterSpacing: "2px",
                            }}
                          >
                            Corporativo
                          </span>
                        </motion.div>
                      )}
                      {activeTab === "bares" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-center"
                        >
                          <svg
                            className="w-32 h-32 mx-auto mb-4"
                            fill="none"
                            stroke="#c8921e"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 75v-9a2 2 0 012-2h2a2 2 0 012 2v9M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                            />
                          </svg>
                          <span
                            className="text-sm uppercase"
                            style={{
                              color: "rgba(200,146,30,0.5)",
                              fontFamily: "Oswald, sans-serif",
                              letterSpacing: "2px",
                            }}
                          >
                            Bares & Restaurantes
                          </span>
                        </motion.div>
                      )}
                      {activeTab === "casamentos" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-center"
                        >
                          <svg
                            className="w-32 h-32 mx-auto mb-4"
                            fill="none"
                            stroke="#c8921e"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span
                            className="text-sm uppercase"
                            style={{
                              color: "rgba(200,146,30,0.5)",
                              fontFamily: "Oswald, sans-serif",
                              letterSpacing: "2px",
                            }}
                          >
                            Casamentos
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </GSAPFadeIn>

      {/* Become Distributor Section */}
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

        {/* Metallic edge lines - hidden on mobile */}
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
                    href="https://wa.me/5545998044188?text=Olá! Quero ser um distribuidor"
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

      {/* Products Section - Lighter background for contrast */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#faf8f4", minHeight: "auto" }}
        >
          <div className="px-4 py-10 lg:px-16 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
              {/* Left Column - Text */}
              <div className="flex flex-col justify-center">
                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-5">
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
                    Catálogo
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-5xl lg:text-6xl font-normal leading-none mb-4"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  <span style={{ color: "#1a1610" }}>Nossos</span>
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontSize: "4rem",
                      lineHeight: 1,
                    }}
                  >
                    Produtos
                  </span>
                </h2>

                {/* Separator */}
                <div
                  className="w-9 h-px mb-6"
                  style={{
                    background:
                      "linear-gradient(to right, #c8921e, rgba(200,146,30,0.3))",
                  }}
                ></div>

                {/* Description */}
                <p
                  className="text-sm mb-8 leading-7"
                  style={{
                    color: "rgba(26,22,16,0.7)",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Linha completa de chopps artesanais premium. Cada chopp é
                  produzida com ingredientes selecionados para garantir o melhor
                  sabor.
                </p>

                {/* CTA Button */}
                <a
                  href="/produtos"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110 w-fit"
                  style={{
                    backgroundColor: "#c8921e",
                    color: "#2a1f14",
                    fontFamily: "Oswald, sans-serif",
                    clipPath:
                      "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)",
                  }}
                >
                  Ver Todos
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Right Column - Products Carousel */}
              <div className="pr-4 lg:pr-16 mt-6 lg:mt-0">
                <div className="lg:h-auto">
                  <Carousel
                    products={[
                      {
                        name: "Chopp Pilsen",
                        type: "Clássica",
                        highlight: false,
                      },
                      { name: "Chopp Weiss", type: "Trigo", highlight: false },
                      { name: "Chopp Escuro", type: "Stout", highlight: false },
                      { name: "Barril 30L", type: "Evento", highlight: false },
                      { name: "Chopp Rosé", type: "Frutada", highlight: false },
                      {
                        name: "Chopp Lager",
                        type: "Premium",
                        highlight: false,
                      },
                      {
                        name: "Chopp IPA",
                        type: "Americano",
                        highlight: false,
                      },
                      {
                        name: "Chopp Puro Malte",
                        type: "Especial",
                        highlight: false,
                      },
                      { name: "Chopp Red", type: "Amber", highlight: false },
                      {
                        name: "Chopp Black",
                        type: "Schwarzbier",
                        highlight: false,
                      },
                      {
                        name: "Chopp Honey",
                        type: "Com Mel",
                        highlight: false,
                      },
                      { name: "Chopp Fruit", type: "Frutas", highlight: false },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </GSAPFadeIn>
      {/* Sobre Section - Modern Dark Gold */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #2a1f14 0%, #1f1810 50%, #2a1f14 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, rgba(200,146,30,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(200,146,30,0.05) 0%, transparent 50%)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <Scroll>
            <motion.div
            className="text-center mb-16"
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
                Nossa história
              </span>
              <div
                className="h-px w-12"
                style={{ backgroundColor: "#c8921e" }}
              ></div>
            </div>
            <h2
              className="text-5xl lg:text-6xl font-normal leading-none mb-4"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              <span style={{ color: "#e8e0d0" }}>Sobre o </span>
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
              className="text-base mx-auto leading-relaxed max-w-2xl"
              style={{
                color: "rgba(200,185,145,0.6)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
              }}
            >
              Uma jornada de tradição e excelência no mundo do chopp premium,
              construindo memórias inesquecíveis em cada evento.
            </p>
          </motion.div>
          </Scroll>

          {/* Cards Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "01",
                title: "Tradição",
                subtitle: "Desde 2014",
                description:
                  "Mais de uma década entregando excelência em cada chopeira, mantendo os mais altos padrões de qualidade.",
                link: "Nossa história",
              },
              {
                icon: "02",
                title: "Qualidade",
                subtitle: "Certificada",
                description:
                  "Processos rigorosos e ingredientes selecionados garantem o melhor chopp em cada evento.",
                link: "Ver detalhes",
              },
              {
                icon: "03",
                title: "Atendimento",
                subtitle: "Personalizado",
                description:
                  "Equipe treinada para oferecer experiência única, desde a montagem até o último gole.",
                link: "Saiba mais",
              },
              {
                icon: "04",
                title: "Compromisso",
                subtitle: "Pontualidade",
                description:
                  "Entrega no prazo e temperatura perfeita. Seu evento merece o melhor chopp.",
                link: "Saiba mais",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-8 lg:p-10 cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: "#3d2e1a",
                  border: "1px solid rgba(200,146,30,0.15)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(200,146,30,0.1) 0%, transparent 60%)",
                  }}
                ></div>

                {/* Corner accents */}
                <div
                  className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#c8921e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: "rgba(200,146,30,0.4)" }}
                ></div>
                <div
                  className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#c8921e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                  style={{ borderColor: "rgba(200,146,30,0.4)" }}
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#c8921e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
                  style={{ borderColor: "rgba(200,146,30,0.4)" }}
                ></div>
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#c8921e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                  style={{ borderColor: "rgba(200,146,30,0.4)" }}
                ></div>

                <div className="relative">
                  {/* Icon/Number */}
                  <motion.div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span
                      className="text-2xl font-normal"
                      style={{
                        fontFamily: "Bebas Neue, sans-serif",
                        color: "#c8921e",
                      }}
                    >
                      {card.icon}
                    </span>
                  </motion.div>

                  {/* Subtitle */}
                  <span
                    className="text-xs uppercase block mb-2"
                    style={{
                      color: "#c8921e",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "2px",
                    }}
                  >
                    {card.subtitle}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-2xl lg:text-3xl font-normal mb-3"
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      color: "#e8e0d0",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      color: "rgba(200,185,145,0.65)",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Link */}
                  <a
                    href="/sobre"
                    className="inline-flex items-center gap-2 text-xs uppercase group/link"
                    style={{
                      color: "#c8921e",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "2px",
                      borderBottom: "1px solid #c8921e",
                      paddingBottom: "2px",
                    }}
                  >
                    <span>{card.link}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            className="mt-16 pt-12 flex flex-wrap justify-center gap-8 lg:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ borderTop: "1px solid rgba(200,146,30,0.15)" }}
          >
            {[
              { number: "10+", label: "Anos" },
              { number: "5000+", label: "Eventos" },
              { number: "4°C", label: "Temperatura" },
              { number: "50+", label: "Parcerias" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl lg:text-5xl font-normal"
                  style={{
                    fontFamily: "Bebas Neue, sans-serif",
                    color: "#c8921e",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs uppercase mt-1"
                  style={{
                    color: "rgba(200,185,145,0.5)",
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "2px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            style={{
              background:
                "radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)",
            }}
          ></div>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FadeIn direction="up">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span style={{ color: "#2a1f14" }}>
                Pronto para tornar seu evento
              </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                inesquecível?
              </span>
            </motion.h2>
            <p
              className="text-lg mb-10 mx-auto leading-relaxed max-w-xl"
              style={{
                color: "rgba(42,31,20,0.65)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
              }}
            >
              Faça seu pedido personalizado.
            </p>
          </FadeIn>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="/pedido"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold shadow-lg group"
              style={{
                background:
                  "linear-gradient(135deg, #f0a820 0%, #e8c040 50%, #d4860e 100%)",
                color: "#2a1f14",
                fontFamily: "Oswald, sans-serif",
                letterSpacing: "1px",
                clipPath:
                  "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                boxShadow: "0 4px 20px rgba(200, 146, 30, 0.4)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.div>
              <span>Fazer Pedido</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/localizacao"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold transition-all duration-300 group"
                style={{
                  backgroundColor: "transparent",
                  color: "#c8921e",
                  fontFamily: "Oswald, sans-serif",
                  letterSpacing: "1px",
                  border: "2px solid #c8921e",
                  clipPath:
                    "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                }}
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Ver Localização</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(200, 146, 30, 0.4), transparent)",
          }}
        ></div>
      </section>
    </div>
  );
}

export default Home;
