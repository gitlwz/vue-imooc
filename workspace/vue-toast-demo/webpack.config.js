var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'http://www.baidu.com',
        filename:'vue-toast.js',
        libraryTarget: "umd",
        library: 'VueToast'
    },
    module:{
        rules:[
            {
               test:/\.js$/,
               loader:'babel-loader',
               include:path.join(__dirname,'src'),
               exclude:/node_modules/,
               query:{
                   presets:['env']
               }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
                options:{
                    loaders:{
                        scss:'style-loader!css-loader!postcss-loader!sass-loader'
                    },
                    extractCSS: true
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("index.css")
    ]
}