var express = require('express');
var server = express();

var procressDir = process.cwd();

server.get('/', function (req, res) {
  res.redirect('/index.html');
});

server.use(function (req, res, next) {
  console.log(new Date(), req.url);
  next();
});


exports = module.exports = server;

var startServer = function (port, dir) {
  dir = dir || procressDir;
  port = port !== void 0 ? port : 5000;

  server.use(express.static(dir));

  server.listen(port, function () {
    console.log('static server is listening at port http://localhost:' + port);
    console.log('static dir is ' + dir);
  });
};

exports.startServer = startServer;
