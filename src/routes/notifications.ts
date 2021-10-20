import Express from 'express';
import getNotifications from "../controllers/notification/getNotification";
import putNotification from '../controllers/notification/putNotifications';
import postNotification from '../controllers/notification/postNotification';
import getNotificationMyTeam from '../controllers/notification/getNotificationMyTeams';
import passport from 'passport';

const router = Express.Router();


router.get('/:id', getNotifications);
router.get('/myteam/:id', getNotificationMyTeam);
router.put('/', putNotification);
router.post('/', postNotification);

export default router;