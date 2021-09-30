import { Router } from 'express';
import postUser from '../controllers/user/user';
import postTeam from '../controllers/team/team'
const router = Router();

router.use('/createUser', postUser)
router.use('/createTeam', postTeam)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router