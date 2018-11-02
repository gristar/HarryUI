const path = require('path');
const HtmlWebpackPlugin = require('html-webapck-plugin');

module.exports = {
    entry: '../src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/, use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.ts$/, use: 'ts-loader'},
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};
