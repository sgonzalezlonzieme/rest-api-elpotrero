import Express from 'express';
const router = Express.Router();
import checkout from '../controllers/checkout/checkout';
import passport from 'passport'

router.post('/', checkout);

export default router;