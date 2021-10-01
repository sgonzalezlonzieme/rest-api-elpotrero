import Express from 'express'
const router = Express.Router()
import postTeam from '../controllers/team/postTeam';
import getTeam from '../controllers/team/getTeam';

router.post("/", postTeam);
router.get('/:id', getTeam)

export default router