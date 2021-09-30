import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import users from './seedsData/user'


async function main() {
    users.forEach(async(user) => {
        await prisma.user.create({
            data: user
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
