import Express from 'express';
const router = Express.Router();
import checkout from '../controllers/checkout/checkout';

router.post('/', checkout);

export default router;