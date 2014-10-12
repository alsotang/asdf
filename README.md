## A tiny static web server

## install

`$ npm i -g asdf`

## usage

** ONLY FOR DEVELOP **

assume you have a static file dir : `/home/alsotang/d3js`

```bash
$ cd /home/alsotang/d3js
$ asdf
static server is listening at port http://localhost:5000
static dir is /home/alsotang/d3js
```

then you can visit `http://localhost:5000/index.html` from browser.

```bash
  Usage: asdf [options]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -p, --port <port>  which port to use, default is 5000
    -d, --dir <dir>    which dir to serve, default is which dir you call `adsf`
```

## license

MIT
