const app = require('express')();

const http = require('http').createServer(app);

const io = require('socket.io')(http);



app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});



io.on('connection',(socket)=>{

    



    //io.emit('conectado','Estou conectado!');



    socket.broadcast.emit('novo usuario','Um novo usuário se conectou!');



    socket.on('disconnect',()=>{

        console.log('Desconectado.');

    })



})



http.listen(3000, () => {

  console.log('listening on *:3000');

});