import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/login', SessionController.store);

export default routes;