# Estágio 1: Build do projeto
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo .env para o contêiner
COPY .env ./

# Verifica se o arquivo .env existe na raiz do projeto, caso não exista, o build é interrompido
RUN if [ ! -f .env ]; then exit 1; fi


# Copia os arquivos de configuração do projeto
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instala as dependências
RUN npm install --frozen-lockfile

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói o projeto
RUN npm run node:build

# Estágio 2: Ambiente de produção
FROM node:18-alpine AS runner

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para rodar o projeto
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.env ./

# Expõe a porta 3000
EXPOSE 3000

# Define o comando para rodar o servidor
CMD ["npm", "run", "node:start"]