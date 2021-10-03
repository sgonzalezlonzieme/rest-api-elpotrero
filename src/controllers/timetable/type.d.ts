import { TimeTable } from ".prisma/client"


export default interface TimeTable {
    day: string,
    hour: string,
}


// model TimeTable{
//     id Int @id @default(autoincrement())
//     day String
//     hour String
//     field Field_Timetable[]
//   }