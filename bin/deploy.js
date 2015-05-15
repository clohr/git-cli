#!/usr/local/bin/node

var shell = require('shelljs');
var messageArg = process.argv.indexOf('-m');
var message = (messageArg) ? process.argv[messageArg + 1] : 'Updates';
var branchArg = process.argv.indexOf('-b');
var branch = (branchArg) ? process.argv[branchArg + 1] : 'master';
shell.exec('git-cli-commit -m "' + message + '" && git-cli-push -b ' + branch);