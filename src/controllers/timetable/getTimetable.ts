import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getTimetable (req: Express.Request, res: Express.Response){
    
    const timetable = await prisma.timeTable.findFirst({
        include:{
            field:true
        },
        orderBy:{
            id:'desc'
        }
    })
    
    res.json(timetable)
} 

export default getTimetable