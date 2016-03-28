var webpack = require('webpack');


module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts|tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};