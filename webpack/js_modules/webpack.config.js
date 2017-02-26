//access path module given by nodejs rather than the static 
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),//make sure the path is correct and locate to 'build' folder
		filename: 'bundle.js', // bundle.js is the common webpack output name
		puqblicPath: 'build/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',//tell westpac loader that we want to use
				test: /\.js$/ //apply to js files only

			},
			{
				// use: ['style-loader','css-loader'], //style-loader and css-loader have to be in order
				loader: ExtractTextPlugin.extract({//use this to create seperate css files rather than use in the above line
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
			{

				//image-webpack-loader plugin-> check if the image is small or large
				//url-loader will decide 
				//- will include the image in bundle.js as a raw data if its small
				//- include the raw image in the output directory
				//* result: performance
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [//the order is important
					{
						loader: 'url-loader',
						options: {limit: 40000}//save to seperate file if file size > 40KB
					},
					'image-webpack-loader'
				]
			}
		]
	},
	plugins:[
		new ExtractTextPlugin('style.css')//load any css files and dump in here rather than the bundle.js file only
	]
};

module.exports = config;