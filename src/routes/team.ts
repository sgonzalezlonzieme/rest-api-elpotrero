import Express from 'express'
const router = Express.Router()
import postTeam from '../controllers/team/postTeam';
import getTeam from '../controllers/team/getTeamId';
import getTeamAvailable from '../controllers/team/getTeamAvailable';
import getTeamUser from '../controllers/team/getTeamUser'
import putTeam from '../controllers/team/putTeam';
import deleteTeam from '../controllers/team/deleteTeam';
import getTeamWhereUserPlay from '../controllers/team/getTeamWhereUserPlay';
import passport from 'passport'


router.post('/', postTeam);
router.get('/available', getTeamAvailable);
router.get('/', getTeamUser);
router.get('/:id', getTeamWhereUserPlay);
router.get('/team/:id', passport.authenticate('jwt', { session: false }), getTeam);
router.put('/team/:id', putTeam);
router.delete('/team/:id', deleteTeam);


export default router