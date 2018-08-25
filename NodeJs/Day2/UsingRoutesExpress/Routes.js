var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var router = express.Router();
// var router2 = express.Router();

router.route('/products/:name/:size').get((req, res) => {
    var products = [
        {name:'Mobile', price:3000},
        {name:'LED', price:4000},
        {name:'LCD', price:5000}
    ];

    var n = req.params.name; //read the parameters
    var sz = req.params.size;
    console.log(n,sz);
    if(n){
        res.send(products[1]);
    }
    else{
        res.json(products);
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); //used to parse the req body

app.use('/data',router);
//app.use('/account', router2);

app.get('/', (req,res) => {
    res.sendFile("index.html",{root:__dirname});
});

app.post('/login', (req, res) => {
    //read username and password
    console.log("Posted from client", req.body, req.body.username, req.body.password);
    res.send('success');
});

app.use((req,res) => { //to throw error for remaining routes which are not declared
    res.statusCode = 404;
    res.send("Page Not Found");
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});