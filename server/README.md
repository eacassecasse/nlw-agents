# NLW Agents - Backend API 🚀

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

**API REST robusta com IA integrada para transcrição e embeddings de áudio**

</div>

---

## 📖 Sobre

Backend da aplicação **NLW Agents** desenvolvido com **Fastify**, **TypeScript** e **PostgreSQL**. Implementa funcionalidades de:

- 🎤 **Transcrição de áudio** com Google Gemini AI
- 🧠 **Geração de embeddings** para busca semântica
- 🏠 **Gerenciamento de salas** e perguntas
- 📊 **API REST completa** com validação TypeScript

---

## 🛠️ Stack Tecnológica

### **Core**
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Fastify](https://fastify.dev/)** - Framework web high-performance

### **Banco de Dados**
- **[PostgreSQL](https://www.postgresql.org/)** - Banco relacional
- **[pgvector](https://github.com/pgvector/pgvector)** - Extensão para vetores
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM moderno e type-safe
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Migrations e introspection

### **Inteligência Artificial**
- **[@google/genai](https://github.com/google/genai)** - Google Gemini AI SDK
- **Gemini 2.5 Flash** - Modelo para transcrição e embeddings

### **Validação e Tipagem**
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod)** - Integração Fastify + Zod

### **Infraestrutura**
- **[Docker](https://www.docker.com/)** - Containerização
- **[@fastify/cors](https://github.com/fastify/fastify-cors)** - CORS middleware
- **[@fastify/multipart](https://github.com/fastify/fastify-multipart)** - Upload de arquivos

---

## ⚡ Quick Start

### **Pré-requisitos**
- Node.js 18+
- Docker e Docker Compose
- Chave da API do Google Gemini

### **1. Instalar dependências**
```bash
npm install
```

### **2. Configurar ambiente**
```bash
cp .env.example .env
# Configure as variáveis:
# DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
# GOOGLE_GENAI_API_KEY=sua_chave_aqui
# PORT=5000
```

### **3. Iniciar banco de dados**
```bash
docker-compose up -d
```

### **4. Executar migrations**
```bash
npx drizzle-kit migrate
```

### **5. Popular banco (opcional)**
```bash
npm run db:seed
```

### **6. Iniciar servidor**
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:build
```

---

## 📡 API Endpoints

### **Health Check**
```http
GET /api/v1/health
```

### **Salas**
```http
GET    /api/v1/rooms                 # Listar salas
POST   /api/v1/rooms                 # Criar sala
GET    /api/v1/rooms/:id/questions   # Perguntas da sala
```

### **Perguntas**
```http
POST   /api/v1/rooms/:roomId/questions  # Criar pergunta
```

### **Áudio e IA**
```http
POST   /api/v1/rooms/:roomId/audio      # Upload e transcrição de áudio
```

---

## 🗄️ Estrutura do Banco

### **Tabelas Principais**

#### **rooms**
```sql
- id: UUID (PK)
- name: TEXT
- created_at: TIMESTAMP
```

#### **questions**
```sql
- id: UUID (PK)  
- room_id: UUID (FK)
- message: TEXT
- created_at: TIMESTAMP
```

#### **audio_chunks**
```sql
- id: UUID (PK)
- room_id: UUID (FK)
- transcription: TEXT
- embeddings: VECTOR(768)
- created_at: TIMESTAMP
```

---

## 🏗️ Arquitetura

### **Estrutura de Pastas**
```
src/
├── db/
│   ├── connection.ts      # Conexão PostgreSQL
│   ├── seed.ts           # Dados iniciais
│   ├── schema/           # Esquemas Drizzle
│   └── migrations/       # Migrations SQL
├── http/
│   └── routes/           # Definições de rotas
├── services/
│   └── gemini.ts         # Integração Google AI
├── env.ts                # Configurações ambiente
└── server.ts             # Servidor principal
```

### **Padrões Implementados**
- **Type-Safe API** - Validação completa com Zod
- **Repository Pattern** - Abstração da camada de dados
- **Error Handling** - Tratamento robusto de erros
- **Clean Architecture** - Separação de responsabilidades

---

## 🤖 Funcionalidades de IA

### **Transcrição de Áudio**
- Converte áudio para texto em português brasileiro
- Suporte a múltiplos formatos (WebM, MP3, WAV)
- Pontuação e formatação automática

### **Embeddings Vetoriais**
- Geração de vetores de 768 dimensões
- Armazenamento otimizado com pgvector
- Base para busca semântica futura

---

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev        # Servidor com hot reload

# Produção  
npm run start:build      # Servidor otimizado

# Banco de dados
npm run db:seed          # Popular com dados iniciais
npx drizzle-kit generate # Gerar migrations
npx drizzle-kit migrate  # Executar migrations
npx drizzle-kit studio   # Interface visual do banco
```

---

## 🔧 Configuração

### **Variáveis de Ambiente**
```env
# Banco de dados
DATABASE_URL=postgresql://user:pass@localhost:5432/agents

# Google AI
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here

# Servidor
PORT=5000

# CORS (desenvolvimento)
FRONTEND_URL=http://localhost:5173
```

### **Docker Compose**
O projeto inclui configuração completa para PostgreSQL com pgvector:
- PostgreSQL 17 com pgvector
- Persistência de dados
- Setup automático da extensão

---

## 🚀 Deploy

### **Produção**
1. Configure as variáveis de ambiente
2. Execute `npm run start:build`
3. Configure proxy reverso (Nginx/Apache)
4. Configure SSL/TLS

### **Docker**
```dockerfile
# Exemplo de Dockerfile para produção
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start:build"]
```

---

## 🤝 Desenvolvimento

Desenvolvido durante o **NLW (Next Level Week)** da **[Rocketseat](https://rocketseat.com.br/)**

### **Contribuindo**
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

<div align="center">

**[⬆ Voltar ao topo](#nlw-agents---backend-api-)**

Feito com 💜 durante o NLW da Rocketseat

</div>
