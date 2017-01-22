var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'], 
        autoWatch: true,
        frameworks: ['mocha'], 
        files: [
            'entry.tests.js' 
        ],
        preprocessors: {
            'entry.tests.js': ['webpack', 'sourcemap'] 
        },
        autoWatchBatchDelay: 200000,
        reporters: ['dots'], 
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'jsx-loader?harmony=true'
                }, ]
            }
        },
        webpackServer: {
            noInfo: true 
        }
    });
};