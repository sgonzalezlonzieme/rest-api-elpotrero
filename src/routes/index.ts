import { Router } from 'express';
<<<<<<< HEAD
import fieldRoute from './fields'
const router = Router();
import userRoute from './user';
import playerRoute from './player';

router.use('/user', userRoute);
router.use('/player', playerRoute);
router.use('/fields', fieldRoute)
=======
const router = Router();
import userRoute from './user'
import teamRoute from './team'

router.use('/user', userRoute) 
router.use('/team', teamRoute) 


>>>>>>> routeSanti
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router;