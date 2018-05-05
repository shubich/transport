import { Router } from 'express';

import { addStop, getAllStops } from './controller';

const router = new Router();

router.post('/', addStop);
router.get('/all', getAllStops);

export default router;
