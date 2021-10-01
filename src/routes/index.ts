import { Router } from 'express';
import postUser from '../controllers/user/user';
import postTeam from '../controllers/team/postTeam'
import getTeam from '../controllers/team/getTeam'
const router = Router();

router.use('/createUser', postUser) //armar bien la ruta
router.use('/createTeam', postTeam) //armar bien la ruta
router.use('/getTeam:id', getTeam) //armar bien la ruta

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default router