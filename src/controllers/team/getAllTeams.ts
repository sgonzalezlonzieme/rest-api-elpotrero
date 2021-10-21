import Express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function getAllTeams(req: Express.Request, res: Express.Response){
         
    const team = await prisma.team.findMany({
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

    
    const response = team.map(t =>{
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

    return res.json(response)
}

export default getAllTeams

