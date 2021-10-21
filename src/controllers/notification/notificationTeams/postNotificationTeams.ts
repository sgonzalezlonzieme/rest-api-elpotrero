import Express from 'express'
import { PrismaClient } from '@prisma/client'
import dateChange from '../../timetable/functions/dateChange'
import { join } from 'path/posix'
const prisma = new PrismaClient()



async function postNotificationTeam (req: Express.Request, res: Express.Response){
    const joinTeam = req.body

    try{

        const newNotificationTeams = await prisma.notificationTeams.create({
            data:{

                player:{
                    connect:{
                        id: parseInt(joinTeam.player)
                    }
                },
                team:{
                    connect:{
                        id: parseInt(joinTeam.team)
                    }
                },

            },

        })
        return res.json(newNotificationTeams)
        
        

      
    }
    catch(e){
        console.log('error de carga de reserva de cancha', e)
    };

}; 

export default postNotificationTeam;