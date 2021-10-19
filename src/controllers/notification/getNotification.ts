import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getNotifications (req: Express.Request, res: Express.Response){

    try{
    const id = parseInt(req.params.id);

    // const notifiactions = await prisma.notification.findMany({
    //     where:{
    //         teamId: id
    //     },
    //     orderBy:{
    //         id:'desc'
    //     }
    // });

    let invitations = await prisma.notification.findMany({
        where:{
            playerId: id
        },
        include:{
            team:{
                include:{
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
            teamQualification: Math.round(invitation.team.qualification/invitation.team.votes),
            userId: invitation.team.user.id,
            userName: invitation.team.user.name,
            userMail: invitation.team.user.mail,
            userCell: invitation.team.user.cellphone
        }
    })
    // let response = [...notifiactions, ...invitations]
    // let answer = response.sort(function(a,b){
    //     if(a.id > b.id){
    //         return -1
    //     }
    //     if(a.id < b.id){
    //         return 1
    //     }
    //     return 0
    // })
    
   return res.json(response);
}
catch(e){
    console.log("error in getting notifications",e)
}
}; 

export default getNotifications;