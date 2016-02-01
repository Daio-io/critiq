'use strict';

const tooly = require('tooly');

exports.validateiOSParams = function*(next) {

  let params = this.query;

  if (tooly.existy(params.appid) && tooly.existy(params.appname)) {
    yield next;
  } else {
    this.body = {status: 'failed', message: 'You must provide both appid and appname query params', response: []}
  }

};