var http = require("http");

var callback = function (req, res) { // req -> request object; res -> response object
  var eq = req.url.substring(1);
  console.log(eq);
  if(eq == "favicon.ico"){
   res.end(""); 
  }
  else{
   res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
   var x = eval(eq).toString()
   res.end(x);
  }
}

var server = http.createServer(callback) // create an http server
server.listen(1234, "127.0.0.1"); // make server listen to port 1234