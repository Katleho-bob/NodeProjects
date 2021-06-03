/*var logger = require('./logger');

//console.log(logger);
logger.log("is this you?");*/
//====================================================================================
/*
const path = require('path');

var pathObject = path.parse(__filename);

console.log(pathObject);*/
//=======================================================================================
/*
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + os.totalMemory);
// console.log('Free Memory: '+ os.freeMemory);
//template string
//ES6 / ES2021
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free  Memory: ${freeMemory}`)
*/
//================================================
/*
*/
//=================Events=======Module==================================

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Rejister a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});
//Raise an event    emit means making noise, produce - signalling
emitter.emit('messageLog' , {id: 1, url: 'http://'}); 
