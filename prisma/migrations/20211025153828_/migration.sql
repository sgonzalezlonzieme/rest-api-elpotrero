/*
  Warnings:

  - You are about to drop the column `teamId` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `gameId` on the `TimeTable` table. All the data in the column will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserGoogle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TimeTable" DROP CONSTRAINT "TimeTable_gameId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_playerId_fkey";

-- DropIndex
DROP INDEX "TimeTable_gameId_key";

-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "teamId",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TimeTable" DROP COLUMN "gameId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "googleId" TEXT,
ALTER COLUMN "name" SET DEFAULT E'Por default',
ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "cellphone" SET DEFAULT 1234,
ALTER COLUMN "dni" SET DEFAULT 1234,
ALTER COLUMN "image" SET DEFAULT E'Por default',
ALTER COLUMN "mail" SET DEFAULT E'Por default',
ALTER COLUMN "password" SET DEFAULT E'Por default',
ALTER COLUMN "playerId" DROP NOT NULL,
ALTER COLUMN "userName" SET DEFAULT E'Por default',
ALTER COLUMN "gender" DROP NOT NULL;

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "UserGoogle";

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "attending" TEXT NOT NULL DEFAULT E'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationTeams" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "attending" TEXT NOT NULL DEFAULT E'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "NotificationTeams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Players_Teams" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Players_Teams_AB_unique" ON "_Players_Teams"("A", "B");

-- CreateIndex
CREATE INDEX "_Players_Teams_B_index" ON "_Players_Teams"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationTeams" ADD CONSTRAINT "NotificationTeams_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationTeams" ADD CONSTRAINT "NotificationTeams_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players_Teams" ADD FOREIGN KEY ("A") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players_Teams" ADD FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
