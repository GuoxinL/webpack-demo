/**
 * Created by guoxin on 17-7-12.
 */
var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/',
        filename: './bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

};
