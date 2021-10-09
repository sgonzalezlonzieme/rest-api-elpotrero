import Express from 'express';
const router = Express.Router();
import checkout from '../controllers/checkout/checkout';
import success from '../controllers/checkout/success'

router.post('/', checkout);
router.get('/success', success);

export default router;