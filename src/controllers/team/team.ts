import Express from 'express';
import Team from './type';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function postTeam (req: Express.Request, res: Express.Response){

         const team: Team = req.body;

         const newTeam = await prisma.team.create({
             data: {
                name: team.name,
                image: team.image,
                qualification: team.qualification
             }
         })
         
         res.json(newTeam)
}

export default postTeam

   