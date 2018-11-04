var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');

var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    entry: {
        app: './scripts/index.js',
        appStyles: [
            './styles/styles.scss',
        ],
        vendor:[
            '@babel/polyfill',
            'jquery'
        ],
    },      
    output: {
        filename: '[name].[chunkhash].js',
    },
    optimization:{
        splitChunks: {
            cacheGroups:{
                vendor:{
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true, 
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',                
            },
            {
                test:/\.scss$/,
                use: [                   
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [                   
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ],
            },
        ],
    },
    devServer: {
        port: 8080,
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist
            template: 'index.html', //Name of the template in ./src
            hash: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        }),
    ]
};