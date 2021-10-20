import Express from 'express';
import getNotifications from "../controllers/notification/notificationUser/getNotification";
import putNotification from '../controllers/notification/notificationUser/putNotifications';
import postNotification from '../controllers/notification/notificationUser/postNotification';
import getNotificationMyTeam from '../controllers/notification/notificationUser/getNotificationMyTeams';
import postNotificationTeam from '../controllers/notification/notificationTeams/postNotificationTeams';
import putNotificationTeams from '../controllers/notification/notificationTeams/putNotificationTeams';
import getNotificationPlayer from '../controllers/notification/notificationTeams/getNotificationPlayerJoining';
import getNotificationsRespond from '../controllers/notification/notificationTeams/getNotificationRespondPlayer';
import passport from 'passport';

const router = Express.Router();


router.get('/:id', passport.authenticate('jwt', { session: false }), getNotifications);
router.get('/myteam/:id', passport.authenticate('jwt', { session: false }), getNotificationMyTeam);
router.put('/', passport.authenticate('jwt', { session: false }), putNotification);
router.post('/', passport.authenticate('jwt', { session: false }), postNotification);
router.post('/joinTeam', passport.authenticate('jwt', { session: false }), postNotificationTeam);
router.put('/joinTeam', passport.authenticate('jwt', { session: false }), putNotificationTeams);
router.get('/joinTeam/myteam/:id', passport.authenticate('jwt', { session: false }), getNotificationPlayer);
router.get('/joinTeam/teamrespond/:id', passport.authenticate('jwt', { session: false }), getNotificationsRespond);

export default router;  