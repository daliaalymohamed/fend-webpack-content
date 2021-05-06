const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                  // [style-loader](/loaders/style-loader)
                  { loader: 'style-loader' },
                  // [css-loader](/loaders/css-loader)
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  // [sass-loader](/loaders/sass-loader)
                  { loader: 'sass-loader' }
                ]
              }
        ]
    }
}
