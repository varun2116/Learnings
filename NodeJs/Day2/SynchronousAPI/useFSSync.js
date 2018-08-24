var fs = require('fs');

//========Sync==========
// if(fs.existsSync('temp')){
//     console.log("temp exists already. Removing . . . ");
//     if(fs.existsSync('temp/New.txt')){
//         fs.unlinkSync('temp/New.txt');// deletes the file
//     }
//     fs.rmdirSync('temp');// deletes the folder
// }

// fs.mkdirSync('temp');

// if(fs.existsSync('temp')){
//     console.log("Temp Created!!");
//     process.chdir('temp');
//     fs.writeFileSync("test.txt","Sample Doc!!");
//     fs.renameSync("test.txt","New.txt");
//     console.log(`File Size :  ${fs.statSync('New.txt').size}  bytes`);
//     console.log(`File contents :  ${fs.readFileSync("New.txt").toString()}`);
// }
//=========Sync Ended=========

//========Async===========
fs.exists('temp', (exists) => {
    if(exists){
        console.log("temp exists already. Removing . . . ");
        fs.exists('temp/New.txt', (exists) => {
            fs.unlink('temp/New.txt', (err) => {
                if(err){
                    console.log(`Error: ${err}`);
                }
                else{
                    fs.rmdir('temp', (err) => {
                        AsyncMkdir();
                    });
                }
            });
        });
    }
    else{
        AsyncMkdir();
    }
});

function AsyncMkdir(){
    fs.mkdir('temp', (err) => {
        if(err){
            console.log(`Error : ${err}`);
        }
        else{
            fs.exists('temp', (exists) => {
                if(exists){
                    process.chdir('temp');
                    fs.writeFile("test.txt","Sample Doc with Async!!", (err) => {
                        if(err){
                            console.log(`Error : ${err}`);
                        }
                        else{
                            fs.rename("test.txt","New.txt", (err) => {
                                if(err){
                                    console.log(`Error: ${err}`);
                                }
                                else{
                                    fs.stat('New.txt',(err,stats) => {
                                            console.log(`File Size : ${stats.size} bytes`);
                                    });
                                    fs.readFile('New.txt', (err, dataFromFile) => {
                                        console.log(`File contents :  ${dataFromFile.toString()}`);
                                    });
                                }
                            });
                        }
                    });

                }
            });
        }
    })
}
//==========Async Ended===========

console.log("Program Ended!!!");