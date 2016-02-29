var Promise = require('bluebird'),
    omdb    = require('omdb');

// TODO - Build better api interface http://www.omdbapi.com/

var IMDBService = {
  search: function (search) {
    return new Promise(function (resolve, reject) {
      omdb.search(search, function (error, result) {
        if (error) {
          return reject(error);
        }

        resolve(result);
      });
    });
  },

  getInfo: function (id) {
    return new Promise(function (resolve, reject) {
      omdb.get(id, function (error, result) {
        if (error) {
          return reject(error);
        }

        resolve(result);
      });
    });
  },

  getPoster: function (id) {
    return new Promise(function (resolve, reject) {
      omdb.poster(id, function (error, result) {
        if (error) {
          return reject(error);
        }

        resolve(result);
      });
    });
  }
};

module.exports = IMDBService;
