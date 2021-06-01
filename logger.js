var url = 'http://myLogger.io/log';

function log(message){
    //Send an HTTP Request 
    console.log(message);
}

module.exports.log = log;