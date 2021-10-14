/*
  Warnings:

  - You are about to drop the `Teams_Players` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Teams_Players" DROP CONSTRAINT "Teams_Players_playerId_fkey";

-- DropForeignKey
ALTER TABLE "Teams_Players" DROP CONSTRAINT "Teams_Players_teamId_fkey";

-- DropTable
DROP TABLE "Teams_Players";

-- CreateTable
CREATE TABLE "_Teams_Players" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Teams_Players_AB_unique" ON "_Teams_Players"("A", "B");

-- CreateIndex
CREATE INDEX "_Teams_Players_B_index" ON "_Teams_Players"("B");

-- AddForeignKey
ALTER TABLE "_Teams_Players" ADD FOREIGN KEY ("A") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Teams_Players" ADD FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
