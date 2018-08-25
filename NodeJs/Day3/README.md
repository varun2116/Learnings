# Day3

* **View engines** used to develop dynamic html based on the data MVC model
* Jade/Pug, Handlebars, ejs

## Express Generator

```
    npm install -g express-generator

    express --view=pug myExpressApp

    npm install
```

## NoSQL Databases

* MongoDB Node Js integration

```
    npm i mongodb@2.2.30 --save

    var dburl = "mongodb://localhost:27017/employees";//mongo url
    var MongoClient = mongodb.MongoClient;

    MongoClient.connect(dburl, (err, db) => {
        console.log(`Error : ${err}`);
        var collection = db.collection("employees");

        collection.find({}); //find all the records
        .....
        .....
    });
```

* Mongoose framework (ODM)

## Passport Authentication

## Microservices

* Monolithic Architecture which have all data, logical and presentation layer in one server. 
    * Tightly coupled
    * High Maintenance
    * Not Scalable

* SOA Service oriented Architecture

* Microservice architecture overcomes SOA issues

* NodeMicroservices folder is not working needs [some changes](https://github.com/SumeetWajpe/Sapient_Node_Aug_2018) 

## Build Tools

* also called as Task Runners
1. Grunt
2. Gulp
3. Webpack

```
    npm i gulp -g
    npm i gulp-minify
```

configuration for js minification in *gulpfile.js*:
```
    var gulp = require('gulp');
    var minify = require('gulp-minify');

    gulp.task('default', function(){
        return gulp.src('source/**').pipe(minify()).pipe(gulp.dest('dist'));
    });
```