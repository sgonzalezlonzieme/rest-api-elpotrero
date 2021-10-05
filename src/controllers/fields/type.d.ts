import { Fields } from ".prisma/client"


export default interface Field {
    name: string,
    address: string,
    inicialTime: string,
    endTime: string,
    cost: number,
    image: string,
    description: string,
}


// model Field {
//     id Int @id @default(autoincrement())
//     number Fields
//     inicialTime String
//     endTime String
//     cost Int //Ver si se puede poner con signo de peso antes del Int
//     image String
//     description String
//     timetable Field_Timetable[]
//   }