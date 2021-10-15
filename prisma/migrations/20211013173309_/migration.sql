/*
  Warnings:

  - Added the required column `userName` to the `UserGoogle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserGoogle" ADD COLUMN     "userName" TEXT NOT NULL;
