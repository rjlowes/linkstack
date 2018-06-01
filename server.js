'use strict';

const path = require('path');
const rootDir = __dirname + path.sep + 'app' + path.sep + 'server' + path.sep;
const app = require('./src/server/config/lib/app');

const server = app.start(rootDir);
