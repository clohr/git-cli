#!/usr/local/bin/node

var shell = require('shelljs');
var arg = process.argv.indexOf('-m');
var message = (arg) ? process.argv[arg + 1] : 'Updates';
shell.exec('git add -A . && git commit -a -m "' + message + '"');