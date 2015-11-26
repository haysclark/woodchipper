#!/usr/bin/env node

'use strict';

var cli = require('../lib/cli'),
	argv = require('minimist')(process.argv.slice(2));

/**
 * treating the CLI as a module for better test coverage.
 */
cli.argv(argv);
