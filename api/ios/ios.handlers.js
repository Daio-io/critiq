'use strict';

exports.getReviews = function *() {

  let appId = this.query.appid;
  let appName = this.query.appname;

  this.body = yield this.scrapper.scrape(appName, appId);

};