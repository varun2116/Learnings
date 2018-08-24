var fs= require('fs');

fs.readFile('Data.txt',function(err, dataFromFile){
    if(err){
        console.error("Error :" +err);
    }
    else{
        console.log('Reading File async : ' + dataFromFile);
    }
});
console.log("Program ended");