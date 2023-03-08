// node server which will handle socket.io connection 

const io = require('socket.io')(8000)

const users = {};