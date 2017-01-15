var express = require('express');
var fs = require('fs');//file system module
var path = require('path');
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
require('babel/register');
var exphbs = require('express-handlebars');

//declare external react app js file
var MyComponent = React.createFactory(require('./components/MyComponent.js').MyComponent);
var markup = ReactDOMServer.renderToString(MyComponent());

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//set port
app.set('port', (process.env.PORT || 3000));

//set static path for the client folder
app.use(express.static(path.join(__dirname, 'client')));

//body parse middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//route
app.get('/server', function(req, res){
	res.render('home', {
		markup: markup
	});
});

//run app
app.listen(app.get('port'), function(){
	console.log('server running on port: '+ app.get('port'));
});