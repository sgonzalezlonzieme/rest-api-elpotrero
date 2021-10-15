/*
  Warnings:

  - You are about to drop the column `googleId` on the `User` table. All the data in the column will be lost.
  - Made the column `birthday` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cellphone` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dni` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `playerId` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_playerId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "googleId",
ALTER COLUMN "birthday" SET NOT NULL,
ALTER COLUMN "cellphone" SET NOT NULL,
ALTER COLUMN "dni" SET NOT NULL,
ALTER COLUMN "mail" DROP NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "playerId" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL;

-- CreateTable
CREATE TABLE "UserGoogle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "googleId" TEXT NOT NULL,

    CONSTRAINT "UserGoogle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
