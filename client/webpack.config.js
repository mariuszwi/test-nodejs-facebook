const CopyPlugin = require('copy-webpack-plugin');
const path =  require('path');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src/scripts/main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        },
        {
            test: /\.html$/,
            loader: "html"
        }
        ]
    },

    plugins: [
        new CopyPlugin([{
            from: "src/index.html"
        }])
    ]
}