import Express from 'express';
import { PrismaClient } from '@prisma/client';
import mapPlayer from './functions/mapPlayer';
const prisma = new PrismaClient();

async function getPlayersByName (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.player.findMany({
      include: {
        user: true,
      }
  })
  const response = mapPlayer(allPlayers);
  console.log(req.params.name)
  if(req.params.name) {
    const filteredByName = response.filter((p: any) => {
      return p.name.toUpperCase().includes(req.params.name.toUpperCase())
    })
    if(req.query.order === 'ascendent') {
      const ordered = filteredByName.sort((a: any, b: any) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      return res.json(ordered)
    }
    if(req.query.order === 'descendent') {
      const ordered = filteredByName.sort((a: any, b: any) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      return res.json(ordered)
    }
    return res.json(filteredByName);
  }
  res.json(response)
  }catch(error){
    res.status(404).send({mensaje: "Error reading database", error: error})
  }
}

export default getPlayersByName;
