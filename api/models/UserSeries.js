module.exports = {
  attributes: {
    user: {
      collection: 'user',
      via       : 'series',
      required  : true,
      index     : true
    },
    series: {
      model   : 'series',
      index   : true
    },
    episodes: {
      collection: 'userepisode',
      via       : 'userseries',
      index     : true
    },
    wishlist: {
      type      : 'boolean',
      defaultsTo: false,
      index     : true
    }
  }
};
