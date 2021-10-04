/*
  Warnings:

  - You are about to drop the `Team_Player` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamId` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Team_Player" DROP CONSTRAINT "Team_Player_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Team_Player" DROP CONSTRAINT "Team_Player_teamId_fkey";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "teamId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Team_Player";

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
