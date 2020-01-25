const { Router } = require('express');
const DevController = require('./controller/devController')
const SearchController = require('./controller/searchController')
const routes = Router();



routes.get(('/devs'), DevController.index);
routes.post(('/devs'), DevController.store);
routes.get(('/search'), SearchController.index);

module.exports = routes;