var http = require("http");
var util = require('util');

http.createServer(function(request, response) {
	console.log("The request is " + request);
	var clientData = "";

	// util.log(util.inspect(request));
    util.log('Request recieved: \nmethod: ' + request.method + '\nurl: ' + request.url);

    response.writeHead(200, {
    	// Content-Type
        "Content-Type": "text/plain",

	    // IE8 does not allow domains to be specified, just the *
	    "Access-Control-Allow-Origin": "*",
	 
	    // Note: IE8 doesn't preflight OPTIONS.
	    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
	 
	    // Note: IE8 doesn't respect this header, might as well set it to false
	    "Access-Control-Allow-Credentials": false,
	 
	    // It seems that this is ignored.
	    "Access-Control-Max-Age": '86400', // 24 hours
	 
	    // All headers you wish to allow for XHR2 requests should be listed here.
	    // Chrome is more strict than Firefox in this regard
	    "Access-Control-Allow-Headers": "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    });
    request.on("data", function(data){
    	console.log("GOT DATA");
    	clientData += data;
    })
    request.on("end", function(){
    	console.log(clientData);
    	//response.end('_testcb(\'{"message": "Hello world!"}\')');
    	response.end('{"message": "Hello world!"}');
    });
    
}).listen(8888);
