const express = require('express');
const path = require('path');
const dateFormat = require('dateformat');

const procressDir = process.cwd();
const server = express();

server.use((req, res, next) => {
  console.log(dateFormat(new Date(), '[yyyy-mm-dd hh:MM:ss:l]'), server.locals.hostname + req.url);
  next();
});

server.get('/', (req, res) => {
  res.sendFile(server.locals.dir + '/index.html');
});

exports = module.exports = server;

const startServer = (port = 5000, dir, host = '127.0.0.1') => {
  dir = dir ? path.resolve(procressDir, dir) : procressDir;
  port = Number(port);

  server.use(express.static(dir));

  // save options
  server.locals.dir = dir;
  server.locals.hostname = `http://${host}:${port}`;

  server.listen(port, host, () => {
    console.log(`Listening on ${server.locals.hostname} (directory: ${dir})`);
  });
};

exports.startServer = startServer;
