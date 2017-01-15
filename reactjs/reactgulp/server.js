var express = require("express");
var fs = require('fs');//file system module
var path = require("path");
var bodyParser = require("body-parser");
var React = require('react');
var ReactDOMServer = require('react-dom/server');
require('babel/register');
var exphbs = require('express-handlebars');

//declare External React app js MyComponent file
var MyComponent = React.createFactory(require('./components/MyComponent.js').MyComponent);
var markup = ReactDOMServer.renderToString(MyComponent());

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//create an object to represent product
var PRODUCTS_FILE = path.join(__dirname, 'client/exercise/products/products.json');

//Set Port
app.set('port', (process.env.PORT || 3000));

//set static path for the client folder
app.use(express.static(path.join(__dirname, 'client')));

//BodyParser Middleware
app.use(bodyParser.json());//server json content for the application
app.use(bodyParser.urlencoded({extended: true}));


//create route
//-------------------------------------------------

//get products using GET
app.get('/api/products', function(req, res){
	fs.readFile(PRODUCTS_FILE, function(err, data){
		res.setHeader('Cache-Control', 'no-cache');
		res.json(JSON.parse(data));
	});
});


//add products using POST
app.post('/api/products', function(req, res){
	fs.readFile(PRODUCTS_FILE, function(err, data){
		var products = JSON.parse(data);
		products.push(req.body);
		fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 3), function(err){
			res.setHeader('Cache-Control', 'no-cache');
			res.json(products);
		});
	});
});

app.get('/server', function(req, res){
	res.render('home', {
		markup: markup
	});
});

//------------END Route-------------------------------------

//Start Server
app.listen(app.get('port'), function(){
	console.log('Server has started on port: ' + app.get('port'));
});