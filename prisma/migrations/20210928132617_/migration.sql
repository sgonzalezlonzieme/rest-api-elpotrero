/*
  Warnings:

  - You are about to drop the column `username` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the `Player2` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `position` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cellphone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mail` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('GOALKEEPER', 'DEFENDER', 'MIDFIELDER', 'ATTACKER');

-- CreateEnum
CREATE TYPE "Stars" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateEnum
CREATE TYPE "Fields" AS ENUM ('ONE', 'TWO', 'THREE');

-- DropIndex
DROP INDEX "Player_username_key";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "username",
ADD COLUMN     "position" "Position" NOT NULL,
ADD COLUMN     "qualification" "Stars" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthday" TEXT,
ADD COLUMN     "cellphone" INTEGER NOT NULL,
ADD COLUMN     "dni" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "mail" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "playerId" INTEGER NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Player2";

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "players" TEXT[],
    "image" TEXT,
    "qualifaction" "Stars" NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" SERIAL NOT NULL,
    "number" "Fields" NOT NULL,
    "cost" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeTable" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "hour" TEXT NOT NULL,

    CONSTRAINT "TimeTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_dni_key" ON "User"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
