/*
  Warnings:

  - Added the required column `userId` to the `TimeTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimeTable" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeTable" ADD CONSTRAINT "TimeTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
