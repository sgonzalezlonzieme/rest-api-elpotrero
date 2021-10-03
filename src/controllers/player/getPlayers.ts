import Express from 'express';
//import  Player  from './type'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getPlayers (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.player.findMany({
      include: {
        user: true,
      }
    })
    const response = allPlayers.map((p) => {
      return {
        id: p.id,
        qualification: p.qualification,
        position: p.position,
        name: p.user[0].name,
        gender: p.user[0].gender,
        birthday: p.user[0].birthday,
        image: p.user[0].image,
      }
    })
    res.json(response)
  }catch(error){
    res.status(404).send({mensaje: "Error reading database", error: error})
  }
}

export default getPlayers