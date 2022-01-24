const http = require('http');

http.createServer(function(request, response){
    console.log('New request!');
    console.log(request.url);

    response.write('Hello, I already know how to use HTTP in Nodejs')

    response.end();
}).listen(3000);

console.log("Listen http on port 3000")