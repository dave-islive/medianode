var request - require('request-promise');

var omdbApi = {
  search: function (search) {

  },

  get: function (search, options) {
    var query = {};
    // t = title
    // i = id
    // type
    // y = year
    // plot


    options = options && typeof options == 'object' ? options : {};

    if (typeof search === 'string') {
      search = { id: search };
    }

    if (search.id) {
      query.i = search.id;
    }

    if (search.name) {
      query.t = search.name;
    }

    if (search.type) {
      query.type = search.type;
    }

    if (search.year) {
      query.y = search.year;
    }

    if (options.fullPlot) {
      query.plot = 'full';
    }

  }
};

module.exports = omdbApi;
