# NLW Agents - Frontend Web 🌐

<div align="center">

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

**Interface moderna e responsiva com React 19 e TailwindCSS**

</div>

---

## 📖 Sobre

Frontend da aplicação **NLW Agents** desenvolvido com **React 19**, **TypeScript** e **TailwindCSS**. Oferece uma interface moderna para:

- 🏠 **Gerenciamento de salas** com formulários intuitivos
- 🎤 **Gravação de áudio** diretamente no navegador
- 💬 **Sistema de perguntas** em tempo real
- 📱 **Design responsivo** e acessível
- ⚡ **Performance otimizada** com Vite

---

## 🛠️ Stack Tecnológica

### **Core Framework**
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário (última versão)
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool e dev server ultra-rápido

### **Styling & UI**
- **[TailwindCSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://radix-ui.com/)** - Componentes acessíveis e customizáveis
- **[Lucide React](https://lucide.dev/)** - Ícones SVG otimizados
- **[Class Variance Authority](https://cva.style/)** - Variantes de componentes
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge de classes CSS

### **State Management & HTTP**
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado servidor
- **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos
- **[Zod](https://zod.dev/)** - Validação de schemas

### **Routing & Navigation**
- **[React Router DOM 7](https://reactrouter.com/)** - Roteamento SPA moderno

### **Development Tools**
- **[Biome](https://biomejs.dev/)** - Linter e formatter moderno
- **[Ultracite](https://github.com/ultracite/ultracite)** - Utilitários de desenvolvimento

---

## ⚡ Quick Start

### **Pré-requisitos**
- Node.js 18+
- Backend rodando na porta 5000

### **1. Instalar dependências**
```bash
npm install
```

### **2. Iniciar desenvolvimento**
```bash
npm run dev
```

### **3. Acessar aplicação**
```
http://localhost:5173
```

---

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes base da UI
│   │   ├── button.tsx   # Botão customizável
│   │   ├── card.tsx     # Cards com variações
│   │   ├── form.tsx     # Componentes de formulário
│   │   ├── input.tsx    # Inputs estilizados
│   │   └── ...          # Outros componentes UI
│   ├── http/            # Hooks de requisições HTTP
│   │   ├── use-create-room.ts
│   │   ├── use-rooms.ts
│   │   └── types/       # Tipos TypeScript das APIs
│   ├── create-room-form.tsx
│   ├── question-form.tsx
│   ├── question-item.tsx
│   ├── question-list.tsx
│   └── room-list.tsx
├── pages/               # Páginas da aplicação
│   ├── create-room.tsx  # Página de criação de salas
│   ├── room.tsx         # Página da sala
│   └── record-room-audio.tsx # Gravação de áudio
├── lib/                 # Utilitários e configurações
│   ├── utils.ts         # Funções auxiliares
│   └── dayjs.ts         # Configuração de datas
├── app.tsx              # Componente raiz
└── main.tsx             # Entry point
```

---

## 🎨 Design System

### **Componentes Base**
- **Button** - Botões com variantes (primary, secondary, ghost)
- **Card** - Cards com header, content e footer
- **Form** - Formulários com validação integrada
- **Input/Textarea** - Campos de entrada estilizados
- **Badge** - Labels e tags coloridas

### **Padrões de Design**
- **Mobile-first** - Design responsivo
- **Acessibilidade** - Componentes Radix UI
- **Dark mode ready** - Preparado para tema escuro
- **Consistent spacing** - Sistema de espaçamento TailwindCSS

---

## 📱 Funcionalidades

### **Gerenciamento de Salas**
- ✅ Listagem de salas existentes
- ✅ Criação de novas salas com validação
- ✅ Navegação entre salas
- ✅ Interface responsiva

### **Sistema de Perguntas**
- ✅ Visualização de perguntas por sala
- ✅ Formulário de criação de perguntas
- ✅ Validação de entrada com Zod
- ✅ Atualização em tempo real

### **Gravação de Áudio**
- ✅ Gravação diretamente no navegador
- ✅ Upload automático para transcrição
- ✅ Suporte a WebRTC MediaRecorder
- ✅ Interface intuitiva de controle

---

## 🔧 Configuração

### **Vite Configuration**
```typescript
// Alias para imports absolutos
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}

// Plugins configurados
plugins: [
  react(),           // Suporte React 19
  tailwindcss()      // TailwindCSS 4
]
```

### **TailwindCSS**
- Configuração moderna com TailwindCSS 4
- Componentes customizados com CVA
- Sistema de cores consistente
- Animações e transições suaves

### **TypeScript**
- Configuração estrita para máxima segurança
- Tipos compartilhados com backend
- Auto-complete completo em toda aplicação

---

## 📡 Integração com API

### **HTTP Hooks Customizados**
```typescript
// Exemplo de hook para criação de sala
const { mutateAsync: createRoom } = useCreateRoom();

// Gerenciamento automático de cache
const { data: rooms, isLoading } = useRooms();
```

### **Validação de Formulários**
```typescript
// Schema Zod para validação
const createRoomSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
});

// Integração com React Hook Form
const form = useForm({
  resolver: zodResolver(createRoomSchema),
});
```

---

## 🚀 Build e Deploy

### **Scripts Disponíveis**
```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento

# Produção
npm run build        # Build otimizado
npm run preview      # Preview do build local
```

### **Build Otimizado**
- **Tree-shaking** automático
- **Code splitting** por rota
- **Assets otimizados** (imagens, fontes)
- **Bundle analysis** com Vite

### **Deploy**
```bash
# Build para produção
npm run build

# Deploy estático (Vercel, Netlify, etc.)
# Pasta 'dist' contém os arquivos otimizados
```

---

## 🎯 Performance

### **Otimizações Implementadas**
- ⚡ **React 19** - Concurrent rendering
- 📦 **Vite HMR** - Hot Module Replacement
- 🔄 **TanStack Query** - Cache inteligente
- 🎨 **TailwindCSS** - CSS otimizado
- 📱 **Lazy loading** - Carregamento sob demanda

### **Web Vitals**
- **LCP** < 2.5s (Largest Contentful Paint)
- **FID** < 100ms (First Input Delay)
- **CLS** < 0.1 (Cumulative Layout Shift)

---

## 🛠️ Desenvolvimento

### **Comandos Úteis**
```bash
# Instalar nova dependência
npm install <package>

# Verificar tipos TypeScript
npx tsc --noEmit

# Linting e formatação
npx biome check src/
npx biome format src/ --write

# Análise do bundle
npm run build
npx vite-bundle-analyzer
```

### **Estrutura de Componentes**
```tsx
// Padrão de componente funcional
interface ComponentProps {
  // Props tipadas
}

export function Component({ }: ComponentProps) {
  // Hooks no topo
  // Lógica do componente
  // Return JSX
}
```

---

## 🤝 Contribuição

Desenvolvido durante o **NLW (Next Level Week)** da **[Rocketseat](https://rocketseat.com.br/)**

### **Guidelines de Desenvolvimento**
1. **Components** - Sempre tipados com TypeScript
2. **Hooks** - Extrair lógica complexa para hooks customizados
3. **Styling** - Usar TailwindCSS + componentes Radix UI
4. **Forms** - React Hook Form + Zod para validação
5. **State** - TanStack Query para estado servidor

---

## 📚 Recursos Adicionais

### **Documentação**
- [React 19 Docs](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Radix UI](https://radix-ui.com/primitives)

### **Ferramentas de Debug**
- React DevTools
- TanStack Query DevTools
- Vite DevTools

---

<div align="center">

**[⬆ Voltar ao topo](#nlw-agents---frontend-web-)**

Feito com 💜 durante o NLW da Rocketseat

</div>
