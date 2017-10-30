var http = require("http");

var callback = function(req, res)
{
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end("hello world");
}

var server = http.createServer(callback)
server.listen(1234, "127.0.0.1");
console.log("Server running at: " + "http://127.0.0.1:1234");
