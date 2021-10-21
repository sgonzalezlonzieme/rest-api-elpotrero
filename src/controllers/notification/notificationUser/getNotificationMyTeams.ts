import Express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getNotificationMyTeam (req: Express.Request, res: Express.Response){

    try{
    const id = parseInt(req.params.id);

    let teamUser = await prisma.team.findMany({
        where: {
            userId: id,
           },
        include:{
            player:true,
            notificaction: 
            {
                include:{
                    player: {
                        include:{
                            user: true
                        }
                    }
                }
            }
        },
        orderBy:{
            id:'desc'
        }
    })
    let response = teamUser.map(team =>{
        if(team.notificaction.length){
        return{
            id: team.id,
            teamName: team.name,
            teamImage: team.image,
            teamAvailable: team.available,
            teamPlayers: team.player.map(p =>{
                return{
                    id: p.id
                }
            }),
            notification: team.notificaction.map(n =>{
                return{
                    notificationId: n.id,
                    day:n.day,
                    hour:n.hour,
                    duration: n.duration,
                    attending: n.attending,
                    createdAt: n.createdAt,
                    playerPosition: n.player.position,
                    playerQualification: Math.round(n.player.qualification/n.player.votes),
                    playerName: n.player.user[0].name,
                    playerId: n.player.user[0].id,
                    playerImage: n.player.user[0].image,
                    playerMail: n.player.user[0].mail,
                    playerCell: n.player.user[0].cellphone,
                }
            })
        }
        }
        else{
            return {
                id:team.id,
                teamName: team.name,
                notification:"Sin notificaciones"
            }
        }
    })
   return res.json(response);
}
catch(e){
    console.log("error in getting notifications",e)
}
}; 

export default getNotificationMyTeam;

