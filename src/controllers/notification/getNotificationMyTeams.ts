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


// id: invitation.id,
// day: invitation.day,
// hour: invitation.hour,
// duration: invitation.duration,
// attending: invitation.attending,
// teamId: invitation.team.id,
// teamName: invitation.team.name,
// teamQualification: Math.round(invitation.team.qualification/invitation.team.votes),
// userId: invitation.team.user.id,
// userName: invitation.team.user.name,
// userMail: invitation.team.user.mail,
// userCell: invitation.team.user.cellphone

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
