-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_playerId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DEFAULT E'Catu',
ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "cellphone" SET DEFAULT 12345,
ALTER COLUMN "dni" SET DEFAULT 1234,
ALTER COLUMN "image" SET DEFAULT E'url',
ALTER COLUMN "mail" SET DEFAULT E'catu@gmail.com',
ALTER COLUMN "password" SET DEFAULT E'12341234',
ALTER COLUMN "playerId" DROP NOT NULL,
ALTER COLUMN "userName" SET DEFAULT E'Catu123',
ALTER COLUMN "gender" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
