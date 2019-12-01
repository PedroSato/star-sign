const express = require(`express`);
const SignController = require(`./controllers/SignController`);
const routes = new express.Router();

routes.get('/signo', SignController.index)
routes.get('/signo/lista', SignController.list)
module.exports = routes;