const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


var config = require('./public/app/js/config.js');
var User = require('./public/app/models/user.js');


var port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/home', express.static(__dirname + '/public'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use('/ng', express.static(__dirname + '/node_modules/angular'))
app.use('/ngRoute', express.static(__dirname + '/node_modules/angular-route'))
app.use('/ngResource', express.static(__dirname + '/node_modules/angular-resource'))
app.use('/jQuery', express.static(__dirname + '/node_modules/jquery/dist'))

app.use(morgan('dev'));

app.get('/home', function(req,res){
  res.sendFile('index.html')
});

app.listen(port, function(err){
  if (err) throw err;
  console.log('Server started at ' + port)
})
