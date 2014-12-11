var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end('_testcb(\'{"message": "Hello world!"}\')');
}).listen(8888);
