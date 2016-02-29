module.exports = {
  attributes: {
    user: {
      collection: 'user',
      via       : 'movies',
      required  : true,
      index     : true
    },
    movie: {
      model   : 'movie',
      required: true,
      index   : true
    },
    wishlist: {
      type      : 'boolean',
      defaultsTo: false,
      index     : true
    },
    seen: {
      type      : 'boolean',
      defaultsTo: false,
      index     : true
    },
    rating: {
      type      : 'integer',
      index     : true
    }
  }
};
