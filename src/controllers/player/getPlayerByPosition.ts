import Express from 'express';
import { PrismaClient } from '@prisma/client';
import mapPlayer from './functions/mapPlayer';
const prisma = new PrismaClient();

async function getPlayerByPosition (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.player.findMany({
      include: {
        user: true,
      }
    })
    const response = mapPlayer(allPlayers);
    
    if(req.params.position === 'goalkeeper') {
      const responsePosition = response.filter(
        (p: any) => p.position === 'GOALKEEPER'
      )
      if(req.query.order === 'ascendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        return res.json(responsePosition)
      }
      if(req.query.order === 'descendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        return res.json(ordered)
      }
      return res.json(responsePosition)
    }
    
    if(req.params.position === 'defender') {
      const responsePosition = response.filter(
        (p: any) => p.position === 'DEFENDER'
      )
      if(req.query.order === 'ascendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        return res.json(responsePosition)
      }
      if(req.query.order === 'descendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        return res.json(ordered)
      }
      return res.json(responsePosition)
    }
   
    if(req.params.position === 'midfielder') {
      const responsePosition = response.filter(
        (p: any) => p.position === 'MIDFIELDER'
      )
      if(req.query.order === 'ascendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        return res.json(responsePosition)
      }
      if(req.query.order === 'descendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        return res.json(ordered)
      }
      return res.json(responsePosition)
    }
    
    if(req.params.position === 'attacker') {
      const responsePosition = response.filter(
        (p: any) => p.position === 'ATTACKER'
      )
      if(req.query.order === 'ascendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        return res.json(responsePosition)
      }
      if(req.query.order === 'descendent') {
        const ordered = responsePosition.sort((a: any, b: any) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        return res.json(ordered)
      }
      return res.json(responsePosition)
    }
    res.json(response)
  }catch(error){
    res.status(404).send({mensaje: "Error reading database", error: error})
  }
}

export default getPlayerByPosition
