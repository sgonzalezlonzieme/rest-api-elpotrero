import Express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function getTeam(req: Express.Request, res: Express.Response){
         
    let teamId= parseInt(req.params.id) 

    const team = await prisma.team.findUnique({
         where: {
             id:teamId
            },

         include: {
             player: true
         }
    })

    return  res.json(team)
}

export default getTeam