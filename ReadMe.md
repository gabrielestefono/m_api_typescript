# API de Aluguel de Filmes

Esta API permite a inserção de filmes e usuários, além de gerenciar o aluguel de filmes. Desenvolvida com Node.js, utiliza MySQL como banco de dados e Prisma como ORM para facilitar o acesso e manipulação dos dados.

## Recursos

- **Inserção de Filmes**: Permite adicionar novos filmes ao sistema.
- **Inserção de Usuários**: Permite cadastrar novos usuários no sistema.
- **Aluguel de Filmes**: Usuários podem alugar filmes disponíveis que não foram previamente alugados.

## Pré-requisitos

- Node.js
- MySQL
- Prisma
- yarn

## Configuração

Para rodar este projeto, instale-o localmente usando npm:

```bash
npm install
```

Configure o acesso ao seu banco de dados MySQL no arquivo `.env`:

```env
DATABASE_URL="mysql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO_DE_DADOS"
```

Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

## Rodando a Aplicação

Para iniciar o servidor, execute:

```bash
yarn dev
```

## Uso

### Inserção de um Novo Filme

Para inserir um novo filme, faça um POST para `/movies` com o seguinte corpo:

```json
{
    "title": "Nome do Filme",
    "description": "Descrição do Filme",
    "release_date": "Timestamp ex: 2024-02-03T17:13:07.783+00:00"
}
```

### Inserção de um Novo Usuário

Para inserir um novo usuário, faça um POST para `/users` com o seguinte corpo:

```json
{
    "name": "Nome do Usuário",
    "email": "email@dominio.com"
}
```

### Aluguel de Filme

Para alugar um filme, faça um POST para `/movieRend` com o seguinte corpo:

```json
{
    "userId": "UUID",
    "movieId": "UUID"
}
```

A API verifica se o filme existe, se o usuário existe e se o filme não foi previamente alugado antes de confirmar o aluguel.

---

### Exemplos de Requisições

Existe um arquivo `requests.rest` na raiz do projeto que contém exemplos de requisições para cada um dos recursos disponíveis na API.