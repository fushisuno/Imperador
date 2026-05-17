import { motion } from "framer-motion";
import { GSAPScrollReveal } from "../components/AnimationsGSAP";
import { config } from "../config";

interface Bar {
  id: number;
  nome: string;
  endereco: string;
  horarios: string;
  cidade: string;
  telefone?: string;
}

const baresVazios: Bar[] = [
  {
    id: 1,
    nome: "Seu estabelecimento aqui",
    endereco: "Endereço do estabelecimento",
    horarios: "Seg a Sáb: 18h às 23h",
    cidade: "Cascavel",
  },
  {
    id: 2,
    nome: "Seu estabelecimento aqui",
    endereco: "Endereço do estabelecimento",
    horarios: "Seg a Sáb: 18h às 23h",
    cidade: "Foz do Iguaçu",
  },
  {
    id: 3,
    nome: "Seu estabelecimento aqui",
    endereco: "Endereço do estabelecimento",
    horarios: "Seg a Sáb: 18h às 23h",
    cidade: "Guarapuava",
  },
];

export default function Bares() {
  return (
    <div className="pt-20">
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{ backgroundColor: "#0d0a04" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px]"
            style={{
              background:
                "radial-gradient(circle, rgba(200,146,30,0.12) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(200,146,30,0.25), transparent)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <GSAPScrollReveal>
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
                />
                <span
                  className="text-xs font-medium uppercase"
                  style={{
                    color: "#c8921e",
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "3px",
                  }}
                >
                  Parcerias
                </span>
                <div
                  className="h-px w-12"
                  style={{ backgroundColor: "#c8921e" }}
                />
              </div>
              <h1 className="text-5xl lg:text-6xl font-normal">
                <span style={{ color: "#e8e0d0" }}>Nossos </span>
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #f0a820 0%, #e8c040 50%, #c8800e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Bares
                </span>
              </h1>
              <p
                className="mt-4 text-lg max-w-2xl mx-auto"
                style={{ color: "rgba(200,185,145,0.65)" }}
              >
                Conheça os estabelecimentos que contam com os produtos Imperador do
                Chopp.
              </p>
            </motion.div>
          </GSAPScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {baresVazios.map((bar, i) => (
              <motion.div
                key={bar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 cursor-pointer"
                style={{
                  backgroundColor: "rgba(42,31,20,0.5)",
                  border: "1px solid rgba(200,146,30,0.2)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(200,146,30,0.15)" }}
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10.5v-7.5m-2.5 7.5h10"
                    />
                  </svg>
                </div>

                <h3
                  className="text-xl font-normal mb-2"
                  style={{
                    fontFamily: "Bebas Neue, sans-serif",
                    color: "#e8e0d0",
                  }}
                >
                  {bar.nome}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="rgba(200,185,145,0.5)"
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
                    <span style={{ color: "rgba(200,185,145,0.7)" }}>
                      {bar.endereco}, {bar.cidade}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="rgba(200,185,145,0.5)"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span style={{ color: "rgba(200,185,145,0.7)" }}>
                      {bar.horarios}
                    </span>
                  </div>
                </div>

                {bar.telefone && (
                  <a
                    href={`tel:${bar.telefone}`}
                    className="inline-flex items-center gap-2 mt-4 text-sm transition-colors hover:text-[#c8921e]"
                    style={{ color: "rgba(200,185,145,0.5)" }}
                  >
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {bar.telefone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(200,185,145,0.5)" }}
            >
              Quer ser um parceiro Imperador do Chopp?
            </p>
            <a
              href={`https://wa.me/${config.whatsapp}?text=Olá! Quero ser um parceiro Imperador do Chopp`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium"
              style={{
                backgroundColor: "#c8921e",
                color: "#1a1208",
                fontFamily: "Oswald, sans-serif",
                borderRadius: "6px",
              }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero ser um parceiro
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}