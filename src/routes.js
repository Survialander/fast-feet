import { Router } from 'express';
import auth from './app/middlewares/auth'
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

const routes = Router();

routes.post('/login', SessionController.store);

routes.use(auth);
routes.post('/recipients', RecipientsController.index);


export default routes;