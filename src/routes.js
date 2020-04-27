import { Router } from 'express'; //const { Router } = require('express');

import SessionController from './controllers/SessionController'
import HotelController from './controllers/HotelController';

const routes = new Router();

//Rotas referentes a sessão de usuarios (sessions)
routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.store);


//Rotas referentes a manutenção de hoteis
routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.put('/hoteis', HotelController.update);


export default routes;//module.exports = routes;