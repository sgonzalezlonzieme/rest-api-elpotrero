import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getTimetable (req: Express.Request, res: Express.Response){
    
    const fields = await prisma.timeTable.findMany({
        include:{
            field:true
        }
    })
    
    res.json(fields)
} 

export default getTimetable