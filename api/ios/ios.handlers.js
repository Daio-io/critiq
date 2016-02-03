'use strict';

const tooly = require('tooly');
const paramFilter = require('../lib/param.filter');

exports.getReviews = function *() {

  let appId = this.query.appid;
  let version = this.query.version;
  let stars = this.query.stars;

  let data = yield this.scrapper.scrape(appId);

  // TODO- change this solution
  let filter = paramFilter.filterFunction(data.reviews);
  filter('version', version);
  data.reviews = filter('stars', stars);

  this.body = data;

};