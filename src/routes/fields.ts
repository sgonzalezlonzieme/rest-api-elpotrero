import Express from 'express'
import getFields from '../controllers/fields/getFields'
import getFieldsAvailable from '../controllers/fields/getFieldsAvailable'
import postField from '../controllers/fields/postField'
import putField from '../controllers/fields/putField'
import deleteField from '../controllers/fields/deleteFields'

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();


router.get('/',getFields);
router.get('/available/:day',getFieldsAvailable);
router.post('/',postField);
router.put('/:id',putField);
router.delete('/:id',deleteField);


// module.exports = router;
export default router