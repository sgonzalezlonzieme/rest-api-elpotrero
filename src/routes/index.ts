import { Router } from 'express';
import fieldRoute from './fields'
const router = Router();
import userRoute from './user';
import playerRoute from './player';
import teamRoute from './team'
import checkoutRoute from './checkout';

router.use('/user', userRoute);
router.use('/player', playerRoute);
router.use('/fields', fieldRoute);
router.use('/team', teamRoute);
router.use('/checkout', checkoutRoute)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router;