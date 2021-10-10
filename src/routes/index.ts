import { Router } from 'express';
import fieldRoute from './fields'
const router = Router();
import userRoute from './user';
import playerRoute from './player';
import teamRoute from './team'
<<<<<<< HEAD
import timetableRoute from './timetable'
import checkoutRoute from './checkout';
=======
import loginRoute from './login'
>>>>>>> ramaSanti

router.use('/user', userRoute);
router.use('/player', playerRoute);
router.use('/fields', fieldRoute)
<<<<<<< HEAD
router.use('/team', teamRoute)
router.use('/timetable', timetableRoute) 
router.use('/checkout', checkoutRoute)
=======
router.use('/team', teamRoute) 
router.use('/auth', loginRoute)

>>>>>>> ramaSanti

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router;