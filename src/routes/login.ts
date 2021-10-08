import Express from 'express';
const router = Express.Router();
import postLogin from '../controllers/login/postLogin'


router.post('/login', postLogin)


export default router