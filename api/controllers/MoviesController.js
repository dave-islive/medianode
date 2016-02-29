var Promise     = require('bluebird'),
    request     = require('request-promise'),
    searchSites = 'http://www.google.nl'; //'https://kat.ph/torrents/usearch/';

var MoviesController = {
  getIMDBdata: function (req, res) {
    var search = req.param('search');

    if (!search) {
      return res.badRequest('Need search term');
    }

    IMDBService
      .search(search)
      .then(res.ok)
      .catch(res.badRequest);
  }
};

module.exports = MoviesController;
