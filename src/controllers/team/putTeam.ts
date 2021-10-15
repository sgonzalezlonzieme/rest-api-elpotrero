import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Team from './type'


async function putTeam (req: Express.Request, res: Express.Response){
    try{
        let teamId = parseInt(req.params.id)
        const team: Team = req.body

        const updateTeam = await prisma.team.update({
            where:{
                id:teamId
            },
            data:{
                name: team.name,
                image: team.image,
                available: team.available,
                player:{
                    set:team.player 
                }
            }

        })
       return res.json(updateTeam)
    }
    catch(e){
        console.log('error de actualizacion de cancha', e)
    }

} 

export default putTeam