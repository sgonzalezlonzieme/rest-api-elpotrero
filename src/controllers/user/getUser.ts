import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getUser (req: Express.Request, res: Express.Response){
    const query = req.query
    let id = query.id?.toString()
    
    if(id){
        const user = await prisma.user.findUnique({
            where:{
                id: parseInt(id)
            }
        }) 
        res.json(user) 
    }
    const users = await prisma.user.findMany()
    
    res.json(users)
} 

export default getUser