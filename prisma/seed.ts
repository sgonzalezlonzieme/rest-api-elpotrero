import { PrismaClient } from "@prisma/client";
import users from './seedsData/user'
import fields from './seedsData/fields'
import teams from './seedsData/team'
import timetables from "./seedsData/timetable";
import notifications from "./seedsData/notification";
import notificationTeams from './seedsData/notificationTeams'

const prisma = new PrismaClient();

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

    teams.forEach(async(team) => {
        await prisma.team.create({
            data: team
        });
    })
    

    timetables.forEach(async(timetable) => {
      await prisma.timeTable.create({
          data: timetable
      });
  })

    notifications.forEach(async(notification) => {
      await prisma.notification.create({
          data: notification
      });
  })
  
   notificationTeams.forEach(async(notification) => {
    await prisma.notificationTeams.create({
        data: notification
    });
})
  
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  
