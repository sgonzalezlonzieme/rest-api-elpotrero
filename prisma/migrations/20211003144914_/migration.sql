/*
  Warnings:

  - Added the required column `endTime` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicialTime` to the `Field` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Field" ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "inicialTime" TEXT NOT NULL;
