/*
    ./webpack.config.js
*/
const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            __dirname + '/node_modules',
            __dirname + '/src/client/scripts'
        ]
    },
    entry: ["babel-polyfill", './src/client/scripts/main.jsx'],
    output: {
        path: path.resolve('./public'),
        filename: 'scripts/main.build.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
