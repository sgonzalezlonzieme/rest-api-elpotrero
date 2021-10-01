import Express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getTeam(req: Express.Request, res: Express.Response){
         
    let teamId: any = req.params.id //ponerle type number

    const team = await prisma.team.findUnique({
         where: {id: teamId}
    })

    res.json(team)
}

export default getTeam