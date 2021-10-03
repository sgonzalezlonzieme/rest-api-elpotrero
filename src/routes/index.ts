import { Router } from 'express';
const router = Router();
import userRoute from './user';
import playerRoute from './player';

router.use('/user', userRoute);
router.use('/player', playerRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router;