/*
  Warnings:

  - You are about to drop the column `Attending` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "Attending",
DROP COLUMN "CreatedAt",
ADD COLUMN     "attending" "Attending" NOT NULL DEFAULT E'PENDING',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
