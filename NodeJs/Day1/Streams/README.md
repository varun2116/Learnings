# Streams

> After reading a partial data from the file there is an error then Async methods throw the error without displaying the success partial data this can be acheived with Events driven emitters.

[process.nextTick()](https://medium.com/@amanhimself/how-process-nexttick-works-in-node-js-cb327812e083) delays the execution by one cpu cycle

## File Streams

* File streams are either readble or writable but not both.

* Duplex streams allow read and write at the same time.
ex: tcp, websockets

