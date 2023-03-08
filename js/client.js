const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const message = document.getElementById('message');
const messageContainer = document.querySelector(".container");

const nameUser = prompt("ENTER YOUR NAME TO JOIN:");
socket.emit('new-user-joined', nameUser);