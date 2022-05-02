const http = require("http");

const server = http.createServer((req,res )=>{
    res.writeHead(200, {'content-type':'text/html'});
    res.write(' Hello World Samuel')
    res.end();
}
);

server.listen(5000);
console.log('serveur ecoute sur le port 5000');


