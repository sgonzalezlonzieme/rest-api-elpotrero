import Express from 'express'
import deleteTimetable from '../controllers/timetable/deleteTimetable';
import getTimetable from '../controllers/timetable/getTimetable';
import postTimetable from '../controllers/timetable/postTimetable'

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();


router.post('/',postTimetable);
router.get('/',getTimetable);
router.delete('/:id',deleteTimetable);


// module.exports = router;
export default router