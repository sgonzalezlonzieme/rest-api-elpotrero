import Express from 'express'
import { PrismaClient } from '@prisma/client'
import deleteTime from './functions/deleteTime'
const prisma = new PrismaClient()


async function deleteTimetable (req: Express.Request, res: Express.Response){

    let id = req.params.id
    let timetableId = parseInt(id)

    deleteTime(timetableId)

    res.redirect(`http://localhost:3001/failed`)
} 

export default deleteTimetable