module.exports = {
  attributes: {
    series: {
      model   : 'series',
      required: true
    },
    season: {
      type    : 'integer',
      index   : true
    },
    number: {
      type    : 'integer',
      index   : true
    },
    name: {
      type    : 'string',
      index   : true
    },
    released: {
      type : 'date',
      index: true
    }
  }
};
