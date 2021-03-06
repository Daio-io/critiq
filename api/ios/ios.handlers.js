'use strict';

const ParamFilter = require('../lib/param.filter');

exports.getReviews = function *() {

  let appId = this.query.appid;
  let version = this.query.version;
  let stars = this.query.stars;

  let data = yield this.Scrapper.scrape(appId);

  let paramFilter = new ParamFilter(data.reviews);
  data.reviews = paramFilter.filter('version', version)
    .filter('stars', stars)
    .results();

  this.body = data;

};