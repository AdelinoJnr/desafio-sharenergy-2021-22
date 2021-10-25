const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const usersRoute = require('../routes/users');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Users
app.use('/api/users', usersRoute);

module.exports = app;