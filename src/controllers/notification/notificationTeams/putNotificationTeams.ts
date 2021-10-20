import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



async function putNotificationTeam (req: Express.Request, res: Express.Response){
    try{    
        const body = req.body

        const updateNotificationTeams = await prisma.notificationTeams.update({
            where:{
                id:body.id
            },
            data:{
                attending:body.attending,
            }

        });
        
       res.json(updateNotificationTeams);
    }
    catch(e){
        console.log('error de actualizacion de cancha', e)
    }

} 

export default putNotificationTeam;