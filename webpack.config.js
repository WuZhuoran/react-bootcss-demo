const webpack = require('webpack');
const Uglify = webpack.optimize.UglifyJsPlugin
const path = require('path');
const env = process.env.NODE_ENV || "development"

let plugins = []

if (env === 'production') {
  plugins.push(new Uglify({
    minimize: true
  }));
  outputFile = "app.bundle.min.js";
} else {
  outputFile = "app.bundle.js";
}

module.exports = {
  entry: {
    app: ['./src/app.js'],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: outputFile
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(woff|woff2)$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(png|ttf|eot|svg)$/,
      loader: "file"
    }]
  },
  plugins: plugins
}
