'use strict';

exports.getReviews = function *() {

  let appId = this.query.text;

  let data = yield this.Scrapper.scrape(appId);

  let attachments = data.reviews.map(data => {
    return {title: `${data.version} : ${data.stars} stars : ${data.short}`, text: data.full};
  });

  this.body = {
    response_type: "in_channel",
    text: "Latest iOS AppStore reviews for app: " + data.app,
    attachments: attachments.splice(0, 5)
  };

};