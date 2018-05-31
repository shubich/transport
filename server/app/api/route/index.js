import { Router } from 'express';

import * as actions from './controller';

const router = new Router();

router.route('/')
  .post(actions.addRoute)
  .put(actions.editRoute)
  .delete(actions.deleteRoute);

router.post('/by-stops', actions.getRoutesByStops);
router.get('/all', actions.getAllRoutes);
router.get('/:id', actions.getRouteByid);

export default router;
