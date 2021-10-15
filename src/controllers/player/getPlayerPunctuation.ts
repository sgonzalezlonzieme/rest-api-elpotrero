import Express from 'express';
//import  Player  from './type'
import { PrismaClient } from '@prisma/client';
import mapPlayer from './functions/mapPlayer';
const prisma = new PrismaClient();

async function getPlayersPunctuation (req: Express.Request, res: Express.Response){
  try{
    const allPlayers = await prisma.player.findMany({
      include: {
        user: true,
      }
    })
    const response = mapPlayer(allPlayers);
    if(req.params.order === 'ascendent') {
      const responseOrderedAsc = response.sort(
        (a: any, b: any) => a.punctuation - b.punctuation
      )
      return res.json(responseOrderedAsc)
    }
    if(req.params.order === 'descendent') {
      const responseOrderedDes = response.sort(
        (a:any, b: any) => b.punctuation - a.punctuation
      )
      return res.json(responseOrderedDes)
    }
    if(req.params.order === '1') {
      const responsePunctuation1 = response.filter(
        (p: any) => p.punctuation === 1
      )
      return res.json(responsePunctuation1)
    }
    if(req.params.order === '2') {
      const responsePunctuation2 = response.filter(
        (p: any) => p.punctuation === 2
      )
      return res.json(responsePunctuation2)
    }
    if(req.params.order === '3') {
      const responsePunctuation3 = response.filter(
        (p: any) => p.punctuation === 3
      )
      return res.json(responsePunctuation3)
    }
    if(req.params.order === '4') {
      const responsePunctuation4 = response.filter(
        (p: any) => p.punctuation === 4
      )
      return res.json(responsePunctuation4)
    }
    if(req.params.order === '5') {
      const responsePunctuation5 = response.filter(
        (p: any) => p.punctuation === 5
      )
      return res.json(responsePunctuation5)
    }
    res.json(response)
  }catch(error){
    res.status(404).send({mensaje: "Error reading database", error: error})
  }
}

export default getPlayersPunctuation