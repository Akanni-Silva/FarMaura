# FarMaura API

Servidor backend para um aplicativo de controle de agenda de remédios, focado no público idoso. Permite o cadastro, consulta, atualização e remoção de medicamentos, associa horários de uso e usuários, fornecendo uma camada segura via autenticação JWT.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/): Framework Node.js para construção de APIs robustas em TypeScript.
- [TypeORM](https://typeorm.io/): ORM para integração com bancos de dados relacionais.
- JWT (JSON Web Token): Autenticação e autorização das rotas protegidas.
- Swagger: Documentação automática acessível via `/swagger`.

## Funcionalidades Principais

- **CRUD de Remédios**: Cadastro, consulta, alteração e exclusão de medicamentos.
- **Associação a Usuário e Período**: Cada remédio é vinculado a um usuário e a um período/hora para administração.
- **Proteção de Rotas**: Acesso apenas com autenticação JWT. 
- **API Documentada com Swagger**: Navegação e testes fáceis das rotas disponíveis.

## Estrutura das Entidades

- **Remédio**: Nome, dose em mg, associado a período e usuário.
- **Período**: Nome e horário.
- **Usuário**: (Definição e autenticação via módulo próprio).

## Guia de Instalação e Uso

### 1. Pré-requisitos

- Node.js (versão >= 14)
- npm
- Banco de dados compatível (por padrão, PostgreSQL)
- Variáveis de ambiente (.env) configuradas (verifique exemplo .env)

### 2. Instalação

```sh
npm install
```

### 3. Execução

Ambiente de desenvolvimento:

```sh
npm run start:dev
```

Ambiente de produção:

```sh
npm run start:prod
```

O servidor será iniciado na porta definida em `process.env.PORT` (padrão 4000).

### 4. Testes

```sh
npm run test          # Testes unitários
npm run test:e2e      # Testes end-to-end
npm run test:cov      # Cobertura de testes
```

### 5. Documentação da API

Após iniciar o servidor, acesse:

```
http://localhost:4000/swagger
```

para explorar, consultar e testar todos os endpoints da API.

### 6. Exemplos de Uso das Rotas

> **Todas as rotas de remédios exigem autenticação via JWT.**

#### Cadastro de Remédio (POST /remedios)

```http
POST /remedios
Authorization: Bearer <token>
Content-Type: application/json

{
  "nome": "Paracetamol",
  "doseMg": 500,
  "periodo": {"id": 1},
  "usuario": {"id": 10}
}
```

#### Listagem de Remédios (GET /remedios)

```http
GET /remedios
Authorization: Bearer <token>
```

#### Consulta por Nome (GET /remedios/nome/:nome)

```http
GET /remedios/nome/Paracetamol
Authorization: Bearer <token>
```

#### Alteração (PUT /remedios)

```http
PUT /remedios
Authorization: Bearer <token>
Content-Type: application/json

{
  "id": 1,
  "nome": "Dipirona",
  "doseMg": 500,
  "periodo": {"id": 1},
  "usuario": {"id": 10}
}
```

#### Remoção (DELETE /remedios/:id)

```http
DELETE /remedios/1
Authorization: Bearer <token>
```

### 7. Ambiente (.env)

Crie um arquivo `.env` na raiz do projeto, exemplo:

```
PORT=4000
DATABASE_URL=postgres://usuario:senha@localhost:5432/farmaura
JWT_SECRET=sua_chave_secreta
```

Adapte conforme seu banco de dados e configurações locais.

## Contribuição

Sinta-se livre para abrir issues e pull requests!

## Autor

Akanni Silva - [GitHub](https://github.com/Akanni-Silva) - [Email](mailto:akanni029@gmail.com)

## Licença

MIT
