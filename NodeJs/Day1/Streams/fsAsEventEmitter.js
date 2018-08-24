var fs= require('fs');

var readablestream = fs.createReadStream("Input.txt");
var writablestream = fs.createWriteStream("Output.txt");

readablestream.setEncoding("UTF8");
var allData = ""
// readablestream.on('data', function(chunk){
//     allData += chunk;
// });

// readablestream.on('end',function(){
//     writablestream.write(allData);
//     writablestream.end();
// })

readablestream.pipe(writablestream);