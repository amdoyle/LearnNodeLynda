var express = require('express');
var fs = require('fs');
var app = express();

app.use('/message', function(req, res){
  console.log('user requested endpoint');

  res.send("HELLOOOOOO!");
});

app.use('/users', function(req, res){
  fs.readFile('./data1.json', 'utf-8', function(err, data){
    res.send(data);
  });
});

app.listen(3000);
