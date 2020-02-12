const express = require('express')
const app = express()

app.use(require('./usuario_rutes'));
app.use(require('./login'));


module.exports = app;