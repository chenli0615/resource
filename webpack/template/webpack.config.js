var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

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
            }, {
                test: /\.html$/,
                loader: 'html-loader',

            }, {
                test: /\.tpl$/,
                loader: 'ejs-loader',

            }, {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: "postcss-loader",
                        options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('autoprefixer')(), //CSS浏览器兼容
                            ]
                        }
                    }
                ]
            }, {
                test: /\.less$/,
                use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'less-loader']
            }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'

        })
    ]

}