# Theming Strategy: Dark/Light Sections

## Overview

This document defines the theming architecture for the Imperador website, enabling consistent dark/light section theming with semantic tokens.

## Current State

The site uses mixed dark/light sections:

| Section | Type | Background |
|---------|------|------------|
| Hero | Dark | #1a1208 (brown-darkest) |
| Quem Somos | Dark | #1C1917 (primary) |
| Delivery | Dark | gradient #1a1610 → #0d0a04 |
| Event Types | Light | #faf8f4 (warm white) |

**Problems:**
1. Hardcoded colors throughout components
2. No semantic theme tokens for section types
3. ThemeContext provides static theme only
4. Inconsistent hover/focus states across sections

## Strategy: Semantic Section Themes

### 1. Theme Definition Structure

```typescript
// src/styles/theme.ts

export type ThemeMode = 'dark' | 'light';

export interface SectionTheme {
  mode: ThemeMode;
  colors: {
    background: string;
    backgroundSubtle: string;
    backgroundAccent: string;
    text: string;
    textMuted: string;
    textAccent: string;
    border: string;
    borderSubtle: string;
  };
  accents: {
    primary: string;
    primaryHover: string;
    primaryMuted: string;
  };
}

export const themes = {
  dark: {
    mode: 'dark' as const,
    colors: {
      background: '#0D0A04',        // brown-darkest
      backgroundSubtle: '#1A1208',   // brown-dark
      backgroundAccent: '#2A1F14',  // brown
      text: '#F5F0E6',               // cream-light
      textMuted: '#B8985A',          // muted gold
      textAccent: '#E8C040',         // gold light
      border: 'rgba(200, 146, 30, 0.2)',
      borderSubtle: 'rgba(200, 146, 30, 0.1)',
    },
    accents: {
      primary: '#CA8A04',           // gold
      primaryHover: '#E8C040',     // gold-light
      primaryMuted: 'rgba(200, 146, 30, 0.15)',
    },
  },
  light: {
    mode: 'light' as const,
    colors: {
      background: '#FAF8F4',       // warm white
      backgroundSubtle: '#FFFFFF', // white
      backgroundAccent: '#F0E8D8', // cream
      text: '#2A1F14',             // brown-dark
      textMuted: '#6B5D4D',         // brown-muted
      textAccent: '#CA8A04',       // gold
      border: 'rgba(200, 150, 30, 0.15)',
      borderSubtle: 'rgba(200, 150, 30, 0.08)',
    },
    accents: {
      primary: '#CA8A04',
      primaryHover: '#A16B0F',
      primaryMuted: 'rgba(200, 146, 30, 0.1)',
    },
  },
} as const;
```

### 2. Section Classification

Map pages to their theme mode:

```typescript
// src/config/section-themes.ts

export const sectionThemeMap: Record<string, 'dark' | 'light'> = {
  // Home page sections
  'hero': 'dark',
  'quem-somos': 'dark',
  'delivery': 'dark',
  'event-types': 'light',
  'cta': 'dark',
  
  // Other pages
  'produtos': 'light',
  'sobre': 'dark',
  'eventos': 'light',
  'contato': 'light',
  'localizacao': 'dark',
};
```

### 3. Component-Level Theming

Components should accept theme prop:

```typescript
interface ThemedSectionProps {
  theme?: 'dark' | 'light';
  children: React.ReactNode;
}

function ThemedSection({ theme = 'dark', children }: ThemedSectionProps) {
  const tokens = themes[theme];
  return <section style={{ background: tokens.colors.background }}>{children}</section>;
}
```

### 4. Utility Classes (CSS)

```css
/* section theme utilities */
.section-dark {
  --section-bg: #0D0A04;
  --section-bg-subtle: #1A1208;
  --section-text: #F5F0E6;
  --section-text-muted: #B8985A;
  --section-accent: #CA8A04;
}

.section-light {
  --section-bg: #FAF8F4;
  --section-bg-subtle: #FFFFFF;
  --section-text: #2A1F14;
  --section-text-muted: #6B5D4D;
  --section-accent: #CA8A04;
}
```

## Migration Plan

### Phase 1: Create Theme Tokens
- [ ] Add src/styles/theme.ts with semantic theme definitions
- [ ] Add theme utilities to tokens.css

### Phase 2: Update Components
- [ ] Add theme prop to section components
- [ ] Replace hardcoded colors with theme tokens

### Phase 3: Update Pages
- [ ] Map each section to appropriate theme
- [ ] Apply consistent styling

## Dependencies

- No new dependencies required
- Uses existing color palette from design-tokens.ts

## Risks

1. **Migration complexity**: Many inline styles exist in Home.tsx
2. **Consistency**: Requires discipline to use theme tokens
3. **Performance**: Minimal - static tokens only

## Tradeoffs

| Approach | Pros | Cons |
|----------|------|------|
| Semantic themes | Consistent, maintainable | Migration effort |
| Keep inline styles | Quick fixes | Inconsistent, hard to maintain |
| CSS variables | Runtime theming | Browser support concern (legacy) |

**Decision**: Use semantic theme objects (TypeScript) for type safety and IDE support.