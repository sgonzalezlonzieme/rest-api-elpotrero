import Express from 'express'
import deleteTimetable from '../controllers/timetable/deleteTimetable';
import getTimetable from '../controllers/timetable/getTimetable';
import postTimetable from '../controllers/timetable/postTimetable';
import failedTimetable from '../controllers/timetable/failedTimetable';
import getAllTimetable from '../controllers/timetable/getAllTimetable';
// import passport from 'passport'

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();


router.get('/:id',  getTimetable);
router.get('/user/:id',  getAllTimetable);
router.post('/',  postTimetable);
router.delete('/:id',  deleteTimetable);
router.delete('/mercadopago/:id',  failedTimetable);



// module.exports = router;
export default router