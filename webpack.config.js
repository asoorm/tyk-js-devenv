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
        config.entry.mocks = "./src/mocks.js";
        config.entry.stubs = "./src/stubs.js";
    }

    return config;
};
