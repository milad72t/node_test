var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection
db.on('error',(err)=>{
	console.log('erro with db: ',err)
})
db.on('open', ()=> {
	console.log('DB connected')
})
const Schema = mongoose.Schema
const TaskSchema = new Schema({
	title: {type:String, require:true},
	done: {type:Boolean}
})

var TaskModel = mongoose.model('TaskModel',TaskSchema)

app.use(bodyParser.urlencoded({
	extended: true
	
}))
app.use(bodyParser.json())

app.get("/",(req,res,next)=>{
	res.sendFile(__dirname+"/home.html")
})

app.get('/task',(req,res) =>{

	 TaskModel.find({},(err,tasks)=>{
	 	//console.log(tasks)
	 	var str = ""
	 	for (var attr of tasks ){
	 		//console.log(attr)
			str += `id : ${attr._id}`+'<br>'+`title : ${attr.title}`+'<br>'+`done : ${attr.done}` +'<br>'+ "#############################"+"<br>"
	
	    }
		res.send(str)
	})
})

app.post('/task',(req,res)=>{

	var aTask = new TaskModel({title:req.body.title,done:req.body.done})
	aTask.save((err)=>{})
	res.send("Done!")
})

app.post('/task/:taskID',(req,res)=> {
	console.log("in delete section")
	
	TaskModel.findById(req.params.taskID , (err,aTask)=>{
		aTask.remove((err)=>{
		})
		res.end("delete")
	})
})

app.post("/test",(req,res)=>{
	console.log(req.body.title,typeof(req.body.title))
	console.log(req.body,typeof(req.body))
	res.end("!")
})

app.put('/task/:taskID',(req,res,next)=>{
	TaskModel.findById(req.params.taskID,(err,aTask)=>{
		if (req.body.hasOwnProperty('title') || req.body.hasOwnProperty('done')){
			if (req.body.hasOwnProperty('title')){
				aTask.title = req.body.title
				if (req.body.hasOwnProperty('done')){
					aTask.done = (req.body.done=='true')					
				}
			}
			else{
				aTask.done = (req.body.done=='true')	
				
			}
			aTask.save((err)=>{})
			res.end("update Done!")
		}
		else{
			res.end("invalid body")
		}
	})
})

app.listen(3000,() => {
	console.log('listennig 3000')
})


