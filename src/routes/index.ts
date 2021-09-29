import { Router } from 'express';
import postUser from '../controllers/user/user';
const router = Router();

router.use('/user', postUser)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router