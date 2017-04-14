var express = require('express')
var srv = express()
var bodyParser = require('body-parser')
var session = require('express-session')

srv.use(bodyParser.urlencoded({
	extended: true
	
}))
srv.use(bodyParser.json())

srv.use(session({
    secret : "alaki",
    resave : false,
    saveUninitialized : true
})) ;


srv.listen(3000,()=>{
	console.log("server is listenning on port 3000!!")
})

srv.use("",(req,res,next)=>{
	console.log("first middleware")
	next()
})
srv.use("",(req,res,next)=>{
	console.log("second middleware")
	next()
})

srv.get("/",(req,res,next)=>{
	console.log("get request recieved!")
	res.sendFile(__dirname+"/home.html")
})


srv.post("/login",function(req,resp,next){
	if (req.session.username == undefined){
		req.session.username = req.body.username
		console.log(req.session)
		resp.json({status : true, msg : "sabt nam shodi!"})
	}
	else{
		console.log(req.session)
		resp.json({status : false , msg : "tou ke ghablan sabt nam karde boudi :|"})
	}
})

srv.get("/api",(req,res,next)=>{
	console.log("api khast")
	res.json({name:"milad",age:"23",degree:"master"})
})

srv.post("/post",(req,res,next)=>{
	console.log(`name: ${req.body.name}`)
	console.log(`age: ${req.body.age}`)
	console.log(`degree: ${req.body.degree}`)
	res.end("Done!")
	//res.render("Done!")

})


srv.get("/api/:id",(req,res,next)=>{
	console.log(`alan tou ${req.params.id} hast`)
	console.log(req)
	console.log(req.baseUrl)
	console.log(req.ip)
	console.log(req.path)
	console.log(req.query)
	res.redirect("/")
})