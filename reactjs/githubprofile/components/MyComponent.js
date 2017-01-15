var React = require('react');
var ReactDOMServer = require('react-dom/server');

var MyComponent = React.createClass({
	render: function(){
		return(<div>
					<h1>My Component</h1>
					<p>This is a component</p>
				</div>
			);
	}
});

//make component accessible from outside this file
module.exports.MyComponent = MyComponent