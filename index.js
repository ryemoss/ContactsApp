const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var mongodburl = '';

// setup express app
const app = express();

// connect to local mongodb
mongoose.connect('mongodb://localhost/contactgo')
.then(()=> {})
.catch(()=> { console.log('Error Connecting to the Mongodb')});
/*
mongoose.connect(mongodburl, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  else {
    console.log("mongodb connected");
  }
});*/

mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// init routes
app.use('/api', require('./routes/api.js'));

// error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
});

// listen
var server = app.listen(process.env.port || 4000, function(){
  var port = server.address().port;
  console.log("Listening on port", port);
});
