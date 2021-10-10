import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getFields (req: Express.Request, res: Express.Response){
    const query = req.query
    let fieldId = query.id?.toString()

    if(fieldId){
        const field = await prisma.field.findUnique({
            where:{
                id: parseInt(fieldId)
            },
            include:{
                fieldCharacteristics:true,
                timetable: true
            }
        })
    res.json(field)
    }
    
    const fields = await prisma.field.findMany({
        include:{
            fieldCharacteristics:true
        }
    })
    
    res.json(fields)
} 

export default getFields