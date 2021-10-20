import Express from 'express'
const router = Express.Router()
import postTeam from '../controllers/team/postTeam';
import getTeamId from '../controllers/team/getTeamId';
import getTeamAvailable from '../controllers/team/getTeamAvailable';
import getTeamUser from '../controllers/team/getTeamUser'
import putTeam from '../controllers/team/putTeam';
import deleteTeam from '../controllers/team/deleteTeam';
import getTeamWhereUserPlay from '../controllers/team/getTeamWhereUserPlay';
import putTeamQualification from '../controllers/team/putTeamQualification';
import getAllTeams from '../controllers/team/getAllTeams';
import passport from 'passport'


router.post('/', passport.authenticate('jwt', { session: false }), postTeam);
router.get('/available', passport.authenticate('jwt', { session: false }), getTeamAvailable);
router.get('/allTeams', passport.authenticate('jwt', { session: false }), getAllTeams);
router.get('/', passport.authenticate('jwt', { session: false }), getTeamUser);
router.get('/:id', passport.authenticate('jwt', { session: false }), getTeamWhereUserPlay);
router.get('/team/:id', passport.authenticate('jwt', { session: false }),getTeamId);
router.put('/team/:id', passport.authenticate('jwt', { session: false }), putTeam);
router.put('/qualification', passport.authenticate('jwt', { session: false }), putTeamQualification)
router.delete('/team/:id', passport.authenticate('jwt', { session: false }), deleteTeam);



export default router