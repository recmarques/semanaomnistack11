const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// MÉTODOS HTTP:
// 
// GET: Buscar/listar uma informação do back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end

// TIPOS DE PARÂMETROS:
//
// QUERY PARAMS: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
// ROUTE PARAMS: Parâmetros utilizados para identificar recursos
// REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos


// BANCOS DE DADOS
// SQL: MySQL, SQLite, Microsoft SQL, Oracle, PostgreSQL
// NoSQL (schema das tabelas, campos, ficam muitos livres e poucos estruturados (alguns usuários podem ter nome, outros não...)):
// EX: MongoDB, CouchDB, etc.

// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where()...


app.listen(3333); //porta do localhost
// cannot GET / (nenhuma rota)