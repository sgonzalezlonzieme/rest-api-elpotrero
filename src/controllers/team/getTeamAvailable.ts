import Express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function getTeamAvailable(req: Express.Request, res: Express.Response){
         
    const team = await prisma.team.findMany({
         where: {
             available:true
            },

        include:{
            user: {
                include:{
                    player: true
                }
            },
            player:{
                include:{
                    user:true
                }
            }
        }
    })

    
    let response = team.map(t =>{
        return{
        id: t.id,
        name: t.name,
        image: t.image,
        qualification: Math.round(t.qualification/t.votes),
        available: t.available,
        user: t.user.name,
        userId: t.user.id,
        players: t.player.map(tp =>{
            return{
                id: tp.user[0].id,
                playerName: tp.user[0].name,
                position: tp.position,
                qualification: Math.round(tp.qualification/tp.votes)
            }
        })
    }
    })

  response = response.sort((a: any, b: any) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

    return res.json(response)
}

export default getTeamAvailable

