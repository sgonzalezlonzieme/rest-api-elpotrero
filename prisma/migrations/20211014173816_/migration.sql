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
CREATE TABLE "_Players_Teams" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Players_Teams_AB_unique" ON "_Players_Teams"("A", "B");

-- CreateIndex
CREATE INDEX "_Players_Teams_B_index" ON "_Players_Teams"("B");

-- AddForeignKey
ALTER TABLE "_Players_Teams" ADD FOREIGN KEY ("A") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players_Teams" ADD FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
