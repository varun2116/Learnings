var http = require('http');
var fs = require('fs');
var socket = require('socket.io');

var server = http.createServer((req,res) => {
    fs.readFile('clientPeer.html',function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        }
    });
});

var io = socket.listen(server);

io.sockets.on('connection', (skt) => {
    console.log('connected!!!');
    setInterval( () => {
        var dataFromServer = new Date();
        skt.emit("messageForClientPeer", dataFromServer);
    },2000);

    skt.on('messageFromClientPeer', (dataFromClient) => {
        console.log("data from client peer : " + dataFromClient)
    });
});

server.listen(4000, "127.0.0.1", () => {
    console.log("server running localhost:4000");
});