function helloNode() {
    console.log('Hello Node!!');
    console.log(__filename);
    console.log(__dirname);
}
function hello() {
  console.log('Hello!!');
}
setTimeout(helloNode,5000);

setInterval(hello,2000);
