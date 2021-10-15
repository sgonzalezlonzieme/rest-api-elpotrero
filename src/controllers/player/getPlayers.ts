import Express from 'express';
import { PrismaClient } from '@prisma/client';
import mapPlayer from './functions/mapPlayer';
const prisma = new PrismaClient();

async function getPlayers (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.player.findMany({
      include: {
        user: true,
      }
    })
    const response = mapPlayer(allPlayers);
    if(req.query.order === 'ascendent') {
			const orderedByName = response.sort((a: any, b: any) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
      return res.json(response)
    }
    if(req.query.order === 'descendent') {
			const orderedByName = response.sort((a: any, b: any) => {
				if (a.name < b.name) return 1;
				if (a.name > b.name) return -1;
				return 0;
			});
      return res.json(response)
    }
    res.json(response)
  }catch(error){
    res.status(404).send({mensaje: "Error reading database", error: error})
  }
}

export default getPlayers