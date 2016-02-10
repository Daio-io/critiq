'use strict';

const ParamFilter = require('../lib/param.filter');

exports.getReviews = function *() {

  let appId = this.query.text;
  let version = this.query.version;
  let stars = this.query.stars;

  let data = yield this.Scrapper.scrape(appId);

  let paramFilter = new ParamFilter(data.reviews);
  data.reviews = paramFilter.filter('version', version)
    .filter('stars', stars)
    .results();

  let d = {
    "response_type": "in_channel",
    "text": "Latest reviews for app: " + data.app,
    "attachments": data.reviews
  };

  this.body = d;

};