buf = new Buffer(26)
    // len = buf.write("hello Node")
    // console.log("ovtets written : " + len);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
// console.log(buf.toJSON(buf));
var buffer1 = new Buffer('NodeJS  ');
var buffer2 = new Buffer('Simply Easy Node');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("concat content: " + buffer3.toString());

var buffer4 = new Buffer('Node Tutorials');

//slicing a buffer
var buffer5 = buffer4.slice(0,5);
console.log("buffer5 content: " + buffer5.toString());
