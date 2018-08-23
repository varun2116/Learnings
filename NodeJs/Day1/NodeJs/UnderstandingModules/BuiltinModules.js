var os = require("os");

var toMB = function(totalBytes){
    return Math.round((totalBytes/1024/1024)*100)/100;
}

console.log(toMB(os.totalmem()) + " MB");