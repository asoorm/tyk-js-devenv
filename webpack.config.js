const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {

    let config = {
        entry: {
            index: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'dist.js'
        }
    }

    console.log("env: " + env);
    console.log("argv: " + JSON.stringify(argv));

    if (argv.mode === 'development') {
        config.output.filename = 'dev.js';
        config.plugins = [
            new webpack.ProvidePlugin({
                log: "./stubs.js",
                rawLog: "./stubs.js",
                b64enc: "./stubs.js",
                b64dec: "./stubs.js",
                TykMakeHttpRequest: "./stubs.js",
                TykJsResponse: "./stubs.js",
                mocks: "./mocks.js",
            }),
        ]
    }

    return config;
};
