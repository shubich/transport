import { Router } from 'express';

import * as actions from './controller';

const router = new Router();

router.route('/')
  .post(actions.addVehicle)
  .put(actions.editVehicle)
  .delete(actions.deleteVehicle);

router.get('/all', actions.getAllVehicles);
router.get('/:id', actions.getVehicleByid);

export default router;
