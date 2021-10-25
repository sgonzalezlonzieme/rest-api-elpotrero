import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getNotificationsRespond (req: Express.Request, res: Express.Response){
    const id = req.params.id;

    try{
    let invitations = await prisma.notificationTeams.findMany({
        where:{
            playerId: parseInt(id)
        },
        include:{
            team:{
                include:{
                    user: true,
                    player:true
                }
            }
        },
        orderBy:{
            id:'desc'
        }
    });

    let response = invitations.map(invitation =>{
        return{
            id: invitation.id,
            attending: invitation.attending,
            teamId: invitation.team.id,
            teamName: invitation.team.name,
            teamImage: invitation.team.image,
            teamAvailable: invitation.team.available,
            teamPlayers : invitation.team.player.map(t =>{
                return{
                    id: t.id
                }
            }),
            teamQualification: Math.round(invitation.team.qualification/invitation.team.votes),
            userId: invitation.team.user.id,
            userName: invitation.team.user.name,
            userMail: invitation.team.user.mail,
            userCell: invitation.team.user.cellphone
        }
    })
    
   return res.json(response);
}
catch(e){
    console.log("error in getting notifications",e)
}
}; 

export default getNotificationsRespond;

