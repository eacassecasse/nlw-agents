# NLW Agents 🤖

<div align="center">

![NLW Agents](https://img.shields.io/badge/NLW-Agents-8257E5?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

**Uma aplicação moderna de gerenciamento de salas desenvolvida durante o evento NLW da Rocketseat**

[📱 Demo](#) • [🚀 Tecnologias](#tecnologias) • [⚡ Quick Start](#quick-start) • [📁 Estrutura](#estrutura-do-projeto)

</div>

---

## 📖 Sobre o Projeto

O **NLW Agents** é uma aplicação full-stack desenvolvida durante o evento **Next Level Week (NLW)** da **Rocketseat**. O projeto implementa um sistema de gerenciamento de salas com arquitetura moderna, utilizando as melhores práticas de desenvolvimento e tecnologias de ponta.

### ✨ Principais Funcionalidades

- 🏠 **Criação e gerenciamento de salas**
- 🔄 **Navegação dinâmica entre salas**
- ⚡ **Interface responsiva e moderna**
- 🗄️ **Persistência de dados com PostgreSQL**
- 🔐 **API REST robusta e tipada**

---

## 🚀 Tecnologias

### **Backend**
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Fastify](https://fastify.dev/)** - Framework web performático
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM moderno e type-safe
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first
- **[Docker](https://www.docker.com/)** - Containerização

### **Frontend**
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Router DOM](https://reactrouter.com/)** - Roteamento SPA
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado servidor
- **[Radix UI](https://radix-ui.com/)** - Componentes acessíveis

### **Ferramentas de Desenvolvimento**
- **[Biome](https://biomejs.dev/)** - Linter e formatter moderno
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Migrations e introspection
- **[Ultracite](https://github.com/ultracite/ultracite)** - Utilitários de desenvolvimento

---

## ⚡ Quick Start

### **Pré-requisitos**

- [Node.js](https://nodejs.org/) (versão 18+)
- [Docker](https://www.docker.com/) e Docker Compose
- [Git](https://git-scm.com/)

### **1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/nlw-agents.git
cd nlw-agents
```

### **2. Configure o ambiente**

#### **Backend:**
```bash
cd server
cp .env.example .env
# Configure as variáveis de ambiente no arquivo .env
```

#### **Frontend:**
```bash
cd web
# Instale as dependências
npm install
```

### **3. Execute o banco de dados**

```bash
cd server
docker-compose up -d
```

### **4. Configure o banco de dados**

```bash
# Execute as migrations
npm run db:migrate
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

---

## 📁 Estrutura do Projeto

```
nlw-agents/
├── server/                 # Backend API
│   ├── src/
│   │   ├── db/            # Configuração do banco
│   │   │   ├── schema/    # Esquemas Drizzle
│   │   │   └── migrations/# Migrations do banco
│   │   ├── http/          # Rotas HTTP
│   │   │   └── routes/    # Definições de rotas
│   │   ├── env.ts         # Configurações de ambiente
│   │   └── server.ts      # Servidor principal
│   ├── docker-compose.yml # Configuração Docker
│   └── drizzle.config.ts  # Configuração Drizzle ORM
│
├── web/                   # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   │   └── ui/        # Componentes da UI
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── lib/           # Utilitários
│   │   └── app.tsx        # Componente principal
│   └── vite.config.ts     # Configuração Vite
│
└── README.md              # Documentação
```

---

## 🏗️ Padrões e Arquitetura

### **Backend**
- **Clean Architecture** - Separação clara de responsabilidades
- **Type-Safe API** - Validação completa com Zod e TypeScript
- **Repository Pattern** - Abstração da camada de dados
- **Error Handling** - Tratamento robusto de erros

### **Frontend**
- **Component-Based Architecture** - Componentes reutilizáveis
- **Custom Hooks** - Lógica compartilhada
- **Server State Management** - TanStack Query para cache e sincronização
- **Design System** - Componentes consistentes com Radix UI

### **Database**
- **Schema-First** - Definição tipada do banco
- **Migrations** - Versionamento do banco de dados
- **Seeding** - Dados iniciais para desenvolvimento

---

## 🛠️ Scripts Disponíveis

### **Backend**
```bash
npm run start:dev    # Inicia em modo desenvolvimento
npm run start:build  # Inicia em modo produção
npm run db:seed      # Popula o banco com dados iniciais
```

### **Frontend**
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
```

---

## 📋 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/v1/health` | Health check da API |
| `GET` | `/api/v1/rooms` | Lista todas as salas |

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