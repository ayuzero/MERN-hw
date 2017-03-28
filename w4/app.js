var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    
    else if(req.url === '/about'){
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    
    else{
        res.writeHead(404,{'Content-Type' : 'text/html'});
        var error = fs.readFileSync(__dirname + '/404staus.html' , 'utf8');
        res.end(error);
    }
}).listen(3000,'127.0.0.1');
