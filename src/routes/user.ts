import Express from 'express'
const router = Express.Router()
import postUser from '../controllers/user/postUser';

router.post("/", postUser)

export default router