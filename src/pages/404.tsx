import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0d0a04' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.15) 0%, transparent 60%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(200,146,30,0.1) 0%, transparent 60%)' }}></div>
      </div>

      <div className="relative text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[4px]" style={{ color: '#c8921e', fontFamily: 'Oswald, sans-serif' }}>
            Ops! Página não encontrada
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[120px] sm:text-[180px] lg:text-[240px] font-normal my-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c8921e', lineHeight: 1 }}
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-2"
          style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}
        >
          O chopp aqui <span style={{ color: '#c8921e' }}>esgotou!</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base mb-8 max-w-md mx-auto"
          style={{ color: 'rgba(200,185,145,0.6)', fontFamily: 'Inter, sans-serif' }}
        >
          Essa página foi servida, mas o barril já chegou ao fim. Que tal pedir uma nova rodada?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://wa.me/5545998044188"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold"
            style={{
              backgroundColor: '#c8921e',
              color: '#0d0a04',
              fontFamily: 'Oswald, sans-serif',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir Novo Chopp
          </motion.a>

          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium"
            style={{
              color: '#c8921e',
              fontFamily: 'Oswald, sans-serif',
              borderBottom: '2px solid #c8921e'
            }}
          >
            Voltar ao Início
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(200,185,145,0.4)', fontFamily: 'Oswald, sans-serif' }}>
            Ou escolha uma página
          </span>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              { path: '/produtos', label: 'Produtos' },
              { path: '/eventos', label: 'Eventos' },
              { path: '/localizacao', label: 'Sedes' },
              { path: '/contato', label: 'Contato' }
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-sm transition-colors"
                style={{
                  color: 'rgba(200,185,145,0.6)',
                  fontFamily: 'Oswald, sans-serif',
                  backgroundColor: 'rgba(200,146,30,0.1)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="text-xs" style={{ color: 'rgba(200,185,145,0.3)', fontFamily: 'Oswald, sans-serif' }}>
          Imperador do Chopp • Tradição desde 2014
        </span>
      </div>
    </div>
  )
}

export default NotFound