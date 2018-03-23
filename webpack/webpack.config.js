"use strict";
exports.__esModule = true;
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var APP = __dirname;
var APP_CONTEXT = '/everest';
var entry = {
    'cherub': './client/cherub/index.js',
    'admin': './client/admin/index.js'
};
var output = {
    path: path.resolve(APP, '/dist'),
    filename: 'public/[name].js',
    publicPath: APP_CONTEXT
};
var rules = [
    {
        test: /\.(png|jpg|gif)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: function (file) {
                    if (process.env.NODE_ENV.trim() == 'development') {
                        return '[name].[ext]?[hash]';
                    }
                    return '/public/images/[name].[md5:hash:hex:7].[ext]';
                }
            }
        }
    },
    {
        test: /\.css$/,
        use: [
            {
                loader: "file-loader"
            },
            {
                loader: "extract-loader"
            },
            {
                loader: "css-loader"
            },
        ]
    },
    {
        test: /\.scss$/,
        // use: ExtractTextPlugin.extract({
        //     fallback: 'style-loader',
        //     use: ['css-loader', 'sass-loader']
        // })
        use: [
            {
                loader: "file-loader"
            },
            {
                loader: "extract-loader"
            },
            {
                loader: "css-loader"
            },
            {
                loader: 'sass-loader'
            }
        ]
    },
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            { loader: 'babel-loader' },
        ]
    },
    {
        test: /\.(woff|ttf|eot|svg|woff2)/,
        use: {
            loader: 'file-loader',
            options: {
                name: function (file) {
                    if (process.env.NODE_ENV == 'development') {
                        return '[name].[md5:hash:hex:7].[ext]';
                    }
                    return '/public/fonts/[name].[md5:hash:hex:7].[ext]';
                }
            }
        }
    }
];
var plugins = [
    new CleanWebpackPlugin(['../resources/static']),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.ProvidePlugin({
        'React': 'react'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './client/template.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        filename: 'admin.html',
        template: './client/template.html',
        chunks: ['admin']
    })
];
var port = '3001';
exports["default"] = {
    entry: entry,
    output: output,
    module: {},
    // resolve,
    // resolveLoader,
    devServer: {
        https: true,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        port: port
    }
};
