/*
  Warnings:

  - The `attending` column on the `Notification` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "attending",
ADD COLUMN     "attending" TEXT NOT NULL DEFAULT E'PENDING';

-- DropEnum
DROP TYPE "Attending";
