'use strict';

const koa = require('koa');
const http = require('http');
const app = koa();
const config = require('./api/config/app.config');

// BOOTSTRAP APP
require('./api/config/app.bootstrap')(app);
// SET UP ROUTES
require('./api/config/app.routes')(app);


const server = http.createServer(app.callback());

server.listen(config.PORT, () => {

  console.log('Server started on port:', config.PORT);

});