const http = require("http");


const server = http.createServer((req,res )=>{
    let avant;
    try {
      avant = performance.now()
      if (req.url === "/") {
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>Hello World Samuel</h1>');
        res.end();
      } else {
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>404 Methode non authorise</h1>');
        res.end()
      }
    } catch (err) {
      res.writeHead(500, {'content-type':'text/html'});
      res.write('<h1>500 Erreur Interne au Serveur</h1>');
      res.end()
    }
  } );


server.listen(5000);
console.log('serveur ecoute sur le port 5000');
