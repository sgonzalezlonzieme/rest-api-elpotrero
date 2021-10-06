import { Fields } from ".prisma/client"
import { FieldCharacteristics } from ".prisma/client"


export default interface Field {
    name: string,
    address: string,
    inicialTime: string,
    endTime: string,
    cost: number,
    image: string,
    fieldCharacteristics: FieldCharacteristics
}


// interface FieldCharacteristic{
//     floorType: string,
//     light: boolean,
//     soccerField: number,
//     roofed: boolean
// }

// model Field {
//     id Int @id @default(autoincrement())
//     name String
//     address String
//     inicialTime String // cambio de modelo se agrego inicialTime y endTime
//     endTime String
//     cost Int //Ver si se puede poner con signo de peso antes del Int
//     image String
//     description String
//     timetable TimeTable[]
//     qualification Int @default(3)
//     votes Int @default(1)
//     fieldCharacteristics FieldCharacteristics?
//   }

// model FieldCharacters {
//     id Int @id @default(autoincrement())
//     floorType FloorType
//     light Boolean 
//     soccerField Int @default(5)
//     roofed Boolean
//     field Field @relation(fields: [fieldId], references: [id])
//     fieldId Int
//   }