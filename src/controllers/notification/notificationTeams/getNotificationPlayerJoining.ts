import Express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getNotificationPlayer (req: Express.Request, res: Express.Response){

    const id = parseInt(req.params.id);
    
    try{
        let myTeamNotification = await prisma.team.findMany({
            where: {
                userId: id,
               },
            include:{
                notificactionTeams: 
                {
                    where:{
                        attending:"PENDING"
                    },
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
        let response = myTeamNotification.map(team =>{
            if(team.notificactionTeams.length){
            return{
                id: team.id,
                teamName: team.name,
                notification: team.notificactionTeams.map(n =>{
                    return{
                        notificationId: n.id,
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

        return res.json(response)

    }
   

catch(e){
    console.log("error in getting notifications",e)
}
}; 

export default getNotificationPlayer;

// [
//     {
//       "id": 8,
//       "teamName": "GRUPO HALCON",
//       "notification": "Sin notificaciones"
//     },
//     {
//       "id": 2,
//       "teamName": "A.C.D.",
//       "notification": [
//         {
//           "notificationId": 1,
//           "day": "16/10/2021",
//           "hour": "13:00",
//           "duration": 1,
//           "attending": "PENDING",
//           "createdAt": "2021-10-20T11:21:39.733Z",
//           "playerPosition": "GOALKEEPER",
//           "playerQualification": 5,
//           "playerName": "Jorden Dodson",
//           "playerId": 1,
//           "playerImage": "https://elcomercio.pe/resizer/HaSt-OxS5Ka1U3uIdvTtb0UccSQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YOBYBB2WL5CQFEP553TMA6CKV4.png",
//           "playerMail": "integer@etarcu.edu",
//           "playerCell": -2130542016
//         },