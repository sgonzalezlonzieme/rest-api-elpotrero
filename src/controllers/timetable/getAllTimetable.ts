import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getAllTimetable (req: Express.Request, res: Express.Response){

    const id = parseInt(req.params.id);

    const timetable = await prisma.timeTable.findMany({
        where:{
            userId: id
        },
        include:{
            field:true
        },
        orderBy:{
            id:'desc'
        }
    });
    
   return res.json(timetable);
}; 

export default getAllTimetable;