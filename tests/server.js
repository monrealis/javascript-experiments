var http = require('http');
var handle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello')
};
http.createServer(handle).listen(8080, 'localhost');