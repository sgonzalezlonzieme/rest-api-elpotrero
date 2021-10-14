import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import dateChange from '../timetable/functions/dateChange'

async function getFieldsAvailable (req: Express.Request, res: Express.Response){
    const calendar = req.params;
    const time = req.query;
    let day = dateChange(calendar.day);
    let hour = time.hour?.toString();

  try{  
    if(hour && calendar){
        const fields = await prisma.field.findMany({
            include:{
                timetable: {
                    where:{
                        day: day,
                        hour: hour
                    }
                }
            }
        });
    
        res.json(fields);
    };

    if(calendar && !hour){
    const fields = await prisma.field.findMany({
        include:{
            timetable: {
                where:{
                    day: day,
                }
            }
        }
    });

    res.json(fields);
    };
}
catch(e){
    console.log('error en pedido',e)
}
} 

export default getFieldsAvailable;

// [
//     {
//       "id": 1,
//       "name": "Bombonerita",
//       "address": "Irala al 1500",
//       "inicialTime": "10hs",
//       "endTime": "22hs",
//       "cost": 800,
//       "image": "URL",
//       "description": "Cancha de cesped sintetico colocado en septiembre 2021",
//       "qualification": 3,
//       "votes": 1,
//       "timetable": [
//         {
//           "id": 1,
//           "day": "2021/10/06",
//           "hour": "20hs-21hs",
//           "duration": 1,
//           "fieldId": 1,
//           "gameId": null
//         },
//         {
//           "id": 6,
//           "day": "Lunes",
//           "hour": "10:00",
//           "duration": 2,
//           "fieldId": 1,
//           "gameId": null
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "name": "Ferroviarios",
//       "address": "9 de julio al 600",
//       "inicialTime": "10hs",
//       "endTime": "22hs",
//       "cost": 1000,
//       "image": "URL",
//       "description": "Cancha recientemente pintada y con nuevos arcos",
//       "qualification": 3,
//       "votes": 1,
//       "timetable": [
//         {
//           "id": 2,
//           "day": "Lunes",
//           "hour": "20hs-21hs",
//           "duration": 1,
//           "fieldId": 2,
//           "gameId": null
//         },
//         {
//           "id": 3,
//           "day": "Lunes",
//           "hour": "20hs-21hs",
//           "duration": 1,
//           "fieldId": 2,
//           "gameId": null
//         },
//         {
//           "id": 4,
//           "day": "Lunes",
//           "hour": "20hs-21hs",
//           "duration": 1,
//           "fieldId": 2,
//           "gameId": null
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "name": "El ciclon",
//       "address": "Av. La Plata al 3100",
//       "inicialTime": "10hs",
//       "endTime": "22hs",
//       "cost": 900,
//       "image": "URL",
//       "description": "Cancha utilizada especialmente de noche con nuevo sistema de riego",
//       "qualification": 3,
//       "votes": 1,
//       "timetable": [
//         {
//           "id": 5,
//           "day": "Lunes",
//           "hour": "10:00",
//           "duration": 1,
//           "fieldId": 3,
//           "gameId": null
//         }
//       ]
//     }
//   ]