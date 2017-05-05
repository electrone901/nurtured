var express = require('express')

// var session = require('express-session')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')

//CALL FILE, CREATE DB
require('./server.py')


// var db = require('./models')

// app.use(function(req, res, next) {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//         next();
// });

// var session_config = {
// 	secret: 'secret key',
// 	name: 'session_id',
// 	resave: false,
// 	saveUninitialized: true
// }



//=====  middleware  ====
// app.use(session(session_config ))  
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('./public')) // absolute path /
// ========================================
const port = process.env.PORT || '5000';
app.listen(port, ()=>console.log('YAY...!! Listening to port 5000 ' + port))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})




