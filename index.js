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
server.use(express.static(procressDir));


server.listen(5000, function () {
  console.log('static server is listening at port http://localhost:5000');
  console.log('static dir is ' + procressDir);
});
