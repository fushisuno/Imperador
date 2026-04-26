# Padrões de Componentes UI

Este documento define os padrões para criação de novos componentes no projeto Imperador do Chopp.

## Estrutura de Arquivos

```
src/components/
├── ui/              # Componentes UI reutilizáveis
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── Header.tsx        # Componentes de layout
├── Footer.tsx
├── Carousel.tsx
├── MapComponent.tsx
└── Animations.tsx
```

---

## Padrão 1: Componente_FUNCIONAL

### Estrutura Base

```tsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Types definiddos fora do componente (reutilizáveis)
interface ComponentProps {
  /** Texto principal do componente */
  title: string
  /** Descrição opcional */
  description?: string
  /** Callback quando clicado */
  onClick?: () => void
  /** Variante visual */
  variant?: 'primary' | 'secondary' | 'outline'
  /** Classe adicional */
  className?: string
}

// Variantes de animação pré-definidas
const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function Component({ 
  title, 
  description, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ComponentProps) {

  // Estado sempre no topo
  const [isActive, setIsActive] = useState(false)

  // Effects depois do estado
  useEffect(() => {
    // cleanup no return
    return () => {}
  }, [])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      onClick={onClick}
      className={className}
      style={{ 
        // Cores do tema: usa variáveis ou cores fixas
        // Primária: #c8921e (dourado)
        // Fundo escuro: #0d0a04
        // Fundo claro: #faf8f4
        // Texto: #0d0a04 (escuro), #e8e0d0 (claro)
      }}
    >
      {/* children */}
    </motion.div>
  )
}

export default Component
```

---

## Padrão 2: hook Customizado

```tsx
import { useState, useEffect } from 'react'

export function useNomeDoHook(param: string) {
  const [state, setState] = useState(false)

  useEffect(() => {
    const check = () => setState(true)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return state
}
```

**Hooks existentes em `/src/hooks/`:**
- `useMedia.tsx` - useIsMobile, useIsTablet, useMediaQuery, usePrefersReducedMotion
- `useReducedMotion.ts` - wrapper para framer-motion

---

## Padrão 3: Página de Rota

```tsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useMedia'

function NomePagina() {
  const isMobile = useIsMobile()
  const [data, setData] = useState<Type[]>([])

  useEffect(() => {
    // fetch ou lógica
  }, [])

  return (
    <div className="pt-20">
      {/* sections com backgroundvariants */}
    </div>
  )
}

export default NomePagina
```

---

## Cores do Tema

| Nome | Hex | Uso |
|------|-----|-----|
| Primary Gold | `#c8921e` | CTA, destaques |
| Dark | `#0d0a04` | Fundos escuros |
| Light | `#faf8f4` | Fundos claros |
| Text Dark | `#0d0a04` | Texto principal |
| Text Light | `#e8e0d0` | Texto em fundo escuro |
| Text Muted | `rgba(200,185,145,0.6)` | Subtítulos |

---

## Tipografia

|Fonte|Uso|
|------|-----|
|Bebas Neue|Títulos (h1-h6)|
|Oswald|Labels, botões (uppercase)|
|Inter|Corpo de texto|

---

## Padrão 4: MapComponent

```tsx
interface Sede {
  id: string
  nome: string
  latitude: number  // usar 'latitude', não 'lat'
  longitude: number // usar 'longitude', não 'lng'
  // ...outros campos
}
```

---

## Checklist de Novo Componente

- [ ] Tipos definidos fora do componente
- [ ] useState no topo do componente
- [ ] useEffect com cleanup
- [ ] Animações com Framer Motion
- [ ] Responsivo (useIsMobile hook)
- [ ] Cores do tema
- [ ] Fonts corretas (Bebas Neue/Oswald/Inter)
- [ ] Sem dados hardcoded (usar JSON em `/src/data/`)
- [ ] Export default