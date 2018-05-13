import { Router } from 'express';

import * as actions from './controller';

const router = new Router();

router.route('/')
  .post(actions.addRoute)
  .put(actions.editRoute)
  .delete(actions.deleteRoute);

router.get('/all', actions.getAllRoutes);

export default router;
