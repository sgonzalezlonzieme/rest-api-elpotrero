import Express from 'express';
import { PrismaClient } from '@prisma/client';
import mapPlayer from './functions/mapPlayer';
const prisma = new PrismaClient();

async function getPlayersById (req: Express.Request, res: Express.Response){
  try{
    const id = parseInt(req.params.id);
    const playerById = await prisma.player.findMany({
      where: {
        id: id
      },
      include: {
        user: true,
      }
  })
  const response = mapPlayer(playerById);
  res.json(response)
    }catch(error){
      res.status(404).send({mensaje: "Error reading database", error: error})
    }
}

export default getPlayersById;