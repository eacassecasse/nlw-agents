# NLW Agents 🤖

<div align="center">

![NLW Agents](https://img.shields.io/badge/NLW-Agents-8257E5?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

**Plataforma inteligente de Q&A com IA para transcrição e análise de áudio desenvolvida durante o evento NLW da Rocketseat**

[🤖 IA Features](#funcionalidades-de-ia) • [🚀 Tecnologias](#tecnologias) • [⚡ Quick Start](#quick-start) • [📁 Estrutura](#estrutura-do-projeto)

</div>

---

## 📖 Sobre o Projeto

O **NLW Agents** é uma aplicação full-stack inovadora desenvolvida durante o evento **Next Level Week (NLW)** da **Rocketseat**. Combina gerenciamento de salas inteligente com **Inteligência Artificial** para transcrição de áudio e análise semântica, oferecendo uma experiência moderna e interativa.

### ✨ Principais Funcionalidades

- 🏠 **Criação e gerenciamento de salas** com interface moderna
- 🎤 **Gravação de áudio** diretamente no navegador
- 🤖 **Transcrição automática** com Google Gemini AI
- 🧠 **Embeddings vetoriais** para busca semântica
- � **Sistema de perguntas** em tempo real
- � **API REST robusta** com validação TypeScript
- 🔍 **Busca inteligente** baseada em similaridade vetorial

---

## 🚀 Tecnologias

### **Backend**
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript moderno
- **[Fastify](https://fastify.dev/)** - Framework web high-performance
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM moderno e type-safe
- **[PostgreSQL](https://www.postgresql.org/)** + **[pgvector](https://github.com/pgvector/pgvector)** - Banco vetorial
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first
- **[Docker](https://www.docker.com/)** - Containerização

### **Inteligência Artificial**
- **[@google/genai](https://github.com/google/genai)** - Google Gemini AI SDK
- **[Gemini 2.5 Flash](https://ai.google.dev/)** - Modelo para transcrição e embeddings
- **[Vector Search](https://github.com/pgvector/pgvector)** - Busca semântica com embeddings

### **Frontend**
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário (latest)
- **[Vite](https://vitejs.dev/)** - Build tool e dev server ultra-rápido
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[TailwindCSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Router DOM 7](https://reactrouter.com/)** - Roteamento SPA moderno
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado servidor
- **[Radix UI](https://radix-ui.com/)** - Componentes acessíveis
- **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos

---

## 🤖 Funcionalidades de IA

### **Transcrição de Áudio Inteligente**
- 🎤 **Gravação no navegador** com WebRTC MediaRecorder
- 🗣️ **Transcrição automática** para português brasileiro
- 📝 **Formatação inteligente** com pontuação e parágrafos
- 🔄 **Upload e processamento** em tempo real

### **Análise Semântica Avançada**
- 🧠 **Geração de embeddings** vetoriais (768 dimensões)
- 🔍 **Busca por similaridade** baseada em contexto
- 📊 **Armazenamento otimizado** com pgvector
- ⚡ **Consultas rápidas** em banco vetorial

### **Integração Google Gemini**
- 🤖 **Gemini 2.5 Flash** para máxima performance
- 🌐 **API oficial Google** com SDK moderno
- 🔐 **Autenticação segura** via API key
- 📈 **Processamento escalável** de áudio e texto
### **Ferramentas de Desenvolvimento**
- **[Biome](https://biomejs.dev/)** - Linter e formatter moderno
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Migrations e introspection
- **[Ultracite](https://github.com/ultracite/ultracite)** - Utilitários de desenvolvimento

---

## ⚡ Quick Start

### **Pré-requisitos**

- [Node.js](https://nodejs.org/) (versão 18+)
- [Docker](https://www.docker.com/) e Docker Compose
- [Google Gemini API Key](https://ai.google.dev/) (obrigatório para IA)
- [Git](https://git-scm.com/)

### **1. Clone o repositório**

```bash
git clone https://github.com/eacassecasse/nlw-agents.git
cd nlw-agents
```

### **2. Configure o ambiente**

#### **Backend:**
```bash
cd server
cp .env.example .env
# Configure as variáveis de ambiente:
# DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
# GOOGLE_GENAI_API_KEY=sua_chave_gemini_aqui
# PORT=5000
```

#### **Frontend:**
```bash
cd web
npm install
```

### **3. Execute o banco de dados com pgvector**

```bash
cd server
docker-compose up -d
```

### **4. Configure o banco de dados**

```bash
# Instale dependências
npm install

# Execute as migrations (inclui tabelas e extensão pgvector)
npx drizzle-kit migrate

# Popular com dados iniciais (opcional)
npm run db:seed
```

### **5. Inicie os serviços**

#### **Backend (Terminal 1):**
```bash
cd server
npm run start:dev
```

#### **Frontend (Terminal 2):**
```bash
cd web
npm run dev
```

### **6. Acesse a aplicação**

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/v1/health
- **Test IA:** Grave áudio em qualquer sala para testar transcrição

---

## 📁 Estrutura do Projeto

```
nlw-agents/
├── server/                 # Backend API com IA
│   ├── src/
│   │   ├── db/            # Configuração do banco
│   │   │   ├── schema/    # Esquemas Drizzle (rooms, questions, audio_chunks)
│   │   │   └── migrations/# Migrations do banco (pgvector incluído)
│   │   ├── http/          # Rotas HTTP
│   │   │   └── routes/    # API endpoints (/rooms, /questions, /audio)
│   │   ├── services/      # Integração IA
│   │   │   └── gemini.ts  # Google Gemini AI (transcrição + embeddings)
│   │   ├── services/      # Integração IA
│   │   │   └── gemini.ts  # Google Gemini AI (transcrição + embeddings)
│   │   ├── env.ts         # Configurações de ambiente
│   │   └── server.ts      # Servidor principal
│   ├── docker-compose.yml # PostgreSQL + pgvector
│   └── drizzle.config.ts  # Configuração Drizzle ORM
│
├── web/                   # Frontend React com IA
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   │   ├── ui/        # Design system (Radix UI + Tailwind)
│   │   │   └── http/      # Hooks para API (TanStack Query)
│   │   ├── pages/         # Páginas da aplicação
│   │   │   ├── create-room.tsx        # Criação de salas
│   │   │   ├── room.tsx               # Visualização de sala
│   │   │   └── record-room-audio.tsx  # Gravação de áudio
│   │   ├── lib/           # Utilitários
│   │   └── app.tsx        # Componente principal
│   └── vite.config.ts     # Configuração Vite
│
└── README.md              # Documentação
```

---

## 🏗️ Padrões e Arquitetura

### **Backend com IA**
- **Clean Architecture** - Separação clara de responsabilidades
- **Type-Safe API** - Validação completa com Zod e TypeScript
- **Microservices Pattern** - Serviços especializados (Gemini AI)
- **Vector Database** - Armazenamento e busca de embeddings
- **Error Handling** - Tratamento robusto de erros

### **Frontend Moderno**
- **Component-Based Architecture** - Componentes reutilizáveis
- **Custom Hooks** - Lógica compartilhada para IA e API
- **Server State Management** - TanStack Query para cache inteligente
- **Design System** - Componentes acessíveis com Radix UI
- **Real-time Audio** - WebRTC para gravação no navegador

### **Database Vetorial**
- **Schema-First** - Definição tipada do banco
- **Vector Storage** - pgvector para embeddings de 768 dimensões
- **Migrations** - Versionamento do banco com extensões
- **Semantic Search** - Busca por similaridade semântica

---

## 🛠️ Scripts Disponíveis

### **Backend**
```bash
npm run start:dev    # Servidor com hot reload e IA
npm run start:build  # Servidor otimizado para produção
npm run db:seed      # Popula banco com dados iniciais

# Banco de dados
npx drizzle-kit generate    # Gerar migrations
npx drizzle-kit migrate     # Executar migrations (pgvector)
npx drizzle-kit studio      # Interface visual do banco
```

### **Frontend**
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build otimizado para produção
npm run preview      # Preview do build local
```

---

## � API Endpoints

### **Core**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/v1/health` | Health check da API |
| `GET` | `/api/v1/rooms` | Lista todas as salas |
| `POST` | `/api/v1/rooms` | Cria nova sala |

### **Q&A System**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/v1/rooms/:id/questions` | Perguntas da sala |
| `POST` | `/api/v1/rooms/:roomId/questions` | Cria pergunta |

### **AI Features**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/v1/rooms/:roomId/audio` | Upload e transcrição de áudio |

---

## 🔧 Configuração Avançada

### **Variáveis de Ambiente**

#### **Backend (.env)**
```env
# Banco de dados com pgvector
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents

# Google Gemini AI (obrigatório)
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here

# Servidor
PORT=5000

# CORS para desenvolvimento
FRONTEND_URL=http://localhost:5173
```

### **Docker com pgvector**
O projeto inclui PostgreSQL 17 com extensão pgvector para armazenamento de embeddings:

```yaml
# docker-compose.yml
services:
  database:
    image: pgvector/pgvector:pg17  # PostgreSQL + pgvector
    environment:
      POSTGRES_DB: agents
    volumes:
      - ./docker/setup.sql:/docker-entrypoint-initdb.d/setup.sql
```

---

## 🚀 Como Testar a IA

### **1. Configurar API do Gemini**
1. Acesse [Google AI Studio](https://ai.google.dev/)
2. Crie uma API key do Gemini
3. Configure no `.env` do backend

### **2. Testar Transcrição**
1. Acesse uma sala no frontend
2. Clique em "Gravar Áudio"
3. Fale algo em português
4. Veja a transcrição automática

### **3. Verificar Embeddings**
```sql
-- Consulta direta no banco para ver embeddings
SELECT id, transcription, embeddings 
FROM audio_chunks 
LIMIT 5;
```

---

## 🤝 Contribuição

Desenvolvido durante o **NLW (Next Level Week)** da **[Rocketseat](https://rocketseat.com.br/)**

---

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**[⬆ Voltar ao topo](#nlw-agents-)**

Feito com 💜 durante o NLW da Rocketseat

</div>