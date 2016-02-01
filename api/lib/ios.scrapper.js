'use strict';

const cheerio = require('cheerio');

const iOSScrapper = function (_baseUrl, _httpClient) {
  this.baseUrl = _baseUrl;
  this.httpClient = _httpClient;
};

iOSScrapper.prototype.scrape = function(appId) {

  let url = this.baseUrl + appId;

  return new Promise((resolve, reject) => {

    // TODO - working: tidy up everything
    this.httpClient.get(url).then(body => {

      let $ = cheerio.load(body);
      let customerReviews = $('.customer-review');
      let reviewCount = customerReviews.find('.customerReviewTitle').length;

      if (reviewCount > 0) {
        let results = [];

        for (let i = 0; i < reviewCount; i++) {
          let review = customerReviews.find('.customerReviewTitle').get(i);
          let starRating = customerReviews.find('.rating')[i].attribs['aria-label'];
          let stars = starRating ? starRating.replace(/(?=star)\w+/, '') : '';
          let rev = {text: review.children[0].data, rating: stars};
          results.push(rev);
        }

        resolve({status:'success', message: 'Reviews found', reviews: results});

      } else {
        resolve({status:'empty', message: 'no results found', reviews: [] });
      }

    })
      .catch(err => {
        resolve({status: 'failed', message: 'Error requesting app reviews. AppID is invalid', reviews: [] });
      })
  });

};

module.exports = iOSScrapper;