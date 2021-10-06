/*
  Warnings:

  - You are about to drop the `FieldCharacters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FieldCharacters" DROP CONSTRAINT "FieldCharacters_fieldId_fkey";

-- DropTable
DROP TABLE "FieldCharacters";

-- CreateTable
CREATE TABLE "FieldCharacteristics" (
    "id" SERIAL NOT NULL,
    "floorType" "FloorType" NOT NULL,
    "light" BOOLEAN NOT NULL,
    "soccerField" INTEGER NOT NULL DEFAULT 5,
    "roofed" BOOLEAN NOT NULL,
    "fieldId" INTEGER NOT NULL,

    CONSTRAINT "FieldCharacteristics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FieldCharacteristics_fieldId_key" ON "FieldCharacteristics"("fieldId");

-- AddForeignKey
ALTER TABLE "FieldCharacteristics" ADD CONSTRAINT "FieldCharacteristics_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "TimeTable_gameId_unique" RENAME TO "TimeTable_gameId_key";
