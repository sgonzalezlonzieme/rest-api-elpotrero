import Express from 'express';
const router = Express.Router();
import postLogin from '../controllers/login/postLogin'

router.post('/', postLogin)

export default router