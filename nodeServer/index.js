// node server which will handle socket.io connection 

const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket =>{
    socket.on('user-joined', name =>{
        console.log('user name:', nameUser);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('recieve', {message: message, name: user[socket.id]})
    });
})

