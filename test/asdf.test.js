var should = require('should');
var superagent = require('superagent');
var childProcess = require('child_process');
var path = require('path');
var asdf = require('..');

var ASDF_BIN_PATH = path.join(__dirname, '../bin/asdf');

describe('test/adsf/test.js', function () {
  var asdfProcess;

  afterEach(function () {
    if (asdfProcess) {
      asdfProcess.kill();
    }
  });

  it('should be ok', function () {
    'ok'.should.be.ok;
  });

  it('should 404 when no index.html in dir', function (done) {
    asdfProcess = childProcess.exec(ASDF_BIN_PATH);
    setTimeout(function () {
      superagent.get('http://localhost:5000')
        .end(function (err, res) {
          should.not.exists(err);
          res.status.should.equal(404);
          done();
        });
    }, 300);
  });

  it('should work with -p and -d', function (done) {
    asdfProcess = childProcess.exec(ASDF_BIN_PATH + ' -d test -p 3000');
    setTimeout(function () {
      superagent.get('http://localhost:3000')
        .end(function (err, res) {
          should.not.exists(err);
          res.status.should.equal(200);
          res.text.should.equal('hello world\n');
          done();
        });
    }, 300);
  });
});
