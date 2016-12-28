const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);


// serve static assets normally
app.use(express.static('public'))


app.use(require("webpack-dev-middleware")(compiler, {
    log: console.info,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve('public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
