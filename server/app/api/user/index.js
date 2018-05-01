import { Router } from 'express';

import { me/* , edit */ } from './controller';

const router = new Router();

router.get('/me', me);
// router.put('/me/edit', edit);

export default router;
