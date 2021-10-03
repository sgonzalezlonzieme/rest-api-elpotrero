import Express from 'express'
import getFields from '../controllers/fields/getFields'

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();


router.get('/',getFields);


// module.exports = router;
export default router