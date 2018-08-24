var EventEmitter = require('events').EventEmitter;

function getIteration(maxIteration){
    var e = new EventEmitter();

    process.nextTick(function(){
        var cnt = 0;

        var t = setInterval(function(){
            e.emit('item',++cnt);
            if(cnt == maxIteration){
                e.emit('finish',cnt);
                clearInterval(t);
            }
            if(cnt ==8){
                e.emit('error');
                clearInterval(t);
            }
        },500); //EOF set interval
    });// EOF nextTick

    return e;
}

var eveEmtr = getIteration(10);
eveEmtr.on('item',function(currCnt){
    console.log('RECEIVED : ' + currCnt);
})

eveEmtr.on('finish',function(finalCnt){
    console.log('FINISHED : ' + finalCnt);
})

eveEmtr.on('error',function(){
    console.log('COUNT EXCEEDED 8 !!');
})

console.log("Program Ended !!");