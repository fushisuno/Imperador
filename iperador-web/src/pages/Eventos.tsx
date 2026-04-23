import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { eventos } from '../data/eventos'

const categorias = ['Todos', 'Casamento', 'Corporativo', 'Aniversário', 'Bodas', 'Formatura']

const categoryIcons: Record<string, string> = {
  'Casamento': '💒',
  'Corporativo': '🏢',
  'Aniversário': '🎂',
  'Bodas': '💍',
  'Formatura': '🎓',
}

const quotes = [
  "Cada evento é uma história única.",
  "Memórias que duram para sempre.",
  "Celebrando momentos especiais desde 2014.",
  "Mais do que chopp, momentos inesquecíveis.",
]

function Eventos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')

  const eventosFiltrados = categoriaSelecionada === 'Todos'
    ? eventos
    : eventos.filter((e) => e.categoria === categoriaSelecionada)

  return (
    <div className="pt-20">
      {/* Hero Section - Emocional */}
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
              Nossas Histórias
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Cada evento é uma <br />
              <span className="text-gradient-gold">história de amor</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-gray-300"
            >
              Há mais de 10 anos, transformamos momentos em memórias que duram para sempre
            </motion.p>
          </div>
        </div>
      </section>

      {/* Seção de Citações */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-8">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 bg-white rounded-full shadow-md border border-amber-100"
                >
                  <p className="text-amber-700 font-medium">"{quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white sticky top-20 z-30 border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  categoriaSelecionada === categoria
                    ? 'bg-cta text-white shadow-lg'
                    : 'bg-gray-100 text-primary hover:bg-amber-100 hover:text-cta'
                }`}
              >
                {categoryIcons[categoria] && (
                  <span>{categoryIcons[categoria]}</span>
                )}
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Cada card como uma memória */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Memórias que <span className="text-cta">contamos</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Cada evento que celebramos faz parte da nossa história e da história de dezenas de famílias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {eventosFiltrados.map((evento, index) => (
              <motion.div
                key={evento.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Card Estilo Memória */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Imagem com overlay emocional */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={evento.imagem}
                      alt={evento.titulo}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Overlay escuro suave */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge categoria estilizado */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                        {categoryIcons[evento.categoria] && (
                          <span>{categoryIcons[evento.categoria]}</span>
                        )}
                        {evento.categoria}
                      </span>
                    </div>

                    {/* Data estilizada */}
                    <div className="absolute bottom-4 right-4">
                      <div className="px-4 py-2 bg-cta/90 backdrop-blur-sm rounded-lg">
                        <p className="text-white text-sm font-medium">{evento.data}</p>
                      </div>
                    </div>

                    {/* Efeito shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-0.5 bg-cta"></div>
                      <span className="text-cta text-sm font-medium uppercase tracking-wider">Evento</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary group-hover:text-cta transition-colors duration-300 mb-2">
                      {evento.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {evento.descricao}
                    </p>

                    {/* Linha decorativa */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span>Memória marcante</span>
                      </div>
                      <Link
                        to="/venda"
                        className="text-cta text-sm font-semibold hover:text-cta-dark transition-colors"
                      >
                        Criar minha memória →
                      </Link>
                    </div>
                  </div>

                  {/* Borda dourada no hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cta/30 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Sombra decorativa */}
                <div className="h-4 bg-gradient-to-b from-black/5 to-transparent -mt-2 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {eventosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-amber-50 flex items-center justify-center">
                <svg className="w-12 h-12 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">Nenhum evento encontrado nesta categoria.</p>
              <p className="text-gray-400 mt-2">Que tal criar uma nova memória conosco?</p>
            </div>
          )}
        </div>
      </section>

      {/* Seção "Nossas Histórias" - Depoimentos */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              O que nossos clientes <span className="text-cta">dizem</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Familia Silva",
                text: "Foi o casamento mais bonito da nossa vida. O chopp da Imperador fez tudo especial.",
                event: "Casamento"
              },
              {
                name: "Empresa XYZ",
                text: "Nosso evento corporativo foi um sucesso. Todos elogiaram a qualidade do chopp.",
                event: "Corporativo"
              },
              {
                name: "Maria Santos",
                text: "Comemorei minhas bodas de ouro com a família. Momento inesquecível!",
                event: "Bodas"
              }
            ].map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-amber-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{depoimento.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-primary">{depoimento.name}</p>
                  <span className="text-sm text-cta font-medium">{depoimento.event}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Fundo branco para variar */}
      <section className="py-20 bg-white">
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
                Pronto para criar sua história?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Entre em contato e let's create um momento inesquecível para você e sua família.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/venda" 
                  className="px-8 py-4 bg-cta text-white rounded-2xl font-semibold text-lg shadow-lg shadow-cta/30 hover:bg-cta-dark transition-all"
                >
                  Criar Minha Memória
                </Link>
                <Link 
                  to="/contato" 
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-secondary transition-all"
                >
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Eventos