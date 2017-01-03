const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./client/js/index.js',
          './client/css/main.styl'
    ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader?presets[]=es2015,presets[]=stage-2,presets[]=react',
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
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
