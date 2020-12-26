const path = require('path');
const package = require('./package');

module.exports = {
    target: 'node',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [],
    entry: {
        main: './public/dist/background.js',
        // main: './src/Entity/index.ts',
    },
    mode: 'production',
    output: {
        // libraryTarget: "commonjs2",
        // libraryExport: 'default',
        // library: 'linkedinbot',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'public'),
        filename: `background.js`,
        publicPath: "*/"
    },
};

// uglifyjs --compress --mangle -- input.js
