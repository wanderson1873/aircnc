const express = require('express')

const routes = express.Router()

app.get('/', (req, res) => {
    return res.json( {mensage: "Hello World"} )
})