
//npm install -g nodemon

var fs = require('fs')

 fs.appendFile('./trash.txt','yo',(err) =>{
 	if (err) throw err
 })


fs.readFile('./trash.txt',(err,data) => {
	console.log(err,data.toString())
})




var http = require('http')

var srv = http.createServer()

srv.listen(8001,'127.0.0.1',() => {
	console.log('HTTP Creat!')
})


srv.on('request',(req,res) => {
	
	//console.log(req.method)
	//console.log(req.headers)
	//console.log(req.url)

	var body = []
	req.on('data',(chunk) => {
		body.push(chunk)
	})
	req.on('end',() => {
		var req_date = JSON.parse(body.toString())
	})
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('ok')
} )


var dns = require('dns');

dns.resolve4('www.iust.ac.ir', function (err, addresses) {
  if (err) throw err;

  console.log('addresses: ' + JSON.stringify(addresses));
})















