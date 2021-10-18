import Express from 'express';
import getNotifications from "../controllers/notification/getNotification";
import putNotification from '../controllers/notification/putNotifications';
import postNotification from '../controllers/notification/postNotification';
import getNotificationMyTeam from '../controllers/notification/getNotificationMyTeams';

const router = Express.Router();


router.get('/:id', getNotifications);
router.get('/team/:id', getNotificationMyTeam);
router.put('/', putNotification);
router.post('/', postNotification);

export default router;