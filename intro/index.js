const http = require("http");

//console.log("Hello world !");

const webServer = http.createServer(function(req, res){
    res.writeHead(200);
    let hello = "Hello world !";
    res.end(hello);
});

webServer.listen(8080);