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


router.get('/:id', getNotifications);
router.get('/myteam/:id', getNotificationMyTeam);
router.put('/', putNotification);
router.post('/', postNotification);
router.post('/joinTeam', postNotificationTeam);
router.put('/joinTeam', putNotificationTeams);
router.get('/joinTeam/myteam/:id', getNotificationPlayer);
router.get('/joinTeam/:id', getNotificationsRespond);

export default router;