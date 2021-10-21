import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getNotifications (req: Express.Request, res: Express.Response){
    const id = req.params.id;

    try{
    let invitations = await prisma.notification.findMany({
        where:{
            playerId: parseInt(id)
        },
        include:{
            team:{
                include:{
                    player:true,
                    user: true
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
            day: invitation.day,
            hour: invitation.hour,
            duration: invitation.duration,
            attending: invitation.attending,
            teamId: invitation.team.id,
            teamName: invitation.team.name,
            teamImage: invitation.team.image,
            teamAvailable: invitation.team.available,
            teamPlayers: invitation.team.player.map(p=>{
                return{
                    id:p.id
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

export default getNotifications;

