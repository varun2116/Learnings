var http = require('http');
var fs = require('fs');

// var server =  http.createServer((req,res) => {
//     // res.statusCode = 200;
//     // res.setHeader("Content-Type","text/plain");
//     res.writeHead(200, {"Content-Type":"text/plain"});
//     res.end("Hello World!!");
// });

var server = http.createServer((req,res) => {
    fs.readFile('index.html',function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        }
    });
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server running localhost:3000");
});