const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');
readableStream.on('data', function (chunck){
    data += chunck
});

// readableStream.on('end', function() {
//     console.log(data);
// })

// process.stdout.write('Hello');
// process.stdout.write(`What's`);
// process.stdout.write('up');

const Transform = stream.Transform;

function Mayus(){
    Transform.call(this);
}
util.inherits(Mayus, Transform)