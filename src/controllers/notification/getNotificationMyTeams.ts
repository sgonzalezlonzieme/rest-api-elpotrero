import Express from 'express'
import { PrismaClient } from '@prisma/client'
import team from '../../../prisma/seedsData/team';
const prisma = new PrismaClient()

async function getNotificationMyTeam (req: Express.Request, res: Express.Response){

    try{
    const id = parseInt(req.params.id);

    const teamUser = await prisma.team.findMany({
        where: {
            userId: id,
           },
        include:{
            notificaction:true
        },
        orderBy:{
            id:'desc'
        }
   })

   return res.json(teamUser);
}
catch(e){
    console.log("error in getting notifications",e)
}
}; 

export default getNotificationMyTeam;



    // let invitations = await prisma.notification.findMany({
    //     where:{
    //         guest: id
    //     },
    //     include:{
    //         team:{
    //             include:{
    //                 user: true
    //             }
    //         }
    //     },
    //     orderBy:{
    //         id:'desc'
    //     }
    // });

    // let response = invitations.map(invitation =>{
    //     return{
    //         id: invitation.id,
    //         day: invitation.day,
    //         hour: invitation.hour,
    //         duration: invitation.duration,
    //         attending: invitation.attending,
    //         teamId: invitation.team.id,
    //         teamName: invitation.team.name,
    //         teamQualification: Math.round(invitation.team.qualification/invitation.team.votes),
    //         userId: invitation.team.user.id,
    //         userName: invitation.team.user.name,
    //         userMail: invitation.team.user.mail,
    //         userCell: invitation.team.user.cellphone
    //     }
    // })
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
