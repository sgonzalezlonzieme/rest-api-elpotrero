import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import TimeTable from './type'


async function postTimetable (req: Express.Request, res: Express.Response){
    try{
        const timetable: TimeTable = req.body
        let hourFormat = timetable.hour

        const newTimetable = await prisma.timeTable.create({
            data:{
                day: timetable.day,
                hour: timetable.hour,
                duration: timetable.duration,
                field:{
                        connect:{
                            id: timetable.field
                        }
                    },
                // gameId: timetable.game
            },

        })
       res.json(newTimetable)
    }
    catch(e){
        console.log('error de carga de reserva de cancha', e)
    }

} 

export default postTimetable