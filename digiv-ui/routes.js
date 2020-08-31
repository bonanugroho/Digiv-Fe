const routes = require('next-routes')

module.exports = routes()
    .add('homepage', '/', '')
    .add('countdown', '/countdown','countdown')
    .add('preRegistration', '/pre-registration','preRegistration')
    .add('login', '/login','login')    
    .add('registration', '/registration','registration')    
    .add('liveChat', '/live-chat','liveChat')    
