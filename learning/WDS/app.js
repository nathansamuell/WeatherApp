const http = require('http'); // imports http module from node js to the https variable
const fs = require('fs');
const port = 3000; //used later on to specifiy the port for our server

//create server below
const server = http.createServer(function (req, res) {   //this function lists all the ways the server handles requests
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.write(data);
        }
        res.end();
    })
    
});

server.listen(port, function(error) { // this function handles the response for any errors
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
})

