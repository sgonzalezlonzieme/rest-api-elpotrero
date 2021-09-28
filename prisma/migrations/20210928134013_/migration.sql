/*
  Warnings:

  - You are about to drop the column `players` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "players";

-- CreateTable
CREATE TABLE "TeamPlayers" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "TeamPlayers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeamPlayers" ADD CONSTRAINT "TeamPlayers_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayers" ADD CONSTRAINT "TeamPlayers_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
