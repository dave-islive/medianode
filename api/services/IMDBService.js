var Promise = require('bluebird'),
    omdb    = require('omdb');

var IMDBService = {
  search: function (search) {
    return new Promise(function (resolve, reject) {
      omdb(search, function (error, result) {
        if (error) {
          return reject(error);
        }

        resolve(result);
      });
    });
  }
};

module.exports = IMDBService;
