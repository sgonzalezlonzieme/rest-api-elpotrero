/*
  Warnings:

  - You are about to drop the `_Teams_Players` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Teams_Players" DROP CONSTRAINT "_Teams_Players_A_fkey";

-- DropForeignKey
ALTER TABLE "_Teams_Players" DROP CONSTRAINT "_Teams_Players_B_fkey";

-- DropTable
DROP TABLE "_Teams_Players";

-- CreateTable
CREATE TABLE "Teams_Players" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Teams_Players_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Teams_Players" ADD CONSTRAINT "Teams_Players_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teams_Players" ADD CONSTRAINT "Teams_Players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
