const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const usersRoute = require('../routes/users');
const factorysRouter = require('../routes/factorys');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usuários
app.use('/api/users', usersRoute);

// Usinas
app.use('/api/factorys', factorysRouter);

module.exports = app;