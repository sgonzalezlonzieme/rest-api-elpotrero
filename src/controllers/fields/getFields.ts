import Express from 'express'
import  Field  from './type'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getFields (req: Express.Request, res: Express.Response){
    const fields = await prisma.field.findMany()
    
    res.json(fields)
} 

export default getFields