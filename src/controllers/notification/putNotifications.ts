import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



async function putNotification (req: Express.Request, res: Express.Response){
    try{    
        const body = req.body

        const updateNotification = await prisma.notification.update({
            where:{
                id:body.id
            },
            data:{
                attending:body.attending,
            }

        });
        
       res.json(updateNotification);
    }
    catch(e){
        console.log('error de actualizacion de cancha', e)
    }

} 

export default putNotification;