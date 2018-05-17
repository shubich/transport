import { Router } from 'express';

import { me, getAllUsers, putMoney } from './controller';

const router = new Router();

router.get('/me', me);
router.get('/all', getAllUsers);
router.put('/put-money', putMoney);

export default router;
