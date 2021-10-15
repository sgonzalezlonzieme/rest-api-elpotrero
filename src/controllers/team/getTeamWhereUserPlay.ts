import Express from 'express';
import { PrismaClient } from '@prisma/client'
import playerInfo from './functions/playerInfo';
const prisma = new PrismaClient()


async function getTeamWhereUserPlay(req: Express.Request, res: Express.Response){
         
    let userId = parseInt(req.params.id) 

 try{
    const teamUser = await prisma.team.findMany({
         where: {
             userId: userId,
             available: true,
            },
    })
    
    const teamplayer = await prisma.team.findMany({
        where: {
            available: true,
            },
        include:{
            player:{
                where:{
                    id:userId
                }
            }
        }
   })

   let teamPlayer = teamplayer.filter(t => t.player.length).map((tp)=>{
       return{
            id: tp.id,
            name: tp.name,
            image: tp.image,
            qualification: tp.qualification,
            votes: tp.votes,
            available: tp.available,
            userId: tp.userId
       }
   })
   
   const response = [...teamUser, ...teamPlayer]

    return  res.json(response)
    }
    catch(e){
        console.log(e)
    }
}

export default getTeamWhereUserPlay