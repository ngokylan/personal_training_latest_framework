var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: false,
        frameworks: ['mocha'],
        files: [
            'entry.tests.js'
        ],
        preprocessors: {
            'entry.tests.js': ['webpack', 'sourcemap']
        },
        autoWatchBatchDelay: 30000,
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