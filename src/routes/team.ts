import Express from 'express'
const router = Express.Router()
import postTeam from '../controllers/team/postTeam';
import getTeam from '../controllers/team/getTeam';
import passport from 'passport'

router.post("/", passport.authenticate('jwt', { session: false }), postTeam);
router.get('/:id', passport.authenticate('jwt', { session: false }), getTeam);

export default router