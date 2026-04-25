import { useState, useEffect, useRef, ReactNode } from 'react'

interface Product {
  name: string
  type: string
  image?: string
  highlight?: boolean
}

interface CarouselProps {
  products: Product[]
}

const renderBackgroundText = (productName: string): ReactNode => {
  const parts = productName.split(' ')
  const shortName = parts.length > 1 ? parts[1] : parts[0]
  const isShort = shortName.length <= 3
  const fontSize = 'text-5xl lg:text-6xl'
  
  if (isShort) {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none" style={{ opacity: 0.04 }}>
        <div className="flex flex-col gap-0">
          {[...Array(22)].map((_, row) => (
            <div key={row} className="flex gap-1">
              {[...Array(14)].map((_, col) => (
                <div key={col} className={`text-center font-bold ${fontSize}`} style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04', lineHeight: 0.93 }}>
                  {shortName}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <div className="absolute inset-0 flex flex-col justify-center overflow-hidden pointer-events-none" style={{ opacity: 0.04 }}>
      {[...Array(22)].map((_, row) => (
        <div key={row} className={`w-full text-center font-bold ${fontSize}`} style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0d0a04', lineHeight: 0.93 }}>
          {shortName}
        </div>
      ))}
    </div>
  )
}

export function Carousel({ products }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)
  const [screenSize, setScreenSize] = useState<{ isMobile: boolean; isTablet: boolean }>({ isMobile: true, isTablet: false })
  const touchStartX = useRef(0)
  
  useEffect(() => {
    const checkSize = () => setScreenSize({ isMobile: window.innerWidth < 768, isTablet: window.innerWidth >= 768 && window.innerWidth < 1024 })
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])
  
  const itemsPerPage = screenSize.isMobile ? 1 : screenSize.isTablet ? 3 : 5
  const totalPages = Math.ceil(products.length / itemsPerPage)
  
  const goNext = () => setCurrentIndex(prev => (prev + 1) % totalPages)
  const goPrev = () => setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages)

  useEffect(() => {
    if (!screenSize.isMobile && totalPages > 1) {
      const interval = setInterval(goNext, 5000)
      return () => clearInterval(interval)
    }
  }, [totalPages, screenSize.isMobile])

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
  }

  const getVisibleProducts = () => {
    const start = currentIndex * itemsPerPage
    let visible = products.slice(start, start + itemsPerPage)
    
    while (visible.length < itemsPerPage) {
      visible = [...visible, ...products.slice(0, itemsPerPage - visible.length)]
    }
    
    return visible.slice(0, itemsPerPage)
  }

  const getAdjacentProducts = () => {
    const prevIdx = (currentIndex - 1 + totalPages) % totalPages
    const nextIdx = (currentIndex + 1) % totalPages
    const prevStart = prevIdx * itemsPerPage
    const nextStart = nextIdx * itemsPerPage
    return {
      prev: products.slice(prevStart, prevStart + itemsPerPage).slice(-1)[0],
      next: products.slice(nextStart, nextStart + itemsPerPage)[0]
    }
  }

  const adjacent = getAdjacentProducts()

  return (
    <div className="relative w-full max-w-full overflow-hidden flex flex-col">
      <div className="flex items-center justify-center max-w-full">
        {!screenSize.isMobile && (
          <button onClick={goPrev} onMouseEnter={() => setHoveredBtn('prev')} onMouseLeave={() => setHoveredBtn(null)} className={`flex-shrink-0 w-10 lg:w-12 h-full flex items-center justify-center transition-all duration-200 ${hoveredBtn === 'prev' ? 'scale-110' : ''}`} style={{ backgroundColor: hoveredBtn === 'prev' ? '#0d0a04' : '#b8860b', boxShadow: hoveredBtn === 'prev' ? '0 4px 16px rgba(0,0,0,0.5)' : '0 2px 8px rgba(184,134,11,0.4)' }} aria-label="Página anterior">
            <svg className="w-5 lg:w-6 h-5 lg:h-6" fill="none" stroke={hoveredBtn === 'prev' ? '#c8921e' : '#faf8f4'} strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className={`flex gap-1.5 lg:gap-2 ${screenSize.isMobile ? 'overflow-x-auto snap-x snap-mandatory justify-center' : 'justify-center'}`} style={{ maxWidth: '100%' }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {!screenSize.isMobile && adjacent.prev && (
            <div className="w-16 lg:w-20 flex-shrink-0 opacity-50 cursor-pointer h-full" style={{ minHeight: '260px' }} onClick={goPrev}>
              <div className="h-full flex items-center justify-center">
                <img src="/produto_teste.png" alt="Previous" className="w-14 lg:w-16 object-contain rotate-12 grayscale" style={{ transform: 'perspective(200px) rotateY(-15deg)' }} />
              </div>
            </div>
          )}
          
          {getVisibleProducts().map((product, i) => (
            <div key={`${currentIndex}-${i}`} className="relative flex-shrink-0" style={{ width: screenSize.isMobile ? '65vw' : screenSize.isTablet ? 'calc((100% - 60px) / 3)' : 'calc((100% - 60px) / 5)', maxWidth: screenSize.isMobile ? '240px' : 'none' }} onMouseEnter={() => !screenSize.isMobile && setHoveredIndex(i)} onMouseLeave={() => !screenSize.isMobile && setHoveredIndex(null)}>
              <div className={screenSize.isMobile ? 'h-auto' : 'h-full'} style={{ minHeight: screenSize.isMobile ? 'auto' : '260px' }}>
                <div className="relative flex flex-col h-full overflow-hidden" style={{ backgroundColor: !screenSize.isMobile && hoveredIndex === i ? '#c8921e' : 'rgba(255,255,255,0.08)', border: '1px solid rgba(200,150,30,0.2)' }}>
                  {!screenSize.isMobile && hoveredIndex !== i && renderBackgroundText(product.name)}
                  
                  {!screenSize.isMobile && hoveredIndex === i ? <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: '#ffffff' }} /> : <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: '#c8921e' }} />}
                  
                  <div className="flex-1 flex items-center justify-center p-3 lg:p-4 relative" style={{ zIndex: 5 }}>
                    <img src="/produto_teste.png" alt={product.name} className="w-full max-w-[80px] lg:max-w-[100px] object-contain" style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))', transform: !screenSize.isMobile && hoveredIndex === i ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.2s ease' }} />
                  </div>

                  <div className={screenSize.isMobile ? 'relative' : 'absolute bottom-0 left-0 right-0'} style={{ backgroundColor: 'rgba(13,10,4,0.92)', display: screenSize.isMobile || hoveredIndex === i ? 'block' : 'none', zIndex: 20 }}>
                    <div className="p-3 lg:p-4">
                      <h4 className="text-sm lg:text-base font-medium text-center mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0' }}>{product.name}</h4>
                      <span className="text-xs uppercase block text-center mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '2px', color: 'rgba(232,224,208,0.75)' }}>{product.type}</span>
                      <button className="w-full py-2 text-xs lg:text-sm font-medium" style={{ backgroundColor: '#c8921e', color: '#0d0a04', fontFamily: 'Oswald, sans-serif' }}>Saber Mais</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {!screenSize.isMobile && adjacent.next && (
            <div className="w-16 lg:w-20 flex-shrink-0 opacity-50 cursor-pointer h-full" style={{ minHeight: '260px' }} onClick={goNext}>
              <div className="h-full flex items-center justify-center">
                <img src="/produto_teste.png" alt="Next" className="w-14 lg:w-16 object-contain -rotate-12 grayscale" style={{ transform: 'perspective(200px) rotateY(15deg)' }} />
              </div>
            </div>
          )}
        </div>

        {!screenSize.isMobile && (
          <button onClick={goNext} onMouseEnter={() => setHoveredBtn('next')} onMouseLeave={() => setHoveredBtn(null)} className={`flex-shrink-0 w-10 lg:w-12 h-full flex items-center justify-center transition-all duration-200 ${hoveredBtn === 'next' ? 'scale-110' : ''}`} style={{ backgroundColor: hoveredBtn === 'next' ? '#0d0a04' : '#b8860b', boxShadow: hoveredBtn === 'next' ? '0 4px 16px rgba(0,0,0,0.5)' : '0 2px 8px rgba(184,134,11,0.4)' }} aria-label="Próxima página">
            <svg className="w-5 lg:w-6 h-5 lg:h-6" fill="none" stroke={hoveredBtn === 'next' ? '#c8921e' : '#faf8f4'} strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className="w-2.5 h-2.5 rounded-full transition-all duration-200" style={{ backgroundColor: currentIndex === i ? '#c8921e' : 'rgba(200,146,30,0.25)', border: currentIndex === i ? 'none' : '1px solid rgba(200,146,30,0.4)' }} aria-label={`Ir para página ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}