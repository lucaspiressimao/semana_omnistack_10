const { Router } = require('express')

const routes = Router()

routes.get('/', (request, response) => {
    return response.send('OK')
})

module.exports = routes