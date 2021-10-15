import Express from 'express';
import { PrismaClient } from '@prisma/client';
import mapPlayer from './functions/mapPlayer';
const prisma = new PrismaClient();

async function getPlayerAvailable (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.player.findMany({
      where: {
        available: true,
      },
      include: {
        user: true,
      }
  })
  const response = mapPlayer(allPlayers)
  if(req.query.order === 'ascendent') {
    const ordered = response.sort((a: any, b: any) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    return res.json(ordered)
  }
  if(req.query.order === 'descendent') {
    const ordered = response.sort((a: any, b: any) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    return res.json(ordered)
  }
    res.json(response)
    }catch(error){
      res.status(404).send({mensaje: "Error reading database", error: error})
    }
}

export default getPlayerAvailable;