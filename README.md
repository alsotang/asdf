## A tiny static web server

[![Build Status](https://travis-ci.org/alsotang/asdf.svg?branch=master)](https://travis-ci.org/alsotang/asdf)
## Install

`$ npm i -g asdf` 
or
`$ yarn global add asdf`

## Usage

** ONLY FOR DEVELOPMENT **

assume you have a static file dir : `/home/alsotang/d3js`

```bash
$ cd /home/alsotang/d3js
$ asdf
Listening on http://127.0.0.1:5000 (directory: /home/alsotang/d3js)
```

then you can visit `http://127.0.0.1:5000` from browser.

```bash
  Usage: asdf [options]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -p, --port <port>  which port to use, default is 5000
    -H, --host <host>  which address to listen on, default is 127.0.0.1
    -d, --dir <dir>    which dir to serve, default is dir where you call `adsf`
```

## License

MIT
