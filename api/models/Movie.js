module.exports = {
  attributes: {
    name: {
      type    : 'string',
      required: true,
      index   : true
    },
    released: {
      type : 'date',
      index: true
    },
    genre: {
      collection: 'genre',
      index     : true
    }
  }
};
