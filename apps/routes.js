const routes = require('next-routes')

module.exports = routes()
    .add('homepage', '/', '/')
    .add('countdown', '/countdown','countdown')