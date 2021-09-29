/*
  Warnings:

  - You are about to drop the column `teamId1` on the `Game` table. All the data in the column will be lost.
  - Added the required column `teamId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('FEMALE', 'MALE', 'UNDEFINED');

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_teamId1_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "teamId1",
ADD COLUMN     "teamId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gender" "Gender" NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
