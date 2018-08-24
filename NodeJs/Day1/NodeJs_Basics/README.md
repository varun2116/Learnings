# Node JS

* REPL

### Node JS Building Blocks

* libuv(high performance cross-platform evented I/O library) + V8(Google's JS engine) + js,c++ = Nodejs
> c++ used to have access to the file system

* Blocking and Non-blocking event loop

* Blocking code will execute synchronously

* Non-blocking code will execute asynchronously and can be written using 
    * Async Methods
    * Events using event emitters

## Modules

Three Types:
1. Default
2. Third-party
3. Custom

A sample Module code:
```
    console.log("Hello World!!");
```

Run the below command in node cmd prompt:
```
    node HelloModules.js
```

> **Note:** Node js uses common js as module loader.

### Custom Modules

* **module.exports** is used to expose the module to the other js file and use **require** in the js file where u want to use the module.

Code mentioned in Math.js to export the Math Module
```
        module.exports.Addition = Add;
        module.exports.Multiplication = Product;
```
Code mentioned in Calc.js with fetching the Math Module
```
        var MathModule = require('./Math');

        console.log(MathModule.Addition(20,30));
```

Selective import
```
        var AddFn = require('./Math').Addition;
        console.log(AddFn(20,30));
```

Export Modules as an object
```
        module.exports = {
            Addition: Add,
            Multiplication: Product,
            PI:PI
        }
```

### Built-in Modules

* There are some built-in modules provided by node.

```
        var os = require("os");

        var toMB = function(totalBytes){
            return (Math.round((totalBytes/1024/1024)*100)/100);
        }

        console.log(toMB(os.totalmem()));
```

### Third-party Modules

* For this we need to use `npm`. npm is the package manager

* We should download it as a package and we can use it as module in the js file

### package.json

To create package.json
```
        npm init
```

To save in **devDependencies** in package.json:
```
        npm install karma --save-dev
```


