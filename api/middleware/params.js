'use strict';

const tooly = require('tooly');

exports.validateiOSParams = function*(next) {

  let params = this.query;

  if (tooly.existy(params.appid)) {
    yield next;
  } else {
    this.body = {status: 'failed', message: 'You must provide an appid query param', response: []}
  }

};