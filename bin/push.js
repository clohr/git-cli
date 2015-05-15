#!/usr/local/bin/node

var shell = require('shelljs');
var arg = process.argv.indexOf('-b');
var branch = (arg) ? process.argv[arg + 1] : 'master';
shell.exec('git push -u origin ' + branch);