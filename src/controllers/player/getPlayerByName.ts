import Express from 'express';
import { PrismaClient } from '@prisma/client';
import mapUser from './functions/mapUser';
const prisma = new PrismaClient();

async function getPlayerByName (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.user.findMany({
      include: {
        player: true,
      }
  })
  const response = mapUser(allPlayers);
  if(req.params.name) {
    const filteredByName = response.filter((p: any) => {
      return p.name.toUpperCase().includes(req.params.name.toUpperCase())
    })
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
    return res.json(filteredByName)
  }

    //res.json(response)
    }catch(error){
      res.status(404).send({mensaje: "Error reading database", error: error})
    }
}

export default getPlayerByName;
