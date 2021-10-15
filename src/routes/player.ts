import Express from 'express';
const router = Express.Router();
import getPlayers from '../controllers/player/getPlayers';
import getPlayersById from '../controllers/player/getPlayerById';
import passport from 'passport'

router.get('/', getPlayers);
router.get('/:id', passport.authenticate('jwt', { session: false }), getPlayersById);

export default router;