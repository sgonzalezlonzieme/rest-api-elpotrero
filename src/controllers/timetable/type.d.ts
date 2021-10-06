import { TimeTable } from ".prisma/client"


export default interface TimeTable {
    day: string,
    hour: string,
    duration: number,
    field:Field,
    game: Game,
}


// model TimeTable{
//     id Int @id @default(autoincrement())
//     day String
//     hour String
//     field Field @relation(fields: [fieldId], references: [id])
//     fieldId Int
//     game Game @relation(fields: [gameId], references: [id])
//     gameId Int
//   }