const express = require("express");
const app = express();
const routes = require('./routes')
const { loggin } = require('./middlewares/login')

app.use(loggin)
// app.use('/assets', express.static('static'))
app.use(express.static('static'))
app.use('/api', routes)
app.listen(3000)