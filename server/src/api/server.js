const app = require('./index');

const { PORT = 3003 } = require('../database');

app.listen(PORT, console.log(`Online na porta ${PORT}`));