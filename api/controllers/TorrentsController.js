var Promise     = require('bluebird'),
    request     = require('request-promise'),
    searchSites = 'http://www.google.nl'; //'https://kat.ph/torrents/usearch/';

var TorrentSearchController = {
  search: function (req, res) {
    var searchTerms = req.param('search');

    if (!searchTerms) {
      return res.badRequest('Need search term');
    }

    request
      .get({
        url   : searchSites,
        qs    : {
          q: searchTerms
        }
      })
      .then(function (result) {
        console.log(result);
        return result;
      })
      .then(res.ok)
      .catch(res.badRequest);
  }
};

module.exports = TorrentSearchController;
