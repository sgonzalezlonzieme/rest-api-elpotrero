import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getTimetable (req: Express.Request, res: Express.Response){
    const id = req.params.id
    const timetable = await prisma.timeTable.findFirst({
        where:{
            userId: parseInt(id)
        },
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