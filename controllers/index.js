const {Router} = require('express');

const apiRoutes = require('./api');

const routes = Router()
routes.use('/api', apiRoutes);











module.exports = routes