# NLW Agents - Backend API 🚀

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**API REST moderna e performática construída com Fastify e TypeScript**

[🚀 Quick Start](#quick-start) • [📡 API](#endpoints) • [🗄️ Database](#database) • [🐳 Docker](#docker)

</div>

---

## 📖 Sobre

O backend do **NLW Agents** é uma API REST robusta desenvolvida com foco em performance, type-safety e escalabilidade. Utiliza as melhores práticas de desenvolvimento moderno com TypeScript nativo e um stack de tecnologias de ponta.

### ✨ Características Principais

- ⚡ **Alta Performance** - Fastify como framework web
- 🔒 **Type-Safe** - TypeScript nativo com validação Zod
- 🗄️ **ORM Moderno** - Drizzle ORM para gestão de dados
- 🐳 **Containerizado** - Setup completo com Docker
- 📋 **Migrations** - Versionamento automático do banco
- 🔍 **Validação** - Esquemas robustos com Zod
- 🌐 **CORS** - Configuração para desenvolvimento cross-origin

---

## 🛠️ Stack Tecnológica

### **Runtime & Language**
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado (nativo via `--experimental-strip-types`)

### **Web Framework**
- **[Fastify](https://fastify.dev/)** - Framework web de alta performance
- **[fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod)** - Integração TypeScript + Zod
- **[@fastify/cors](https://github.com/fastify/fastify-cors)** - Middleware CORS

### **Database & ORM**
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM moderno e type-safe
- **[postgres](https://github.com/porsager/postgres)** - Driver PostgreSQL minimalista

### **Validation & Schema**
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first

### **Development Tools**
- **[Biome](https://biomejs.dev/)** - Linter e formatter ultra-rápido
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - CLI para migrations e introspection
- **[Docker](https://www.docker.com/)** - Containerização do ambiente

---

## ⚡ Quick Start

### **Pré-requisitos**
- Node.js 18+ 
- Docker e Docker Compose
- PostgreSQL (via Docker)

### **1. Instalação**

```bash
# Clone o repositório (se não fez ainda)
git clone https://github.com/seu-usuario/nlw-agents.git
cd nlw-agents/server

# Instale as dependências
npm install
```

### **2. Configuração do Ambiente**

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Configure as variáveis no .env
nano .env
```

**Variáveis de ambiente necessárias:**
```env
# Server
PORT=5000

# Database
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"

# CORS (opcional para desenvolvimento)
FRONTEND_URL="http://localhost:5173"
```

### **3. Banco de Dados**

```bash
# Inicie o PostgreSQL via Docker
docker-compose up -d

# Execute as migrations
npx drizzle-kit migrate

# (Opcional) Popule com dados de exemplo
npm run db:seed
```

### **4. Execute a aplicação**

```bash
# Modo desenvolvimento (com watch)
npm run start:dev

# Modo produção
npm run start:build
```

A API estará disponível em: `http://localhost:5000`

---

## 📡 Endpoints

### **Health Check**
```http
GET /api/v1/health
```
**Response:**
```json
{
  "status": "OK"
}
```

### **Rooms**
```http
GET /api/v1/rooms
```
**Response:**
```json
[
  {
    "id": "uuid",
    "name": "Nome da Sala"
  }
]
```

---

## 🗄️ Database

### **Schema Design**

O projeto utiliza **Drizzle ORM** com uma arquitetura schema-first:

```
src/db/
├── schema/
│   ├── index.ts          # Exportações centralizadas
│   └── rooms.ts          # Schema das salas
├── migrations/           # Arquivos de migração
├── connection.ts         # Configuração da conexão
└── seed.ts              # Dados de exemplo
```

### **Migrations**

```bash
# Gerar nova migration
npx drizzle-kit generate

# Aplicar migrations
npx drizzle-kit migrate

# Visualizar schema
npx drizzle-kit studio
```

### **Seeding**

```bash
# Popular banco com dados de exemplo
npm run db:seed
```

---

## 🐳 Docker

### **Serviços Disponíveis**

O `docker-compose.yml` inclui:

- **database** - PostgreSQL 17 padrão
- **nlw-agents-pg** - PostgreSQL com pgvector (para futuras features de AI)

### **Comandos Docker**

```bash
# Iniciar todos os serviços
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar serviços
docker-compose down

# Rebuild completo
docker-compose down -v
docker-compose up -d --build
```

---

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev          # Inicia com watch mode e hot reload

# Produção
npm run start:build        # Inicia em modo produção

# Database
npm run db:seed           # Popula banco com dados iniciais

# Qualidade de código
npx biome check           # Verifica linting e formatting
npx biome check --fix     # Corrige automaticamente
```

---

## 🏗️ Arquitetura

### **Estrutura de Pastas**

```
src/
├── db/                   # Camada de dados
│   ├── schema/          # Definições de schema
│   ├── migrations/      # Arquivos de migração
│   ├── connection.ts    # Setup da conexão
│   └── seed.ts         # Dados iniciais
├── http/               # Camada HTTP
│   └── routes/         # Definições de rotas
├── env.ts             # Configuração de ambiente
└── server.ts          # Ponto de entrada
```

### **Padrões Utilizados**

- **Clean Architecture** - Separação clara de camadas
- **Type-First** - Definição de tipos antes da implementação
- **Schema Validation** - Validação em runtime com Zod
- **Repository Pattern** - Abstração da persistência
- **Dependency Injection** - Inversão de dependências via Fastify

---

## 🔧 Configuração Avançada

### **TypeScript Nativo**

O projeto utiliza a flag experimental `--experimental-strip-types` do Node.js para executar TypeScript nativamente:

```json
{
  "scripts": {
    "start:dev": "node --env-file .env --experimental-strip-types --no-warnings --watch src/server.ts"
  }
}
```

### **Fastify + Zod Integration**

```typescript
import { fastify } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Validação automática com tipos inferidos
app.get('/rooms', {
  schema: {
    response: {
      200: z.array(roomSchema)
    }
  }
}, async (request, reply) => {
  // Response automaticamente tipado
  return rooms;
});
```

---

## 🚀 Deploy

### **Environment Variables**

Para produção, configure:

```env
NODE_ENV=production
PORT=5000
DATABASE_URL="sua-url-de-producao"
```

### **Build & Start**

```bash
# Para produção
npm run start:build
```

---

## 🤝 Contribuição

Este backend foi desenvolvido seguindo as melhores práticas apresentadas no **NLW da Rocketseat**:

- Code Review via Pull Requests
- Testes automatizados (em desenvolvimento)
- CI/CD pipeline (planejado)
- Documentação via OpenAPI (futuro)

---

## 📄 Licença

Projeto desenvolvido durante o NLW da **[Rocketseat](https://rocketseat.com.br/)**

---

<div align="center">

**[⬆ Voltar ao topo](#nlw-agents---backend-api-)**

Feito com 💜 e ⚡ Fastify

</div>
