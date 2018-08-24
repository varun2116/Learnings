var express = require('express');

var app = express();

app.get("/", (req,res) => {
    //res.send("<h1>Hello Express!!!</h1>");
    //res.sendFile("index.html",{root:__dirname});
    var products = [
        {name:'Mobile', price:3000},
        {name:'LED', price:4000},
        {name:'LCD', price:5000},
    ];

    //res.set("Content-type","text/plain");
    res.send(products);
});

app.listen(3000, () => {
    console.log("Server running at port 3000 . . .");
});
