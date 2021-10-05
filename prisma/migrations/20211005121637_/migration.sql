/*
  Warnings:

  - You are about to drop the column `number` on the `Field` table. All the data in the column will be lost.
  - You are about to drop the column `field_timetableId` on the `Game` table. All the data in the column will be lost.
  - The `qualification` column on the `Player` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `qualification` column on the `Team` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Field_Timetable` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[gameId]` on the table `TimeTable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fieldId` to the `TimeTable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameId` to the `TimeTable` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FloorType" AS ENUM ('SYNTHETIC', 'GRASS', 'CEMENT', 'RUBBER');

-- DropForeignKey
ALTER TABLE "Field_Timetable" DROP CONSTRAINT "Field_Timetable_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "Field_Timetable" DROP CONSTRAINT "Field_Timetable_timetableId_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_field_timetableId_fkey";

-- AlterTable
ALTER TABLE "Field" DROP COLUMN "number",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "qualification" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "votes" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "field_timetableId";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "votes" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "qualification",
ADD COLUMN     "qualification" INTEGER NOT NULL DEFAULT 3;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "votes" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "qualification",
ADD COLUMN     "qualification" INTEGER NOT NULL DEFAULT 3;

-- AlterTable
ALTER TABLE "TimeTable" ADD COLUMN     "fieldId" INTEGER NOT NULL,
ADD COLUMN     "gameId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Field_Timetable";

-- DropEnum
DROP TYPE "Fields";

-- DropEnum
DROP TYPE "Stars";

-- CreateTable
CREATE TABLE "FieldCharacters" (
    "id" SERIAL NOT NULL,
    "floorType" "FloorType" NOT NULL,
    "light" BOOLEAN NOT NULL,
    "soccerField" INTEGER NOT NULL DEFAULT 5,
    "roofed" BOOLEAN NOT NULL,
    "fieldId" INTEGER NOT NULL,

    CONSTRAINT "FieldCharacters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FieldCharacters_fieldId_unique" ON "FieldCharacters"("fieldId");

-- CreateIndex
CREATE UNIQUE INDEX "TimeTable_gameId_unique" ON "TimeTable"("gameId");

-- AddForeignKey
ALTER TABLE "FieldCharacters" ADD CONSTRAINT "FieldCharacters_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeTable" ADD CONSTRAINT "TimeTable_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeTable" ADD CONSTRAINT "TimeTable_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
