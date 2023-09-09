'use strict';

const timer = require('..');
const assert = require('assert').strict;

assert.strictEqual(timer(), 'Hello from timer');
console.info('timer tests passed');
