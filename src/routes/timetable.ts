import Express from 'express'
import deleteTimetable from '../controllers/timetable/deleteTimetable';
import getTimetable from '../controllers/timetable/getTimetable';
import postTimetable from '../controllers/timetable/postTimetable';
import failedTimetable from '../controllers/timetable/failedTimetable';
import getAllTimetable from '../controllers/timetable/getAllTimetable';
import passport from 'passport'

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();


router.get('/:id', passport.authenticate('jwt', { session: false }),  getTimetable);
router.get('/user/:id', passport.authenticate('jwt', { session: false }),  getAllTimetable);
router.post('/', passport.authenticate('jwt', { session: false }),  postTimetable);
router.delete('/:id', passport.authenticate('jwt', { session: false }) ,  deleteTimetable);
router.delete('/mercadopago/:id', passport.authenticate('jwt', { session: false }),  failedTimetable);



// module.exports = router;
export default router