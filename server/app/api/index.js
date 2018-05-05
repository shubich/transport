import { Router } from 'express';
import AuthRouter from './auth';
import UserRouter from './user';
import StopRouter from './stop';
import { ROUTES } from '../constants';
import authMiddleware from './middlewares/authMiddleware';


const router = new Router();

// The authentication route and middleware must be the first
router.use(ROUTES.auth, AuthRouter);
router.use(authMiddleware);

router.use(ROUTES.user, UserRouter);
router.use(ROUTES.stop, StopRouter);

// 404 Not Found
router.all('*', (req, res) => res.sendStatus(404));

export default router;
