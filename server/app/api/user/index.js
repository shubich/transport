import { Router } from 'express';

import { me, getAllUsers } from './controller';

const router = new Router();

router.get('/me', me);
router.get('/all', getAllUsers);

export default router;
