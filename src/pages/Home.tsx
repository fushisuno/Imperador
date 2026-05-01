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
import { theme } from "../context/ThemeContext";
import { Crown, Beer, Quote, Award, Truck, Package, Star, Check } from "lucide-react";

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
        "Fortalece o espírito de equipe com um happy hour diferenciado. Atendimento profissional e estrutura completa para seu evento corporativo.",
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
                  href="https://wa.me/5545998044188?text=Olá! Gostaria de fazer um pedido de chopp premium"
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
                  aria-label="Fazer pedido pelo WhatsApp"
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
                  <a
                    href="https://wa.me/5545998044188?text=Olá! Gostaria de conhecer os produtos disponíveis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 hover:opacity-70"
                    style={{
                      color: "#b8985a",
                      borderBottom: "2px solid #b8985a",
                    }}
                  >
                    Ver Produtos
                  </a>
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

      {/* Quem Somos Section - Light alternating */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(200, 146, 30, 0.3) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(200, 146, 30, 0.2) 0%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Scroll>
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                <span style={{ color: theme.colors.primary }}>Quem </span>
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #d4860e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Somos
                </span>
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                style={{
                  color: theme.colors.text,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                }}
              >
                Especialistas em transformar seu evento em uma experiência inesquecível.
              </p>
            </div>
          </Scroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                icon: Crown,
                title: "Tradição",
                description: "Desde 2017 delivering excelência em chopp premium",
              },
              {
                icon: Beer,
                title: "Qualidade",
                description: "Cerveja gelada, bem servida, no ponto certo",
              },
              {
                icon: Award,
                title: "Experiência",
                description: " Referência em eventos na região de Cascavel",
              },
            ].map((item, index) => (
              <Scroll key={item.title} delay={index * 0.1}>
                <div
                  className="p-6 lg:p-8 rounded-lg text-center transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "rgba(200, 146, 30, 0.08)",
                    border: "1px solid rgba(200, 146, 30, 0.15)",
                  }}
                >
                  <div
                    className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.colors.cta }}
                  >
                    <item.icon
                      size={28}
                      style={{ color: theme.colors.primary }}
                    />
                  </div>
                  <h3
                    className="text-xl font-medium mb-2"
                    style={{
                      fontFamily: "Bebas Neue, sans-serif",
                      color: theme.colors.primary,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: theme.colors.secondary,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Scroll>
            ))}
          </div>

          <Scroll delay={0.3}>
            <div
              className="relative p-8 lg:p-10 rounded-lg text-center"
              style={{
                backgroundColor: "rgba(200, 146, 30, 0.05)",
                border: "1px solid rgba(200, 146, 30, 0.2)",
              }}
            >
              <Quote
                size={40}
                className="mx-auto mb-4"
                style={{ color: theme.colors.cta }}
              />
              <blockquote
                className="text-xl lg:text-2xl font-normal leading-relaxed mb-4"
                style={{
                  fontFamily: "Bebas Neue, sans-serif",
                  color: theme.colors.primary,
                }}
              >
                "Não servimos apenas chopp. Criamos momentos que você vai lembrar para sempre."
              </blockquote>
              <cite
                className="text-sm not-italic"
                style={{
                  color: theme.colors.secondary,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                — Imperador do Chopp
              </cite>
            </div>
          </Scroll>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(200, 146, 30, 0.3), transparent)",
          }}
        ></div>
      </section>

      {/* Barrels Section - Dark alternating */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{ backgroundColor: "#1a1610" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, #c8921e 0%, transparent 70%)",
              }}
            ></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Scroll>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
                  <span
                    className="text-xs font-medium uppercase"
                    style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
                  >
                    Delivery
                  </span>
                  <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
                </div>
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  <span style={{ color: "#e8e0d0" }}>Chopp na sua casa,</span>
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    na sua empresa ou onde a festa acontecer
                  </span>
                </h2>
                <p
                  className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                  style={{ color: "rgba(200,185,145,0.7)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
                >
                  Pra um jantar em família, aniversário na garagem ou confraternização da firma, o Imperador leva o chopp até você – com a mesma qualidade que usamos nos grandes eventos.
                </p>
              </div>
            </Scroll>

            <Scroll delay={0.1}>
              <div className="text-center mb-10">
                <h3
                  className="text-2xl font-normal"
                  style={{ fontFamily: "Bebas Neue, sans-serif", color: "#b8985a" }}
                >
                  Barris do tamanho da sua comemoração
                </h3>
              </div>
            </Scroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {[
                {
                  size: "20L",
                  label: "Ideal",
                  desc: "Jantares íntimos",
                  features: ["Até 30 copos", "Perfeito pra família"],
                },
                {
                  size: "30L",
                  label: "Mais pedido",
                  desc: "Aniversários e confraternizações",
                  features: ["Até 50 copos", "Mais popular"],
                  popular: true,
                },
                {
                  size: "50L",
                  label: "Eventos",
                  desc: "Grandes festas",
                  features: ["Até 80 copos", "Para grandes grupos"],
                },
              ].map((barrel, index) => (
                <Scroll key={barrel.size} delay={0.1 + index * 0.1}>
                  <motion.div
                    className={`relative p-6 lg:p-8 rounded-xl cursor-pointer transition-all duration-300 ${barrel.popular ? 'md:-mt-4' : ''}`}
                    style={{
                      backgroundColor: barrel.popular ? "rgba(200,146,30,0.15)" : "rgba(200,146,30,0.08)",
                      border: `1px solid ${barrel.popular ? 'rgba(200,146,30,0.5)' : 'rgba(200,146,30,0.2)'}`,
                    }}
                    whileHover={{ 
                      y: -8,
                      borderColor: "rgba(200,146,30,0.6)",
                    }}
                  >
                    {barrel.popular && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full flex items-center gap-1"
                        style={{ backgroundColor: "#c8921e" }}
                      >
                        <Star size={12} style={{ color: "#1a1208" }} fill="#1a1208" />
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#1a1208", fontFamily: "Oswald, sans-serif" }}
                        >
                          Mais Pedido
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div
                        className="text-5xl lg:text-6xl font-normal mb-2"
                        style={{ fontFamily: "Bebas Neue, sans-serif", color: barrel.popular ? "#c8921e" : "#e8e0d0" }}
                      >
                        {barrel.size}
                      </div>
                      <div
                        className="text-sm uppercase tracking-wider"
                        style={{ color: barrel.popular ? "#c8921e" : "#b8985a", fontFamily: "Oswald, sans-serif" }}
                      >
                        {barrel.label}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: "rgba(200,185,145,0.6)", fontFamily: "Inter, sans-serif" }}
                      >
                        {barrel.desc}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {barrel.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check size={16} style={{ color: "#c8921e" }} />
                          <span
                            className="text-sm"
                            style={{ color: "rgba(200,185,145,0.8)", fontFamily: "Inter, sans-serif" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </Scroll>
              ))}
            </div>

            <Scroll delay={0.3}>
              <div
                className="relative p-6 lg:p-8 rounded-xl text-center mb-10"
                style={{
                  backgroundColor: "rgba(200,146,30,0.08)",
                  border: "1px solid rgba(200,146,30,0.2)",
                }}
              >
                <Package size={32} className="mx-auto mb-4" style={{ color: "#c8921e" }} />
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(200,185,145,0.85)", fontFamily: "Inter, sans-serif" }}
                >
                  <span style={{ color: "#e8e0d0", fontWeight: 500 }}>Chopp sempre bem armazenado e na temperatura certa</span>
                </p>
              </div>
            </Scroll>

            <Scroll delay={0.4}>
              <div
                className="relative p-6 lg:p-8 rounded-xl mb-10"
                style={{
                  backgroundColor: "rgba(200,146,30,0.12)",
                  border: "1px solid rgba(200,146,30,0.3)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ backgroundColor: "rgba(200,146,30,0.2)" }}
                  >
                    <Truck size={20} style={{ color: "#c8921e" }} />
                  </div>
                  <div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: "#e8e0d0", fontFamily: "Inter, sans-serif" }}
                    >
                      Você não contrata "só o chopp". Você leva junto estrutura, atendimento e segurança pra não passar perrengue no meio da festa.
                    </p>
                  </div>
                </div>
              </div>
            </Scroll>

            <Scroll delay={0.5}>
              <div className="text-center">
                <motion.a
                  href="https://wa.me/5545998044188?text=Olá! Gostaria de fazer um pedido de chopp para delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #f0a820 0%, #e8c040 50%, #d4860e 100%)",
                    color: "#1a1208",
                    fontFamily: "Oswald, sans-serif",
                    clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                    boxShadow: "0 4px 20px rgba(200,146,30,0.4)",
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quer chopp no seu próximo encontro? Fale com a gente no WhatsApp
                </motion.a>
              </div>
            </Scroll>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(200,146,30,0.3), transparent)",
            }}
          ></div>
        </section>
      </GSAPFadeIn>

      {/* Event Types Section - Light alternating */}
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
              <div className="flex flex-col gap-3" role="tablist" aria-label="Tipos de eventos">
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
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`event-panel-${tab.id}`}
                    id={`event-tab-${tab.id}`}
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
                role="tabpanel"
                id={`event-panel-${activeTab}`}
                aria-labelledby={`event-tab-${activeTab}`}
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

      {/* Become Distributor Section - Dark alternating */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1a1610" }}
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

      {/* Delivery Section - Dark alternating */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#1a1610" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, #c8921e 0%, transparent 70%)",
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <Scroll>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px" style={{ backgroundColor: "#c8921e" }}></div>
                  <span
                    className="text-xs font-medium uppercase"
                    style={{
                      color: "#c8921e",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "3px",
                    }}
                  >
                    Delivery
                  </span>
                </div>

                <h2
                  className="text-5xl lg:text-6xl font-normal leading-none mb-4"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  <span style={{ color: "#e8e0d0" }}>Entregamos</span>
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    onde você estiver
                  </span>
                </h2>

                <p
                  className="text-base mb-8 leading-relaxed"
                  style={{
                    color: "rgba(200,185,145,0.75)",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Receba o melhor chopp premium direto na sua porta. Nossa equipe entrega com qualidade e pontualidade, garantindo a temperatura perfeita do seu chopp.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: "🕐", title: "Horárioflexível", desc: "Das 10h às 22h" },
                    { icon: "📍", title: "Cobertura", desc: "Região de Cascavel" },
                    { icon: "💳", title: "Pagamento", desc: "Pix, cartão ou dinheiro" },
                    { icon: "📦", title: "Pedido mín.", desc: "A partir de 2 chopeiras" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
<div>
                          <div
                            className="text-sm font-medium"
                            style={{
                              color: "#e8e0d0",
                              fontFamily: "Oswald, sans-serif",
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            className="text-xs"
                            style={{
                              color: "rgba(200,185,145,0.6)",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {item.desc}
                          </div>
                        </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5545998044188?text=Olá! Gostaria de informações sobre delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{
                    backgroundColor: "#c8921e",
                    color: "#2a1f14",
                    fontFamily: "Oswald, sans-serif",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Ver Área de Entrega
                </a>
              </Scroll>

              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(200,146,30,0.2) 0%, transparent 70%)",
                  }}
                ></div>
                <div
                  className="relative p-8 rounded-2xl border"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(200,150,30,0.2)",
                  }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { emoji: "🍺", name: "Chopp Pilsen", price: "R$ 89" },
                      { emoji: "🍺", name: "Chopp Weiss", price: "R$ 99" },
                      { emoji: "🍺", name: "Chopp IPA", price: "R$ 109" },
                      { emoji: "🍺", name: "Chopp Stout", price: "R$ 99" },
                    ].map((product, i) => (
                      <motion.div
                        key={i}
                        className="text-center p-4 rounded-lg cursor-pointer"
                        style={{ backgroundColor: "rgba(200,146,30,0.05)" }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(200,146,30,0.1)" }}
                      >
                        <div className="text-4xl mb-2">{product.emoji}</div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "#2a1f14", fontFamily: "Oswald, sans-serif" }}
                        >
                          {product.name}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "#c8921e", fontFamily: "Inter, sans-serif" }}
                        >
                          {product.price}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <span
                      className="text-xs uppercase"
                      style={{ color: "rgba(26,22,16,0.5)", fontFamily: "Oswald, sans-serif", letterSpacing: "2px" }}
                    >
                      + de 10 opções disponíveis
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </GSAPFadeIn>

      {/* Growlers Section - Light alternating */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #c8921e 0%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(200,146,30,0.3) 0%, transparent 70%)",
                }}
              ></div>
              <div className="relative flex justify-center">
                <div className="text-center">
                  <div
                    className="text-[120px] lg:text-[180px] leading-none"
                    style={{ fontFamily: "Bebas Neue, sans-serif", color: "#c8921e" }}
                  >
                    2L
                  </div>
                  <div
                    className="text-sm uppercase mt-2"
                    style={{ color: "rgba(200,185,145,0.6)", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
                  >
                    Growler Imperador
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg"
                style={{ backgroundColor: "#c8921e" }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-semibold" style={{ color: "#1a1208", fontFamily: "Oswald, sans-serif" }}>
                  Frescor garantido
                </span>
              </motion.div>
            </motion.div>

            <Scroll>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: "#c8921e" }}></div>
                <span
                  className="text-xs font-medium uppercase"
                  style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
                >
                  Growlers
                </span>
              </div>

              <h2
                className="text-5xl lg:text-6xl font-normal leading-none mb-4"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                <span style={{ color: "#1a1610" }}>Chopp Fresco</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  em Casa
                </span>
              </h2>

              <p
                className="text-base mb-8 leading-relaxed"
                style={{ color: "rgba(26,22,16,0.7)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
              >
                Leve o sabor do chopp premium para casa com nossos growlers. Perfeitos para enjoying fresh beer anytime, com sistema de vazão profissional.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { size: "1L", price: "R$ 49", desc: "Ideal para acompanhamento" },
                  { size: "2L", price: "R$ 89", desc: "Mais vendido - família" },
                  { size: "3L", price: "R$ 129", desc: "Eventos pequeños" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300"
                    style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
                    whileHover={{ backgroundColor: "rgba(200,146,30,0.2)" }}
                  >
                    <div>
                      <span className="text-lg font-semibold" style={{ color: "#1a1610", fontFamily: "Bebas Neue, sans-serif" }}>
                        {item.size}
                      </span>
                      <span className="text-sm ml-2" style={{ color: "rgba(26,22,16,0.6)", fontFamily: "Inter, sans-serif" }}>
                        {item.desc}
                      </span>
                    </div>
                    <span className="text-lg" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5545998044188?text=Olá! Gostaria de informações sobre growlers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{
                    backgroundColor: "#c8921e",
                    color: "#2a1f14",
                    fontFamily: "Oswald, sans-serif",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  Ver Growlers
                </a>
                <a
                  href="/produtos"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300"
                  style={{ color: "#c8921e", borderBottom: "1px solid #c8921e", fontFamily: "Oswald, sans-serif" }}
                >
                  Ver refill
                </a>
              </div>
            </Scroll>
          </div>
        </div>
      </section>

      {/* Custom Tap Systems Section - Dark alternating */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{ backgroundColor: "#1a1610" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
                <span
                  className="text-xs font-medium uppercase"
                  style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
                >
                  B2B
                </span>
                <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
              </div>
              <h2
                className="text-5xl lg:text-6xl font-normal leading-none mb-4"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                <span style={{ color: "#e8e0d0" }}>Sistemas de Chope</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Personalizados
                </span>
              </h2>
              <p
                className="text-base mx-auto leading-relaxed max-w-2xl"
                style={{ color: "rgba(200,185,145,0.75)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
              >
                Equipamentos profissionais para bares, restaurantes e eventos. Qualidade industrial com design personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔧",
                  title: "Instalação",
                  desc: "Equipe técnica especializada para montagem e configuração completa do seu sistema.",
                },
                {
                  icon: "🛠️",
                  title: "Manutenção",
                  desc: "Suporte técnico permanente, com peças originais e atendimento rápido.",
                },
                {
                  icon: "📦",
                  title: "Equipamentos",
                  desc: "Chopeiras, cilindors, reguladores e acessórios das melhores marcas.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group p-8 rounded-xl cursor-pointer"
                  style={{ backgroundColor: "#ffffff", border: "1px solid rgba(200,150,30,0.15)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: "rgba(200,146,30,0.4)" }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-normal mb-3"
                    style={{ fontFamily: "Bebas Neue, sans-serif", color: "#1a1610" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(26,22,16,0.6)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://wa.me/5545998044188?text=Olá! Gostaria de informações sobre sistemas de chope"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all duration-200 hover:brightness-110"
                style={{
                  backgroundColor: "#1a1610",
                  color: "#faf8f4",
                  fontFamily: "Oswald, sans-serif",
                  clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </section>
      </GSAPFadeIn>

      {/* Value Proposition Section - Light alternating */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-1/2 h-full"
            style={{
              background: "radial-gradient(ellipse at left center, rgba(200,146,30,0.1) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-32 h-px"
            style={{ background: "linear-gradient(to right, transparent, #c8921e)" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
              <span
                className="text-xs font-medium uppercase"
                style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
              >
                Diferenciais
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
            </div>
            <h2
              className="text-5xl lg:text-6xl font-normal leading-none"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              <span style={{ color: "#1a1610" }}>Por Que </span>
              <span
                style={{
                  background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Escolher a Imperador
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Maior Variedade", desc: "Mais de 15 tipos de chopp premium, das clássicas às artesanais exclusivas.", icon: "🍺" },
              { title: "Preços Competitivos", desc: "O melhor custo-benefício da região sem comprometer a qualidade.", icon: "💰" },
              { title: "Entrega Rápida", desc: "Ponto de entrega no mesmo dia para pedidos acima de 4 chopeiras.", icon: "🚚" },
              { title: "Qualidade Garantida", desc: "Matéria-prima selecionada e processo rigoroso de controle de qualidade.", icon: "⭐" },
              { title: "Serviço Profissional", desc: "Equipe treinada e uniformizada para atendimento de excelência.", icon: "🤝" },
              { title: "Suporte Total", desc: "Atendimento personalizado do pedido à entrega, com pós-venda dedicado.", icon: "📞" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-xl cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: "#3d2e1a", border: "1px solid rgba(200,150,30,0.15)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(200,146,30,0.15) 0%, transparent 60%)",
                  }}
                ></div>
                <div className="relative">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-normal mb-3"
                    style={{ fontFamily: "Bebas Neue, sans-serif", color: "#e8e0d0" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(200,185,145,0.65)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area & Fixed Points - Dark alternating */}
      <GSAPFadeIn direction="up" delay={0.2}>
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{ backgroundColor: "#1a1610" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Scroll>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px" style={{ backgroundColor: "#c8921e" }}></div>
                  <span
                    className="text-xs font-medium uppercase"
                    style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
                  >
                    Cobertura
                  </span>
                </div>

                <h2
                  className="text-5xl lg:text-6xl font-normal leading-none mb-4"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  <span style={{ color: "#e8e0d0" }}>Onde </span>
                  <span
                    style={{
                      background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Atendemos
                  </span>
                </h2>

                <p
                  className="text-base mb-8 leading-relaxed"
                  style={{ color: "rgba(200,185,145,0.75)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
                >
                  atendemos toda a região de Cascavel e arredores. Consulte se sua localidad estáIncluded em nossa área de entrega.
                </p>

                <div className="space-y-3 mb-8">
                  {["Cascavel", "Medianeira", "Foz do Iguaçu", "Toledo", "Guaíra", "Marechal Cândido Rondon"].map((city, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#c8921e" }}></div>
                      <span style={{ color: "rgba(26,22,16,0.7)", fontFamily: "Inter, sans-serif" }}>{city}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5545998044188?text=Olá! Gostaria de verificar se minha região tem delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{
                    backgroundColor: "#c8921e",
                    color: "#2a1f14",
                    fontFamily: "Oswald, sans-serif",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  Consultar Endereço
                </a>
              </Scroll>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(200,146,30,0.15) 0%, transparent 70%)",
                  }}
                ></div>
                <div className="relative p-8 rounded-2xl" style={{ backgroundColor: "#1a1610" }}>
                  <h3
                    className="text-2xl font-normal mb-6"
                    style={{ fontFamily: "Bebas Neue, sans-serif", color: "#e8e0d0" }}
                  >
                    Pontos de Venda Fixos
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: "Loja Centro", address: "Av. Brasil, 1234", hours: "Seg-Sáb: 8h-20h" },
                      { name: "Loja Oeste", address: "Rua das Palmeiras, 567", hours: "Seg-Sáb: 8h-18h" },
                      { name: "Ponto de Retirada", address: "Av. Paraná, 890", hours: "Seg-Sex: 9h-17h" },
                    ].map((location, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg cursor-pointer transition-all duration-300"
                        style={{ backgroundColor: "rgba(200,146,30,0.1)" }}
                        whileHover={{ backgroundColor: "rgba(200,146,30,0.2)" }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium" style={{ color: "#e8e0d0", fontFamily: "Oswald, sans-serif" }}>
                            {location.name}
                          </span>
                          <span className="text-xs" style={{ color: "#c8921e", fontFamily: "Inter, sans-serif" }}>
                            Ver mapa
                          </span>
                        </div>
                        <div className="text-sm" style={{ color: "rgba(200,185,145,0.6)", fontFamily: "Inter, sans-serif" }}>
                          {location.address}
                        </div>
                        <div className="text-xs mt-1" style={{ color: "rgba(200,185,145,0.4)", fontFamily: "Inter, sans-serif" }}>
                          {location.hours}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <a
                    href="/localizacao"
                    className="block text-center mt-6 text-sm font-medium transition-all duration-300"
                    style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", borderBottom: "1px solid #c8921e", paddingBottom: "2px" }}
                  >
                    Ver Todos os Pontos
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </GSAPFadeIn>

      {/* Careers Section - Light alternating */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #c8921e 0%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
            <span
              className="text-xs font-medium uppercase"
              style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
            >
              Trabalhe Conosco
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#c8921e" }}></div>
          </div>

          <h2
            className="text-5xl lg:text-6xl font-normal leading-none mb-4"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            <span style={{ color: "#1a1610" }}>Vagas </span>
            <span
              style={{
                background: "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Abertas
            </span>
          </h2>

          <p
            className="text-base mb-12 leading-relaxed"
            style={{ color: "rgba(26,22,16,0.7)", fontFamily: "Inter, sans-serif", fontWeight: 300 }}
          >
            Junte-se à maior equipe de distribuição de chopp premium do Paraná. Oferecemos ambiente de trabalho dinámico, benefícios competitivos e oportunidades de crescimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Entregador", type: "Tempo Integral", location: "Cascavel" },
              { title: "Atendente", type: "Tempo Integral", location: "Cascavel" },
              { title: "Auxiliar de Produção", type: "Estágio", location: "Cascavel" },
              { title: "Vendedor", type: "PJ", location: "Região" },
            ].map((job, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl cursor-pointer text-left"
                style={{ backgroundColor: "rgba(200,146,30,0.1)", border: "1px solid rgba(200,150,30,0.2)" }}
                whileHover={{ y: -4, borderColor: "rgba(200,146,30,0.5)" }}
              >
                <h3 className="text-xl font-normal mb-2" style={{ fontFamily: "Bebas Neue, sans-serif", color: "#1a1610" }}>
                  {job.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-xs" style={{ color: "#c8921e", fontFamily: "Oswald, sans-serif" }}>
                    {job.type}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(26,22,16,0.6)", fontFamily: "Inter, sans-serif" }}>
                    {job.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="https://wa.me/5545998044188?text=Olá! Gostaria de me candidatar a uma vaga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: "#c8921e",
              color: "#2a1f14",
              fontFamily: "Oswald, sans-serif",
              clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar Currículo
          </a>
        </div>
      </section>

      {/* Sobre Section - Dark alternating */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#1a1610" }}
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

      {/* CTA Section - Light alternating */}
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
              href="https://wa.me/5545998044188?text=Olá! Gostaria de fazer um pedido de chopp premium"
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
              <a
                href="https://wa.me/5545998044188?text=Olá! Gostaria de saber a localização das lojas"
                target="_blank"
                rel="noopener noreferrer"
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
                <span>Falar no WhatsApp</span>
              </a>
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
