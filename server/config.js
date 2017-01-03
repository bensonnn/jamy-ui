const development = {
  latestRoute: 'http://localhost:3000/api/latest',
  soundcloud: '54124d08066b77ab0662dc6727e7bf39'
};

const production = {
  latestRoute: 'http://jamymusic.com/api/latest',
  soundcloud: '54124d08066b77ab0662dc6727e7bf39'
};

module.exports = process.env.NODE_ENV === 'production' ? production : development;
