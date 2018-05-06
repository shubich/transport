import { Router } from 'express';

import * as actions from './controller';

const router = new Router();

router.route('/')
  .post(actions.addStop)
  .put(actions.editStop)
  .delete(actions.deleteStop);

router.get('/all', actions.getAllStops);

export default router;
