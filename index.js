const http = require('http');


http.createServer(function mainHandler(request, response) {
  
  response.writeHeader(202, {'Content-Type': 'text/plain'});
  
  response.end('Hello, Mundo');
  
}) 
.listen(8081, '0.0.0.0');

console.log('Server is running on port 8081');