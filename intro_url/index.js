const http = require("http");
const url = require("url");

const webServer = http.createServer(function(req, res){
    let r = url.parse(req.url);
    let path = r.pathname;
    console.log(path);
    var str ='';
    switch(path) {
        case '/':
            res.writeHead(200)
            str = 'Bienvenue';
            break;
        case '/hello':
            res.writeHead(200, {"Content-type": "text/html; charset-utf-8"});
            str = "<h1>Hello world !</h1>";
            break;
        default:
            res.writeHead(404, {"Content-type": "text/plain; charset-utf-8"});
            str = "Non trouvé !";
            break;
    }
    res.end(str);
});

webServer.listen(8080);

//https://github.com/mdevoldere/nodejs_intro