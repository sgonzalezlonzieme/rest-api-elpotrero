import Express from 'express';
const router = Express.Router();
import getPlayers from '../controllers/player/getPlayers';
import getPlayersById from '../controllers/player/getPlayerById';
import passport from 'passport'
import getPlayerAvailable from '../controllers/player/getPlayerAvailable';
import getPlayerFemale from '../controllers/player/getPlayerFemale';
import getPlayerMale from '../controllers/player/getPlayerMale';
import getPlayerUndefined from '../controllers/player/getPlayerUndefined';
import getPlayersPunctuation from '../controllers/player/getPlayerPunctuation';
import getPlayerByPosition from '../controllers/player/getPlayerByPosition';
import getPlayerByName from '../controllers/player/getPlayerByName';

//router.get('/', passport.authenticate('jwt', { session: false }), getPlayers);
//router.get('/:id', passport.authenticate('jwt', { session: false }), getPlayersById);
router.get('/', getPlayers);
router.get('/byid/:id', getPlayersById);
router.get('/available', getPlayerAvailable);
router.get('/female', getPlayerFemale);
router.get('/male', getPlayerMale);
router.get('/undefined', getPlayerUndefined);
router.get('/punctuation/:order', getPlayersPunctuation);
router.get('/position/:position', getPlayerByPosition);
router.get('/byname/:name', getPlayerByName);

export default router;