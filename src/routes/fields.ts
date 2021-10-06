import Express from 'express'
import getFields from '../controllers/fields/getFields'
import getFieldsAvailable from '../controllers/fields/getFieldsAvailable'
import postField from '../controllers/fields/postField'

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();


router.get('/',getFields);
router.get('/available',getFieldsAvailable);
router.post('/',postField);


// module.exports = router;
export default router