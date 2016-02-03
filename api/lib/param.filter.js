'use strict';

const tooly = require('tooly');

exports.filterFunction = function(_data) {

  let data = _data;
  return function(filter, filterValue) {

    if (tooly.existy(filterValue)) {
      data = data.filter(item => {
        return item[filter] === filterValue;
      });
    }

    return data;
  }

};