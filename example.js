var BufferToStream = require('.');

var stream = new BufferToStream(new Buffer(100));
console.log(stream.read(40));
console.log(stream.read(40));
console.log(stream.read(21));
console.log(stream.read(21));

var stream2 = new BufferToStream('To stream or not to stream, that is the question');
var res = stream2.read(3)
while (res) {
    console.log(res.toString())
    res = stream2.read(3)
};

var stream3 = new BufferToStream();
stream3.updateBuffer('To stream or not to stream, that is the question');
stream3.appendBuffer('bbbbb')
var res = stream3.read(13)
while (res) {
    console.log(res.toString())
    res = stream3.read(13)
};
