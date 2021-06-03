//================Events=======Module==================================
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Rejister a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});
//Raise an event    emit means making noise, produce - signalling
emitter.emit('messageLog'); 
