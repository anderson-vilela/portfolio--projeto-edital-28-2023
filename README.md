# projeto-edital-28-2023
# Resultado final disponível no link: https://lais.huol.ufrn.br/wp-content/uploads/2024/01/Edital-28_2023-Resultado-Final-Fase-2-Assinado-eletronicamente.pdf

Esse aplicativo foi construído para o processo seletivo do LAIS - Laboratório de Inovação Tecnológica em Saúde, Edital 28/2023. Ele utiliza o Next.js, um framework para criar aplicações web com React. Além disso, é foi utilizado o Clerk para Autenticação dos usuários. O Next.js oferece vários recursos que facilitam o desenvolvimento, como:

- Sistema de Cache otimizado.
- Renderização híbrida: permite rendezirar os componentes e páginas no servidor ou cliente, de acordo com a necessidade da aplicação.
- Geração estática: permite gerar páginas HTML estáticas em tempo de construção, otimizando o desempenho e a SEO.
- Roteamento baseado em arquivos: permite criar rotas dinâmicas e aninhadas simplesmente criando arquivos e pastas na pasta APP.
- Sistema otimizado de Data Fetching do lado Servidor e utilização de cache.
- Image: permite otimizar e servir imagens de forma responsiva, usando o componente Image do Next.js.
- Suporte nativo ao TypeScript: permite usar o TypeScript, um superconjunto de JavaScript que adiciona tipos estáticos e verificações de erros em tempo de compilação.
- Suporte nativo ao Tailwindcss: permite usar classes utilitárias para estilizar meus elementos diretamente no HTML, com uma sintaxe simples e responsiva, promovendo agilidade e desempenho.
- Suporte nativo ao eslint: ferramenta que me ajuda a encontrar e corrigir problemas no código JavaScript e manter padrões definidos para o projeto.

## Instalação

### Instalação do projeto

1. Clone o repositório do GitHub: (https://github.com/anderson-vilela/projeto-edital-28-2023.git).
2. Instale as dependências: (npm install).

### Instalação da API

1. Clone o repositório do GitHub no link a seguir: (https://github.com/lais-huol/edital-001-23-modulos-educacionais).
2. Instale as dependências: (npm install).

### Login ou Cadastro no Clerk (https://clerk.com/). OBS: Essa aplicação utiliza o Clerk para autenticação de usuários.

1. Caso não tenha um cadastro, cadastre-se. Caso contrário, efetue o login.
2. Crie uma nova aplicação no Clerk.
3. Anote suas credenciais (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY e CLERK_SECRET_KEY).

## Configuração

1. renomeie o arquivo ".env.exemple" para ".env.local"
2. inclua suas credenciais do Clerk no arquivo ".env.local"
3. inclua seu endereço para API (ex: URL_API_JSON_SERVER=http://localhost:3004), seu endereço base deve ser igual ao utilizado pela API (Padrão utilizado pela API: http://localhost:3004).

## Inicialização do projeto

1. Inicie a aplicação API. (npm run start)
2. Inicie a aplicação Next.js. (npm run dev)

## Build do projeto

1. Inicie a aplicação API. (npm run start)
2. Rode o script para build do projeto Next.js. (npm run build)
3. Caso queira inicializar a build do projeto, você deve manter a API rodando e rodar o script "npm run start"
