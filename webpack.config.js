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
        },
    }

    console.log('env: ' + env);
    console.log('argv: ' + JSON.stringify(argv));

    if (argv.mode === 'development') {
        config.output.filename = 'dev.js';
        config.entry.index = [
            './src/index.js',
            './src/plugins.js',
        ];
        config.plugins = [
            new webpack.ProvidePlugin({
                _: ['underscore', '_'],
                log: ['./shims.js', 'log'],
                rawLog: ['./shims.js', 'rawLog'],
                b64enc: ['./shims.js', 'b64enc'],
                b64dec: ['./shims.js', 'b64dec'],
                TykMakeHttpRequest: ['./shims.js', 'TykMakeHttpRequest'],
                TykJsResponse: ['./shims.js', 'TykJsResponse'],
            }),
        ]
    }

    return config;
};
