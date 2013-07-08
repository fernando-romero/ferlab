var http = require('http');
var port = 80;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Coming soon...\n');
}).listen(port);
console.log('Server running at port:' + port);