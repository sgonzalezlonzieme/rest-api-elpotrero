import Express from 'express'
const router = Express.Router()
import postTeam from '../controllers/team/postTeam';
import getTeam from '../controllers/team/getTeamId';
import getTeamAvailable from '../controllers/team/getTeamAvailable';
import getTeamUser from '../controllers/team/getTeamUser'
import putTeam from '../controllers/team/putTeam';
import passport from 'passport'


router.post('/', postTeam);
router.get('/available', getTeamAvailable);
router.get('/', getTeamUser);
router.get('/team/:id', getTeam);
router.put('/team/:id', putTeam);


export default router