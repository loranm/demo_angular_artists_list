var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');


var config = require('./api/config.js');
var User = require('./api/models/user.js');


var port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/home', express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/ng', express.static(__dirname + '/node_modules/angular'));
app.use('/ngRoute', express.static(__dirname + '/node_modules/angular-route'));
app.use('/ngResource', express.static(__dirname + '/node_modules/angular-resource'));
app.use('/jQuery', express.static(__dirname + '/node_modules/jquery/dist'));

app.use(morgan('dev'));

var apiRoutes = require('./routes/apiRoutes.js');

app.get('/home', function(req,res){
  res.sendFile('index.html');
});

app.use('/apiRoutes', apiRoutes);

app.listen(port, function(err){
  if (err) throw err;
  console.log('Server started at ' + port);
});
