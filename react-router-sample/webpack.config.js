var webpack = require('webpack');


module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "index.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts|tsx?$/, loader: "ts-loader" },
        ]
    },
    externals: {
        // "node/npm module name": "name of exported library variable"
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
