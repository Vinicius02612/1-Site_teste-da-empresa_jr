const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const port = 3000


// Faz conexão com o banco de dados

const Pool = require('pg').Pool
const database = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'bd_cliente',

})


server.use(express.urlencoded({ extended: true }))


// Pegando os arquivos estáticos dentro de public

server.use(express.static('public'))


nunjucks.configure('./', {
    express: server,
    noCache: true


})


// Retorna a renderização da página

server.get('/', (req, res) => {

    return res.render('index.html')


})


//Liga o server na porta 3000

server.listen(3000, function () {
    console.log(`Server is running in port ${port} `)
})