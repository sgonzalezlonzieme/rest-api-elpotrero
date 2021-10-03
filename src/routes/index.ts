import { Router } from 'express';
import postUser from '../controllers/user/user';
import fieldRoute from './fields'
const router = Router();

router.use('/user', postUser)
router.use('/fields', fieldRoute)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router