/*
  Warnings:

  - You are about to drop the column `available` on the `Field_Timetable` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicialTime` to the `Field` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Field" ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "inicialTime" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Field_Timetable" DROP COLUMN "available";
