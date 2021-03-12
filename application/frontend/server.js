/**node server */
const http = require('http')
const file = require('fs').promises
const port = 3001
const host = '192.168.100.5'

const requestListener = async (req, res)=>{
    file.readFile(__dirname + '/app.html')
        .then(page =>{
            res.setHeader('Content_Type','text/html')
            res.writeHead(200)
            res.end(page)
        }).catch(err =>{
            res.writeHead(200)
            res.end(err)
            return
        })
}
const app = http.createServer(requestListener)
app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`)
})

/*
comandos de execução:

este comando é usado no terminal de
teste ou deploy do servidor:

node server.js




só funciona em teminal linux

comando para conexão a partir de um terminal remoto
curl http:localhost:3001

só funciona em teminal linux
*/
