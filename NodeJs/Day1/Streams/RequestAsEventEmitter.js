var request = require('request');

var evtEmtr = request('http://www.google.com/');

var response  = "";

evtEmtr.on('data',function(chunkOfData){
        console.log("\n\n>>>>>>>DATA>>>>>>>>>\n\n");
        response += chunkOfData;
        console.log(response);
});

evtEmtr.on('end',function(){
    console.log("\n\n The Request ended !! \n\n");
    //console.log(response);
});