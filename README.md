# Projeto Edital 28/2023 - Frontend Next.js 14

Este projeto foi desenvolvido como parte do processo seletivo do **LAIS - Laboratório de Inovação Tecnológica em Saúde**, referente ao **Edital 28/2023**. O frontend foi construído utilizando **Next.js 14**, um framework React que oferece recursos avançados como renderização híbrida, geração estática, roteamento baseado em arquivos e muito mais.

Você pode acessar o projeto através do [link disponível](https://portfolio-lais-huol.andersonvilela.dev/).

O projeto está integrado com o **Clerk** para autenticação de usuários e utiliza **Tailwind CSS** para estilização. Além disso, ele consome uma API backend, cuja documentação pode ser encontrada [aqui](https://github.com/anderson-vilela/portfolio--projeto-edital-28-2023-api).

---

## 🚀 Visão Geral do Projeto

### Tecnologias Utilizadas

- **Next.js 14**: Framework React para construção de aplicações web modernas.
- **React 18**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Clerk**: Autenticação de usuários.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Highcharts**: Biblioteca para criação de gráficos interativos.
- **Axios**: Cliente HTTP para consumo de APIs.
- **TypeScript**: Superconjunto de JavaScript com tipagem estática.
- **Docker**: Containerização para deploy e execução do projeto.

### Funcionalidades Principais

- Autenticação de usuários com **Clerk**.
- Consumo de dados da API backend.
- Exibição de gráficos interativos com **Highcharts**.
- Estilização responsiva com **Tailwind CSS**.
- Deploy otimizado com **Docker**.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (v18 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)
- **Docker** (opcional, para rodar o projeto em container)
- **Git** (para clonar o repositório)

---

## 🛠️ Instalação e Configuração

### 1. Clonar o Repositório

Clone o repositório do projeto usando o seguinte comando:

```bash
git clone https://github.com/anderson-vilela/projeto-edital-28-2023.git
cd projeto-edital-28-2023

### 2. Instalar Dependências

Instale as dependências do projeto com o comando:

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Renomeie o arquivo `.env.example` para `.env` e configure as seguintes variáveis:

```env
# Credenciais do Clerk (obtidas no painel do Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# URL da API backend
URL_API_JSON_SERVER=http://localhost:3000
```

### 4. Configurar o Clerk

1. Acesse o [Clerk](https://clerk.com/) e crie uma nova aplicação.
2. Obtenha as credenciais (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` e `CLERK_SECRET_KEY`).
3. Adicione essas credenciais no arquivo `.env`.

---

## 🚀 Executando o Projeto

### Modo Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, execute:

```bash
npm run node:dev
```

O servidor será iniciado na porta `8000`. Acesse `http://localhost:8000` no navegador.

### Modo Produção

1. **Build do Projeto**:
   Execute o comando abaixo para gerar a build de produção:
   ```bash
   npm run node:build
   ```

2. **Iniciar o Servidor**:
   Após a build, inicie o servidor com:
   ```bash
   npm run node:start
   ```

   O servidor será iniciado na porta `3000`. Acesse `http://localhost:3000` no navegador.

---

## 🐳 Executando com Docker

### 1. Construir a Imagem Docker

Para construir a imagem Docker, execute:

```bash
npm run docker:build
```

### 2. Rodar o Container

Para rodar o container, execute:

```bash
npm run docker:run
```

O container será iniciado na porta `8000`. Acesse `http://localhost:8000` no navegador.

### 3. Rodar em uma Porta Específica

Se precisar rodar o container em uma porta diferente, use o comando abaixo, substituindo `port` pela porta desejada:

```bash
docker run --rm -p port:3000 anderson-vilela/portfolio-lais-huol:v1.0
```

**Exemplo**:
Para rodar na porta `5000`, use:
```bash
docker run --rm -p 5000:3000 anderson-vilela/portfolio-lais-huol:v1.0
```

---

## 📂 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **`src/`**: Código-fonte do projeto (componentes, hooks, serviços, etc.).
- **`src/app/`**: Contém as páginas e rotas do Next.js.
- **`tailwind.config.js`**: Configuração do Tailwind CSS.
- **`Dockerfile`**: Configuração do Docker para deploy.
- **`.env.example`**: Exemplo de arquivo de variáveis de ambiente.

---

## 🔧 Comandos Úteis

- **Rodar em Modo Desenvolvimento**:
  ```bash
  npm run node:dev
  ```

- **Gerar Build de Produção**:
  ```bash
  npm run node:build
  ```

- **Iniciar Servidor de Produção**:
  ```bash
  npm run node:start
  ```

- **Construir Imagem Docker**:
  ```bash
  npm run docker:build
  ```

- **Rodar Container Docker**:
  ```bash
  npm run docker:run
  ```

- **Executar Lint**:
  ```bash
  npm run lint
  ```

---

## ❓ Dúvidas ou Problemas

Se você encontrar algum problema ou tiver dúvidas sobre o projeto, siga estas etapas:

1. Verifique se todas as dependências estão corretamente instaladas.
2. Consulte a documentação oficial do [Next.js](https://nextjs.org/docs) e [Clerk](https://clerk.com/docs).
3. Caso o problema persista, abra uma **issue** no repositório do GitHub.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

Feito com ❤️ por [Anderson Vilela](https://github.com/anderson-vilela).
``
