const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// app.use(cors({ origin : 'http://meuapp.com })); //permite apenas que o proprio front-end acesse esse back-end; 
app.use(express.json());
app.use(routes);

app.listen(3333);

// Rota / recurso

/* 
    Método HTTP:

    GET: Buscar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * 
 * Query params: Parâmetros nomeador enviados na rota após "?" (filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


