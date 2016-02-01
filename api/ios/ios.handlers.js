'use strict';

exports.getReviews = function *() {

  let appId = this.query.appid;

  this.body = yield this.scrapper.scrape(appId);

};