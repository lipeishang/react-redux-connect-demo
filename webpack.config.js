var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',//由bundle.js映射到origin文件，容易在浏览器调试
    entry: __dirname + "/public/src/main.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        /*test:  A regular expression that matches the file extensions that should run through this loader (Required).
         loader:  The name of the loader (Required).
         include / exclude:   Optional setting to manually set which folders and files the loader should explicitly add or ignore.
         query:  The query setting can be used to pass Additional options to the loader.
         */
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "file-loader"},
            {test: /\.jpg$/, loader: "file-loader"}
        ]
    }
};