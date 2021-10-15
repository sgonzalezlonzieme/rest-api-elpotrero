import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getUser (req: Express.Request, res: Express.Response){
    const query = req.query
    let id = query.id?.toString()
    
    try{
    if(id){
        const user = await prisma.user.findUnique({
            where:{
                id: parseInt(id)
            },
            include: {
                player: true,
            }
        }) 
        return res.json(user) 
    }
    const users = await prisma.user.findMany()
    
     return res.json(users)
    }
    catch(e){
        console.log('error en busquedad de user', e)
    }
} 

export default getUser