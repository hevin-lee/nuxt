const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isProdMode ? 'https://xxxx/' : 'http://localhost:8000/'
}