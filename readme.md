Buffer to stream 
----------------

Create a node stream from a buffer. This can either be a complete dataset or a pending dataset.


# Quick example

```javascript

var b = new Buffer(100);
var stream = new BufferToStream(b);
stream.pipe(require('fs').createWriteStream('out.dat'));

```

##Methods

###setBuffer(data)
Use this to set the dataset as complete. When finished streaming, the stream will end.

###updateBuffer(data);
This will replace the current dataset with data. The stream will not end when running out of data.

###appendBuffer(data);
This will add data to the current dataset. The stream will not end when running out of data.
