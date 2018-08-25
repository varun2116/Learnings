var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.render('productlist', { title: 'Express', productList:[
        {name:'Mobile', price:3000},
        {name:'LED', price:4000},
        {name:'LCD', price:5000}
      ] 
  });
});

//Mongo DB access
router.get('/employees', function(req, res, next) {
  var dburl = "mongodb://localhost:27017/employees";//mongo url
  var MongoClient = mongodb.MongoClient;

  MongoClient.connect(dburl, (err, db) => {
    if(err)
      console.log(`Error : ${err}`);
    else{
      var collection = db.collection("employees");

      collection.find({}).toArray((err,result) => {
        if(err){
          console.log(`Error : ${err}`);
        }
        else if(result.length){
          //res.json(result);
          res.render('employeelist', { title: 'Express', employeeList: result });
        }
        else{
          //res.send("No Employees Found!!");
          res.render('employeelist', { title: 'Express', employeeList: '' });
        }
      }); //find all the records
    }
  });

  //res.render('employeelist', { title: 'Express', employeeList: [] });
});

module.exports = router;
