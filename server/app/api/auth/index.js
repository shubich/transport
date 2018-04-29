import { Router } from 'express';

import { signin, signup } from './controller';

const router = new Router();

router.post('/signup', signup);
router.post('/signin', signin);
// router.put('/edit', edit);

export default router;
