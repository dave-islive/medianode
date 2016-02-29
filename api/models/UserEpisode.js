module.exports = {
  attributes: {
    userseries: {
      collection: 'userseries',
      via       : 'episodes',
      required  : true,
      index     : true
    },
    episode: {
      model   : 'episode',
      required: true,
      index   : true
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
