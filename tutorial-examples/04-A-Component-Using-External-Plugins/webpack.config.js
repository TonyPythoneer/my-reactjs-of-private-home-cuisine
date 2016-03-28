module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts|tsx?$/, loader: "ts-loader" }
        ]
    }
};