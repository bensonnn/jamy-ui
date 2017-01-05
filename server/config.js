const development = {
  latestRoute: 'http://localhost:3000/api/latest',
  popularRoute: 'http://localhost:3000/api/popular',
  soundcloud: '54124d08066b77ab0662dc6727e7bf39'
};

const production = {
  latestRoute: 'http://jamymusic.com/api/latest',
  popularRoute: 'http://jamymusic.com/api/popular',
  soundcloud: '54124d08066b77ab0662dc6727e7bf39'
};

module.exports = process.env.NODE_ENV === 'production' ? production : development;
