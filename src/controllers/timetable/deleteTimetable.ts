import Express from 'express'
import { PrismaClient } from '@prisma/client'
import deleteTime from './functions/deleteTime'

const prisma = new PrismaClient()

async function deleteTimetable (req: Express.Request, res: Express.Response){

    let id = req.params.id
    let timetableId = parseInt(id)

    deleteTime(timetableId)

    res.json("timetable was successfully deleted")

} 

export default deleteTimetable