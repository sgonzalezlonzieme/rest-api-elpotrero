import { Router } from 'express';
import fieldRoute from './fields'
const router = Router();
import userRoute from './user';
import playerRoute from './player';

router.use('/user', userRoute);
router.use('/player', playerRoute);
router.use('/fields', fieldRoute)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router;