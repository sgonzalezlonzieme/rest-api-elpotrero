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


router.post('/', postTeam);
router.get('/available', getTeamAvailable);
router.get('/allTeams', getAllTeams);
router.get('/', getTeamUser);
router.get('/:id', getTeamWhereUserPlay);
router.get('/team/:id',getTeamId);
router.put('/team/:id', putTeam);
router.put('/qualification', putTeamQualification)
router.delete('/team/:id', deleteTeam);



export default router