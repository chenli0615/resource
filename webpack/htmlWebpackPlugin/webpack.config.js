var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].bundle.js?v=[chunkhash]',
        publicPath: 'http://cdn.com/'

    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'a.html',
            inject: false,
            title: "aaa",
            chunks: ["main", "a"]

        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            inject: false,
            title: "bbb",
            chunks: ["main", "b"]
        })
    ]
}