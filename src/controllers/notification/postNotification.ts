import Express from 'express'
import { PrismaClient } from '@prisma/client'
import dateChange from '../timetable/functions/dateChange'
const prisma = new PrismaClient()



async function postNotification (req: Express.Request, res: Express.Response){
    try{
        let notification = req.body;
        let info = [
            notification.day,
            notification.hour,
            notification.duration,
            notification.team
        ]
        
        let players = notification.player
        players = notification.player.map((p:any) =>{
            return [...info,p]
        })
        const newNotification = players.forEach(async(player:any) =>{ 
            await prisma.notification.create({
            data:{
                day: dateChange(player[0]),
                hour: player[1],
                duration: player[2],
                player:{
                    connect:{
                        id: player[4].id
                    }
                },
                team:{
                    connect:{
                        id: player[3]
                    }
                },

            },

        })
        return res.json(newNotification)
        
        })

      
    }
    catch(e){
        console.log('error de carga de reserva de cancha', e)
    };

}; 

export default postNotification;

