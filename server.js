'use strict'

const http = require('http')
const port = process.env.PORT || 8080
const router = require('./router')


const server = http.createServer()

server.on('request', router)
server.on('listening', onListening)

server.listen(port)

function onListening(){
  console.log('Server listening on port %s', port)
}
