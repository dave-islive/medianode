module.exports.routes = {
  '/': {
    view: 'homepage'
  },


  'get  /movies/imdb'         : 'MoviesController.getIMDBdata',
  'get  /torrents/search'     : 'TorrentsController.search'

};
