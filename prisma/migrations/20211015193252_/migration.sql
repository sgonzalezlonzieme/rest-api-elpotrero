/*
  Warnings:

  - You are about to drop the column `teamId` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `gameId` on the `TimeTable` table. All the data in the column will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserGoogle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TimeTable" DROP CONSTRAINT "TimeTable_gameId_fkey";

-- DropIndex
DROP INDEX "TimeTable_gameId_key";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "teamId",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TimeTable" DROP COLUMN "gameId";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "UserGoogle";

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
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players_Teams" ADD FOREIGN KEY ("A") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players_Teams" ADD FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
