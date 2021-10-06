import Express from 'express'
import getTimetable from '../controllers/timetable/getTimetable';
import postTimetable from '../controllers/timetable/postTimetable'

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();


router.post('/',postTimetable);
router.get('/',getTimetable);


// module.exports = router;
export default router