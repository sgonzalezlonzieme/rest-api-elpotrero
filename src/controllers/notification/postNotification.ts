import Express from 'express'
import { PrismaClient } from '@prisma/client'
import dateChange from '../timetable/functions/dateChange';
const prisma = new PrismaClient()



async function postNotification (req: Express.Request, res: Express.Response){
    try{
        let notification = req.body;

        const newNotification = await prisma.notification.create({

            data:{
                day: notification.day,
                hour: notification.hour,
                duration: notification.duration,
                player:{
                    connect:{
                        id: notification.player
                    }
                },
                team:{
                    connect:{
                        id: notification.team
                    }
                },

            },

        });

      return res.json(newNotification);
    }
    catch(e){
        console.log('error de carga de reserva de cancha', e)
    };

}; 

export default postNotification;