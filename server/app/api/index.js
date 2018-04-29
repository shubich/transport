import { Router } from 'express';
import AuthRouter from './auth';
import { ROUTES } from '../constants';
// import authMiddleware from './middlewares/authMiddleware';


const router = new Router();

// The authentication route and middleware must be the first
router.use(ROUTES.auth, AuthRouter);
// router.use(authMiddleware);

router.all('/', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const availableRoutes = {
    auth: `${baseUrl}${ROUTES.auth}`,
  };

  res.json(availableRoutes);
});

// 404 Not Found
router.all('*', (req, res) => res.sendStatus(404));

export default router;
