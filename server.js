'use strict'

const http = require('http')
const port = process.env.PORT || 8080
const router = require('./router');
const realtime = require('./realtime');

const server = http.createServer()

realtime(server);
server.on('request', router)
server.on('listening', onListening)

server.listen(port)

function onListening(){
  console.log('Server listening on port %s', port)
}
