import { Link } from 'react-router-dom'

const footerLinks = {
  Institucional: [
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/eventos', label: 'Eventos' },
    { path: '/localizacao', label: 'Nossas Filiais' },
  ],
  Contato: [
    { path: '/contato', label: 'Fale Conosco' },
    { path: '/venda', label: 'Solicitar Orçamento' },
  ],
}

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 5.5A.5.5 0 0 1 5.5 5H6v6.5a2 2 0 0 1-2 2h-1v3a3 3 0 0 1-3 3H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V6h.5A.5.5 0 0 1 5 5.5zM8 8.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3zm6.5.5a.5.5 0 0 0-.5-.5V4a1 1 0 0 0-1-1h-1a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3z"/>
                </svg>
              </div>
              <span className="font-bold text-xl">
                Imperador<span className="text-cta">do Chopp</span>
              </span>
            </Link>
            <p className="mt-6 text-gray-300 max-w-lg text-lg leading-relaxed">
              Distribuidora de chopp premium com tradição e qualidade. 
              Tradição e excelência em cada dose, atendimento especializado 
              nas cidades de Cascavel, Toledo e Maringá.
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/contato" className="btn-primary bg-cta">
                Falar no WhatsApp
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.Institucional.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-cta transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-3">
              {footerLinks.Contato.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-cta transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 Imperador do Chopp. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Feito com</span>
              <svg className="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>no Paraná</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer