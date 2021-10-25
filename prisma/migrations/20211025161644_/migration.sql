/*
  Warnings:

  - You are about to drop the column `username` on the `Player` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dni]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `position` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('GOALKEEPER', 'DEFENDER', 'MIDFIELDER', 'ATTACKER');

-- CreateEnum
CREATE TYPE "FloorType" AS ENUM ('SYNTHETIC', 'GRASS', 'CEMENT');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('FEMALE', 'MALE', 'UNDEFINED');

-- DropIndex
DROP INDEX "Player_username_key";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "username",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "position" "Position" NOT NULL,
ADD COLUMN     "qualification" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "votes" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthday" TEXT,
ADD COLUMN     "cellphone" INTEGER NOT NULL DEFAULT 1234,
ADD COLUMN     "dni" INTEGER NOT NULL DEFAULT 1234,
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "image" TEXT NOT NULL DEFAULT E'Por default',
ADD COLUMN     "mail" TEXT DEFAULT E'Por default',
ADD COLUMN     "password" TEXT NOT NULL DEFAULT E'Por default',
ADD COLUMN     "playerId" INTEGER,
ADD COLUMN     "userName" TEXT NOT NULL DEFAULT E'Por default',
ALTER COLUMN "name" SET DEFAULT E'Por default';

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "qualification" INTEGER NOT NULL DEFAULT 3,
    "votes" INTEGER NOT NULL DEFAULT 1,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "inicialTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,
    "qualification" INTEGER NOT NULL DEFAULT 3,
    "votes" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FieldCharacteristics" (
    "id" SERIAL NOT NULL,
    "floorType" "FloorType" NOT NULL,
    "light" BOOLEAN NOT NULL,
    "soccerField" INTEGER NOT NULL DEFAULT 5,
    "roofed" BOOLEAN NOT NULL,
    "fieldId" INTEGER NOT NULL,

    CONSTRAINT "FieldCharacteristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeTable" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 1,
    "fieldId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TimeTable_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "FieldCharacteristics_fieldId_key" ON "FieldCharacteristics"("fieldId");

-- CreateIndex
CREATE UNIQUE INDEX "_Players_Teams_AB_unique" ON "_Players_Teams"("A", "B");

-- CreateIndex
CREATE INDEX "_Players_Teams_B_index" ON "_Players_Teams"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_dni_key" ON "User"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldCharacteristics" ADD CONSTRAINT "FieldCharacteristics_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeTable" ADD CONSTRAINT "TimeTable_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeTable" ADD CONSTRAINT "TimeTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
