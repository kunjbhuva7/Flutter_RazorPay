var http = require('http');
http.creatServer(function(req,res){
res.write("Hello");
res.end();
}).listen(3900)