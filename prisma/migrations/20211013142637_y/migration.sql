/*
  Warnings:

  - Made the column `image` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_playerId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "cellphone" DROP NOT NULL,
ALTER COLUMN "dni" DROP NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "playerId" DROP NOT NULL,
ALTER COLUMN "googleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
