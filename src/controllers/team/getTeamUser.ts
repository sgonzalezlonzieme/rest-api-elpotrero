import Express from 'express';
import { PrismaClient } from '@prisma/client'
import playerInfo from './functions/playerInfo';
const prisma = new PrismaClient()


async function getTeamUser(req: Express.Request, res: Express.Response){
         
    let query = req.query 

    let userId: any = query.id?.toString()
 try{
    const team = await prisma.team.findMany({
         where: {
             userId: parseInt(userId),
            },

         include: {
             player: {
                 include:{
                    user:true
                 }
             }
         }
    })
    
    // let player = playerInfo(team)
    
    const response = team.map(t =>{
        return{
            id: t.id,
            name: t.name,
            image: t.image,
            qualification: t.qualification,
            votes: t.votes,
            available: t.available,
            players: t.player.map(p =>{
                return{
                    id: p.user[0].id,
                    position: p.position,
                    name: p.user[0].name,
                    qualification:Math.round(p.qualification/p.votes)
                }
            })
        }
    })
    
    return  res.json(response)
    }
    catch(e){
        console.log(e)
    }
}

export default getTeamUser

