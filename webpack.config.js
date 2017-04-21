module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    entry: {
        "index": "./src/main/index.js"
    },
    output: {
        filename: "./dist/index.js"
    },
    target: "electron"
};