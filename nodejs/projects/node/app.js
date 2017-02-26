var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Parser = require('node-dbf');

//body parser to parse json or url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var parser = new Parser('invoice.dbf');

parser.on('start', function(p) {
    console.log('dBase file parsing has started');
});

parser.on('header', function(h) {
    console.log('dBase file header has been parsed');
});

parser.on('record', function(record) {
    console.log(record);
});

parser.on('end', function(p) {
    console.log('Finished parsing the dBase file');
});

parser.parse();

//building route ---------- **** ------------
app.get('/', function(req, res){
  res.send('happy to be here');
});


//-------end route---------

var port = 8080;

app.listen(port, function(){
  console.log('app listening to port: '+ port);
});
