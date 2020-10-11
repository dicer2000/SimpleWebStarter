
var express = require('express');
var app = express();
const request = require('request');
const sql = require('mssql');
//const routes = require( "./routes" );


// Set up the server
// process.env.PORT is related to deploying on AWS
var server = app.listen(process.env.PORT || 5000, listen);
module.exports = server;

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://' + host + ':' + port);
}

// Set the folder for public items
path = require('path'),
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
publicDir = path.join(__dirname,'public');
app.use(express.static(publicDir))
app.set('views', __dirname);
app.use(express.urlencoded({ extended: true }))