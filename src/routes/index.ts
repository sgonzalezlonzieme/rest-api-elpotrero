import { Router } from 'express';
const router = Router();
import userRoute from './user'
import teamRoute from './team'

router.use('/user', userRoute) 
router.use('/team', teamRoute) 


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router