'use strict';

const tooly = require('tooly');

class ParamFilter {

  constructor(_data) {
    this.data = _data;
  }

  filter(filter, filterValue) {
    if (tooly.existy(filterValue)) {
      this.data = this.data.filter(item => {
        return item[filter] === filterValue;
      });
    }
    return this;
  }

  results() {
    return this.data;
  }

}

module.exports = ParamFilter;
