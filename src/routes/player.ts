import Express from 'express';
const router = Express.Router();
import getPlayers from '../controllers/player/getPlayers';
import getPlayersById from '../controllers/player/getPlayerById';

router.get('/', getPlayers);
router.get('/:id', getPlayersById);

export default router;