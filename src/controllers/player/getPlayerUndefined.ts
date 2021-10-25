import Express from 'express';
import { PrismaClient } from '@prisma/client';//
import mapUser from './functions/mapUser';
const prisma = new PrismaClient();

async function getPlayerUndefined (req: Express.Request, res: Express.Response){
  try{
    const playerUndefined = await prisma.user.findMany({
      where: {
        gender: 'UNDEFINED',
      },
      include: {
        player: true,
      }
  })
  const response = mapUser(playerUndefined);
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

export default getPlayerUndefined;