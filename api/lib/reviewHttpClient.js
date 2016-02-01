'use strict';

const got = require('got');

exports.get = function(url) {

  return new Promise((resolve, reject) => {

    got(url).then(response => {
      resolve(response.body);
    })
      .catch(error => {
        reject(error);
      })

  });

};