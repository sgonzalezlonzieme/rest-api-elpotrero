import Express from 'express';
const router = Express.Router();
import postLogin from '../controllers/login/postLogin'
import getLogout from '../controllers/login/getLogout'

router.post('/login', postLogin)
router.get('/logout/:id', getLogout)

export default router