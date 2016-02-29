module.exports = {
  attributes: {
    name: {
      type    : 'string',
      required: true,
      index   : true
    },
    genre: {
      collection: 'genre',
      index     : true
    },
    episodes: {
      collection: 'episode',
      via       : 'series'
    }
  }
};
