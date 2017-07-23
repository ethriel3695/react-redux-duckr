var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body',
})

const config = {
    entry: [
        './app/index.js',
    ],
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}

module.exports = config;