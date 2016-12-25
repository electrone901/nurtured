var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
// var apiRouter = require('./routes/api.js')
var db = require('./models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('./public')) // absolute path /
// ========================================

// CREATE A POST
app.post('/api/post',(req,res)=>{
	db.Post.create(
		{ title: req.body.title,
		  image: req.body.image,	  
		  body: req.body.body,	  
		  author: req.body.author,	  
		  tags: req.body.tags,	
		  price: req.body.price,  
		  phone: req.body.phone, 
		  year: req.body.year,
		  brand: req.body.brand,
		  location: req.body.location,    
		  payments_accepted: req.body.payments_accepted,
		  UserId: req.body.userId 
	})
	.then((data)=>res.send(data))
	.catch((err)=>res.send(err.message))
})


// GET ALL POST
app.get('/api/post',(req,res)=>{
	console.log('are u')
	db.Post.findAll()
	.then((data)=>res.send(data))
})

// GET POST BY ID 
app.get('/api/post/:id',(req,res)=>{
	db.Post.findById(req.params.id)
	.then((data)=>res.send(data))
})


// any is a key I defined,use to access the req. 
app.get('/api/post/search/:any',(req,res)=>{
	console.log('req.params========',req.params)
	db.Post.findAll({
	  where: {
	    title: {
	      $like: '%' + req.params.any + '%'
		}
	  }
	})
	.then((data)=>res.send(data))
})


//DELETE POST
app.delete('/api/post/:id',(req,res)=>{
	db.Post.destroy({ where: { id: req.params.id } })
	.then((id)=>res.send(id.title+' has been deleted'))
})


//UPDATE POST
app.put('/api/post/:id',(req,res)=>{
	let body = req.body;
	db.Post.findOne({ where: { id: req.params.id } })
	.then((postInfo)=>postInfo.update({
		  title: body.title,
		  image: body.image,	  
		  body: body.body,	  
		  author: body.author,	  
		  tags: body.tags,	
		  price: body.price,  
		  phone: body.phone, 
		  year: body.year,
		  brand: body.brand,
		  location: body.location,    
		  payments_accepted: body.payments_accepted
	})
   )
	.then((data)=> res.send(data))
})


// GET POST BY DATE 
 // USE FOR NEWST FIRST 
app.get('/api/post/sort/by-date',(req,res)=>{
	db.Post.findAll({ order: [ ['createdAt', 'ASC'] ] })
	.then((data)=>res.send(data))
})


// GET FIRST FIVE POST
app.get('/api/post/sort/by-five',(req,res)=>{
	db.Post.findAll({ order: [ ['createdAt', 'ASC'] ], limit: 10 })
	.then((data)=>res.send(data))
}) 


///======  USER =======
// CREATE USER
app.post('/api/user',(req,res)=>{
	db.User.create(
		{ username: req.body.username, 
		  password: req.body.password, 
		  email: req.body.email 
	})
	.then((data)=>res.send(data))
})



// UPDATE USER
app.put('/api/user/:id',(req,res)=>{
	let body = req.body;
	db.User.findOne({ where: { id: req.params.id } })
	.then((userInfo)=>userInfo.update({
		  username: req.body.username, 
		  password: req.body.password, 
		  email: req.body.email 
	})
   )
	.then((data)=> res.send(data))
})



// DELETE USER
app.delete('/api/user/:id',(req,res)=>{
	db.User.destroy({ where: { id: req.params.id } })
	.then((id)=>res.send(id+' has been deleted'))
})


//GET ALL USER
app.get('/api/user',(req,res)=>{
	db.User.findAll()
	.then((data)=>res.send(data))
})

//GET USER BY ID
app.get('/api/user/:id',(req,res)=>{
	db.User.findById(req.params.id)
	.then((data)=>res.send(data))
})


// app.use(apiRouter)
db.sequelize.sync().then(function() {
  app.listen(3000, ()=>console.log('YAY...!! Listening to port 3000'))
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

