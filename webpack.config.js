const path = require('path')

const config = {
    entry: {
        fa5: './src/font-awesome-5-custom-bundle.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'font-awesome-5-custom-bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = (env, options) => {
    let mode = options.mode === 'production'

    config.devtool = mode
        ? false //'source-map'
        : 'eval-source-map'

    if (mode) {
        config.optimization = {
            minimize: true,
            usedExports: true,
            sideEffects: true
        }
    }

    return config
}