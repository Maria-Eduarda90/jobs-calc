const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando template engine
server.set('view engine', 'ejs')

// habilitando arquivos stactic
server.use(express.static("public"))

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// usar req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(8080, () => console.log('rodando'))