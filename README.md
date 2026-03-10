HelpDesk Frontend

Frontend da aplicação HelpDesk, desenvolvido utilizando Angular para consumo da API REST do sistema de gerenciamento de chamados.

A aplicação permite que usuários visualizem, criem e atualizem chamados de suporte técnico, além de consultar clientes e técnicos cadastrados.

O projeto simula um ambiente real de sistema de Help Desk utilizado em empresas de TI, onde clientes abrem chamados e técnicos são responsáveis pelo atendimento.

Tecnologias utilizadas

Angular

JavaScript

TypeScript

HTML5

CSS3

Bootstrap

Consumo de API REST

Funcionalidades

A aplicação permite:

Listar chamados cadastrados

Criar novos chamados

Atualizar chamados existentes

Visualizar clientes cadastrados

Visualizar técnicos cadastrados

Navegação entre páginas utilizando Angular Router

Estrutura do projeto

A aplicação segue uma estrutura comum de projetos Angular:

src
│
├── app
│   ├── components
│   │
│   ├── services
│   │
│   ├── views
│   │   ├── chamados
│   │   ├── clientes
│   │   └── tecnicos
│   │
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets
└── environments
Rotas da aplicação

O sistema utiliza Angular Router para navegação entre páginas.

Exemplos de rotas:

/chamados
/chamados/create
/chamados/update/:id

/clientes
/clientes/create
/clientes/update/:id

/tecnicos
/tecnicos/create
/tecnicos/update/:id
Integração com o Backend

O frontend consome a API REST desenvolvida em Spring Boot.

Repositório do backend:

https://github.com/VictorAlves94/HelpDesk-BackAnd

A API deve estar rodando em:

http://localhost:8080

Endpoints consumidos pela aplicação:

GET /clientes
GET /tecnicos
GET /chamados

POST /clientes
POST /tecnicos
POST /chamados

PUT /clientes/{id}
PUT /tecnicos/{id}
PUT /chamados/{id}
Como executar o projeto

Clone o repositório

git clone https://github.com/VictorAlves94/HelpDesk-FrontEnd.git

Entre na pasta do projeto

cd HelpDesk-FrontEnd

Instale as dependências

npm install

Execute a aplicação

ng serve

A aplicação estará disponível em

http://localhost:4200

⚠️ O backend precisa estar rodando para que os dados sejam carregados.

Objetivo do projeto

Este projeto foi desenvolvido para praticar:

Desenvolvimento de aplicações Angular

Consumo de APIs REST

Estruturação de aplicações SPA

Navegação com Angular Router

Integração completa Frontend + Backend

Autor
