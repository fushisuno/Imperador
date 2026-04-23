import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { filiais } from '../data/filiais'

const timeline = [
  {
    year: '2014',
    title: 'O Início',
    description: 'Tudo começou em Cascavel, com o sonho de levar o melhor chopp argentino para o Paraná.',
  },
  {
    year: '2018',
    title: 'Expansão',
    description: 'Chegamos a Toledo, conquistando novos clientes e fortalecendo nossa marca.',
  },
  {
    year: '2021',
    title: 'Crescimento',
    description: 'Inauguramos nossa filial em Maringá, consolidando presença no estado.',
  },
  {
    year: '2024',
    title: 'Liderança',
    description: 'Referência no Sul do Brasil em distribuição de chopp premium.',
  },
]

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Qualidade',
    description: 'Selecionamos os melhores insumos e mantemos padrões rigorosos em cada etapa.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Pontualidade',
    description: 'Seu evento merece chegar no horário certo. Isso é sagrado para nós.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Atendimento Humanizado',
    description: 'Mais do que vender chopp, construímos relações genuínas com nossos clientes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Paixão',
    description: 'Cada chopp que servimos carrega o amor pelo que fazemos.',
  },
]

function Sobre() {
  return (
    <div className="pt-20">
      {/* Hero Section - Mais emocional */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cta rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cta-light rounded-full blur-[80px]"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-cta/20 rounded-full text-cta text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-cta rounded-full animate-pulse"></span>
              Nossa História
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Mais do que chopp, <br />
              <span className="text-gradient-gold">uma história de paixão</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-gray-300"
            >
              Descubra como a Imperador do Chopp transformou o mercado de chopp premium no Paraná
            </motion.p>
          </div>
        </div>
      </section>

      {/* Storytelling Section - História com imagem diferenciada */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagem com moldura premium */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-cta rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-cta rounded-br-3xl"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=750&fit=crop"
                  alt="Nossa história"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium">"Cada chopp conta uma história"</p>
                </div>
              </div>
            </div>
            
            {/* Texto da história */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                  Tudo começou com uma <span className="text-cta">paixão</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Em 2014, em Cascavel, nasceu a <strong className="text-primary">Imperador do Chopp</strong>. 
                    Não era apenas uma distribuidora - era o concretizar de um sonho: levar o autêntico 
                    chopp argentino para os paranaenses.
                  </p>
                  
                  <p>
                    Começamos pequeno, com muita dedicação e cero na qualidade. Cada cliente satisfeito 
                    era uma nova semente plantada. E essas sementes cresceram.
                  </p>
                  
                  <p>
                    Hoje, com filiais em Toledo e Maringá, continuamos com o mesmo propósito: 
                    <strong className="text-cta"> transformar cada evento em uma experiência inesquecível</strong>. 
                    Mais de 10 anos depois, a paixão continua a mesma.
                  </p>
                </div>

                {/* Citação */}
                <div className="mt-10 p-6 bg-gradient-to-r from-cta/10 to-cta-light/10 rounded-2xl border-l-4 border-cta">
                  <p className="text-lg text-primary italic">
                    "Não vendemos apenas chopp. Celebramos momentos, criamos memórias e 
                    conectamos pessoas. Isso é a Imperador do Chopp."
                  </p>
                  <p className="mt-3 text-sm text-gray-500">— Fundador</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Nossa jornada */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Nossa <span className="text-cta">Jornada</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">O caminho que percorremos até aqui</p>
          </motion.div>

          <div className="relative">
            {/* Linha do tempo horizontal no mobile, vertical no desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cta via-cta-light to-cta" />
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 md:pl-0"
                >
                  {/* Ponto na linha - mobile e desktop */}
                  <div className="absolute left-[26px] md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full gradient-gold border-4 border-white shadow-lg z-10" />
                  
                  <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-2 md:ml-0">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cta to-cta-light text-white rounded-full text-sm font-semibold mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores - Fundo branco com detalhe dourado */}
      <section className="py-24 bg-white border-t border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              O que nos <span className="text-cta">move</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Valores que guiam cada decisão e cada chopp que servimos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-b from-amber-50 to-white p-8 rounded-3xl border border-amber-200 hover:border-cta hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filiais - Compacto */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Presentes em 3 cidades do Paraná
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {filiais.map((filial, index) => (
              <motion.div
                key={filial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">{filial.cidade}</h3>
                <p className="text-sm text-gray-500">{filial.estado}</p>
                <Link
                  to="/localizacao"
                  className="mt-3 inline-flex items-center text-sm text-cta font-medium hover:text-cta-dark"
                >
                  Ver no Mapa →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Fundo cinza claro para variar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cta/5 rounded-3xl" />
            <div className="relative p-10 rounded-3xl border border-cta/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Venha nos conhecer
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Entre em contato e faça uma visita. Será um prazer receber você!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contato" 
                  className="px-8 py-4 bg-cta text-white rounded-2xl font-semibold text-lg shadow-lg shadow-cta/30 hover:bg-cta-dark transition-all"
                >
                  Falar Conosco
                </Link>
                <Link 
                  to="/localizacao" 
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-secondary transition-all"
                >
                  Ver Localização
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Sobre