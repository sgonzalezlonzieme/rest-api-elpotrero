/*
  Warnings:

  - You are about to drop the column `guest` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `playerId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "guest",
ADD COLUMN     "playerId" INTEGER NOT NULL;
