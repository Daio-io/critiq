'use strict';

class iOSScrapper {

  constructor(_baseUrl, _httpClient) {
    this.baseUrl = _baseUrl;
    this.httpClient = _httpClient;
  }

  scrape(appId) {
    let url = `${this.baseUrl}${appId}/sortBy=mostRecent/json`;

    return new Promise(resolve => {

      this.httpClient.get(url).then(body => {

        let data = JSON.parse(body);
        if (data.feed.entry) {
          let reviews = data.feed.entry;

          let appname = reviews[0]['im:name'].label;
          let response = {status: 'success', message: 'Request successful', app: appname, reviews: []};

          // Start at 1 because the first entity is not a review
          for (let i = 1, len = reviews.length - 1; i < len; i++) {
            let review = {};
            review.version = reviews[i]['im:version'].label;
            review.author = reviews[i].author.name.label;
            review.stars = reviews[i]['im:rating'].label;
            review.short = reviews[i]['title'].label;
            review.full = reviews[i]['content'].label;
            response.reviews.push(review);
          }
          resolve(response);
        } else {
          resolve({status: 'emnpty', message: 'No reviews found for appid', reviews: [] });
        }

      })
        .catch(() => {
          resolve({status: 'failed', message: 'Request failed', reviews: [] });
        })
    });
  }

}

module.exports = iOSScrapper;