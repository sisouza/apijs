Um sistema de cadastro de filmes e usuários utilizando uma API Nodejs, Express, banco de dados Postgres e a ORM Sequelize.
Feito para o desafio final do treinamento oferecido pelo Instituto Eldorado.
Repositório contendo o backend do projeto que consiste em uma rest api para uma aplicação de filmes.

### Setup

> npm install

Altere as suas credenciais em .env para o acesso ao banco de dados

### Executando o Projeto

> docker-compose up

E o servidor web será iniciado 

Para acesso as rotas basta utilizar um API CLIENT como postman ou insomnia.

### Directory Structure

- apijs /
  - src/
    - config
    - controllers
    - database
    - models
    - routes
  - server.js

### EndPoints

User:

    - create: post '/user'
    - listAll: get '/user'
    - list a single user: get '/user/:id'
    - update: post '/user/edit/:id'
    - delete: delete '/user/:id'

Movies:

    - create: post '/movie/'
    - list all: get '/movie'
    - list by genre: get '/movie/:genre'
    - lis by name: get '/movie/:name'
    - update: post '/movie/edit:id'
    - delete: delete '/movie:id',

Genre:

    - create: post '/genre/'
    - list all: get '/genre'
    - update: post '/genre/edit:id'
    - delete: delete '/genre/:id',
