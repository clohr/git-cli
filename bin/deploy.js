#!/usr/local/bin/node

var shell = require('shelljs');

shell.exec('git-cli-commit && git-cli-push');