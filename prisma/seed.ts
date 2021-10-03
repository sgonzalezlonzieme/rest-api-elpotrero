import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import users from './seedsData/user'
import fields from './seedsData/fields'
import timetables from "./seedsData/timetable";
import field_timetables from "./seedsData/field_timetable";


async function main() {
    users.forEach(async(user) => {
        await prisma.user.create({
            data: user
          });
    })
    fields.forEach(async(field) => {
      await prisma.field.create({
          data: field
        });
    })
   timetables.forEach(async(timetable) =>{
     await prisma.timeTable.create({
        data: timetable
     })
   })
  // field_timetables.forEach(async(field_timetable)=>{
  //   await prisma.field.create({
  //       data:field_timetable
  //   })
  // })

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  
