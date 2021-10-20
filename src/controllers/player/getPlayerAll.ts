import Express from 'express';
import { PrismaClient } from '@prisma/client';
import mapPlayer from './functions/mapPlayer';
import  Player  from './type';
const prisma = new PrismaClient();

async function getPlayerAll (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.player.findMany({
      include: {
        user: true,
      }
  })
  let response = mapPlayer(allPlayers)

  if(req.query.search) {
    const query: any = req.query.search;
    response = response.filter((p: any) => {
      return p.name.toUpperCase().includes(query.toUpperCase());
    })
  }

  if(req.query.gender === 'male') {
    response = response.filter((p: Player) => p.gender === 'MALE')
  }
  if(req.query.gender === 'female') {
    response = response.filter((p: Player) => p.gender === 'FEMALE')
  }
  if(req.query.gender === 'undefined') {
    response = response.filter((p: Player) => p.gender === 'UNDEFINED')
  }

  if(req.query.position === 'goalkeeper') {
    response = response.filter((p: Player) => p.position === 'GOALKEEPER')
  }
  if(req.query.position === 'defender') {
    response = response.filter((p: Player) => p.position === 'DEFENDER')
  }
  if(req.query.position === 'midfielder') {
    response = response.filter((p: Player) => p.position === 'MIDFIELDER')
  }
  if(req.query.position === 'attacker') {
    response = response.filter((p: Player) => p.position === 'ATTACKER')
  }

  if(req.query.punctuation === '1') {
    response = response.filter((p: Player) => p.punctuation === 1)
  }
  if(req.query.punctuation === '2') {
    response = response.filter((p: Player) => p.punctuation === 2)
  }
  if(req.query.punctuation === '3') {
    response = response.filter((p: Player) => p.punctuation === 3)
  }
  if(req.query.punctuation === '4') {
    response = response.filter((p: Player) => p.punctuation === 4)
  }
  if(req.query.punctuation === '5') {
    response = response.filter((p: Player) => p.punctuation === 5)
  }

  if(req.query.order === 'ascendent') {
    response = response.sort((a: Player, b: Player) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if(req.query.order === 'descendent') {
    response = response.sort((a: Player, b: Player) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  if(req.query.qualification === 'ascendent') {
    response = response.sort(
      (a: Player, b: Player) => a.punctuation - b.punctuation
    )
  }
  if(req.query.qualification === 'descendent') {
    response = response.sort(
      (a: Player, b: Player) => b.punctuation - a.punctuation
    )
  }

  res.json(response)
  }catch(error){
    res.status(404).send({mensaje: "Error reading database", error: error})
  }
}

export default getPlayerAll;