const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./client/js/index.js',
          './client/css/main.styl',
          'webpack-hot-middleware/client?path=/__webpack_hmr'
    ],
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public/')
   },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'react-hot!babel-loader?presets[]=es2015,presets[]=stage-2,presets[]=react',
        exclude: /node_modules/
      },
      {
          test: /\.styl$/,
          loader: 'style-loader!css-loader!stylus-loader'
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  debug: true,
  devtool: "#inline-source-map"
};
