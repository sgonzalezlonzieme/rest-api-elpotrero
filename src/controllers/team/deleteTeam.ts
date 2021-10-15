import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Team from './type'


async function deleteTeam (req: Express.Request, res: Express.Response){
    try{
        let teamId = parseInt(req.params.id)

        const deleteTeam = await prisma.team.delete({
            where:{
                id:teamId
            },
        })
       return res.json(deleteTeam)
    }
    catch(e){
        console.log('error de actualizacion de cancha', e)
    }

} 

export default deleteTeam