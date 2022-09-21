const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');



//API
route.get('/api/customers', controller.find);
route.post('/api/customers', controller.create);
route.put('/api/customers/:id',controller.update);
route.delete('/api/customers/:id',controller.delete);




module.exports = route;