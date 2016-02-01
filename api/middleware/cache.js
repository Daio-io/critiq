'use strict';

exports.setCache = function*(next) {

  this.set('Cache-Control', 'max-age=' + this.cache);
  yield next;

};