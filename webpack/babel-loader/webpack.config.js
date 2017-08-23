var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: './js/[name].bundle.js?v=[chunkhash]'

    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, './node_modules/'),
            include: path.resolve(__dirname, './src/'),
            query: {
                presets: ['latest']
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'

        })
    ]
}