const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const usersRoute = require('../routes/users');
const factoriesRouter = require('../routes/factories');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usuários
app.use('/api/users', usersRoute);

// Usinas
app.use('/api/factories', factoriesRouter);

module.exports = app;