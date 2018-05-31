import { Router } from 'express';

import * as actions from './controller';

const router = new Router();

router.route('/')
  .post(actions.addRide);

router.get('/user-all', actions.getUserRides);

export default router;
