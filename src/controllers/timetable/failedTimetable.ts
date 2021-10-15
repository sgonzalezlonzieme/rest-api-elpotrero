import Express from 'express'
import { PrismaClient } from '@prisma/client'
import deleteTime from './functions/deleteTime'
const prisma = new PrismaClient()


async function failedTimetable (req: Express.Request, res: Express.Response){

    let timetableId = parseInt(req.params.id);

    deleteTime(timetableId);

   return res.redirect(`http://localhost:3001/failed`);
}; 

export default failedTimetable;