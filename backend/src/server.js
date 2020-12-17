const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')
const app = express()

mongoose.connect('mongodb+srv://wanderson1873:86927233@aircnc.wiibl.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edcição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json())
app.use(routes)

app.listen(3333)