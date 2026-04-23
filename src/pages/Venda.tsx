import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { filiais } from '../data/filiais'

interface FormData {
  nome: string
  telefone: string
  tipoEvento: string
  qtdPessoas: string
  qtdChopp: string
  filial: string
  data: string
  horario: string
  local: string
  complemento: string
  temEquipo: string
  observacoes: string
}

const tiposEvento = [
  'Casamento',
  'Festa de Aniversário',
  'Festa Corporativa',
  'Eventos em Geral',
  'Bar/Restaurante',
  'Outro'
]

const qtdChoppOpcoes = [
  '50 litros',
  '100 litros',
  '200 litros',
  '300 litros',
  '500 litros',
  'Acima de 500 litros'
]

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0
  })
}

function Venda() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    tipoEvento: '',
    qtdPessoas: '',
    qtdChopp: '',
    filial: '',
    data: '',
    horario: '',
    local: '',
    complemento: '',
    temEquipo: '',
    observacoes: '',
  })

  const handleFilialSelect = (filialId: string) => {
    setDirection(1)
    setFormData({ ...formData, filial: filialId })
    setStep(2)
  }

  const handleNextStep = () => {
    setDirection(1)
    setStep(step + 1)
  }

  const handleSubmit = () => {
    const filial = filiais.find(f => f.id === formData.filial)
    if (!filial) return

    const dataFormatada = formData.data ? new Date(formData.data).toLocaleDateString('pt-BR') : 'A confirmar'

    const mensagem = `*🍺 ORÇAMENTO - IMPERADOR DO CHOPP*\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `*DADOS DO CLIENTE*\n` +
      `👤 Nome: ${formData.nome}\n` +
      `📱 Telefone: ${formData.telefone}\n\n` +
      `*DADOS DO EVENTO*\n` +
      `🎉 Tipo: ${formData.tipoEvento}\n` +
      `👥 Qtde pessoas: ${formData.qtdPessoas}\n` +
      `🍺 Chopp: ${formData.qtdChopp}\n` +
      `📅 Data: ${dataFormatada}\n` +
      `🕐 Horário: ${formData.horario || 'A confirmar'}\n\n` +
      `*LOCAL*\n` +
      `📍 ${formData.local}\n` +
      `${formData.complemento ? `📝 Complemento: ${formData.complemento}\n` : ''}` +
      `🏢 Filial: ${filial.cidade} - ${filial.estado}\n\n` +
      `*EQUIPAMENTO*\n` +
      `${formData.temEquipo === 'sim' ? '✅ Preciso de equipo/máquina' : '⚠️ Informar necessidade'}\n\n` +
      `*OBSERVAÇÕES*\n` +
      `${formData.observacoes || 'Nenhuma observação'}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `*Solicito orçamento para este evento.*`

    const texto = encodeURIComponent(mensagem)
    window.open(`https://wa.me/55${filial.whatsapp}?text=${texto}`, '_blank')
  }

  const goBack = () => {
    setDirection(-1)
    setStep(step - 1)
  }

  const filialSelecionada = filiais.find(f => f.id === formData.filial)

  const isStep2Valid = formData.data && formData.local && formData.tipoEvento
  const isStep3Valid = formData.nome && formData.telefone

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-16">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, #CA8A04 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{ background: 'radial-gradient(circle, #EAB308 0%, transparent 70%)' }}
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Solicitar <span className="text-gradient-gold">Orçamento</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-300"
          >
            Preencha os dados do seu evento e receba uma proposta personalizada
          </motion.p>
        </div>
      </section>

      {/* Progress */}
      <section className="py-8 bg-white sticky top-20 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-sm sm:text-lg transition-colors duration-300 ${
                      step >= s 
                        ? 'bg-cta text-white' 
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    animate={step === s ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {step > s ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : s}
                  </motion.div>
                  <span className={`hidden sm:block font-medium text-sm ${step >= s ? 'text-primary' : 'text-gray-400'}`}>
                    {s === 1 ? 'Filial' : s === 2 ? 'Evento' : 'Contato'}
                  </span>
                </div>
                {s < 3 && (
                  <motion.div 
                    className={`w-8 sm:w-16 h-1.5 rounded-full mx-2 sm:mx-4 transition-colors duration-500 ${
                      step >= s + 1 ? 'bg-cta' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-[600px]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait" custom={direction}>
            
            {/* Step 1 - Selecionar Filial */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-cta/10 rounded-full px-4 py-2 mb-4">
                    <span className="w-2 h-2 bg-cta rounded-full"></span>
                    <span className="text-cta font-medium text-sm">Passo 1 de 3</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Selecione a filial mais próxima
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Escolha a cidade onde seu evento será realizado
                  </p>
                </div>
                <div className="space-y-4">
                  {filiais.map((filial) => (
                    <motion.button
                      key={filial.id}
                      onClick={() => handleFilialSelect(filial.id)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border-2 border-transparent hover:border-cta transition-all duration-300 text-left"
                    >
                      <div className="flex items-center gap-5">
                        <motion.div 
                          className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 5 }}
                        >
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </motion.div>
                        <div className="flex-1">
                          <p className="font-bold text-primary text-lg">{filial.cidade}</p>
                          <p className="text-gray-500">{filial.estado}</p>
                        </div>
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                        >
                          <svg className="w-8 h-8 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 - Dados do Evento */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-cta/10 rounded-full px-4 py-2 mb-4">
                    <span className="w-2 h-2 bg-cta rounded-full"></span>
                    <span className="text-cta font-medium text-sm">Passo 2 de 3</span>
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold text-white text-2xl font-bold mb-4"
                  >
                    {filialSelecionada?.cidade.charAt(0)}
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Dados do Evento
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Filial: <span className="font-semibold text-cta">{filialSelecionada?.cidade}</span>
                  </p>
                </div>

                <motion.div 
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="space-y-6">
                    {/* Tipo de Evento */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-3">
                        🎉 Tipo de Evento *
                      </label>
                      <select
                        value={formData.tipoEvento}
                        onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Selecione o tipo</option>
                        {tiposEvento.map(tipo => (
                          <option key={tipo} value={tipo}>{tipo}</option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Data e Horário */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-3">
                          📅 Data do Evento *
                        </label>
                        <input
                          type="date"
                          value={formData.data}
                          onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-3">
                          🕐 Horário de Início
                        </label>
                        <input
                          type="time"
                          value={formData.horario}
                          onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors"
                        />
                      </div>
                    </motion.div>

                    {/* Quantidade */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-3">
                          👥 Quantidade de Pessoas
                        </label>
                        <input
                          type="number"
                          value={formData.qtdPessoas}
                          onChange={(e) => setFormData({ ...formData, qtdPessoas: e.target.value })}
                          placeholder="Ex: 150"
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-primary mb-3">
                          🍺 Quantidade de Chopp
                        </label>
                        <select
                          value={formData.qtdChopp}
                          onChange={(e) => setFormData({ ...formData, qtdChopp: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors bg-white"
                        >
                          <option value="">Selecione</option>
                          {qtdChoppOpcoes.map(qtd => (
                            <option key={qtd} value={qtd}>{qtd}</option>
                          ))}
                        </select>
                      </div>
                    </motion.div>

                    {/* Local */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-3">
                        📍 Local/Endereço do Evento *
                      </label>
                      <input
                        type="text"
                        value={formData.local}
                        onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                        placeholder="Ex: Salão de Festas Villa Rose - Av. Brasil, 1500"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors"
                      />
                    </motion.div>

                    {/* Complemento */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-3">
                        📝 Complemento / Observações
                      </label>
                      <textarea
                        value={formData.complemento}
                        onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                        placeholder="Ex: Área coberta, energia 220v disponível, garagem para carga/descarga..."
                        rows={2}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors resize-none"
                      />
                    </motion.div>

                    {/* Equipo */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-3">
                        🛠️ Precisa de Equipo/Máquina?
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, temEquipo: 'sim' })}
                          className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                            formData.temEquipo === 'sim'
                              ? 'bg-cta text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          ✅ Sim, preciso
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, temEquipo: 'nao' })}
                          className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                            formData.temEquipo === 'nao'
                              ? 'bg-gray-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Não, já tenho
                        </button>
                      </div>
                    </motion.div>

                    {/* Botões */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-4 pt-4"
                    >
                      <motion.button
                        onClick={goBack}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-4 bg-gray-100 text-primary rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                      >
                        ← Voltar
                      </motion.button>
                      <motion.button
                        onClick={handleNextStep}
                        disabled={!isStep2Valid}
                        whileHover={!isStep2Valid ? {} : { scale: 1.02 }}
                        whileTap={!isStep2Valid ? {} : { scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-cta text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Próximo →
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Step 3 - Dados de Contato */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-2 mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-600 font-medium text-sm">Último passo</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Seus Dados de Contato
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Para enviarmos a proposta personalizada
                  </p>
                </div>

                <motion.div 
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="space-y-6">
                    {/* Nome */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-3">
                        👤 Nome Completo *
                      </label>
                      <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: João Carlos da Silva"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors text-lg"
                      />
                    </motion.div>

                    {/* Telefone */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-3">
                        📱 WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(45) 99999-9999"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors text-lg"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Entraremos em contato por WhatsApp para enviar a proposta
                      </p>
                    </motion.div>

                    {/* Observações adicionais */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-semibold text-primary mb-3">
                        💬 Observações Adicionais
                      </label>
                      <textarea
                        value={formData.observacoes}
                        onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                        placeholder="Alguma informação adicional que queira nos passar..."
                        rows={3}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-cta focus:outline-none transition-colors resize-none"
                      />
                    </motion.div>

                    {/* Resumo */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-cta/5 to-amber-50 rounded-2xl p-5 border border-cta/20"
                    >
                      <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Resumo do Pedido
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <p className="text-gray-600">Filial:</p>
                        <p className="font-semibold text-primary">{filialSelecionada?.cidade}</p>
                        <p className="text-gray-600">Tipo:</p>
                        <p className="font-semibold text-primary">{formData.tipoEvento}</p>
                        <p className="text-gray-600">Data:</p>
                        <p className="font-semibold text-primary">{formData.data ? new Date(formData.data).toLocaleDateString('pt-BR') : '-'}</p>
                        <p className="text-gray-600">Chopp:</p>
                        <p className="font-semibold text-primary">{formData.qtdChopp || '-'}</p>
                      </div>
                    </motion.div>

                    {/* Botões */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex gap-4 pt-4"
                    >
                      <motion.button
                        onClick={goBack}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-4 bg-gray-100 text-primary rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                      >
                        ← Voltar
                      </motion.button>
                      <motion.button
                        onClick={handleSubmit}
                        disabled={!isStep3Valid}
                        whileHover={!isStep3Valid ? {} : { scale: 1.02 }}
                        whileTap={!isStep3Valid ? {} : { scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.892 3.181.001 6.167 1.24 8.412 3.488 2.245 2.248 3.865 5.246 3.865 8.528 0 6.446-5.278 11.772-11.717 11.772-1.667 0-3.234-.391-4.652-1.126l-6.17 1.654z"/>
                        </svg>
                        Enviar Pedido
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-center text-sm text-gray-500 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Você será redirecionado para o WhatsApp com todos os dados preenchidos
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Info Card */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-br from-primary to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cta/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Como funciona?</h3>
                  <p className="text-gray-300 text-sm">Processo rápido e prático</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-200">
                <p className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cta flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  Selecione a filial mais próxima do seu evento
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cta flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  Preencha os dados do seu evento
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cta flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  Informe seus dados de contato
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  Receba sua proposta personalizada no WhatsApp!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Venda