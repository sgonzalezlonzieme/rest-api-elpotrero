import Express from 'express';
import { PrismaClient } from '@prisma/client'
import playerInfo from './functions/playerInfo';
import captainInfo from './functions/captainInfo(user)';
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
    console.log(team)
    let player = playerInfo(team)
    let captain = captainInfo(team)
    
    const response = team.map(t =>{
        return{
        id: t.id,
        name: t.name,
        image: t.image,
        qualification: Math.round(t.qualification/t.votes),
        available: t.available,
        user: captain[0],
        players: player[0]
    }
    })

    return res.json(response)
}

export default getTeamAvailable

// [
//     {
//       "id": 3,
//       "name": "Ferro",
//       "image": "url",
//       "qualification": 17,
//       "votes": 5,
//       "available": true,
//       "userId": 4,
//       "user": {
//         "id": 4,
//         "name": "Abdul Callahan",
//         "userName": "Herrod Gilmore",
//         "gender": "MALE",
//         "dni": 45965804,
//         "birthday": "07/01/2000",
//         "cellphone": 1913190998,
//         "mail": "sapien.aenean@sagittisduisgravida.co.uk",
//         "image": "https://elcomercio.pe/resizer/HaSt-OxS5Ka1U3uIdvTtb0UccSQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YOBYBB2WL5CQFEP553TMA6CKV4.png",
//         "password": "UHM62YPJ8EP",
//         "playerId": 4
//       },
//       "player": [
//         {
//           "id": 2,
//           "position": "DEFENDER",
//           "qualification": 22,
//           "votes": 6,
//           "available": false,
//           "user": [
//             {
//               "id": 2,
//               "name": "Jerome Frank",
//               "userName": "Jerome",
//               "gender": "MALE",
//               "dni": 28713237,
//               "birthday": "08/07/1987",
//               "cellphone": 117117415,
//               "mail": "rutrum.fusce@nulla.net",
//               "image": "https://elcomercio.pe/resizer/HaSt-OxS5Ka1U3uIdvTtb0UccSQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YOBYBB2WL5CQFEP553TMA6CKV4.png",
//               "password": "YQZ78CMB1JP",
//               "playerId": 2
//             }
//           ]
//         },
//         {
//           "id": 3,
//           "position": "DEFENDER",
//           "qualification": 20,
//           "votes": 4,
//           "available": false,
//           "user": [
//             {
//               "id": 3,
//               "name": "Bertha Hammond",
//               "userName": "Bertha",
//               "gender": "FEMALE",
//               "dni": 16547386,
//               "birthday": "20/08/1986",
//               "cellphone": 801838381,
//               "mail": "nunc@nisisemsemper.com",
//               "image": "http://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/06/10/15601767026611.jpg",
//               "password": "LBF94UDG2SO",
//               "playerId": 3
//             }
//           ]
//         }
//       ]
//     }
//   ]