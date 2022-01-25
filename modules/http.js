const http = require('http');

http.createServer(function(request, response){
    console.log('New request!');
    console.log(request.url);

    switch(request.url){
        case '/hello':
            response.write('Hello, I already know how to use HTTP in Nodejs')
            break;
        
        default:
            response.write('Error 404')

    }

    response.end();
}).listen(3000);

console.log("Listen http on port 3000")