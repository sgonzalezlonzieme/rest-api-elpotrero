import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import TimeTable from './type'
import dateChange from './functions/dateChange'
import { time } from 'console'


async function postTimetable (req: Express.Request, res: Express.Response){
    try{
        let timetable: TimeTable = req.body

        const newTimetable = await prisma.timeTable.create({
            data:{
                day: dateChange(timetable.day),
                hour: timetable.hour,
                duration: timetable.duration,
                field:{
                        connect:{
                            id: timetable.field
                        }
                    },
                user:{
                    connect:{
                        id: timetable.user
                    }
                }
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