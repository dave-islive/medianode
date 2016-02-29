module.exports = {
  attributes: {
    username: {
      type    : 'string',
      required: true,
      index   : true
    },
    movies: {
      collection: 'usermovie',
      via       : 'user'
    },
    series: {
      collection: 'userseries',
      via       : 'user'
    }
  }
};
