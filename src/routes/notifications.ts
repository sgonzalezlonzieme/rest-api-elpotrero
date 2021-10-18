import Express from 'express';
import getNotifications from "../controllers/notification/getNotification";
import putNotification from '../controllers/notification/putNotifications';
import postNotification from '../controllers/notification/postNotification';
import getNotificationMyTeam from '../controllers/notification/getNotificationMyTeams';
import passport from 'passport';

const router = Express.Router();


router.get('/:id', passport.authenticate('jwt', { session: false }), getNotifications);
router.get('/team/:id', passport.authenticate('jwt', { session: false }), getNotificationMyTeam);
router.put('/', passport.authenticate('jwt', { session: false }), putNotification);
router.post('/', passport.authenticate('jwt', { session: false }), postNotification);

export default router;