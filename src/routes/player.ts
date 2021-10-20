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
import getPlayerAll from '../controllers/player/getPlayerAll';
import putPlayerQualification from '../controllers/player/putPlayerQualification'

//router.get('/', getPlayers);
//router.get('/:id', getPlayersById);
router.get('/', getPlayers);
router.get('/byid/:id', passport.authenticate('jwt', { session: false }), getPlayersById);
router.get('/available', passport.authenticate('jwt', { session: false }), getPlayerAvailable);
router.get('/female', passport.authenticate('jwt', { session: false }), getPlayerFemale);
router.get('/male', passport.authenticate('jwt', { session: false }), getPlayerMale);
router.get('/undefined', passport.authenticate('jwt', { session: false }), getPlayerUndefined);
router.get('/punctuation/:order', passport.authenticate('jwt', { session: false }), getPlayersPunctuation);
router.get('/position/:position', passport.authenticate('jwt', { session: false }), getPlayerByPosition);
router.get('/byname/:name', passport.authenticate('jwt', { session: false }), getPlayerByName);
router.get('/all', passport.authenticate('jwt', { session: false }), getPlayerAll);
router.put('/qualification', passport.authenticate('jwt', { session: false }), putPlayerQualification)

export default router;