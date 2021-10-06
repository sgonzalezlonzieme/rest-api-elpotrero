import Field from "../../src/controllers/fields/type"
import { Prisma } from "@prisma/client";


const fields: Prisma.FieldCreateInput[] = [
{
    name: "Ferroviarios",
    address: "9 de julio al 600",
    cost: 1000,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://www.tiemposur.com.ar/uploads/noticia_galeria/2020/06/02/file_81761_main1",
    fieldCharacteristics:{
        create: {
            floorType: "CEMENT",
            light: true,
            roofed: false,
            soccerField: 5
        }
    }
    // description: "Cancha recientemente pintada y con nuevos arcos"   
    
},
{
    name: "Bombonerita",
    address: "Irala al 1500",
    cost: 800,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://www.tiemposur.com.ar/uploads/noticia_galeria/2020/06/02/file_81761_main1",
    // description: "Cancha de cesped sintetico colocado en septiembre 2021"
    fieldCharacteristics:{
        create:{
            floorType: "GRASS",
            light: true,
            roofed:true,
            soccerField: 5
        }
    }
},
{
    name: "El ciclon",
    address: "Av. La Plata al 3100",
    cost: 900,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://www.tiemposur.com.ar/uploads/noticia_galeria/2020/06/02/file_81761_main1",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "SYNTHETIC",
            light: false,
            roofed: false,
            soccerField: 5
        }
    }
},
]

export default fields

// interface CreateField{
//     name: string,
//     address: string,
//     inicialTime: string,
//     endTime: string,
//     cost: number,
//     image: string,
//     fieldCharacteristics:{
//         create:{
//             floorType: string,            
//             light: boolean,
//             roofed: boolean,
//             soccerField: number

//         }
//     }
// }