import Field from "../../src/controllers/fields/type"
import { Prisma } from "@prisma/client";


const fields: Prisma.FieldCreateInput[] = [
{
    name: "Ferroviarios",
    address: "9 de julio al 600",
    cost: 1000,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRP-dO7WnUcEfTrHysyAGkTO9tc48ITWl0Q&usqp=CAU",
    fieldCharacteristics:{
        create: {
            floorType: "SYNTHETIC",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NyMmDUY4zUA-ZRLx70WWpXfwkuISLMmIDA&usqp=CAU",
    // description: "Cancha de cesped sintetico colocado en septiembre 2021"
    fieldCharacteristics:{
        create:{
            floorType: "GRASS",
            light: true,
            roofed:false,
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
    image: "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_agentina-2000.jpg",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "CEMENT",
            light: false,
            roofed: false,
            soccerField: 5
        }
    }
},

{
    name: "El calamar",
    address: "Zufriategui al 800",
    cost: 1000,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_jogging-sports.jpg",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "CEMENT",
            light: true,
            roofed: true,
            soccerField: 5
        }
    }
},

{
    name: "El millonario",
    address: "Av amancio alcorta al 2000",
    cost: 1000,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtf3oxZeGpGoRKJPPtD2zPj3fshGyREEwkQ&usqp=CAU",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "SYNTHETIC",
            light: true,
            roofed: false,
            soccerField: 5
        }
    }
},
{
    name: "Gambeta",
    address: "Costa Salguero",
    cost: 1200,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "http://http2.mlstatic.com/D_796786-MLA43676959413_102020-O.jpg",
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
{
    name: "La Capital",
    address: "Av 25 de mayo al 5000",
    cost: 1200,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NyMmDUY4zUA-ZRLx70WWpXfwkuISLMmIDA&usqp=CAU",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "GRASS",
            light: true,
            roofed: false,
            soccerField: 5
        }
    }
},
{
    name: "Futbol5",
    address: "Av. boedo al 500",
    cost: 850,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://storage.googleapis.com/diariodemocracia/news/25d83ae2dc9411eabaea42010a8e000a.jpg",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "CEMENT",
            light: true,
            roofed: true,
            soccerField: 5
        }
    }
},
{
    name: "Hay equipo",
    address: "Santa Magdalena 750",
    cost: 850,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqJD7rP4GCSfyjW84VzmAEmjrc1kthqK2wA&usqp=CAU",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "SYNTHETIC",
            light: true,
            roofed: true,
            soccerField: 5
        }
    }
},
{
    name: "Grun",
    address: "17 de septiembre al 700",
    cost: 900,
    inicialTime:"10:00", 
    endTime: "22:00",
    image: "https://donpotrero.com/img/posts/6/canchasnegocio_sm.jpg",
    // description: "Cancha utilizada especialmente de noche con nuevo sistema de riego"
    fieldCharacteristics:{
        create:{
            floorType: "SYNTHETIC",
            light: true,
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