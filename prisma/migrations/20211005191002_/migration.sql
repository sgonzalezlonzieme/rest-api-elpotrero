-- DropForeignKey
ALTER TABLE "TimeTable" DROP CONSTRAINT "TimeTable_gameId_fkey";

-- AlterTable
ALTER TABLE "TimeTable" ALTER COLUMN "gameId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeTable" ADD CONSTRAINT "TimeTable_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
