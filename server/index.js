const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

app.use(express.static('public'))

if (process.env.NODE_ENV === 'development') {
    var webpack = require('webpack');
    var webpackConfig = require('../webpack.config.dev');
    var compiler = webpack(webpackConfig);
    app.use(require("webpack-dev-middleware")(compiler, {
        log: console.info,
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler));
}

app.get('*', function (request, response){
  response.sendFile(path.resolve('public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
