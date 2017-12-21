const should = require('should');
const superagent = require('superagent');
const childProcess = require('child_process');
const path = require('path');
const asdf = require('../');

const ASDF_BIN_PATH = path.join(__dirname, '../bin/asdf');

describe('test/adsf/test.js', () => {
  let asdfProcess;

  afterEach(() => {
    if (asdfProcess) {
      asdfProcess.kill();
    }
  });

  it('should be ok', () => {
    'ok'.should.be.ok;
  });

  it('should 404 when no index.html in dir', (done) => {
    asdfProcess = childProcess.exec(ASDF_BIN_PATH);
    setTimeout(() => {
      superagent.get('http://localhost:5000')
        .end(function (err, res) {
          should.not.exists(err);
          res.status.should.equal(404);
          done();
        });
    }, 500);
  });

  it('should work with -p and -d', (done) => {
    asdfProcess = childProcess.exec(ASDF_BIN_PATH + ' -d test -p 3000');
    setTimeout(() => {
      superagent.get('http://localhost:3000')
        .end((err, res) => {
          should.not.exists(err);
          res.status.should.equal(200);
          res.text.should.equal('hello world\n');
          done();
        });
    }, 500);
  });
});
