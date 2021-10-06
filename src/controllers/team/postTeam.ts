import Express from 'express';
import Team from './type';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function postTeam (req: Express.Request, res: Express.Response){

        try{
            const team: Team = req.body;
   
            const newTeam = await prisma.team.create({
                data: {
                   name: team.name,
                   image: team.image,
                   qualification: team.qualification,
                   votes: team.votes,
                },
                //Crear la relación con los jugadores
             })
          
            res.json(newTeam)

        }catch(error){

            res.status(404).send({mensaje: "Error en el post de team", error: error}) 
 
        }
}


export default postTeam

   