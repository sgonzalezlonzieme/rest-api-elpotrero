import Express from 'express'
import getUser from '../controllers/user/getUser';
const router = Express.Router()
import postUser from '../controllers/user/postUser';
import putUser from '../controllers/user/putUser';
import deleteUser from '../controllers/user/deleteUser'

router.post("/", postUser)
router.get("/", getUser)
router.put("/:id", putUser)
router.delete("/:id", deleteUser)

export default router