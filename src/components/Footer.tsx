import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = {
  Institucional: [
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/eventos', label: 'Eventos' },
    { path: '/localizacao', label: 'Nossas Filiais' },
  ],
  Contato: [
    { path: '/contato', label: 'Fale Conosco' },
    { path: '/pedido', label: 'Fazer Pedido' },
  ],
}

function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#0d0a04' }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.1) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.08) 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block cursor-pointer mb-6">
              <img 
                src="/imperador_logo.png" 
                alt="Imperador do Chopp" 
                className="h-14 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(30%) hue-rotate(5deg)' }}
              />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed" style={{ color: 'rgba(200,185,145,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Distribuidora de chopp premium com tradição e qualidade. 
              Tradição e excelência em cada dose nas cidades de Cascavel, Toledo e Maringá.
            </p>
            <motion.a
              href="https://wa.me/5545998044188"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200"
              style={{ 
                backgroundColor: '#c8921e',
                color: '#0d0a04',
                fontFamily: 'Oswald, sans-serif',
                letterSpacing: '1px',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                boxShadow: '0 4px 20px rgba(200,146,30,0.3)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </motion.a>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-6" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.Institucional.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm transition-all duration-300 inline-block"
                    style={{ color: 'rgba(200,185,145,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    <span className="relative group">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#c8921e' }}></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-6" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>
              Contato
            </h4>
            <ul className="space-y-3">
              {footerLinks.Contato.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm transition-all duration-300 inline-block"
                    style={{ color: 'rgba(200,185,145,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    <span className="relative group">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#c8921e' }}></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs uppercase mb-2" style={{ color: 'rgba(200,146,30,0.8)', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>
                Telefone
              </p>
              <a 
                href="tel:+5545998044188" 
                className="text-sm transition-colors duration-300 hover:text-[#c8921e]"
                style={{ color: 'rgba(200,185,145,0.85)', fontFamily: 'Inter, sans-serif' }}
              >
                (45) 99804-4188
              </a>
            </div>
          </div>

          {/* Location Column */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-6" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif', letterSpacing: '2px' }}>
              Localização
            </h4>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(200,185,145,0.75)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Cascavel, Toledo e Maringá<br />
              Paraná - Brasil
            </p>
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-3 h-3 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ backgroundColor: '#c8921e', boxShadow: '0 0 12px rgba(200,146,30,0.6)' }}
              />
              <span className="text-xs uppercase" style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>
                Atendendo desde 2014
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(200,146,30,0.15)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'rgba(200,185,145,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              © 2024 Imperador do Chopp. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(200,185,145,0.4)', fontFamily: 'Inter, sans-serif' }}>
              <span>Feito com</span>
              <svg className="w-4 h-4" fill="#c8921e" viewBox="0 0 24 24">
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