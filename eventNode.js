const events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log("Connection successful");
    eventEmitter.emit('data_received')
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");
