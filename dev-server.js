const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack')
const host = '0.0.0.0';
const port = 9001;
const webpackConfig = require('./webpack.config.js');

webpackConfig.entry.app.unshift("webpack-dev-server/client?http://" + host + ":" + port + "/");

let compiler = webpack(webpackConfig);

let webpackMiddlewareConfig = {
    contentBase: "./public",
    quiet: false,
    noInfo: false,
    stats: {
        colors: true
    },
    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
       aggregateTimeout: 300,
       poll: true
   },
}

let server = new WebpackDevServer(compiler, webpackMiddlewareConfig);

server.listen(port, host, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('-------------------------');
        console.log('Local web server runs at http://' + host + ':' + port);
        console.log('-------------------------');
    }

});
