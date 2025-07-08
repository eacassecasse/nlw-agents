# NLW Agents - Frontend Web 🌐

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

**Interface moderna e responsiva construída com React 19 e TailwindCSS**

[🚀 Quick Start](#quick-start) • [🎨 UI/UX](#design-system) • [📱 Features](#funcionalidades) • [🔧 Build](#build-e-deploy)

</div>

---

## 📖 Sobre

O frontend do **NLW Agents** é uma Single Page Application (SPA) moderna construída com as mais recentes tecnologias React. Oferece uma experiência de usuário fluida e responsiva para gerenciamento de salas com design system consistente.

### ✨ Características Principais

- ⚛️ **React 19** - Versão mais recente com concurrent features
- ⚡ **Vite** - Build tool ultra-rápido com HMR
- 🎨 **TailwindCSS v4** - Design system utility-first
- 🔄 **TanStack Query** - Gerenciamento de estado servidor
- 🧭 **React Router v7** - Roteamento moderno
- ♿ **Acessibilidade** - Componentes Radix UI
- 📱 **Responsivo** - Design mobile-first
- 🎯 **Type-Safe** - TypeScript em toda aplicação

---

## 🛠️ Stack Tecnológica

### **Core Framework**
- **[React 19](https://react.dev/)** - Biblioteca para UI com concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool e dev server de próxima geração

### **Styling & UI**
- **[TailwindCSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://radix-ui.com/)** - Componentes primitivos acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones SVG modernos
- **[Class Variance Authority](https://cva.style/docs)** - Variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utilitários CSS

### **State Management & Data Fetching**
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[React Router DOM](https://reactrouter.com/)** - Roteamento declarativo

### **Development Tools**
- **[Biome](https://biomejs.dev/)** - Linter e formatter moderno
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Plugin React para Vite
- **[tw-animate-css](https://github.com/tw-elements/tw-animate-css)** - Animações TailwindCSS

---

## ⚡ Quick Start

### **Pré-requisitos**
- Node.js 18+
- npm ou yarn
- Backend rodando em `http://localhost:5000`

### **1. Instalação**

```bash
# Navegue para a pasta web
cd nlw-agents/web

# Instale as dependências
npm install
```

### **2. Configuração**

O frontend se conecta automaticamente com o backend. Certifique-se de que a API esteja rodando na porta 5000.

**URLs de desenvolvimento:**
```typescript
// Configuradas automaticamente para desenvolvimento
const API_BASE_URL = "http://localhost:5000"
const FRONTEND_URL = "http://localhost:5173"
```

### **3. Execute a aplicação**

```bash
# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

A aplicação estará disponível em: `http://localhost:5173`

---

## 📱 Funcionalidades

### **🏠 Página de Salas (`/`)**
- Lista todas as salas disponíveis
- Loading states com React Query
- Navegação dinâmica para salas específicas
- Design responsivo e acessível

### **🚪 Página Individual (`/room/:id`)**
- Visualização de sala específica
- Roteamento dinâmico com React Router
- State management otimizado

### **🎨 Componentes UI**
- Sistema de design consistente
- Componentes reutilizáveis
- Acessibilidade com Radix UI
- Variantes com CVA

---

## 🎨 Design System

### **Componentes Base**

```
src/components/ui/
├── button.tsx           # Componente Button com variantes
└── [outros componentes] # Expandir conforme necessário
```

### **Padrão de Componentes**

```tsx
// Exemplo: Button component
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### **TailwindCSS v4**

```css
/* src/index.css */
@import "tailwindcss";

/* Variáveis CSS customizadas */
:root {
  --primary: 222.2 84% 4.9%;
  --primary-foreground: 210 40% 98%;
  /* ... outras variáveis */
}
```

---

## 🔄 State Management

### **TanStack Query**

```tsx
// Exemplo: Hook para buscar salas
import { useQuery } from "@tanstack/react-query";

export function useRooms() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/api/v1/rooms`);
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}
```

### **React Router v7**

```tsx
// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoom />} index />
        <Route element={<Room />} path="/room/:id" />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia dev server com HMR

# Build
npm run build           # Build otimizado para produção
npm run preview         # Preview do build local

# Qualidade de código
npx biome check         # Verifica linting e formatting
npx biome check --fix   # Corrige automaticamente
```

---

## 🏗️ Arquitetura

### **Estrutura de Pastas**

```
src/
├── components/          # Componentes reutilizáveis
│   └── ui/             # Componentes base do design system
├── pages/              # Páginas da aplicação
│   ├── create-room.tsx # Página principal (lista de salas)
│   └── room.tsx        # Página individual da sala
├── lib/                # Utilitários e configurações
│   └── utils.ts        # Funções auxiliares (cn, etc.)
├── app.tsx             # Componente raiz da aplicação
├── main.tsx            # Ponto de entrada React
├── index.css           # Estilos globais e TailwindCSS
└── vite-env.d.ts       # Tipos do Vite
```

### **Padrões de Desenvolvimento**

- **Component-Based Architecture** - Componentes reutilizáveis
- **Custom Hooks** - Lógica compartilhada
- **Compound Components** - Componentes compostos
- **Render Props** - Composição avançada
- **Error Boundaries** - Tratamento de erros (planejado)

---

## 🔧 Build e Deploy

### **Vite Configuration**

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
    host: true,
  },
})
```

### **Build para Produção**

```bash
# Build otimizado
npm run build

# Análise do bundle
npx vite-bundle-analyzer dist/
```

### **Deploy**

**Variáveis de ambiente para produção:**
```env
VITE_API_BASE_URL=https://sua-api-de-producao.com
```

**Plataformas sugeridas:**
- **Vercel** - Deploy automático com GitHub
- **Netlify** - Static site hosting
- **GitHub Pages** - Hosting gratuito

---

## 🎯 Performance

### **Otimizações Implementadas**

- ⚡ **Vite HMR** - Hot Module Replacement
- 🔄 **React Query Caching** - Cache inteligente de dados
- 📦 **Code Splitting** - Lazy loading de rotas
- 🗜️ **Tree Shaking** - Eliminação de código morto
- 🎨 **TailwindCSS Purging** - CSS otimizado

### **Métricas de Performance**

```bash
# Análise do bundle
npm run build
npm run preview

# Lighthouse audit recomendado
npx lighthouse http://localhost:4173
```

---

## 🧪 Testing (Planejado)

```bash
# Ferramentas sugeridas para testes
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

---

## 🤝 Contribuição

Desenvolvido seguindo as melhores práticas do **NLW da Rocketseat**:

- ✅ Componentes reutilizáveis
- ✅ TypeScript strict mode
- ✅ Acessibilidade (a11y)
- ✅ Performance otimizada
- ✅ Mobile-first design

---

## 📄 Licença

Projeto desenvolvido durante o NLW da **[Rocketseat](https://rocketseat.com.br/)**

---

<div align="center">

**[⬆ Voltar ao topo](#nlw-agents---frontend-web-)**

Feito com 💜 e ⚛️ React

</div>
