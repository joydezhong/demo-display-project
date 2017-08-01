var webpack = require('webpack');
var path = require('path');
 
module.exports = {
    context: path.join(__dirname),
    //页面入口文件配置
    entry: {
        index : './src/js/root.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname,
        filename: './src/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015'],
                    plugins: ['react-html-attrs'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
        
};